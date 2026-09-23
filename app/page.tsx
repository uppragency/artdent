import { Hero } from "@/components/Hero";
import { FirstVisit } from "@/components/FirstVisit";
import { Solutions } from "@/components/Solutions";
import { Concept } from "@/components/Concept";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Pricing } from "@/components/Pricing";
import { GalleryAndBeforeAfter } from "@/components/GalleryAndBeforeAfter";
import { Stats } from "@/components/Stats";
import { Team } from "@/components/Team";
import { Faq } from "@/components/Faq";
import { Blog } from "@/components/Blog";
import { Testimonials } from "@/components/Testimonials";
import { BookingSection } from "@/components/BookingSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FirstVisit />
      <Solutions />
      <Concept />

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(64px, 8vw, 112px) clamp(16px, 3vw, 40px)", position: "relative", overflow: "hidden" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: "clamp(32px, 4vw, 48px)" }}>
          <div style={{ display: "grid", gap: 12 }}>
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>Serviciile noastre</span>
            <h2 className="font-display" style={{ margin: 0, fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 50px)", lineHeight: 1.05, letterSpacing: "-0.015em" }}>
              Tot ce ai nevoie, într-un singur loc
            </h2>
          </div>
          <a href="/servicii" style={{ fontSize: 15, fontWeight: 600 }}>Vezi lista de prețuri →</a>
        </div>
        <ServicesGrid />
      </section>

      <Pricing />
      <GalleryAndBeforeAfter />
      <Stats />
      <Team />
      <Faq />
      <Blog />
      <Testimonials />
      <BookingSection />
    </>
  );
}
