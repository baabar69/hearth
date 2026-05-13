// One-off setup script. Creates Hearthside + Hearth Deep products
// (with monthly + annual plans) in the Whop sandbox account.
//
// Usage:
//   1. Ensure WHOP_API_KEY in .env.local is a SANDBOX key
//   2. (Optional) Set WHOP_SANDBOX_COMPANY_ID in .env.local if known
//   3. Run: npx tsx scripts/setup-sandbox.ts
//
// On success: prints the new plan IDs to paste into .env.local.

import Whop from "@whop/sdk";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

// Load .env.local manually (this script is standalone, no Next.js loader).
function loadEnv() {
  try {
    const path = resolve(process.cwd(), ".env.local");
    const text = readFileSync(path, "utf8");
    for (const line of text.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim();
      if (!process.env[key]) process.env[key] = value;
    }
  } catch (err) {
    console.warn("Could not read .env.local:", (err as Error).message);
  }
}

loadEnv();

const apiKey = process.env.WHOP_API_KEY;
if (!apiKey) {
  console.error("Set WHOP_API_KEY in .env.local first.");
  process.exit(1);
}

const whop = new Whop({
  apiKey,
  baseURL: "https://sandbox-api.whop.com/api/v1",
});

async function discoverCompanyId(): Promise<string> {
  const fromEnv = process.env.WHOP_SANDBOX_COMPANY_ID;
  if (fromEnv && fromEnv.startsWith("biz_")) return fromEnv;

  // Try the v5 /me endpoint, which returns the authenticated company.
  // The SDK doesn't have a typed wrapper, so call via raw fetch.
  const res = await fetch("https://sandbox-api.whop.com/api/v5/me", {
    headers: { Authorization: `Bearer ${apiKey}` },
  });
  if (res.ok) {
    const body = (await res.json()) as { company?: { id?: string } };
    if (body.company?.id) return body.company.id;
  }

  // Try v2 /me as fallback.
  const res2 = await fetch("https://sandbox-api.whop.com/api/v2/me", {
    headers: { Authorization: `Bearer ${apiKey}` },
  });
  if (res2.ok) {
    const body = (await res2.json()) as
      | { company?: { id?: string } }
      | { id?: string };
    if ("company" in body && body.company?.id) return body.company.id;
  }

  throw new Error(
    "Could not auto-discover sandbox company ID. " +
      "Find it at https://sandbox.whop.com/dashboard (URL contains biz_xxx) " +
      "and add to .env.local as WHOP_SANDBOX_COMPANY_ID=biz_xxx then re-run.",
  );
}

async function main() {
  console.log("🔍 Discovering sandbox company...");
  const companyId = await discoverCompanyId();
  console.log(`✓ Company: ${companyId}\n`);

  console.log("📦 Creating Hearthside product...");
  const hearthside = await whop.products.create({
    company_id: companyId,
    title: "Hearthside",
    headline: "Biweekly Sits with your matched Keeper",
    description:
      "Your matched Keeper, paired in 72 hours. Biweekly Sits, unlimited async Long Talk, weekly Friday reflections.",
    visibility: "visible",
  });
  console.log(`✓ ${hearthside.id}\n`);

  console.log("📦 Creating Hearth Deep product...");
  const hearthDeep = await whop.products.create({
    company_id: companyId,
    title: "Hearth Deep",
    headline: "Weekly Sits with priority Keeper access",
    description:
      "Everything in Hearthside, plus weekly Sits, 4-hour Long Talk response window, and anniversary rituals.",
    visibility: "visible",
  });
  console.log(`✓ ${hearthDeep.id}\n`);

  console.log("💳 Creating Hearthside Monthly plan ($39/mo)...");
  const hearthsideMonthly = await whop.plans.create({
    company_id: companyId,
    product_id: hearthside.id,
    plan_type: "renewal",
    renewal_price: 39,
    billing_period: 30,
    currency: "usd",
    visibility: "visible",
  });
  console.log(`✓ ${hearthsideMonthly.id}\n`);

  console.log("💳 Creating Hearthside Annual plan ($390/yr)...");
  const hearthsideAnnual = await whop.plans.create({
    company_id: companyId,
    product_id: hearthside.id,
    plan_type: "renewal",
    renewal_price: 390,
    billing_period: 365,
    currency: "usd",
    title: "Hearthside Annual",
    description: "Save 2 months — $390/year instead of $468",
    visibility: "visible",
  });
  console.log(`✓ ${hearthsideAnnual.id}\n`);

  console.log("💳 Creating Hearth Deep Monthly plan ($99/mo)...");
  const hearthDeepMonthly = await whop.plans.create({
    company_id: companyId,
    product_id: hearthDeep.id,
    plan_type: "renewal",
    renewal_price: 99,
    billing_period: 30,
    currency: "usd",
    visibility: "visible",
  });
  console.log(`✓ ${hearthDeepMonthly.id}\n`);

  console.log("💳 Creating Hearth Deep Annual plan ($990/yr)...");
  const hearthDeepAnnual = await whop.plans.create({
    company_id: companyId,
    product_id: hearthDeep.id,
    plan_type: "renewal",
    renewal_price: 990,
    billing_period: 365,
    currency: "usd",
    title: "Hearth Deep Annual",
    description: "Save 2 months — $990/year instead of $1,188",
    visibility: "visible",
  });
  console.log(`✓ ${hearthDeepAnnual.id}\n`);

  console.log("═".repeat(60));
  console.log("✅ Sandbox setup complete. Paste these into .env.local:\n");
  console.log(`NEXT_PUBLIC_WHOP_ENVIRONMENT=sandbox`);
  console.log(`NEXT_PUBLIC_HEARTHSIDE_PLAN_ID=${hearthsideMonthly.id}`);
  console.log(`NEXT_PUBLIC_HEARTHSIDE_ANNUAL_PLAN_ID=${hearthsideAnnual.id}`);
  console.log(`NEXT_PUBLIC_HEARTH_DEEP_PLAN_ID=${hearthDeepMonthly.id}`);
  console.log(`NEXT_PUBLIC_HEARTH_DEEP_ANNUAL_PLAN_ID=${hearthDeepAnnual.id}`);
  console.log("═".repeat(60));
  console.log("\nThen restart `npm run dev` and use card 4242 4242 4242 4242");
}

main().catch((err) => {
  console.error("\n❌ Setup failed:");
  console.error(err);
  process.exit(1);
});
