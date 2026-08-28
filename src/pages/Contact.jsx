import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Sparkles, MessageCircle, Phone, Mail } from 'lucide-react';
import SEO from '../seo/SEO';
import { getSalonSchema, getBreadcrumbSchema } from '../seo/jsonLdSchemas';
import SectionHeading from '../components/common/SectionHeading';
import BookingForm from '../components/contact/BookingForm';
import ContactInfo from '../components/contact/ContactInfo';
import { faqsList } from '../data/faq';
import { siteConfig } from '../config/siteConfig';

export default function Contact() {
  const [openFaqIndex, setOpenFaqIndex] = useState(-1);

  const breadcrumbData = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact & Bookings", path: "/contact" }
  ]);

  const salonData = getSalonSchema();

  return (
    <>
      <SEO
        title="Contact & Book an Appointment | ÉLAN Beauty Studio · Sakshi Choudhry"
        description="Book your bespoke bridal makeup, occasion glam, or salon operations consultation with Sakshi Choudhry in Pune. Call +91 74155 21971."
        canonicalUrl="https://elanbeautystudio.com/contact"
        structuredData={{
          "@graph": [salonData, breadcrumbData]
        }}
      />

      {/* Page Hero Header */}
      <section className="py-16 sm:py-24 bg-[#110E0C] border-b border-[#C5A880]/20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-3">
            Appointments & Inquiries
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#FDFBF7] tracking-tight mb-4">
            Book an Appointment
          </h1>
          <p className="text-sm sm:text-base text-[#CFC0A8] font-light max-w-xl mx-auto">
            Reserve your bespoke beauty session or salon operations consultation in Pune.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 sm:py-28 bg-[#14100E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Booking Form Column */}
            <div className="lg:col-span-7">
              <BookingForm />
            </div>

            {/* Studio Info Column */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-[#110E0C] border-t border-[#C5A880]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Booking Guidance"
            title="Frequently Asked Questions"
            subtitle="Clear answers on scheduling, venue travel, cosmetics brands, and bridal trials."
          />

          <div className="space-y-4">
            {faqsList.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div
                  key={faq.question}
                  className="rounded-sm border border-[#C5A880]/20 bg-[#1A1412] overflow-hidden"
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

                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 sm:px-6 pb-5 text-xs sm:text-sm text-[#CFC0A8] font-light leading-relaxed border-t border-[#C5A880]/10 pt-4"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
