import React, { useEffect, useRef } from 'react';
import { isChristmasSeason } from '../lib/christmasUtils';

// ─── 1. Snowfall Canvas ───────────────────────────────────────────────────────
function SnowCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const FLAKES = 55;
    const flakes = Array.from({ length: FLAKES }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2.2 + 0.6,
      speed: Math.random() * 0.55 + 0.2,
      drift: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.45 + 0.15,
    }));

    let raf;
    function draw() {
      ctx.clearRect(0, 0, w, h);
      flakes.forEach((f) => {
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${f.opacity})`;
        ctx.fill();
        f.y += f.speed;
        f.x += f.drift;
        if (f.y > h + 5) { f.y = -5; f.x = Math.random() * w; }
        if (f.x < -5) f.x = w + 5;
        if (f.x > w + 5) f.x = -5;
      });
      raf = requestAnimationFrame(draw);
    }
    draw();

    const onResize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w; canvas.height = h;
    };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[9999]" aria-hidden="true" />;
}

// ─── 2. Fairy Lights String ───────────────────────────────────────────────────
// A wire with ~18 coloured bulbs draped just below the top of the viewport.
// Each bulb has a randomised twinkle delay so they flicker independently.
const BULB_COLORS = ['#e63946', '#f4d03f', '#2ecc71', '#3498db', '#e59a35', '#c0392b', '#27ae60'];

function FairyLights() {
  const COUNT = 22;
  const bulbs = Array.from({ length: COUNT }, (_, i) => ({
    x: (i / (COUNT - 1)) * 100,   // % across the width
    // gentle catenary sag: deepest in the middle
    sag: 2 + Math.sin((i / (COUNT - 1)) * Math.PI) * 2.8,
    color: BULB_COLORS[i % BULB_COLORS.length],
    delay: (Math.random() * 3).toFixed(2),
    duration: (1.8 + Math.random() * 2.5).toFixed(2),
  }));

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[55] pointer-events-none"
      style={{ height: '52px' }}
    >
      <svg
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        {/* Wire */}
        <path
          d={`M0,1 ${bulbs.map(b => `L${b.x},${b.sag}`).join(' ')} L100,1`}
          fill="none"
          stroke="#2a1f14"
          strokeWidth="0.25"
          strokeLinecap="round"
        />
        {/* Bulb stems */}
        {bulbs.map((b, i) => (
          <line
            key={i}
            x1={b.x} y1={b.sag}
            x2={b.x} y2={b.sag + 1.4}
            stroke="#2a1f14"
            strokeWidth="0.18"
          />
        ))}
      </svg>

      {/* Bulbs as DOM elements (positioned absolutely) for glow CSS animation */}
      {bulbs.map((b, i) => (
        <span
          key={i}
          className="fairy-bulb"
          style={{
            left: `${b.x}%`,
            top: `${(b.sag / 10) * 52 + 6}px`,
            background: b.color,
            boxShadow: `0 0 6px 2px ${b.color}99, 0 0 12px 4px ${b.color}44`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

// ─── 3. Mouse Cursor Trail ────────────────────────────────────────────────────
// Tiny ❄ snowflake sprites that appear at the cursor and drift away.
function CursorTrail() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Don't run on touch-only devices
    if (window.matchMedia('(hover: none)').matches) return;

    const flakes = ['❄', '✦', '·', '❅'];
    let last = 0;

    const onMove = (e) => {
      const now = Date.now();
      if (now - last < 80) return; // throttle: max ~12/s
      last = now;

      const el = document.createElement('span');
      el.textContent = flakes[Math.floor(Math.random() * flakes.length)];
      el.className = 'cursor-xmas-flake';
      el.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        font-size: ${10 + Math.random() * 8}px;
        color: rgba(255,255,255,${0.5 + Math.random() * 0.4});
        pointer-events: none;
        user-select: none;
        z-index: 99999;
        animation: xmasFlakeFade 1s ease-out forwards;
        transform: translate(-50%, -50%);
      `;
      container.appendChild(el);
      setTimeout(() => el.remove(), 1000);
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return <div ref={containerRef} aria-hidden="true" />;
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function ChristmasEffects() {
  if (!isChristmasSeason()) return null;
  return (
    <>
      <SnowCanvas />
      <FairyLights />
      <CursorTrail />
    </>
  );
}
