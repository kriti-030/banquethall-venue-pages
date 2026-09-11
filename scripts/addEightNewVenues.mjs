import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { NEW_VENUES } from "./newVenuesData.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const assetsRoot = path.join(root, "src/assets/Venuesphotos");
const pagesDir = path.join(root, "src/pages");
const finalRoot = path.join(root, "FINAL_JSX_VENUES");
const venuesJsonPath = path.join(root, "src/data/venues.json");
const routesPath = path.join(root, "src/routes/venuePageRoutes.js");

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

function normalizeGoogleUrl(raw) {
  let url = raw.replace(/\\u003d/g, "=").replace(/\\u0026/g, "&").trim();
  if (url.includes(" 1x,")) url = url.split(" 1x,")[1].replace(/\s*2x\s*$/, "");
  url = url.split(/\s+/)[0];
  if (!url.includes("googleusercontent.com")) return null;
  if (!/gps-cs-s\/|gps-proxy\//.test(url)) return null;
  if (/default-user|avatar|profile|icon|logo|badge|favicon/i.test(url)) return null;
  return `${url.split("=")[0]}=w1200-h900-k-no`;
}

function extractGoogleImages(html) {
  const raw = [...html.matchAll(/https:\/\/lh3\.googleusercontent\.com[^"'\\]+/g)].map((m) => m[0]);
  const byId = new Map();
  for (const item of raw) {
    const normalized = normalizeGoogleUrl(item);
    if (!normalized) continue;
    const id = normalized.split("=")[0];
    if (!byId.has(id)) byId.set(id, normalized);
  }
  return [...byId.values()];
}

function extractOfficialImages(html) {
  const found = new Set();
  const pattern = /https?:\/\/[^"'\\>\s]+\.(?:jpg|jpeg|webp|png|avif)(?:\?[^"'\\>\s]*)?/gi;
  for (const match of html.matchAll(pattern)) {
    let url = match[0].replace(/&amp;/g, "&");
    if (url.length < 40) continue;
    if (
      /icon|logo|favicon|sprite|avatar|badge|watermark|-p-500|-p-800|150x|100x|realweddings_banner|write_a_review|pattern|dotted|favicon|emblem|brand.?guide|WH-LGN/i.test(
        url
      )
    ) {
      continue;
    }
    if (url.includes("weddingwire.in") && !/\/(1280|1920)\//.test(url)) continue;
    if (url.includes("wedmegood") && /\/resized\/(80X|450X)\//.test(url)) {
      url = url.replace(/\/resized\/(80X|450X)\//, "/resized/1200X/");
    }
    if (url.includes("wedmegood") && !/\/uploads\/(member|project)\//i.test(url)) continue;
    if (url.includes("weddingz.in") || url.includes("oyoroomscdn.com")) continue;
    found.add(url);
  }
  return [...found];
}

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": UA, Accept: "text/html", "Accept-Language": "en-US,en;q=0.9" },
    redirect: "follow",
  });
  return { status: res.status, html: await res.text() };
}

async function downloadBuffer(url) {
  const referer = url.includes("weddingwire")
    ? "https://www.weddingwire.in/"
    : url.includes("wedmegood")
      ? "https://www.wedmegood.com/"
      : url.includes("website-files.com")
        ? "https://www.arayabagh.com/"
        : "https://www.google.com/";
  const res = await fetch(url, {
    headers: { "User-Agent": UA, Accept: "image/avif,image/webp,image/*,*/*", Referer: referer },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 20000) throw new Error(`too small ${buf.length}`);
  return buf;
}

async function toVenueJpeg(buf) {
  const image = sharp(buf, { failOn: "none" });
  const meta = await image.metadata();
  if ((meta.width || 0) < 500 || (meta.height || 0) < 350) {
    throw new Error(`too small ${meta.width}x${meta.height}`);
  }
  const ratio = (meta.width || 1) / (meta.height || 1);
  if (ratio > 2.6 || ratio < 0.45) throw new Error(`bad aspect ${meta.width}x${meta.height}`);
  const stats = await image.clone().stats();
  const channels = stats.channels.slice(0, 3);
  const mean = channels.reduce((sum, c) => sum + c.mean, 0) / channels.length;
  if (mean > 245 || mean < 12) throw new Error(`bad brightness ${mean.toFixed(1)}`);
  const jpeg = await image
    .resize({ width: 1600, height: 1200, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 82 })
    .toBuffer();
  if (jpeg.length < 40000) throw new Error(`output too small ${jpeg.length}`);
  return jpeg;
}

async function collectUrls(venue) {
  const urls = [...(venue.extraImageUrls || [])];
  for (const page of venue.officialPages || []) {
    try {
      const o = await fetchHtml(page);
      urls.push(...extractOfficialImages(o.html));
    } catch (e) {
      console.warn("Official fetch fail", page, e.message);
    }
  }
  return [...new Set(urls)];
}

function toVenueJsonEntry(venue) {
  return {
    id: venue.id,
    slug: venue.slug,
    googleShareLink: null,
    googleKgmid: null,
    name: venue.name,
    address: venue.address,
    cityLocality: venue.cityLocality,
    phone: venue.phone,
    rating: venue.rating,
    ratingNote: null,
    reviewCount: venue.reviewCount,
    starClassification: venue.starClassification,
    tags: venue.tags,
    tagsNote: null,
    vegetarianPrice: venue.vegetarianPrice,
    nonVegetarianPrice: venue.nonVegetarianPrice,
    pricingNote: venue.pricingNote,
    shortDescription: venue.shortDescription,
    fullDescription: venue.fullDescription,
    fullDescriptionNote: null,
    amenities: [],
    images: [1, 2, 3, 4, 5, 6].map((n) => `src/assets/Venuesphotos/${venue.slug}/venue${n}.jpeg`),
    googleReviewsSample: venue.googleReviewsSample,
    location: venue.location,
    venuePolicies: venue.venuePolicies,
    proposedComponent: venue.proposedComponent,
    proposedRoute: venue.proposedRoute,
  };
}

function generateSrcPage(venue) {
  const imports = [1, 2, 3, 4, 5, 6]
    .map((n) => `import venue${n} from "../assets/Venuesphotos/${venue.slug}/venue${n}.jpeg";`)
    .join("\n");
  const reviews = venue.googleReviewsSample.map((r) => ({
    name: r.name,
    verified: r.verified,
    rating: r.rating,
    eventDate: r.eventDate,
    pax: r.pax,
    review: r.review,
  }));
  const venueConfig = {
    name: venue.name,
    cityLocality: venue.cityLocality,
    address: venue.address,
    phone: venue.phone,
    rating: venue.rating,
    reviewCount: venue.reviewCount,
    tags: venue.tags,
    starClassification: venue.starClassification,
    vegetarianPrice: venue.vegetarianPrice,
    nonVegetarianPrice: venue.nonVegetarianPrice,
    banquetPriceRangeMin: null,
    banquetPriceRangeMax: null,
    pricingNote: venue.pricingNote,
    shortDescription: venue.shortDescription,
    fullDescription: venue.fullDescription,
    showBhManaged: false,
    showDemandBanner: true,
    venuePolicies: venue.venuePolicies,
    location: venue.location,
    heroImageFit: null,
  };
  return `import VenuePage from "../Components/VenuePage";
${imports}

const reviews = ${JSON.stringify(reviews, null, 2)};

const images = [
  venue1,
  venue2,
  venue3,
  venue4,
  venue5,
  venue6,
];

const venue = ${JSON.stringify(venueConfig, null, 2)};

const ${venue.proposedComponent} = () => (
  <VenuePage venue={venue} images={images} reviews={reviews} />
);

export default ${venue.proposedComponent};
`;
}

function generateFinalJsx(venue, template) {
  const reviewsStart = template.indexOf("const reviews = ");
  const imagesStart = template.indexOf("const images = ");
  const venueStart = template.indexOf("const venue = ");
  const reviews = JSON.stringify(
    venue.googleReviewsSample.map((r) => ({
      name: r.name,
      verified: r.verified,
      rating: r.rating,
      eventDate: r.eventDate,
      pax: r.pax,
      review: r.review,
    })),
    null,
    2
  );
  const venueConfig = JSON.stringify(
    {
      name: venue.name,
      cityLocality: venue.cityLocality,
      address: venue.address,
      phone: venue.phone,
      rating: venue.rating,
      reviewCount: venue.reviewCount,
      tags: venue.tags,
      starClassification: venue.starClassification,
      vegetarianPrice: venue.vegetarianPrice,
      nonVegetarianPrice: venue.nonVegetarianPrice,
      banquetPriceRangeMin: null,
      banquetPriceRangeMax: null,
      pricingNote: venue.pricingNote,
      shortDescription: venue.shortDescription,
      fullDescription: venue.fullDescription,
      showBhManaged: false,
      showDemandBanner: true,
      venuePolicies: venue.venuePolicies,
      location: venue.location,
      heroImageFit: null,
    },
    null,
    2
  );

  const helpersStart = template.indexOf("const formatInr = ");
  const componentStart = template.indexOf("const HiltonGardenInnSaket = () => {");
  const exportLine = template.lastIndexOf("export default ");
  if (helpersStart < 0 || componentStart < 0 || exportLine < 0) {
    throw new Error("FINAL template markers not found");
  }

  let out = template.slice(0, reviewsStart);
  out += `const reviews = ${reviews};\n\n`;
  out += template.slice(imagesStart, venueStart);
  out += `const venue = ${venueConfig};\n\n`;
  out += template.slice(helpersStart, componentStart);
  out += `const ${venue.proposedComponent} = () => {`;
  out += template.slice(
    componentStart + "const HiltonGardenInnSaket = () => {".length,
    exportLine
  );
  out += `export default ${venue.proposedComponent};\n`;
  out = out.replace(
    `{venue.rating != null && (
              <div className="flex space-x-1">{renderStars(venue.rating)}</div>

        <VenuePolicies policies={venue.venuePolicies} />`,
    `{venue.rating != null && (
              <div className="flex space-x-1">{renderStars(venue.rating)}</div>
            )}
            <span className="text-gray-600">
              {getReviewCountLabel(venue.reviewCount)} Ratings & Reviews
            </span>
          </div>
          {reviews.length === 0 ? (
            <p className="text-gray-600">Individual reviews: Not available from source</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={\`\${review.name}-\${index}\`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white p-5 rounded-lg shadow-md border border-gray-200"
                >
                  <div className="flex items-center space-x-3 flex-wrap gap-2">
                    <span className="text-lg font-semibold text-gray-900">{review.name}</span>
                    {review.verified && (
                      <span className="bg-blue-500 text-white px-2 py-1 text-xs rounded-full">
                        ✓ Verified
                      </span>
                    )}
                    {review.rating != null && (
                      <>
                        <span className="flex space-x-1">{renderStars(review.rating)}</span>
                        <span className="bg-green-500 text-white px-2 py-1 text-xs rounded-md">
                          {review.rating}/5
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    Event Date: {review.eventDate} | PAX: {review.pax}
                  </p>
                  <p className="text-gray-700 mt-3">{review.review}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <VenuePolicies policies={venue.venuePolicies} />`
  );
  return out;
}

async function main() {
  const templatePath = path.join(finalRoot, "HiltonGardenInnSaket", "HiltonGardenInnSaket.jsx");
  const template = fs.readFileSync(templatePath, "utf8");
  const logoSrc = path.join(finalRoot, "HiltonGardenInnSaket", "assets", "logo.png");
  const custSrc = path.join(finalRoot, "HiltonGardenInnSaket", "assets", "customerimage.svg");

  const keepExisting = new Set(NEW_VENUES.map((v) => v.slug));

  for (const venue of NEW_VENUES) {
    const destDir = path.join(assetsRoot, venue.slug);
    fs.mkdirSync(destDir, { recursive: true });
    const existingFiles = fs
      .readdirSync(destDir)
      .filter((name) => /^venue\d+\.jpe?g$/i.test(name));
    if (keepExisting.has(venue.slug) && existingFiles.length >= 6) {
      console.log("keep existing images", venue.slug);
      continue;
    }
    for (const existing of existingFiles) {
      fs.unlinkSync(path.join(destDir, existing));
    }
    const urls = await collectUrls(venue);
    console.log(venue.slug, "candidate urls", urls.length);
    let saved = 0;
    const seen = new Set();
    for (const url of urls) {
      if (saved >= 6) break;
      try {
        const raw = await downloadBuffer(url);
        const jpeg = await toVenueJpeg(raw);
        const fingerprint = `${jpeg.length}:${jpeg.subarray(0, 32).toString("hex")}`;
        if (seen.has(fingerprint)) continue;
        seen.add(fingerprint);
        const file = path.join(destDir, `venue${saved + 1}.jpeg`);
        fs.writeFileSync(file, jpeg);
        saved += 1;
        console.log("  OK", venue.slug, `venue${saved}.jpeg`, jpeg.length);
      } catch (e) {
        console.warn("  skip", url.slice(0, 110), e.message);
      }
    }
    if (saved < 6) {
      throw new Error(`${venue.slug}: only ${saved}/6 images`);
    }
  }

  const data = JSON.parse(fs.readFileSync(venuesJsonPath, "utf8"));
  const existingIds = new Set(data.venues.map((v) => v.slug));
  for (const venue of NEW_VENUES) {
    if (existingIds.has(venue.slug)) continue;
    data.venues.push(toVenueJsonEntry(venue));
  }
  fs.writeFileSync(venuesJsonPath, JSON.stringify(data, null, 2));

  let routes = fs.readFileSync(routesPath, "utf8");
  for (const venue of NEW_VENUES) {
    const importLine = `import ${venue.proposedComponent} from "../pages/${venue.proposedComponent}.jsx";`;
    const routeLine = `  { path: "${venue.proposedRoute}", Component: ${venue.proposedComponent} },`;
    if (!routes.includes(importLine)) {
      routes = routes.replace(
        /(\r?\nexport const venuePageRoutes)/,
        `${importLine}\n$1`
      );
    }
    if (!routes.includes(routeLine)) {
      routes = routes.replace(
        /];\s*$/,
        `${routeLine}\n];\n`
      );
    }
    fs.writeFileSync(path.join(pagesDir, `${venue.proposedComponent}.jsx`), generateSrcPage(venue));

    const finalDir = path.join(finalRoot, venue.finalFolder);
    const assetsDir = path.join(finalDir, "assets");
    fs.mkdirSync(assetsDir, { recursive: true });
    fs.copyFileSync(logoSrc, path.join(assetsDir, "logo.png"));
    fs.copyFileSync(custSrc, path.join(assetsDir, "customerimage.svg"));
    for (let n = 1; n <= 6; n++) {
      fs.copyFileSync(
        path.join(assetsRoot, venue.slug, `venue${n}.jpeg`),
        path.join(assetsDir, `venue${n}.jpeg`)
      );
    }
    fs.writeFileSync(
      path.join(finalDir, `${venue.finalFolder}.jsx`),
      generateFinalJsx(venue, template)
    );
    console.log("Created page + FINAL", venue.proposedComponent);
  }

  fs.writeFileSync(routesPath, routes);
  console.log("Done");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
