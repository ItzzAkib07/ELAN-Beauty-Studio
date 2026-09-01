import React from 'react';
import { Star } from 'lucide-react';
import SEO from '../seo/SEO';
import { getBreadcrumbSchema } from '../seo/jsonLdSchemas';
import SectionHeading from '../components/common/SectionHeading';
import TestimonialCarousel from '../components/testimonials/TestimonialCarousel';
import { testimonialsList } from '../data/testimonials';
import { StaggerContainer, StaggerItem } from '../components/animations/Reveal';
import PageHeader from '../components/common/PageHeader';
import SectionBackground from '../components/backgrounds/SectionBackground';

export default function Testimonials() {
  const breadcrumbData = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Testimonials", path: "/testimonials" }
  ]);

  return (
    <>
      <SEO
        title="Client Reviews & Testimonials | ÉLAN Beauty Studio · Sakshi Choudhry"
        description="Read what brides and clients in Pune say about their luxury makeup and salon experience with Sakshi Choudhry."
        canonicalUrl="https://elanbeautystudio.com/testimonials"
        structuredData={breadcrumbData}
      />

      {/* Page Hero Header with Interactive Stardust */}
      <PageHeader
        eyebrow="Client Words & Experiences"
        title="Testimonials"
        subtitle="Heartfelt words from brides and clients who trusted Sakshi Choudhry with their special celebrations."
      />

      {/* Featured Carousel Section */}
      <section className="py-20 sm:py-24 bg-[#14100E] relative overflow-hidden">
        {/* Interactive Luminous Bokeh Background */}
        <SectionBackground variant="luminous-bokeh" density={22} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="Featured Praise"
            title="Voices of Elegance"
            subtitle="Swipe through recent reviews from our bridal and occasion clients in Pune."
          />
          <TestimonialCarousel />
        </div>
      </section>

      {/* Full Testimonials Grid */}
      <section className="py-20 sm:py-28 bg-[#181210] relative overflow-hidden border-t border-[#C5A880]/20">
        {/* Warm Rose-Amber Atmosphere */}
        <SectionBackground variant="rose-amber" density={24} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="Client Archive"
            title="All Verified Reviews"
            subtitle="Every review reflects our dedication to skin prep, personalized beauty, and seamless client care."
          />

          <StaggerContainer staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonialsList.map((test) => (
              <StaggerItem
                key={test.id}
                direction="up"
                distance={25}
                className="glass-panel p-6 sm:p-8 rounded-sm border border-[#C5A880]/20 hover:border-[#C5A880]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#E5C590]">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-[#C5A880] px-2.5 py-0.5 rounded bg-[#14100E] border border-[#C5A880]/30">
                      {test.occasion}
                    </span>
                  </div>

                  <p className="text-sm font-serif text-[#FDFBF7] italic leading-relaxed">
                    “{test.quote}”
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#C5A880]/15 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-serif text-base text-[#FDFBF7] font-semibold">
                      {test.clientName}
                    </h4>
                    <p className="text-[11px] text-[#A8A19A]">{test.location}</p>
                  </div>
                  <span className="text-[11px] text-[#C5A880]">{test.date}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
