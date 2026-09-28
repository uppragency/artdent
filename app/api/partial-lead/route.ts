import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

// Salvează un lead parțial (nume + telefon completate, dar formularul netrimis),
// ca recepția să poată suna înapoi pacienții care au ezitat să apese "Trimite".
export async function POST(req: NextRequest) {
  try {
    const { name, phone, sourcePage } = await req.json();
    if (!name || !phone || String(phone).replace(/[^0-9]/g, "").length < 7) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json({ ok: false });
    }
    const supabaseAdmin = getSupabaseAdmin();
    await supabaseAdmin.from("partial_leads").upsert(
      { name: String(name).slice(0, 200), phone: String(phone).slice(0, 40), source_page: sourcePage || null },
      { onConflict: "phone" }
    );
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}

// Șterge lead-ul parțial odată ce persoana a trimis efectiv formularul complet —
// recepția nu mai trebuie să sune pe cineva care a rezervat deja.
export async function DELETE(req: NextRequest) {
  try {
    const { phone } = await req.json();
    if (!phone || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json({ ok: false });
    }
    const supabaseAdmin = getSupabaseAdmin();
    await supabaseAdmin.from("partial_leads").delete().eq("phone", String(phone).slice(0, 40));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}
