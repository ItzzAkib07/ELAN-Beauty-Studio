import React from 'react';
import { motion } from 'framer-motion';
import Badge from './Badge';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center', // 'center' | 'left'
  className = '',
  light = false
}) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <div className={`mb-4 ${isCenter ? 'flex justify-center' : ''}`}>
          <Badge variant="gold">{eyebrow}</Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif text-[#FDFBF7] tracking-tight leading-[1.15] mb-4">
        {title}
      </h2>

      {/* Decorative luxury gold divider */}
      <div className={`flex items-center gap-3 my-4 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent" />
        <span className="w-1.5 h-1.5 rotate-45 bg-[#C5A880]" />
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent" />
      </div>

      {subtitle && (
        <p className="text-sm sm:text-base md:text-lg text-[#CFC0A8] font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
