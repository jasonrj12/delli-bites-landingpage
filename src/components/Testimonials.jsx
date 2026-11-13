import React from 'react';
import { Star, Heart, Quote, MessageSquare, ExternalLink } from 'lucide-react';
import { REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-20 lg:py-28 bg-[#0c0907] overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#D97706]/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1713] border border-[#D97706]/35">
            <Heart className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span className="text-xs uppercase tracking-[0.22em] font-bold text-[#F59E0B]">
              GUEST STORIES & EXPERIENCES
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF6EE]">
            The Love Behind <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-normal">Every Visit</span>
          </h2>

          <p className="text-base sm:text-lg text-[#D1C7BD] font-light leading-relaxed">
            Real experiences, heartfelt words and wonderful memories shared by the people who make our restaurant special.
          </p>

          {/* Aggregated Rating Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-sm text-[#D1C7BD]">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-2xl text-white">5.0</span>
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <span className="text-[11px] text-[#A89F91]">TripAdvisor & Google Reviews</span>
              </div>
            </div>
            <div className="h-6 w-px bg-white/10 hidden sm:block" />
            <a 
              href={RESTAURANT_INFO.socials.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#E5A93C] hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              <span>Read more reviews on TripAdvisor</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* 6 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="group relative glass-panel rounded-2xl p-6 border border-[#D97706]/20 hover:border-[#D97706]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header of review: Stars & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#D97706] bg-[#D97706]/10 px-2.5 py-0.5 rounded-full border border-[#D97706]/20">
                    {rev.tag}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#D1C7BD] font-light leading-relaxed italic relative">
                  "{rev.text}"
                </p>
              </div>

              {/* Reviewer Monogram & Name */}
              <div className="pt-6 mt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D97706] to-[#78350f] flex items-center justify-center font-bold text-sm text-white shadow-md">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#FAF6EE] group-hover:text-[#F59E0B] transition-colors">
                    {rev.name}
                  </h4>
                  <span className="text-[11px] text-[#A89F91]">
                    5-Star Dining Review
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
