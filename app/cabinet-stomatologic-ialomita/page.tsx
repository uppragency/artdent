import { PageHero } from "@/components/PageHero";
import { BookingSection } from "@/components/BookingSection";
import { OpenBookingButton } from "@/components/OpenBookingButton";
import { services, site } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cabinet stomatologic Ialomița — ArtDent Slobozia",
  description: "Cauți un cabinet stomatologic în județul Ialomița? ArtDent din Slobozia deservește pacienți din Fetești, Urziceni, Călărași și din toată zona, cu servicii complete.",
  path: "/cabinet-stomatologic-ialomita",
});

const nearbyTowns = [
  { city: "Fetești", distance: "≈ 30 km", time: "≈ 30 min" },
  { city: "Urziceni", distance: "≈ 35 km", time: "≈ 35 min" },
  { city: "Țăndărei", distance: "≈ 25 km", time: "≈ 25 min" },
  { city: "Călărași", distance: "≈ 65 km", time: "≈ 60 min" },
];

export default function CabinetStomatologicIalomitaPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "ArtDent Slobozia",
    address: { "@type": "PostalAddress", streetAddress: site.address, addressLocality: site.city, addressRegion: "Ialomița", addressCountry: "RO" },
    telephone: site.phone,
    url: `${site.siteUrl}/cabinet-stomatologic-ialomita`,
    areaServed: ["Slobozia", "Fetești", "Urziceni", "Țăndărei", "Călărași", "Ialomița"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />

      <PageHero
        eyebrow="Cabinet stomatologic Ialomița"
        title="Cabinet stomatologic pentru tot județul Ialomița"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Cabinet stomatologic Ialomița" }]}
        currentPath="/cabinet-stomatologic-ialomita"
      />

      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)" }}>
          <p style={{ margin: "0 0 20px", fontSize: 16, lineHeight: 1.8, color: "var(--muted-2)" }}>
            ArtDent este un cabinet stomatologic cu sediul în Slobozia, deservind pacienți din tot județul Ialomița — de la Fetești și Urziceni, până la Țăndărei și localitățile din zonă. Oferim atât tratamente generale, cât și proceduri complexe: implantologie, ortodonție, estetică și chirurgie dento-alveolară.
          </p>
          <p style={{ margin: "0 0 32px", fontSize: 16, lineHeight: 1.8, color: "var(--muted-2)" }}>
            Pentru pacienții care vin din alte localități ale județului, recomandăm programarea din timp, astfel încât să putem aloca timpul necesar unei evaluări complete în aceeași vizită.
          </p>

          <h2 className="font-display" style={{ margin: "0 0 16px", fontWeight: 400, fontSize: "clamp(22px, 2.6vw, 28px)", color: "var(--teal-deep)" }}>
            Distanțe orientative din județ
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 36 }}>
            {nearbyTowns.map((t) => (
              <div key={t.city} style={{ border: "1px solid var(--line)", borderRadius: 8, padding: "14px 18px", background: "var(--card)" }}>
                <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "var(--teal-deep)" }}>{t.city}</p>
                <p style={{ margin: "4px 0 0", fontSize: 13, color: "var(--muted)" }}>{t.distance} · {t.time} cu mașina</p>
              </div>
            ))}
          </div>
          <p style={{ margin: "-24px 0 36px", fontSize: 12, color: "var(--muted)" }}>Distanțe și timpi aproximativi, cu variații în funcție de trafic.</p>

          <h2 className="font-display" style={{ margin: "0 0 16px", fontWeight: 400, fontSize: "clamp(22px, 2.6vw, 28px)", color: "var(--teal-deep)" }}>
            Servicii disponibile
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginBottom: 36 }}>
            {services.map((s) => (
              <a key={s.slug} href={`/servicii/${s.slug}`} className="service-card" style={{ display: "grid", gap: 6, padding: 18, borderRadius: 8 }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: "var(--teal-deep)" }}>{s.title}</span>
                <span style={{ fontSize: 13, color: "var(--muted)" }}>{s.text}</span>
              </a>
            ))}
          </div>

          <OpenBookingButton className="btn-teal" style={{ display: "inline-flex", fontSize: 15.5, fontWeight: 600, padding: "16px 28px", borderRadius: 4 }}>
            Programează o consultație
          </OpenBookingButton>
          <p style={{ marginTop: 16, fontSize: 14, color: "var(--muted)" }}>
            Sună la <a href={site.phoneHref} className="font-mono-label">{site.phone}</a> pentru detalii despre programare din altă localitate.
          </p>
        </div>
      </section>

      <BookingSection />
    </>
  );
}
