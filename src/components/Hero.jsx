import React, { useState, useEffect } from 'react';
import { Calendar, ShoppingBag, ArrowRight, Star, MapPin, Sparkles, ChevronRight } from 'lucide-react';
import { HERO_IMAGES, DRIVE_CDN, RESTAURANT_INFO } from '../data/restaurantData';

export default function Hero({ onOpenReservation, onOpenOrder }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Gentle auto-rotation between the hero images
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentImage = HERO_IMAGES[activeImageIdx];

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 pb-16 lg:py-0 overflow-hidden bg-[#0c0907]">
      {/* Background Ambience Layer with subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(217,119,6,0.18)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,rgba(180,83,9,0.14)_0%,transparent_55%)] pointer-events-none" />

      {/* Background Hero Image with soft cinematic overlay */}
      <div className="absolute inset-0 z-0 opacity-25 lg:opacity-20 transition-opacity duration-1000">
        <img
          key={currentImage.id}
          src={DRIVE_CDN(currentImage.id)}
          alt="Delli Bites Culinary"
          className="w-full h-full object-cover filter blur-sm scale-105 transform transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0907] via-[#0c0907]/80 to-[#0c0907]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Core Calls to Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow / Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1713]/90 border border-[#D97706]/35 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#F59E0B]">
                WELCOME TO DELLI BITES
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF6EE] leading-[1.08]">
              Find the best <br />
              <span className="gold-gradient-text italic font-normal">Indian Flavours</span> <br />
              in Uxbridge
            </h1>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-[#D1C7BD] max-w-2xl font-light leading-relaxed">
              Step into the authentic culinary heart of Delhi, right on Windsor Street. From velvety slow-cooked curries and smoky tandoori chargrills to vibrant street chaats and handcrafted pours.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={RESTAURANT_INFO.links.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-7 py-4 rounded-full font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-[#d97706] to-[#b45309] hover:from-[#f59e0b] hover:to-[#d97706] shadow-xl shadow-[#d97706]/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2.5"
              >
                <ShoppingBag className="w-4 h-4 text-white" />
                <span>Order Online</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={RESTAURANT_INFO.links.bookTable}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-7 py-4 rounded-full font-bold text-sm uppercase tracking-wider text-[#FAF6EE] bg-[#1a1410]/80 hover:bg-[#251b14] border border-[#D97706]/40 hover:border-[#D97706] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2.5 backdrop-blur-sm"
              >
                <Calendar className="w-4 h-4 text-[#D97706]" />
                <span>Book a Table</span>
              </a>
            </div>

            {/* Quick Proof Pills */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-[#A89F91] border-t border-white/10">
              <div className="flex items-center gap-1.5 text-[#F59E0B]">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <span className="font-semibold text-white ml-1">5.0 Star Rated</span>
                <span className="text-[#A89F91]">by Uxbridge Diners</span>
              </div>
              <div className="hidden sm:block text-[#524941]">•</div>
              <div className="flex items-center gap-1.5 text-[#D1C7BD]">
                <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
                <span>40 Windsor St, Uxbridge</span>
              </div>
              <div className="hidden sm:block text-[#524941]">•</div>
              <div className="flex items-center gap-1.5 text-[#34D399]">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span>Open for Dine-In & Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Visual Showcase with the 4 Hero Drive Images */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Gold Frame */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#D97706]/30 via-transparent to-[#F59E0B]/20 blur-md" />

              {/* Main Feature Display Card */}
              <div className="relative rounded-2xl overflow-hidden glass-panel border border-[#D97706]/30 shadow-2xl">
                
                {/* Active Image */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden group">
                  <img
                    key={currentImage.id}
                    src={DRIVE_CDN(currentImage.id)}
                    alt={currentImage.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0907] via-[#0d0907]/20 to-transparent opacity-90" />
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#D97706] text-black mb-1">
                        Delli Bites Special
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                        {currentImage.title}
                      </h3>
                      <p className="text-xs text-[#D1C7BD] font-light">
                        {currentImage.caption}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Thumbnail Strip to switch between all 4 Hero images */}
                <div className="p-3 bg-[#130E0B] border-t border-[#D97706]/20 grid grid-cols-4 gap-2">
                  {HERO_IMAGES.map((img, idx) => (
                    <button
                      key={img.id}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative aspect-[4/3] rounded-lg overflow-hidden border transition-all duration-300 ${
                        activeImageIdx === idx 
                          ? 'border-[#F59E0B] ring-2 ring-[#F59E0B]/40 scale-[1.03]' 
                          : 'border-white/10 opacity-60 hover:opacity-100 hover:border-[#D97706]/50'
                      }`}
                    >
                      <img
                        src={DRIVE_CDN(img.id)}
                        alt={img.title}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

              </div>

              {/* Floating Chef Recommendation Pill */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 glass-panel py-2.5 px-4 rounded-xl border border-[#D97706]/40 shadow-xl items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#D97706]/20 border border-[#D97706] flex items-center justify-center text-[#F59E0B]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Authentic Delhi Flavours</div>
                  <div className="text-[11px] text-[#A89F91]">Freshly prepared to order</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
