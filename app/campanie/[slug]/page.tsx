import { notFound } from "next/navigation";
import { services, serviceDetails, site } from "@/lib/data";
import { OpenBookingButton } from "@/components/OpenBookingButton";
import { BookingSection } from "@/components/BookingSection";
import { TrustBadges } from "@/components/TrustBadges";
import { BenefitIcon } from "@/components/BenefitIcon";

// Landing page dedicate campaniilor plătite (Google/Facebook Ads), câte una
// pentru fiecare serviciu de bază. Nu sunt linkate din navigare, footer sau
// sitemap — se accesează doar din linkul folosit în anunț — și au robots
// noindex ca să nu concureze cu paginile /servicii/[slug] în căutarea organică.

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const detail = serviceDetails[slug];
  if (!detail) return {};
  return {
    title: detail.metaTitle,
    description: detail.metaDescription,
    robots: { index: false, follow: true },
  };
}

export default async function CampaignLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];
  if (!service || !detail) notFound();

  const waLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(`Bună, vreau o programare pentru ${service.title.toLowerCase()}.`)}`;

  return (
    <>
      <section
        className="dot-grid-teal noise-overlay"
        style={{
          position: "relative", marginTop: "-86px",
          background: "radial-gradient(circle at 22% 8%, oklch(0.34 0.05 195) 0%, #024B5C 55%)",
          color: "oklch(0.97 0.012 90)", overflow: "hidden",
        }}
      >
        <div style={{
          maxWidth: 900, margin: "0 auto",
          padding: "calc(86px + clamp(48px, 7vw, 88px)) clamp(16px, 3vw, 40px) clamp(48px, 7vw, 80px)",
          textAlign: "center", position: "relative",
        }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "oklch(0.78 0.08 88)" }}>
            ArtDent Slobozia
          </span>
          <h1 className="font-display" style={{ margin: "14px 0 18px", fontWeight: 400, fontSize: "clamp(34px, 5.4vw, 60px)", lineHeight: 1.05, letterSpacing: "-0.015em" }}>
            {service.title}
          </h1>
          <p style={{ margin: "0 auto", maxWidth: "56ch", fontSize: 16.5, lineHeight: 1.65, color: "oklch(0.88 0.015 190)" }}>
            {detail.intro}
          </p>
          <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <OpenBookingButton className="btn-gold" style={{ fontSize: 16, fontWeight: 600, padding: "17px 30px", borderRadius: 4, display: "inline-flex" }}>
              Programează-te acum
            </OpenBookingButton>
            <a href={waLink} target="_blank" rel="noreferrer" className="btn-outline-light" style={{ fontSize: 16, fontWeight: 600, padding: "17px 30px", borderRadius: 4, display: "inline-flex" }}>
              Scrie-ne pe WhatsApp
            </a>
          </div>
          <div style={{ marginTop: 24, display: "flex", justifyContent: "center" }}>
            <TrustBadges light />
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)" }}>
          <h2 className="font-display" style={{ margin: "0 0 24px", fontSize: "clamp(24px, 3.2vw, 34px)", color: "var(--teal-deep)" }}>
            Ce include {service.title.toLowerCase()}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {service.items.map((it) => (
              <div key={it} style={{ border: "1px solid var(--line)", borderRadius: 8, padding: 20, background: "var(--card)", display: "grid", gap: 10 }}>
                <span style={{ fontSize: 15.5, fontWeight: 600, color: "var(--teal-deep)" }}>{it}</span>
                <OpenBookingButton style={{ fontSize: 13.5, fontWeight: 600 }}>Programează-te pentru asta →</OpenBookingButton>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, display: "flex", justifyContent: "center" }}>
            <OpenBookingButton className="btn-teal" style={{ fontSize: 15.5, fontWeight: 600, padding: "16px 28px", borderRadius: 4, display: "inline-flex" }}>
              Vreau o programare
            </OpenBookingButton>
          </div>
        </div>
      </section>

      <section className="dot-grid-gold" style={{ background: "var(--cream-section)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "clamp(48px, 6vw, 80px) clamp(16px, 3vw, 40px)" }}>
          <h2 className="font-display" style={{ margin: "0 0 24px", fontSize: "clamp(24px, 3.2vw, 34px)", color: "var(--teal-deep)" }}>
            De ce să alegi ArtDent Slobozia
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 14 }}>
            {detail.benefits.map((b, i) => (
              <div key={b} style={{ display: "flex", gap: 12, alignItems: "flex-start", border: "1px solid var(--line)", borderRadius: 8, background: "var(--card)", padding: "16px 18px" }}>
                <span style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--gold-tint-bg)", color: "var(--gold-label)", display: "grid", placeItems: "center", flex: "0 0 auto" }}>
                  <BenefitIcon index={i} />
                </span>
                <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--ink)", paddingTop: 5 }}>{b}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, display: "flex", justifyContent: "center" }}>
            <OpenBookingButton className="btn-teal" style={{ fontSize: 15.5, fontWeight: 600, padding: "16px 28px", borderRadius: 4, display: "inline-flex" }}>
              Programează o consultație
            </OpenBookingButton>
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(180deg, var(--white-to-blue) 0%, #fff 100%)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "clamp(48px, 6vw, 80px) clamp(16px, 3vw, 40px)" }}>
          <div style={{
            borderRadius: 10, background: "var(--teal-deep)", color: "oklch(0.97 0.012 90)",
            padding: "clamp(24px, 3vw, 32px)", display: "grid", gap: 12, textAlign: "center", justifyItems: "center",
          }}>
            <span style={{ fontSize: 17, fontWeight: 600 }}>Ești gata să faci primul pas?</span>
            <span style={{ fontSize: 14, lineHeight: 1.6, color: "oklch(0.88 0.015 190)", maxWidth: "40ch" }}>
              Sună acum sau lasă-ți datele — te contactăm noi pentru a stabili o programare.
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 8 }}>
              <a href={site.phoneHref} className="btn-outline-light-noscale" style={{ fontSize: 14.5, fontWeight: 600, padding: "14px 24px", borderRadius: 4 }}>
                Sună acum · {site.phone}
              </a>
              <OpenBookingButton className="btn-gold" style={{ fontSize: 14.5, fontWeight: 600, padding: "14px 24px", borderRadius: 4, display: "inline-flex" }}>
                Programează-te online
              </OpenBookingButton>
            </div>
          </div>
        </div>
      </section>

      <BookingSection />
    </>
  );
}
