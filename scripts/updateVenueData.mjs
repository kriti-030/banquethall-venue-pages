import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dataPath = path.join(root, "src/data/venues.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const updates = {
  "le-meridien-new-delhi": {
    rating: null,
    ratingNote: "Aggregate Google star score not returned in Google Hotels fetch; review count from Google Hotels listing",
    ratingSource: null,
    reviewCount: 31377,
    reviewCountSource: "Google Hotels",
    vegetarianPrice: 2700,
    nonVegetarianPrice: 3500,
    pricingNote: "Starting banquet per-plate prices excluding taxes (banquethalls.in)",
    banquetPricingSource: "banquethalls.in",
    capacityMin: 100,
    capacityMax: 750,
    capacitySource: "banquethalls.in",
  },
  "crowne-plaza-new-delhi-okhla": {
    rating: 4.5,
    ratingSource: "Google Hotels",
    reviewCount: 23348,
    reviewCountSource: "Google Hotels",
    vegetarianPrice: 3100,
    nonVegetarianPrice: 3399,
    pricingNote: "Starting banquet per-plate prices excluding taxes (venuebookingz.com)",
    banquetPricingSource: "venuebookingz.com",
    capacityMin: 40,
    capacityMax: 500,
    capacitySource: "venuebookingz.com",
  },
  "the-suryaa-new-delhi": {
    rating: 4.3,
    ratingSource: "Google Hotels",
    reviewCount: 20223,
    reviewCountSource: "Google Hotels",
    vegetarianPrice: 1800,
    nonVegetarianPrice: 2250,
    pricingNote: "Starting banquet per-plate prices excluding taxes (venuebookingz.com)",
    banquetPricingSource: "venuebookingz.com",
    capacityMin: 75,
    capacityMax: 400,
    capacitySource: "venuebookingz.com",
  },
  "goldfinch-hotel-delhi-ncr": {
    rating: null,
    ratingNote: "Aggregate Google star score not returned in Google Hotels fetch; review count from Google Hotels listing",
    ratingSource: null,
    reviewCount: 3607,
    reviewCountSource: "Google Hotels",
    vegetarianPrice: 1800,
    nonVegetarianPrice: 2000,
    pricingNote: "Starting banquet per-plate prices excluding taxes (weddingz.in)",
    banquetPricingSource: "weddingz.in",
    capacityMin: 50,
    capacityMax: 1000,
    capacitySource: "weddingz.in",
  },
  "radisson-blu-marina-delhi": {
    rating: 4.6,
    ratingSource: "Google Hotels",
    reviewCount: 20206,
    reviewCountSource: "Google Hotels",
    vegetarianPrice: 2200,
    nonVegetarianPrice: 2400,
    pricingNote: "Starting banquet per-plate prices excluding taxes (venuebookingz.com)",
    banquetPricingSource: "venuebookingz.com",
    capacityMin: 60,
    capacityMax: 350,
    capacitySource: "venuebookingz.com",
  },
  "fortune-select-global-gurgaon": {
    rating: 4.3,
    ratingNote: "Google Hotels aggregate rating/review count not returned in fetch; hotel rating from TripAdvisor",
    ratingSource: "TripAdvisor",
    reviewCount: 750,
    reviewCountNote: "TripAdvisor hotel reviews (Google Hotels count not returned in fetch)",
    reviewCountSource: "TripAdvisor",
    vegetarianPrice: 1800,
    nonVegetarianPrice: 1800,
    pricingNote: "Starting banquet per-plate prices excluding taxes (weddingz.in)",
    banquetPricingSource: "weddingz.in",
    capacityMin: 30,
    capacityMax: 500,
    capacitySource: "weddingwire.in",
  },
  "park-inn-radisson-lajpat-nagar": {
    rating: 4.2,
    ratingSource: "Google Hotels",
    reviewCount: 3577,
    reviewCountSource: "Google Hotels",
    vegetarianPrice: 2100,
    nonVegetarianPrice: 2300,
    pricingNote: "Starting banquet per-plate prices excluding taxes (weddingbanquets.in)",
    banquetPricingSource: "weddingbanquets.in",
    capacityMin: 70,
    capacityMax: 400,
    capacitySource: "weddingbanquets.in",
    googleReviewsSample: [
      {
        name: "Nirav Gangar",
        rating: null,
        review:
          "Stayed at the hotel for 2 nights and enjoyed the stay. Had booked the deluxe room category but got upgraded to a higher category.",
        eventDate: null,
        pax: null,
        verified: true,
        source: "weddingbanquets.in",
      },
      {
        name: "Nina P.",
        rating: null,
        review:
          "We stayed twice in this hotel, once after our arrival in Delhi and the night before our flight back home.",
        eventDate: null,
        pax: null,
        verified: true,
        source: "weddingbanquets.in",
      },
      {
        name: "Simabrata Dey",
        rating: null,
        review:
          "Wow! Wonderful! I really liked this place. So beautiful. A good peaceful and awesome hospitality services.",
        eventDate: null,
        pax: null,
        verified: true,
        source: "weddingbanquets.in",
      },
      {
        name: "Brajesh Kumar",
        rating: null,
        review:
          "Received with a very warm welcome, Room was ready, we were upgraded also. Clean rooms nice breakfast and all essentials available in bathroom.",
        eventDate: null,
        pax: null,
        verified: true,
        source: "weddingbanquets.in",
      },
    ],
  },
  "hilton-garden-inn-saket": {
    rating: 4.3,
    ratingSource: "Google Hotels",
    reviewCount: 4831,
    reviewCountSource: "Google Hotels",
    vegetarianPrice: 1499,
    nonVegetarianPrice: 1499,
    pricingNote: "Starting banquet per-plate prices excluding taxes (venuebookingz.com)",
    banquetPricingSource: "venuebookingz.com",
    capacityMin: 50,
    capacityMax: 150,
    capacitySource: "venuebookingz.com",
  },
};

for (const venue of data.venues) {
  const patch = updates[venue.slug];
  if (!patch) continue;
  Object.assign(venue, patch);
}

data._meta.notes =
  "Banquet per-plate pricing sourced from wedding venue directories (Aug 2026). Google Hotels preferred for ratings/review counts where available.";

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log("Updated venues.json with banquet pricing and review metadata");
