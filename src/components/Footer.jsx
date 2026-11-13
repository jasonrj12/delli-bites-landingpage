import React from 'react';
import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Footer() {
  return (
    <footer className="bg-[#080605] border-t border-white/10 text-[#9b9185] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top: Tokri Heritage Logo & Closing Paragraph (per client prompt) */}
        <div className="max-w-3xl mx-auto text-center space-y-6 pb-16 border-b border-white/10">
          
          {/* Logo same as tokri */}
          <div className="flex justify-center">
            <img
              src="/assets/tokri_footer.png"
              alt="Delli Bites / Tokri Heritage Logo"
              className="h-14 sm:h-16 w-auto object-contain filter brightness-110"
              onError={(e) => {
                e.target.src = '/assets/delli_logo.png';
              }}
            />
          </div>

          {/* Exact wording from user prompt */}
          <p className="font-serif text-base sm:text-lg text-[#c9c0b3] font-light leading-relaxed">
            The vibrant flavours of Indian cuisine await you at 40 Windsor St, Uxbridge UB8 1AB, United Kingdom. Our cosy restaurant is designed to blend tradition with modern comfort, offering inviting seating and a friendly atmosphere perfect for you and your loved ones.
          </p>



        </div>

        {/* Middle: Details & Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 border-b border-white/10 text-left">
          
          <div className="md:col-span-5 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#d97706] font-semibold block">
              CONTACT US
            </span>
            <div className="text-sm space-y-2.5 text-[#c9c0b3]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                <span>
                  <span className="text-[#9b9185]">Address:</span>{' '}
                  <span className="text-[#f5f0e6]">40 Windsor Street UB8 1AB</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#d97706] shrink-0" />
                <span>
                  <span className="text-[#9b9185]">Email:</span>{' '}
                  <a href={`mailto:${RESTAURANT_INFO.email}`} className="text-[#f5f0e6] hover:text-[#d97706] transition-colors hover:underline">
                    {RESTAURANT_INFO.email}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d97706] shrink-0" />
                <span>
                  <span className="text-[#9b9185]">Phone:</span>{' '}
                  <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-[#f5f0e6] hover:text-[#d97706] transition-colors hover:underline">
                    {RESTAURANT_INFO.displayPhone}
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-wrap items-center md:justify-end gap-x-8 gap-y-3 text-xs uppercase tracking-[0.15em] font-medium text-[#c9c0b3]">
            <a
              href={RESTAURANT_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-3 h-3 text-[#d97706]" />
            </a>

            <a
              href={RESTAURANT_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Facebook</span>
              <ArrowUpRight className="w-3 h-3 text-[#d97706]" />
            </a>

            <a
              href={RESTAURANT_INFO.socials.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>TripAdvisor</span>
              <ArrowUpRight className="w-3 h-3 text-[#d97706]" />
            </a>

            <a
              href={RESTAURANT_INFO.socials.thefork}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>TheFork</span>
              <ArrowUpRight className="w-3 h-3 text-[#d97706]" />
            </a>
          </div>

        </div>

        {/* Bottom line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#736a5f] gap-4">
          <div>
            © {new Date().getFullYear()} Delli Bites
          </div>
          <div>
            Authentic Indian Gastronomy & Hospitality
          </div>
        </div>

      </div>
    </footer>
  );
}
