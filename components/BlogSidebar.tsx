import { BookingFormFields } from "@/components/BookingFormFields";
import type { BlogPost } from "@/lib/blog";

export function BlogSidebar({ topPosts }: { topPosts: BlogPost[] }) {
  return (
    <aside style={{ display: "grid", gap: 28, alignContent: "start" }}>
      <div style={{ border: "1px solid var(--line)", borderRadius: 10, padding: "clamp(20px, 3vw, 28px)", background: "var(--card)" }}>
        <h2 className="font-display" style={{ margin: "0 0 6px", fontSize: 20, color: "var(--teal-deep)" }}>Ai o întrebare?</h2>
        <p style={{ margin: "0 0 18px", fontSize: 13.5, lineHeight: 1.55, color: "var(--muted)" }}>
          Lasă-ți datele și te contactăm noi.
        </p>
        <BookingFormFields />
      </div>

      {topPosts.length > 0 && (
        <div style={{ border: "1px solid var(--line)", borderRadius: 10, padding: "clamp(20px, 3vw, 28px)", background: "var(--card)" }}>
          <h2 className="font-display" style={{ margin: "0 0 16px", fontSize: 18, color: "var(--teal-deep)" }}>Cele mai citite</h2>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 14 }}>
            {topPosts.map((p, i) => (
              <li key={p.id}>
                <a href={`/blog/${p.slug}`} style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
                  <span className="font-mono-label" style={{ fontSize: 13, color: "var(--gold-label-2)", flex: "0 0 auto" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: 14, lineHeight: 1.45, color: "var(--ink)", fontWeight: 500 }}>{p.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </aside>
  );
}
