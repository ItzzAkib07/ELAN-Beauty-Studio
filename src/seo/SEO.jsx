import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../config/siteConfig';

export default function SEO({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = '/hero-editorial-elan.jpg',
  structuredData,
  noIndex = false
}) {
  const pageTitle = title 
    ? `${title} | ${siteConfig.businessName}`
    : `${siteConfig.businessName} | ${siteConfig.tagline} · ${siteConfig.artistName}`;
    
  const metaDescription = description || siteConfig.description;
  const currentUrl = typeof window !== 'undefined' ? (canonicalUrl || window.location.href) : 'https://elanbeautystudio.com';
  const siteUrl = 'https://elanbeautystudio.com';
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={currentUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={siteConfig.businessName} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Structured Data / JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
