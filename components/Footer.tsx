import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer style={{ background: "var(--card)", color: "var(--teal-deep)", overflow: "hidden" }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "clamp(56px, 7vw, 96px) clamp(16px, 3vw, 40px) 0",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "clamp(28px, 4vw, 56px)",
      }}>
        <div style={{ display: "grid", gap: 14, alignContent: "start" }}>
          <span style={{ display: "flex", alignItems: "baseline", gap: 9 }}>
            <span className="font-display" style={{ fontSize: 27, color: "var(--teal-deep)" }}>ArtDent</span>
            <span className="font-mono-label" style={{ fontSize: 10.5, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold-label)" }}>{site.city}</span>
          </span>
          <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: "var(--muted)", maxWidth: "30ch" }}>
            Clinică stomatologică cu servicii complete: implantologie, ortodonție, estetică dentară și profilaxie.
          </p>
          <div style={{ display: "flex", gap: 10, paddingTop: 4 }}>
            <a href={site.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook" className="social-circle" style={{ width: 38, height: 38, borderRadius: "50%", display: "grid", placeItems: "center", fontSize: 12, fontWeight: 600 }}>FB</a>
            <a href={site.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram" className="social-circle" style={{ width: 38, height: 38, borderRadius: "50%", display: "grid", placeItems: "center", fontSize: 12, fontWeight: 600 }}>IG</a>
          </div>
        </div>

        <div style={{ display: "grid", alignContent: "start" }}>
          <span className="font-display" style={{ fontSize: 18, letterSpacing: "0.02em", color: "var(--teal-deep)", paddingBottom: 14 }}>LINKURI RAPIDE</span>
          {[
            { label: "Servicii", href: "/servicii" },
            { label: "Despre noi", href: "/despre" },
            { label: "Prețuri", href: "/preturi" },
            { label: "Întrebări frecvente", href: "/intrebari-frecvente" },
          ].map((l, i, arr) => (
            <a key={l.label} href={l.href} className="footer-link" style={{
              fontSize: 15, fontWeight: 500, padding: "13px 0", borderTop: "1px solid var(--line)",
              borderBottom: i === arr.length - 1 ? "1px solid var(--line)" : undefined,
            }}>{l.label}</a>
          ))}
        </div>

        <div style={{ display: "grid", gap: 12, alignContent: "start" }}>
          <span className="font-display" style={{ fontSize: 18, color: "var(--teal-deep)" }}>Contact &amp; Program</span>
          <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: "var(--muted)", maxWidth: "34ch" }}>{site.address}. {site.hours}.</p>
          <a href={site.phoneHref} className="footer-link" style={{ fontSize: 15.5, fontWeight: 600 }}>{site.phone}</a>
        </div>

        <div style={{ display: "grid", gap: 12, alignContent: "start" }}>
          <span className="font-display" style={{ fontSize: 18, color: "var(--teal-deep)" }}>Unde ne găsești</span>
          <iframe
            src={site.mapsEmbed}
            style={{ border: "1px solid var(--line)", borderRadius: 8, width: "100%", minHeight: 140 }}
            loading="lazy"
            title="Hartă ArtDent Slobozia"
          />
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(24px, 3vw, 36px) clamp(16px, 3vw, 40px) 0" }}>
        <div style={{ borderTop: "1px solid var(--line)", paddingTop: 20, display: "flex", flexWrap: "wrap", gap: "10px 24px", justifyContent: "space-between", fontSize: 12.5, color: "var(--muted)" }}>
          <span>© 2026 {site.legalName}. CUI: {site.cui}. Toate drepturile rezervate.</span>
          <span style={{ display: "flex", flexWrap: "wrap", gap: "10px 20px" }}>
            <a href="/termeni-si-conditii" style={{ color: "var(--muted)" }}>Termeni și condiții</a>
            <a href="/politica-de-confidentialitate" style={{ color: "var(--muted)" }}>Politica de confidențialitate</a>
            <a href="/politica-cookie-uri" style={{ color: "var(--muted)" }}>Politica de cookie-uri</a>
            <a href="/harta-site" style={{ color: "var(--muted)" }}>Harta site</a>
          </span>
        </div>
      </div>

      <div style={{ padding: "clamp(16px, 3vw, 32px) 0 clamp(4px, 1vw, 12px)", textAlign: "center", overflow: "visible" }}>
        <span className="font-display" style={{ fontSize: "clamp(80px, 15vw, 220px)", lineHeight: 1.15, color: "var(--teal-deep)", letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
          ArtDent Slobozia
        </span>
      </div>
    </footer>
  );
}
