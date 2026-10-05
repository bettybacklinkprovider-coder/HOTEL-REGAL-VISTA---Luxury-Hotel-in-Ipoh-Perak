import React, { useState } from 'react';
import { FACILITIES, GALLERY_ITEMS, HOTEL_INFO } from '../data/hotelData';
import { LightboxModal } from '../components/LightboxModal';
import { 
  Crown, Wifi, Wind, Clock, Car, Sparkles, Bed, ShieldCheck, 
  Search, ExternalLink, Coffee, CheckCircle, ArrowRight 
} from 'lucide-react';

interface FacilitiesGalleryPageProps {
  onOpenBooking: () => void;
}

export const FacilitiesGalleryPage: React.FC<FacilitiesGalleryPageProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const renderFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi': return <Wifi className="w-8 h-8 text-[#FFD700]" />;
      case 'Wind': return <Wind className="w-8 h-8 text-[#FFD700]" />;
      case 'Clock': return <Clock className="w-8 h-8 text-[#FFD700]" />;
      case 'Car': return <Car className="w-8 h-8 text-[#FFD700]" />;
      case 'Sparkles': return <Sparkles className="w-8 h-8 text-[#FFD700]" />;
      case 'Bed': return <Bed className="w-8 h-8 text-[#FFD700]" />;
      default: return <Sparkles className="w-8 h-8 text-[#FFD700]" />;
    }
  };

  const filteredGallery = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#120722] text-[#F4EFEA] min-h-screen">
      
      {/* Page Hero Header */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0317] via-[#1A0B2E] to-[#120722] border-b border-[#D4AF37]/30 text-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#230F3B] border border-[#D4AF37]/40">
            <Crown className="w-4 h-4 text-[#FFD700]" />
            <span className="text-xs font-semibold tracking-widest text-[#FFD700] uppercase">
              GUEST SERVICES & PHOTO SHOWCASE
            </span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-[#F4EFEA] tracking-wider">
            Facilities & Gallery
          </h1>

          <p className="text-base sm:text-lg text-[#D8C7A0] font-light max-w-2xl mx-auto">
            Discover the thoughtful comforts and refined visual aesthetics of Hotel Regal Vista in Ipoh.
          </p>
        </div>
      </section>


      {/* ========================================================= */}
      {/* FACILITIES SECTION                                         */}
      {/* ========================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#D4AF37]">
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
            <span>EXECUTIVE FACILITIES</span>
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#F4EFEA]">
            Premium Guest Facilities
          </h2>

          <p className="text-sm text-[#D8C7A0] font-light">
            Every facility at Hotel Regal Vista is operated with meticulous attention to clean hygiene, guest safety, and supreme comfort.
          </p>
        </div>

        {/* Detailed Facility Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES.map((fac) => (
            <div
              key={fac.id}
              className="bg-[#1A0B2E] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] group flex flex-col justify-between"
            >
              <div>
                {fac.image && (
                  <div className="relative h-48 overflow-hidden border-b border-[#D4AF37]/20">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-[#1A0B2E]/50 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#120722]/90 border border-[#D4AF37]/60 flex items-center justify-center shadow-xl backdrop-blur-md">
                      {renderFacilityIcon(fac.iconName)}
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {!fac.image && (
                    <div className="w-16 h-16 rounded-xl bg-[#230F3B] border border-[#D4AF37]/40 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-inner">
                      {renderFacilityIcon(fac.iconName)}
                    </div>
                  )}

                  <h3 className="font-serif-luxury text-2xl font-bold text-[#F4EFEA] mb-3 group-hover:text-[#FFD700] transition-colors">
                    {fac.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#D8C7A0] leading-relaxed mb-6 font-light">
                    {fac.description}
                  </p>
                </div>
              </div>

              {fac.featureList && (
                <div className="p-8 pt-0">
                  <div className="pt-4 border-t border-[#2D144B]">
                    <ul className="space-y-2 text-xs text-[#C5B799]">
                      {fac.featureList.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Guest Perks Banner */}
        <div className="bg-[#230F3B] border border-[#D4AF37]/30 rounded-xl p-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="font-serif-luxury text-lg font-bold text-[#FFD700] mb-1">CCTV & Safety</h4>
            <p className="text-xs text-[#A89878]">24-hour security cameras in hallways & lobby</p>
          </div>
          <div className="border-y md:border-y-0 md:border-x border-[#2D144B] py-4 md:py-0">
            <h4 className="font-serif-luxury text-lg font-bold text-[#FFD700] mb-1">Central Location</h4>
            <p className="text-xs text-[#A89878]">2 minutes walk to Ipoh food trails & street murals</p>
          </div>
          <div>
            <h4 className="font-serif-luxury text-lg font-bold text-[#FFD700] mb-1">Express Luggage</h4>
            <p className="text-xs text-[#A89878]">Complimentary baggage holding before check-in</p>
          </div>
        </div>
      </section>


      {/* ========================================================= */}
      {/* GALLERY SECTION                                            */}
      {/* ========================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A0B2E] border-t border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#D4AF37]">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <span>PHOTO GALLERY</span>
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#F4EFEA]">
              Explore HOTEL REGAL VISTA
            </h2>

            <p className="text-sm text-[#D8C7A0] font-light">
              Click any photo to open our high-resolution luxury lightbox preview.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: 'ALL PHOTOS' },
              { id: 'exterior', label: 'EXTERIOR' },
              { id: 'lobby', label: 'LOBBY & RECEPTION' },
              { id: 'rooms', label: 'GUEST ROOMS' },
              { id: 'amenities', label: 'BATHROOMS & AMENITIES' },
              { id: 'details', label: 'COMMON AREAS' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-sm text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#120722] shadow-md'
                    : 'bg-[#230F3B] border border-[#D4AF37]/30 text-[#D8C7A0] hover:text-[#FFD700]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Responsive Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, index) => {
              // Find index in master GALLERY_ITEMS array for correct lightbox indexing
              const masterIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(masterIndex >= 0 ? masterIndex : 0)}
                  className="group relative h-72 rounded-xl overflow-hidden border border-[#D4AF37]/30 cursor-pointer shadow-xl hover:border-[#D4AF37] transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120722] via-[#120722]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  <div className="absolute bottom-5 left-5 right-5 text-left space-y-1">
                    <span className="text-[10px] text-[#FFD700] uppercase tracking-wider font-semibold block">
                      {item.categoryLabel}
                    </span>
                    <h4 className="font-serif-luxury text-lg font-bold text-[#F4EFEA] truncate">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#C5B799] line-clamp-1 font-light">
                      {item.caption}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#120722]/80 border border-[#D4AF37]/60 flex items-center justify-center text-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Final Callout */}
          <div className="pt-8 text-center">
            <button
              onClick={onOpenBooking}
              className="px-9 py-4 rounded-sm bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#AA7C11] text-[#120722] font-bold text-xs tracking-widest uppercase hover:brightness-110 transition-all shadow-xl"
            >
              BOOK YOUR STAY AT REGAL VISTA
            </button>
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
