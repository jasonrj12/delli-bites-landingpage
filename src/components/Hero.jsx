import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUpRight, MapPin, Star } from 'lucide-react';
import { HERO_IMAGES, DRIVE_CDN, RESTAURANT_INFO } from '../data/restaurantData';

const SLIDE_INTERVAL = 5500; // 5.5 seconds per slide

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const goTo = useCallback((idx) => {
    setActiveIdx(idx);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between items-center text-center pt-32 pb-8 sm:pb-10 px-6 sm:px-8 bg-[#0e0b09] overflow-hidden">
      
      {/* Full-bleed Cinematic Background Images with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, index) => {
          const isActive = index === activeIdx;
          return (
            <div
              key={img.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={DRIVE_CDN(img.id)}
                alt={img.title}
                className={`w-full h-full object-cover object-center filter brightness-[0.52] contrast-[1.06] transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}

        {/* Ambient Darkened Gradient Overlay for Perfect Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-[#0e0b09] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(14,11,9,0.7)_100%)] pointer-events-none" />
      </div>

      {/* Center Main Stage Content */}
      <div className="relative z-10 max-w-4xl mx-auto my-auto py-8 sm:py-12 space-y-6 sm:space-y-8">
        
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#e59a35] font-medium mx-auto shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] animate-pulse" />
          <span>WELCOME TO DELLI BITES</span>
        </div>

        {/* Cinematic Serif Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal tracking-tight text-[#f5f0e6] leading-[1.05]">
          Find the best <br />
          <span className="italic font-normal text-[#e59a35] font-serif">Indian Flavours</span> <br />
          in Uxbridge
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-[#dcd4c8] font-light max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
          Authentic North Indian culinary heritage, slow-braised curries, charcoal tandoori cuts, and hand-crafted pours in the heart of Uxbridge.
        </p>

        {/* Clean Center Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href={RESTAURANT_INFO.links.orderOnline}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#d97706] hover:bg-[#e59a35] transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(217,119,6,0.35)] flex items-center gap-2 group"
          >
            <span>Order Online</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href={RESTAURANT_INFO.links.bookTable}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#f5f0e6] bg-black/40 backdrop-blur-md border border-white/25 hover:border-white/60 hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
          >
            Book a Table
          </a>
        </div>

      </div>

      {/* Understated Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a89f92]">
        
        {/* Location Left */}
        <div className="flex items-center gap-1.5 text-[#f5f0e6]/90">
          <MapPin className="w-3.5 h-3.5 text-[#d97706]" />
          <span>40 Windsor Street, Uxbridge UB8 1AB</span>
        </div>

        {/* Minimal Slide Indicator Dots (Center) */}
        <div className="flex items-center gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to photo ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                activeIdx === i
                  ? 'w-7 h-1.5 bg-[#d97706]'
                  : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Rating Right */}
        <div className="flex items-center gap-1.5 text-[#f5f0e6]/90">
          <Star className="w-3.5 h-3.5 fill-[#d97706] text-[#d97706]" />
          <span>5-Star Rated Dining</span>
        </div>

      </div>

    </section>
  );
}
