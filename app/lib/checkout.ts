export const PLAN_SLUGS = [
  "hearthside",
  "hearthside-annual",
  "hearth-deep",
  "hearth-deep-annual",
] as const;

export type PlanSlug = (typeof PLAN_SLUGS)[number];

const FALLBACK_PLAN_IDS: Record<PlanSlug, string> = {
  hearthside: "plan_qMkY2ON1bgnbp",
  "hearthside-annual": "plan_3jx4Ci4VilnbW",
  "hearth-deep": "plan_yOUyMLKC42oZI",
  "hearth-deep-annual": "plan_NvT1QMwnWj2up",
};

export const PLAN_IDS: Record<PlanSlug, string> = {
  hearthside:
    process.env.NEXT_PUBLIC_HEARTHSIDE_PLAN_ID ?? FALLBACK_PLAN_IDS.hearthside,
  "hearthside-annual":
    process.env.NEXT_PUBLIC_HEARTHSIDE_ANNUAL_PLAN_ID ??
    FALLBACK_PLAN_IDS["hearthside-annual"],
  "hearth-deep":
    process.env.NEXT_PUBLIC_HEARTH_DEEP_PLAN_ID ??
    FALLBACK_PLAN_IDS["hearth-deep"],
  "hearth-deep-annual":
    process.env.NEXT_PUBLIC_HEARTH_DEEP_ANNUAL_PLAN_ID ??
    FALLBACK_PLAN_IDS["hearth-deep-annual"],
};

export const PLAN_DISPLAY: Record<PlanSlug, { title: string; price: string }> =
  {
    hearthside: { title: "Hearthside", price: "$39/mo" },
    "hearthside-annual": { title: "Hearthside · Annual", price: "$390/yr" },
    "hearth-deep": { title: "Hearth Deep", price: "$99/mo" },
    "hearth-deep-annual": { title: "Hearth Deep · Annual", price: "$990/yr" },
  };

export function isPlanSlug(value: string): value is PlanSlug {
  return (PLAN_SLUGS as readonly string[]).includes(value);
}

export const HEARTHSIDE_CHECKOUT_PATH = "/checkout/hearthside";
export const HEARTH_DEEP_CHECKOUT_PATH = "/checkout/hearth-deep";

const HEARTH_URL =
  process.env.NEXT_PUBLIC_HEARTH_URL ?? "http://localhost:3000";

export function welcomeUrl(): string {
  return `${HEARTH_URL.replace(/\/$/, "")}/welcome`;
}

export type WhopEnvironment = "sandbox" | "production";

export function whopEnvironment(): WhopEnvironment {
  const value = process.env.NEXT_PUBLIC_WHOP_ENVIRONMENT;
  return value === "sandbox" ? "sandbox" : "production";
}
