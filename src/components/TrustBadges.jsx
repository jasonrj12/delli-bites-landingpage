import React from 'react';
import { Award, ShieldCheck, ThumbsUp, Star } from 'lucide-react';
import { TRUST_BADGES, DRIVE_CDN } from '../data/restaurantData';

export default function TrustBadges() {
  return (
    <section className="relative py-10 bg-[#120D0A] border-y border-[#D97706]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D97706]">
            ACCREDITED EXCELLENCE & HONOURS
          </span>
          <p className="text-xs text-[#A89F91] mt-1">
            Recognised for supreme food safety standards and authentic regional gastronomy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {TRUST_BADGES.map((badge, idx) => (
            <div
              key={badge.id}
              className="group glass-panel rounded-2xl p-4 sm:p-5 border border-[#D97706]/20 hover:border-[#D97706]/50 transition-all duration-300 hover:-translate-y-1 shadow-lg flex items-center gap-4 bg-gradient-to-r from-[#17110D] to-[#1F1713]"
            >
              {/* Badge Image from Google Drive */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-black/40 p-1 flex-shrink-0 border border-white/10 group-hover:border-[#D97706]/40 transition-colors">
                <img
                  src={DRIVE_CDN(badge.id)}
                  alt={badge.name}
                  className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text Info */}
              <div className="flex-1 text-left">
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#F59E0B] uppercase tracking-wide">
                  <Award className="w-3.5 h-3.5" />
                  <span>Official Recognition</span>
                </div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#FAF6EE] mt-0.5 leading-tight group-hover:text-[#F59E0B] transition-colors">
                  {badge.name}
                </h4>
                <p className="text-xs text-[#A89F91] mt-1 leading-snug">
                  {badge.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
