import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Send, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function ContactSection() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[#120D0A] border-t border-[#D97706]/20">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#D97706]/10 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1713] border border-[#D97706]/35">
            <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span className="text-xs uppercase tracking-[0.22em] font-bold text-[#F59E0B]">
              VISIT & CONNECT
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF6EE]">
            Contact Us & <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-normal">Find Our Location</span>
          </h2>

          <p className="text-base sm:text-lg text-[#D1C7BD] font-light leading-relaxed">
            Conveniently situated in the heart of Uxbridge town centre. Come dine with us or get in touch for inquiries and private bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Details Cards & Message Form */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              
              {/* Address Card */}
              <div className="glass-panel p-5 rounded-2xl border border-[#D97706]/25 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#D97706]/15 text-[#F59E0B] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#FAF6EE] uppercase tracking-wider">Address</h4>
                  <p className="text-sm text-[#D1C7BD] mt-1 font-light">
                    {RESTAURANT_INFO.shortAddress}
                  </p>
                  <p className="text-xs text-[#A89F91]">Uxbridge, Greater London, UK</p>
                  <a
                    href="https://maps.google.com/?q=40+Windsor+Street+Uxbridge+UB8+1AB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#E5A93C] hover:text-white mt-2 font-medium"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="glass-panel p-5 rounded-2xl border border-[#D97706]/25 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#D97706]/15 text-[#F59E0B] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#FAF6EE] uppercase tracking-wider">Phone</h4>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-base font-semibold text-[#FAF6EE] hover:text-[#F59E0B] mt-1 block transition-colors"
                  >
                    {RESTAURANT_INFO.displayPhone}
                  </a>
                  <p className="text-xs text-[#A89F91]">Table reservations & Takeaway enquiries</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="glass-panel p-5 rounded-2xl border border-[#D97706]/25 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#D97706]/15 text-[#F59E0B] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#FAF6EE] uppercase tracking-wider">Email</h4>
                  <a
                    href={`mailto:${RESTAURANT_INFO.email}`}
                    className="text-sm font-medium text-[#FAF6EE] hover:text-[#F59E0B] mt-1 block transition-colors"
                  >
                    {RESTAURANT_INFO.email}
                  </a>
                  <p className="text-xs text-[#A89F91]">General inquiries & catering bookings</p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="glass-panel p-5 rounded-2xl border border-[#D97706]/25 flex items-start gap-4 sm:col-span-2 lg:col-span-1">
                <div className="p-3 rounded-xl bg-[#D97706]/15 text-[#F59E0B] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm text-[#FAF6EE] uppercase tracking-wider">Opening Hours</h4>
                  <div className="mt-2 space-y-1 text-xs text-[#D1C7BD]">
                    {RESTAURANT_INFO.hours.map((h, i) => (
                      <div key={i} className="flex justify-between items-center py-0.5 border-b border-white/5 last:border-0">
                        <span className="text-[#A89F91]">{h.days}:</span>
                        <span className="font-semibold text-white">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Embedded Interactive Google Map */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-[#D97706]/30 shadow-2xl glass-panel">
              
              <div className="p-4 bg-[#18120E] border-b border-[#D97706]/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F59E0B]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    40 Windsor St, Uxbridge UB8 1AB
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=40+Windsor+Street+Uxbridge+UB8+1AB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#D97706] text-black hover:bg-[#F59E0B] transition-colors flex items-center gap-1"
                >
                  <span>Open Full Map</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>

              {/* Google Maps iFrame */}
              <div className="aspect-[4/3] sm:aspect-[16/10] w-full bg-[#1c1613]">
                <iframe
                  title="Delli Bites Uxbridge Map Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=40%20Windsor%20St,%20Uxbridge%20UB8%201AB,%20UK&t=&z=16&ie=UTF8&iwloc=&output=embed"
                />
              </div>

              <div className="p-4 bg-[#140E0A] flex flex-wrap items-center justify-between gap-3 text-xs text-[#A89F91]">
                <div>
                  <span className="text-white font-medium">Getting here:</span> Just 5 mins walk from Uxbridge Underground Station (Metropolitan & Piccadilly Lines).
                </div>
                <div className="text-[#34D399] font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span>Town Centre Parking Nearby</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
