import React, { useState } from 'react';
import { Camera, Sparkles, Maximize2, X, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { GALLERY_IMAGES, DRIVE_CDN } from '../data/restaurantData';

export default function FeastGallery({ onOpenOrder }) {
  const [selectedImageIdx, setSelectedImageIdx] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Curries', 'Tandoor', 'Biryani', 'Starters', 'Breads', 'Beverages'];

  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  const openLightbox = (index) => {
    setSelectedImageIdx(index);
  };

  const closeLightbox = () => {
    setSelectedImageIdx(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIdx((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIdx((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  return (
    <section id="gallery" className="relative py-20 lg:py-28 bg-[#0c0907] overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D97706]/10 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with exact prompt text */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1713] border border-[#D97706]/35">
            <Camera className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span className="text-xs uppercase tracking-[0.22em] font-bold text-[#F59E0B]">
              A VISUAL FEAST
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF6EE]">
            Your Table, Your Taste, <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-normal">Your Experience</span>
          </h2>

          <p className="text-base sm:text-lg text-[#D1C7BD] font-light leading-relaxed">
            Take your taste buds on a journey through vibrant spices, delicious combinations and unforgettable Indian favourites.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  filter === cat
                    ? 'bg-[#D97706] text-black shadow-md shadow-[#D97706]/30'
                    : 'bg-[#17110D] text-[#A89F91] border border-white/5 hover:border-[#D97706]/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Bento / Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => {
            const isLarge = idx === 0 || idx === 3;
            return (
              <div
                key={img.id}
                onClick={() => openLightbox(idx)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-[#D97706]/20 bg-[#15100D] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#D97706]/20 ${
                  isLarge ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden">
                  <img
                    src={DRIVE_CDN(img.id)}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0907] via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Category Pill Top Left */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#F59E0B] border border-[#D97706]/30">
                      {img.category}
                    </span>
                  </div>

                  {/* Expand icon Top Right */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Bottom Dish Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#F59E0B] transition-colors leading-snug">
                      {img.title}
                    </h4>
                    <span className="text-xs text-[#A89F91] inline-flex items-center gap-1 mt-0.5">
                      <span>Click to enlarge & view</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIdx !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-[#D97706] hover:text-black transition-colors z-20"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#D97706] hover:text-black transition-colors border border-white/10 z-20"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#D97706] hover:text-black transition-colors border border-white/10 z-20"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Box */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="max-w-4xl w-full max-h-[88vh] flex flex-col items-center justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#D97706]/40 shadow-2xl bg-black">
              <img
                src={DRIVE_CDN(GALLERY_IMAGES[selectedImageIdx].id)}
                alt={GALLERY_IMAGES[selectedImageIdx].title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>
            
            <div className="mt-4 text-center">
              <div className="inline-block px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D97706] text-black mb-1">
                {GALLERY_IMAGES[selectedImageIdx].category}
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                {GALLERY_IMAGES[selectedImageIdx].title}
              </h3>
              <p className="text-xs text-[#A89F91] mt-1">
                Image {selectedImageIdx + 1} of {GALLERY_IMAGES.length} • Delli Bites Uxbridge
              </p>
              
              <div className="mt-3">
                <button
                  onClick={() => {
                    closeLightbox();
                    onOpenOrder();
                  }}
                  className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#D97706] hover:bg-[#F59E0B] inline-flex items-center gap-2"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Order This Dish Now
                </button>
              </div>
            </div>
          </div>

        </div>
      )}

    </section>
  );
}
