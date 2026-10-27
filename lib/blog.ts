import { supabase } from "@/lib/supabase";
import { staticArticles } from "@/lib/articles";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML simplu (paragrafe, titluri, liste)
  meta_description: string;
  cover_image: string | null;
  published_at: string;
  views: number;
};

// Toate funcțiile eșuează în liniște (returnează listă goală / null) dacă
// Supabase nu răspunde, ca paginile de blog să nu pice site-ul dacă baza
// de date are o problemă temporară.

// Articolele din cod (lib/articles) sunt adăugate peste cele din Supabase.
// Dacă același slug există în Supabase, varianta din Supabase are prioritate.
function staticPosts(): BlogPost[] {
  const now = Date.now();
  return staticArticles
    .filter((a) => new Date(a.published_at).getTime() <= now)
    .map((a) => ({ ...a, id: `static-${a.slug}`, views: 0 }));
}

function mergePosts(dbPosts: BlogPost[]): BlogPost[] {
  const slugs = new Set(dbPosts.map((p) => p.slug));
  return [...dbPosts, ...staticPosts().filter((p) => !slugs.has(p.slug))].sort(
    (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
  );
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .lte("published_at", new Date().toISOString())
      .order("published_at", { ascending: false });
    if (error || !data) return mergePosts([]);
    return mergePosts(data as BlogPost[]);
  } catch {
    return mergePosts([]);
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .lte("published_at", new Date().toISOString())
      .maybeSingle();
    if (data && !error) return data as BlogPost;
  } catch {
    // continuăm cu articolele din cod
  }
  return staticPosts().find((p) => p.slug === slug) ?? null;
}

export async function getTopPostsByViews(limit = 5): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .lte("published_at", new Date().toISOString())
      .order("views", { ascending: false })
      .limit(limit);
    if (error || !data) return [];
    return data as BlogPost[];
  } catch {
    return [];
  }
}
