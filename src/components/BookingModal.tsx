import React, { useState, useEffect } from 'react';
import { ROOMS, HOTEL_INFO } from '../data/hotelData';
import { X, Calendar, User, Phone, Mail, CheckCircle2, Crown, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  selectedRoomId?: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, selectedRoomId, onClose }) => {
  const [roomId, setRoomId] = useState<string>(selectedRoomId || 'deluxe');
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [guests, setGuests] = useState<number>(2);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [addOns, setAddOns] = useState<{ breakfast: boolean; transfer: boolean; lateCheckout: boolean }>({
    breakfast: true,
    transfer: false,
    lateCheckout: false,
  });

  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [generatedRef, setGeneratedRef] = useState<string>('');

  useEffect(() => {
    if (selectedRoomId) {
      setRoomId(selectedRoomId);
    }
    // Set default check-in to tomorrow and check-out to +2 days
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfter = new Date(today);
    dayAfter.setDate(dayAfter.getDate() + 3);

    setCheckIn(tomorrow.toISOString().split('T')[0]);
    setCheckOut(dayAfter.toISOString().split('T')[0]);
  }, [selectedRoomId, isOpen]);

  if (!isOpen) return null;

  const currentRoom = ROOMS.find((r) => r.id === roomId) || ROOMS[0];

  // Calculate nights
  let nightCount = 2;
  if (checkIn && checkOut) {
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diffTime = d2.getTime() - d1.getTime();
    const calculatedNights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (calculatedNights > 0) nightCount = calculatedNights;
  }

  // Cost calculation
  const roomBaseTotal = currentRoom.priceMYR * nightCount;
  const breakfastTotal = addOns.breakfast ? 25 * guests * nightCount : 0;
  const transferTotal = addOns.transfer ? 40 : 0;
  const lateCheckoutTotal = addOns.lateCheckout ? 50 : 0;

  const subtotal = roomBaseTotal + breakfastTotal + transferTotal + lateCheckoutTotal;
  const sstTax = Math.round(subtotal * 0.08); // 8% Service tax
  const totalAmountMYR = subtotal + sstTax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'RV-' + Math.floor(100000 + Math.random() * 900000);
    setGeneratedRef(randomRef);
    setBookingConfirmed(true);
  };

  const getWhatsAppMessage = () => {
    const text = `Hello Hotel Regal Vista!%0A%0A*NEW RESERVATION REQUEST*%0A*Ref:* ${generatedRef}%0A*Guest Name:* ${encodeURIComponent(fullName)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Room:* ${encodeURIComponent(currentRoom.name)}%0A*Check-In:* ${checkIn}%0A*Check-Out:* ${checkOut} (${nightCount} night/s)%0A*Guests:* ${guests}%0A*Total Estimated:* RM ${totalAmountMYR}%0A*Special Requests:* ${encodeURIComponent(specialRequests || 'None')}%0A%0APlease confirm room availability for my stay. Thank you!`;
    return `https://wa.me/601162512899?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#1A0B2E] border border-[#D4AF37]/40 rounded-lg shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-[#F4EFEA]">
        
        {/* Header Bar */}
        <div className="bg-[#120722] px-6 py-4 border-b border-[#D4AF37]/30 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] flex items-center justify-center">
              <Crown className="w-4 h-4 text-[#120722]" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#F4EFEA] tracking-wider">
                {bookingConfirmed ? 'RESERVATION CONFIRMATION' : 'BOOK YOUR LUXURY STAY'}
              </h3>
              <p className="text-[11px] text-[#D4AF37]">HOTEL REGAL VISTA · Ipoh, Perak</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#D4AF37] hover:bg-[#230F3B] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {bookingConfirmed ? (
            /* Confirmation View */
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10 text-[#FFD700]" />
              </div>
              <div>
                <span className="text-xs tracking-widest text-[#D4AF37] uppercase font-semibold block mb-1">
                  RESERVATION REQUEST SENT
                </span>
                <h4 className="font-serif-luxury text-2xl font-bold text-[#F4EFEA]">
                  Thank You, {fullName}!
                </h4>
                <p className="text-xs text-[#C5B799] mt-2 max-w-md mx-auto">
                  Your booking request has been generated under reference code <span className="font-bold text-[#FFD700]">{generatedRef}</span>. Our reception team will review availability immediately.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-[#230F3B] border border-[#D4AF37]/30 rounded-lg p-5 text-left max-w-lg mx-auto space-y-3 text-xs">
                <div className="flex justify-between border-b border-[#2D144B] pb-2">
                  <span className="text-[#A89878]">Booking Ref:</span>
                  <span className="font-mono font-bold text-[#FFD700]">{generatedRef}</span>
                </div>
                <div className="flex justify-between border-b border-[#2D144B] pb-2">
                  <span className="text-[#A89878]">Room Type:</span>
                  <span className="font-semibold text-[#F4EFEA]">{currentRoom.name}</span>
                </div>
                <div className="flex justify-between border-b border-[#2D144B] pb-2">
                  <span className="text-[#A89878]">Check-In / Out:</span>
                  <span className="font-semibold text-[#F4EFEA]">{checkIn} to {checkOut} ({nightCount} night/s)</span>
                </div>
                <div className="flex justify-between border-b border-[#2D144B] pb-2">
                  <span className="text-[#A89878]">Guests:</span>
                  <span className="font-semibold text-[#F4EFEA]">{guests} Guest(s)</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-[#D4AF37] font-semibold">Total Estimated Price:</span>
                  <span className="text-base font-bold text-[#FFD700]">RM {totalAmountMYR} <span className="text-[10px] font-normal text-[#A89878]">(incl. SST)</span></span>
                </div>
              </div>

              {/* Instant Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-sm bg-[#25D366] text-[#000000] font-bold text-xs tracking-wider uppercase flex items-center justify-center space-x-2 shadow-lg hover:brightness-110"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp Desk</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-sm bg-[#230F3B] border border-[#D4AF37]/40 text-[#D4AF37] font-semibold text-xs tracking-wider uppercase hover:bg-[#2D144B]"
                >
                  Done
                </button>
              </div>

              <p className="text-[11px] text-[#A89878]">
                Prefer phone confirmation? Call front desk directly at <a href={`tel:${HOTEL_INFO.phoneClean}`} className="text-[#D4AF37] underline">{HOTEL_INFO.phone}</a>.
              </p>
            </div>
          ) : (
            /* Booking Form View */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Room Selection Grid */}
              <div>
                <label className="block text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
                  1. Select Accommodation Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ROOMS.map((rm) => {
                    const isSelected = rm.id === roomId;
                    return (
                      <div
                        key={rm.id}
                        onClick={() => setRoomId(rm.id)}
                        className={`cursor-pointer rounded-lg p-3.5 border transition-all flex items-center space-x-3 ${
                          isSelected
                            ? 'bg-[#2D144B] border-[#D4AF37] ring-1 ring-[#D4AF37]'
                            : 'bg-[#230F3B] border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
                        }`}
                      >
                        <img
                          src={rm.image}
                          alt={rm.name}
                          className="w-16 h-14 object-cover rounded-md border border-[#D4AF37]/30"
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="font-serif-luxury text-sm font-bold text-[#F4EFEA] truncate">
                            {rm.name}
                          </h5>
                          <p className="text-[11px] text-[#C5B799]">{rm.bedType}</p>
                          <p className="text-xs font-bold text-[#FFD700] mt-0.5">
                            RM {rm.priceMYR} <span className="text-[10px] font-normal text-[#A89878]">/ night</span>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Stay Dates & Guest Count */}
              <div>
                <label className="block text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
                  2. Select Stay Dates & Guests
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] text-[#C5B799] mb-1">Check-in Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full bg-[#230F3B] border border-[#D4AF37]/30 rounded-md px-3 py-2 text-xs text-[#F4EFEA] focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-[#C5B799] mb-1">Check-out Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full bg-[#230F3B] border border-[#D4AF37]/30 rounded-md px-3 py-2 text-xs text-[#F4EFEA] focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-[#C5B799] mb-1">Guests</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-[#230F3B] border border-[#D4AF37]/30 rounded-md px-3 py-2 text-xs text-[#F4EFEA] focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests (Family)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Add-ons Section */}
              <div>
                <label className="block text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
                  3. Optional Enhancements
                </label>
                <div className="space-y-2 text-xs">
                  <label className="flex items-center justify-between p-2.5 rounded-md bg-[#230F3B] border border-[#D4AF37]/20 cursor-pointer hover:bg-[#2D144B]">
                    <div className="flex items-center space-x-2.5">
                      <input
                        type="checkbox"
                        checked={addOns.breakfast}
                        onChange={(e) => setAddOns({ ...addOns, breakfast: e.target.checked })}
                        className="accent-[#D4AF37] w-4 h-4"
                      />
                      <div>
                        <span className="font-semibold text-[#F4EFEA]">Ipoh Heritage Breakfast Spread</span>
                        <p className="text-[11px] text-[#A89878]">Fresh local Ipoh white coffee, kaya toast, and dim sum spread</p>
                      </div>
                    </div>
                    <span className="text-[#FFD700] font-semibold">+RM 25 / pax / day</span>
                  </label>

                  <label className="flex items-center justify-between p-2.5 rounded-md bg-[#230F3B] border border-[#D4AF37]/20 cursor-pointer hover:bg-[#2D144B]">
                    <div className="flex items-center space-x-2.5">
                      <input
                        type="checkbox"
                        checked={addOns.transfer}
                        onChange={(e) => setAddOns({ ...addOns, transfer: e.target.checked })}
                        className="accent-[#D4AF37] w-4 h-4"
                      />
                      <div>
                        <span className="font-semibold text-[#F4EFEA]">Ipoh Railway / Airport Station Transfer</span>
                        <p className="text-[11px] text-[#A89878]">Private vehicle pickup to Hotel Regal Vista</p>
                      </div>
                    </div>
                    <span className="text-[#FFD700] font-semibold">+RM 40</span>
                  </label>

                  <label className="flex items-center justify-between p-2.5 rounded-md bg-[#230F3B] border border-[#D4AF37]/20 cursor-pointer hover:bg-[#2D144B]">
                    <div className="flex items-center space-x-2.5">
                      <input
                        type="checkbox"
                        checked={addOns.lateCheckout}
                        onChange={(e) => setAddOns({ ...addOns, lateCheckout: e.target.checked })}
                        className="accent-[#D4AF37] w-4 h-4"
                      />
                      <div>
                        <span className="font-semibold text-[#F4EFEA]">Guaranteed Late Check-out (2:00 PM)</span>
                        <p className="text-[11px] text-[#A89878]">Relax longer before your trip home</p>
                      </div>
                    </div>
                    <span className="text-[#FFD700] font-semibold">+RM 50</span>
                  </label>
                </div>
              </div>

              {/* Guest Details */}
              <div>
                <label className="block text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
                  4. Guest Information
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-[#C5B799] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tan Ah Hock"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#230F3B] border border-[#D4AF37]/30 rounded-md px-3 py-2 text-xs text-[#F4EFEA] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-[#C5B799] mb-1">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +60 12-345 6789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#230F3B] border border-[#D4AF37]/30 rounded-md px-3 py-2 text-xs text-[#F4EFEA] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] text-[#C5B799] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#230F3B] border border-[#D4AF37]/30 rounded-md px-3 py-2 text-xs text-[#F4EFEA] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] text-[#C5B799] mb-1">Special Requests (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. High floor preference, quiet room, late arrival..."
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      className="w-full bg-[#230F3B] border border-[#D4AF37]/30 rounded-md px-3 py-2 text-xs text-[#F4EFEA] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              {/* Price Breakdown Footer Bar */}
              <div className="bg-[#120722] border border-[#D4AF37]/40 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] text-[#A89878]">
                    {currentRoom.name} · {nightCount} Night(s) · {guests} Guest(s)
                  </div>
                  <div className="text-xl font-bold text-[#FFD700] flex items-baseline space-x-1">
                    <span>RM {totalAmountMYR}</span>
                    <span className="text-[11px] font-normal text-[#C5B799]">(incl. 8% SST tax)</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-sm bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#AA7C11] text-[#120722] font-bold text-xs tracking-widest uppercase flex items-center justify-center space-x-2 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>CONFIRM RESERVATION</span>
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
