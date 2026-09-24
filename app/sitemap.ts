import type { MetadataRoute } from "next";
import { site, services, doctor, teamMembers, galleryItems, beforeAfterCases, guides } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.siteUrl;
  const now = new Date();

  const homeImages = [
    ...galleryItems.map((g) => `${base}${g.src}`),
    ...beforeAfterCases.flatMap((c) => [`${base}${c.before}`, `${base}${c.after}`]),
    `${base}/images/og-image.jpg`,
    `${base}/images/cabinet.jpeg`,
    `${base}/images/detaliu-tratament.jpg`,
    `${base}/images/portret-pacient-medic.jpg`,
    `${base}/images/unit-dentar-vertical.jpg`,
    `${base}/images/sala-tratament-larg.jpg`,
  ];

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1, images: homeImages },
    { url: `${base}/despre`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/echipa`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/servicii`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/preturi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/testimoniale`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/intrebari-frecvente`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ghiduri`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/frica-de-dentist`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/prima-vizita-copil-la-dentist`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/ingrijire-dentara-varstnici`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/prima-consultatie-adulti`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/urgente-dentare`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/traumatism-dentar`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/dentist-slobozia`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/harta-site`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/termeni-si-conditii`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/politica-de-confidentialitate`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/politica-cookie-uri`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/servicii/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const teamPages: MetadataRoute.Sitemap = [doctor, ...teamMembers].map((m) => ({
    url: `${base}/echipa/${m.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.5,
    images: [`${base}${m.image}`],
  }));

  const guidePages: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${base}/ghiduri/${g.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.55,
  }));

  return [...staticPages, ...servicePages, ...teamPages, ...guidePages];
}
