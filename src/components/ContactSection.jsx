import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#120e0b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#d97706] block">
            LOCATION & CONTACT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#f5f0e6] leading-[1.12]">
            Find Us on <br />
            <span className="italic text-[#e59a35]">Windsor Street</span>
          </h2>
          <p className="text-base text-[#9b9185] font-light max-w-xl">
            Located in the historic centre of Uxbridge town. Join us for lunch, dinner or takeaway.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Architectural Contact & Hours Columns */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            <div className="space-y-6">
              
              <div className="pb-4 border-b border-white/10">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#9b9185] block mb-1">
                  Address
                </span>
                <a
                  href={RESTAURANT_INFO.links.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-xl sm:text-2xl text-[#f5f0e6] hover:text-[#d97706] transition-colors block"
                >
                  {RESTAURANT_INFO.shortAddress}
                </a>
                <p className="text-xs text-[#736a5f] mt-0.5">Uxbridge, Greater London</p>
              </div>

              <div className="pb-4 border-b border-white/10">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#9b9185] block mb-1">
                  Direct Line
                </span>
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="font-serif text-xl sm:text-2xl text-[#f5f0e6] hover:text-[#d97706] transition-colors block"
                >
                  {RESTAURANT_INFO.displayPhone}
                </a>
              </div>

              <div className="pb-4 border-b border-white/10">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#9b9185] block mb-1">
                  Enquiries
                </span>
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="text-base text-[#c9c0b3] hover:text-[#f5f0e6] transition-colors block"
                >
                  {RESTAURANT_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#9b9185] block mb-3">
                  Opening Hours
                </span>
                <div className="space-y-2 text-sm">
                  {RESTAURANT_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center text-[#c9c0b3] border-b border-white/5 pb-1">
                      <span>{h.days}</span>
                      <span className="text-[#f5f0e6] font-mono text-xs">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href={RESTAURANT_INFO.links.bookTable}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-[#d97706] hover:bg-[#e59a35] transition-all"
              >
                Book a Table
              </a>
              <a
                href={RESTAURANT_INFO.links.map}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider font-semibold text-[#f5f0e6] hover:text-[#d97706] flex items-center gap-1 transition-colors"
              >
                <span>Get Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Frame */}
          <div className="lg:col-span-7">
            <div className="border border-white/10 aspect-[4/3] sm:aspect-[16/10] bg-[#1a1410] relative group overflow-hidden">
              <iframe
                title="Delli Bites Uxbridge Map"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(0.9) brightness(0.9)' }}
                loading="lazy"
                src="https://maps.google.com/maps?q=Delli%20Bites,%2040%20Windsor%20St,%20Uxbridge%20UB8%201AB&t=&z=16&ie=UTF8&iwloc=&output=embed"
              />
              <a
                href={RESTAURANT_INFO.links.map}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 px-3 py-1.5 rounded-md bg-[#0e0b09]/90 hover:bg-[#d97706] text-white hover:text-black text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md border border-white/10"
              >
                <span>View on Google Maps</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
