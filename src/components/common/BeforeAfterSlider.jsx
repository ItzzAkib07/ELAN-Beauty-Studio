import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  title,
  subtitle,
  className = ''
}) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div className={`relative max-w-4xl mx-auto ${className}`}>
      {/* Slider Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[4/3] sm:aspect-[16/11] md:aspect-[16/10] overflow-hidden rounded-sm border border-[#C5A880]/30 shadow-2xl select-none cursor-ew-resize group bg-[#14100E]"
      >
        {/* AFTER Image (Full background) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          />
        </div>

        {/* Dividing Line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#E5C590] via-[#C5A880] to-[#E5C590] shadow-[0_0_10px_rgba(197,168,128,0.8)] pointer-events-none z-20"
          style={{ left: `${sliderPosition}%` }}
        />

        {/* Center Draggable Handle */}
        <button
          type="button"
          onMouseDown={handleMouseDown}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onKeyDown={handleKeyDown}
          aria-label="Adjust Before and After Comparison Slider"
          aria-valuenow={Math.round(sliderPosition)}
          aria-valuemin={0}
          aria-valuemax={100}
          role="slider"
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1A1412] border-2 border-[#E5C590] shadow-[0_0_20px_rgba(0,0,0,0.8),0_0_15px_rgba(197,168,128,0.4)] flex items-center justify-center text-[#E5C590] cursor-grab active:cursor-grabbing focus:outline-none focus-visible:ring-4 focus-visible:ring-[#C5A880] transition-transform hover:scale-110"
          style={{ left: `${sliderPosition}%` }}
        >
          <MoveHorizontal className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

        {/* Floating Labels */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <span className="px-3.5 py-1.5 text-xs font-semibold tracking-widest uppercase bg-[#14100E]/80 backdrop-blur-md text-[#EFE8DC] border border-[#C5A880]/30 rounded-full shadow-lg">
            {beforeLabel}
          </span>
        </div>

        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <span className="px-3.5 py-1.5 text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-[#E5C590] to-[#C5A880] text-[#14100E] border border-[#E5C590] rounded-full shadow-lg">
            {afterLabel}
          </span>
        </div>

        {/* Bottom helper prompt */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
          <span className="text-[11px] uppercase tracking-widest text-[#EFE8DC] bg-[#14100E]/70 px-4 py-1.5 rounded-full border border-[#C5A880]/20 backdrop-blur-sm flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#C5A880]" />
            Drag or Tap to Compare
          </span>
        </div>
      </div>
    </div>
  );
}
