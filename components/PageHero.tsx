import { ToothMotif } from "@/components/ToothMotif";
import { site } from "@/lib/data";

type Crumb = { label: string; href?: string };

function breadcrumbJsonLd(crumbs: Crumb[], currentPath?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${site.siteUrl}${c.href || currentPath || ""}`,
    })),
  };
}

function renderTitle(title: string, accent?: string) {
  if (!accent) return title;
  const idx = title.toLowerCase().indexOf(accent.toLowerCase());
  if (idx === -1) return title;
  return (
    <>
      {title.slice(0, idx)}
      <span className="accent-gradient">{title.slice(idx, idx + accent.length)}</span>
      {title.slice(idx + accent.length)}
    </>
  );
}

export function PageHero({ eyebrow, title, crumbs, accent, currentPath }: { eyebrow?: string; title: string; crumbs: Crumb[]; accent?: string; currentPath?: string }) {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs, currentPath)) }} />
    <section
      className="dot-grid-teal noise-overlay"
      style={{
        position: "relative",
        marginTop: "calc(-68px - clamp(10px, 1.4vw, 18px))",
        background: "radial-gradient(circle at 22% 8%, oklch(0.34 0.05 195) 0%, #024B5C 55%)",
        color: "oklch(0.97 0.012 90)",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", width: 320, height: 320, borderRadius: "50%",
        background: "oklch(0.83 0.1 88 / 0.13)", filter: "blur(70px)", top: -100, right: -80, pointerEvents: "none",
      }} />
      <ToothMotif style={{ bottom: -30, left: -20, transform: "rotate(-12deg)" }} />
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        padding: "calc(68px + clamp(10px, 1.4vw, 18px) + clamp(40px, 6vw, 72px)) clamp(16px, 3vw, 40px) clamp(40px, 6vw, 64px)",
        position: "relative",
      }}>
        <nav aria-label="breadcrumb" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginBottom: 18, fontSize: 13 }}>
          {crumbs.map((c, i) => (
            <span key={c.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {i > 0 && <span style={{ color: "rgba(255,255,255,0.4)" }}>/</span>}
              {c.href ? (
                <a href={c.href} style={{ color: "rgba(255,255,255,0.72)" }}>{c.label}</a>
              ) : (
                <span style={{ color: "var(--gold)" }}>{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        {eyebrow && (
          <span style={{ display: "block", marginBottom: 10, fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "oklch(0.78 0.08 88)" }}>
            {eyebrow}
          </span>
        )}
        <h1 className="font-display" style={{ margin: 0, fontWeight: 400, fontSize: "clamp(32px, 4.6vw, 54px)", lineHeight: 1.05, letterSpacing: "-0.015em", maxWidth: "22ch" }}>
          {renderTitle(title, accent)}
        </h1>
      </div>
    </section>
    </>
  );
}
