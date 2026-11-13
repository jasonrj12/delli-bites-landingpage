import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { RESTAURANT_INFO, DRIVE_CDN } from '../data/restaurantData';

export default function AppPromo() {
  return (
    <section id="app" className="py-24 sm:py-32 bg-[#120e0b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Manifesto & Direct Benefits */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#d97706] block">
                DIRECT RESTAURANT BENEFITS
              </span>
              
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#f5f0e6] leading-[1.08]">
                More Food. Less Fees. <br />
                <span className="italic text-[#e59a35]">More Savings.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#c9c0b3] font-light leading-relaxed max-w-xl">
              Why pay extra when you can order smarter? Download the Delhi Bites App and enjoy delicious food with exclusive app-only benefits.
            </p>

            {/* Clean Numbered Perks List */}
            <div className="space-y-4 pt-2 border-t border-white/10 max-w-xl">
              
              <div className="flex items-start gap-4 py-3 border-b border-white/5">
                <span className="font-mono text-xs text-[#d97706] pt-0.5">01</span>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#f5f0e6]">
                    Free Delivery
                  </h4>
                  <p className="text-xs text-[#9b9185] mt-0.5">
                    On orders £35+ (within 3 miles radius).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 py-3 border-b border-white/5">
                <span className="font-mono text-xs text-[#d97706] pt-0.5">02</span>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#f5f0e6]">
                    15% Off Collection
                  </h4>
                  <p className="text-xs text-[#9b9185] mt-0.5">
                    Available on collection orders over £35.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 py-3 border-b border-white/5">
                <span className="font-mono text-xs text-[#d97706] pt-0.5">03</span>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#f5f0e6]">
                    Order Direct. Save More. Eat Happy!
                  </h4>
                  <p className="text-xs text-[#9b9185] mt-0.5">
                    Skip third-party commission fees and support your local kitchen directly.
                  </p>
                </div>
              </div>

            </div>

            {/* Minimal App Store & Google Play Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              
              {/* Apple iOS */}
              <a
                href={RESTAURANT_INFO.apps.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-white/20 hover:border-white/60 bg-black/50 text-[#f5f0e6] flex items-center gap-3 transition-all hover:scale-[1.02]"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.85.94-2.93-.93.04-2.02.63-2.66 1.4-.56.65-.99 1.73-.86 2.78 1.04.08 2.06-.57 2.58-1.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[9px] text-[#9b9185] uppercase tracking-wider leading-none">Download on</div>
                  <div className="text-xs font-semibold leading-tight mt-0.5">App Store</div>
                </div>
              </a>

              {/* Google Play */}
              <a
                href={RESTAURANT_INFO.apps.android}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-white/20 hover:border-white/60 bg-black/50 text-[#f5f0e6] flex items-center gap-3 transition-all hover:scale-[1.02]"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.98 1.98 0 0 1-.61-.913V2.727c.176-.367.394-.687.609-.913zm11.238 11.241l2.437 2.437-12.02 6.892 9.583-9.329zm0-2.11L5.264 1.616l12.02 6.892-2.437 2.437zm1.488 1.488l3.411-1.956c.869-.498.869-1.31 0-1.808l-3.411-1.956-1.849 1.849 1.849 1.871z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[9px] text-[#9b9185] uppercase tracking-wider leading-none">Get it on</div>
                  <div className="text-xs font-semibold leading-tight mt-0.5">Google Play</div>
                </div>
              </a>

              {/* Web Order Direct */}
              <a
                href={RESTAURANT_INFO.links.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-[#d97706] hover:bg-[#e59a35] text-black font-bold text-xs uppercase tracking-wider transition-all"
              >
                Web Ordering
              </a>

            </div>

          </div>

          {/* Right Column: App Flyer Artwork */}
          <div className="lg:col-span-5">
            <div className="photo-frame border border-white/10 max-w-sm mx-auto shadow-2xl">
              <img
                src={DRIVE_CDN('1Ah4TGFnrTkEchULkKHb-TU3Rxvu5OX58')}
                alt="Delhi Bites Official App Offers"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
