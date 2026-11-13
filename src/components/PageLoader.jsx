import React, { useState, useEffect } from 'react';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade after 1.6s, fully remove after 2.1s
    const fadeTimer = setTimeout(() => setFadeOut(true), 1600);
    const hideTimer = setTimeout(() => setVisible(false), 2100);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0e0b09] transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Animated spice ring */}
      <div className="relative w-16 h-16 mb-6">
        {/* Outer spinning ring */}
        <span
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#d97706] animate-spin"
          style={{ animationDuration: '1s' }}
        />
        {/* Inner pulsing dot */}
        <span className="absolute inset-[22%] rounded-full bg-[#d97706] animate-pulse" />
      </div>

      {/* Wordmark */}
      <span className="font-serif text-2xl tracking-[0.12em] text-[#f5f0e6] animate-pulse">
        DELLI BITES
      </span>
      <span className="text-[10px] tracking-[0.3em] uppercase text-[#9b9185] mt-1">
        Uxbridge · London
      </span>
    </div>
  );
}
