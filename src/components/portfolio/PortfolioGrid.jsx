import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Sparkles, ArrowUpRight } from 'lucide-react';
import { portfolioCategories, portfolioItems } from '../../data/portfolio';

export default function PortfolioGrid({ initialCategory = 'all', limit }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const filteredItems = useMemo(() => {
    let list = selectedCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

    if (limit) {
      list = list.slice(0, limit);
    }
    return list;
  }, [selectedCategory, limit]);

  return (
    <div className="space-y-10">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {portfolioCategories.map((cat) => {
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

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-sm overflow-hidden border border-[#C5A880]/25 hover:border-[#C5A880]/60 transition-all duration-500 shadow-xl group"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14100E] via-transparent to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-semibold bg-[#14100E]/80 backdrop-blur-md text-[#E5C590] border border-[#C5A880]/30 rounded-full">
                    {item.categoryLabel}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 text-[10px] uppercase tracking-widest text-[#CFC0A8] bg-[#14100E]/80 backdrop-blur-md rounded-sm border border-[#C5A880]/20">
                    {item.year}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#C5A880]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>

                <h3 className="font-serif text-xl text-[#FDFBF7] font-semibold group-hover:text-[#E5C590] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#CFC0A8] font-light leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-[#C5A880]/15 flex items-center justify-between text-[11px] text-[#A8A19A]">
                  <span>Client: {item.clientType}</span>
                  <span className="text-[#E5C590] font-medium">ÉLAN Signature</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
