import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, Building2 } from 'lucide-react';
import SEO from '../seo/SEO';
import { getBreadcrumbSchema } from '../seo/jsonLdSchemas';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import portraitImg from '../assets/images/artist-portrait-sakshi.jpeg';
import salonImg from '../assets/images/luxury-salon-interior-elan.jpg';
import { Reveal, StaggerContainer, StaggerItem, luxuryEase } from '../components/animations/Reveal';

export default function About() {
  const breadcrumbData = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About The Artist", path: "/about" }
  ]);

  return (
    <>
      <SEO
        title="About The Artist | Sakshi Choudhry · ÉLAN Beauty Studio"
        description="Discover the story and artistry of Sakshi Choudhry — Senior Salon Manager & Professional Makeup Artist with 7+ years leading luxury salon operations in Pune."
        canonicalUrl="https://elanbeautystudio.com/about"
        structuredData={breadcrumbData}
      />

      {/* Page Header */}
      <section className="py-16 sm:py-24 bg-[#110E0C] border-b border-[#C5A880]/20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal direction="down" distance={15}>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-3">
              The Artist Behind ÉLAN
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1} distance={25}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#FDFBF7] tracking-tight mb-4">
              Sakshi Choudhry
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.2} distance={20}>
            <p className="text-sm sm:text-base text-[#CFC0A8] font-light max-w-xl mx-auto">
              Senior Salon Manager · Professional Makeup Artist · Beauty Specialist
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Editorial Story Section */}
      <section className="py-20 sm:py-28 bg-[#14100E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
            {/* Image Column with Smooth Reveal */}
            <Reveal direction="right" distance={35} className="lg:col-span-5 relative">
              <div className="relative overflow-hidden rounded-sm border border-[#C5A880]/40 shadow-2xl bg-[#1E1815] group">
                <motion.img
                  src={portraitImg}
                  alt="Sakshi Choudhry - ÉLAN Beauty Studio"
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: luxuryEase }}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14100E]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#14100E]/90 backdrop-blur-md rounded-sm border border-[#C5A880]/30 text-center">
                  <span className="font-serif text-lg text-[#E5C590] italic">
                    “Beauty, refined with artistry.”
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Editorial Biography Column */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal direction="left" delay={0.1}>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>A Legacy of Artistry & Operational Leadership</span>
                </div>
              </Reveal>

              <Reveal direction="left" delay={0.2}>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#FDFBF7] leading-snug">
                  Where Executive Precision Meets Haute Beauty Artistry
                </h2>
              </Reveal>

              <Reveal direction="left" delay={0.3}>
                <div className="space-y-4 text-sm sm:text-base text-[#CFC0A8] font-light leading-relaxed">
                  <p>
                    Sakshi Choudhry is a <strong>Senior Salon Manager and Lakme Academy-certified professional makeup artist</strong> based in Pune, India. With over <strong>7+ years of experience leading premier salon operations</strong>, she has built a reputation for uncompromising service standards, operational precision, and refined aesthetic mastery.
                  </p>
                  <p>
                    Throughout her career, Sakshi has served as <strong>Area Business Manager at Ally21 Salon</strong> (directing flagship branches in Baner and Aundh), <strong>Senior Business Manager at Studio 11 Family Salon</strong>, and <strong>Senior Manager at Monsoon Salon and Looks Salon</strong>. In these leadership roles, she directed multi-unit operations, recruited and trained dozens of salon professionals, optimized sales KPIs, and curated luxury client experiences.
                  </p>
                  <p>
                    As a makeup artist with hands-on expertise in over <strong>100+ high-end bridal transformations</strong>, Sakshi delivers bespoke looks for diverse skin tones, textures, and wedding traditions. Her signature style is defined by flawless, radiant skin prep, weightless HD textures, and customized artistry that enhances individual beauty.
                  </p>
                </div>
              </Reveal>

              {/* Stats Bar */}
              <StaggerContainer staggerChildren={0.12} delayChildren={0.4} className="grid grid-cols-3 gap-4 pt-4 border-t border-[#C5A880]/20">
                <StaggerItem direction="up" distance={15}>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-gradient block">7+</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#A8A19A]">Years Leadership</span>
                </StaggerItem>
                <StaggerItem direction="up" distance={15}>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-gradient block">100+</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#A8A19A]">Bridal Looks</span>
                </StaggerItem>
                <StaggerItem direction="up" distance={15}>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-gradient block">Pune</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#A8A19A]">Metro Area</span>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>

          {/* Unique Background Convergence (INIFD + Symbiosis + Lakme) */}
          <div className="mb-24">
            <SectionHeading
              eyebrow="The Triad Foundation"
              title="A Rare Interdisciplinary Foundation"
              subtitle="How Interior Design aesthetics, Business Administration acumen, and Certified Makeup Artistry converge into a singular luxury standard."
            />

            <StaggerContainer staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggerItem
                direction="up"
                distance={25}
                className="glass-panel p-8 rounded-sm border border-[#C5A880]/25 space-y-4 hover:border-[#C5A880]/50 hover:-translate-y-1.5 transition-all duration-300 shadow-xl"
              >
                <div className="w-12 h-12 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/40 flex items-center justify-center text-[#E5C590]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
                  Lakme Academy, Pune
                </span>
                <h3 className="font-serif text-xl text-[#FDFBF7] font-semibold">
                  Diploma in Professional Makeup Artistry
                </h3>
                <p className="text-xs sm:text-sm text-[#CFC0A8] font-light leading-relaxed">
                  Formal certified mastery in pigment theory, high-definition camera calibration, skin chemistry, contour architecture, and bridal draping techniques.
                </p>
              </StaggerItem>

              <StaggerItem
                direction="up"
                distance={25}
                className="glass-panel p-8 rounded-sm border border-[#C5A880]/25 space-y-4 hover:border-[#C5A880]/50 hover:-translate-y-1.5 transition-all duration-300 shadow-xl"
              >
                <div className="w-12 h-12 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/40 flex items-center justify-center text-[#E5C590]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
                  INIFD, Pune
                </span>
                <h3 className="font-serif text-xl text-[#FDFBF7] font-semibold">
                  BSc Interior Design
                </h3>
                <p className="text-xs sm:text-sm text-[#CFC0A8] font-light leading-relaxed">
                  Deep understanding of spatial ergonomics, lighting interplay, color temperature, and atmospheric aesthetics that translate directly into studio ambiance and beauty styling.
                </p>
              </StaggerItem>

              <StaggerItem
                direction="up"
                distance={25}
                className="glass-panel p-8 rounded-sm border border-[#C5A880]/25 space-y-4 hover:border-[#C5A880]/50 hover:-translate-y-1.5 transition-all duration-300 shadow-xl"
              >
                <div className="w-12 h-12 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/40 flex items-center justify-center text-[#E5C590]">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
                  Symbiosis, Pune
                </span>
                <h3 className="font-serif text-xl text-[#FDFBF7] font-semibold">
                  BBA (Business Administration)
                </h3>
                <p className="text-xs sm:text-sm text-[#CFC0A8] font-light leading-relaxed">
                  Executive grounding in operations, financial reporting, multi-branch logistics, client relationship management (CRM), and strategic marketing.
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Salon Interior Ambiance Feature */}
          <Reveal direction="up" distance={30} className="glass-panel p-8 sm:p-12 rounded-sm border border-[#C5A880]/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative overflow-hidden rounded-sm border border-[#C5A880]/20 group">
              <motion.img
                src={salonImg}
                alt="Luxury Salon Interior Design and Atmosphere"
                initial={{ scale: 1.06 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: luxuryEase }}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
                The ÉLAN Environment
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FDFBF7]">
                A Sanctuary of Modern Luxury
              </h3>
              <p className="text-xs sm:text-sm text-[#CFC0A8] font-light leading-relaxed">
                Combining warm cream tones, gold accents, and serene lighting, the studio environment is curated to provide clients with a peaceful, pampering retreat.
              </p>
              <div className="pt-2">
                <Button to="/contact" variant="primary" size="md">
                  Book Your Experience
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
