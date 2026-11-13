import React from 'react';
import { Sparkles, HeartHandshake, Flame, Wine, Clock, MapPin, ChefHat } from 'lucide-react';
import { RESTAURANT_INFO, DRIVE_CDN } from '../data/restaurantData';

export default function ExperienceStory({ onOpenReservation }) {
  const pillars = [
    {
      icon: Flame,
      title: "Authentic Charcoal Tandoor",
      desc: "Live clay oven cooking infusing kebabs and flatbreads with signature smoky aroma."
    },
    {
      icon: ChefHat,
      title: "Handcrafted Spice Blends",
      desc: "Fresh whole spices roasted and ground in-house daily for genuine regional depth."
    },
    {
      icon: HeartHandshake,
      title: "Warm Indian Hospitality",
      desc: "A cosy, welcoming ambience whether you're celebrating with family or dining casual."
    },
    {
      icon: Wine,
      title: "Craft Pours & Pairings",
      desc: "Carefully curated wine list, premium spirits, refreshing beers and signature lassis."
    }
  ];

  return (
    <section id="story" className="relative py-20 lg:py-28 bg-[#0c0907] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D97706]/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with Interior and Chef Presentation */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Photo: Warm interior dining */}
              <div className="rounded-3xl overflow-hidden border border-[#D97706]/25 shadow-2xl glass-panel group">
                <img
                  src={DRIVE_CDN('1duRey8TeZv0uaZaG4cml89kEdPOlX13l')}
                  alt="Delli Bites Uxbridge Hospitality"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0907] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#D97706]/40 text-xs text-[#F59E0B] font-semibold mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>40 Windsor Street, Uxbridge</span>
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-white">
                    Where Tradition Meets Modern Comfort
                  </h4>
                </div>
              </div>

              {/* Floating secondary badge */}
              <div className="hidden sm:block absolute -top-6 -right-6 glass-panel p-4 rounded-2xl border border-[#D97706]/40 shadow-xl max-w-[200px] text-center">
                <span className="font-serif text-3xl font-extrabold gold-gradient-text block">
                  100%
                </span>
                <span className="text-xs font-semibold text-[#FAF6EE] block mt-0.5">
                  Authentic Taste
                </span>
                <span className="text-[11px] text-[#A89F91]">
                  Rich heritage in every recipe
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Copy & Story */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1713] border border-[#D97706]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#F59E0B]">
                EXPERIENCE THE TRUE TASTE
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF6EE] leading-tight">
              Experience the True Taste of India <br />
              <span className="gold-gradient-text italic font-normal">in Uxbridge</span>
            </h2>

            {/* Exact wording from user prompt */}
            <div className="space-y-4 text-base sm:text-lg text-[#D1C7BD] font-light leading-relaxed">
              <p>
                Welcome to Delli Bites, where you will experience the warmth of our hospitality and culinary excellence. We offer more than just traditional Indian dishes. Our menu boasts a variety of flavorful options including aromatic curries, crispy snacks, hearty rice dishes, tasty breads, and delightful desserts.
              </p>
              <p className="text-[#E5A93C] font-normal">
                Each dish is carefully prepared to ensure a memorable dining experience. Come dine with us in the heart of Uxbridge and let your taste buds explore the richness of Indian cuisine.
              </p>
            </div>

            {/* Feature pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-[#17110E] border border-white/5 hover:border-[#D97706]/30 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[#D97706]/15 text-[#F59E0B] flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-[#FAF6EE]">{item.title}</h4>
                        <p className="text-xs text-[#A89F91] mt-1 leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenReservation}
                className="px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#d97706] to-[#b45309] hover:from-[#f59e0b] hover:to-[#d97706] shadow-lg shadow-[#d97706]/25 transition-all hover:scale-105 active:scale-95"
              >
                Reserve Your Table Today
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
