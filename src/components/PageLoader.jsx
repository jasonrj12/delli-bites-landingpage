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
      {/* Brand Emblem (Square, clean, no border) */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 overflow-hidden mb-5">
        <img 
          src="/assets/delli_logo.png" 
          alt="Delli Bites Logo" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Brand Wordmark */}
      <span className="font-serif text-2xl sm:text-3xl tracking-[0.16em] uppercase text-[#f5f0e6] font-normal">
        DELLI BITES
      </span>
      <span className="text-[10px] tracking-[0.3em] uppercase text-[#9b9185] mt-1 font-mono">
        Uxbridge · London
      </span>

      {/* Dot Dot Pulse Style Loader */}
      <div className="flex items-center gap-2.5 mt-6" role="status" aria-label="Loading Delli Bites">
        <span
          className="w-2.5 h-2.5 rounded-full bg-[#d97706] animate-dot-pulse"
          style={{ animationDelay: '0ms' }}
        />
        <span
          className="w-2.5 h-2.5 rounded-full bg-[#d97706] animate-dot-pulse"
          style={{ animationDelay: '200ms' }}
        />
        <span
          className="w-2.5 h-2.5 rounded-full bg-[#d97706] animate-dot-pulse"
          style={{ animationDelay: '400ms' }}
        />
      </div>
    </div>
  );
}
