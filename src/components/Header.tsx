import React, { useState, useEffect } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Menu, X, Phone, Calendar, Crown, ChevronRight } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBooking: (roomId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenBooking }) => {
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
    { label: 'HOME', path: '/' },
    { label: 'ROOMS & SUITES', path: '/rooms' },
    { label: 'FACILITIES & GALLERY', path: '/facilities-gallery' },
    { label: 'CONTACT & LOCATION', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro contact banner */}
      <div className="bg-[#0B0317] border-b border-[#D4AF37]/15 py-1.5 px-4 text-xs text-[#D8C7A0] hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${HOTEL_INFO.phoneClean}`} 
              className="flex items-center space-x-1.5 hover:text-[#FFD700] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{HOTEL_INFO.phone}</span>
            </a>
            <span className="text-[#D4AF37]/30">|</span>
            <span className="truncate max-w-md">No 2, The Host, Jalan Veerasamy, Kampung Jawa, 30300 Ipoh, Perak</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[#E5C158] font-medium tracking-wider text-[11px] uppercase">Official Hotel Website</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#120722]/95 backdrop-blur-md shadow-2xl border-b border-[#D4AF37]/40 py-3'
            : 'bg-[#120722] border-b border-[#D4AF37]/20 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo Zone */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center space-x-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            aria-label="Hotel Regal Vista Home"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#AA7C11] to-[#6C4F08] p-0.5 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-[#120722] flex items-center justify-center">
                <Crown className="w-5 h-5 text-[#FFD700]" />
              </div>
            </div>
            <div>
              <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-widest text-[#F4EFEA] block group-hover:text-[#FFD700] transition-colors">
                HOTEL REGAL VISTA
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase font-sans-luxury block -mt-1 opacity-90">
                Ipoh · Perak · Malaysia
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`relative text-xs tracking-widest font-semibold uppercase transition-all py-1.5 focus:outline-none ${
                    isActive
                      ? 'text-[#FFD700]'
                      : 'text-[#E0D5C1] hover:text-[#FFD700]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#D4AF37] via-[#FFF0C2] to-[#D4AF37] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Zone: BOOK NOW CTA button */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${HOTEL_INFO.phoneClean}`}
              className="p-2.5 rounded-md border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
              title="Call Hotel Desk"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-sm font-semibold text-xs tracking-widest uppercase transition-all duration-300 shadow-md bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#AA7C11] text-[#120722] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-95"
            >
              <span className="relative z-10 flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>BOOK NOW</span>
              </span>
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#D4AF37] hover:bg-[#230F3B] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#120722]/98 backdrop-blur-xl flex flex-col justify-between p-6 animate-fadeIn">
          <div>
            {/* Top Bar inside Mobile Drawer */}
            <div className="flex items-center justify-between pb-6 border-b border-[#D4AF37]/20">
              <div className="flex items-center space-x-2">
                <Crown className="w-6 h-6 text-[#D4AF37]" />
                <span className="font-serif-luxury text-lg font-bold text-[#F4EFEA] tracking-wider">
                  HOTEL REGAL VISTA
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#D4AF37] hover:bg-[#230F3B] rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="mt-8 flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`flex items-center justify-between p-3.5 rounded-lg text-sm tracking-wider font-semibold uppercase text-left transition-all ${
                      isActive
                        ? 'bg-[#2D144B] text-[#FFD700] border-l-4 border-[#D4AF37]'
                        : 'text-[#E0D5C1] hover:bg-[#1A0B2E] hover:text-[#FFD700]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#D4AF37]/60" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Actions in Mobile Drawer */}
          <div className="space-y-3 pt-6 border-t border-[#D4AF37]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-sm font-semibold text-xs tracking-widest uppercase bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#AA7C11] text-[#120722] flex items-center justify-center space-x-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK YOUR STAY</span>
            </button>
            <a
              href={`tel:${HOTEL_INFO.phoneClean}`}
              className="w-full py-3 rounded-sm border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase flex items-center justify-center space-x-2 hover:bg-[#230F3B]"
            >
              <Phone className="w-4 h-4" />
              <span>CALL FRONT DESK</span>
            </a>
            <p className="text-center text-[11px] text-[#A89878] pt-2">
              Ipoh, Perak, Malaysia · +60 11-6251 2899
            </p>
          </div>
        </div>
      )}
    </>
  );
};
