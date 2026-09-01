import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const data = JSON.parse(fs.readFileSync(path.join(root, "src/data/venues.json"), "utf8"));
const report = JSON.parse(
  fs.readFileSync(path.join(root, "src/data/asset-scrape-report.json"), "utf8")
);

const bySlug = Object.fromEntries(
  report.filter((r) => r.savedFiles).map((r) => [r.slug, r])
);

for (const venue of data.venues) {
  const entry = bySlug[venue.slug];
  if (!entry) continue;
  venue.images = entry.savedFiles.map(
    (f) => `src/assets/Venuesphotos/${venue.slug}/${f.file}`
  );
  venue.imagesNote = "Google Hotels listing photos (Step 5 asset download)";
}

fs.writeFileSync(path.join(root, "src/data/venues.json"), JSON.stringify(data, null, 2));
console.log("Updated venues.json image metadata");
