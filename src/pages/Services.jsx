import React from 'react';
import { Phone } from 'lucide-react';
import SEO from '../seo/SEO';
import { getBreadcrumbSchema } from '../seo/jsonLdSchemas';
import ServiceCard from '../components/services/ServiceCard';
import { servicesList } from '../data/services';
import Button from '../components/common/Button';
import { siteConfig } from '../../src/config/siteConfig';
import { Reveal } from '../components/animations/Reveal';
import PageHeader from '../components/common/PageHeader';
import SectionBackground from '../components/backgrounds/SectionBackground';

export default function Services() {
  const breadcrumbData = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" }
  ]);

  return (
    <>
      <SEO
        title="Services & Packages | ÉLAN Beauty Studio · Sakshi Choudhry"
        description="Luxury bridal makeup, occasion glam, editorial styling, hair draping, beauty consultations, and salon operations consulting in Pune."
        canonicalUrl="https://elanbeautystudio.com/services"
        structuredData={breadcrumbData}
      />

      {/* Page Hero Header with Interactive Stardust */}
      <PageHeader
        eyebrow="Bespoke Offerings"
        title="Services & Packages"
        subtitle="Refined makeup artistry, hair sculpting, and luxury salon operational consulting crafted with precision and care."
      />

      {/* Services Grid with Staggered Entrance */}
      <section className="py-20 sm:py-28 bg-[#14100E] relative overflow-hidden">
        {/* Interactive Geometric Gold Matrix */}
        <SectionBackground variant="geometric-gold" density={30} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>

          {/* Custom Package Consultation Banner */}
          <Reveal direction="up" delay={0.2} distance={30} className="mt-16 glass-panel p-8 sm:p-10 rounded-sm border border-[#C5A880]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                Destination & Custom Bridal Packages
              </span>
              <h3 className="font-serif text-2xl text-[#FDFBF7]">
                Planning a Multi-Day Wedding or Destination Event?
              </h3>
              <p className="text-xs sm:text-sm text-[#CFC0A8] font-light max-w-xl">
                We craft tailored multi-event packages covering Mehendi, Sangeet, Haldi, Wedding Pheras, and Reception with customized family styling options.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <Button to="/contact?service=Custom%20Bridal%20Package" variant="primary" size="md">
                Custom Inquiry
              </Button>
              <Button href={`tel:${siteConfig.phone}`} variant="secondary" size="md" icon={Phone} iconPosition="left">
                Call {siteConfig.displayPhone}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
