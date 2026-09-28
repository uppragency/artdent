import { getPublishedPosts, getTopPostsByViews } from "@/lib/blog";
import { guides, extraGuides } from "@/lib/data";
import { PageHero } from "@/components/PageHero";
import { BlogSidebar } from "@/components/BlogSidebar";
import { pageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata = pageMetadata({
  title: "Noutăți — ArtDent Slobozia",
  description: "Articole și ghiduri despre sănătatea orală, tratamente stomatologice și îngrijire dentară, de la echipa ArtDent Slobozia.",
  path: "/noutati",
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" });
}

export default async function NoutatiPage() {
  const [posts, topPosts] = await Promise.all([getPublishedPosts(), getTopPostsByViews(5)]);

  const guideItems = [
    ...guides.map((g) => ({ slug: g.slug, title: g.title, excerpt: g.excerpt, href: `/ghiduri/${g.slug}` })),
    ...extraGuides.map((g) => ({ slug: g.slug, title: g.title, excerpt: g.excerpt, href: `/${g.slug}` })),
  ];

  return (
    <>
      <PageHero
        eyebrow="Noutăți"
        title="Noutăți și ghiduri"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Noutăți" }]}
        currentPath="/noutati"
      />
      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div className="noutati-grid" style={{
          maxWidth: 1200, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)",
          display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(260px, 340px)", gap: "clamp(32px, 4vw, 56px)",
          alignItems: "start",
        }}>
          <div style={{ display: "grid", gap: 40 }}>
            {posts.length > 0 && (
              <div style={{ display: "grid", gap: 20 }}>
                <h2 className="font-display" style={{ margin: 0, fontSize: 20, color: "var(--teal-deep)" }}>Articole</h2>
                <div style={{ display: "grid", gap: 20 }}>
                  {posts.map((p) => (
                    <a key={p.id} href={`/noutati/${p.slug}`} style={{
                      display: "grid", gap: 10, padding: "clamp(20px, 3vw, 28px)", borderRadius: 10,
                      border: "1px solid var(--line)", background: "var(--card)", color: "inherit",
                    }}>
                      {p.cover_image && (
                        <div role="img" aria-label={p.title} style={{ aspectRatio: "16/7", borderRadius: 6, overflow: "hidden", backgroundImage: `url(${p.cover_image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                      )}
                      <span className="font-mono-label" style={{ fontSize: 11.5, color: "var(--gold-label-2)" }}>{formatDate(p.published_at)}</span>
                      <h3 className="font-display" style={{ margin: 0, fontSize: "clamp(21px, 2.4vw, 27px)", color: "var(--teal-deep)" }}>{p.title}</h3>
                      <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: "var(--muted-2)" }}>{p.excerpt}</p>
                      <span style={{ fontSize: 13.5, fontWeight: 600, color: "var(--teal-600)" }}>Citește articolul →</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: "grid", gap: 20 }}>
              <h2 className="font-display" style={{ margin: 0, fontSize: 20, color: "var(--teal-deep)" }}>Ghiduri</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
                {guideItems.map((g) => (
                  <a key={g.slug} href={g.href} className="service-card" style={{ display: "grid", gap: 10, padding: 22, borderRadius: 8, height: "100%" }}>
                    <h3 style={{ margin: 0, fontSize: 16.5, fontWeight: 600, color: "var(--teal-deep)" }}>{g.title}</h3>
                    <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: "var(--muted)" }}>{g.excerpt}</p>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--teal-600)" }}>Citește ghidul →</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <BlogSidebar topPosts={topPosts} />
        </div>
      </section>
    </>
  );
}
