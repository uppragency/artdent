import { LocalityPage, type LocalityContent } from "@/components/LocalityPage";
import { pageMetadata } from "@/lib/seo";

const content: LocalityContent = {
  slug: "dentist-fetesti",
  town: "Fetești",
  metaTitle: "Dentist Fetești — ArtDent Slobozia, cabinet stomatologic cu servicii complete",
  metaDescription: "Cauți un dentist bun aproape de Fetești? ArtDent Slobozia oferă implantologie, ortodonție, estetică dentară și tratamente generale, cu prețuri transparente.",
  heroTitle: "Dentist pentru pacienții din Fetești, la cabinetul ArtDent Slobozia",
  distance: "≈ 30 km",
  time: "≈ 30 min",
  intro: [
    "Pentru pacienții din Fetești care nu găsesc local toate serviciile de care au nevoie, cabinetul ArtDent din Slobozia este o variantă accesibilă, la aproximativ 30 de minute de mers cu mașina. Oferim atât tratamente generale, cât și proceduri complexe — implant dentar, reabilitare pe implanturi, ortodonție și estetică dentară — pe care nu toate cabinetele din zonă le au disponibile.",
    "Pentru un tratament amplu (implant, ortodonție), recomandăm programarea din timp, astfel încât să putem aloca timpul necesar unei evaluări complete chiar la prima vizită, fără drumuri suplimentare inutile din Fetești până în Slobozia.",
  ],
  faq: [
    { q: "Merită drumul din Fetești pentru un tratament complex?", a: "Pentru tratamente precum implant dentar, ortodonție sau reabilitări complexe, planificarea corectă din prima consultație reduce numărul de vizite necesare — de multe ori compensează drumul din Fetești." },
    { q: "Pot programa mai multe proceduri într-o singură vizită, venind din Fetești?", a: "În limita posibilităților clinice, da. Spune-ne la programare că vii din altă localitate și încercăm să grupăm etapele acolo unde este posibil din punct de vedere medical." },
    { q: "Ce servicii sunt disponibile pentru pacienții din Fetești?", a: "Toate serviciile clinicii: implantologie și protetică, ortodonție, estetică și cosmetică dentară, tratamente generale, chirurgie buco-dentară și profilaxie." },
  ],
};

export const metadata = pageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: `/${content.slug}`,
});

export default function DentistFetestiPage() {
  return <LocalityPage content={content} />;
}
