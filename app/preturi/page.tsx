import { PriceList } from "@/components/PriceList";
import { BookingSection } from "@/components/BookingSection";
import { PageHero } from "@/components/PageHero";
import { priceCategories, site } from "@/lib/data";

export const metadata = { title: "Prețuri — ArtDent Slobozia", alternates: { canonical: "/preturi" } };

function parsePrice(raw: string): { low: number; high: number } | null {
  const nums = raw.match(/\d+/g);
  if (!nums || nums.length === 0) return null;
  const values = nums.map(Number);
  return { low: Math.min(...values), high: Math.max(...values) };
}

export default function PreturiPage() {
  const offerCatalogJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Lista de prețuri ArtDent Slobozia",
    itemListElement: priceCategories.flatMap((cat) =>
      cat.items.map((it) => {
        const parsed = parsePrice(it.price);
        if (!parsed) return null;
        return {
          "@type": "Offer",
          itemOffered: { "@type": "MedicalProcedure", name: it.name },
          priceCurrency: "RON",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: parsed.low,
            maxPrice: parsed.high,
            priceCurrency: "RON",
          },
          seller: { "@type": "Dentist", name: "ArtDent Slobozia", url: site.siteUrl },
        };
      }).filter(Boolean)
    ),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }} />
      <PageHero
        eyebrow="Prețuri"
        title="Lista de prețuri"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Prețuri" }]}
      currentPath="/preturi"
      />
      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)" }}>
          <PriceList />
        </div>
      </section>

      <BookingSection />
    </>
  );
}
