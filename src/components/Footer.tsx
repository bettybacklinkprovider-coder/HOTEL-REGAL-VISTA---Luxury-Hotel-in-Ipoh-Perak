import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Crown, Phone, MapPin, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const scrollToTop = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0317] text-[#D8C7A0] border-t border-[#D4AF37]/30 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative ambient gold glow in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#2D144B]">
          
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#AA7C11] to-[#6C4F08] p-0.5 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#0B0317] flex items-center justify-center">
                  <Crown className="w-5 h-5 text-[#FFD700]" />
                </div>
              </div>
              <span className="font-serif-luxury text-2xl font-bold tracking-wider text-[#F4EFEA]">
                HOTEL REGAL VISTA
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[#A89878]">
              Experience comfort, elegance, and exceptional Malaysian hospitality in the heart of Ipoh, Perak. Designed for discerning leisure and business travelers.
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={HOTEL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-sm bg-[#2D144B] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#120722] transition-colors flex items-center space-x-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </a>
              <button
                onClick={onOpenBooking}
                className="px-3.5 py-2 rounded-sm bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-xs font-semibold text-[#120722] hover:brightness-110 transition-all flex items-center space-x-1"
              >
                <span>Book Stay</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif-luxury text-lg font-bold text-[#F4EFEA] tracking-wider mb-4 border-b border-[#D4AF37]/20 pb-2">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => scrollToTop('/')}
                  className="hover:text-[#FFD700] transition-colors flex items-center space-x-2"
                >
                  <span className="text-[#D4AF37]">›</span>
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToTop('/rooms')}
                  className="hover:text-[#FFD700] transition-colors flex items-center space-x-2"
                >
                  <span className="text-[#D4AF37]">›</span>
                  <span>Rooms & Suites</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToTop('/facilities-gallery')}
                  className="hover:text-[#FFD700] transition-colors flex items-center space-x-2"
                >
                  <span className="text-[#D4AF37]">›</span>
                  <span>Facilities & Gallery</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToTop('/contact')}
                  className="hover:text-[#FFD700] transition-colors flex items-center space-x-2"
                >
                  <span className="text-[#D4AF37]">›</span>
                  <span>Contact & Location</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-[#FFD700] transition-colors flex items-center space-x-2"
                >
                  <span className="text-[#D4AF37]">›</span>
                  <span>Reservation Requests</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="font-serif-luxury text-lg font-bold text-[#F4EFEA] tracking-wider mb-4 border-b border-[#D4AF37]/20 pb-2">
              CONTACT INFO
            </h4>
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  No 2, The Host, Jalan Veerasamy, Kampung Jawa, 30300 Ipoh, Perak, Malaysia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${HOTEL_INFO.phoneClean}`} className="hover:text-[#FFD700] transition-colors font-medium">
                  {HOTEL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-[#FFD700] transition-colors">
                  {HOTEL_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Connected & Hours */}
          <div>
            <h4 className="font-serif-luxury text-lg font-bold text-[#F4EFEA] tracking-wider mb-4 border-b border-[#D4AF37]/20 pb-2">
              HOTEL POLICIES
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-[#2D144B]">
                <span className="text-[#A89878]">Standard Check-In:</span>
                <span className="text-[#F4EFEA] font-semibold">{HOTEL_INFO.checkInTime}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#2D144B]">
                <span className="text-[#A89878]">Standard Check-Out:</span>
                <span className="text-[#F4EFEA] font-semibold">{HOTEL_INFO.checkOutTime}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#2D144B]">
                <span className="text-[#A89878]">Front Desk Service:</span>
                <span className="text-[#FFD700] font-semibold">24 Hours Daily</span>
              </div>
            </div>
            <div className="mt-4 pt-2">
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#D4AF37] hover:underline flex items-center space-x-1"
              >
                <span>View on Google Maps</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#8A7B5F] space-y-4 sm:space-y-0">
          <p>© 2026 HOTEL REGAL VISTA. All Rights Reserved.</p>
          <div className="flex space-x-6 text-[11px]">
            <span className="hover:text-[#D4AF37] cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-[#D4AF37] cursor-pointer">Terms of Stay</span>
            <span>·</span>
            <span className="hover:text-[#D4AF37] cursor-pointer">Ipoh Perak Tourism</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
