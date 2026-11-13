import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { GALLERY_IMAGES, DRIVE_CDN } from '../data/restaurantData';

const BENTO_CONFIG = [
  {
    // Item 0: Chargrilled Tandoori Platter (Hero anchor)
    gridSpan: "col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[320px] sm:min-h-[420px] lg:min-h-[580px]",
    badge: "Chef's Signature",
    isLarge: true,
  },
  {
    // Item 1: Slow-Braised Rich Rogan Josh
    gridSpan: "col-span-1 sm:col-span-1 lg:col-span-1 min-h-[250px] sm:min-h-[280px]",
    badge: "Slow Cooked",
    isLarge: false,
  },
  {
    // Item 2: Delhi Street Samosa Chaat & Crisps
    gridSpan: "col-span-1 sm:col-span-1 lg:col-span-1 min-h-[250px] sm:min-h-[280px]",
    badge: "Old Delhi Street",
    isLarge: false,
  },
  {
    // Item 3: Aromatic Fragrant Dum Biryani
    gridSpan: "col-span-1 sm:col-span-2 lg:col-span-2 min-h-[250px] sm:min-h-[280px]",
    badge: "Royal Dum Style",
    isLarge: false,
  },
  {
    // Item 4: Freshly Baked Garlic & Butter Naan
    gridSpan: "col-span-1 sm:col-span-1 lg:col-span-1 min-h-[250px] sm:min-h-[280px]",
    badge: "Clay Oven Baked",
    isLarge: false,
  },
  {
    // Item 5: Royal North-Indian Curry Spread
    gridSpan: "col-span-1 sm:col-span-1 lg:col-span-2 min-h-[250px] sm:min-h-[280px]",
    badge: "Grand Feast Spread",
    isLarge: false,
  },
  {
    // Item 6: Artisanal Spice-Infused Cocktail
    gridSpan: "col-span-1 sm:col-span-2 lg:col-span-1 min-h-[250px] sm:min-h-[280px]",
    badge: "House Mixology",
    isLarge: false,
  },
];

export default function FeastGallery() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedIdx === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowRight') setSelectedIdx((prev) => (prev + 1) % GALLERY_IMAGES.length);
      if (e.key === 'ArrowLeft') setSelectedIdx((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0e0b09] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#d97706] block">
            THE FEAST
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#f5f0e6] leading-[1.12]">
            Your Table, Your Taste, <br />
            <span className="italic text-[#e59a35]">Your Experience</span>
          </h2>
          <p className="text-base text-[#9b9185] font-light max-w-xl">
            Take your taste buds on a journey through vibrant spices, delicious combinations and unforgettable Indian favourites.
          </p>
        </div>

        {/* Architectural Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 auto-rows-[250px] sm:auto-rows-[280px]">
          {GALLERY_IMAGES.map((img, idx) => {
            const config = BENTO_CONFIG[idx] || BENTO_CONFIG[0];
            return (
              <div
                key={img.id}
                onClick={() => setSelectedIdx(idx)}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#140f0c] cursor-pointer transition-all duration-500 hover:border-[#d97706]/40 hover:shadow-2xl hover:shadow-black/70 ${config.gridSpan}`}
              >
                {/* Background Plate Image */}
                <img
                  src={DRIVE_CDN(img.id)}
                  alt={img.title}
                  className="w-full h-full object-cover filter contrast-[1.05] brightness-[0.9] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark Contrast Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b09]/95 via-[#0e0b09]/30 to-black/25 group-hover:via-[#0e0b09]/15 transition-colors duration-500 pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10 flex items-center gap-2 pointer-events-none">
                  <span className="px-2.5 py-1 text-[10px] sm:text-[11px] font-mono tracking-wider uppercase bg-black/70 backdrop-blur-md text-[#d97706] border border-[#d97706]/30 rounded-full">
                    {img.category}
                  </span>
                  {config.badge && (
                    <span className="hidden sm:inline-block px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase bg-white/10 backdrop-blur-md text-[#c9c0b3] border border-white/10 rounded-full">
                      {config.badge}
                    </span>
                  )}
                </div>

                {/* Bottom Dish Information */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 flex items-end justify-between gap-3 pointer-events-none">
                  <div className="space-y-1 pr-2">
                    <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#9b9185] block">
                      Delli Bites Plate
                    </span>
                    <h3 className={`font-serif text-[#f5f0e6] font-normal leading-snug group-hover:text-[#f3d9a2] transition-colors ${config.isLarge ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-base sm:text-lg'}`}>
                      {img.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:bg-[#d97706] group-hover:text-black group-hover:border-[#d97706] transition-all duration-300 flex-shrink-0">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Luxury Lightbox */}
      {selectedIdx !== null && (
        <div 
          onClick={() => setSelectedIdx(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white transition-all z-20"
            aria-label="Close"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((selectedIdx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-[#d97706] border border-white/10 hover:border-[#d97706] text-white/80 hover:text-black transition-all z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((selectedIdx + 1) % GALLERY_IMAGES.length);
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-[#d97706] border border-white/10 hover:border-[#d97706] text-white/80 hover:text-black transition-all z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Modal Content */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="max-w-4xl w-full flex flex-col items-center"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#140f0c] shadow-2xl max-h-[75vh] flex items-center justify-center">
              <img
                src={DRIVE_CDN(GALLERY_IMAGES[selectedIdx].id)}
                alt={GALLERY_IMAGES[selectedIdx].title}
                className="max-h-[72vh] w-auto max-w-full object-contain"
              />
            </div>
            
            {/* Caption & Counter Bar */}
            <div className="mt-4 w-full flex items-center justify-between px-2 text-xs">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded-full bg-[#d97706]/20 border border-[#d97706]/40 text-[#d97706] font-mono text-[10px] uppercase">
                  {GALLERY_IMAGES[selectedIdx].category}
                </span>
                <span className="font-serif text-[#f5f0e6] text-sm sm:text-base">
                  {GALLERY_IMAGES[selectedIdx].title}
                </span>
              </div>
              <span className="font-mono text-[#9b9185]">
                {String(selectedIdx + 1).padStart(2, '0')} / {String(GALLERY_IMAGES.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
