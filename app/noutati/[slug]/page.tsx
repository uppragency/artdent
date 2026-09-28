import { notFound } from "next/navigation";
import { getPostBySlug, getTopPostsByViews } from "@/lib/blog";
import { PageHero } from "@/components/PageHero";
import { BlogSidebar } from "@/components/BlogSidebar";
import { BlogViewTracker } from "@/components/BlogViewTracker";
import { OpenBookingButton } from "@/components/OpenBookingButton";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return pageMetadata({
    title: `${post.title} — Noutăți ArtDent Slobozia`,
    description: post.meta_description,
    path: `/noutati/${slug}`,
    image: post.cover_image || undefined,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [post, topPosts] = await Promise.all([getPostBySlug(slug), getTopPostsByViews(5)]);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.meta_description,
    datePublished: post.published_at,
    dateModified: post.published_at,
    image: post.cover_image ? `${site.siteUrl}${post.cover_image}` : `${site.siteUrl}/images/og-image.jpg`,
    author: { "@type": "Organization", name: "ArtDent Slobozia" },
    publisher: { "@type": "Organization", name: "ArtDent Slobozia" },
    mainEntityOfPage: `${site.siteUrl}/noutati/${slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <BlogViewTracker slug={slug} />
      <PageHero
        eyebrow="Noutăți"
        title={post.title}
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Noutăți", href: "/noutati" }, { label: post.title }]}
        currentPath={`/noutati/${slug}`}
      />
      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div className="noutati-grid" style={{
          maxWidth: 1200, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)",
          display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(260px, 340px)", gap: "clamp(32px, 4vw, 56px)",
          alignItems: "start",
        }}>
          <article>
            <span className="font-mono-label" style={{ fontSize: 11.5, color: "var(--gold-label-2)" }}>{formatDate(post.published_at)}</span>
            {post.cover_image && (
              <div role="img" aria-label={post.title} style={{ marginTop: 16, aspectRatio: "16/7", borderRadius: 8, overflow: "hidden", backgroundImage: `url(${post.cover_image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
            )}
            <div
              className="blog-content"
              style={{ marginTop: 24, fontSize: 15.5, lineHeight: 1.8, color: "var(--muted-2)", display: "grid", gap: 18 }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <div style={{ marginTop: 40, padding: "clamp(20px, 3vw, 28px)", borderRadius: 10, background: "var(--teal-deep)", color: "oklch(0.97 0.012 90)", display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 15.5, fontWeight: 600, maxWidth: "36ch" }}>Ai întrebări legate de acest subiect?</span>
              <OpenBookingButton className="btn-gold" style={{ fontSize: 14.5, fontWeight: 600, padding: "14px 24px", borderRadius: 4, display: "inline-flex" }}>
                Programează-te
              </OpenBookingButton>
            </div>
          </article>
          <BlogSidebar topPosts={topPosts} />
        </div>
      </section>
    </>
  );
}
