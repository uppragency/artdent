import { PriceList } from "@/components/PriceList";
import { BookingSection } from "@/components/BookingSection";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "Prețuri — ArtDent Slobozia", alternates: { canonical: "/preturi" } };

export default function PreturiPage() {
  return (
    <>
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
