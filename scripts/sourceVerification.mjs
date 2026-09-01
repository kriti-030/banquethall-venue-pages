import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const venues = JSON.parse(fs.readFileSync(path.join(root, "src/data/venues.json"), "utf8")).venues;
const scrape = JSON.parse(fs.readFileSync(path.join(root, "src/data/asset-scrape-report.json"), "utf8"));

const entities = {
  "le-meridien-new-delhi": "ChkIobb79ZLk0eOCARoML2cvMTJxZ3gwMWQ5EAE",
  "crowne-plaza-new-delhi-okhla": "ChcIgsjEgIKgpMFUGgsvZy8xdHA4eWYzbhAB",
  "the-suryaa-new-delhi": "ChcI2dD-j8DAgqxpGgsvZy8xdHBuMHlxdxAB",
  "goldfinch-hotel-delhi-ncr": "CgsIsNnXsLuvpPSOARAB",
  "radisson-blu-marina-delhi": "CgoIho_Q2czcisFMEAE",
  "fortune-select-global-gurgaon": null,
  "park-inn-radisson-lajpat-nagar": "ChgIoryfruTjzuT3ARoLL2cvMXRjeWpkdzAQAQ",
  "hilton-garden-inn-saket": "CgsIieu5yZ_OkJ_DARAB",
};

function readPage(slug, component) {
  const p = path.join(root, "src/pages", `${component}.jsx`);
  return fs.readFileSync(p, "utf8");
}

async function fetchGoogle(entityId) {
  const url = `https://www.google.com/travel/hotels/entity/${entityId}`;
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0",
      "Accept-Language": "en-US,en;q=0.9",
    },
  });
  return res.text();
}

function checkInHtml(html, venue) {
  const phoneDigits = venue.phone.replace(/\D/g, "").slice(-10);
  return {
    name: html.includes(venue.name) || html.includes(venue.name.replace("'", "\\'")),
    addressPartial: venue.address.split(",")[0].slice(0, 15),
    addressFound: html.includes(venue.address.split(",")[0].slice(0, 20)),
    phone: html.includes(phoneDigits) || html.includes(venue.phone.replace("+91 ", "")),
    rating: venue.rating == null ? true : html.includes(String(venue.rating)),
    reviewCount: venue.reviewCount == null ? true : html.includes(String(venue.reviewCount)),
    shortDesc: html.includes(venue.shortDescription.slice(0, 30)),
    starClass: venue.starClassification ? html.toLowerCase().includes(venue.starClassification.split("-")[0]) : true,
  };
}

function checkPage(page, venue) {
  return {
    nameExact: page.includes(venue.name),
    addressExact: page.includes(venue.address),
    phoneExact: page.includes(venue.phone),
    ratingBadge: venue.rating != null ? page.includes(`${venue.rating}/5`) : page.includes("Not available/5"),
    reviewCountBadge: venue.reviewCount != null ? page.includes(String(venue.reviewCount)) : page.includes("Not available"),
    pricingNA: page.includes("Not available from source") && !page.match(/₹\d+/),
    tagFromSource: venue.starClassification ? page.includes(venue.starClassification) : true,
    shortDesc: page.includes(venue.shortDescription),
    fullDesc: venue.fullDescription ? page.includes(venue.fullDescription.slice(0, 40)) : true,
    noBhManaged: !page.includes("Bh Managed"),
    hurryUpBanner: page.includes("Hurry UP! This Venue Is In High Demand"),
    imagesCount6: (page.match(/venue\d from/g) || []).length === 6,
  };
}

const imageBySlug = Object.fromEntries(
  scrape.filter((r) => r.savedFiles).map((r) => [r.slug, r.savedFiles])
);

const reports = [];

for (const v of venues) {
  const page = readPage(v.slug, v.proposedComponent);
  const pageCheck = checkPage(page, v);
  const imgs = imageBySlug[v.slug] || [];
  let googleCheck = null;
  const entityId = entities[v.slug];
  if (entityId) {
    try {
      const html = await fetchGoogle(entityId);
      googleCheck = checkInHtml(html, v);
    } catch (e) {
      googleCheck = { error: e.message };
    }
  } else {
    googleCheck = { note: "Fortune Select uses search URL; live re-fetch skipped" };
  }
  reports.push({ venue: v.name, slug: v.slug, googleShareLink: v.googleShareLink, pageCheck, googleCheck, images: imgs.map((i) => ({ file: i.file, size: i.size, source: "Google Hotels listing photos (lh3.googleusercontent.com)" })) });
}

console.log(JSON.stringify(reports, null, 2));
