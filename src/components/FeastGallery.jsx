import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { GALLERY_IMAGES, DRIVE_CDN, RESTAURANT_INFO } from '../data/restaurantData';

export default function FeastGallery() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0e0b09] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left space-y-3">
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

        {/* Clean Architectural Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setSelectedIdx(idx)}
              className="photo-frame border border-white/10 aspect-[4/3] cursor-pointer group relative"
            >
              <img
                src={DRIVE_CDN(img.id)}
                alt={img.title}
                className="w-full h-full object-cover filter contrast-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-xs uppercase tracking-[0.15em] font-medium text-white flex items-center gap-1">
                  <span>View Plate</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#d97706]" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Minimal Lightbox */}
      {selectedIdx !== null && (
        <div 
          onClick={() => setSelectedIdx(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-6"
        >
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((selectedIdx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((selectedIdx + 1) % GALLERY_IMAGES.length);
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div 
            onClick={(e) => e.stopPropagation()} 
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
          >
            <img
              src={DRIVE_CDN(GALLERY_IMAGES[selectedIdx].id)}
              alt="Delli Bites Culinary"
              className="max-h-[75vh] w-auto object-contain border border-white/10"
            />
            <div className="mt-4 flex items-center gap-4">
              <span className="text-xs text-[#9b9185]">
                {selectedIdx + 1} of {GALLERY_IMAGES.length}
              </span>
              <a
                href={RESTAURANT_INFO.links.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-wider text-[#d97706] hover:underline"
              >
                Order Online →
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
