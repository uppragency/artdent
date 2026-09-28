import { PageHero } from "@/components/PageHero";
import { BookingSection } from "@/components/BookingSection";
import { TreatmentDelayCalculator } from "@/components/TreatmentDelayCalculator";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cât te costă să amâni un tratament dentar — ArtDent Slobozia",
  description: "Vezi orientativ cum crește costul unui tratament dentar cu cât e amânat mai mult, cu prețuri reale din lista de tarife ArtDent Slobozia.",
  path: "/cat-costa-sa-amani-un-tratament",
});

export default function CatCostaSaAmaniPage() {
  return (
    <>
      <PageHero
        eyebrow="Ghid"
        title="Cât te costă să amâni un tratament"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Cât te costă să amâni un tratament" }]}
        currentPath="/cat-costa-sa-amani-un-tratament"
      />
      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)" }}>
          <p style={{ margin: "0 0 32px", fontSize: 16, lineHeight: 1.7, color: "var(--muted-2)" }}>
            O problemă dentară netratată nu rămâne la fel — de obicei se agravează, iar tratamentul necesar devine mai complex și mai costisitor. Alege mai jos ce se potrivește situației tale, pentru a vedea orientativ diferența.
          </p>
          <TreatmentDelayCalculator />
        </div>
      </section>
      <BookingSection />
    </>
  );
}
