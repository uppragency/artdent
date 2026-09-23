import { PriceList } from "@/components/PriceList";
import { BookingSection } from "@/components/BookingSection";

export const metadata = { title: "Prețuri — ArtDent Slobozia" };

export default function PreturiPage() {
  return (
    <>
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "clamp(64px, 8vw, 112px) clamp(16px, 3vw, 40px)" }}>
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>Prețuri</span>
        <h1 className="font-display" style={{ margin: "10px 0 32px", fontWeight: 400, fontSize: "clamp(34px, 5vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.015em", color: "var(--teal-deep)" }}>
          Lista de prețuri
        </h1>

        <PriceList />
      </section>

      <BookingSection />
    </>
  );
}
