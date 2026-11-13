import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { GALLERY_IMAGES, DRIVE_CDN } from '../data/restaurantData';

const BENTO_SPANS = [
  // Item 0: Large Anchor Hero
  "col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 h-[280px] sm:h-[320px] lg:h-full lg:min-h-[584px]",
  // Item 1: Top right 1
  "col-span-1 sm:col-span-1 lg:col-span-1 h-[250px] sm:h-[280px] lg:h-full",
  // Item 2: Top right 2
  "col-span-1 sm:col-span-1 lg:col-span-1 h-[250px] sm:h-[280px] lg:h-full",
  // Item 3: Wide middle card
  "col-span-1 sm:col-span-2 lg:col-span-2 h-[250px] sm:h-[280px] lg:h-full",
  // Item 4: Bottom left
  "col-span-1 sm:col-span-1 lg:col-span-1 h-[250px] sm:h-[280px] lg:h-full",
  // Item 5: Bottom center panoramic
  "col-span-1 sm:col-span-1 lg:col-span-2 h-[250px] sm:h-[280px] lg:h-full",
  // Item 6: Bottom right
  "col-span-1 sm:col-span-2 lg:col-span-1 h-[250px] sm:h-[280px] lg:h-full",
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

        {/* Pure Photographic Bento Grid (No dish names) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5 lg:gap-6 auto-rows-auto lg:auto-rows-[280px]">
          {GALLERY_IMAGES.map((img, idx) => {
            const spanClass = BENTO_SPANS[idx] || BENTO_SPANS[0];
            return (
              <div
                key={img.id}
                onClick={() => setSelectedIdx(idx)}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#140f0c] cursor-pointer transition-all duration-500 hover:border-[#d97706]/40 hover:shadow-2xl hover:shadow-black/70 ${spanClass}`}
              >
                {/* Background Plate Image */}
                <img
                  src={DRIVE_CDN(img.id)}
                  alt="Delli Bites Culinary Presentation"
                  className="w-full h-full object-cover filter contrast-[1.05] brightness-[0.92] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />

                {/* Subtle Ambient Hover Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Floating Minimalist View Indicator on Hover */}
                <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
                  <div className="w-9 h-9 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[#f5f0e6] flex items-center justify-center group-hover:bg-[#d97706] group-hover:text-black group-hover:border-[#d97706] transition-all duration-300 shadow-xl">
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
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#140f0c] shadow-2xl max-h-[78vh] flex items-center justify-center">
              <img
                src={DRIVE_CDN(GALLERY_IMAGES[selectedIdx].id)}
                alt="Delli Bites Culinary Presentation"
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>
            
            {/* Minimalist Slide Counter (No dish names) */}
            <div className="mt-4 flex items-center justify-center text-xs text-[#9b9185] font-mono tracking-widest">
              <span>{String(selectedIdx + 1).padStart(2, '0')} / {String(GALLERY_IMAGES.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
