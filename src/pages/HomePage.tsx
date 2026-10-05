import React, { useState } from 'react';
import { HOTEL_INFO, ROOMS, FACILITIES, GALLERY_ITEMS, HOTEL_REVIEWS } from '../data/hotelData';
import { LightboxModal } from '../components/LightboxModal';
import { 
  Crown, Calendar, Phone, MapPin, Wifi, Wind, Clock, Car, Sparkles, Bed, 
  ChevronRight, Star, ExternalLink, ShieldCheck, ArrowRight, Check 
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenBooking: (roomId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Helper function to map facility icon string to Lucide icon
  const renderFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi': return <Wifi className="w-6 h-6 text-[#D4AF37]" />;
      case 'Wind': return <Wind className="w-6 h-6 text-[#D4AF37]" />;
      case 'Clock': return <Clock className="w-6 h-6 text-[#D4AF37]" />;
      case 'Car': return <Car className="w-6 h-6 text-[#D4AF37]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
      case 'Bed': return <Bed className="w-6 h-6 text-[#D4AF37]" />;
      default: return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <div className="bg-[#120722] text-[#F4EFEA] min-h-screen">
      
      {/* ========================================================= */}
      {/* SECTION 1 — LUXURY HERO                                    */}
      {/* ========================================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        {/* Background Image with Dark Purple Scrim Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={ROOMS[0].image}
            alt="Hotel Regal Vista Luxury Exterior"
            className="w-full h-full object-cover scale-105 transform animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120722] via-[#120722]/85 to-[#120722]/60" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#120722]/50 to-[#0B0317]" />
        </div>

        {/* Decorative Gold Crest & Frame */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-[#230F3B]/80 border border-[#D4AF37]/40 shadow-xl backdrop-blur-md">
            <Crown className="w-4 h-4 text-[#FFD700]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#FFD700]">
              BOUTIQUE LUXURY IN IPOH, PERAK
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F4EFEA] leading-tight">
              WELCOME TO <br className="hidden sm:block" />
              <span className="gold-text-gradient uppercase tracking-widest block mt-2">
                HOTEL REGAL VISTA
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-[#E0D5C1] font-light leading-relaxed">
              Experience Comfort, Elegance & Exceptional Hospitality in Ipoh
            </p>
          </div>

          {/* Hero Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-sm font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#AA7C11] text-[#120722] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] active:scale-95 flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK YOUR STAY</span>
            </button>

            <button
              onClick={() => {
                onNavigate('/rooms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-sm font-semibold text-xs tracking-widest uppercase transition-all duration-300 border border-[#D4AF37]/60 text-[#D4AF37] bg-[#120722]/60 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] flex items-center justify-center space-x-2"
            >
              <span>EXPLORE ROOMS</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Stats Bar */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-[#D4AF37]/20 max-w-3xl mx-auto text-center">
            <div>
              <span className="font-serif-luxury text-2xl font-bold text-[#FFD700]">Prime</span>
              <span className="block text-[11px] text-[#A89878] uppercase tracking-wider">Ipoh City Location</span>
            </div>
            <div>
              <span className="font-serif-luxury text-2xl font-bold text-[#FFD700]">24/7</span>
              <span className="block text-[11px] text-[#A89878] uppercase tracking-wider">Guest Reception</span>
            </div>
            <div>
              <span className="font-serif-luxury text-2xl font-bold text-[#FFD700]">4 Types</span>
              <span className="block text-[11px] text-[#A89878] uppercase tracking-wider">Luxury Rooms</span>
            </div>
            <div>
              <span className="font-serif-luxury text-2xl font-bold text-[#FFD700]">100%</span>
              <span className="block text-[11px] text-[#A89878] uppercase tracking-wider">High Speed Fiber Wi-Fi</span>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* SECTION 2 — ABOUT THE HOTEL                                */}
      {/* ========================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A0B2E] border-y border-[#D4AF37]/20 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#D4AF37]">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <span>ABOUT HOTEL REGAL VISTA</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4EFEA] leading-tight">
              A Refined Stay in the Heart of Ipoh
            </h2>

            <p className="text-sm sm:text-base text-[#D8C7A0] leading-relaxed font-light">
              Situated on Jalan Veerasamy in Kampung Jawa, HOTEL REGAL VISTA stands as a beacon of comfort and understated luxury in Ipoh, Perak. Designed with a deep dark purple and metallic gold palette, our boutique establishment provides an oasis of tranquillity whether you are visiting for heritage tours, food adventures, or business trips.
            </p>

            {/* Highlight Bullets */}
            <ul className="space-y-3.5 pt-2">
              {[
                'Comfortable accommodation tailored for restful sleep',
                'Elegant environment featuring refined interior design',
                'Convenient location near famous Ipoh food trails and attractions',
                'Friendly hospitality from our dedicated front desk staff',
                'Memorable guest experience with complete modern amenities'
              ].map((point, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#F4EFEA]">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#FFD700]" />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button
                onClick={() => {
                  onNavigate('/facilities-gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-7 py-3.5 rounded-sm bg-[#230F3B] border border-[#D4AF37]/60 text-[#D4AF37] font-semibold text-xs tracking-widest uppercase hover:bg-[#D4AF37] hover:text-[#120722] transition-all flex items-center space-x-2 shadow-lg"
              >
                <span>DISCOVER MORE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden border border-[#D4AF37]/40 shadow-2xl group">
              <img
                src={ROOMS[1].image}
                alt="Hotel Regal Vista Lobby Interior"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120722] via-transparent to-transparent opacity-80" />
              
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-md bg-[#120722]/90 border border-[#D4AF37]/40 backdrop-blur-md">
                <p className="font-serif-luxury text-lg font-bold text-[#FFD700]">HOTEL REGAL VISTA</p>
                <p className="text-xs text-[#A89878]">No 2, The Host, Jalan Veerasamy, Kampung Jawa, Ipoh</p>
              </div>
            </div>
            
            {/* Background Accent Square */}
            <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border-2 border-[#D4AF37]/20 rounded-lg -z-10 hidden sm:block" />
          </div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* SECTION 3 — ROOMS & SUITES                                 */}
      {/* ========================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#D4AF37]">
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
            <span>EXECUTIVE ACCOMMODATIONS</span>
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#F4EFEA]">
            Luxury Rooms Designed for Your Comfort
          </h2>

          <p className="text-sm text-[#D8C7A0] font-light">
            Each room at Hotel Regal Vista is crafted with quiet luxury in mind, combining plush bedding, air conditioning, modern en-suite bathrooms, and dark purple velvet accents.
          </p>
        </div>

        {/* 4 Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              className="group bg-[#230F3B] border border-[#D4AF37]/25 hover:border-[#D4AF37] rounded-lg overflow-hidden transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] flex flex-col justify-between"
            >
              <div>
                {/* Room Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#230F3B] via-transparent to-transparent opacity-90" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-[#120722]/90 border border-[#D4AF37]/60 px-3.5 py-1.5 rounded-sm backdrop-blur-md">
                    <span className="text-xs text-[#A89878]">From </span>
                    <span className="font-bold text-sm text-[#FFD700]">RM {room.priceMYR}</span>
                    <span className="text-[10px] text-[#A89878]">/night</span>
                  </div>
                </div>

                {/* Room Info */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#F4EFEA] group-hover:text-[#FFD700] transition-colors">
                      {room.name}
                    </h3>
                    <span className="text-xs text-[#D4AF37] font-medium">{room.roomSize}</span>
                  </div>

                  <p className="text-xs text-[#D8C7A0] leading-relaxed">
                    {room.subtitle}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs py-2 border-y border-[#2D144B] text-[#C5B799]">
                    <div>
                      <span className="text-[#A89878] block text-[10px] uppercase">Capacity</span>
                      <span className="font-semibold text-[#F4EFEA]">{room.capacity}</span>
                    </div>
                    <div>
                      <span className="text-[#A89878] block text-[10px] uppercase">Bed Configuration</span>
                      <span className="font-semibold text-[#F4EFEA]">{room.bedType}</span>
                    </div>
                  </div>

                  {/* Amenities Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {room.amenities.slice(0, 4).map((a, i) => (
                      <span key={i} className="text-[11px] text-[#D8C7A0] bg-[#120722] px-2.5 py-1 rounded border border-[#D4AF37]/20">
                        {a}
                      </span>
                    ))}
                    {room.amenities.length > 4 && (
                      <span className="text-[11px] text-[#D4AF37] px-2 py-1">
                        +{room.amenities.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0 flex gap-3">
                <button
                  onClick={() => onOpenBooking(room.id)}
                  className="flex-1 py-3 rounded-sm bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#AA7C11] text-[#120722] font-bold text-xs tracking-widest uppercase hover:brightness-110 transition-all text-center"
                >
                  BOOK ROOM
                </button>
                <button
                  onClick={() => {
                    onNavigate('/rooms');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-4 py-3 rounded-sm border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold hover:bg-[#120722] transition-colors"
                >
                  VIEW ROOM
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>


      {/* ========================================================= */}
      {/* SECTION 4 — PREMIUM FACILITIES                             */}
      {/* ========================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A0B2E] border-y border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#D4AF37]">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <span>GUEST AMENITIES & CONVENIENCES</span>
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#F4EFEA]">
              Everything You Need for a Comfortable Stay
            </h2>

            <p className="text-sm text-[#D8C7A0] font-light">
              Designed to cater to all your needs, Hotel Regal Vista offers modern amenities ensuring convenience and safety throughout your stay in Ipoh.
            </p>
          </div>

          {/* Facility Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((facility) => (
              <div
                key={facility.id}
                className="bg-[#230F3B] border border-[#D4AF37]/25 hover:border-[#D4AF37] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] group flex flex-col justify-between"
              >
                {/* Facility Image Header */}
                {facility.image && (
                  <div className="relative h-44 overflow-hidden border-b border-[#D4AF37]/20">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#230F3B] via-[#230F3B]/60 to-transparent" />
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-[#120722]/90 border border-[#D4AF37]/60 flex items-center justify-center shadow-xl backdrop-blur-md">
                      {renderFacilityIcon(facility.iconName)}
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {!facility.image && (
                    <div className="w-12 h-12 rounded-full bg-[#120722] border border-[#D4AF37]/40 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      {renderFacilityIcon(facility.iconName)}
                    </div>
                  )}

                  <h3 className="font-serif-luxury text-xl font-bold text-[#F4EFEA] mb-2 group-hover:text-[#FFD700] transition-colors">
                    {facility.title}
                  </h3>

                  <p className="text-xs text-[#D8C7A0] leading-relaxed mb-4">
                    {facility.description}
                  </p>

                  {facility.featureList && (
                    <ul className="space-y-1.5 pt-3 border-t border-[#2D144B]">
                      {facility.featureList.map((f, idx) => (
                        <li key={idx} className="text-[11px] text-[#A89878] flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* SECTION 5 — LUXURY GALLERY                                 */}
      {/* ========================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#D4AF37]">
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
            <span>VISUAL PREVIEW</span>
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#F4EFEA]">
            Discover HOTEL REGAL VISTA
          </h2>

          <p className="text-sm text-[#D8C7A0] font-light">
            Take a visual tour through our boutique hotel exterior, reception lobby, luxury guest rooms, and polished bathrooms.
          </p>
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative h-64 rounded-lg overflow-hidden border border-[#D4AF37]/30 cursor-pointer shadow-lg hover:border-[#D4AF37] transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120722] via-[#120722]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="text-[10px] text-[#FFD700] uppercase tracking-wider font-semibold block">
                  {item.categoryLabel}
                </span>
                <h4 className="font-serif-luxury text-base font-bold text-[#F4EFEA] truncate">
                  {item.title}
                </h4>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#120722]/80 border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => {
              onNavigate('/facilities-gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-sm border border-[#D4AF37]/60 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase hover:bg-[#D4AF37] hover:text-[#120722] transition-colors"
          >
            VIEW FULL GALLERY
          </button>
        </div>
      </section>


      {/* ========================================================= */}
      {/* SECTION 6 — LOCATION & BOOKING CTA                         */}
      {/* ========================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A0B2E] via-[#120722] to-[#0B0317] border-t border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left CTA Info */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#D4AF37]">
              <Crown className="w-4 h-4" />
              <span>RESERVE YOUR STAY</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#F4EFEA] leading-tight">
              Your Elegant Stay Awaits
            </h2>

            <div className="bg-[#230F3B] border border-[#D4AF37]/40 rounded-lg p-6 space-y-4 shadow-2xl">
              <h3 className="font-serif-luxury text-2xl font-bold text-[#FFD700]">
                {HOTEL_INFO.name}
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <span className="text-[#A89878] block text-[11px] uppercase">Direct Phone Desk</span>
                    <a href={`tel:${HOTEL_INFO.phoneClean}`} className="font-bold text-[#F4EFEA] hover:text-[#FFD700]">
                      {HOTEL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <span className="text-[#A89878] block text-[11px] uppercase">Hotel Address</span>
                    <p className="text-[#F4EFEA] leading-relaxed">
                      {HOTEL_INFO.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenBooking()}
                  className="flex-1 py-3.5 rounded-sm bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#AA7C11] text-[#120722] font-bold text-xs tracking-widest uppercase hover:brightness-110 transition-all flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>BOOK YOUR STAY</span>
                </button>

                <a
                  href={`tel:${HOTEL_INFO.phoneClean}`}
                  className="py-3.5 px-6 rounded-sm border border-[#D4AF37]/60 text-[#D4AF37] font-semibold text-xs tracking-widest uppercase hover:bg-[#120722] transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL NOW</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Map Visual Box */}
          <div className="bg-[#230F3B] border border-[#D4AF37]/30 rounded-lg overflow-hidden shadow-2xl p-2 space-y-3">
            <div className="relative h-80 rounded-md overflow-hidden">
              {/* Interactive Styled Google Map Iframe */}
              <iframe
                title="Hotel Regal Vista Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.818818293706!2d101.0825!3d4.5936!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31caecf320000000%3A0x1!2sJalan+Veerasamy%2C+Kampung+Jawa%2C+30300+Ipoh%2C+Perak!5e0!3m2!1sen!2smy!4v1680000000000!5m2!1sen!2smy"
                className="w-full h-full filter invert-[0.88] hue-rotate-[190deg] contrast-[1.2]"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-[#120722]/90 border border-[#D4AF37]/50 px-3 py-1.5 rounded text-[11px] font-semibold text-[#FFD700]">
                📍 Ipoh Town Center
              </div>
            </div>

            <div className="p-3 flex items-center justify-between text-xs text-[#C5B799]">
              <span>Close to Concubine Lane & Ipoh Railway Station</span>
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#D4AF37] hover:underline flex items-center space-x-1 font-semibold"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* Lightbox Modal */}
      <LightboxModal
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigateIndex={(idx) => setLightboxIndex(idx)}
      />

    </div>
  );
};
