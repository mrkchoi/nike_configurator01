import React from 'react';
import { Helmet } from 'react-helmet-async';

function SEOHelmet() {
  return (
    <Helmet>
      {/* Character Set */}
      <meta charset="utf-8" />

      {/* Title */}
      <title>Nike. Just Do It. Nike.com</title>

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Description */}
      <meta
        name="description"
        content="Nike delivers innovative products, experiences and services to inspire athletes."
      />

      {/* Keywords */}
      <meta
        name="keywords"
        content="Nike, shoes, sportswear, athletic wear, sneakers, running, basketball, football, soccer, fitness"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.nike.com/" />
      <meta property="og:title" content="Nike. Just Do It. Nike.com" />
      <meta
        property="og:description"
        content="Nike delivers innovative products, experiences and services to inspire athletes."
      />

      {/* Canonical URL */}
      <link rel="canonical" href="https://www.nike.com/" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Additional Meta Tags */}
      <meta name="author" content="Kenny Choi" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
}

export default SEOHelmet;
