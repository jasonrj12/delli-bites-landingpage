import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowUpRight, MapPin, Star, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { HERO_IMAGES, DRIVE_CDN, RESTAURANT_INFO } from '../data/restaurantData';

const SLIDE_DURATION = 5000; // 5 seconds per slide

const SCENE_TABS = [
  { label: 'Feast', key: 'feast' },
  { label: 'Craft', key: 'craft' },
  { label: 'Pours', key: 'pours' },
  { label: 'Ambience', key: 'ambience' },
];

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressIntervalRef = useRef(null);

  const goToSlide = useCallback((index) => {
    if (index === activeIdx) return;
    setFading(true);
    setProgress(0);
    setTimeout(() => {
      setActiveIdx(index);
      setFading(false);
    }, 300);
  }, [activeIdx]);

  const nextSlide = useCallback(() => {
    setFading(true);
    setProgress(0);
    setTimeout(() => {
      setActiveIdx((prev) => (prev + 1) % HERO_IMAGES.length);
      setFading(false);
    }, 300);
  }, []);

  // Timer & progress bar loop
  useEffect(() => {
    if (isPaused) return;

    const stepMs = 50;
    const increment = (stepMs / SLIDE_DURATION) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => clearInterval(progressIntervalRef.current);
  }, [isPaused, nextSlide]);

  const currentImage = HERO_IMAGES[activeIdx];

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 sm:pt-32 pb-10 sm:pb-12 px-6 sm:px-8 bg-[#0e0b09] overflow-hidden selection:bg-[#d97706] selection:text-black">
      
      {/* Ambient Warm Golden Glows */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#d97706]/10 rounded-full blur-[140px] pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#e59a35]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Grid: Left Typographic Narrative / Right Photographic Stage */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Editorial Grandeur (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-[0.22em] font-medium text-[#d97706]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] animate-pulse" />
              <span>WELCOME TO DELLI BITES</span>
              <span className="text-white/20">•</span>
              <span className="text-[#9b9185] tracking-wider font-normal">UXBRIDGE</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-normal tracking-tight text-[#f5f0e6] leading-[1.05]">
              Find the best <br />
              <span className="italic font-normal text-[#e59a35] font-serif">Indian Flavours</span> <br />
              in Uxbridge
            </h1>

            {/* Editorial Descriptive Copy */}
            <p className="text-base sm:text-lg text-[#c9c0b3] font-light max-w-xl leading-relaxed">
              Authentic North Indian culinary heritage, slow-braised curries, charcoal tandoori cuts, and hand-crafted pours in the heart of Uxbridge.
            </p>

            {/* Action Group */}
            <div className="pt-1 flex flex-wrap items-center gap-4">
              <a
                href={RESTAURANT_INFO.links.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#d97706] hover:bg-[#e59a35] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_25px_-5px_rgba(217,119,6,0.3)] flex items-center gap-2 group"
              >
                <span>Order Online</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={RESTAURANT_INFO.links.bookTable}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#f5f0e6] border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Book a Table
              </a>
            </div>

            {/* Trust & Location Metadata Badges */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#9b9185]">
              <div className="flex items-center gap-1.5 text-[#f5f0e6]">
                <MapPin className="w-3.5 h-3.5 text-[#d97706]" />
                <span>40 Windsor St, Uxbridge UB8 1AB</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#f5f0e6]">
                <Star className="w-3.5 h-3.5 text-[#d97706] fill-[#d97706]" />
                <span>5-Star Rated Dining</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#c9c0b3]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d97706]" />
                <span>FSA Standard Award</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Photographic Showcase (Col 8-12) */}
          <div 
            className="lg:col-span-5"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative group">
              
              {/* Outer Glow & Architectural Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#14100c] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5]">
                
                {/* Active Image with Clean Crossfade */}
                <img
                  key={currentImage.id}
                  src={DRIVE_CDN(currentImage.id)}
                  alt={currentImage.title}
                  className={`w-full h-full object-cover filter contrast-[1.04] brightness-[0.96] transition-all duration-700 ease-out group-hover:scale-[1.03] ${
                    fading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`}
                  loading="eager"
                />

                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

                {/* Floating Top Pill Badge */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-[#0e0b09]/80 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] uppercase tracking-wider text-[#f5f0e6] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] animate-pulse" />
                  <span className="font-medium">{currentImage.title}</span>
                </div>

                {/* Bottom Story Card on Image */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-20">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#d97706] font-semibold block mb-1">
                    {`0${activeIdx + 1} / 0${HERO_IMAGES.length} • EXPERIENCE`}
                  </span>
                  <p className="font-serif text-lg sm:text-xl text-[#f5f0e6] leading-snug">
                    {currentImage.caption}
                  </p>
                </div>

              </div>

              {/* Interactive Scene Selector Dock */}
              <div className="mt-4 grid grid-cols-4 gap-2">
                {SCENE_TABS.map((tab, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => goToSlide(idx)}
                      className={`relative text-left py-2.5 px-3 rounded-lg border transition-all duration-200 overflow-hidden ${
                        isActive 
                          ? 'border-[#d97706]/40 bg-white/[0.06] text-[#f5f0e6]' 
                          : 'border-white/5 bg-white/[0.02] text-[#9b9185] hover:text-[#f5f0e6] hover:bg-white/[0.04]'
                      }`}
                    >
                      <span className="block text-[11px] uppercase tracking-wider font-medium truncate">
                        {tab.label}
                      </span>

                      {/* Smooth Progress Countdown Bar on Active Tab */}
                      {isActive && (
                        <div 
                          className="absolute bottom-0 left-0 h-[2px] bg-[#d97706] transition-all duration-75 ease-linear"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle Bottom Separator / Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#736a5f]">
        <span>Windsor Street, Uxbridge • Dine-in & Direct Takeaway</span>
        <span className="hidden sm:inline">Crafted with authentic hand-pounded spices</span>
      </div>

    </section>
  );
}
