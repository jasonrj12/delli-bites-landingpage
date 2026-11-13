import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, ArrowUpRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#signatures' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit Us', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0e0b09]/95 backdrop-blur-md py-4 border-b border-white/5 shadow-lg' 
          : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Wordmark & Emblem */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/assets/delli_logo.png" 
                alt="Delli Bites" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.08em] font-medium text-[#f5f0e6] group-hover:text-white transition-colors">
                DELLI BITES
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#9b9185] -mt-1 font-sans">
                Uxbridge • London
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Understated, clean typography) */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-[0.15em] font-medium text-[#9b9185]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#f5f0e6] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d97706] hover:after:w-full after:transition-all after:duration-250"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Links */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={RESTAURANT_INFO.links.orderOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#d97706] hover:bg-[#e59a35] transition-all hover:scale-[1.02] shadow-sm flex items-center gap-1"
            >
              <span>Order Online</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-3">
            <a
              href={RESTAURANT_INFO.links.orderOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-black bg-[#d97706]"
            >
              Order
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#f5f0e6] hover:text-[#d97706] transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e0b09]/98 border-b border-white/10 px-6 py-6 animate-fade-in backdrop-blur-xl">
          <div className="flex flex-col space-y-4 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#9b9185] hover:text-[#f5f0e6] py-2 border-b border-white/5 tracking-wider uppercase text-xs transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={RESTAURANT_INFO.links.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full font-bold uppercase text-xs tracking-wider text-black bg-[#d97706] text-center"
              >
                Order Online
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
