import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/programari-9k3fq7", "/api/"],
      },
    ],
    sitemap: `${site.siteUrl}/sitemap.xml`,
  };
}
