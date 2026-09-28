import { supabase } from "@/lib/supabase";

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

export async function getPublishedPosts(): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .lte("published_at", new Date().toISOString())
      .order("published_at", { ascending: false });
    if (error || !data) return [];
    return data as BlogPost[];
  } catch {
    return [];
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
    if (error || !data) return null;
    return data as BlogPost;
  } catch {
    return null;
  }
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
