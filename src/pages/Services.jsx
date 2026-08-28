import React from 'react';
import { Sparkles, Calendar, CheckCircle2, Clock, Phone } from 'lucide-react';
import SEO from '../seo/SEO';
import { getBreadcrumbSchema } from '../seo/jsonLdSchemas';
import SectionHeading from '../components/common/SectionHeading';
import ServiceCard from '../components/services/ServiceCard';
import { servicesList } from '../data/services';
import Button from '../components/common/Button';
import { siteConfig } from '../config/siteConfig';

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

      {/* Page Hero Header */}
      <section className="py-16 sm:py-24 bg-[#110E0C] border-b border-[#C5A880]/20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-3">
            Bespoke Offerings
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#FDFBF7] tracking-tight mb-4">
            Services & Packages
          </h1>
          <p className="text-sm sm:text-base text-[#CFC0A8] font-light max-w-xl mx-auto">
            Refined makeup artistry, hair sculpting, and luxury salon operational consulting crafted with precision and care.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-28 bg-[#14100E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Custom Package Consultation Banner */}
          <div className="mt-16 glass-panel p-8 sm:p-10 rounded-sm border border-[#C5A880]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
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
          </div>
        </div>
      </section>
    </>
  );
}
