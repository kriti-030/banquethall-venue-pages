import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const flatDir = path.join(root, "FINAL_JSX_VENUES");
const assetsRoot = path.join(root, "src/assets");

const VENUES = [
  { folder: "LeMeridienNewDelhi", jsx: "LeMeridienNewDelhi.jsx" },
  { folder: "CrownePlazaNewDelhiOkhla", jsx: "CrownePlazaNewDelhiOkhla.jsx" },
  { folder: "TheSuryaaNewDelhi", jsx: "TheSuryaaNewDelhi.jsx" },
  { folder: "GoldfinchHotelFaridabad", jsx: "GoldfinchHotelFaridabad.jsx" },
  { folder: "RadissonBluMarinaConnaughtPlace", jsx: "RadissonBluMarinaConnaughtPlace.jsx" },
  { folder: "FortuneSelectGlobalGurgaon", jsx: "FortuneSelectGlobalGurgaon.jsx" },
  { folder: "ParkInnByRadissonLajpatNagar", jsx: "ParkInnByRadissonLajpatNagar.jsx" },
  { folder: "HiltonGardenInnSaket", jsx: "HiltonGardenInnSaket.jsx" },
];

function resolveSourcePath(importPath) {
  return path.join(root, importPath.replace(/^\.\.\//, ""));
}

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

const report = [];

for (const venue of VENUES) {
  const flatJsxPath = path.join(flatDir, venue.jsx);
  const venueDir = path.join(flatDir, venue.folder);
  const assetsDir = path.join(venueDir, "assets");
  const destJsxPath = path.join(venueDir, venue.jsx);

  if (!fs.existsSync(flatJsxPath)) {
    throw new Error(`Missing JSX file: ${flatJsxPath}`);
  }

  let content = fs.readFileSync(flatJsxPath, "utf8");
  const importMatches = [...content.matchAll(/import\s+(\w+)\s+from\s+"([^"]+)"/g)];
  const imageImports = importMatches.filter((m) =>
    /\.(jpeg|jpg|png|svg)$/i.test(m[2])
  );

  const missing = [];
  const copied = [];

  fs.mkdirSync(assetsDir, { recursive: true });

  for (const [, varName, importPath] of imageImports) {
    const srcPath = resolveSourcePath(importPath);
    if (!fs.existsSync(srcPath)) {
      missing.push({ varName, importPath, srcPath });
      continue;
    }

    const filename = path.basename(srcPath);
    const destPath = path.join(assetsDir, filename);
    copyFile(srcPath, destPath);
    copied.push(filename);

    const newImport = `./assets/${filename}`;
    content = content.replace(
      new RegExp(`import\\s+${varName}\\s+from\\s+"${importPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`),
      `import ${varName} from "${newImport}"`
    );
  }

  if (missing.length > 0) {
    report.push({ venue: venue.folder, jsx: venue.jsx, imageCount: copied.length, missing });
    continue;
  }

  fs.writeFileSync(destJsxPath, content, "utf8");
  fs.unlinkSync(flatJsxPath);

  report.push({
    venue: venue.folder,
    jsx: `${venue.folder}/${venue.jsx}`,
    imageCount: copied.length,
    missing: [],
    assets: copied.sort(),
  });

  console.log(`OK ${venue.folder}: ${copied.length} images copied`);
}

const reportPath = path.join(flatDir, "ASSET_REPORT.json");
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf8");
console.log(`\nReport written to ${reportPath}`);

const anyMissing = report.some((r) => r.missing.length > 0);
if (anyMissing) {
  console.error("\nMISSING IMAGES DETECTED:");
  for (const r of report) {
    for (const m of r.missing) {
      console.error(`  ${r.venue}: ${m.importPath} (${m.srcPath})`);
    }
  }
  process.exit(1);
}

console.log("\nAll venues reorganized successfully.");
