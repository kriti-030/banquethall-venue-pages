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

const officialPages = {
  "le-meridien-new-delhi": "https://www.marriott.com/en-us/hotels/delmd-le-meridien-new-delhi/overview/",
  "crowne-plaza-new-delhi-okhla": "https://www.ihg.com/crowneplaza/hotels/gb/en/new-delhi/ndeol/hoteldetail",
  "the-suryaa-new-delhi": "https://www.thesuryaa.com/",
  "goldfinch-hotel-delhi-ncr": "https://goldfinchhotels.com/hotel_resort/goldfinch-delhi/",
  "radisson-blu-marina-delhi": "https://www.radissonhotels.com/en-us/hotels/radisson-blu-new-delhi-connaught-place",
  "fortune-select-global-gurgaon": "https://www.itchotels.com/in/en/fortuneselectglobal-gurugram",
  "park-inn-radisson-lajpat-nagar": "https://www.radissonhotels.com/en-us/hotels/park-inn-new-delhi-lajpat-nagar",
  "hilton-garden-inn-saket": "https://www.hilton.com/en/hotels/delskgi-hilton-garden-inn-new-delhi-saket/",
};

function isHotelPhotoUrl(url) {
  if (/default-user|\/ogw\/|avatar|profile|icon|logo|badge|favicon/i.test(url)) return false;
  return /gps-cs-s\/|gps-proxy\//.test(url);
}

function normalizeGoogleUrl(raw) {
  let url = raw.replace(/\\u003d/g, "=").replace(/\\u0026/g, "&").trim();
  if (url.includes(" 1x,")) {
    const parts = url.split(" 1x,");
    url = parts[1].replace(/\s*2x\s*$/, "");
  }
  url = url.split(/\s+/)[0];
  if (!url.includes("googleusercontent.com")) return null;
  if (!isHotelPhotoUrl(url)) return null;
  const base = url.split("=")[0];
  return `${base}=w1200-h900-k-no`;
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
  const pattern = /https?:\/\/[^"'\\>\s]+\.(?:jpg|jpeg|webp|png)(?:\?[^"'\\>\s]*)?/gi;
  for (const match of html.matchAll(pattern)) {
    const url = match[0];
    if (url.length > 80 && !/icon|logo|favicon|sprite|avatar|badge/i.test(url)) {
      found.add(url);
    }
  }
  return [...found];
}

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml",
      "Accept-Language": "en-US,en;q=0.9",
    },
    redirect: "follow",
  });
  return { status: res.status, html: await res.text() };
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
  if (buf.length < 8000) throw new Error(`Too small (${buf.length} bytes)`);
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, buf);
  return buf.length;
}

const report = [];

for (const [slug, googleUrl] of Object.entries(googleEntities)) {
  const candidates = [];

  try {
    const g = await fetchHtml(googleUrl);
    candidates.push(...extractGoogleImages(g.html));
    report.push({ slug, source: "google", status: g.status, found: candidates.length });
  } catch (e) {
    report.push({ slug, source: "google", error: e.message });
  }

  try {
    const o = await fetchHtml(officialPages[slug]);
    const official = extractOfficialImages(o.html);
    candidates.push(...official);
    report.push({ slug, source: "official", status: o.status, found: official.length });
  } catch (e) {
    report.push({ slug, source: "official", error: e.message });
  }

  const unique = [...new Set(candidates)];
  const savedFiles = [];
  let urlIndex = 0;

  while (savedFiles.length < 6 && urlIndex < unique.length) {
    const dest = path.join(assetsRoot, slug, `venue${savedFiles.length + 1}.jpeg`);
    const url = unique[urlIndex];
    urlIndex += 1;
    try {
      const size = await download(url, dest);
      savedFiles.push({ file: `venue${savedFiles.length + 1}.jpeg`, size, url });
      console.log("OK", slug, `venue${savedFiles.length}.jpeg`, size);
    } catch (e) {
      console.error("FAIL download", slug, urlIndex, e.message);
    }
  }

  report.push({
    slug,
    saved: savedFiles.length,
    candidateUrls: unique.slice(0, 12),
    savedFiles,
  });
}

fs.writeFileSync(
  path.join(root, "src/data/asset-scrape-report.json"),
  JSON.stringify(report, null, 2)
);

console.log("Scrape complete");
