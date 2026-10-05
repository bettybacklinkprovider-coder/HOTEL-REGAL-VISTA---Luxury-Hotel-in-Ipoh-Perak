import React, { useState } from 'react';
import { HOTEL_INFO, IPOH_ATTRACTIONS } from '../data/hotelData';
import { 
  Crown, Phone, MapPin, Mail, Calendar, Users, MessageSquare, 
  Send, ExternalLink, CheckCircle2, Navigation, Compass 
} from 'lucide-react';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [guests, setGuests] = useState<number>(2);
  const [message, setMessage] = useState<string>('');
  
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'RV-REQ-' + Math.floor(10000 + Math.random() * 90000);
    setBookingRef(ref);
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#120722] text-[#F4EFEA] min-h-screen">
      
      {/* Hero Header */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0317] via-[#1A0B2E] to-[#120722] border-b border-[#D4AF37]/30 text-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#230F3B] border border-[#D4AF37]/40">
            <Crown className="w-4 h-4 text-[#FFD700]" />
            <span className="text-xs font-semibold tracking-widest text-[#FFD700] uppercase">
              GET IN TOUCH WITH REGAL VISTA
            </span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-[#F4EFEA] tracking-wider">
            Contact & Location
          </h1>

          <p className="text-base sm:text-lg text-[#D8C7A0] font-light max-w-2xl mx-auto">
            We are here to make your visit to Ipoh, Perak extraordinary. Reach out directly or send a booking request.
          </p>
        </div>
      </section>

      {/* Main Contact Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Details Cards (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-2">
                <span className="w-4 h-[1px] bg-[#D4AF37]" />
                <span>HOTEL INFORMATION</span>
              </div>
              <h2 className="font-serif-luxury text-3xl font-bold text-[#F4EFEA]">
                HOTEL REGAL VISTA
              </h2>
              <p className="text-xs text-[#D8C7A0] mt-2 leading-relaxed">
                Experience refined Malaysian hospitality in central Ipoh. Our reception desk is open 24/7 to assist with your stay.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              
              {/* Phone Card */}
              <div className="bg-[#1A0B2E] border border-[#D4AF37]/30 p-6 rounded-lg flex items-start space-x-4 hover:border-[#D4AF37] transition-all shadow-lg">
                <div className="w-12 h-12 rounded-full bg-[#230F3B] border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#FFD700]" />
                </div>
                <div>
                  <span className="text-[10px] text-[#A89878] uppercase tracking-wider block">Direct Phone Line / WhatsApp</span>
                  <a href={`tel:${HOTEL_INFO.phoneClean}`} className="font-serif-luxury text-xl font-bold text-[#F4EFEA] hover:text-[#FFD700] transition-colors">
                    {HOTEL_INFO.phone}
                  </a>
                  <p className="text-[11px] text-[#C5B799] mt-1">Available 24/7 for instant enquiries</p>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-[#1A0B2E] border border-[#D4AF37]/30 p-6 rounded-lg flex items-start space-x-4 hover:border-[#D4AF37] transition-all shadow-lg">
                <div className="w-12 h-12 rounded-full bg-[#230F3B] border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#FFD700]" />
                </div>
                <div>
                  <span className="text-[10px] text-[#A89878] uppercase tracking-wider block">Official Address</span>
                  <p className="text-sm font-semibold text-[#F4EFEA] leading-relaxed mt-0.5">
                    {HOTEL_INFO.address}
                  </p>
                  <p className="text-[11px] text-[#C5B799] mt-1">Located in Jalan Veerasamy, Kampung Jawa, Ipoh</p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-[#1A0B2E] border border-[#D4AF37]/30 p-6 rounded-lg flex items-start space-x-4 hover:border-[#D4AF37] transition-all shadow-lg">
                <div className="w-12 h-12 rounded-full bg-[#230F3B] border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-[#FFD700]" />
                </div>
                <div>
                  <span className="text-[10px] text-[#A89878] uppercase tracking-wider block">WhatsApp Front Desk</span>
                  <a
                    href={HOTEL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-[#FFD700] underline hover:text-white"
                  >
                    Chat with Reception on WhatsApp ›
                  </a>
                </div>
              </div>

            </div>

            {/* Ipoh Nearby Attractions List */}
            <div className="bg-[#1A0B2E] border border-[#D4AF37]/20 p-6 rounded-lg space-y-3">
              <h4 className="font-serif-luxury text-lg font-bold text-[#FFD700] flex items-center space-x-2">
                <Compass className="w-4 h-4 text-[#D4AF37]" />
                <span>Nearby Ipoh Landmarks</span>
              </h4>
              <div className="space-y-2.5 text-xs">
                {IPOH_ATTRACTIONS.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="border-b border-[#2D144B] pb-2 last:border-0 last:pb-0">
                    <div className="flex justify-between font-semibold text-[#F4EFEA]">
                      <span>{item.name}</span>
                      <span className="text-[#D4AF37]">{item.distance}</span>
                    </div>
                    <p className="text-[11px] text-[#A89878] mt-0.5">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Luxury Styled Form (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-[#1A0B2E] border border-[#D4AF37]/40 rounded-xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-full pointer-events-none" />

            <div className="mb-8">
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest block mb-1">
                RESERVATION & GENERAL ENQUIRIES
              </span>
              <h3 className="font-serif-luxury text-3xl font-bold text-[#F4EFEA]">
                Send Booking Request
              </h3>
              <p className="text-xs text-[#C5B799] mt-1">
                Fill out your stay details below and our reservations desk will confirm availability promptly.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-[#230F3B] border border-[#D4AF37] rounded-lg p-8 text-center space-y-4 my-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-[#FFD700]" />
                </div>
                <h4 className="font-serif-luxury text-2xl font-bold text-[#F4EFEA]">
                  Booking Request Received!
                </h4>
                <p className="text-xs text-[#D8C7A0] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-[#FFD700]">{fullName}</span>. Your request <span className="font-mono font-bold text-[#FFD700]">{bookingRef}</span> has been logged. Our hotel team will contact you at <span className="text-white">{phone}</span> or <span className="text-white">{email}</span> shortly.
                </p>

                <div className="pt-4 flex justify-center space-x-3">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-sm bg-[#120722] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold hover:bg-[#2D144B]"
                  >
                    Send Another Inquiry
                  </button>
                  <a
                    href={HOTEL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2.5 rounded-sm bg-[#25D366] text-black font-bold text-xs uppercase flex items-center space-x-1"
                  >
                    <span>Instant WhatsApp Desk</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#D8C7A0] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mr. David Wong"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#230F3B] border border-[#D4AF37]/30 rounded-md px-4 py-3 text-xs text-[#F4EFEA] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#D8C7A0] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +60 12-345 6789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#230F3B] border border-[#D4AF37]/30 rounded-md px-4 py-3 text-xs text-[#F4EFEA] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D8C7A0] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#230F3B] border border-[#D4AF37]/30 rounded-md px-4 py-3 text-xs text-[#F4EFEA] focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#D8C7A0] mb-1.5">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      required
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-[#230F3B] border border-[#D4AF37]/30 rounded-md px-3 py-3 text-xs text-[#F4EFEA] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#D8C7A0] mb-1.5">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      required
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-[#230F3B] border border-[#D4AF37]/30 rounded-md px-3 py-3 text-xs text-[#F4EFEA] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#D8C7A0] mb-1.5">
                      Number of Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-[#230F3B] border border-[#D4AF37]/30 rounded-md px-3 py-3 text-xs text-[#F4EFEA] focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D8C7A0] mb-1.5">
                    Message / Special Requests
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your room preferences, estimated arrival time, or special occasions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#230F3B] border border-[#D4AF37]/30 rounded-md px-4 py-3 text-xs text-[#F4EFEA] focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-sm bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#AA7C11] text-[#120722] font-bold text-xs tracking-widest uppercase flex items-center justify-center space-x-2 shadow-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND BOOKING REQUEST</span>
                </button>

              </form>
            )}

          </div>

        </div>
      </section>


      {/* Interactive Location & Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A0B2E] border-t border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#D4AF37]">
              <MapPin className="w-4 h-4" />
              <span>INTERACTIVE MAP & DIRECTIONS</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#F4EFEA]">
              Hotel Location & Access
            </h2>
            <p className="text-xs sm:text-sm text-[#D8C7A0]">
              HOTEL REGAL VISTA · No 2, The Host, Jalan Veerasamy, Kampung Jawa, 30300 Ipoh, Perak, Malaysia
            </p>
          </div>

          <div className="bg-[#230F3B] border border-[#D4AF37]/40 rounded-xl overflow-hidden p-3 shadow-2xl space-y-4">
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <iframe
                title="Hotel Regal Vista Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.818818293706!2d101.0825!3d4.5936!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31caecf320000000%3A0x1!2sJalan+Veerasamy%2C+Kampung+Jawa%2C+30300+Ipoh%2C+Perak!5e0!3m2!1sen!2smy!4v1680000000000!5m2!1sen!2smy"
                className="w-full h-full filter invert-[0.88] hue-rotate-[190deg] contrast-[1.2]"
                loading="lazy"
              />
            </div>

            <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-serif-luxury font-bold text-[#FFD700]">
                  HOTEL REGAL VISTA, IPOH
                </p>
                <p className="text-xs text-[#A89878]">
                  4 mins from Concubine Lane · 5 mins from Ipoh Railway Station
                </p>
              </div>

              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-sm bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#120722] font-bold text-xs tracking-widest uppercase flex items-center space-x-2 shadow-lg hover:brightness-110"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0317] border-t border-[#D4AF37]/30 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <Crown className="w-12 h-12 text-[#FFD700] mx-auto opacity-90" />
          
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#F4EFEA]">
            Make Your Stay Memorable
          </h2>

          <p className="text-sm sm:text-base text-[#D8C7A0] font-light max-w-xl mx-auto">
            Experience comfort, elegance and warm hospitality at HOTEL REGAL VISTA.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-sm bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#AA7C11] text-[#120722] font-bold text-xs tracking-widest uppercase shadow-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK YOUR STAY</span>
            </button>

            <a
              href={`tel:${HOTEL_INFO.phoneClean}`}
              className="w-full sm:w-auto px-8 py-4 rounded-sm border border-[#D4AF37]/60 text-[#D4AF37] font-semibold text-xs tracking-widest uppercase hover:bg-[#120722] flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>CALL NOW</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
