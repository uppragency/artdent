// Preia ratingul agregat real de pe Google (folosit pentru schema AggregateRating).
// Returnează null dacă lipsesc cheile sau cererea eșuează — nu inventăm niciodată o valoare.
export async function getGoogleAggregateRating(): Promise<{ ratingValue: number; reviewCount: number } | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return null;

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=rating,user_ratings_total&language=ro&key=${apiKey}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const data = await res.json();
    if (data?.status !== "OK") return null;
    const ratingValue = data?.result?.rating;
    const reviewCount = data?.result?.user_ratings_total;
    if (typeof ratingValue !== "number" || typeof reviewCount !== "number" || reviewCount === 0) return null;
    return { ratingValue, reviewCount };
  } catch {
    return null;
  }
}
