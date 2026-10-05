import React, { useState } from 'react';
import { ROOMS, HOTEL_INFO } from '../data/hotelData';
import { LightboxModal } from '../components/LightboxModal';
import { Room } from '../types/hotel';
import { 
  Crown, Calendar, Bed, Users, Maximize2, CheckCircle2, Sparkles, Shield, ChevronRight, Phone 
} from 'lucide-react';

interface RoomsPageProps {
  onOpenBooking: (roomId?: string) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedRoomForModal, setSelectedRoomForModal] = useState<Room | null>(null);

  const filteredRooms = activeTab === 'all' 
    ? ROOMS 
    : ROOMS.filter(r => r.id === activeTab);

  return (
    <div className="bg-[#120722] text-[#F4EFEA] min-h-screen">
      
      {/* Page Hero Header */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0317] via-[#1A0B2E] to-[#120722] border-b border-[#D4AF37]/30 text-center overflow-hidden">
        <div className="absolute inset-0 bg-radial from-[#2D144B]/40 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#230F3B] border border-[#D4AF37]/40">
            <Crown className="w-4 h-4 text-[#FFD700]" />
            <span className="text-xs font-semibold tracking-widest text-[#FFD700] uppercase">
              HOTEL REGAL VISTA ACCOMMODATIONS
            </span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-[#F4EFEA] tracking-wider">
            Rooms & Suites
          </h1>

          <p className="text-base sm:text-lg text-[#D8C7A0] font-light max-w-2xl mx-auto">
            Elegant Spaces. Exceptional Comfort.
          </p>

          <p className="text-xs text-[#A89878] max-w-xl mx-auto pt-2">
            Each room is designed with dark purple velvet accents, metallic gold fixtures, high-speed Wi-Fi, and 400-thread-count cotton linens for a serene stay in Ipoh.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#D4AF37]/15">
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-sm text-xs font-semibold tracking-widest uppercase transition-all ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#120722] shadow-md'
                : 'bg-[#230F3B] border border-[#D4AF37]/30 text-[#D8C7A0] hover:text-[#FFD700]'
            }`}
          >
            ALL ROOMS
          </button>
          {ROOMS.map((r) => (
            <button
              key={r.id}
              onClick={() => setActiveTab(r.id)}
              className={`px-5 py-2.5 rounded-sm text-xs font-semibold tracking-widest uppercase transition-all ${
                activeTab === r.id
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#120722] shadow-md'
                  : 'bg-[#230F3B] border border-[#D4AF37]/30 text-[#D8C7A0] hover:text-[#FFD700]'
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>
      </section>

      {/* Detailed Rooms List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        {filteredRooms.map((room, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={room.id}
              className="bg-[#1A0B2E] border border-[#D4AF37]/30 rounded-xl overflow-hidden shadow-2xl transition-all hover:border-[#D4AF37]/60 grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Image Section */}
              <div className={`lg:col-span-6 relative group overflow-hidden min-h-[350px] ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-transparent to-transparent opacity-70" />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 bg-[#120722]/90 border border-[#D4AF37]/50 px-3 py-1.5 rounded text-xs font-semibold text-[#FFD700]">
                  {room.capacity}
                </div>

                <div className="absolute bottom-4 right-4 bg-[#120722]/90 border border-[#D4AF37]/60 px-4 py-2 rounded text-right">
                  <span className="text-[10px] text-[#A89878] uppercase block">Rate From</span>
                  <span className="font-serif-luxury text-xl font-bold text-[#FFD700]">RM {room.priceMYR}</span>
                  <span className="text-[10px] text-[#C5B799]"> / night</span>
                </div>
              </div>

              {/* Content Section */}
              <div className={`lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-4 h-[1px] bg-[#D4AF37]" />
                    <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                      {room.roomSize} · EXECUTIVE LEVEL
                    </span>
                  </div>

                  <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#F4EFEA]">
                    {room.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#FFD700] italic font-serif-luxury">
                    "{room.subtitle}"
                  </p>

                  <p className="text-xs sm:text-sm text-[#D8C7A0] leading-relaxed font-light">
                    {room.detailedDescription}
                  </p>

                  {/* Room Specs Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-3 border-y border-[#2D144B] text-xs">
                    <div className="flex items-center space-x-2">
                      <Bed className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <div>
                        <span className="text-[10px] text-[#A89878] block">Bed Type</span>
                        <span className="font-semibold text-[#F4EFEA] text-[11px]">{room.bedType}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <div>
                        <span className="text-[10px] text-[#A89878] block">Occupancy</span>
                        <span className="font-semibold text-[#F4EFEA] text-[11px]">{room.capacity}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
                      <Maximize2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <div>
                        <span className="text-[10px] text-[#A89878] block">Room Dimensions</span>
                        <span className="font-semibold text-[#F4EFEA] text-[11px]">{room.roomSize}</span>
                      </div>
                    </div>
                  </div>

                  {/* Room Highlights */}
                  <div>
                    <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
                      Key Room Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F4EFEA]">
                      {room.highlights.map((hl, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities List */}
                  <div>
                    <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
                      Included Amenities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity, i) => (
                        <span key={i} className="text-[11px] text-[#D8C7A0] bg-[#230F3B] border border-[#D4AF37]/20 px-3 py-1 rounded">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom Action CTA */}
                <div className="pt-4 border-t border-[#2D144B] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] text-[#A89878] uppercase block">Price per night</span>
                    <div className="flex items-baseline space-x-2">
                      <span className="font-serif-luxury text-2xl font-bold text-[#FFD700]">RM {room.priceMYR}</span>
                      {room.originalPriceMYR && (
                        <span className="text-xs text-[#8A7B5F] line-through">RM {room.originalPriceMYR}</span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenBooking(room.id)}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#AA7C11] text-[#120722] font-bold text-xs tracking-widest uppercase hover:brightness-110 transition-all flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>BOOK NOW</span>
                  </button>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Assistance CTA Banner */}
      <section className="py-16 px-4 bg-[#0B0317] border-t border-[#D4AF37]/30 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="font-serif-luxury text-2xl font-bold text-[#F4EFEA]">
            Need Assistance Selecting Your Room?
          </h3>
          <p className="text-xs text-[#D8C7A0]">
            Our front desk is available 24/7 to answer room enquiries or assist with group bookings.
          </p>
          <div className="pt-2 flex justify-center space-x-4">
            <a
              href={`tel:${HOTEL_INFO.phoneClean}`}
              className="px-6 py-3 rounded-sm border border-[#D4AF37] text-[#D4AF37] font-semibold text-xs tracking-widest uppercase hover:bg-[#D4AF37] hover:text-[#120722] transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>CALL FRONT DESK ({HOTEL_INFO.phone})</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
