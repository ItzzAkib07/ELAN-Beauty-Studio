import React from 'react';
import SectionBackground from '../backgrounds/SectionBackground';
import { Reveal } from '../animations/Reveal';

/**
 * PageHeader
 * Reusable luxury page header with integrated animated & interactive stardust background,
 * editorial typography reveals, and gold accent styling.
 */
export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  className = '',
  backgroundVariant = 'stardust',
}) {
  return (
    <section className={`relative py-16 sm:py-24 bg-[#110E0C] border-b border-[#C5A880]/20 text-center overflow-hidden ${className}`}>
      {/* Interactive Background */}
      <SectionBackground variant={backgroundVariant} density={30} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {eyebrow && (
          <Reveal direction="down" distance={15}>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-3">
              {eyebrow}
            </span>
          </Reveal>
        )}

        <Reveal direction="up" delay={0.1} distance={25}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#FDFBF7] tracking-tight mb-4">
            {title}
          </h1>
        </Reveal>

        {subtitle && (
          <Reveal direction="up" delay={0.2} distance={20}>
            <p className="text-sm sm:text-base md:text-lg text-[#CFC0A8] font-light max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
