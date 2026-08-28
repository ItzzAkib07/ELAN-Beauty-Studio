import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Sparkles, ZoomIn, ArrowRight } from 'lucide-react';
import { makeupCategories, makeupGallery } from '../../data/makeup';
import Lightbox from '../common/Lightbox';
import Button from '../common/Button';

export default function MakeupGallery({ initialCategory = 'all', limit, showFilter = true }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Filter gallery items based on active category
  const filteredGallery = useMemo(() => {
    let list = selectedCategory === 'all'
      ? makeupGallery
      : makeupGallery.filter((item) => item.category === selectedCategory);

    if (limit) {
      list = list.slice(0, limit);
    }
    return list;
  }, [selectedCategory, limit]);

  const handleOpenLightbox = (index) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : filteredGallery.length - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev < filteredGallery.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="space-y-10">
      {/* Category Filter Tabs */}
      {showFilter && (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {makeupCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 text-xs uppercase tracking-widest rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] ${
                  isActive
                    ? 'bg-gradient-to-r from-[#E5C590] via-[#C5A880] to-[#A88758] text-[#14100E] font-semibold shadow-[0_0_15px_rgba(197,168,128,0.3)] scale-105'
                    : 'bg-[#1E1815] text-[#CFC0A8] border border-[#C5A880]/20 hover:border-[#C5A880]/50 hover:text-[#FDFBF7]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence>
          {filteredGallery.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-sm border border-[#C5A880]/25 bg-[#1E1815] shadow-xl hover:border-[#C5A880]/60 transition-all duration-500 cursor-pointer"
              onClick={() => handleOpenLightbox(index)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt || item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14100E]/95 via-[#14100E]/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-medium bg-[#14100E]/80 backdrop-blur-md border border-[#C5A880]/30 text-[#E5C590] rounded-full">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Hover Center Zoom Button */}
                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                  <div className="w-12 h-12 rounded-full bg-[#14100E]/90 border border-[#E5C590] flex items-center justify-center text-[#E5C590] shadow-2xl">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Details Banner */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FDFBF7] font-semibold mb-1 group-hover:text-[#E5C590] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#CFC0A8] line-clamp-2 font-light">
                    {item.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#C5A880]/20 flex items-center justify-between text-[11px] text-[#A8A19A]">
                    <span className="text-[#E5C590] font-medium">Click to view details</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Expand</span>
                      <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Integration */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={filteredGallery}
        currentIndex={activeImageIndex}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
