import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { Calendar, Sparkles, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { Reveal, StaggerContainer, StaggerItem, luxuryEase } from '../animations/Reveal';

export default function CTASection({
  title = "Your Moment.\nYour Beauty.\nYour ÉLAN.",
  subtitle = "Let's create a look that feels unmistakably you.",
  ctaText = "Book Your Appointment",
  className = ""
}) {
  return (
    <section className={`relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#14100E] via-[#1E1815] to-[#14100E] border-t border-b border-[#C5A880]/20 ${className}`}>
      {/* Subtle background ambient glow with gentle breathing animation */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#C5A880] rounded-full blur-[140px] pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
        <Reveal direction="up" distance={20}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/30 text-[#E5C590] text-xs uppercase tracking-widest mb-6 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exclusive Appointments</span>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.1} distance={30}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#FDFBF7] tracking-tight leading-[1.15] mb-6 whitespace-pre-line">
            {title}
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.2} distance={20}>
          <p className="text-base sm:text-lg md:text-xl text-[#CFC0A8] font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            {subtitle}
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={Calendar}
              iconPosition="left"
            >
              {ctaText}
            </Button>

            <Button
              href={siteConfig.socialLinks.whatsapp}
              variant="secondary"
              size="lg"
              icon={MessageCircle}
              iconPosition="left"
            >
              WhatsApp Quick Chat
            </Button>
          </div>
        </Reveal>

        <StaggerContainer
          staggerChildren={0.12}
          delayChildren={0.4}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#A8A19A] tracking-wider uppercase"
        >
          <StaggerItem direction="up" distance={15} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            100+ Bridal Looks Delivered
          </StaggerItem>
          <StaggerItem direction="up" distance={15} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            Lakme Academy Certified
          </StaggerItem>
          <StaggerItem direction="up" distance={15} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            Pune & Destination Weddings
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
