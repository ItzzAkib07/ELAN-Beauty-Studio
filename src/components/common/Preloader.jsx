import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#14100E] text-[#F7F3EB] pointer-events-none"
          role="status"
          aria-live="polite"
          aria-label="Loading ÉLAN Beauty Studio"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-16 h-16 rounded-full border border-[#C5A880]/40 flex items-center justify-center relative">
              <span className="font-serif text-3xl font-semibold text-gold-gradient">É</span>
              <motion.div
                className="absolute inset-0 rounded-full border-t border-[#E5C590]"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <span className="font-serif text-2xl tracking-[0.25em] text-[#FDFBF7] uppercase font-semibold">
              ÉLAN
            </span>
            <span className="text-[10px] tracking-[0.35em] text-[#C5A880] uppercase">
              Beauty Studio
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
