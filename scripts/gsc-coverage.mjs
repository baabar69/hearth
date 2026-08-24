/**
 * Weekly Google index-coverage report.
 *
 * Inspects every URL in the live sitemap through the Search Console URL
 * Inspection API and emails a summary via Brevo: what is indexed, what
 * Google is ignoring, and anything with an error or a canonical mismatch.
 * Runs from the index-coverage GitHub Action (Mondays) or by hand:
 *
 *   GSC_SERVICE_ACCOUNT_JSON='...' BREVO_API_KEY='...' node scripts/gsc-coverage.mjs
 *
 * Env:
 *   GSC_SERVICE_ACCOUNT_JSON  full JSON key of a service account that has been
 *                             added as a user on the Search Console property
 *   GSC_PROPERTY              property id (default "sc-domain:dearhearth.com";
 *                             use "https://dearhearth.com/" for URL-prefix)
 *   BREVO_API_KEY             optional; without it the report only prints
 *   REPORT_TO                 optional recipient (default hello@dearhearth.com)
 *
 * Missing GSC credentials is not an error (the account may not exist yet):
 * the script says so and exits 0, so the weekly run never cries wolf.
 */
import { createSign } from "node:crypto";

const HOST = "dearhearth.com";
const SITEMAP = `https://${HOST}/sitemap.xml`;
const PROPERTY = process.env.GSC_PROPERTY || `sc-domain:${HOST}`;
const REPORT_TO = process.env.REPORT_TO || `hello@${HOST}`;

function log(msg) {
  console.log(`[gsc-coverage] ${msg}`);
}

async function accessToken(sa) {
  const now = Math.floor(Date.now() / 1000);
  const enc = (o) => Buffer.from(JSON.stringify(o)).toString("base64url");
  const unsigned = `${enc({ alg: "RS256", typ: "JWT" })}.${enc({
    iss: sa.client_email,
    scope: "https://www.googleapis.com/auth/webmasters.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  })}`;
  const signer = createSign("RSA-SHA256");
  signer.update(unsigned);
  const jwt = `${unsigned}.${signer.sign(sa.private_key).toString("base64url")}`;
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  if (!res.ok) throw new Error(`token exchange failed: ${res.status} ${await res.text()}`);
  return (await res.json()).access_token;
}

async function inspect(token, url) {
  const res = await fetch(
    "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inspectionUrl: url, siteUrl: PROPERTY }),
    },
  );
  if (!res.ok) return { error: `${res.status} ${(await res.text()).slice(0, 200)}` };
  const r = (await res.json()).inspectionResult?.indexStatusResult ?? {};
  return {
    verdict: r.verdict,
    state: r.coverageState,
    lastCrawl: r.lastCrawlTime,
    googleCanonical: r.googleCanonical,
    userCanonical: r.userCanonical,
  };
}

async function sendEmail(subject, text) {
  const key = process.env.BREVO_API_KEY;
  if (!key) {
    log("BREVO_API_KEY not set; printing report only");
    return;
  }
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { "api-key": key, "Content-Type": "application/json" },
    body: JSON.stringify({
      sender: { email: `hello@${HOST}`, name: "Hearth index report" },
      to: [{ email: REPORT_TO }],
      subject,
      textContent: text,
    }),
  });
  log(res.ok ? `report emailed to ${REPORT_TO}` : `email failed: ${res.status} ${await res.text()}`);
}

const saJson = process.env.GSC_SERVICE_ACCOUNT_JSON;
if (!saJson) {
  log("GSC_SERVICE_ACCOUNT_JSON is not set. Skipping until the service");
  log("account exists. Setup: docs/seo/README.md, section 'Coverage report'.");
  process.exit(0);
}

const sa = JSON.parse(saJson);
const token = await accessToken(sa);

const xml = await (await fetch(SITEMAP)).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
log(`inspecting ${urls.length} URLs from the sitemap`);

const rows = [];
for (const url of urls) {
  rows.push({ url, ...(await inspect(token, url)) });
  await new Promise((r) => setTimeout(r, 300));
}

const indexed = rows.filter((r) => r.verdict === "PASS");
const errors = rows.filter((r) => r.error);
const canonicalMismatch = rows.filter(
  (r) => r.googleCanonical && r.userCanonical && r.googleCanonical !== r.userCanonical,
);
const notIndexed = rows.filter((r) => !r.error && r.verdict !== "PASS");

const lines = [];
lines.push(`Google index coverage for ${HOST}, ${new Date().toISOString().slice(0, 10)}`);
lines.push("");
lines.push(`Indexed: ${indexed.length} of ${rows.length}`);
lines.push("");
if (notIndexed.length) {
  lines.push("Not indexed (worth a manual Request Indexing in Search Console):");
  for (const r of notIndexed) lines.push(`  ${r.url}`);
  lines.push(`    states: ${[...new Set(notIndexed.map((r) => r.state))].join(" | ")}`);
  lines.push("");
}
if (canonicalMismatch.length) {
  lines.push("Google chose a different canonical (investigate):");
  for (const r of canonicalMismatch) lines.push(`  ${r.url} -> ${r.googleCanonical}`);
  lines.push("");
}
if (errors.length) {
  lines.push("Inspection errors:");
  for (const r of errors) lines.push(`  ${r.url}: ${r.error}`);
  lines.push("");
}
if (!notIndexed.length && !errors.length && !canonicalMismatch.length) {
  lines.push("No problems found. Every sitemap URL is indexed with the right canonical.");
}

const report = lines.join("\n");
console.log(`\n${report}\n`);
await sendEmail(
  `Index coverage: ${indexed.length}/${rows.length} indexed${
    notIndexed.length ? `, ${notIndexed.length} need attention` : ""
  }`,
  report,
);
