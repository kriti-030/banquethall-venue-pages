import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const assetsRoot = path.join(root, "src/assets");
const base = "https://banquethall.co/assets";

const sharedAssets = [
  { url: `${base}/logo-Cm9vGOat.png`, dest: "logo.png" },
  { url: `${base}/customerimage-mo-zBApz.svg`, dest: "customerimage.svg" },
];

const edenGarden = [
  "eden1-BymNyOkg.jpeg",
  "eden2-DuvRhqGD.jpeg",
  "eden3-CmhZpNH6.jpeg",
  "eden4-Bglzmf7E.jpeg",
  "eden5-DOOwLK72.jpeg",
  "eden6-CCF0kRmj.jpeg",
].map((file, i) => ({
  url: `${base}/${file}`,
  dest: `Venuesphotos/edengarden/eden${i + 1}.jpeg`,
}));

// Official property / Google Hotels gallery images (venue-owned media)
const venueImages = {
  "le-meridien-new-delhi": [
    "https://cache.marriott.com/content/dam/marriott-renditions/DELMD/delmd-exterior-0065-hor-clsc.jpg",
    "https://cache.marriott.com/content/dam/marriott-renditions/DELMD/delmd-lobby-0037-hor-clsc.jpg",
    "https://cache.marriott.com/content/dam/marriott-renditions/DELMD/delmd-restaurant-0054-hor-clsc.jpg",
    "https://cache.marriott.com/content/dam/marriott-renditions/DELMD/delmd-ballroom-0052-hor-clsc.jpg",
    "https://cache.marriott.com/content/dam/marriott-renditions/DELMD/delmd-pool-0057-hor-clsc.jpg",
    "https://cache.marriott.com/content/dam/marriott-renditions/DELMD/delmd-guestroom-0044-hor-clsc.jpg",
  ],
  "crowne-plaza-new-delhi-okhla": [
    "https://digital.ihg.com/is/image/ihg/crowne-plaza-new-delhi-4767803485-original",
    "https://digital.ihg.com/is/image/ihg/crowne-plaza-new-delhi-4767803495-original",
    "https://digital.ihg.com/is/image/ihg/crowne-plaza-new-delhi-4767803505-original",
    "https://digital.ihg.com/is/image/ihg/crowne-plaza-new-delhi-4767803515-original",
    "https://digital.ihg.com/is/image/ihg/crowne-plaza-new-delhi-4767803525-original",
    "https://digital.ihg.com/is/image/ihg/crowne-plaza-new-delhi-4767803535-original",
  ],
  "the-suryaa-new-delhi": [
    "https://www.thesuryaa.com/images/home-banner.jpg",
    "https://www.thesuryaa.com/images/rooms/deluxe-room.jpg",
    "https://www.thesuryaa.com/images/restaurant.jpg",
    "https://www.thesuryaa.com/images/pool.jpg",
    "https://www.thesuryaa.com/images/banquet.jpg",
    "https://www.thesuryaa.com/images/lobby.jpg",
  ],
  "goldfinch-hotel-delhi-ncr": [
    "https://goldfinchhotels.com/wp-content/uploads/2023/05/Goldfinch-Delhi-NCR-Hotel-Exterior.jpg",
    "https://goldfinchhotels.com/wp-content/uploads/2023/05/Goldfinch-Delhi-NCR-Room.jpg",
    "https://goldfinchhotels.com/wp-content/uploads/2023/05/Goldfinch-Delhi-NCR-Restaurant.jpg",
    "https://goldfinchhotels.com/wp-content/uploads/2023/05/Goldfinch-Delhi-NCR-Pool.jpg",
    "https://goldfinchhotels.com/wp-content/uploads/2023/05/Goldfinch-Delhi-NCR-Banquet.jpg",
    "https://goldfinchhotels.com/wp-content/uploads/2023/05/Goldfinch-Delhi-NCR-Lounge.jpg",
  ],
  "radisson-blu-marina-delhi": [
    "https://media.radissonhotels.net/image/radisson-blu-marina-hotel-delhi-connaught-place/exterior/16256-118729-f63228429_3xl.jpg",
    "https://media.radissonhotels.net/image/radisson-blu-marina-hotel-delhi-connaught-place/restaurant/16256-118729-f63228429_3xl.jpg",
    "https://media.radissonhotels.net/image/radisson-blu-marina-hotel-delhi-connaught-place/guest-room/16256-118729-f63228429_3xl.jpg",
    "https://media.radissonhotels.net/image/radisson-blu-marina-hotel-delhi-connaught-place/meeting-room/16256-118729-f63228429_3xl.jpg",
    "https://media.radissonhotels.net/image/radisson-blu-marina-hotel-delhi-connaught-place/bar-and-lounge/16256-118729-f63228429_3xl.jpg",
    "https://media.radissonhotels.net/image/radisson-blu-marina-hotel-delhi-connaught-place/spa/16256-118729-f63228429_3xl.jpg",
  ],
  "fortune-select-global-gurgaon": [
    "https://www.itchotels.com/content/dam/itchotels/in/en/fortuneselectglobal-gurugram/fortune-select-global-gurugram-exterior.jpg",
    "https://www.itchotels.com/content/dam/itchotels/in/en/fortuneselectglobal-gurugram/fortune-select-global-gurugram-room.jpg",
    "https://www.itchotels.com/content/dam/itchotels/in/en/fortuneselectglobal-gurugram/fortune-select-global-gurugram-restaurant.jpg",
    "https://www.itchotels.com/content/dam/itchotels/in/en/fortuneselectglobal-gurugram/fortune-select-global-gurugram-pool.jpg",
    "https://www.itchotels.com/content/dam/itchotels/in/en/fortuneselectglobal-gurugram/fortune-select-global-gurugram-banquet.jpg",
    "https://www.itchotels.com/content/dam/itchotels/in/en/fortuneselectglobal-gurugram/fortune-select-global-gurugram-lobby.jpg",
  ],
  "park-inn-radisson-lajpat-nagar": [
    "https://media.radissonhotels.net/image/park-inn-by-radisson-new-delhi-lajpat-nagar/exterior/16256-118729-f63228429_3xl.jpg",
    "https://media.radissonhotels.net/image/park-inn-by-radisson-new-delhi-lajpat-nagar/restaurant/16256-118729-f63228429_3xl.jpg",
    "https://media.radissonhotels.net/image/park-inn-by-radisson-new-delhi-lajpat-nagar/guest-room/16256-118729-f63228429_3xl.jpg",
    "https://media.radissonhotels.net/image/park-inn-by-radisson-new-delhi-lajpat-nagar/pool/16256-118729-f63228429_3xl.jpg",
    "https://media.radissonhotels.net/image/park-inn-by-radisson-new-delhi-lajpat-nagar/meeting-room/16256-118729-f63228429_3xl.jpg",
    "https://media.radissonhotels.net/image/park-inn-by-radisson-new-delhi-lajpat-nagar/bar-and-lounge/16256-118729-f63228429_3xl.jpg",
  ],
  "hilton-garden-inn-saket": [
    "https://www.hilton.com/en/hotels/delskgi-hilton-garden-inn-new-delhi-saket/hotel-photos/DELSKGI_Exterior_1_768x512.jpg",
    "https://www.hilton.com/en/hotels/delskgi-hilton-garden-inn-new-delhi-saket/hotel-photos/DELSKGI_Lobby_1_768x512.jpg",
    "https://www.hilton.com/en/hotels/delskgi-hilton-garden-inn-new-delhi-saket/hotel-photos/DELSKGI_Restaurant_1_768x512.jpg",
    "https://www.hilton.com/en/hotels/delskgi-hilton-garden-inn-new-delhi-saket/hotel-photos/DELSKGI_Pool_1_768x512.jpg",
    "https://www.hilton.com/en/hotels/delskgi-hilton-garden-inn-new-delhi-saket/hotel-photos/DELSKGI_MeetingRoom_1_768x512.jpg",
    "https://www.hilton.com/en/hotels/delskgi-hilton-garden-inn-new-delhi-saket/hotel-photos/DELSKGI_GuestRoom_1_768x512.jpg",
  ],
};

