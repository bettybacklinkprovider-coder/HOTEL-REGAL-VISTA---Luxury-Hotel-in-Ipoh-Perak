import React, { useEffect } from 'react';
import { GalleryItem } from '../types/hotel';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigateIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigateIndex,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigateIndex((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigateIndex((currentIndex + 1) % items.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigateIndex]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigateIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigateIndex((currentIndex + 1) % items.length);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col justify-between p-4 sm:p-8 animate-fadeIn text-[#F4EFEA]"
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center z-10">
        <div>
          <span className="text-[11px] font-semibold text-[#D4AF37] uppercase tracking-widest block">
            {currentItem.categoryLabel} ({currentIndex + 1} of {items.length})
          </span>
          <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#F4EFEA]">
            {currentItem.title}
          </h3>
        </div>
        <button
          onClick={onClose}
          className="p-3 rounded-full bg-[#230F3B] border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#120722] transition-colors"
          aria-label="Close image preview"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative flex-1 flex items-center justify-center py-4 my-2 overflow-hidden">
        {/* Previous Button */}
        {items.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-[#120722]/80 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#120722] transition-all transform hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <img
          src={currentItem.image}
          alt={currentItem.title}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[75vh] max-w-full object-contain rounded-sm border border-[#D4AF37]/30 shadow-2xl"
        />

        {/* Next Button */}
        {items.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-[#120722]/80 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#120722] transition-all transform hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Caption Bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#120722]/90 border border-[#D4AF37]/30 rounded-lg p-4 max-w-2xl mx-auto text-center z-10"
      >
        <p className="text-xs sm:text-sm text-[#D8C7A0] leading-relaxed">
          {currentItem.caption}
        </p>
        <p className="text-[10px] text-[#A89878] mt-1">
          HOTEL REGAL VISTA · Ipoh, Perak, Malaysia
        </p>
      </div>
    </div>
  );
};
