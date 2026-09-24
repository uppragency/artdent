import { NextResponse } from "next/server";

type GoogleReview = {
  text?: string;
  author_name?: string;
  relative_time_description?: string;
  rating?: number;
};

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json({ reviews: null, reason: "not_configured" });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=reviews,rating,user_ratings_total&language=ro&key=${apiKey}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
      return NextResponse.json({ reviews: null, reason: `http_${res.status}` });
    }

    const data = await res.json();

    if (data?.status !== "OK" || !Array.isArray(data?.result?.reviews)) {
      return NextResponse.json({ reviews: null, reason: data?.status || "no_reviews" });
    }

    const reviews = (data.result.reviews as GoogleReview[])
      .filter((r) => typeof r?.text === "string" && typeof r?.author_name === "string")
      .slice(0, 6)
      .map((r) => ({
        text: r.text as string,
        name: r.author_name as string,
        initial: (r.author_name as string).charAt(0).toUpperCase() || "N",
        meta: `Google${r.relative_time_description ? " · " + r.relative_time_description : ""}`,
      }));

    if (reviews.length === 0) {
      return NextResponse.json({ reviews: null, reason: "empty_after_filter" });
    }

    return NextResponse.json({ reviews });
  } catch (err) {
    return NextResponse.json({ reviews: null, reason: "fetch_error", detail: err instanceof Error ? err.message : String(err) });
  }
}
