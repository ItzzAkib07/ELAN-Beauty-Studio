import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, GraduationCap, CheckCircle2, Building2, Sparkles, MapPin, Calendar, TrendingUp } from 'lucide-react';
import SEO from '../seo/SEO';
import { getPersonSchema, getBreadcrumbSchema } from '../seo/jsonLdSchemas';
import SectionHeading from '../components/common/SectionHeading';
import Timeline from '../components/experience/Timeline';
import CompetencyMatrix from '../components/experience/CompetencyMatrix';
import EducationSection from '../components/experience/EducationSection';
import Button from '../components/common/Button';

export default function Experience() {
  const breadcrumbData = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "My Experience", path: "/experience" }
  ]);

  const personData = getPersonSchema();

  return (
    <>
      <SEO
        title="My Experience & Credentials | Sakshi Choudhry · ÉLAN Beauty Studio"
        description="7+ years of premium salon leadership across Ally21, Studio 11, Monsoon Salon, and Looks Salon in Pune, combined with 100+ bridal makeup transformations."
        canonicalUrl="https://elanbeautystudio.com/experience"
        structuredData={{
          "@graph": [personData, breadcrumbData]
        }}
      />

      {/* Page Hero Header */}
      <section className="py-16 sm:py-24 bg-[#110E0C] border-b border-[#C5A880]/20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-3">
            Professional Career History
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#FDFBF7] tracking-tight mb-4">
            My Experience
          </h1>
          <p className="text-sm sm:text-base text-[#CFC0A8] font-light max-w-xl mx-auto">
            A journey shaped by artistry, experience and an eye for detail.
          </p>
        </div>
      </section>

      {/* Main Experience Section */}
      <section className="py-20 sm:py-28 bg-[#14100E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Executive Overview Banner */}
          <div className="mb-20 glass-panel p-8 sm:p-10 rounded-sm border border-[#C5A880]/30 shadow-xl max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                  Executive Summary
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#FDFBF7]">
                  7+ Years Leading Luxury Salon Operations
                </h2>
                <p className="text-xs sm:text-sm text-[#CFC0A8] font-light max-w-2xl">
                  Proven track record directing multi-branch beauty salons, managing budgets, training teams, driving digital visibility, and executing over 100+ high-end bridal transformations in Pune.
                </p>
              </div>

              <div className="shrink-0">
                <Button to="/contact" variant="primary" size="md">
                  Book a Consultation
                </Button>
              </div>
            </div>
          </div>

          {/* Vertical Interactive Career Timeline */}
          <div className="mb-28">
            <SectionHeading
              eyebrow="Chronological Journey"
              title="Career Milestones & Salon Leadership"
              subtitle="Detailed employment history across Pune's leading salon establishments."
            />
            <Timeline />
          </div>

          {/* Core Competencies & Skills Matrix */}
          <div className="mb-28">
            <SectionHeading
              eyebrow="Core Competencies"
              title="Verified Skills & Leadership Disciplines"
              subtitle="End-to-end expertise spanning makeup artistry, staff enablement, operational logistics, and aesthetic branding."
            />
            <CompetencyMatrix />
          </div>

          {/* Education & Academic Credentials */}
          <div>
            <SectionHeading
              eyebrow="Education & Accreditations"
              title="Academic Foundations & Certifications"
              subtitle="A distinctive convergence of formal makeup artistry, interior spatial design, and business management."
            />
            <EducationSection />
          </div>
        </div>
      </section>
    </>
  );
}
