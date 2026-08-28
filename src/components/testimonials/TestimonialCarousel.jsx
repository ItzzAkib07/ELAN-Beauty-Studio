import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { testimonialsList } from '../../data/testimonials';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonialsList.length;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const current = testimonialsList[currentIndex];

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      role="region"
      aria-label="Client Testimonials Carousel"
    >
      {/* Decorative Gold Quotation Mark */}
      <div className="absolute -top-6 left-6 text-[#C5A880]/15 pointer-events-none">
        <Quote className="w-20 h-20" />
      </div>

      <div className="glass-panel p-8 sm:p-12 rounded-sm border border-[#C5A880]/30 shadow-2xl relative z-10 min-h-[320px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* Star Rating & Occasion */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1 text-[#E5C590]" aria-label={`Rating: ${current.rating} out of 5 stars`}>
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <span className="px-3 py-1 text-[11px] uppercase tracking-widest font-semibold bg-[#14100E] border border-[#C5A880]/30 text-[#E5C590] rounded-full">
                {current.occasion}
              </span>
            </div>

            {/* Testimonial Quote */}
            <p className="text-base sm:text-lg md:text-xl font-serif text-[#FDFBF7] italic leading-relaxed">
              “{current.quote}”
            </p>

            {/* Client Profile */}
            <div className="pt-4 border-t border-[#C5A880]/15 flex items-center justify-between">
              <div>
                <h4 className="font-serif text-lg text-[#FDFBF7] font-semibold">
                  {current.clientName}
                </h4>
                <p className="text-xs text-[#A8A19A]">
                  {current.location} · {current.service}
                </p>
              </div>

              <span className="text-xs text-[#C5A880]">{current.date}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <div className="pt-6 mt-6 border-t border-[#C5A880]/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {testimonialsList.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-[#E5C590]' : 'w-2 bg-[#C5A880]/30 hover:bg-[#C5A880]/60'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="w-9 h-9 rounded-full bg-[#14100E] border border-[#C5A880]/30 flex items-center justify-center text-[#F7F3EB] hover:text-[#E5C590] hover:border-[#E5C590] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="w-9 h-9 rounded-full bg-[#14100E] border border-[#C5A880]/30 flex items-center justify-center text-[#F7F3EB] hover:text-[#E5C590] hover:border-[#E5C590] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
