import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dir = path.join(root, "FINAL_JSX_VENUES");

const expected = [
  "LeMeridienNewDelhi.jsx",
  "CrownePlazaNewDelhiOkhla.jsx",
  "TheSuryaaNewDelhi.jsx",
  "GoldfinchHotelFaridabad.jsx",
  "RadissonBluMarinaConnaughtPlace.jsx",
  "FortuneSelectGlobalGurgaon.jsx",
  "ParkInnByRadissonLajpatNagar.jsx",
  "HiltonGardenInnSaket.jsx",
];

let ok = true;

for (const f of expected) {
  const full = path.join(dir, f);
  if (!fs.existsSync(full)) {
    console.log("MISSING FILE:", f);
    ok = false;
    continue;
  }
  const c = fs.readFileSync(full, "utf8");
  if (!c.includes("export default")) {
    console.log("NO DEFAULT EXPORT:", f);
    ok = false;
  }
  if (c.includes("<VenuePage") || c.includes('from "../Components/VenuePage"')) {
    console.log("WRAPPER DETECTED:", f);
    ok = false;
  }
  if (c.length < 10000) {
    console.log("FILE TOO SMALL (likely incomplete):", f, c.length);
    ok = false;
  }
  const imgs = [...c.matchAll(/from "(\.\.\/src\/assets\/[^"]+)"/g)].map((m) => m[1]);
  for (const imp of imgs) {
    const p = path.join(root, imp.replace(/^\.\.\//, ""));
    if (!fs.existsSync(p)) {
      console.log("MISSING IMAGE:", f, imp);
      ok = false;
    }
  }
}

console.log(ok ? "VERIFY OK: 8 files, exports, images, no wrappers" : "VERIFY FAILED");
