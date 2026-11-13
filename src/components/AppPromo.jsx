import React from 'react';
import { Smartphone, Percent, Truck, Check, Sparkles, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO, DRIVE_CDN } from '../data/restaurantData';

export default function AppPromo() {
  return (
    <section id="app" className="relative py-20 lg:py-28 bg-[#140E0B] border-y border-[#D97706]/20 overflow-hidden">
      
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#D97706]/15 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#F59E0B]/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Promotion Copy & App Store Download Badges */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1713] border border-[#D97706]/35">
              <Smartphone className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span className="text-xs uppercase tracking-[0.22em] font-bold text-[#F59E0B]">
                OFFICIAL DELLI BITES MOBILE APP
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FAF6EE] leading-tight">
              MORE FOOD. <br className="hidden sm:inline" />
              LESS FEES. <br className="hidden sm:inline" />
              <span className="gold-gradient-text">MORE SAVINGS!</span>
            </h2>

            <p className="text-base sm:text-lg text-[#D1C7BD] font-light leading-relaxed">
              Why pay extra when you can order smarter? Download the Delhi Bites App and enjoy delicious food with exclusive app-only benefits.
            </p>

            {/* Exclusive Perks Card */}
            <div className="space-y-3.5 pt-2">
              
              <div className="p-4 rounded-2xl glass-panel border border-[#D97706]/30 flex items-start gap-4 transition-transform hover:scale-[1.01]">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#D97706] to-[#92400E] text-white flex-shrink-0 shadow-md">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
                    <span>FREE DELIVERY</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-[#10B981]/20 text-[#34D399] border border-[#10B981]/30">
                      SAVER
                    </span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#D1C7BD] mt-0.5">
                    On orders £35+ (within 3 miles radius).
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-[#D97706]/30 flex items-start gap-4 transition-transform hover:scale-[1.01]">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#B45309] text-white flex-shrink-0 shadow-md">
                  <Percent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
                    <span>15% OFF COLLECTION</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/30">
                      POPULAR
                    </span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#D1C7BD] mt-0.5">
                    Enjoy 15% discount on all collection orders over £35.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-[#D97706]/30 flex items-start gap-4 transition-transform hover:scale-[1.01]">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#10B981] to-[#047857] text-white flex-shrink-0 shadow-md">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-white">
                    ORDER DIRECT. SAVE MORE. EAT HAPPY!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#D1C7BD] mt-0.5">
                    Skip high 3rd-party commission fees and support your local restaurant directly.
                  </p>
                </div>
              </div>

            </div>

            {/* App Store & Google Play redirect buttons */}
            <div className="pt-4 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A89F91] block">
                Download Now on iOS & Android:
              </span>
              
              <div className="flex flex-wrap items-center gap-4">
                
                {/* Apple App Store Button */}
                <a
                  href={RESTAURANT_INFO.apps.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-5 py-3 rounded-2xl bg-black border border-white/20 hover:border-[#D97706] text-white flex items-center gap-3.5 transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  <svg className="w-7 h-7 fill-current group-hover:text-[#F59E0B] transition-colors" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.85.94-2.93-.93.04-2.02.63-2.66 1.4-.56.65-.99 1.73-.86 2.78 1.04.08 2.06-.57 2.58-1.25z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-[#A89F91] leading-tight uppercase tracking-wider">Download on the</div>
                    <div className="text-base font-bold leading-tight">App Store</div>
                  </div>
                </a>

                {/* Google Play Store Button */}
                <a
                  href={RESTAURANT_INFO.apps.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-5 py-3 rounded-2xl bg-black border border-white/20 hover:border-[#D97706] text-white flex items-center gap-3.5 transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  <svg className="w-7 h-7 fill-current group-hover:text-[#F59E0B] transition-colors" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.98 1.98 0 0 1-.61-.913V2.727c.176-.367.394-.687.609-.913zm11.238 11.241l2.437 2.437-12.02 6.892 9.583-9.329zm0-2.11L5.264 1.616l12.02 6.892-2.437 2.437zm1.488 1.488l3.411-1.956c.869-.498.869-1.31 0-1.808l-3.411-1.956-1.849 1.849 1.849 1.871z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-[#A89F91] leading-tight uppercase tracking-wider">GET IT ON</div>
                    <div className="text-base font-bold leading-tight">Google Play</div>
                  </div>
                </a>

              </div>
            </div>

          </div>

          {/* Right Column: App Graphic provided by user (Mobile app post.jpeg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              
              {/* Glow backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D97706]/40 via-[#F59E0B]/20 to-transparent rounded-3xl blur-xl" />

              {/* Smartphone Mockup Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#D97706]/40 shadow-2xl bg-black">
                
                {/* Header status notch simulation */}
                <div className="bg-[#15100D] py-2 px-4 flex items-center justify-between border-b border-white/10">
                  <span className="text-[10px] font-bold text-[#F59E0B]">DELLI BITES APP</span>
                  <div className="w-12 h-1.5 rounded-full bg-white/20" />
                </div>

                <img
                  src={DRIVE_CDN('1Ah4TGFnrTkEchULkKHb-TU3Rxvu5OX58')}
                  alt="Delli Bites Mobile App Offers"
                  className="w-full h-auto object-cover"
                />

                <div className="p-4 bg-gradient-to-t from-black via-[#120D0A] to-transparent text-center">
                  <a
                    href={RESTAURANT_INFO.apps.directOrder}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl font-bold uppercase text-xs tracking-wider text-black bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#FBBF24] hover:to-[#F59E0B] transition-colors inline-flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <span>Order Online Now</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
