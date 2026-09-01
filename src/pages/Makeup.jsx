import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import SEO from '../seo/SEO';
import { getBreadcrumbSchema } from '../seo/jsonLdSchemas';
import SectionHeading from '../components/common/SectionHeading';
import MakeupGallery from '../components/makeup/MakeupGallery';
import SignatureLook from '../components/makeup/SignatureLook';
import BeforeAfterSlider from '../components/common/BeforeAfterSlider';
import { transformationData } from '../data/makeup';
import Button from '../components/common/Button';
import { Reveal } from '../components/animations/Reveal';
import PageHeader from '../components/common/PageHeader';
import SectionBackground from '../components/backgrounds/SectionBackground';

export default function Makeup() {
  const breadcrumbData = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "My Makeup", path: "/makeup" }
  ]);

  return (
    <>
      <SEO
        title="My Makeup Artistry Gallery | ÉLAN Beauty Studio · Sakshi Choudhry"
        description="Explore signature bridal, soft glam, traditional, and editorial makeup looks by Sakshi Choudhry in Pune. 100+ bridal makeups delivered."
        canonicalUrl="https://elanbeautystudio.com/makeup"
        structuredData={breadcrumbData}
      />

      {/* Page Hero Header with Interactive Stardust */}
      <PageHeader
        eyebrow="Signature Visual Masterclass"
        title="My Makeup"
        subtitle="Every face is different. Every look begins with understanding what makes you uniquely beautiful."
      />

      {/* Featured Signature Look */}
      <section className="py-20 sm:py-28 bg-[#14100E] relative overflow-hidden">
        <SectionBackground variant="constellation" density={28} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="Signature Look"
            title="The ÉLAN Royal Standard"
            subtitle="Explore our most celebrated bridal artistry look crafted with bespoke color theory and luminous HD textures."
          />
          <SignatureLook />
        </div>
      </section>

      {/* Interactive Transformation Comparison Section */}
      <section className="py-20 sm:py-28 bg-[#181210] relative overflow-hidden border-t border-b border-[#C5A880]/20">
        <SectionBackground variant="dual-glow" density={30} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="The Transformation"
            title="Before & After"
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
                  Artistry Standards
                </span>
                <h3 className="font-serif text-2xl text-[#FDFBF7] font-semibold">
                  Enhancing, Never Masking
                </h3>
                <p className="text-xs sm:text-sm text-[#CFC0A8] font-light leading-relaxed">
                  We believe true luxury lies in breathable, radiant makeup that looks as breathtaking in person as it does under 4K camera lenses.
                </p>

                <div className="space-y-2 pt-2 border-t border-[#C5A880]/15">
                  <span className="text-[11px] uppercase tracking-wider text-[#E5C590] font-semibold block">
                    Our Skin Philosophy:
                  </span>
                  <div className="text-xs text-[#EFE8DC] space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>Custom moisture-barrier skin prep</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>Zero-flashback HD color matching</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>Waterproof, 12+ hour sweat-resistant hold</span>
                    </div>
                  </div>
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

      {/* Main Filterable Gallery */}
      <section className="py-20 sm:py-28 bg-[#14100E] relative overflow-hidden">
        <SectionBackground variant="luminous-bokeh" density={24} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="Curated Portfolio"
            title="Explore Makeup Categories"
            subtitle="Browse through bridal, soft glam, traditional, and editorial artistry."
          />
          <MakeupGallery showFilter={true} />
        </div>
      </section>
    </>
  );
}

