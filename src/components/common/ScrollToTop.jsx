import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If a specific hash anchor exists (e.g. /services#bridal-makeup)
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const navbarHeight = 85;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Instant reset to the absolute top of the page on route change
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      // Safety fallback for any delayed renders
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname, hash]);

  return null;
}
