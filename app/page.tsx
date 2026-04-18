import Script from "next/script";

import { AboutTeaser } from "@/components/sections/about-teaser";
import { BlogPreview } from "@/components/sections/blog-preview";
import { ConversionBanner } from "@/components/sections/conversion-banner";
import { HeroSection } from "@/components/sections/hero-section";
import { ReviewsCarousel } from "@/components/sections/reviews-carousel";
import { ServicesGrid } from "@/components/sections/services-grid";
import { TrustBar } from "@/components/sections/trust-bar";
import { getLatestPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Gebäudereinigung Wertheim",
  description:
    "GlasKlar ist Ihr lokaler Partner für professionelle Gebäudereinigung in Wertheim: Unterhaltsreinigung, Glasreinigung, Bauendreinigung und mehr.",
  path: "/",
});

export default async function HomePage() {
  const latestPosts = await getLatestPosts(3);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}/images/team-hero.svg`,
    description: siteConfig.description,
    telephone: "+49 9342 3029778",
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.zip,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
    },
    areaServed: siteConfig.areas,
    priceRange: "€€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
    },
  };

  return (
    <>
      <Script
        id="local-business-schema"
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <ReviewsCarousel />
      <AboutTeaser />
      <ConversionBanner />
      <BlogPreview posts={latestPosts} />
    </>
  );
}
