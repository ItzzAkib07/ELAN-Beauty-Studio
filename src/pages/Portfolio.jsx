import React from 'react';
import SEO from '../seo/SEO';
import { getBreadcrumbSchema } from '../seo/jsonLdSchemas';
import SectionHeading from '../components/common/SectionHeading';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';

export default function Portfolio() {
  const breadcrumbData = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" }
  ]);

  return (
    <>
      <SEO
        title="Professional Portfolio | ÉLAN Beauty Studio · Sakshi Choudhry"
        description="View the complete body of work by Sakshi Choudhry: Bridal artistry, editorial campaigns, luxury salon management, and creative direction in Pune."
        canonicalUrl="https://elanbeautystudio.com/portfolio"
        structuredData={breadcrumbData}
      />

      {/* Page Hero Header */}
      <section className="py-16 sm:py-24 bg-[#110E0C] border-b border-[#C5A880]/20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-3">
            Body of Work
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#FDFBF7] tracking-tight mb-4">
            Professional Portfolio
          </h1>
          <p className="text-sm sm:text-base text-[#CFC0A8] font-light max-w-xl mx-auto">
            A curated showcase spanning bridal elegance, editorial campaigns, luxury salon spaces, and aesthetic brand direction.
          </p>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-20 sm:py-28 bg-[#14100E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}
