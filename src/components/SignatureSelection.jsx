import React, { useState } from 'react';
import { X, ArrowUpRight, Download } from 'lucide-react';
import { DRIVE_CDN } from '../data/restaurantData';
import TextAnimation from './ui/scroll-text';

function WordReveal({ text, className = '', delayStart = 60, tag = '' }) {
  const words = text ? text.split(' ') : [];
  return (
    <div className="inline-flex flex-col">
      {tag && (
        <span className="overflow-hidden inline-block mb-1">
          <span className="inline-block transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[30ms] text-[10px] uppercase tracking-[0.25em] text-[#e59a35] font-semibold">
            {tag}
          </span>
        </span>
      )}
      <span className={`inline-flex flex-wrap gap-x-1.5 ${className}`}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden py-0.5">
            <span
              className="inline-block transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transitionDelay: `${delayStart + i * 50}ms`
              }}
            >
              {word}
            </span>
          </span>
        ))}
      </span>
    </div>
  );
}

function SignaturePhotoCard({
  imageId,
  alt,
  tag,
  title,
  aspectClass = 'aspect-[16/11]',
  compact = false,
  delayStart = 70,
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#17120e] flex flex-col">
      <div className={`relative ${aspectClass} overflow-hidden`}>
        <img
          src={DRIVE_CDN(imageId)}
          alt={alt}
          className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 ease-out sm:group-hover:scale-105"
          loading="lazy"
        />
        {/* Hover Ambient Vignette (Desktop) */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Word Reveal Common Name on Hover (Desktop) */}
        <div className={`hidden sm:block absolute ${compact ? 'bottom-4 left-4 right-4' : 'bottom-5 left-5 right-5'} z-20 pointer-events-none`}>
          <div className={`${compact ? 'p-2.5 sm:p-3 rounded-lg shadow-xl' : 'inline-flex p-3 sm:p-4 rounded-xl shadow-2xl'} bg-black/85 backdrop-blur-md border border-[#d97706]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
            <WordReveal
              tag={tag}
              text={title}
              className={`font-serif ${compact ? 'text-xs sm:text-sm' : 'text-lg sm:text-xl'} text-[#f5f0e6] font-normal leading-tight`}
              delayStart={delayStart}
            />
          </div>
        </div>
      </div>

      {/* Mobile Editorial Dish Caption (always visible, tactile luxury menu style) */}
      <div className={`sm:hidden ${compact ? 'px-3 py-2.5 gap-2.5' : 'px-4 py-3.5 gap-3'} flex-1 bg-gradient-to-r from-[#1c1612] via-[#17120e] to-[#14100c] border-t border-white/10 flex items-center text-left`}>
        <span
          className={`w-0.5 ${compact ? 'h-6' : 'h-7'} rounded-full bg-gradient-to-b from-[#e59a35] to-[#d97706]/30 shrink-0`}
          aria-hidden="true"
        />
        <div className="min-w-0">
          <span className={`block uppercase text-[#e59a35] font-semibold truncate ${compact ? 'text-[8px] tracking-[0.18em]' : 'text-[9px] tracking-[0.22em]'}`}>
            {tag}
          </span>
          <span className={`block font-serif text-[#f5f0e6] leading-snug mt-0.5 ${compact ? 'text-[13px]' : 'text-base'}`}>
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function SignatureSelection() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section id="signatures" className="py-24 sm:py-32 bg-[#120e0b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 sm:mb-28 text-left space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#d97706] block">
            OUR SIGNATURE SELECTION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#f5f0e6] leading-[1.12]">
            <TextAnimation as="span" text="Extraordinary Indian Delicacies" direction="up" /> <br />
            <TextAnimation as="span" text="& Craft Creations" direction="left" classname="italic text-[#e59a35]" />
          </h2>
          <p className="text-base text-[#9b9185] font-light max-w-xl">
            Explore extraordinary Indian delicacies and refreshing creations that turn every visit into an experience.
          </p>
        </div>

        {/* 1. Our Finest Culinary Creations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 sm:mb-32">
          
          <div className="lg:col-span-7">
            <SignaturePhotoCard
              imageId="1BtyE2erOOW_t3_owbD-azdwwgZ6em9zi"
              alt="Our Finest Culinary Creations"
              tag="Chef's Signature"
              title="Butter Chicken & Tandoori Platter"
            />
          </div>

          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9b9185] block">
              Chapter 01 • Curated Favourites
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#f5f0e6] leading-tight">
              Our Finest Culinary Creations
            </h3>

            <p className="text-base text-[#c9c0b3] font-light leading-relaxed">
              Discover our signature collection of Indian favourites, from rich and creamy Butter Chicken and fiery Chicken 65 to perfectly chargrilled Ajwaini Paneer Tikka and the aromatic, slow-cooked goodness of Kashmiri Lamb Roganjosh. Every dish is a celebration of authentic spices, bold flavours and culinary passion.
            </p>
          </div>

        </div>

        {/* 2. A Celebration of Indian Comfort */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 sm:mb-32">
          
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6 text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9b9185] block">
              Chapter 02 • Soulful Cooking
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#f5f0e6] leading-tight">
              A Celebration of Indian Comfort
            </h3>

            <p className="text-base text-[#c9c0b3] font-light leading-relaxed">
              Experience the soul of Indian cuisine through rich curries, aromatic spices and lovingly prepared delicacies. From traditional favourites to unique house creations, every dish brings together authentic flavours, passion and a little taste of home.
            </p>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <SignaturePhotoCard
              imageId="1oTaONwC5pejGq1kJpLf5Nbj-0iQxOzrH"
              alt="A Celebration of Indian Comfort"
              tag="Soulful Comfort"
              title="Kashmiri Roganjosh & Dum Biryani"
            />
          </div>

        </div>

        {/* 3. The Perfect Pour, Every Time */}
        <div id="drinks" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 items-stretch">
              <SignaturePhotoCard
                imageId="1gdp5HBEufUTAJNLIUWSefuQhtkt6ocqV"
                alt="Craft Cocktail at Delli Bites"
                tag="Craft Cocktail"
                title="Artisanal Spice-Infused Cocktail"
                aspectClass="aspect-[4/5]"
                compact
                delayStart={60}
              />

              <SignaturePhotoCard
                imageId="1op0EH9CmUa4jCoFk4f-6u_0GvvAs_7Ct"
                alt="Premium Spirits & Wine Selection"
                tag="Cellar Selection"
                title="Fine Wine & Premium Spirits"
                aspectClass="aspect-[4/5]"
                compact
                delayStart={60}
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9b9185] block">
              Chapter 03 • Cellar & Bar
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#f5f0e6] leading-tight">
              The Perfect Pour, Every Time
            </h3>

            <p className="text-base text-[#c9c0b3] font-light leading-relaxed">
              Enjoy an impressive selection of refreshing beverages, premium spirits, fine wines and international favourites. Beautifully served and thoughtfully selected to complement every occasion.
            </p>
          </div>

        </div>

        {/* ===== EVENT MENU CTA BUTTON ===== */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-white/5 flex justify-center">
          <button
            onClick={() => setMenuOpen(true)}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#d97706]/50 text-[#e59a35] hover:border-[#d97706] hover:text-[#f5c066] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm font-medium tracking-wide"
          >
            View Event Menu
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>

      {/* ====================== TAKEAWAY MENU DIALOG ====================== */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="relative bg-[#120e0b] border border-white/10 rounded-2xl overflow-hidden w-full max-w-sm shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/60 border border-white/10 text-[#9b9185] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Menu Image */}
            <div className="overflow-y-auto max-h-[80vh]">
              <img
                src="/assets/img/takeaway menu.png"
                alt="Delli Bites Takeaway Menu"
                className="w-full h-auto"
              />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-white/10 bg-[#17120e]">
              <a
                href="/assets/dellibites-Pdf-menu.pdf"
                download="Delli-Bites-Menu.pdf"
                className="inline-flex items-center gap-1.5 text-xs text-[#9b9185] hover:text-[#e59a35] transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </a>
              <a
                href="https://order.dellibites.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold text-black bg-[#d97706] hover:bg-[#e59a35] transition-colors"
              >
                Order Now <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}