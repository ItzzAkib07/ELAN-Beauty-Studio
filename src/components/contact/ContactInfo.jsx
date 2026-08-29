import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from '../common/SocialIcons';
import { siteConfig } from '../../config/siteConfig';
import Button from '../common/Button';
import { Reveal } from '../animations/Reveal';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Studio Header Card */}
      <Reveal direction="right" distance={25} className="glass-panel p-6 sm:p-8 rounded-sm border border-[#C5A880]/30 shadow-xl space-y-6">
        <div>
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-1">
            Studio Information
          </span>
          <h3 className="font-serif text-2xl text-[#FDFBF7] font-semibold">
            {siteConfig.businessName}
          </h3>
          <p className="text-xs text-[#CFC0A8] font-light mt-1">
            Led by <strong>{siteConfig.artistName}</strong> · Senior Salon Manager & Makeup Artist
          </p>
        </div>

        <div className="space-y-4 text-xs text-[#EFE8DC]">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block text-[#FDFBF7]">Studio Location</span>
              <span className="text-[#CFC0A8]">{siteConfig.location}</span>
              <p className="text-[11px] text-[#A8A19A] mt-0.5">
                Serving Baner, Aundh, Koregaon Park, Viman Nagar & Pune Metro
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block text-[#FDFBF7]">Direct Phone</span>
              <a href={`tel:${siteConfig.phone}`} className="text-[#E5C590] hover:underline">
                {siteConfig.displayPhone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block text-[#FDFBF7]">Official Enquiries</span>
              <a href={`mailto:${siteConfig.email}`} className="text-[#E5C590] hover:underline break-all">
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block text-[#FDFBF7]">Hours of Artistry</span>
              <p className="text-[#CFC0A8]">Mon - Fri: {siteConfig.workingHours.weekdays}</p>
              <p className="text-[#CFC0A8]">Sat - Sun: {siteConfig.workingHours.weekends}</p>
              <p className="text-[10px] text-[#C5A880] mt-1 font-medium">
                {siteConfig.workingHours.bridalBookings}
              </p>
            </div>
          </div>
        </div>

        {/* Direct WhatsApp Quick Chat */}
        <div className="pt-4 border-t border-[#C5A880]/15">
          <Button
            href={siteConfig.socialLinks.whatsapp}
            variant="secondary"
            fullWidth
            size="md"
            icon={WhatsAppIcon}
            iconPosition="left"
          >
            Direct WhatsApp Message
          </Button>
        </div>
      </Reveal>

      {/* Trust & Hygiene Assurance Card */}
      <Reveal direction="right" delay={0.15} distance={20} className="p-6 rounded-sm bg-[#1E1815] border border-[#C5A880]/20 space-y-3 shadow-lg">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#E5C590]">
          <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
          <span>Professional Service Assurance</span>
        </div>
        <p className="text-xs text-[#CFC0A8] font-light leading-relaxed">
          All brushes and cosmetic stations undergo rigorous medical-grade sanitization between clients. Luxury authentic cosmetics sourced directly from authorized brand ateliers.
        </p>
      </Reveal>
    </div>
  );
}
