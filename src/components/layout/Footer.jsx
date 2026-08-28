import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUp, Sparkles, Award } from 'lucide-react';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from '../common/SocialIcons';
import { siteConfig } from '../../config/siteConfig';
import { footerLinks } from '../../data/navigation';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C0A09] text-[#EFE8DC] border-t border-[#C5A880]/20 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#C5A880]/15">
          {/* Brand & Artist Profile */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl tracking-[0.2em] font-semibold text-[#FDFBF7]">
                ÉLAN
              </span>
              <span className="block text-[10px] tracking-[0.35em] text-[#C5A880] uppercase -mt-0.5">
                Beauty Studio
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#CFC0A8] font-light leading-relaxed max-w-sm">
              The signature personal brand & studio of <strong>Sakshi Choudhry</strong> — Senior Salon Manager & Professional Makeup Artist with 7+ years of operational excellence and 100+ luxury bridal transformations in Pune.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-[#E5C590]">
              <span className="px-2.5 py-1 rounded bg-[#1A1412] border border-[#C5A880]/20">
                Lakme Academy Certified
              </span>
              <span className="px-2.5 py-1 rounded bg-[#1A1412] border border-[#C5A880]/20">
                BSc Interior Design (INIFD)
              </span>
              <span className="px-2.5 py-1 rounded bg-[#1A1412] border border-[#C5A880]/20">
                BBA (Symbiosis)
              </span>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Contact"
                className="w-9 h-9 rounded-full bg-[#1A1412] border border-[#C5A880]/30 flex items-center justify-center text-[#25D366] hover:border-[#25D366] hover:scale-105 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-9 h-9 rounded-full bg-[#1A1412] border border-[#C5A880]/30 flex items-center justify-center text-[#E5C590] hover:border-[#E5C590] hover:scale-105 transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-9 h-9 rounded-full bg-[#1A1412] border border-[#C5A880]/30 flex items-center justify-center text-[#E5C590] hover:border-[#E5C590] hover:scale-105 transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FDFBF7] mb-4 pb-2 border-b border-[#C5A880]/20">
              Studio Navigation
            </h3>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-[#CFC0A8] hover:text-[#E5C590] transition-colors inline-block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FDFBF7] mb-4 pb-2 border-b border-[#C5A880]/20">
              Artistry & Services
            </h3>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-[#CFC0A8] hover:text-[#E5C590] transition-colors inline-block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Contact & Hours */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FDFBF7] mb-4 pb-2 border-b border-[#C5A880]/20">
              Studio & Contact
            </h3>

            <div className="space-y-3 text-xs text-[#CFC0A8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{siteConfig.location}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[#E5C590] transition-colors">
                  {siteConfig.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#E5C590] transition-colors break-all">
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-[#C5A880]/10">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div className="text-[11px] leading-relaxed">
                  <p>Mon - Fri: {siteConfig.workingHours.weekdays}</p>
                  <p>Sat - Sun: {siteConfig.workingHours.weekends}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8A19A]">
          <p>© {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved. Professional Makeup Artist · Beauty Specialist · Salon Manager.</p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A880] hover:text-[#E5C590] transition-colors py-1 px-3 rounded bg-[#1A1412] border border-[#C5A880]/20"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
