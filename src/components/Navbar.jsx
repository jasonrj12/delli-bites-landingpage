import React, { useState, useEffect } from 'react';
import { Utensils, Phone, Calendar, ShoppingBag, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Navbar({ onOpenReservation, onOpenOrder }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Signatures', href: '#signatures' },
    { name: 'Drinks', href: '#drinks' },
    { name: 'Feast Gallery', href: '#gallery' },
    { name: 'Mobile App', href: '#app' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit Us', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0d0907]/95 backdrop-blur-md py-3 border-b border-[#d97706]/20 shadow-2xl shadow-black/80' 
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-gradient-to-br from-[#d97706] to-[#78350f] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-[#d97706]/20">
              <img 
                src="/assets/delli_logo.png" 
                alt="Delli Bites Logo" 
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#FAF6EE] group-hover:text-[#F59E0B] transition-colors">
                DELLI BITES
              </span>
              <span className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[#D97706] -mt-1">
                Uxbridge • London
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-[#D1C7BD]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 hover:text-[#FAF6EE] transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D97706] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#E5A93C] hover:text-white transition-colors"
              title="Call Delli Bites"
            >
              <Phone className="w-3.5 h-3.5 text-[#D97706]" />
              <span>{RESTAURANT_INFO.displayPhone}</span>
            </a>

            <button
              onClick={onOpenOrder}
              className="px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#d97706] to-[#b45309] hover:from-[#f59e0b] hover:to-[#d97706] shadow-lg shadow-[#d97706]/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Order Online</span>
            </button>

            <button
              onClick={onOpenReservation}
              className="px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#FAF6EE] border border-[#D97706]/60 hover:bg-[#D97706]/15 hover:border-[#D97706] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Book a Table</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenOrder}
              className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide text-white bg-[#D97706]"
            >
              Order
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#FAF6EE] hover:text-[#D97706] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0907]/98 border-b border-[#d97706]/20 px-6 py-6 animate-fade-in shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col space-y-4 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#D1C7BD] hover:text-[#F59E0B] py-2 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder();
                }}
                className="w-full py-3 rounded-xl font-bold uppercase text-xs tracking-wider text-white bg-gradient-to-r from-[#d97706] to-[#b45309] flex items-center justify-center gap-2 shadow-lg shadow-[#d97706]/30"
              >
                <ShoppingBag className="w-4 h-4" />
                Order Online
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 rounded-xl font-bold uppercase text-xs tracking-wider text-[#FAF6EE] border border-[#d97706]/50 hover:bg-[#d97706]/15 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#D97706]" />
                Book a Table
              </button>
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="text-center text-sm font-semibold text-[#D97706] pt-2 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call {RESTAURANT_INFO.displayPhone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
