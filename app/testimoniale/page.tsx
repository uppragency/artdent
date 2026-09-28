import { Testimonials } from "@/components/Testimonials";
import { GalleryAndBeforeAfter } from "@/components/GalleryAndBeforeAfter";
import { BookingSection } from "@/components/BookingSection";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Testimoniale & Rezultate — ArtDent Slobozia",
  description: "Recenzii reale ale pacienților ArtDent Slobozia și rezultate înainte/după pentru tratamente de implantologie, ortodonție și estetică dentară.",
  path: "/testimoniale",
});

export default function TestimonialePage() {
  return (
    <>
      <PageHero
        eyebrow="Testimoniale & rezultate"
        title="Ce spun pacienții noștri"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Testimoniale" }]}
      currentPath="/testimoniale"
      />
      <Testimonials />
      <GalleryAndBeforeAfter />
      <BookingSection />
    </>
  );
}
