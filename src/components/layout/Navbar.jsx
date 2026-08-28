import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from '../common/SocialIcons';
import { navLinks } from '../../data/navigation';
import { siteConfig } from '../../config/siteConfig';
import Button from '../common/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll detection for navbar blur and compact state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#14100E]/90 backdrop-blur-xl border-b border-[#C5A880]/20 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'bg-gradient-to-b from-[#14100E]/90 via-[#14100E]/40 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <Link
            to="/"
            className="flex flex-col items-start group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] rounded-sm"
            aria-label="ÉLAN Beauty Studio Homepage"
          >
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-semibold text-[#FDFBF7] group-hover:text-[#E5C590] transition-colors">
                ÉLAN
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] opacity-80" />
            </div>
            <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-[#C5A880] font-sans uppercase -mt-0.5">
              Beauty Studio
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-xs font-sans tracking-widest uppercase transition-all duration-300 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] ${
                    isActive
                      ? 'text-[#E5C590] font-semibold'
                      : 'text-[#EFE8DC]/80 hover:text-[#FDFBF7] hover:bg-[#C5A880]/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions: Phone & Book CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden xl:flex items-center gap-2 text-xs tracking-wider text-[#CFC0A8] hover:text-[#E5C590] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] rounded-sm py-1 px-2"
              aria-label={`Call ${siteConfig.displayPhone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{siteConfig.displayPhone}</span>
            </a>

            <Button
              to="/contact"
              variant="primary"
              size="sm"
              icon={Calendar}
              iconPosition="left"
            >
              Book an Appointment
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2 rounded-sm text-[#FDFBF7] hover:text-[#E5C590] hover:bg-[#C5A880]/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-[#E5C590]" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 lg:hidden bg-[#14100E]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-[#C5A880]/20">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex flex-col items-start"
              >
                <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-[#FDFBF7]">
                  ÉLAN
                </span>
                <span className="text-[9px] tracking-[0.3em] text-[#C5A880] uppercase">
                  Beauty Studio
                </span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 rounded-full border border-[#C5A880]/30 text-[#FDFBF7] hover:text-[#E5C590]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-3 py-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                >
                  <NavLink
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block text-lg font-serif tracking-wider uppercase py-2 px-3 transition-colors rounded-sm ${
                        isActive
                          ? 'text-[#E5C590] bg-[#C5A880]/10 font-semibold border-l-2 border-[#C5A880]'
                          : 'text-[#EFE8DC]/90 hover:text-[#E5C590]'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* Drawer Footer Actions */}
            <div className="pt-6 border-t border-[#C5A880]/20 space-y-4">
              <Button
                to="/contact"
                variant="primary"
                fullWidth
                size="md"
                icon={Calendar}
                iconPosition="left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book an Appointment
              </Button>

              <div className="flex items-center justify-between pt-2 text-xs text-[#CFC0A8]">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 hover:text-[#E5C590]"
                >
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                  <span>{siteConfig.displayPhone}</span>
                </a>

                <a
                  href={siteConfig.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#25D366] hover:brightness-110"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
