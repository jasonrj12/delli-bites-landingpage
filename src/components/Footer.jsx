import React from 'react';
import { MapPin, Phone, Mail, Calendar, ShoppingBag, ExternalLink, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Footer({ onOpenReservation, onOpenOrder }) {
  return (
    <footer className="relative bg-[#080504] border-t border-[#D97706]/20 text-[#D1C7BD] pt-16 pb-12 overflow-hidden">
      
      {/* Background ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-60 bg-[#D97706]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Tokri-style Logo + Description */}
          <div className="lg:col-span-5 space-y-5 text-left">
            
            {/* Logo same as tokri */}
            <div className="footer-logo">
              <img
                src="/assets/tokri_footer.png"
                alt="Delli Bites / Tokri Heritage Logo"
                className="h-14 sm:h-16 w-auto object-contain filter brightness-110 drop-shadow-md"
                onError={(e) => {
                  e.target.src = '/assets/delli_logo.png';
                }}
              />
            </div>

            {/* Exact wording from user request */}
            <p className="text-sm text-[#A89F91] leading-relaxed font-light max-w-md">
              The vibrant flavours of Indian cuisine await you at 40 Windsor St, Uxbridge UB8 1AB, United Kingdom. Our cosy restaurant is designed to blend tradition with modern comfort, offering inviting seating and a friendly atmosphere perfect for you and your loved ones.
            </p>

            {/* Social & Directory Links */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider font-bold text-[#F59E0B] block mb-3">
                Follow & Review Us
              </span>
              <div className="flex flex-wrap items-center gap-3">
                
                {/* Instagram */}
                <a
                  href={RESTAURANT_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#18120E] border border-white/10 hover:border-[#D97706] hover:bg-[#D97706] text-white hover:text-black flex items-center justify-center transition-all shadow-md group"
                  aria-label="Delli Bites Instagram"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href={RESTAURANT_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#18120E] border border-white/10 hover:border-[#D97706] hover:bg-[#D97706] text-white hover:text-black flex items-center justify-center transition-all shadow-md group"
                  aria-label="Delli Bites Facebook"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                  </svg>
                </a>

                {/* TripAdvisor */}
                <a
                  href={RESTAURANT_INFO.socials.tripadvisor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-full bg-[#18120E] border border-white/10 hover:border-[#00aa6c] hover:bg-[#00aa6c]/20 text-white flex items-center gap-1.5 text-xs font-semibold transition-all shadow-md"
                  aria-label="Delli Bites TripAdvisor"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00aa6c]" />
                  <span>TripAdvisor</span>
                </a>

                {/* TheFork */}
                <a
                  href={RESTAURANT_INFO.socials.thefork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-full bg-[#18120E] border border-white/10 hover:border-[#00a896] hover:bg-[#00a896]/20 text-white flex items-center gap-1.5 text-xs font-semibold transition-all shadow-md"
                  aria-label="Delli Bites TheFork"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00a896]" />
                  <span>TheFork</span>
                </a>

              </div>
            </div>

          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide border-b border-[#D97706]/30 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#story" className="hover:text-[#F59E0B] transition-colors">Our Story & Ambience</a>
              </li>
              <li>
                <a href="#signatures" className="hover:text-[#F59E0B] transition-colors">Signature Favourites</a>
              </li>
              <li>
                <a href="#drinks" className="hover:text-[#F59E0B] transition-colors">Craft Pours & Cocktails</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#F59E0B] transition-colors">Table Feast Gallery</a>
              </li>
              <li>
                <a href="#app" className="hover:text-[#F59E0B] transition-colors">Mobile App & 15% Savings</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#F59E0B] transition-colors">Verified Customer Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F59E0B] transition-colors">Location & Map</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details (exact match to prompt) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide border-b border-[#D97706]/30 pb-2 inline-block">
              CONTACT US
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D97706] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Address:</div>
                  <div className="text-[#A89F91]">40 Windsor Street UB8 1AB</div>
                  <div className="text-xs text-[#716960]">Uxbridge, Greater London</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D97706] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Email:</div>
                  <a href={`mailto:${RESTAURANT_INFO.email}`} className="text-[#A89F91] hover:text-[#F59E0B] transition-colors">
                    {RESTAURANT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D97706] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Phone:</div>
                  <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-[#FAF6EE] font-semibold hover:text-[#F59E0B] transition-colors">
                    {RESTAURANT_INFO.displayPhone}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                onClick={onOpenOrder}
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#D97706] hover:bg-[#F59E0B] transition-colors flex items-center gap-1.5"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Order
              </button>
              <button
                onClick={onOpenReservation}
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-[#D97706]/50 hover:bg-[#D97706]/15 transition-colors flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D97706]" />
                Book Table
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#716960] gap-4">
          <div>
            © {new Date().getFullYear()} Delli Bites Restaurant. All rights reserved. 40 Windsor Street, Uxbridge.
          </div>
          <div className="flex items-center gap-1 text-[#A89F91]">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>for authentic Indian gastronomy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
