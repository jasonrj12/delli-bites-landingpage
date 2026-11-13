import React from 'react';
import { ArrowUpRight, MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080605] border-t border-white/10 text-[#9b9185] pt-16 sm:pt-24 pb-12 overflow-hidden">
      
      {/* Ambient Warm Backlight */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#d97706]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#e59a35]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Brand Showcase: Logo, Editorial Story & Action Buttons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-14 border-b border-white/10 items-center">
          
          {/* Brand & Story (Col 1-8) */}
          <div className="lg:col-span-8 space-y-5 text-left">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-[#16110d] p-0.5 shadow-md">
                <img
                  src="/assets/delli_logo.png"
                  alt="Delli Bites Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl tracking-[0.08em] font-medium text-[#f5f0e6] block leading-tight">
                  DELLI BITES
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#d97706] font-medium block">
                  Authentic Indian Flavours • Uxbridge
                </span>
              </div>
            </div>

            {/* Exact wording from user prompt */}
            <p className="font-serif text-base sm:text-lg text-[#c9c0b3] font-light leading-relaxed max-w-2xl">
              The vibrant flavours of Indian cuisine await you at 40 Windsor St, Uxbridge UB8 1AB, United Kingdom. Our cosy restaurant is designed to blend tradition with modern comfort, offering inviting seating and a friendly atmosphere perfect for you and your loved ones.
            </p>
          </div>

          {/* Quick CTAs (Col 9-12) */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end">
            <a
              href={RESTAURANT_INFO.links.orderOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto lg:w-48 py-3 px-6 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#d97706] hover:bg-[#e59a35] transition-all text-center shadow-[0_8px_20px_rgba(217,119,6,0.25)] flex items-center justify-center gap-2 group"
            >
              <span>Order Online</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={RESTAURANT_INFO.links.bookTable}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto lg:w-48 py-3 px-6 rounded-full text-xs font-semibold uppercase tracking-wider text-[#f5f0e6] border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-center"
            >
              Book a Table
            </a>
          </div>

        </div>

        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14 border-b border-white/10 text-left">
          
          {/* Column 1: Contact Details */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d97706] block">
              Contact Us
            </span>
            <div className="text-xs space-y-3 text-[#c9c0b3]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#9b9185] block text-[10px] uppercase tracking-wider">Address</span>
                  <a 
                    href="https://maps.google.com/?q=40+Windsor+Street+Uxbridge+UB8+1AB" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#f5f0e6] hover:text-[#d97706] transition-colors leading-snug"
                  >
                    40 Windsor Street, Uxbridge UB8 1AB
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#9b9185] block text-[10px] uppercase tracking-wider">Email</span>
                  <a 
                    href={`mailto:${RESTAURANT_INFO.email}`} 
                    className="text-[#f5f0e6] hover:text-[#d97706] transition-colors"
                  >
                    {RESTAURANT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#9b9185] block text-[10px] uppercase tracking-wider">Phone</span>
                  <a 
                    href={`tel:${RESTAURANT_INFO.phone}`} 
                    className="text-[#f5f0e6] hover:text-[#d97706] transition-colors"
                  >
                    {RESTAURANT_INFO.displayPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Opening Hours */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d97706] block">
              Opening Hours
            </span>
            <div className="text-xs space-y-2 text-[#c9c0b3]">
              {RESTAURANT_INFO.hours.map((h, i) => (
                <div key={i} className="border-b border-white/5 pb-1.5">
                  <span className="text-[#9b9185] block text-[11px]">{h.days}</span>
                  <span className="text-[#f5f0e6] font-mono font-medium">{h.time}</span>
                </div>
              ))}
              <div className="pt-1 flex items-center gap-1.5 text-[11px] text-[#e59a35]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] animate-pulse" />
                <span>Open 7 Days for Lunch & Dinner</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d97706] block">
              Quick Links
            </span>
            <ul className="text-xs space-y-2.5 text-[#c9c0b3]">
              <li>
                <a href="#" className="hover:text-[#f5f0e6] transition-colors flex items-center justify-between group">
                  <span>Home</span>
                  <span className="text-[#d97706] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </li>
              <li>
                <a href="#signatures" className="hover:text-[#f5f0e6] transition-colors flex items-center justify-between group">
                  <span>Signature Menu</span>
                  <span className="text-[#d97706] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </li>
              <li>
                <a href="#drinks" className="hover:text-[#f5f0e6] transition-colors flex items-center justify-between group">
                  <span>The Perfect Pour</span>
                  <span className="text-[#d97706] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#f5f0e6] transition-colors flex items-center justify-between group">
                  <span>Feast Gallery</span>
                  <span className="text-[#d97706] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </li>
              <li>
                <a href="#app" className="hover:text-[#f5f0e6] transition-colors flex items-center justify-between group">
                  <span>App & Discounts</span>
                  <span className="text-[#d97706] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#f5f0e6] transition-colors flex items-center justify-between group">
                  <span>Customer Reviews</span>
                  <span className="text-[#d97706] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Review Profiles */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d97706] block">
              Connect & Review
            </span>
            <div className="space-y-2">
              <a
                href={RESTAURANT_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/15 text-xs text-[#c9c0b3] hover:text-[#f5f0e6] transition-all flex items-center justify-between group"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#d97706] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={RESTAURANT_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/15 text-xs text-[#c9c0b3] hover:text-[#f5f0e6] transition-all flex items-center justify-between group"
              >
                <span>Facebook</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#d97706] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={RESTAURANT_INFO.socials.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/15 text-xs text-[#c9c0b3] hover:text-[#f5f0e6] transition-all flex items-center justify-between group"
              >
                <span>TripAdvisor 5★</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#d97706] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={RESTAURANT_INFO.socials.thefork}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/15 text-xs text-[#c9c0b3] hover:text-[#f5f0e6] transition-all flex items-center justify-between group"
              >
                <span>TheFork Booking</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#d97706] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Ambient Big Serif Watermark */}
        <div className="py-8 select-none pointer-events-none opacity-[0.03] text-center">
          <span className="font-serif text-5xl sm:text-7xl md:text-9xl tracking-[0.25em] text-[#f5f0e6] block uppercase">
            DELLI BITES
          </span>
        </div>

        {/* Bottom Legal & Accreditations Line */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#736a5f] gap-4">
          <div>
            © {currentYear} Delli Bites Restaurant. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>40 Windsor Street, Uxbridge UB8 1AB</span>
            <span>•</span>
            <span className="text-[#9b9185]">Authentic Indian Gastronomy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
