import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

function lastDigits(phone: string, n = 9) {
  const digits = phone.replace(/[^0-9]/g, "");
  return digits.slice(-n);
}

const STATUS_LABELS: Record<string, string> = {
  noua: "Cererea a fost primită și așteaptă confirmare telefonică.",
  sunata: "Am încercat să te contactăm telefonic pentru a stabili detaliile.",
  confirmata: "Programarea este confirmată.",
  anulata: "Programarea a fost anulată.",
};

export async function GET(req: NextRequest) {
  const phone = req.nextUrl.searchParams.get("phone") || "";
  const query = lastDigits(phone);

  if (query.length < 7) {
    return NextResponse.json({ error: "invalid_phone" }, { status: 400 });
  }

  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json({ error: "server_not_configured" }, { status: 500 });
  }

  const supabaseAdmin = getSupabaseAdmin();
  const { data, error } = await supabaseAdmin
    .from("contact_submissions")
    .select("phone, status, created_at")
    .not("phone", "is", null)
    .order("created_at", { ascending: false })
    .limit(500);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const match = (data || []).find((s) => s.phone && lastDigits(s.phone) === query);

  if (!match) {
    return NextResponse.json({ found: false });
  }

  return NextResponse.json({
    found: true,
    status: match.status,
    statusLabel: STATUS_LABELS[match.status] || "Cererea ta este în procesare.",
    createdAt: match.created_at,
  });
}
