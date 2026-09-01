import React from 'react';
import { Home, Sparkles } from 'lucide-react';
import SEO from '../seo/SEO';
import Button from '../components/common/Button';
import SectionBackground from '../components/backgrounds/SectionBackground';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | ÉLAN Beauty Studio"
        description="The page you are looking for does not exist. Return to ÉLAN Beauty Studio homepage."
        noIndex={true}
      />

      <div className="relative min-h-[75vh] flex items-center justify-center py-20 px-4 sm:px-6 text-center overflow-hidden">
        <SectionBackground variant="hero-dust" density={36} />

        <div className="relative z-10 max-w-lg glass-panel p-8 sm:p-12 rounded-sm border border-[#C5A880]/30 shadow-2xl space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/40 flex items-center justify-center mx-auto text-[#E5C590]">
            <Sparkles className="w-8 h-8" />
          </div>

          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
            404 Error
          </span>

          <h1 className="text-3xl sm:text-4xl font-serif text-[#FDFBF7]">
            Lost in the Details?
          </h1>

          <p className="text-sm text-[#CFC0A8] font-light leading-relaxed">
            The page you're looking for couldn't be found. It may have been moved, renamed, or is temporarily unavailable.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/" variant="primary" size="md" icon={Home} iconPosition="left">
              Return Home
            </Button>
            <Button to="/contact" variant="secondary" size="md">
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

