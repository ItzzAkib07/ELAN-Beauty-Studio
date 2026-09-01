import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';

const HEART_COLORS = [
  '#FF2A5F', // Vivid Crimson Rose
  '#FF4D6D', // Radiant Hot Pink
  '#FF758F', // Romantic Rose
  '#E11D48', // Deep Ruby
  '#FA5252', // Soft Coral Red
  '#FF85A1', // Bubblegum Pink
  '#E84393', // Magenta Bloom
  '#F43F5E', // Rose Glow
  '#FB7185', // Strawberry Pink
];

export default function PortfolioCreditBadge() {
  const [isHovered, setIsHovered] = useState(false);
  const [hearts, setHearts] = useState([]);
  const heartIdCounter = useRef(0);
  const isHoveredRef = useRef(false);

  // Keep ref in sync for interval callbacks
  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  const spawnHearts = useCallback((count = 1) => {
    const newHearts = [];
    for (let i = 0; i < count; i++) {
      heartIdCounter.current += 1;
      const id = heartIdCounter.current;

      // Randomized floating physics & aesthetics
      const startX = (Math.random() - 0.5) * 110; // spread across badge width
      const driftX = (Math.random() - 0.5) * 60; // horizontal drift while rising
      const floatDistance = 65 + Math.random() * 55; // vertical distance (65px - 120px)
      const size = 11 + Math.random() * 11; // 11px to 22px
      const initialRotate = (Math.random() - 0.5) * 50; // -25deg to +25deg
      const endRotate = initialRotate + (Math.random() - 0.5) * 60;
      const color = HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)];
      const duration = 0.9 + Math.random() * 0.45; // 0.9s - 1.35s

      newHearts.push({
        id,
        startX,
        driftX,
        floatDistance,
        size,
        initialRotate,
        endRotate,
        color,
        duration,
      });
    }

    setHearts((prev) => [...prev.slice(-35), ...newHearts]); // keep active DOM lightweight
  }, []);

  const removeHeart = useCallback((id) => {
    setHearts((prev) => prev.filter((h) => h.id !== id));
  }, []);

  // Continuous heart emission on hover
  useEffect(() => {
    let intervalId = null;

    if (isHovered) {
      // Immediate burst on hover enter
      spawnHearts(3);

      // Continuous emission while hovering
      intervalId = setInterval(() => {
        if (isHoveredRef.current) {
          spawnHearts(Math.random() > 0.4 ? 2 : 1);
        }
      }, 95);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isHovered, spawnHearts]);

  return (
    <div className="relative inline-flex items-center justify-center overflow-visible">
      {/* Floating Popping Hearts Container */}
      <div className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center z-30">
        <AnimatePresence>
          {hearts.map((heart) => (
            <motion.div
              key={heart.id}
              initial={{
                opacity: 0,
                scale: 0.2,
                x: heart.startX,
                y: 4,
                rotate: heart.initialRotate,
              }}
              animate={{
                opacity: [0, 1, 0.95, 0],
                scale: [0.2, 1.25, 1.05, 0.6],
                x: heart.startX + heart.driftX,
                y: -heart.floatDistance,
                rotate: heart.endRotate,
              }}
              exit={{ opacity: 0, scale: 0.2 }}
              transition={{
                duration: heart.duration,
                ease: [0.22, 1, 0.36, 1], // snappy pop + smooth float
              }}
              onAnimationComplete={() => removeHeart(heart.id)}
              className="absolute pointer-events-none drop-shadow-[0_2px_8px_rgba(255,42,95,0.45)]"
              style={{
                width: heart.size,
                height: heart.size,
              }}
            >
              <Heart
                className="w-full h-full fill-current"
                style={{ color: heart.color }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Credit Box Badge */}
      <a
        href={siteConfig.developer.url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={`Developer Portfolio: ${siteConfig.developer.name}`}
        className="group relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full
          bg-gradient-to-r from-[#FFF0F3] via-[#FFE4E8] to-[#FFD6E0]
          border border-[#FFA5B8]/80 hover:border-[#FF4D6D]
          text-[#7A2238] font-medium
          transition-all duration-300 ease-out
          shadow-[0_2px_14px_rgba(255,107,138,0.25)]
          hover:shadow-[0_4px_24px_rgba(255,77,109,0.45),0_0_15px_rgba(255,143,171,0.5)]
          hover:scale-[1.04] active:scale-[0.98] cursor-pointer select-none"
      >
        {/* Subtle Ambient Heart Shimmer on Hover */}
        <span
          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFF5F7] via-[#FFCCD5] to-[#FFB3C1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          aria-hidden="true"
        />

        {/* Text and Icons */}
        <span className="text-[11px] tracking-wider text-[#7A2238]/90 font-medium group-hover:text-[#631427] transition-colors">
          Crafted with
        </span>

        {/* Central Heart Icon with active beating/bounce */}
        <motion.div
          animate={
            isHovered
              ? {
                  scale: [1, 1.35, 1.1, 1.3, 1],
                  rotate: [0, -8, 8, -4, 0],
                }
              : {
                  scale: 1,
                  rotate: 0,
                }
          }
          transition={{
            duration: 0.6,
            repeat: isHovered ? Infinity : 0,
            repeatDelay: 0.1,
          }}
          className="inline-flex items-center justify-center"
        >
          <Heart className="w-3.5 h-3.5 text-[#E11D48] fill-[#E11D48] drop-shadow-[0_1px_4px_rgba(225,29,72,0.4)]" />
        </motion.div>

        <span className="text-[11px] tracking-wider text-[#7A2238]/90 font-medium group-hover:text-[#631427] transition-colors">
          by
        </span>

        <span className="text-[11.5px] font-bold text-[#9F1239] group-hover:text-[#BE123C] transition-colors underline decoration-[#E11D48]/50 group-hover:decoration-[#BE123C] underline-offset-2">
          {siteConfig.developer.name}
        </span>

        <Sparkles className="w-3.5 h-3.5 text-[#E11D48] opacity-75 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300" />
      </a>
    </div>
  );
}
