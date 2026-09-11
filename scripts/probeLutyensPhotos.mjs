const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const html = await fetch("https://lutyenshotels.com/", { headers: { "User-Agent": UA } }).then((r) =>
  r.text()
);
const urls = [...html.matchAll(/https:\/\/lutyenshotels\.com\/wp-content\/uploads\/[0-9/A-Za-z._-]+\.(?:jpg|jpeg)/gi)].map(
  (m) => m[0]
);
const unique = [...new Set(urls)].filter((u) => !/\d{2,4}x\d{2,4}/.test(u));
unique.forEach((u) => console.log(u));
