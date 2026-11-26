import React, { useState, useRef, useEffect } from 'react';
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

// ─── Chapters data ────────────────────────────────────────────────────────────
const CHAPTERS = [
  {
    id: 'ch1',
    label: 'Chapter 01 • Curated Favourites',
    title: 'Our Finest Culinary Creations',
    body: 'Discover our signature collection of Indian favourites, from rich and creamy Butter Chicken and fiery Chicken 65 to perfectly chargrilled Ajwaini Paneer Tikka and the aromatic, slow-cooked goodness of Kashmiri Lamb Roganjosh. Every dish is a celebration of authentic spices, bold flavours and culinary passion.',
    imageId: '1BtyE2erOOW_t3_owbD-azdwwgZ6em9zi',
    imageAlt: 'Our Finest Culinary Creations',
    tag: "Chef's Signature",
    photoTitle: 'Butter Chicken & Tandoori Platter',
    type: 'single',
  },
  {
    id: 'ch2',
    label: 'Chapter 02 • Soulful Cooking',
    title: 'A Celebration of Indian Comfort',
    body: 'Experience the soul of Indian cuisine through rich curries, aromatic spices and lovingly prepared delicacies. From traditional favourites to unique house creations, every dish brings together authentic flavours, passion and a little taste of home.',
    imageId: '1oTaONwC5pejGq1kJpLf5Nbj-0iQxOzrH',
    imageAlt: 'A Celebration of Indian Comfort',
    tag: 'Soulful Comfort',
    photoTitle: 'Kashmiri Roganjosh & Dum Biryani',
    type: 'single',
  },
  {
    id: 'ch3',
    label: 'Chapter 03 • Cellar & Bar',
    title: 'The Perfect Pour, Every Time',
    body: 'Enjoy an impressive selection of refreshing beverages, premium spirits, fine wines and international favourites. Beautifully served and thoughtfully selected to complement every occasion.',
    type: 'duo',
    duo: [
      { imageId: '1gdp5HBEufUTAJNLIUWSefuQhtkt6ocqV', alt: 'Craft Cocktail at Delli Bites', tag: 'Craft Cocktail', title: 'Artisanal Spice-Infused Cocktail' },
      { imageId: '1op0EH9CmUa4jCoFk4f-6u_0GvvAs_7Ct', alt: 'Premium Spirits & Wine Selection', tag: 'Cellar Selection', title: 'Fine Wine & Premium Spirits' },
    ],
  },
];

// ─── Sticky Scroll Section ─────────────────────────────────────────────────────
function StickyScrollSection({ chapters }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const itemRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observers = chapters.map((_, i) => {
      const el = itemRefs.current[i];
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIdx(i);
        },
        { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [chapters]);

  const active = chapters[activeIdx];

  return (
    <div ref={containerRef} className="hidden lg:flex gap-16 xl:gap-24 items-start">

      {/* ── Left: sticky image panel ── */}
      <div className="w-[52%] sticky top-28 self-start">
        <div className="relative">
          {chapters.map((ch, i) => (
            <div
              key={ch.id}
              className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                i === activeIdx
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-4 scale-[0.98] absolute inset-0 pointer-events-none'
              }`}
            >
              {ch.type === 'single' ? (
                <SignaturePhotoCard
                  imageId={ch.imageId}
                  alt={ch.imageAlt}
                  tag={ch.tag}
                  title={ch.photoTitle}
                />
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {ch.duo.map((d) => (
                    <SignaturePhotoCard
                      key={d.imageId}
                      imageId={d.imageId}
                      alt={d.alt}
                      tag={d.tag}
                      title={d.title}
                      aspectClass="aspect-[4/5]"
                      compact
                      delayStart={60}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Chapter progress dots */}
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2.5">
            {chapters.map((_, i) => (
              <span
                key={i}
                className={`block rounded-full transition-all duration-400 ${
                  i === activeIdx
                    ? 'w-1.5 h-6 bg-[#d97706]'
                    : 'w-1.5 h-1.5 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Right: scrollable text chapters ── */}
      <div className="flex-1 flex flex-col">
        {chapters.map((ch, i) => (
          <div
            key={ch.id}
            ref={(el) => (itemRefs.current[i] = el)}
            className={`min-h-[70vh] flex flex-col justify-center py-16 space-y-6 transition-all duration-500 ${
              i === activeIdx ? 'opacity-100' : 'opacity-30'
            }`}
          >
            {/* Chapter marker */}
            <div className="flex items-center gap-3">
              <span className={`block w-6 h-px transition-all duration-500 ${i === activeIdx ? 'bg-[#d97706] w-10' : 'bg-white/20'}`} />
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#9b9185]">
                {ch.label}
              </span>
            </div>

            <h3 className="font-serif text-3xl xl:text-4xl text-[#f5f0e6] leading-tight">
              {ch.title}
            </h3>

            <p className="text-base text-[#c9c0b3] font-light leading-relaxed max-w-md">
              {ch.body}
            </p>
          </div>
        ))}
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

        {/* ── Desktop: Sticky scroll layout ── */}
        <StickyScrollSection chapters={CHAPTERS} />

        {/* ── Mobile / tablet: stacked layout (unchanged feel) ── */}
        <div className="lg:hidden space-y-20">

          {/* 1 */}
          <div className="space-y-6">
            <SignaturePhotoCard
              imageId="1BtyE2erOOW_t3_owbD-azdwwgZ6em9zi"
              alt="Our Finest Culinary Creations"
              tag="Chef's Signature"
              title="Butter Chicken & Tandoori Platter"
            />
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#9b9185] block">Chapter 01 • Curated Favourites</span>
              <h3 className="font-serif text-2xl text-[#f5f0e6] leading-tight">Our Finest Culinary Creations</h3>
              <p className="text-sm text-[#c9c0b3] font-light leading-relaxed">
                Discover our signature collection of Indian favourites, from rich and creamy Butter Chicken and fiery Chicken 65 to perfectly chargrilled Ajwaini Paneer Tikka and the aromatic, slow-cooked goodness of Kashmiri Lamb Roganjosh.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="space-y-6">
            <SignaturePhotoCard
              imageId="1oTaONwC5pejGq1kJpLf5Nbj-0iQxOzrH"
              alt="A Celebration of Indian Comfort"
              tag="Soulful Comfort"
              title="Kashmiri Roganjosh & Dum Biryani"
            />
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#9b9185] block">Chapter 02 • Soulful Cooking</span>
              <h3 className="font-serif text-2xl text-[#f5f0e6] leading-tight">A Celebration of Indian Comfort</h3>
              <p className="text-sm text-[#c9c0b3] font-light leading-relaxed">
                Experience the soul of Indian cuisine through rich curries, aromatic spices and lovingly prepared delicacies. From traditional favourites to unique house creations, every dish brings together authentic flavours, passion and a little taste of home.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div id="drinks" className="space-y-6">
            <div className="grid grid-cols-2 gap-3">
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
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#9b9185] block">Chapter 03 • Cellar & Bar</span>
              <h3 className="font-serif text-2xl text-[#f5f0e6] leading-tight">The Perfect Pour, Every Time</h3>
              <p className="text-sm text-[#c9c0b3] font-light leading-relaxed">
                Enjoy an impressive selection of refreshing beverages, premium spirits, fine wines and international favourites. Beautifully served and thoughtfully selected to complement every occasion.
              </p>
            </div>
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