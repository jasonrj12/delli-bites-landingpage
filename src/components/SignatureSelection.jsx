import React, { useState } from 'react';
import { Sparkles, Utensils, Wine, Heart, ChevronRight, CheckCircle2 } from 'lucide-react';
import { DRIVE_CDN } from '../data/restaurantData';

export default function SignatureSelection({ onOpenOrder }) {
  const [activeDrinkIdx, setActiveDrinkIdx] = useState(0);
  const drinkImages = [
    { id: '1gdp5HBEufUTAJNLIUWSefuQhtkt6ocqV', label: 'Craft Cocktail & Pour' },
    { id: '1op0EH9CmUa4jCoFk4f-6u_0GvvAs_7Ct', label: 'Specialty Drink Selection' }
  ];

  return (
    <section id="signatures" className="relative py-20 lg:py-28 bg-[#120D0A] border-t border-[#D97706]/20">
      
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#D97706]/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#F59E0B]/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1713] border border-[#D97706]/35">
            <Utensils className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span className="text-xs uppercase tracking-[0.22em] font-bold text-[#F59E0B]">
              OUR SIGNATURE SELECTION
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF6EE]">
            Extraordinary Flavours, <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-normal">Unforgettable Moments</span>
          </h2>

          <p className="text-base sm:text-lg text-[#D1C7BD] font-light leading-relaxed">
            Explore extraordinary Indian delicacies and refreshing creations that turn every visit into an experience.
          </p>
        </div>

        {/* Feature 1: Our Finest Culinary Creations */}
        <div className="mb-20 lg:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Frame */}
            <div className="lg:col-span-6 relative group">
              <div className="relative rounded-3xl overflow-hidden border border-[#D97706]/30 shadow-2xl glass-panel">
                <img
                  src={DRIVE_CDN('1BtyE2erOOW_t3_owbD-azdwwgZ6em9zi')}
                  alt="Our Finest Culinary Creations"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0907] via-transparent to-transparent opacity-75" />
                
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D97706] text-black mb-1">
                    Signature Favourites
                  </span>
                  <div className="text-white font-serif text-xl sm:text-2xl font-bold">
                    Rich, Bold & Authentic
                  </div>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                <Sparkles className="w-4 h-4" />
                <span>Culinary Excellence</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAF6EE] leading-tight">
                Our Finest Culinary Creations
              </h3>

              <p className="text-base text-[#D1C7BD] font-light leading-relaxed">
                Discover our signature collection of Indian favourites, from rich and creamy Butter Chicken and fiery Chicken 65 to perfectly chargrilled Ajwaini Paneer Tikka and the aromatic, slow-cooked goodness of Kashmiri Lamb Roganjosh. Every dish is a celebration of authentic spices, bold flavours and culinary passion.
              </p>

              {/* Dish Badges */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  'Creamy Butter Chicken',
                  'Fiery Chicken 65',
                  'Ajwaini Paneer Tikka',
                  'Kashmiri Lamb Roganjosh'
                ].map((dish, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#FAF6EE] bg-[#1a1410] p-2.5 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] flex-shrink-0" />
                    <span>{dish}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenOrder}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#D97706] hover:bg-[#F59E0B] transition-colors shadow-md shadow-[#D97706]/20 flex items-center gap-2"
                >
                  <span>Order These Dishes</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Feature 2: A Celebration of Indian Comfort */}
        <div className="mb-20 lg:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Content Details (Left on desktop) */}
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                <Heart className="w-4 h-4" />
                <span>Soulful Traditions</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAF6EE] leading-tight">
                A Celebration of Indian Comfort
              </h3>

              <p className="text-base text-[#D1C7BD] font-light leading-relaxed">
                Experience the soul of Indian cuisine through rich curries, aromatic spices and lovingly prepared delicacies. From traditional favourites to unique house creations, every dish brings together authentic flavours, passion and a little taste of home.
              </p>

              {/* Comfort Pillars */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  'Slow-Simmered Gravies',
                  'Hand-Pounded Masalas',
                  'Fresh Tandoori Breads',
                  'Fragrant Dum Biryanis'
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#FAF6EE] bg-[#1a1410] p-2.5 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenOrder}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#FAF6EE] border border-[#D97706]/50 hover:bg-[#D97706]/15 transition-all flex items-center gap-2"
                >
                  <span>Explore Comfort Menu</span>
                  <ChevronRight className="w-4 h-4 text-[#D97706]" />
                </button>
              </div>

            </div>

            {/* Visual Frame (Right on desktop) */}
            <div className="lg:col-span-6 order-1 lg:order-2 relative group">
              <div className="relative rounded-3xl overflow-hidden border border-[#D97706]/30 shadow-2xl glass-panel">
                <img
                  src={DRIVE_CDN('1oTaONwC5pejGq1kJpLf5Nbj-0iQxOzrH')}
                  alt="A Celebration of Indian Comfort"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0907] via-transparent to-transparent opacity-75" />
                
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F59E0B] text-black mb-1">
                    Warmth & Heritage
                  </span>
                  <div className="text-white font-serif text-xl sm:text-2xl font-bold">
                    Taste Like Home
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Feature 3: The Perfect Pour, Every Time */}
        <div id="drinks">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Frame with dual image toggle */}
            <div className="lg:col-span-6 relative group">
              <div className="relative rounded-3xl overflow-hidden border border-[#D97706]/30 shadow-2xl glass-panel">
                <img
                  src={DRIVE_CDN(drinkImages[activeDrinkIdx].id)}
                  alt="The Perfect Pour at Delli Bites"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0907] via-transparent to-transparent opacity-75" />
                
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D97706] text-black mb-1">
                    Bar & Cellar
                  </span>
                  <div className="text-white font-serif text-xl sm:text-2xl font-bold">
                    {drinkImages[activeDrinkIdx].label}
                  </div>
                </div>
              </div>

              {/* Drink image selector pills */}
              <div className="flex gap-2 mt-3">
                {drinkImages.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveDrinkIdx(idx)}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                      activeDrinkIdx === idx
                        ? 'bg-[#D97706]/20 border-[#F59E0B] text-white'
                        : 'bg-[#17110D] border-white/10 text-[#A89F91] hover:text-white'
                    }`}
                  >
                    View {img.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                <Wine className="w-4 h-4" />
                <span>Bar & Beverages</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAF6EE] leading-tight">
                The Perfect Pour, Every Time
              </h3>

              <p className="text-base text-[#D1C7BD] font-light leading-relaxed">
                Enjoy an impressive selection of refreshing beverages, premium spirits, fine wines and international favourites. Beautifully served and thoughtfully selected to complement every occasion.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  'Artisanal Craft Cocktails',
                  'Refreshing Mango Lassi',
                  'Premium Spirits & Gins',
                  'Selected Wine Pairings'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#FAF6EE] bg-[#1a1410] p-2.5 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#d97706] to-[#b45309] hover:from-[#f59e0b] hover:to-[#d97706] transition-all shadow-md shadow-[#D97706]/20"
                >
                  <span>Dine With Us & Sip</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
