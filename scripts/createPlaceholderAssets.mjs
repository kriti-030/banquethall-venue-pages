import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const venues = JSON.parse(
  fs.readFileSync(path.join(root, "src/data/venues.json"), "utf8")
).venues;

// Minimal valid 1x1 JPEG — replace with real venue photos in Step 5
const minimalJpeg = Buffer.from(
  "/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////2wBDAf//////////////////////////////////////////////////////////////////////////////////////wAARCAABAAEDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAAAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGfAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",
  "base64"
);

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="48" viewBox="0 0 200 48"><rect width="200" height="48" fill="#1e3a8a"/><text x="100" y="30" fill="white" font-family="Arial,sans-serif" font-size="14" text-anchor="middle">BanquetHall.co</text></svg>`;

const customerSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f3f4f6"/><text x="150" y="100" fill="#6b7280" font-family="Arial,sans-serif" font-size="16" text-anchor="middle">Call Back</text></svg>`;

const assetDirs = [
  "edengarden",
  ...venues.map((v) => v.slug),
];

for (const slug of assetDirs) {
  const dir = path.join(root, "src/assets/Venuesphotos", slug);
  fs.mkdirSync(dir, { recursive: true });

  const names =
    slug === "edengarden"
      ? ["eden1.jpeg", "eden2.jpeg", "eden3.jpeg", "eden4.jpeg", "eden5.jpeg", "eden6.jpeg"]
      : ["venue1.jpeg", "venue2.jpeg", "venue3.jpeg", "venue4.jpeg", "venue5.jpeg", "venue6.jpeg"];

  for (const name of names) {
    const filePath = path.join(dir, name);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, minimalJpeg);
    }
  }
}

fs.mkdirSync(path.join(root, "src/assets"), { recursive: true });

const logoPath = path.join(root, "src/assets/logo.png");
if (!fs.existsSync(logoPath)) {
  // Use SVG saved as logo — vite can import svg; Eden template imports logo.png
  // Write minimal PNG via same jpeg trick won't work. Create logo.svg and update imports? 
  // Keep png: write a tiny PNG base64
  const tinyPng = Buffer.from(
    "iVBORw0KGgoAAAANSUh0ZUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
    "base64"
  );
  fs.writeFileSync(logoPath, tinyPng);
}

const customerPath = path.join(root, "src/assets/customerimage.svg");
if (!fs.existsSync(customerPath)) {
  fs.writeFileSync(customerPath, customerSvg);
}

console.log("Placeholder assets created. Replace with real assets in Step 5.");
