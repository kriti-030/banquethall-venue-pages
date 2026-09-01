import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const entities = {
  "le-meridien-new-delhi": "ChkIobb79ZLk0eOCARoML2cvMTJxZ3gwMWQ5EAE",
  "goldfinch-hotel-delhi-ncr": "CgsIsNnXsLuvpPSOARAB",
  "fortune-select-global-gurgaon": "ChkI3a6Q0Jq8s8KCARoML2cvMXRqOGV5NjkiEAE",
  "park-inn-radisson-lajpat-nagar": "ChgIoryfruTjzuT3ARoLL2cvMXRjeWpkdzAQAQ",
};

const results = {};
for (const [slug, id] of Object.entries(entities)) {
  const url = `https://www.google.com/travel/hotels/entity/${id}`;
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0", "Accept-Language": "en-US" },
  });
  const html = await res.text();
  const reviewMatch = html.match(/([0-9][0-9,]+)\s*reviews/i);
  const ratingMatches = [...html.matchAll(/"([1-4]\.[0-9])"/g)].map((m) => m[1]);
  const uniqueRatings = [...new Set(ratingMatches)];
  results[slug] = {
    reviews: reviewMatch ? reviewMatch[1].replace(/,/g, "") : null,
    ratingCandidates: uniqueRatings.slice(0, 10),
  };
}
console.log(JSON.stringify(results, null, 2));
