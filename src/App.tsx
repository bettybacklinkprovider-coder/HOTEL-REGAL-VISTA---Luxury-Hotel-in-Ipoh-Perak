import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { FacilitiesGalleryPage } from './pages/FacilitiesGalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState<string | undefined>(undefined);

  // Sync state with browser popstate (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
  };

  const handleOpenBooking = (roomId?: string) => {
    setSelectedRoomForBooking(roomId);
    setIsBookingOpen(true);
  };

  // Render active page based on route
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/rooms':
        return <RoomsPage onOpenBooking={handleOpenBooking} />;
      case '/facilities-gallery':
        return <FacilitiesGalleryPage onOpenBooking={handleOpenBooking} />;
      case '/contact':
        return <ContactPage onOpenBooking={handleOpenBooking} />;
      case '/':
      default:
        return <HomePage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#120722] text-[#F4EFEA] flex flex-col font-sans-luxury selection:bg-[#D4AF37] selection:text-[#120722]">
      
      {/* Sticky Top Header */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer across all pages */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Global Booking Reservation Drawer / Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        selectedRoomId={selectedRoomForBooking}
        onClose={() => setIsBookingOpen(false)}
      />

    </div>
  );
}
