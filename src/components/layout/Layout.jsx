import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CTASection from './CTASection';

export default function Layout({ children, showCTA = true }) {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#14100E] text-[#F7F3EB] font-sans selection:bg-[#C5A880] selection:text-[#14100E]">
      <Navbar />
      <main className="flex-grow pt-20 sm:pt-24">{children}</main>
      {showCTA && <CTASection />}
      <Footer />
    </div>
  );
}
