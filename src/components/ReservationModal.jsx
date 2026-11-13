import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Phone, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function ReservationModal({ isOpen, onClose }) {
  const [step, setStep] = useState('form'); // 'form' or 'success'
  const [booking, setBooking] = useState({
    date: '',
    time: '19:00',
    guests: '2 Guests',
    name: '',
    phone: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
    setBooking({
      date: '',
      time: '19:00',
      guests: '2 Guests',
      name: '',
      phone: '',
      notes: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#140E0B] border border-[#D97706]/40 rounded-3xl shadow-2xl overflow-hidden glass-panel text-left"
      >
        {/* Header Ribbon */}
        <div className="p-6 bg-gradient-to-r from-[#1C140F] to-[#261A13] border-b border-[#D97706]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#D97706]/20 text-[#F59E0B]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-white">Book a Table</h3>
              <p className="text-xs text-[#A89F91]">Delli Bites • 40 Windsor St, Uxbridge</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#A89F91] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Date */}
              <div>
                <label className="block text-xs font-semibold text-[#D1C7BD] uppercase tracking-wider mb-1.5">
                  Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={booking.date}
                    onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                    className="w-full bg-[#1b1410] border border-white/10 focus:border-[#D97706] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Time */}
              <div>
                <label className="block text-xs font-semibold text-[#D1C7BD] uppercase tracking-wider mb-1.5">
                  Time
                </label>
                <select
                  value={booking.time}
                  onChange={(e) => setBooking({ ...booking, time: e.target.value })}
                  className="w-full bg-[#1b1410] border border-white/10 focus:border-[#D97706] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none"
                >
                  <option value="12:00">12:00 PM (Lunch)</option>
                  <option value="12:30">12:30 PM (Lunch)</option>
                  <option value="13:00">1:00 PM (Lunch)</option>
                  <option value="13:30">1:30 PM (Lunch)</option>
                  <option value="14:00">2:00 PM (Lunch)</option>
                  <option value="17:30">5:30 PM (Dinner)</option>
                  <option value="18:00">6:00 PM (Dinner)</option>
                  <option value="18:30">6:30 PM (Dinner)</option>
                  <option value="19:00">7:00 PM (Dinner)</option>
                  <option value="19:30">7:30 PM (Dinner)</option>
                  <option value="20:00">8:00 PM (Dinner)</option>
                  <option value="20:30">8:30 PM (Dinner)</option>
                  <option value="21:00">9:00 PM (Dinner)</option>
                </select>
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="block text-xs font-semibold text-[#D1C7BD] uppercase tracking-wider mb-1.5">
                Number of Guests
              </label>
              <div className="grid grid-cols-4 gap-2">
                {['1 Guest', '2 Guests', '4 Guests', '6+ Guests'].map((g) => (
                  <button
                    type="button"
                    key={g}
                    onClick={() => setBooking({ ...booking, guests: g })}
                    className={`py-2 px-2 rounded-xl text-xs font-medium border transition-colors ${
                      booking.guests === g
                        ? 'bg-[#D97706] border-[#F59E0B] text-black font-bold'
                        : 'bg-[#1b1410] border-white/10 text-[#D1C7BD] hover:border-[#D97706]/40'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#D1C7BD] uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={booking.name}
                  onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                  className="w-full bg-[#1b1410] border border-white/10 focus:border-[#D97706] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#D1C7BD] uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 07123 456789"
                  value={booking.phone}
                  onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                  className="w-full bg-[#1b1410] border border-white/10 focus:border-[#D97706] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Special Request */}
            <div>
              <label className="block text-xs font-semibold text-[#D1C7BD] uppercase tracking-wider mb-1.5">
                Special Requests / Dietary Notes (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Allergies, high chair, birthday celebration..."
                value={booking.notes}
                onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                className="w-full bg-[#1b1410] border border-white/10 focus:border-[#D97706] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-full font-bold uppercase text-xs tracking-wider text-white bg-gradient-to-r from-[#d97706] to-[#b45309] hover:from-[#f59e0b] hover:to-[#d97706] shadow-xl shadow-[#d97706]/30 transition-all"
              >
                Confirm Table Reservation
              </button>
            </div>

            <p className="text-center text-xs text-[#A89F91]">
              Prefer to book over the phone? Call us directly at{' '}
              <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-[#F59E0B] font-bold underline">
                {RESTAURANT_INFO.displayPhone}
              </a>
            </p>

          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#10B981]/20 border border-[#10B981] flex items-center justify-center text-[#10B981] mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-white">
              Reservation Request Received!
            </h3>

            <p className="text-sm text-[#D1C7BD]">
              Thank you, <span className="font-semibold text-white">{booking.name}</span>. We look forward to welcoming you for {booking.guests} on{' '}
              <span className="font-semibold text-white">{booking.date || 'today'}</span> at{' '}
              <span className="font-semibold text-white">{booking.time}</span>.
            </p>

            <div className="p-4 rounded-xl bg-[#1b1410] border border-white/10 text-xs text-[#A89F91] space-y-1">
              <div>📍 40 Windsor Street, Uxbridge UB8 1AB</div>
              <div>📞 Confirmation SMS will be sent to {booking.phone}</div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#D97706] hover:bg-[#F59E0B]"
              >
                Close & Return
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
