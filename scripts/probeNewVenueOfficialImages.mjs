import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const PAGES = {
  araya: ["https://www.arayabagh.com/", "https://www.arayabagh.com/our-venue", "https://www.arayabagh.com/gallery"],
  luxera: ["https://luxerahotel.co.in/", "https://luxerahotel.co.in/gallery.html", "https://luxerahotel.co.in/banquet.html"],
  lutyens: ["https://lutyenshotels.com/", "https://lutyenshotels.com/gallery/", "https://lutyenshotels.com/weddings/"],
  jhankar: [
    "https://www.jhankarbanquets.com/",
    "https://www.jhankarbanquets.com/jhankar-banquet-lawns-asiad-tower/",
    "https://www.jhankarbanquets.com/gallery/",
  ],
  flxho: ["https://flxho.in/property/flxho-cyberone-business-hotel/", "https://www.royalorbit.co.in/"],
  regal: [
    "https://www.google.com/maps/search/Regal+Resort+Satbari+Chattarpur",
    "https://www.google.com/search?q=Regal+Resort+Satbari+Chattarpur+wedding+venue&tbm=isch",
  ],
  zorba: ["https://www.google.com/maps/search/Zorba+Entertainment+166+MG+Road+Sultanpur"],
  lata: ["https://www.google.com/maps/search/Lata+Greens+Sultanpur+MG+Road"],
};

async function main() {
  for (const [key, urls] of Object.entries(PAGES)) {
    console.log("\n===", key);
    for (const url of urls) {
      try {
        const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "text/html" } });
        const html = await res.text();
        const imgs = [
          ...html.matchAll(/https?:\/\/[^"'\\>\s]+\.(?:jpg|jpeg|webp|png)(?:\?[^"'\\>\s]*)?/gi),
        ].map((m) => m[0]);
        const wp = [...html.matchAll(/\/wp-content\/uploads\/[^"'\\>\s]+\.(?:jpg|jpeg|webp|png)/gi)].map(
          (m) => m[0]
        );
        console.log(res.status, url, "abs", imgs.length, "wp", wp.length);
        [...new Set([...imgs, ...wp])].slice(0, 12).forEach((u) => console.log(" ", u.slice(0, 140)));
      } catch (e) {
        console.log("FAIL", url, e.message);
      }
    }
  }
}

main();
