/**
 * Search Console performance pull (queries, pages, brand terms, target terms).
 *
 *   GSC_SERVICE_ACCOUNT_JSON='...' node scripts/gsc-performance.mjs [days=28]
 *
 * Same service account and property as scripts/gsc-coverage.mjs. Prints
 * top queries and pages for the window, the brand queries, and every query
 * matching the target list so we can see impressions before rankings exist.
 * Writes data/metrics/gsc-<date>.json for /dashboard. Read-only.
 */
import { createSign } from "node:crypto";
import { writeFileSync, mkdirSync } from "node:fs";

const HOST = "dearhearth.com";
const PROPERTY = process.env.GSC_PROPERTY || `sc-domain:${HOST}`;
const DAYS = Number(process.argv[2] || 28);
const TARGETS = [/therap/i, /peer support/i, /someone to talk/i, /hearth/i, /keeper/i, /eldest daughter/i, /betterhelp/i, /grief/i, /caregiv/i, /affordable/i, /cheap/i, /cost/i];

if (!process.env.GSC_SERVICE_ACCOUNT_JSON) {
  console.log("GSC_SERVICE_ACCOUNT_JSON not set. Get the key from the index-coverage GitHub Action secret and run:\n  GSC_SERVICE_ACCOUNT_JSON=\"$(cat key.json)\" node scripts/gsc-performance.mjs 28");
  process.exit(0);
}
const sa = JSON.parse(process.env.GSC_SERVICE_ACCOUNT_JSON);

async function accessToken() {
  const now = Math.floor(Date.now() / 1000);
  const enc = (o) => Buffer.from(JSON.stringify(o)).toString("base64url");
  const unsigned = `${enc({ alg: "RS256", typ: "JWT" })}.${enc({ iss: sa.client_email, scope: "https://www.googleapis.com/auth/webmasters.readonly", aud: "https://oauth2.googleapis.com/token", iat: now, exp: now + 3600 })}`;
  const signer = createSign("RSA-SHA256"); signer.update(unsigned);
  const jwt = `${unsigned}.${signer.sign(sa.private_key, "base64url")}`;
  const res = await fetch("https://oauth2.googleapis.com/token", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: jwt }) });
  if (!res.ok) throw new Error(`token: ${res.status} ${await res.text()}`);
  return (await res.json()).access_token;
}
async function query(token, body) {
  const res = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(PROPERTY)}/searchAnalytics/query`, { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify(body) });
  if (!res.ok) throw new Error(`searchAnalytics: ${res.status} ${await res.text()}`);
  return (await res.json()).rows || [];
}
const iso = (d) => d.toISOString().slice(0, 10);
const end = new Date(Date.now() - 3 * 864e5), start = new Date(end.getTime() - DAYS * 864e5);
const token = await accessToken();
const base = { startDate: iso(start), endDate: iso(end), rowLimit: 500 };
const [byQuery, byPage, byCountry, byDevice] = await Promise.all([
  query(token, { ...base, dimensions: ["query"] }), query(token, { ...base, dimensions: ["page"] }),
  query(token, { ...base, dimensions: ["country"] }), query(token, { ...base, dimensions: ["device"] }),
]);
const fmt = (r) => `${String(r.keys[0]).slice(0, 60).padEnd(60)} imp ${String(r.impressions).padStart(5)}  clicks ${String(r.clicks).padStart(4)}  ctr ${(r.ctr * 100).toFixed(1).padStart(5)}%  pos ${r.position.toFixed(1)}`;
const tot = byQuery.reduce((a, r) => ({ i: a.i + r.impressions, c: a.c + r.clicks }), { i: 0, c: 0 });
console.log(`\n${PROPERTY}  ${iso(start)} to ${iso(end)}  (${DAYS} days)  impressions ${tot.i}  clicks ${tot.c}\n`);
console.log("TOP QUERIES"); byQuery.sort((a, b) => b.impressions - a.impressions).slice(0, 40).forEach((r) => console.log("  " + fmt(r)));
console.log("\nBRAND QUERIES (hearth / dear hearth)"); byQuery.filter((r) => /hearth/i.test(r.keys[0])).forEach((r) => console.log("  " + fmt(r)));
console.log("\nTARGET-TERM QUERIES"); byQuery.filter((r) => TARGETS.some((t) => t.test(r.keys[0])) && !/hearth/i.test(r.keys[0])).sort((a, b) => b.impressions - a.impressions).slice(0, 60).forEach((r) => console.log("  " + fmt(r)));
console.log("\nTOP PAGES"); byPage.sort((a, b) => b.impressions - a.impressions).slice(0, 30).forEach((r) => console.log("  " + fmt(r)));
console.log("\nCOUNTRIES"); byCountry.sort((a, b) => b.impressions - a.impressions).slice(0, 10).forEach((r) => console.log("  " + fmt(r)));
console.log("\nDEVICES"); byDevice.forEach((r) => console.log("  " + fmt(r)));
mkdirSync("data/metrics", { recursive: true });
const file = `data/metrics/gsc-${iso(end)}-${DAYS}d.json`;
writeFileSync(file, JSON.stringify({ property: PROPERTY, start: iso(start), end: iso(end), byQuery, byPage, byCountry, byDevice }, null, 1));
console.log(`\nsaved ${file}`);
