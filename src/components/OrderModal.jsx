import React from 'react';
import { X, ShoppingBag, Truck, Percent, ExternalLink, Smartphone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function OrderModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#140E0B] border border-[#D97706]/40 rounded-3xl shadow-2xl overflow-hidden glass-panel text-left"
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#1C140F] to-[#261A13] border-b border-[#D97706]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#D97706]/20 text-[#F59E0B]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-white">Order Online</h3>
              <p className="text-xs text-[#A89F91]">Delli Bites • Delivery & Collection</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#A89F91] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          
          {/* Banner: App / Direct saving perk */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#D97706]/20 via-[#B45309]/15 to-transparent border border-[#D97706]/40 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#D97706] text-black font-bold flex-shrink-0">
              <Percent className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-[#F59E0B] uppercase tracking-wider">
                Direct Order Perks
              </h4>
              <p className="text-xs text-[#D1C7BD] mt-0.5">
                • <strong>15% OFF</strong> on all collection orders over £35<br />
                • <strong>FREE DELIVERY</strong> on orders £35+ within 3 miles
              </p>
            </div>
          </div>

          {/* Primary Action: Direct Web Order */}
          <div className="space-y-3">
            <a
              href={RESTAURANT_INFO.apps.directOrder}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-4 rounded-2xl bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#F59E0B] hover:to-[#D97706] text-white flex items-center justify-between transition-all duration-300 hover:scale-[1.01] shadow-xl group"
            >
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-black group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-black">
                    Recommended (Best Prices)
                  </div>
                  <div className="text-base font-bold text-white leading-tight">
                    Order via Delli Bites Direct
                  </div>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-white/80" />
            </a>

            {/* Mobile App Download shortcuts */}
            <div className="p-4 rounded-2xl bg-[#1b1410] border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#F59E0B]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FAF6EE]">
                    Official Delli Bites App
                  </span>
                </div>
                <span className="text-[10px] text-[#A89F91]">Exclusive Deals</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={RESTAURANT_INFO.apps.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-black border border-white/15 hover:border-[#D97706] text-xs font-semibold text-center text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Apple iOS App</span>
                </a>
                <a
                  href={RESTAURANT_INFO.apps.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-black border border-white/15 hover:border-[#D97706] text-xs font-semibold text-center text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Android App</span>
                </a>
              </div>
            </div>

            {/* Telephone Order Option */}
            <div className="text-center pt-2">
              <p className="text-xs text-[#A89F91]">
                Need custom catering or prefer ordering by phone?
              </p>
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="text-sm font-bold text-[#F59E0B] hover:text-white mt-1 inline-block transition-colors"
              >
                Call {RESTAURANT_INFO.displayPhone}
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
