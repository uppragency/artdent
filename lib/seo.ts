import type { Metadata } from "next";
import { site } from "./data";

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
