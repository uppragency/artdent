import { LocalityPage, type LocalityContent } from "@/components/LocalityPage";
import { pageMetadata } from "@/lib/seo";

const content: LocalityContent = {
  slug: "dentist-amara",
  town: "Amara",
  metaTitle: "Dentist Amara — ArtDent Slobozia, cabinet stomatologic la 10 minute",
  metaDescription: "Locuiești sau ești în vacanță la Amara și ai nevoie de un dentist? ArtDent Slobozia e la aproximativ 10 minute, cu servicii complete și programare rapidă.",
  heroTitle: "Dentist aproape de Amara, la cabinetul ArtDent din Slobozia",
  distance: "≈ 9 km",
  time: "≈ 10–12 min",
  intro: [
    "Pentru locuitorii din Amara, dar și pentru turiștii aflați la tratament balnear în stațiune, un dentist de încredere nu trebuie să fie departe. Cabinetul ArtDent se află în Slobozia, la câteva minute de mers cu mașina de Amara, și oferă atât urgențe dentare, cât și tratamente complete: implantologie, ortodonție, estetică dentară și profilaxie.",
    "Mulți dintre pacienții noștri din Amara vin pentru controlul periodic sau pentru o urgență apărută în timpul unui sejur la tratament balnear — o durere de dinte sau o proteză care s-a desprins nu ar trebui să-ți strice vacanța sau rutina. Programarea se face rapid, telefonic sau pe WhatsApp, iar pentru cazurile urgente încercăm să oferim cea mai apropiată oră liberă din program.",
  ],
  faq: [
    { q: "Cât durează drumul din Amara până la cabinet?", a: "În mod normal, aproximativ 10–12 minute cu mașina, în funcție de traficul din zonă și de punctul exact de plecare din stațiune." },
    { q: "Puteți trata o urgență dentară apărută în timpul unui sejur la Amara?", a: "Da, urgențele dentare (durere puternică, dinte spart, proteză deteriorată) primesc prioritate la programare. Sună-ne și descrie pe scurt situația, iar recepția îți oferă cea mai apropiată oră disponibilă." },
    { q: "Oferiți tratamente pentru pacienți vârstnici aflați la tratament balnear?", a: "Da, tratăm frecvent pacienți vârstnici, inclusiv pentru proteze dentare și ajustări, adaptând programarea și durata vizitei nevoilor fiecăruia." },
  ],
};

export const metadata = pageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: `/${content.slug}`,
});

export default function DentistAmaraPage() {
  return <LocalityPage content={content} />;
}
