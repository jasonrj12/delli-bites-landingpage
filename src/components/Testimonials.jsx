import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#0e0b09] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20 text-left">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#d97706] block">
              GUEST WORDS & EXPERIENCES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#f5f0e6] leading-[1.12]">
              The Love Behind <br />
              <span className="italic text-[#e59a35]">Every Visit</span>
            </h2>
            <p className="text-base text-[#9b9185] font-light">
              Real experiences, heartfelt words and wonderful memories shared by the people who make our restaurant special.
            </p>
          </div>

          <a
            href={RESTAURANT_INFO.socials.tripadvisor}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.15em] font-semibold text-[#d97706] hover:text-[#f5f0e6] border-b border-[#d97706] hover:border-white pb-0.5 inline-flex items-center gap-1 transition-colors self-start sm:self-end"
          >
            <span>TripAdvisor Reviews</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6 Magazine-style Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="py-6 border-t border-white/10 flex flex-col justify-between text-left group"
            >
              <div className="space-y-4">
                <div className="text-xs tracking-[0.2em] text-[#d97706] font-mono">
                  ★★★★★
                </div>
                
                <p className="font-serif text-base sm:text-lg text-[#c9c0b3] font-normal leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f5f0e6]">
                    {rev.name}
                  </h4>
                  <span className="text-[11px] text-[#736a5f] block">
                    Verified Guest Review
                  </span>
                </div>
                <span className="text-[11px] text-[#9b9185] font-mono">
                  0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
