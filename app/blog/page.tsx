import { getPublishedPosts, getTopPostsByViews } from "@/lib/blog";
import { PageHero } from "@/components/PageHero";
import { BlogSidebar } from "@/components/BlogSidebar";
import { pageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata = pageMetadata({
  title: "Blog — ArtDent Slobozia",
  description: "Articole despre sănătatea orală, tratamente stomatologice și îngrijire dentară, scrise de echipa ArtDent Slobozia.",
  path: "/blog",
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPage() {
  const [posts, topPosts] = await Promise.all([getPublishedPosts(), getTopPostsByViews(5)]);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Articole despre sănătatea ta orală"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Blog" }]}
        currentPath="/blog"
      />
      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)",
          display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(260px, 340px)", gap: "clamp(32px, 4vw, 56px)",
          alignItems: "start",
        }}>
          <div style={{ display: "grid", gap: 24 }}>
            {posts.length === 0 && (
              <p style={{ fontSize: 15, color: "var(--muted)" }}>
                Primele articole vor apărea aici în curând.
              </p>
            )}
            {posts.map((p) => (
              <a key={p.id} href={`/blog/${p.slug}`} style={{
                display: "grid", gap: 10, padding: "clamp(20px, 3vw, 28px)", borderRadius: 10,
                border: "1px solid var(--line)", background: "var(--card)", color: "inherit",
              }}>
                {p.cover_image && (
                  <div style={{ aspectRatio: "16/7", borderRadius: 6, overflow: "hidden", backgroundImage: `url(${p.cover_image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                )}
                <span className="font-mono-label" style={{ fontSize: 11.5, color: "var(--gold-label-2)" }}>{formatDate(p.published_at)}</span>
                <h2 className="font-display" style={{ margin: 0, fontSize: "clamp(21px, 2.4vw, 27px)", color: "var(--teal-deep)" }}>{p.title}</h2>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: "var(--muted-2)" }}>{p.excerpt}</p>
                <span style={{ fontSize: 13.5, fontWeight: 600, color: "var(--teal-600)" }}>Citește articolul →</span>
              </a>
            ))}
          </div>
          <BlogSidebar topPosts={topPosts} />
        </div>
      </section>
    </>
  );
}
