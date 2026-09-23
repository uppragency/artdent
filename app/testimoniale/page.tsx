import { Testimonials } from "@/components/Testimonials";
import { GalleryAndBeforeAfter } from "@/components/GalleryAndBeforeAfter";

export const metadata = { title: "Testimoniale & Rezultate — ArtDent Slobozia" };

export default function TestimonialePage() {
  return (
    <>
      <div style={{ paddingTop: "clamp(24px, 3vw, 40px)" }}>
        <Testimonials />
      </div>
      <GalleryAndBeforeAfter />
    </>
  );
}
