import React, { useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles, ZoomIn } from 'lucide-react';

export default function Lightbox({
  isOpen,
  onClose,
  items = [],
  currentIndex = 0,
  onPrev,
  onNext
}) {
  const overlayRef = useRef(null);
  const closeButtonRef = useRef(null);
  const touchStartX = useRef(null);

  // Lock background body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      onPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      onNext();
    }
  }, [isOpen, onClose, onPrev, onNext]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      onNext(); // swipe left -> next
    } else if (diff < -50) {
      onPrev(); // swipe right -> prev
    }
    touchStartX.current = null;
  };

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6 md:p-10 select-none"
        role="dialog"
        aria-modal="true"
        aria-label={currentItem.title || "Look Details"}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => {
          if (e.target === overlayRef.current) onClose();
        }}
      >
        {/* Top bar controls */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-[#C5A880] px-3 py-1 bg-[#1E1815]/80 rounded-full border border-[#C5A880]/30">
            {currentIndex + 1} / {items.length}
          </span>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close Lightbox"
            className="w-10 h-10 rounded-full bg-[#1E1815]/90 border border-[#C5A880]/40 flex items-center justify-center text-[#F7F3EB] hover:text-[#E5C590] hover:border-[#E5C590] hover:scale-105 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Previous Button */}
        <button
          onClick={onPrev}
          aria-label="Previous Image"
          className="absolute left-3 sm:left-6 z-50 w-11 h-11 rounded-full bg-[#1E1815]/80 border border-[#C5A880]/30 flex items-center justify-center text-[#F7F3EB] hover:text-[#E5C590] hover:border-[#E5C590] hover:scale-110 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          aria-label="Next Image"
          className="absolute right-3 sm:right-6 z-50 w-11 h-11 rounded-full bg-[#1E1815]/80 border border-[#C5A880]/30 flex items-center justify-center text-[#F7F3EB] hover:text-[#E5C590] hover:border-[#E5C590] hover:scale-110 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main Content Modal */}
        <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row items-center bg-[#14100E] border border-[#C5A880]/30 rounded-sm overflow-hidden shadow-2xl">
          {/* Image Container */}
          <div className="relative w-full md:w-3/5 bg-black/50 flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[500px]">
            <motion.img
              key={currentItem.id}
              src={currentItem.image}
              alt={currentItem.alt || currentItem.title}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-[65vh] md:max-h-[75vh] w-auto object-contain select-none"
            />
          </div>

          {/* Look Details Sidebar */}
          <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between bg-[#1A1412] overflow-y-auto max-h-[40vh] md:max-h-[75vh]">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[#C5A880]" />
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-medium">
                  {currentItem.categoryLabel || currentItem.category}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif text-[#FDFBF7] mb-3 leading-snug">
                {currentItem.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#CFC0A8] font-light leading-relaxed mb-6">
                {currentItem.description}
              </p>

              {currentItem.details && (
                <div className="space-y-2.5 pt-4 border-t border-[#C5A880]/20 text-xs">
                  {currentItem.details.skinFinish && (
                    <div className="flex justify-between items-center text-[#EFE8DC]">
                      <span className="text-[#A8A19A]">Skin Finish:</span>
                      <span className="font-medium text-[#E5C590]">{currentItem.details.skinFinish}</span>
                    </div>
                  )}
                  {currentItem.details.eyes && (
                    <div className="flex justify-between items-center text-[#EFE8DC]">
                      <span className="text-[#A8A19A]">Eyes:</span>
                      <span className="font-medium text-[#E5C590]">{currentItem.details.eyes}</span>
                    </div>
                  )}
                  {currentItem.details.lips && (
                    <div className="flex justify-between items-center text-[#EFE8DC]">
                      <span className="text-[#A8A19A]">Lips:</span>
                      <span className="font-medium text-[#E5C590]">{currentItem.details.lips}</span>
                    </div>
                  )}
                  {currentItem.details.idealFor && (
                    <div className="flex justify-between items-center text-[#EFE8DC]">
                      <span className="text-[#A8A19A]">Occasion:</span>
                      <span className="font-medium text-[#E5C590]">{currentItem.details.idealFor}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-[#C5A880]/15 flex items-center justify-between text-[11px] text-[#A8A19A]">
              <span>ÉLAN Beauty Studio · Sakshi Choudhry</span>
              <span className="text-[#C5A880]">Pune, India</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
