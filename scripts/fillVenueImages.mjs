import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const assetsRoot = path.join(root, "src/assets/Venuesphotos");

const googleEntities = {
  "le-meridien-new-delhi": "https://www.google.com/travel/hotels/entity/ChkIobb79ZLk0eOCARoML2cvMTJxZ3gwMWQ5EAE",
  "crowne-plaza-new-delhi-okhla": "https://www.google.com/travel/hotels/entity/ChcIgsjEgIKgpMFUGgsvZy8xdHA4eWYzbhAB",
  "the-suryaa-new-delhi": "https://www.google.com/travel/hotels/entity/ChcI2dD-j8DAgqxpGgsvZy8xdHBuMHlxdxAB",
  "goldfinch-hotel-delhi-ncr": "https://www.google.com/travel/hotels/entity/CgsIsNnXsLuvpPSOARAB",
  "radisson-blu-marina-delhi": "https://www.google.com/travel/hotels/entity/CgoIho_Q2czcisFMEAE",
  "fortune-select-global-gurgaon": "https://www.google.com/travel/search?q=Fortune%20Select%20Global%20Gurgaon",
  "park-inn-radisson-lajpat-nagar": "https://www.google.com/travel/hotels/entity/ChgIoryfruTjzuT3ARoLL2cvMXRjeWpkdzAQAQ",
  "hilton-garden-inn-saket": "https://www.google.com/travel/hotels/entity/CgsIieu5yZ_OkJ_DARAB",
};

function normalizeUrl(raw) {
  let url = raw.split(" 1x,").pop().replace(" 2x", "").trim();
  url = url.split(" ")[0];
  if (url.includes("googleusercontent.com")) {
    const base = url.split("=")[0];
    return `${base}=w1200-h900-k-no`;
  }
  return url;
}

function extractUniqueImages(html) {
  const matches = [...html.matchAll(/https:\/\/lh3\.googleusercontent\.com[^"'\\]+/g)].map((m) =>
    normalizeUrl(m[0].replace(/\\u003d/g, "=").replace(/\\u0026/g, "&"))
  );
  const seen = new Set();
  const unique = [];
  for (const url of matches) {
    const key = url.split("=")[0];
    if (!seen.has(key) && key.includes("gps-cs-s")) {
      seen.add(key);
      unique.push(url);
    }
  }
  return unique;
}

async function download(url, destPath) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      Accept: "image/*,*/*",
      Referer: "https://www.google.com/",
    },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 2000) throw new Error(`Too small (${buf.length} bytes)`);
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, buf);
  return buf.length;
}

const report = [];

for (const [slug, url] of Object.entries(googleEntities)) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0", Accept: "text/html" },
  });
  const html = await res.text();
  const images = extractUniqueImages(html).slice(0, 6);
  const saved = [];

  for (let i = 0; i < images.length; i++) {
    const dest = path.join(assetsRoot, slug, `venue${i + 1}.jpeg`);
    try {
      const size = await download(images[i], dest);
      saved.push({ file: `venue${i + 1}.jpeg`, size, url: images[i] });
      console.log("OK", slug, `venue${i + 1}.jpeg`, size);
    } catch (e) {
      console.error("FAIL", slug, i + 1, e.message);
    }
  }

  report.push({ slug, requested: images.length, saved });
}

fs.writeFileSync(path.join(root, "src/data/asset-final-report.json"), JSON.stringify(report, null, 2));
console.log("Done");
