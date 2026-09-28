import type { Metadata } from "next";
import { site, weeklyHours, services } from "./data";
import { getGoogleAggregateRating } from "./google-rating";

const DAY_MAP: Record<string, string> = {
  "Luni": "Monday", "Marți": "Tuesday", "Miercuri": "Wednesday",
  "Joi": "Thursday", "Vineri": "Friday", "Sâmbătă": "Saturday", "Duminică": "Sunday",
};

function openingHoursSpecification() {
  return weeklyHours
    .filter((d) => d.hours !== "Închis")
    .map((d) => {
      const [opens, closes] = d.hours.split("–").map((s) => s.trim());
      return { "@type": "OpeningHoursSpecification", dayOfWeek: DAY_MAP[d.day], opens, closes };
    });
}

// Schema completă Dentist (LocalBusiness), reutilizată pe toate paginile relevante
// (homepage, pagini locale) ca să nu existe versiuni parțiale/inconsistente între ele.
export async function dentistJsonLd({ url, areaServed }: { url: string; areaServed?: string[] }) {
  const aggregateRating = await getGoogleAggregateRating();

  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "ArtDent Slobozia",
    alternateName: site.legalName,
    url,
    image: `${site.siteUrl}/images/og-image.jpg`,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    priceRange: site.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al. Feroviarului 1",
      addressLocality: "Slobozia",
      addressRegion: "Ialomița",
      postalCode: "920030",
      addressCountry: "RO",
    },
    openingHoursSpecification: openingHoursSpecification(),
    medicalSpecialty: services.map((s) => s.title),
    sameAs: [site.facebookUrl, site.instagramUrl],
    ...(areaServed ? { areaServed } : {}),
    ...(aggregateRating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: aggregateRating.ratingValue,
            reviewCount: aggregateRating.reviewCount,
          },
        }
      : {}),
  };
}

// Generează metadate complete (title, description, canonical, Open Graph, Twitter)
// pentru o pagină internă, astfel încât linkurile distribuite (WhatsApp, Facebook,
// mesaje) să afișeze titlul și descrierea paginii respective, nu pe cele ale homepage-ului.
export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const ogImage = image || "/images/og-image.jpg";
  const url = `${site.siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: "ArtDent Slobozia",
      locale: "ro_RO",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
