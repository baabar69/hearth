import type { NextConfig } from "next";

// Security headers. They live here, not in netlify.toml, because Netlify serves
// Next.js pages from a function and toml [[headers]] never reach those
// responses (docs/seo/audit-2026-09-09.md). Netlify already sends HSTS and
// X-Content-Type-Options itself, so they are not repeated here.
//
// The enforced CSP holds only directives that cannot break a page: no framing
// by other sites, no <base> hijack, no plugins. The full allowlist runs as
// Report-Only, because the Whop checkout loads scripts from Plaid and Whop at
// runtime and a wrong guess would silently break payment. Watch the browser
// console on /checkout for violations, then promote it to enforced.
const ENFORCED_CSP = [
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const REPORT_ONLY_CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://whop.com https://*.whop.com https://cdn.plaid.com https://eu-assets.i.posthog.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://whop.com https://*.whop.com https://t.whop.tw https://*.plaid.com https://eu.i.posthog.com https://eu-assets.i.posthog.com",
  "frame-src 'self' https://whop.com https://*.whop.com https://*.plaid.com",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "object-src 'none'",
].join("; ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: ENFORCED_CSP },
          { key: "Content-Security-Policy-Report-Only", value: REPORT_ONLY_CSP },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
