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
    .from("contact_submissions")
    .select("id, name, phone, email, message, source_page, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("admin/submissions supabase error:", error.message, error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ submissions: data });
}
