import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json({ reviews: null, reason: "not_configured" });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=reviews,rating,user_ratings_total&language=ro&key=${apiKey}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();

    if (data.status !== "OK" || !data.result?.reviews) {
      return NextResponse.json({ reviews: null, reason: data.status || "no_reviews" });
    }

    const reviews = data.result.reviews
      .slice(0, 6)
      .map((r: { text: string; author_name: string; relative_time_description: string; rating: number }) => ({
        text: r.text,
        name: r.author_name,
        initial: r.author_name?.[0]?.toUpperCase() || "N",
        meta: `Google · ${r.relative_time_description}`,
        rating: r.rating,
      }));

    return NextResponse.json({
      reviews,
      rating: data.result.rating,
      totalReviews: data.result.user_ratings_total,
    });
  } catch {
    return NextResponse.json({ reviews: null, reason: "fetch_error" });
  }
}
