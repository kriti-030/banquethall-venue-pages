import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const pagesDir = path.join(root, "src/pages");
const routesDir = path.join(root, "src/routes");
const data = JSON.parse(
  fs.readFileSync(path.join(root, "src/data/venues.json"), "utf8")
);
const venues = data.venues;

const normalizeReviews = (samples) => {
  if (!samples?.length) return [];
  return samples.map((r) => ({
    name: r.name,
    verified: r.verified,
    rating: r.rating,
    eventDate: r.eventDate ?? "Not available from source",
    pax: r.pax ?? "Not available from source",
    review: r.review,
  }));
};

const buildVenueConfig = (venue) => ({
  name: venue.name,
  cityLocality: venue.cityLocality,
  address: venue.address,
  phone: venue.phone,
  rating: venue.rating,
  reviewCount: venue.reviewCount,
  tags: venue.tags,
  starClassification: venue.starClassification,
  vegetarianPrice: venue.vegetarianPrice ?? null,
  nonVegetarianPrice: venue.nonVegetarianPrice ?? null,
  banquetPriceRangeMin: venue.banquetPriceRangeMin ?? null,
  banquetPriceRangeMax: venue.banquetPriceRangeMax ?? null,
  pricingNote: venue.pricingNote ?? null,
  shortDescription: venue.shortDescription,
  fullDescription: venue.fullDescription ?? null,
  showBhManaged: false,
  showDemandBanner: true,
  venuePolicies: venue.venuePolicies
    ? { categories: venue.venuePolicies.categories }
    : null,
  location: venue.location ?? null,
  heroImageFit: venue.heroImageFit ?? null,
});

const getImageSlots = (venue) => {
  const order = venue.imageOrder?.length ? venue.imageOrder : [1, 2, 3, 4, 5, 6];
  return [...new Set(order.filter((n) => Number.isInteger(n) && n >= 1 && n <= 6))];
};

const generatePage = (venue) => {
  const slug = venue.slug;
  const component = venue.proposedComponent;
  const reviews = normalizeReviews(venue.googleReviewsSample);
  const venueConfig = buildVenueConfig(venue);
  const imageSlots = getImageSlots(venue);

  const imageImports = imageSlots
    .map(
      (n) =>
        `import venue${n} from "../assets/Venuesphotos/${slug}/venue${n}.jpeg";`
    )
    .join("\n");

  const imageVars = imageSlots.map((n) => `  venue${n},`).join("\n");

  return `import VenuePage from "../Components/VenuePage";
${imageImports}

const reviews = ${JSON.stringify(reviews, null, 2)};

const images = [
${imageVars}
];

const venue = ${JSON.stringify(venueConfig, null, 2)};

const ${component} = () => (
  <VenuePage venue={venue} images={images} reviews={reviews} />
);

export default ${component};
`;
};

const generateRoutesFile = () => {
  const imports = venues
    .map(
      (v) =>
        `import ${v.proposedComponent} from "../pages/${v.proposedComponent}.jsx";`
    )
    .join("\n");

  const routeEntries = venues
    .map(
      (v) =>
        `  { path: "${v.proposedRoute}", Component: ${v.proposedComponent} },`
    )
    .join("\n");

  return `${imports}

export const venuePageRoutes = [
${routeEntries}
];
`;
};

fs.mkdirSync(pagesDir, { recursive: true });
fs.mkdirSync(routesDir, { recursive: true });

for (const venue of venues) {
  const filePath = path.join(pagesDir, `${venue.proposedComponent}.jsx`);
  fs.writeFileSync(filePath, generatePage(venue));
  console.log("Created", filePath);
}

fs.writeFileSync(
  path.join(routesDir, "venuePageRoutes.js"),
  generateRoutesFile()
);
console.log("Created src/routes/venuePageRoutes.js");
console.log("Done generating", venues.length, "optimized venue pages.");
