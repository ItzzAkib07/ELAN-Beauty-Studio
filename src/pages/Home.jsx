import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import SEO from '../seo/SEO';
import { getSalonSchema, getPersonSchema } from '../seo/jsonLdSchemas';
import HeroSection from '../components/hero/HeroSection';
import AboutIntro from '../components/about/AboutIntro';
import SignatureLook from '../components/makeup/SignatureLook';
import MakeupGallery from '../components/makeup/MakeupGallery';
import BeforeAfterSlider from '../components/common/BeforeAfterSlider';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import ServiceCard from '../components/services/ServiceCard';
import TestimonialCarousel from '../components/testimonials/TestimonialCarousel';
import { transformationData } from '../data/makeup';
import { servicesList } from '../data/services';
import { faqsList } from '../data/faq';
import { Reveal, StaggerContainer, StaggerItem, luxuryEase } from '../components/animations/Reveal';
import SectionBackground from '../components/backgrounds/SectionBackground';

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const homeStructuredData = {
    "@graph": [
      getSalonSchema(),
      getPersonSchema()
    ]
  };

  return (
    <>
      <SEO
        title="ÉLAN Beauty Studio | The Art of Elegance · Sakshi Choudhry"
        description="High-end luxury makeup artistry, bespoke bridal transformations, and senior salon management by Sakshi Choudhry in Pune."
        structuredData={homeStructuredData}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* About The Artist Section */}
      <AboutIntro />

      {/* Signature Look Showcase */}
      <section className="py-20 sm:py-24 bg-[#110E0C] relative overflow-hidden">
        <SectionBackground variant="constellation" density={28} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="Signature Masterpiece"
            title="The Art of Refinement"
            subtitle="Explore our signature look crafted with high-definition pigments, bespoke skin hydration, and timeless grace."
          />
          <SignatureLook />
        </div>
      </section>

      {/* My Makeup Artistry Highlights Gallery */}
      <section className="py-20 sm:py-28 bg-[#14100E] relative overflow-hidden">
        <SectionBackground variant="stardust" density={34} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="My Makeup"
            title="A Gallery of Transformations"
            subtitle="Every face is different. Every look begins with understanding what makes you uniquely beautiful."
          />

          <MakeupGallery limit={6} showFilter={true} />

          <Reveal direction="up" delay={0.2} className="mt-12 text-center">
            <Button to="/makeup" variant="secondary" size="lg" icon={ArrowRight}>
              Explore Full Makeup Portfolio
            </Button>
          </Reveal>
        </div>
      </section>

      {/* The Transformation (Before / After Comparison Slider) */}
      <section className="py-20 sm:py-28 bg-[#181210] relative overflow-hidden border-t border-b border-[#C5A880]/20">
        <SectionBackground variant="dual-glow" density={30} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="The Transformation"
            title="Enhancing Your Innate Glow"
            subtitle={transformationData.subtitle}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
            <Reveal direction="right" distance={30} className="lg:col-span-8">
              <BeforeAfterSlider
                beforeImage={transformationData.beforeImage}
                afterImage={transformationData.afterImage}
                beforeLabel={transformationData.beforeLabel}
                afterLabel={transformationData.afterLabel}
              />
            </Reveal>

            <Reveal direction="left" distance={30} delay={0.15} className="lg:col-span-4 space-y-6">
              <div className="glass-panel p-6 sm:p-8 rounded-sm border border-[#C5A880]/30 space-y-4 shadow-xl">
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
                  Artistry Philosophy
                </span>
                <h3 className="font-serif text-2xl text-[#FDFBF7] font-semibold">
                  Precision & Skin Hydration
                </h3>
                <p className="text-xs sm:text-sm text-[#CFC0A8] font-light leading-relaxed">
                  {transformationData.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#C5A880]/15">
                  <span className="text-[11px] uppercase tracking-wider text-[#E5C590] font-semibold block">
                    Transformation Pillars:
                  </span>
                  {transformationData.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#EFE8DC]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Button to="/contact" variant="primary" size="sm" fullWidth>
                    Book Your Transformation
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Highlights Preview */}
      <section className="py-20 sm:py-28 bg-[#14100E] relative overflow-hidden">
        <SectionBackground variant="geometric-gold" density={28} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="Bespoke Offerings"
            title="Curated Beauty Services"
            subtitle="From grand bridal ceremonies to specialized salon operations consulting, explore our tailored service catalogue."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.slice(0, 3).map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>

          <Reveal direction="up" delay={0.2} className="mt-12 text-center">
            <Button to="/services" variant="secondary" size="lg" icon={ArrowRight}>
              View All Services & Packages
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Experience Preview Banner */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-[#1E1815] via-[#14100E] to-[#1E1815] relative overflow-hidden border-t border-b border-[#C5A880]/20">
        <SectionBackground variant="radiant-aura" density={30} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <Reveal direction="right" distance={30} className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium">
                7+ Years Salon Leadership in Pune
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#FDFBF7]">
                Proven Operational Excellence & Bridal Artistry
              </h2>
              <p className="text-xs sm:text-sm text-[#CFC0A8] font-light leading-relaxed">
                Directing multi-branch operations at <strong>Ally21 Salon (Baner & Aundh)</strong>, <strong>Studio 11 Family Salon</strong>, <strong>Monsoon Salon</strong>, and <strong>Looks Salon</strong> with over 100+ luxury bridal transformations delivered.
              </p>
            </Reveal>

            <Reveal direction="left" distance={30} delay={0.15} className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-start lg:justify-end gap-4">
              <Button to="/experience" variant="primary" size="md" icon={ArrowRight}>
                View Career Timeline
              </Button>
              <Button to="/portfolio" variant="secondary" size="md">
                View Portfolio
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 sm:py-28 bg-[#14100E] relative overflow-hidden">
        <SectionBackground variant="luminous-bokeh" density={22} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="Client Love & Words"
            title="Kind Words from Brides & Clients"
            subtitle="Read verified reviews from clients who trusted Sakshi with their most cherished celebrations."
          />
          <TestimonialCarousel />
        </div>
      </section>

      {/* Frequently Asked Questions (Accordion) */}
      <section className="py-20 sm:py-28 bg-[#110E0C] relative overflow-hidden border-t border-[#C5A880]/15">
        <SectionBackground variant="minimal-shimmer" density={18} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about booking, bridal consultations, and our artistry process."
          />

          <StaggerContainer staggerChildren={0.08} className="space-y-4">
            {faqsList.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <StaggerItem
                  key={faq.question}
                  direction="up"
                  distance={15}
                  className="rounded-sm border border-[#C5A880]/20 bg-[#1A1412] overflow-hidden transition-colors hover:border-[#C5A880]/40 shadow-md"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
                  >
                    <span className="font-serif text-base sm:text-lg text-[#FDFBF7] font-semibold">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#C5A880] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#E5C590]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: luxuryEase }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 text-xs sm:text-sm text-[#CFC0A8] font-light leading-relaxed border-t border-[#C5A880]/10 pt-4">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}

