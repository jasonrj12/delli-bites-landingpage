import React, { useState } from 'react';
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
import ReservationModal from './components/ReservationModal';
import OrderModal from './components/OrderModal';

export default function App() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0c0907] text-[#FAF6EE] relative selection:bg-[#D97706] selection:text-black">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenReservation={() => setReservationOpen(true)}
        onOpenOrder={() => setOrderOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        {/* Header / Hero Section */}
        <Hero
          onOpenReservation={() => setReservationOpen(true)}
          onOpenOrder={() => setOrderOpen(true)}
        />

        {/* Accreditations & Trust Honours Ribbon (FSA 5, Restaurant Guru Awards) */}
        <TrustBadges />

        {/* Experience the True Taste of India in Uxbridge */}
        <ExperienceStory
          onOpenReservation={() => setReservationOpen(true)}
        />

        {/* Our Signature Selection: Finest Creations, Indian Comfort, Perfect Pour */}
        <SignatureSelection
          onOpenOrder={() => setOrderOpen(true)}
        />

        {/* Your Table, Your Taste, Your Experience (7 Feast Photographs) */}
        <FeastGallery
          onOpenOrder={() => setOrderOpen(true)}
        />

        {/* MORE FOOD. LESS FEES. MORE SAVINGS! (App promotion & savings) */}
        <AppPromo />

        {/* The Love Behind Every Visit (Guest reviews) */}
        <Testimonials />

        {/* Contact Us & Map Location */}
        <ContactSection />
      </main>

      {/* Bottom Footer Section (with Tokri logo & address) */}
      <Footer
        onOpenReservation={() => setReservationOpen(true)}
        onOpenOrder={() => setOrderOpen(true)}
      />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      {/* Interactive Online Ordering Modal */}
      <OrderModal
        isOpen={orderOpen}
        onClose={() => setOrderOpen(false)}
      />

    </div>
  );
}
