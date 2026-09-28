import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  try {
    const { slug } = await req.json();
    if (!slug || typeof slug !== "string") {
      return NextResponse.json({ error: "invalid_slug" }, { status: 400 });
    }
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      // Fără cheia de service, incrementarea eșuează silențios — nu blocăm afișarea articolului.
      return NextResponse.json({ ok: false });
    }
    const supabaseAdmin = getSupabaseAdmin();
    await supabaseAdmin.rpc("increment_post_view", { post_slug: slug });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}
