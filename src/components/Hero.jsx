import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUpRight, MapPin, Star } from 'lucide-react';
import { HERO_IMAGES, DRIVE_CDN, RESTAURANT_INFO } from '../data/restaurantData';

const SLIDE_INTERVAL = 5000; // 5 seconds per slide

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((idx) => {
    setFading(true);
    setTimeout(() => {
      setActiveIdx(idx);
      setFading(false);
    }, 400);
  }, []);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActiveIdx((prev) => (prev + 1) % HERO_IMAGES.length);
        setFading(false);
      }, 400);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const currentImage = HERO_IMAGES[activeIdx];

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-32 pb-8 px-6 sm:px-8 bg-[#0e0b09] overflow-hidden">

      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <img
          key={activeIdx}
          src={DRIVE_CDN(currentImage.id)}
          alt="Delli Bites Uxbridge"
          className={`w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.08] transition-opacity duration-700 ${fading ? 'opacity-0' : 'opacity-100'}`}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b09] via-black/40 to-black/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        <div className="max-w-3xl space-y-7 text-left">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium text-[#d97706]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
            <span>WELCOME TO DELLI BITES</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal tracking-tight text-[#f5f0e6] leading-[1.04]">
            Find the best <br />
            <span className="italic font-normal text-[#e59a35]">Indian Flavours</span> <br />
            in Uxbridge
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-[#c9c0b3] font-light max-w-xl leading-relaxed">
            Authentic North Indian culinary heritage, slow-braised curries, charcoal tandoori cuts, and hand-crafted pours in the heart of Uxbridge.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={RESTAURANT_INFO.links.orderOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#d97706] hover:bg-[#e59a35] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md flex items-center gap-2 group"
            >
              <span>Order Online</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={RESTAURANT_INFO.links.bookTable}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#f5f0e6] border border-white/25 hover:border-white/60 hover:bg-white/5 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a Table
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Bar — location + dot indicators */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#9b9185]">

        {/* Location */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5 text-[#f5f0e6]">
            <MapPin className="w-3.5 h-3.5 text-[#d97706]" />
            <span>40 Windsor Street, Uxbridge UB8 1AB</span>
          </div>
          <span className="hidden sm:inline text-white/20">•</span>
          <div className="flex items-center gap-1 text-[#d97706]">
            <Star className="w-3.5 h-3.5 fill-[#d97706]" />
            <span className="font-medium text-[#f5f0e6]">5-Star Rated Dining</span>
          </div>
        </div>

        {/* Dot Indicators (no numbers) */}
        <div className="flex items-center gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                activeIdx === i
                  ? 'w-6 h-1.5 bg-[#d97706]'
                  : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
