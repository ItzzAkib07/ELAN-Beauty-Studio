import React from 'react';
import { Star, Quote, Sparkles, Heart } from 'lucide-react';
import SEO from '../seo/SEO';
import { getBreadcrumbSchema } from '../seo/jsonLdSchemas';
import SectionHeading from '../components/common/SectionHeading';
import TestimonialCarousel from '../components/testimonials/TestimonialCarousel';
import { testimonialsList } from '../data/testimonials';

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

      {/* Page Hero Header */}
      <section className="py-16 sm:py-24 bg-[#110E0C] border-b border-[#C5A880]/20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-3">
            Client Words & Experiences
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#FDFBF7] tracking-tight mb-4">
            Testimonials
          </h1>
          <p className="text-sm sm:text-base text-[#CFC0A8] font-light max-w-xl mx-auto">
            Heartfelt words from brides and clients who trusted Sakshi Choudhry with their special celebrations.
          </p>
        </div>
      </section>

      {/* Featured Carousel Section */}
      <section className="py-20 sm:py-24 bg-[#14100E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured Praise"
            title="Voices of Elegance"
            subtitle="Swipe through recent reviews from our bridal and occasion clients in Pune."
          />
          <TestimonialCarousel />
        </div>
      </section>

      {/* Full Testimonials Grid */}
      <section className="py-20 sm:py-28 bg-[#181210] border-t border-[#C5A880]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Client Archive"
            title="All Verified Reviews"
            subtitle="Every review reflects our dedication to skin prep, personalized beauty, and seamless client care."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonialsList.map((test) => (
              <div
                key={test.id}
                className="glass-panel p-6 sm:p-8 rounded-sm border border-[#C5A880]/20 hover:border-[#C5A880]/50 transition-all flex flex-col justify-between shadow-lg"
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
