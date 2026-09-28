import { LocalityPage, type LocalityContent } from "@/components/LocalityPage";
import { pageMetadata } from "@/lib/seo";

const content: LocalityContent = {
  slug: "dentist-tandarei",
  town: "Țăndărei",
  metaTitle: "Dentist Țăndărei — ArtDent Slobozia, cabinet stomatologic cu servicii complete",
  metaDescription: "Cauți un dentist aproape de Țăndărei? ArtDent Slobozia oferă implantologie, ortodonție, estetică dentară și tratamente generale, cu programare rapidă.",
  heroTitle: "Dentist pentru pacienții din Țăndărei, la cabinetul ArtDent Slobozia",
  distance: "≈ 25 km",
  time: "≈ 25 min",
  intro: [
    "Locuitorii din Țăndărei care au nevoie de tratamente stomatologice complexe — implant dentar, ortodonție, estetică dentară — găsesc la ArtDent Slobozia un cabinet la aproximativ 25 de minute de mers cu mașina, cu echipamente moderne și plan de tratament transparent de la prima consultație.",
    "Pentru copiii din Țăndărei, cabinetul are o abordare adaptată vârstei, cu accent pe prevenție și pe o primă experiență liniștită la stomatolog. Programările se pot face telefonic, pe WhatsApp sau prin formularul online, iar pentru urgențe încercăm să oferim cea mai apropiată oră disponibilă.",
  ],
  faq: [
    { q: "Cât durează drumul din Țăndărei până la cabinet?", a: "Aproximativ 25 de minute cu mașina, în condiții normale de trafic." },
    { q: "Tratați și copii din Țăndărei?", a: "Da, avem experiență cu pacienți copii, cu accent pe profilaxie, sigilări dentare și o abordare blândă la prima vizită." },
    { q: "Ce fac dacă apare o urgență dentară în Țăndărei, în afara programului?", a: "Notează simptomele și urmează recomandările de prim ajutor (clătire cu apă cu sare, analgezic uzual dacă nu ai contraindicații) și sună-ne imediat ce se deschide programul, pentru cea mai apropiată oră disponibilă." },
  ],
};

export const metadata = pageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: `/${content.slug}`,
});

export default function DentistTandareiPage() {
  return <LocalityPage content={content} />;
}
