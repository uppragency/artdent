import { notFound } from "next/navigation";
import { guides, services, site } from "@/lib/data";
import { PageHero } from "@/components/PageHero";
import { BookingSection } from "@/components/BookingSection";
import { OpenBookingButton } from "@/components/OpenBookingButton";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return {};
  return {
    title: `${guide.title} — ArtDent Slobozia`,
    description: guide.metaDescription,
    alternates: { canonical: `/ghiduri/${slug}` },
  };
}

export default async function GuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const relatedService = guide.relatedServiceSlug
    ? services.find((s) => s.slug === guide.relatedServiceSlug)
    : undefined;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.metaDescription,
    author: { "@type": "Organization", name: "ArtDent Slobozia" },
    publisher: { "@type": "Organization", name: "ArtDent Slobozia", url: site.siteUrl },
    mainEntityOfPage: `${site.siteUrl}/ghiduri/${slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <PageHero
        eyebrow="Ghiduri"
        title={guide.title}
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Ghiduri", href: "/ghiduri" }, { label: guide.title }]}
        currentPath={`/ghiduri/${slug}`}
      />

      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)" }}>
          <div style={{ display: "grid", gap: 18 }}>
            {guide.paragraphs.map((p, i) => (
              <p key={i} style={{ margin: 0, fontSize: 16, lineHeight: 1.8, color: "var(--muted-2)" }}>{p}</p>
            ))}
          </div>

          {relatedService && guide.relatedServiceLabel && (
            <div style={{
              marginTop: 40, borderRadius: 10, background: "var(--teal-deep)", color: "oklch(0.97 0.012 90)",
              padding: "clamp(24px, 3vw, 32px)", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between",
            }}>
              <div style={{ display: "grid", gap: 6, maxWidth: "38ch" }}>
                <span style={{ fontSize: 15.5, fontWeight: 600 }}>Vrei să afli mai multe despre {guide.relatedServiceLabel}?</span>
                <span style={{ fontSize: 13.5, lineHeight: 1.55, color: "oklch(0.88 0.015 190)" }}>Programează o consultație și primești un plan de tratament personalizat.</span>
              </div>
              <a href={`/servicii/${relatedService.slug}`} className="btn-outline-light-noscale" style={{ fontSize: 14.5, fontWeight: 600, padding: "13px 22px", borderRadius: 4, whiteSpace: "nowrap" }}>
                {guide.relatedServiceLabel} →
              </a>
            </div>
          )}

          <div style={{ marginTop: 32 }}>
            <OpenBookingButton className="btn-teal" style={{ display: "inline-flex", fontSize: 15.5, fontWeight: 600, padding: "16px 28px", borderRadius: 4 }}>
              Programează o consultație
            </OpenBookingButton>
          </div>
        </div>
      </section>

      <BookingSection />
    </>
  );
}
