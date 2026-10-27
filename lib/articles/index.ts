// Articole de blog păstrate în cod (versionate în git, publicate odată cu site-ul).
// Se combină cu articolele din tabelul Supabase `blog_posts` în lib/blog.ts.
// Un articol din Supabase cu același slug are prioritate.

import { article as tratamentDeCanal } from "./tratament-de-canal-slobozia";
import { article as molarDeMinte } from "./extractie-molar-de-minte-slobozia";
import { article as coroaneDentare } from "./coroane-dentare-slobozia";
import { article as allOnX } from "./all-on-4-all-on-6-slobozia";
import { article as sinusLift } from "./sinus-lift-adaos-osos-slobozia";
import { article as parodontita } from "./gingii-sangerande-parodontita-slobozia";
import { article as sigilari } from "./sigilari-fluorizare-copii-slobozia";
import { article as bruxism } from "./bruxism-gutiera-slobozia";
import { article as fatete } from "./fatete-dentare-slobozia";
import { article as ialomita } from "./dentist-ialomita-amara-fetesti-tandarei";

export type StaticArticle = {
  slug: string;
  title: string;
  excerpt: string;
  meta_description: string;
  cover_image: string | null;
  published_at: string;
  content: string; // HTML simplu: <h2>, <h3>, <p>, <ul>/<ol>, <table>, <strong>, <a>
};

export const staticArticles: StaticArticle[] = [
  tratamentDeCanal,
  molarDeMinte,
  coroaneDentare,
  allOnX,
  sinusLift,
  parodontita,
  sigilari,
  bruxism,
  fatete,
  ialomita,
];
