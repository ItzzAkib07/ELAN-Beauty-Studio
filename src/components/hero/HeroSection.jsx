import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import heroImg from '../../assets/images/hero-editorial-elan.jpg';
import { siteConfig } from '../../config/siteConfig';
import { Reveal, StaggerContainer, StaggerItem, luxuryEase } from '../animations/Reveal';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pb-16 pt-8 sm:pt-12">
      {/* Background Editorial Image with Luxury Gradient Vignette */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroImg}
          alt="ÉLAN Beauty Studio Luxury Editorial Makeup Artistry"
          initial={{ scale: 1.12, opacity: 0.8 }}
          animate={{ scale: 1.03, opacity: 1 }}
          transition={{ duration: 1.8, ease: luxuryEase }}
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08]"
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradients to blend image seamlessly with espresso theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#14100E] via-[#14100E]/55 to-[#14100E]/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#14100E]/40 to-[#14100E]/90" />
      </div>

      {/* Vertical Side Editorial Label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.7, x: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: luxuryEase }}
        className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-6 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.45em] text-[#C5A880] [writing-mode:vertical-rl] rotate-180">
          MAKEUP · BEAUTY · ARTISTRY
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#C5A880] to-transparent opacity-60" />
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow / Brand Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: luxuryEase }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1412]/80 border border-[#C5A880]/40 backdrop-blur-md mb-6 shadow-xl"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#E5C590]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#E5C590] font-medium">
            ÉLAN Beauty Studio · Sakshi Choudhry
          </span>
        </motion.div>

        {/* Main Cinematic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: luxuryEase }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#FDFBF7] tracking-tight leading-[1.08] mb-6 drop-shadow-2xl"
        >
          Where Beauty <br />
          <span className="font-editorial italic font-normal text-gold-bright">
            Becomes Art.
          </span>
        </motion.h1>

        {/* Supporting Editorial Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: luxuryEase }}
          className="text-base sm:text-lg md:text-xl text-[#EFE8DC] font-light max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow"
        >
          Professional makeup artistry and beauty experiences crafted with precision, elegance and individuality.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: luxuryEase }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          <Button
            to="/makeup"
            variant="primary"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
          >
            Explore My Work
          </Button>

          <Button
            to="/contact"
            variant="secondary"
            size="lg"
            icon={Calendar}
            iconPosition="left"
          >
            Book an Appointment
          </Button>
        </motion.div>

        {/* Key Career Metrics Bar with Staggered Scroll Animation */}
        <StaggerContainer
          staggerChildren={0.12}
          delayChildren={0.6}
          className="mt-14 sm:mt-16 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {siteConfig.stats.map((stat) => (
            <StaggerItem
              key={stat.label}
              direction="up"
              distance={25}
              className="glass-panel p-4 sm:p-5 rounded-sm text-center border-t border-[#C5A880]/30 hover:border-[#C5A880]/60 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div className="font-serif text-2xl sm:text-3xl font-bold text-gold-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#FDFBF7] font-medium mb-0.5">
                {stat.label}
              </div>
              <div className="text-[10px] text-[#A8A19A] hidden sm:block">
                {stat.detail}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 hover:opacity-100 transition-opacity"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A880]">Scroll</span>
        <div className="w-4 h-7 rounded-full border border-[#C5A880]/50 flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-1.5 bg-[#C5A880] rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
