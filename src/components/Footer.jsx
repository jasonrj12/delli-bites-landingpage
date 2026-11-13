import React from 'react';
import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070504] border-t border-white/10 text-[#9b9185] pt-16 sm:pt-20 pb-10 relative overflow-hidden">
      
      {/* Subtle Warm Amber Corner Glow */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#d97706]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Architectural Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-14 border-b border-white/10">
          
          {/* Left Column: Brand Emblem & The Warm Invitation */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Brand Emblem & Wordmark */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#d97706]/40 bg-[#140f0c] p-1 shadow-lg">
                <img
                  src="/assets/delli_logo.png"
                  alt="Delli Bites Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-normal tracking-[0.06em] text-[#f5f0e6] block leading-tight">
                  DELLI BITES
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#d97706] font-medium block">
                  Uxbridge • Greater London
                </span>
              </div>
            </div>

            {/* Exact wording from user prompt */}
            <p className="font-serif text-base sm:text-lg text-[#d4cbbf] font-light leading-relaxed max-w-xl">
              The vibrant flavours of Indian cuisine await you at 40 Windsor St, Uxbridge UB8 1AB, United Kingdom. Our cosy restaurant is designed to blend tradition with modern comfort, offering inviting seating and a friendly atmosphere perfect for you and your loved ones.
            </p>

          </div>

          {/* Right Column: Interactive Contact Cards & Social Hub (No Opening Hours) */}
          <div className="lg:col-span-5 space-y-7 text-left">
            
            {/* Contact Details */}
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#d97706] block">
                CONTACT US
              </span>
              
              <div className="space-y-2.5">
                {/* Address */}
                <a
                  href={RESTAURANT_INFO.links.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/15 transition-all flex items-center gap-3.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#d97706]/10 border border-[#d97706]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MapPin className="w-4 h-4 text-[#d97706]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-[#8a8075] block leading-none mb-0.5">Address</span>
                    <span className="text-xs sm:text-sm text-[#f5f0e6] group-hover:text-[#e59a35] transition-colors font-medium truncate block">
                      40 Windsor Street UB8 1AB
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="group p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/15 transition-all flex items-center gap-3.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#d97706]/10 border border-[#d97706]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4 text-[#d97706]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-[#8a8075] block leading-none mb-0.5">Email</span>
                    <span className="text-xs sm:text-sm text-[#f5f0e6] group-hover:text-[#e59a35] transition-colors font-medium truncate block">
                      {RESTAURANT_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="group p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/15 transition-all flex items-center gap-3.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#d97706]/10 border border-[#d97706]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4 text-[#d97706]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-[#8a8075] block leading-none mb-0.5">Phone</span>
                    <span className="text-xs sm:text-sm text-[#f5f0e6] group-hover:text-[#e59a35] transition-colors font-medium truncate block">
                      {RESTAURANT_INFO.displayPhone}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Social & Review Platforms */}
            <div className="space-y-3 pt-1">
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#d97706] block">
                FIND US ONLINE
              </span>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={RESTAURANT_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/20 text-xs text-[#c9c0b3] hover:text-[#f5f0e6] transition-all flex items-center justify-between group"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#d97706] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={RESTAURANT_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/20 text-xs text-[#c9c0b3] hover:text-[#f5f0e6] transition-all flex items-center justify-between group"
                >
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#d97706] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={RESTAURANT_INFO.socials.tripadvisor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/20 text-xs text-[#c9c0b3] hover:text-[#f5f0e6] transition-all flex items-center justify-between group"
                >
                  <span>TripAdvisor</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#d97706] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={RESTAURANT_INFO.socials.thefork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/20 text-xs text-[#c9c0b3] hover:text-[#f5f0e6] transition-all flex items-center justify-between group"
                >
                  <span>TheFork</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#d97706] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Legal Line */}
        <div className="pt-8 text-center sm:text-left text-xs text-[#736a5f]">
          © {currentYear} Delli Bites
        </div>

      </div>
    </footer>
  );
}
