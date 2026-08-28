import { siteConfig } from '../config/siteConfig';

export const getSalonSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": siteConfig.businessName,
    "alternateName": siteConfig.brandName,
    "description": siteConfig.description,
    "url": typeof window !== "undefined" ? window.location.origin : "https://elanbeautystudio.com",
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411014",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.5204,
      "longitude": 73.8567
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "21:00"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": siteConfig.artistName,
      "jobTitle": "Senior Salon Manager & Professional Makeup Artist",
      "alumniOf": [
        { "@type": "EducationalOrganization", "name": "Lakme Academy, Pune" },
        { "@type": "EducationalOrganization", "name": "INIFD, Pune" },
        { "@type": "EducationalOrganization", "name": "Symbiosis, Pune" }
      ]
    },
    "priceRange": "$$$",
    "image": "https://elanbeautystudio.com/hero-editorial-elan.jpg"
  };
};

export const getPersonSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": siteConfig.artistName,
    "jobTitle": siteConfig.designation,
    "description": "Senior Salon Manager with 7+ years of experience leading premium salon operations and a professional makeup artist with expertise in 100+ bridal transformations.",
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411014",
      "addressCountry": "IN"
    },
    "worksFor": {
      "@type": "BeautySalon",
      "name": siteConfig.businessName
    },
    "knowsAbout": [
      "Bridal Makeup Artistry",
      "HD Airbrush Makeup",
      "Luxury Salon Operations",
      "Multi-Branch Salon Management",
      "Team Recruitment & Training",
      "Interior & Spatial Aesthetics",
      "Digital Marketing & Social Media Strategy"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Diploma in Professional Makeup Artist",
        "recognizedBy": { "@type": "Organization", "name": "Lakme Academy, Pune" }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "BSc Interior Design",
        "recognizedBy": { "@type": "Organization", "name": "INIFD, Pune" }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "BBA",
        "recognizedBy": { "@type": "Organization", "name": "Symbiosis, Pune" }
      }
    ]
  };
};

export const getBreadcrumbSchema = (items = []) => {
  const origin = typeof window !== "undefined" ? window.location.origin : "https://elanbeautystudio.com";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${origin}${item.path}`
    }))
  };
};
