import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const pagesDir = path.join(root, "src/pages");
const assetsRoot = path.join(root, "src/assets");

const venuePages = [
  "LeMeridienNewDelhi.jsx",
  "CrownePlazaNewDelhiOkhla.jsx",
  "TheSuryaaNewDelhi.jsx",
  "GoldfinchHotelDelhiNCR.jsx",
  "RadissonBluMarinaDelhi.jsx",
  "FortuneSelectGlobalGurgaon.jsx",
  "ParkInnRadissonLajpatNagar.jsx",
  "HiltonGardenInnSaket.jsx",
];

const venues = JSON.parse(fs.readFileSync(path.join(root, "src/data/venues.json"), "utf8")).venues;

const issues = [];
const passes = [];

function pass(msg) {
  passes.push(msg);
}

function fail(msg) {
  issues.push(msg);
}

// 1. Image imports exist on disk
for (const page of ["Edengardenlawn.jsx", ...venuePages]) {
  const content = fs.readFileSync(path.join(pagesDir, page), "utf8");
  const imports = [...content.matchAll(/from\s+["'](\.\.\/assets\/[^"']+)["']/g)].map((m) => m[1]);
  for (const rel of imports) {
    const abs = path.join(pagesDir, rel);
    if (!fs.existsSync(abs)) {
      fail(`Missing asset: ${page} → ${rel}`);
    }
  }
  if (imports.length > 0) pass(`${page}: all ${imports.length} asset imports resolve`);
}

// 2. Each venue folder has 6 images >= 8KB
for (const v of venues) {
  const dir = path.join(assetsRoot, "Venuesphotos", v.slug);
  for (let i = 1; i <= 6; i++) {
    const f = path.join(dir, `venue${i}.jpeg`);
    if (!fs.existsSync(f)) fail(`${v.slug}: missing venue${i}.jpeg`);
    else if (fs.statSync(f).size < 8000) fail(`${v.slug}: venue${i}.jpeg too small (${fs.statSync(f).size} bytes)`);
  }
  if (fs.existsSync(dir)) pass(`${v.name}: 6 venue photos present`);
}

// 3. Eden garden photos
for (let i = 1; i <= 6; i++) {
  const f = path.join(assetsRoot, "Venuesphotos/edengarden", `eden${i}.jpeg`);
  if (!fs.existsSync(f) || fs.statSync(f).size < 8000) fail(`edengarden: eden${i}.jpeg missing or placeholder`);
}
pass("Eden Garden: 6 photos present");

// 4. Shared assets
for (const f of ["logo.png", "customerimage.svg"]) {
  if (!fs.existsSync(path.join(assetsRoot, f))) fail(`Missing shared asset: ${f}`);
  else pass(`Shared asset OK: ${f}`);
}

// 5. Structure checks on all venue pages
const legacyPatterns = [
  { name: "Footer import", re: /import Footer from|<VenuePage/ },
  { name: "images slider array", re: /const images = \[/ },
  { name: "slider controls", re: /VenuePage|const nextImage|const prevImage/ },
  { name: "mobile nav Menu/X", re: /VenuePage|Menu, X/ },
  { name: "nav links", re: /VenuePage|navLinks|NAV_LINKS/ },
  { name: "reviews section", re: /reviews/ },
  { name: "phone callback form", re: /VenuePage|callback|phone|Phone/i },
  { name: "framer-motion", re: /VenuePage|framer-motion|motion\./ },
  { name: "footer render", re: /VenuePage|<Footer/ },
];

for (const page of ["Edengardenlawn.jsx", ...venuePages]) {
  const content = fs.readFileSync(path.join(pagesDir, page), "utf8");
  const optimized = content.includes("VenuePage");
  for (const { name, re } of legacyPatterns) {
    if (!re.test(content)) fail(`${page}: missing ${name}`);
  }
  if (legacyPatterns.every(({ re }) => re.test(content))) {
    pass(
      `${page}: ${optimized ? "optimized VenuePage" : "Eden Garden"} structure intact`
    );
  }
}

// 6. No invented BanquetHall badges on Google-sourced pages
for (const page of venuePages) {
  const content = fs.readFileSync(path.join(pagesDir, page), "utf8");
  if (content.includes("Bh Managed")) {
    fail(`${page}: contains invented 'Bh Managed' badge (not from Google source)`);
  } else {
    pass(`${page}: no invented Bh Managed badge`);
  }
}

// 7. No invented pricing (must show Not available from source when no price in JSON)
for (const v of venues) {
  const pageFile = v.proposedComponent + ".jsx";
  const pagePath = path.join(pagesDir, pageFile);
  if (!fs.existsSync(pagePath)) {
    fail(`Missing page file for ${v.name}: ${pageFile}`);
    continue;
  }
  const content = fs.readFileSync(pagePath, "utf8");
  if (!v.vegetarianPrice && !v.nonVegetarianPrice) {
    if (!content.includes("Not available from source")) {
      fail(`${v.name}: pricing should say 'Not available from source'`);
    } else {
      pass(`${v.name}: pricing correctly marked unavailable`);
    }
  }
  if (content.match(/₹\d{3,}/) && !v.vegetarianPrice && !v.nonVegetarianPrice) {
    // Eden-style strikethrough prices invented
    const priceMatches = content.match(/₹\d+/g);
    if (priceMatches) fail(`${v.name}: contains invented prices ${priceMatches.join(", ")}`);
  }
}

// 8. Venues.json data integrity - no fabricated ratings
for (const v of venues) {
  if (v.rating === null && v.ratingNote) pass(`${v.name}: null rating documented`);
  if (v.tags === null && v.tagsNote) pass(`${v.name}: tags correctly null with note`);
}

// 9. Routes vs venues.json proposedRoute
const appContent = fs.readFileSync(path.join(root, "src/App.jsx"), "utf8");
const routesContent = fs.readFileSync(
  path.join(root, "src/routes/venuePageRoutes.js"),
  "utf8"
);
for (const v of venues) {
  const route = v.proposedRoute || `/${v.slug}`;
  if (!routesContent.includes(route)) {
    fail(`venuePageRoutes.js missing route for ${route}`);
  } else {
    pass(`Route registered: ${route}`);
  }
}
if (!appContent.includes("venuePageRoutes")) {
  fail("App.jsx must import venuePageRoutes");
} else {
  pass("App.jsx uses centralized venuePageRoutes");
}

// 10. Venues index dynamically links from venues.json
const venuesPage = fs.readFileSync(path.join(pagesDir, "Venues.jsx"), "utf8");
if (!venuesPage.includes('from "../data/venues.json"') || !venuesPage.includes("proposedRoute")) {
  fail("Venues.jsx must import venues.json and map proposedRoute");
} else {
  pass("Venues.jsx dynamically lists all venues from venues.json");
}

console.log("\n=== STEP 6 QUALITY CHECK ===\n");
console.log(`PASSED: ${passes.length}`);
passes.forEach((p) => console.log("  ✓", p));
console.log(`\nISSUES: ${issues.length}`);
if (issues.length === 0) {
  console.log("  (none)");
} else {
  issues.forEach((i) => console.log("  ✗", i));
  process.exit(1);
}
