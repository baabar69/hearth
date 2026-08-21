/**
 * Pings IndexNow with every URL in the sitemap after a production build.
 *
 * Bing Webmaster Tools flags "Learn how IndexNow boosts site visibility" as a
 * High-severity recommendation until submissions arrive regularly, so this runs
 * on every deploy rather than being fired by hand.
 *
 * IndexNow reaches Bing, Yandex, Seznam and Naver. Google does not participate,
 * but Bing's index feeds ChatGPT search and DuckDuckGo, so it is worth keeping
 * warm on a site with no inbound links to crawl.
 *
 * Never fails the build: a search-engine ping is not worth a failed deploy.
 */

import { readFile } from "node:fs/promises";

const HOST = "dearhearth.com";
const SITEMAP = `https://${HOST}/sitemap.xml`;
const KEY_FILE = "public/8e3f6a9d2b7c4f51a89e6b2d4f7c9a13.txt";

// Netlify sets CONTEXT. Skip local builds and deploy previews so we only ever
// submit URLs that are actually live on the production domain.
if (process.env.CONTEXT && process.env.CONTEXT !== "production") {
  console.log(`[indexnow] skipped (CONTEXT=${process.env.CONTEXT})`);
  process.exit(0);
}
if (!process.env.CONTEXT && !process.env.INDEXNOW_FORCE) {
  console.log("[indexnow] skipped (local build — set INDEXNOW_FORCE=1 to send)");
  process.exit(0);
}

try {
  const key = (await readFile(KEY_FILE, "utf8")).trim();

  const res = await fetch(SITEMAP);
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();

  const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (urlList.length === 0) throw new Error("no <loc> entries in sitemap");

  const submit = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key,
      keyLocation: `https://${HOST}/${key}.txt`,
      urlList,
    }),
  });

  // 200 and 202 both mean accepted. 422 means the key did not validate.
  console.log(
    `[indexnow] ${submit.status} ${submit.statusText} — ${urlList.length} URLs submitted`,
  );
} catch (err) {
  console.warn(`[indexnow] skipped: ${err.message}`);
}
