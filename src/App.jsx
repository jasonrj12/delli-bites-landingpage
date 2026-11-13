import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import ExperienceStory from './components/ExperienceStory';
import SignatureSelection from './components/SignatureSelection';
import FeastGallery from './components/FeastGallery';
import AppPromo from './components/AppPromo';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0e0b09] text-[#f5f0e6] relative selection:bg-[#d97706] selection:text-black">
      
      {/* Fixed Minimal Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* First Screen: Photographic Hero */}
        <Hero />

        {/* Accreditations Ribbon (FSA 5, Restaurant Guru Awards) */}
        <TrustBadges />

        {/* The True Taste of India in Uxbridge */}
        <ExperienceStory />

        {/* Our Signature Selection: 3 Culinary Chapters */}
        <SignatureSelection />

        {/* The Feast: 7 High-resolution Dishes */}
        <FeastGallery />

        {/* App & Direct Savings */}
        <AppPromo />

        {/* The Love Behind Every Visit (Guest Quotes) */}
        <Testimonials />

        {/* Location, Hours & Map */}
        <ContactSection />
      </main>

      {/* Footer with Tokri Heritage Logo */}
      <Footer />

    </div>
  );
}
