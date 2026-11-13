import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { DRIVE_CDN, RESTAURANT_INFO } from '../data/restaurantData';

export default function SignatureSelection() {
  return (
    <section id="signatures" className="py-24 sm:py-32 bg-[#120e0b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 sm:mb-28 text-left space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#d97706] block">
            OUR SIGNATURE SELECTION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#f5f0e6] leading-[1.12]">
            Extraordinary Indian Delicacies <br />
            <span className="italic text-[#e59a35]">& Craft Creations</span>
          </h2>
          <p className="text-base text-[#9b9185] font-light max-w-xl">
            Explore extraordinary Indian delicacies and refreshing creations that turn every visit into an experience.
          </p>
        </div>

        {/* 1. Our Finest Culinary Creations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 sm:mb-32">
          
          <div className="lg:col-span-7">
            <div className="photo-frame border border-white/10 aspect-[16/11]">
              <img
                src={DRIVE_CDN('1BtyE2erOOW_t3_owbD-azdwwgZ6em9zi')}
                alt="Our Finest Culinary Creations"
                className="w-full h-full object-cover filter contrast-[1.05]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9b9185] block">
              Chapter 01 • Curated Favourites
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#f5f0e6] leading-tight">
              Our Finest Culinary Creations
            </h3>

            <p className="text-base text-[#c9c0b3] font-light leading-relaxed">
              Discover our signature collection of Indian favourites, from rich and creamy Butter Chicken and fiery Chicken 65 to perfectly chargrilled Ajwaini Paneer Tikka and the aromatic, slow-cooked goodness of Kashmiri Lamb Roganjosh. Every dish is a celebration of authentic spices, bold flavours and culinary passion.
            </p>

            <div className="pt-2">
              <a
                href={RESTAURANT_INFO.links.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#d97706] hover:text-[#f5f0e6] border-b border-[#d97706] hover:border-white pb-0.5 transition-colors"
              >
                <span>Order These Dishes</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* 2. A Celebration of Indian Comfort */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 sm:mb-32">
          
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6 text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9b9185] block">
              Chapter 02 • Soulful Cooking
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#f5f0e6] leading-tight">
              A Celebration of Indian Comfort
            </h3>

            <p className="text-base text-[#c9c0b3] font-light leading-relaxed">
              Experience the soul of Indian cuisine through rich curries, aromatic spices and lovingly prepared delicacies. From traditional favourites to unique house creations, every dish brings together authentic flavours, passion and a little taste of home.
            </p>

            <div className="pt-2">
              <a
                href={RESTAURANT_INFO.links.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#d97706] hover:text-[#f5f0e6] border-b border-[#d97706] hover:border-white pb-0.5 transition-colors"
              >
                <span>Explore Comfort Menu</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="photo-frame border border-white/10 aspect-[16/11]">
              <img
                src={DRIVE_CDN('1oTaONwC5pejGq1kJpLf5Nbj-0iQxOzrH')}
                alt="A Celebration of Indian Comfort"
                className="w-full h-full object-cover filter contrast-[1.05]"
                loading="lazy"
              />
            </div>
          </div>

        </div>

        {/* 3. The Perfect Pour, Every Time */}
        <div id="drinks" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <div className="photo-frame border border-white/10 aspect-[4/5]">
                <img
                  src={DRIVE_CDN('1gdp5HBEufUTAJNLIUWSefuQhtkt6ocqV')}
                  alt="Craft Cocktail at Delli Bites"
                  className="w-full h-full object-cover filter contrast-[1.05]"
                  loading="lazy"
                />
              </div>
              <div className="photo-frame border border-white/10 aspect-[4/5]">
                <img
                  src={DRIVE_CDN('1op0EH9CmUa4jCoFk4f-6u_0GvvAs_7Ct')}
                  alt="Premium Spirits & Wine Selection"
                  className="w-full h-full object-cover filter contrast-[1.05]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9b9185] block">
              Chapter 03 • Cellar & Bar
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#f5f0e6] leading-tight">
              The Perfect Pour, Every Time
            </h3>

            <p className="text-base text-[#c9c0b3] font-light leading-relaxed">
              Enjoy an impressive selection of refreshing beverages, premium spirits, fine wines and international favourites. Beautifully served and thoughtfully selected to complement every occasion.
            </p>

            <div className="pt-2">
              <a
                href={RESTAURANT_INFO.links.bookTable}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#d97706] hover:text-[#f5f0e6] border-b border-[#d97706] hover:border-white pb-0.5 transition-colors"
              >
                <span>Book a Table & Sip</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
