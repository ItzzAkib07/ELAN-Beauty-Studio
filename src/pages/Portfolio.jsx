import React from 'react';
import SEO from '../seo/SEO';
import { getBreadcrumbSchema } from '../seo/jsonLdSchemas';
import SectionHeading from '../components/common/SectionHeading';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import PageHeader from '../components/common/PageHeader';
import SectionBackground from '../components/backgrounds/SectionBackground';

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

      {/* Page Hero Header with Interactive Stardust */}
      <PageHeader
        eyebrow="Body of Work"
        title="Professional Portfolio"
        subtitle="A curated showcase spanning bridal elegance, editorial campaigns, luxury salon spaces, and aesthetic brand direction."
      />

      {/* Portfolio Content */}
      <section className="py-20 sm:py-28 bg-[#14100E] relative overflow-hidden">
        {/* Interactive Luminous Bokeh Background */}
        <SectionBackground variant="luminous-bokeh" density={24} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}

