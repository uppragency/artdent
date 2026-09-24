import { Testimonials } from "@/components/Testimonials";
import { GalleryAndBeforeAfter } from "@/components/GalleryAndBeforeAfter";
import { BookingSection } from "@/components/BookingSection";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "Testimoniale & Rezultate — ArtDent Slobozia" };

export default function TestimonialePage() {
  return (
    <>
      <PageHero
        eyebrow="Testimoniale & rezultate"
        title="Ce spun pacienții noștri"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Testimoniale" }]}
      />
      <Testimonials />
      <GalleryAndBeforeAfter />
      <BookingSection />
    </>
  );
}
