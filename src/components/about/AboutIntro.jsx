import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import portraitImg from '../../assets/images/artist-portrait-sakshi.jpeg';
import { siteConfig } from '../../config/siteConfig';
import { Reveal, StaggerContainer, StaggerItem, luxuryEase } from '../animations/Reveal';

export default function AboutIntro({ showFullDetails = false }) {
  return (
    <section className="py-20 sm:py-28 bg-[#14100E] text-[#F7F3EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Artist Behind ÉLAN"
          title="Sakshi Choudhry"
          subtitle="Senior Salon Manager · Professional Makeup Artist · Beauty Specialist"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Portrait Column with Smooth Reveal */}
          <Reveal direction="right" distance={35} duration={0.9} className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none group">
              {/* Gold Decorative Border Frame */}
              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                whileInView={{ opacity: 1, rotate: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: luxuryEase }}
                className="absolute -inset-3 border border-[#C5A880]/30 rounded-sm pointer-events-none hidden sm:block"
              />

              <div className="relative overflow-hidden rounded-sm border border-[#C5A880]/40 shadow-2xl bg-[#1E1815]">
                <motion.img
                  src={portraitImg}
                  alt="Sakshi Choudhry - Senior Salon Manager & Professional Makeup Artist"
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: luxuryEase }}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14100E]/90 via-transparent to-transparent" />

                {/* Floating Signature Tag */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-[#1A1412]/85 backdrop-blur-md border border-[#C5A880]/30 shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-serif text-lg text-[#FDFBF7] font-semibold block">
                        Sakshi Choudhry
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-[#C5A880]">
                        Lakme Academy Certified Artist
                      </span>
                    </div>
                    <span className="font-serif text-2xl italic text-[#E5C590]">ÉLAN</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </Reveal>

          {/* Editorial Biography Column */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="left" delay={0.1} distance={30}>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Artistry Shaped by 7+ Years of Luxury Leadership</span>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.2} distance={30}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#FDFBF7] leading-tight">
                “Every face is different. Every look begins with understanding what makes you uniquely beautiful.”
              </h3>
            </Reveal>

            <Reveal direction="left" delay={0.3} distance={30}>
              <div className="space-y-4 text-sm sm:text-base text-[#CFC0A8] font-light leading-relaxed">
                <p>
                  Welcome to <strong>ÉLAN Beauty Studio</strong>. Founded by <strong>Sakshi Choudhry</strong>, ÉLAN represents a harmonious union of high-fashion makeup artistry and world-class salon management standards in Pune.
                </p>
                <p>
                  With <strong>7+ years of leadership</strong> directing operations at premier salons—including <strong>Ally21 Salon (Baner & Aundh)</strong>, <strong>Studio 11 Family Salon</strong>, <strong>Monsoon Salon</strong>, and <strong>Looks Salon</strong>—Sakshi brings unparalleled expertise in client experience, hygiene compliance, and luxury service execution.
                </p>
                <p>
                  Having delivered over <strong>100+ bespoke bridal makeups</strong>, her artistic philosophy emphasizes customized skin prep, lightweight HD formulations, and highlighting each client’s innate facial architecture with timeless sophistication.
                </p>
              </div>
            </Reveal>

            {/* Academic & Professional Fusion Pillar Cards with Staggered Scroll Animation */}
            <StaggerContainer
              staggerChildren={0.15}
              delayChildren={0.4}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
            >
              <StaggerItem
                direction="up"
                className="p-4 rounded-sm bg-[#1E1815] border border-[#C5A880]/20 hover:border-[#C5A880]/50 hover:-translate-y-1 transition-all duration-300 shadow-md"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] block mb-1">Artistry Mastery</span>
                <h4 className="font-serif text-base text-[#FDFBF7] font-semibold mb-1">Lakme Academy</h4>
                <p className="text-xs text-[#A8A19A]">Diploma in Professional Makeup Artistry</p>
              </StaggerItem>

              <StaggerItem
                direction="up"
                className="p-4 rounded-sm bg-[#1E1815] border border-[#C5A880]/20 hover:border-[#C5A880]/50 hover:-translate-y-1 transition-all duration-300 shadow-md"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] block mb-1">Aesthetic Harmony</span>
                <h4 className="font-serif text-base text-[#FDFBF7] font-semibold mb-1">INIFD Pune</h4>
                <p className="text-xs text-[#A8A19A]">BSc Interior Design (Spatial Theory)</p>
              </StaggerItem>

              <StaggerItem
                direction="up"
                className="p-4 rounded-sm bg-[#1E1815] border border-[#C5A880]/20 hover:border-[#C5A880]/50 hover:-translate-y-1 transition-all duration-300 shadow-md"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] block mb-1">Business Leadership</span>
                <h4 className="font-serif text-base text-[#FDFBF7] font-semibold mb-1">Symbiosis Pune</h4>
                <p className="text-xs text-[#A8A19A]">BBA (Operations & Strategy)</p>
              </StaggerItem>
            </StaggerContainer>

            {/* Call to Actions */}
            <Reveal direction="up" delay={0.5}>
              <div className="pt-6 flex flex-wrap items-center gap-4">
                <Button to="/about" variant="primary" size="md" icon={ArrowRight}>
                  Read Full Story
                </Button>
                <Button to="/experience" variant="secondary" size="md">
                  View Career Timeline
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
