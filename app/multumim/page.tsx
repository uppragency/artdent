import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { ThankYouContent } from "@/components/ThankYouContent";

export const metadata = { title: "Mulțumim — ArtDent Slobozia" };

export default function MultumimPage() {
  return (
    <>
      <PageHero
        eyebrow="Solicitare trimisă"
        title="Mulțumim! Te contactăm în curând"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Mulțumim" }]}
      />
      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)", textAlign: "center" }}>
        <Suspense fallback={null}>
          <ThankYouContent />
        </Suspense>
      </section>
    </>
  );
}