async function download(url, destPath) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      Accept: "image/*,*/*",
    },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 500) throw new Error(`Too small (${buf.length} bytes) for ${url}`);
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, buf);
  return buf.length;
}

async function main() {
  const report = [];

  for (const item of sharedAssets) {
    const dest = path.join(assetsRoot, item.dest);
    try {
      const size = await download(item.url, dest);
      report.push({ ok: true, dest: item.dest, size });
      console.log("OK", item.dest, size);
    } catch (e) {
      report.push({ ok: false, dest: item.dest, error: e.message });
      console.error("FAIL", item.dest, e.message);
    }
  }

  for (const item of edenGarden) {
    const dest = path.join(assetsRoot, item.dest);
    try {
      const size = await download(item.url, dest);
      report.push({ ok: true, dest: item.dest, size });
      console.log("OK", item.dest, size);
    } catch (e) {
      report.push({ ok: false, dest: item.dest, error: e.message });
      console.error("FAIL", item.dest, e.message);
    }
  }

  for (const [slug, urls] of Object.entries(venueImages)) {
    let index = 0;
    for (const url of urls) {
      index += 1;
      const dest = path.join(assetsRoot, "Venuesphotos", slug, `venue${index}.jpeg`);
      try {
        const size = await download(url, dest);
        report.push({ ok: true, dest: `${slug}/venue${index}.jpeg`, size, url });
        console.log("OK", slug, `venue${index}.jpeg`, size);
      } catch (e) {
        report.push({ ok: false, dest: `${slug}/venue${index}.jpeg`, error: e.message, url });
        console.error("FAIL", slug, `venue${index}.jpeg`, e.message);
      }
    }
  }

  fs.writeFileSync(
    path.join(root, "src/data/asset-download-report.json"),
    JSON.stringify(report, null, 2)
  );
}

main();
