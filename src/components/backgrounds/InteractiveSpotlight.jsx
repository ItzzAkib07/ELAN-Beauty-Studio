import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * InteractiveSpotlight
 * Mouse-tracking champagne spotlight and floating luxury ambient glowing orbs.
 */
export default function InteractiveSpotlight({
  color = '#C5A880',
  secondaryColor = '#E5C590',
  accentColor = '#E7C9BF',
  radius = 360,
  opacity = 0.09,
  interactive = true,
  showOrbs = true,
  orbCount = 3,
  className = '',
}) {
  const containerRef = useRef(null);
  const [coords, setCoords] = useState({ x: -500, y: -500, visible: false });

  useEffect(() => {
    const el = containerRef.current?.parentElement;
    if (!el || !interactive) return;

    let rafId;
    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;
    let isHovered = false;

    const onPointerMove = (e) => {
      const rect = el.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      targetX = clientX - rect.left;
      targetY = clientY - rect.top;
      isHovered = true;
    };

    const onPointerLeave = () => {
      isHovered = false;
      targetX = -500;
      targetY = -500;
    };

    const updatePosition = () => {
      if (isHovered) {
        currentX += (targetX - currentX) * 0.1;
        currentY += (targetY - currentY) * 0.1;
        setCoords({ x: currentX, y: currentY, visible: true });
      } else if (coords.visible) {
        setCoords((prev) => ({ ...prev, visible: false }));
      }
      rafId = requestAnimationFrame(updatePosition);
    };

    el.addEventListener('mousemove', onPointerMove, { passive: true });
    el.addEventListener('mouseleave', onPointerLeave, { passive: true });
    el.addEventListener('touchmove', onPointerMove, { passive: true });
    el.addEventListener('touchend', onPointerLeave, { passive: true });
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener('mousemove', onPointerMove);
      el.removeEventListener('mouseleave', onPointerLeave);
      el.removeEventListener('touchmove', onPointerMove);
      el.removeEventListener('touchend', onPointerLeave);
    };
  }, [interactive]);

  return (
    <div ref={containerRef} className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`} aria-hidden="true">
      {/* Interactive Cursor Spotlight */}
      {interactive && (
        <div
          className="absolute rounded-full transition-opacity duration-500 ease-out"
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            left: `${coords.x - radius}px`,
            top: `${coords.y - radius}px`,
            opacity: coords.visible ? opacity : 0,
            background: `radial-gradient(circle, ${color} 0%, rgba(197, 168, 128, 0.15) 35%, rgba(197, 168, 128, 0) 70%)`,
            filter: 'blur(30px)',
            transform: 'translate3d(0, 0, 0)',
          }}
        />
      )}

      {/* Floating Ambient Glowing Luxury Orbs */}
      {showOrbs && (
        <>
          <motion.div
            animate={{
              x: [0, 40, -30, 0],
              y: [0, -40, 25, 0],
              scale: [1, 1.15, 0.95, 1],
              opacity: [0.08, 0.14, 0.07, 0.08],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-[10%] left-[8%] w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-[90px] sm:blur-[120px]"
            style={{ backgroundColor: color }}
          />

          <motion.div
            animate={{
              x: [0, -50, 40, 0],
              y: [0, 35, -30, 0],
              scale: [1, 1.2, 0.9, 1],
              opacity: [0.06, 0.12, 0.05, 0.06],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
            className="absolute bottom-[12%] right-[10%] w-80 sm:w-[420px] h-80 sm:h-[420px] rounded-full blur-[100px] sm:blur-[130px]"
            style={{ backgroundColor: secondaryColor }}
          />

          {orbCount >= 3 && (
            <motion.div
              animate={{
                x: [0, 25, -25, 0],
                y: [0, 40, -20, 0],
                scale: [0.95, 1.1, 1, 0.95],
                opacity: [0.04, 0.09, 0.04, 0.04],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 4,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 rounded-full blur-[80px] sm:blur-[110px]"
              style={{ backgroundColor: accentColor }}
            />
          )}
        </>
      )}
    </div>
  );
}
