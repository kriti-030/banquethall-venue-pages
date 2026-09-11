const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

async function dump(url) {
  const html = await fetch(url, { headers: { "User-Agent": UA } }).then((r) => r.text());
  const urls = [...html.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\\\s)]+/g)].map((m) =>
    m[0]
  );
  console.log("\n", url, urls.length);
  [...new Set(urls)].slice(0, 30).forEach((u) => console.log(u.slice(0, 180)));
}

await dump("https://www.arayabagh.com/");
await dump("https://www.arayabagh.com/our-venue");
