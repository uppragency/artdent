import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, getExpectedAdminToken } from "@/lib/admin-auth";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function GET(req: NextRequest) {
  const expectedToken = getExpectedAdminToken();
  if (!expectedToken) {
    return NextResponse.json({ error: "server_not_configured" }, { status: 500 });
  }
  const cookie = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
  if (!cookie || cookie !== expectedToken) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json({ error: "missing_service_role_key" }, { status: 500 });
  }

  const supabaseAdmin = getSupabaseAdmin();
  const { data, error } = await supabaseAdmin
    .from("partial_leads")
    .select("id, name, phone, source_page, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ leads: data });
}

export async function DELETE(req: NextRequest) {
  const expectedToken = getExpectedAdminToken();
  if (!expectedToken) {
    return NextResponse.json({ error: "server_not_configured" }, { status: 500 });
  }
  const cookie = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
  if (!cookie || cookie !== expectedToken) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "invalid_request" }, { status: 400 });

  const supabaseAdmin = getSupabaseAdmin();
  const { error } = await supabaseAdmin.from("partial_leads").delete().eq("id", id);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
