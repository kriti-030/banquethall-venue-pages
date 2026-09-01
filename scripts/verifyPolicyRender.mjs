import fs from "fs";

const checks = [
  [
    "src/pages/LeMeridienNewDelhi.jsx",
    "Morning: 9:00 AM - 5:00 PM",
    "1 A/C changing room",
    "Valet parking available + parking for 120 vehicles",
    "Non-cancellable",
  ],
  [
    "src/pages/RadissonBluMarinaDelhi.jsx",
    "9:00 AM - 11:30 PM",
    "No A/C changing room",
    "Valet parking available + parking for 60 vehicles",
    "Non-cancellable",
  ],
  [
    "src/pages/HiltonGardenInnSaket.jsx",
    "12:00 PM - 12:00 AM",
    "No bride/groom changing room",
    "Complimentary self-parking + complimentary valet parking",
    "Refundable 30 days prior",
  ],
];

let ok = true;
for (const [file, ...needles] of checks) {
  const c = fs.readFileSync(file, "utf8");
  for (const n of needles) {
    if (!c.includes(n)) {
      console.log("MISSING in", file, ":", n);
      ok = false;
    }
  }
  if (!c.includes("VenuePolicies") && !c.includes("venuePolicies")) {
    console.log("No venuePolicies in", file);
    ok = false;
  }
}
console.log(ok ? "VERIFY OK" : "VERIFY FAILED");
