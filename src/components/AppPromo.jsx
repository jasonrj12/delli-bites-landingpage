import React from 'react';
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

            {/* Official App Store & Google Play Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              
              {/* Apple iOS */}
              <a
                href={RESTAURANT_INFO.apps.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-105 active:scale-95 inline-block"
                aria-label="Download on Apple App Store"
              >
                <img
                  src="/assets/img/apple-store.logo.svg"
                  alt="Download on Apple App Store"
                  className="h-11 sm:h-12 w-auto object-contain rounded-lg border border-white/10 hover:border-white/30 transition-colors shadow-md"
                />
              </a>

              {/* Google Play */}
              <a
                href={RESTAURANT_INFO.apps.android}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-105 active:scale-95 inline-block"
                aria-label="Get it on Google Play"
              >
                <img
                  src="/assets/img/google-play.logo.svg"
                  alt="Get it on Google Play"
                  className="h-11 sm:h-12 w-auto object-contain rounded-lg border border-white/10 hover:border-white/30 transition-colors shadow-md"
                />
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
