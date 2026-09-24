"use client";

import { useEffect, useMemo, useState } from "react";

type Submission = {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  message: string | null;
  source_page: string | null;
  status: string;
  created_at: string;
};

const STATUS_OPTIONS: { value: string; label: string; bg: string; text: string }[] = [
  { value: "noua", label: "Nouă", bg: "oklch(0.93 0.03 230)", text: "oklch(0.4 0.1 230)" },
  { value: "sunata", label: "Sunată", bg: "oklch(0.94 0.05 88)", text: "oklch(0.45 0.08 88)" },
  { value: "confirmata", label: "Confirmată", bg: "oklch(0.93 0.06 155)", text: "oklch(0.4 0.1 155)" },
  { value: "anulata", label: "Anulată", bg: "oklch(0.93 0.04 27)", text: "oklch(0.45 0.15 27)" },
];

function statusMeta(value: string) {
  return STATUS_OPTIONS.find((s) => s.value === value) || STATUS_OPTIONS[0];
}

export function AdminPanel() {
  const [status, setStatus] = useState<"checking" | "locked" | "unlocked" | "server_error">("checking");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [serverError, setServerError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [search, setSearch] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  async function loadSubmissions() {
    const res = await fetch("/api/admin/submissions");
    if (res.ok) {
      const data = await res.json();
      setSubmissions(data.submissions || []);
      setStatus("unlocked");
    } else if (res.status === 401) {
      setStatus("locked");
    } else {
      const data = await res.json().catch(() => ({}));
      setServerError(data.error || `Eroare server (${res.status})`);
      setStatus("server_error");
    }
  }

  useEffect(() => {
    loadSubmissions();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setSubmitting(false);
    if (res.ok) {
      setPassword("");
      loadSubmissions();
    } else {
      setError("Parolă incorectă.");
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setStatus("locked");
    setSubmissions([]);
  }

  async function updateStatus(id: string, newStatus: string) {
    setSubmissions((prev) => prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s)));
    await fetch(`/api/admin/submissions/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
  }

  const stats = useMemo(() => {
    const now = new Date();
    const todayStr = now.toDateString();
    let today = 0, thisMonth = 0;
    for (const s of submissions) {
      const d = new Date(s.created_at);
      if (d.toDateString() === todayStr) today++;
      if (d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()) thisMonth++;
    }
    return { today, thisMonth };
  }, [submissions]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return submissions.filter((s) => {
      if (q && !(s.name?.toLowerCase().includes(q) || s.phone?.toLowerCase().includes(q))) return false;
      const d = new Date(s.created_at);
      if (dateFrom && d < new Date(dateFrom)) return false;
      if (dateTo && d > new Date(dateTo + "T23:59:59")) return false;
      return true;
    });
  }, [submissions, search, dateFrom, dateTo]);

  if (status === "checking") {
    return <p style={{ padding: 40, fontSize: 14, color: "var(--muted)" }}>Se încarcă…</p>;
  }

  if (status === "server_error") {
    return (
      <div style={{ maxWidth: 520, margin: "60px auto", padding: 24 }}>
        <h1 className="font-display" style={{ margin: 0, fontSize: 22, color: "var(--teal-deep)" }}>Eroare de configurare</h1>
        <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.6, color: "var(--muted)" }}>
          Parola e corectă, dar citirea programărilor din Supabase a eșuat. Cod eroare: <code>{serverError}</code>
        </p>
        <p style={{ marginTop: 12, fontSize: 13.5, lineHeight: 1.6, color: "var(--muted)" }}>
          Verifică în Vercel că <code>SUPABASE_SERVICE_ROLE_KEY</code> conține exact cheia „service_role" din Supabase (Project Settings → API), fără spații sau linii goale adăugate la copiere.
        </p>
      </div>
    );
  }

  if (status === "locked") {
    return (
      <div style={{ minHeight: "70vh", display: "grid", placeItems: "center", padding: 24 }}>
        <form onSubmit={handleSubmit} style={{
          display: "grid", gap: 14, width: "100%", maxWidth: 360,
          border: "1px solid var(--line)", borderRadius: 10, padding: 32, background: "var(--card)",
        }}>
          <h1 className="font-display" style={{ margin: 0, fontSize: 24, color: "var(--teal-deep)" }}>Acces programări</h1>
          <p style={{ margin: 0, fontSize: 13.5, color: "var(--muted)" }}>Introdu parola pentru a vedea programările primite.</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Parolă"
            autoFocus
            style={{
              fontFamily: "inherit", fontSize: 16, padding: "14px 16px", borderRadius: 4,
              border: "1px solid var(--line)", minHeight: 50,
            }}
          />
          {error && <span style={{ fontSize: 13, color: "oklch(0.55 0.19 27)" }}>{error}</span>}
          <button type="submit" disabled={submitting} className="btn-teal" style={{
            fontFamily: "inherit", fontSize: 15.5, fontWeight: 600, padding: "14px 20px",
            border: 0, borderRadius: 4, cursor: "pointer", minHeight: 50,
          }}>
            {submitting ? "Se verifică…" : "Intră"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px clamp(16px, 3vw, 40px)" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <h1 className="font-display" style={{ margin: 0, fontSize: 28, color: "var(--teal-deep)" }}>
          Programări primite
        </h1>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={loadSubmissions} className="btn-outline-dark" style={{ fontFamily: "inherit", fontSize: 13.5, fontWeight: 600, padding: "10px 16px", borderRadius: 4, background: "none", cursor: "pointer" }}>
            Reîmprospătează
          </button>
          <button onClick={handleLogout} className="btn-outline-dark" style={{ fontFamily: "inherit", fontSize: 13.5, fontWeight: 600, padding: "10px 16px", borderRadius: 4, background: "none", cursor: "pointer" }}>
            Ieși
          </button>
        </div>
      </div>

      {/* Statistici */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginBottom: 24 }}>
        <div style={{ border: "1px solid var(--line)", borderRadius: 8, padding: "16px 18px", background: "var(--card)" }}>
          <div style={{ fontSize: 26, fontWeight: 700, color: "var(--teal-deep)" }}>{submissions.length}</div>
          <div style={{ fontSize: 13, color: "var(--muted)" }}>Total programări</div>
        </div>
        <div style={{ border: "1px solid var(--line)", borderRadius: 8, padding: "16px 18px", background: "var(--card)" }}>
          <div style={{ fontSize: 26, fontWeight: 700, color: "var(--teal-deep)" }}>{stats.thisMonth}</div>
          <div style={{ fontSize: 13, color: "var(--muted)" }}>Luna aceasta</div>
        </div>
        <div style={{ border: "1px solid var(--line)", borderRadius: 8, padding: "16px 18px", background: "var(--card)" }}>
          <div style={{ fontSize: 26, fontWeight: 700, color: "var(--teal-deep)" }}>{stats.today}</div>
          <div style={{ fontSize: 13, color: "var(--muted)" }}>Astăzi</div>
        </div>
      </div>

      {/* Filtre */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 18 }}>
        <input
          type="text" value={search} onChange={(e) => setSearch(e.target.value)}
          placeholder="Caută după nume sau telefon…"
          style={{ fontFamily: "inherit", fontSize: 14, padding: "10px 14px", borderRadius: 4, border: "1px solid var(--line)", minWidth: 220, flex: "1 1 220px" }}
        />
        <input
          type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)}
          style={{ fontFamily: "inherit", fontSize: 14, padding: "10px 14px", borderRadius: 4, border: "1px solid var(--line)" }}
        />
        <input
          type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)}
          style={{ fontFamily: "inherit", fontSize: 14, padding: "10px 14px", borderRadius: 4, border: "1px solid var(--line)" }}
        />
        {(search || dateFrom || dateTo) && (
          <button
            onClick={() => { setSearch(""); setDateFrom(""); setDateTo(""); }}
            className="btn-outline-dark"
            style={{ fontFamily: "inherit", fontSize: 13.5, fontWeight: 600, padding: "10px 16px", borderRadius: 4, background: "none", cursor: "pointer" }}
          >
            Șterge filtrele
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <p style={{ fontSize: 14.5, color: "var(--muted)" }}>Nicio programare găsită.</p>
      ) : (
        <div style={{ border: "1px solid var(--line)", borderRadius: 8, overflow: "auto", background: "var(--card)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: "var(--cream-section)" }}>
                <th style={{ textAlign: "left", padding: "12px 16px" }}>Data</th>
                <th style={{ textAlign: "left", padding: "12px 16px" }}>Nume</th>
                <th style={{ textAlign: "left", padding: "12px 16px" }}>Telefon</th>
                <th style={{ textAlign: "left", padding: "12px 16px" }}>Email</th>
                <th style={{ textAlign: "left", padding: "12px 16px" }}>Pagină</th>
                <th style={{ textAlign: "left", padding: "12px 16px" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => {
                const meta = statusMeta(s.status);
                return (
                  <tr key={s.id} style={{ borderTop: "1px solid var(--line)" }}>
                    <td style={{ padding: "12px 16px", whiteSpace: "nowrap", color: "var(--muted)" }}>
                      {new Date(s.created_at).toLocaleString("ro-RO")}
                    </td>
                    <td style={{ padding: "12px 16px", fontWeight: 600 }}>{s.name}</td>
                    <td style={{ padding: "12px 16px" }}>
                      {s.phone ? <a href={`tel:${s.phone}`} style={{ color: "var(--teal-600)" }}>{s.phone}</a> : "—"}
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      {s.email ? <a href={`mailto:${s.email}`} style={{ color: "var(--teal-600)" }}>{s.email}</a> : "—"}
                    </td>
                    <td style={{ padding: "12px 16px", color: "var(--muted)" }}>{s.source_page || "—"}</td>
                    <td style={{ padding: "12px 16px" }}>
                      <select
                        value={s.status}
                        onChange={(e) => updateStatus(s.id, e.target.value)}
                        style={{
                          fontFamily: "inherit", fontSize: 13, fontWeight: 600, padding: "7px 10px", borderRadius: 999,
                          border: "none", background: meta.bg, color: meta.text, cursor: "pointer",
                        }}
                      >
                        {STATUS_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
