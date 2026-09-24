import { site, calendarLink } from "@/lib/data";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "Mulțumim — ArtDent Slobozia" };

export default function MultumimPage() {
  return (
    <>
      <PageHero
        eyebrow="Solicitare trimisă"
        title="Mulțumim! Te contactăm în curând"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Mulțumim" }]}
      />
      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)", textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "var(--muted-2)" }}>
            Am primit solicitarea ta de programare. Te contactăm telefonic în aceeași zi pentru confirmarea orei.
          </p>
          <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.6, color: "var(--muted)" }}>
            Preferi mai direct? Scrie-ne pe WhatsApp sau sună-ne acum.
          </p>
          <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noreferrer" className="btn-teal" style={{ fontSize: 15.5, fontWeight: 600, padding: "15px 26px", borderRadius: 4, minHeight: 52, display: "flex", alignItems: "center" }}>
              Scrie-ne pe WhatsApp
            </a>
            <a href={site.phoneHref} className="btn-outline-dark" style={{ fontSize: 15.5, fontWeight: 600, padding: "15px 26px", borderRadius: 4, minHeight: 52, display: "flex", alignItems: "center" }}>
              {site.phone}
            </a>
          </div>
          <div>
            <a href={calendarLink} target="_blank" rel="noreferrer" style={{ display: "inline-block", marginTop: 24, fontSize: 14, fontWeight: 600, color: "var(--teal-600)" }}>
              + Adaugă în calendar
            </a>
          </div>
          <a href="/" style={{ display: "inline-block", marginTop: 20, fontSize: 14, color: "var(--muted)" }}>← Înapoi la pagina principală</a>
        </div>
      </section>
    </>
  );
}
