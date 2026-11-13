import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { RESTAURANT_INFO, DRIVE_CDN } from '../data/restaurantData';

export default function ExperienceStory() {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#0e0b09]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic & Story Focus */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#d97706] block">
                THE DELLI BITES EXPERIENCE
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#f5f0e6] leading-[1.12]">
                Experience the True Taste of India <br />
                <span className="italic text-[#e59a35]">in Uxbridge</span>
              </h2>
            </div>

            {/* Display Type Moment (taste-skill rule: address large) */}
            <div className="py-2 border-y border-white/10">
              <a 
                href="https://maps.google.com/?q=40+Windsor+Street+Uxbridge+UB8+1AB"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-2xl sm:text-3xl text-[#f5f0e6] hover:text-[#e59a35] transition-colors inline-block"
              >
                40 Windsor Street, Uxbridge
              </a>
              <span className="block text-xs uppercase tracking-[0.2em] text-[#9b9185] mt-1">
                Greater London • UB8 1AB
              </span>
            </div>

            {/* Exact User Copy formatted with comfortable reading rhythm */}
            <div className="space-y-4 text-base sm:text-lg text-[#c9c0b3] font-light leading-relaxed">
              <p>
                Welcome to Delli Bites, where you will experience the warmth of our hospitality and culinary excellence. We offer more than just traditional Indian dishes. Our menu boasts a variety of flavorful options including aromatic curries, crispy snacks, hearty rice dishes, tasty breads, and delightful desserts.
              </p>
              <p className="text-[#f5f0e6] font-normal">
                Each dish is carefully prepared to ensure a memorable dining experience. Come dine with us in the heart of Uxbridge and let your taste buds explore the richness of Indian cuisine.
              </p>
            </div>



          </div>

          {/* Right Column: Architectural Photography Frame */}
          <div className="lg:col-span-6">
            <div className="photo-frame rounded-none border border-white/10 aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] relative">
              <img
                src={DRIVE_CDN('1duRey8TeZv0uaZaG4cml89kEdPOlX13l')}
                alt="Delli Bites Restaurant Interior Uxbridge"
                className="w-full h-full object-cover filter contrast-[1.05]"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
