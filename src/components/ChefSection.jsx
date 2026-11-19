import React, { useState, useRef } from 'react';
import { Award, Crown, Sparkles, Star, Utensils, ShieldCheck } from 'lucide-react';
import { CHEF_INFO, DRIVE_CDN } from '../data/restaurantData';

export default function ChefSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const photoFrameRef = useRef(null);

  const pillars = [
    {
      title: "The 25-Year Odyssey",
      subtitle: "Prestigious 5-Star Heritage",
      content:
        "With over 25 years of experience in hospitality, Chef Deepak Singh Dhami is the talented chef bringing exceptional flavors to Delli Bites. His journey includes working at top 5-star hotels like Hyatt, Grand Hyatt, Intercontinental, Kempinski Group, and Leela Palace, where he played a key role in their success."
    },
    {
      title: "The Culinary Art",
      subtitle: "Heart & Thoughtful Preparation",
      content:
        "At Delli Bites, Chef Deepak turns dining into something special. Each dish is thoughtfully prepared with his expertise and love for great food, making every bite a delightful experience."
    },
    {
      title: "Fine Dining Redefined",
      subtitle: "Authentic Delhi Flavours",
      content:
        "Delli Bites isn’t just a restaurant—it’s a place where you can explore and enjoy the best in fine dining. Join us to experience the amazing flavors crafted by Chef Deepak Singh Dhami, where his passion for food shines in every dish."
    }
  ];

  const hotelPedigree = [
    { name: "Hyatt", tag: "Global Luxury" },
    { name: "Grand Hyatt", tag: "Grand Fine Dining" },
    { name: "InterContinental", tag: "5-Star Excellence" },
    { name: "Kempinski Group", tag: "European Heritage" },
    { name: "The Leela Palace", tag: "Iconic Palatial Luxury" }
  ];

  const handleMouseMove = (e) => {
    if (!photoFrameRef.current) return;
    const rect = photoFrameRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = (e) => {
    if (!photoFrameRef.current) return;
    const rect = photoFrameRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section id="chef" className="relative py-28 sm:py-36 bg-[#0c0907] border-t border-white/5 overflow-hidden">
      
      {/* Background Architectural Watermark ("XXV" - 25 Years of Culinary Mastery) */}
      <div className="absolute top-1/2 -right-16 -translate-y-1/2 select-none pointer-events-none opacity-[0.025] font-display text-[28rem] font-bold text-[#f5f0e6] leading-none hidden xl:block">
        XXV
      </div>

      {/* Ambient Warm Golden Atmospheric Glows */}
      <div className="absolute top-1/3 -left-40 w-[550px] h-[550px] bg-[#d97706]/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#f59e0b]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">

        {/* Top Monograph Eyebrow & Headline Band */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 sm:mb-24 pb-12 border-b border-white/10">
          
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#d97706]/20 via-[#d97706]/10 to-transparent border border-[#d97706]/35 text-[11px] uppercase tracking-[0.25em] text-[#e59a35] font-medium shadow-sm">
              <Crown className="w-3.5 h-3.5 text-[#d97706]" />
              <span>MEET THE TALENTED CHEF</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#f5f0e6] leading-[1.08] tracking-tight">
              Culinary Masters <br />
              <span className="italic font-normal text-[#e59a35] font-serif">Behind Our Cuisine</span>
            </h2>
          </div>

          {/* Right Accolade Plaque */}
          <div className="lg:text-right flex items-start lg:items-end flex-col gap-2">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.02] border border-[#d97706]/25 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d97706]/30 to-black/60 border border-[#d97706]/50 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#f59e0b]" />
              </div>
              <div className="text-left">
                <span className="font-display text-lg font-bold text-[#f5f0e6] block leading-none tracking-wider">
                  25+ YEARS
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#d97706] font-medium block mt-1">
                  5-STAR LUXURY HOSPITALITY
                </span>
              </div>
            </div>
            <p className="text-xs text-[#8a8075] tracking-wide">
              Hyatt • Grand Hyatt • InterContinental • Kempinski • Leela Palace
            </p>
          </div>

        </div>

        {/* Unique Main Section Layout:
            Left: Interactive Master Portrait (Floating feast photo appears on cursor move)
            Right: Editorial Monograph with Interactive Narrative & Pedigree */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT: MASTER PORTRAIT & CURSOR REVEAL ================= */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Luxury Gold Hairline Outer Frame Accent */}
              <div className="absolute -inset-3 rounded-2xl border border-[#d97706]/20 pointer-events-none hidden sm:block" />
              <div className="absolute -inset-1 rounded-xl border border-white/5 pointer-events-none hidden sm:block" />

              {/* Primary Interactive Photo Frame */}
              <div
                ref={photoFrameRef}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative aspect-[3/4] rounded-xl cursor-crosshair"
              >
                {/* Clipped Base Frame & Portrait */}
                <div className="absolute inset-0 rounded-xl overflow-hidden bg-[#14100c] shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-white/10 group">
                  <img
                    src={DRIVE_CDN(CHEF_INFO.images.portrait)}
                    alt="Chef Deepak Singh Dhami - Executive Head Chef Delli Bites"
                    className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />

                  {/* Ambient vignette gradations */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-xl" />

                  {/* Interactive Discovery Pill (Fades out when hovered) */}
                  <div className={`hidden sm:flex absolute top-4 right-4 z-20 pointer-events-none transition-opacity duration-300 ${
                    isHovered ? 'opacity-0' : 'opacity-90'
                  }`}>
                  </div>

                  {/* Overlaid Gold Plaque inside frame */}
                  <div className="absolute bottom-5 left-5 right-5 z-20 text-left p-4 rounded-lg bg-black/60 backdrop-blur-md border border-white/15">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#e59a35] font-semibold flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#d97706]" />
                        EXECUTIVE HEAD CHEF
                      </span>
                      <div className="flex items-center gap-0.5 text-[#d97706]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 fill-[#d97706]" />
                        ))}
                      </div>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#f5f0e6] font-normal leading-tight">
                      Chef Deepak Singh Dhami
                    </h3>
                    <p className="text-[11px] text-[#a89f91] font-light mt-0.5">
                      Master of Authentic Spices & Fine Dining Heritage
                    </p>
                  </div>
                </div>

                {/* DYNAMIC FLOATING PHOTO: APPEARS ON CURSOR MOVE */}
                <div
                  className={`hidden sm:block pointer-events-none absolute z-50 w-72 sm:w-80 aspect-[16/11] rounded-xl overflow-hidden border-2 border-[#d97706] shadow-[0_30px_70px_rgba(0,0,0,0.95)] shadow-[#d97706]/20 bg-[#17120e] will-change-transform ${
                    isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{
                    left: 0,
                    top: 0,
                    transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) translate(-50%, -50%)`,
                    transition: isHovered
                      ? 'transform 0.08s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease-out, scale 0.25s ease-out'
                      : 'opacity 0.25s ease-out, scale 0.25s ease-out',
                  }}
                >
                  <img
                    src={DRIVE_CDN(CHEF_INFO.images.kitchen)}
                    alt="Chef Deepak Singh Dhami preparing fine Indian delicacies at Delli Bites"
                    className="w-full h-full object-cover filter contrast-[1.06]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 text-left flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#f5f0e6] font-medium drop-shadow-sm flex items-center gap-1.5">
                      <Utensils className="w-3 h-3 text-[#d97706]" />
                      Crafted with Passion
                    </span>
                    <span className="text-[10px] text-[#e59a35] uppercase tracking-wider font-semibold">
                      Windsor St
                    </span>
                  </div>
                </div>

              </div>

              {/* Mobile Fallback: Elegant inline display on touch devices */}
              <div className="sm:hidden mt-4 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#14100c]">
                <div className="relative aspect-[16/11]">
                  <img
                    src={DRIVE_CDN(CHEF_INFO.images.kitchen)}
                    alt="Chef Deepak Singh Dhami culinary spread at Delli Bites"
                    className="w-full h-full object-cover filter contrast-[1.05]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-left">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#f5f0e6] font-medium flex items-center gap-1.5">
                      <Utensils className="w-3 h-3 text-[#d97706]" />
                      Crafted with Passion
                    </span>
                    <span className="text-[10px] text-[#e59a35] uppercase tracking-wider font-semibold">
                      Windsor St
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT: THE EDITORIAL MONOGRAPH ================= */}
          <div className="lg:col-span-7 space-y-8 text-left sm:pt-4">

            {/* Narrative Header: The Philosophy */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#d97706] font-semibold block">
                THE PHILOSOPHY OF FLAVOUR
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#f5f0e6] leading-[1.2] font-normal">
                “Each dish is thoughtfully prepared with expertise and love for great food, making every bite a delightful experience.”
              </h3>
            </div>

            {/* Interactive Chapter Carousel / Narrative Switcher */}
            <div className="space-y-4">
              {/* Tab Selector Pills */}
              <div className="flex flex-wrap gap-2 pb-1 border-b border-white/10">
                {pillars.map((pillar, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={pillar.title}
                      onClick={() => setActiveTab(idx)}
                      className={`px-4 py-2 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 flex items-center gap-2 ${
                        isActive
                          ? 'bg-[#d97706] text-black font-semibold shadow-md'
                          : 'bg-white/[0.03] text-[#9b9185] hover:text-[#f5f0e6] hover:bg-white/[0.06] border border-white/5'
                      }`}
                    >
                      <span>0{idx + 1}.</span>
                      <span>{pillar.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Chapter Display Card */}
              <div className="p-6 sm:p-7 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 shadow-sm relative overflow-hidden transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d97706]/5 rounded-bl-full pointer-events-none" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#e59a35] font-semibold block mb-2">
                  {pillars[activeTab].subtitle}
                </span>
                <p className="text-base sm:text-lg text-[#dcd4c8] font-light leading-relaxed">
                  {pillars[activeTab].content}
                </p>
              </div>
            </div>

            {/* 5-Star Hotel Pedigree Showcase: Distinctive Crest Grid */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#9b9185] font-medium flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#d97706]" />
                  DISTINGUISHED 5-STAR HOTEL BACKGROUND
                </span>
                <span className="text-xs text-[#d97706] font-display tracking-widest hidden sm:inline">
                  WORLD-CLASS STANDARDS
                </span>
              </div>

              {/* Luxury Hotel Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {hotelPedigree.map((hotel) => (
                  <div
                    key={hotel.name}
                    className="p-3.5 rounded-lg bg-[#14100c] border border-white/10 hover:border-[#d97706]/40 transition-all duration-300 group hover:-translate-y-0.5 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-display text-sm sm:text-base font-semibold text-[#f5f0e6] group-hover:text-[#e59a35] transition-colors leading-tight">
                        {hotel.name}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8a8075] block">
                      {hotel.tag}
                    </span>
                  </div>
                ))}

                {/* 25-Year Highlight Plaque */}
                <div className="p-3.5 rounded-lg bg-gradient-to-br from-[#d97706]/20 to-[#14100c] border border-[#d97706]/40 flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 text-[#e59a35] font-display text-sm sm:text-base font-bold">
                    <Star className="w-3.5 h-3.5 fill-[#d97706] text-[#d97706]" />
                    <span>25+ Years</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#d97706] font-medium block mt-1">
                    Mastery & Passion
                  </span>
                </div>
              </div>
            </div>

            {/* Grand Invitation & Personal Chef Sign-off */}
            <div className="pt-4 border-t border-white/10 space-y-6">
              <p className="text-sm sm:text-base text-[#a89f91] font-light leading-relaxed">
                Delli Bites isn’t just a restaurant—it’s a place where you can explore and enjoy the best in fine dining. Join us to experience the amazing flavors crafted by <strong className="text-[#f5f0e6] font-normal">Chef Deepak Singh Dhami</strong>, where his passion for food shines in every dish.
              </p>

              {/* Personal Chef Sign-off */}
              <div className="flex items-center justify-between py-3 border-y border-white/5">
                <div>
                  <span className="font-serif italic text-xl sm:text-2xl text-[#f5f0e6] block tracking-wider">
                    Deepak Singh Dhami
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#d97706] font-medium block mt-0.5">
                    Executive Head Chef & Culinary Director • Delli Bites
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.02] border border-white/10 text-[10px] uppercase tracking-widest text-[#a89f91]">
                  <Sparkles className="w-3 h-3 text-[#d97706]" />
                  <span>Curated Fine Dining</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}