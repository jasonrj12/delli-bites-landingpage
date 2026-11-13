import React from 'react';
import { TRUST_BADGES, DRIVE_CDN } from '../data/restaurantData';

export default function TrustBadges() {
  return (
    <div className="border-y border-white/10 bg-[#120e0b] py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
          {TRUST_BADGES.map((badge) => (
            <div 
              key={badge.id}
              className="flex items-center gap-4 py-2"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 bg-black/40 p-2 rounded-lg border border-white/5">
                <img
                  src={DRIVE_CDN(badge.id)}
                  alt={badge.name}
                  className="w-full h-full object-contain filter contrast-[1.05]"
                />
              </div>
              <div className="text-left">
                <h4 className="font-serif text-sm sm:text-base font-medium text-[#f5f0e6]">
                  {badge.name}
                </h4>
                <p className="text-xs text-[#9b9185] mt-0.5 font-light">
                  {badge.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
