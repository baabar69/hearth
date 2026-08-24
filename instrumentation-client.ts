/**
 * PostHog, the privacy-first way.
 *
 * Runs once in the browser before React hydrates (Next.js instrumentation-client
 * convention). Does nothing unless NEXT_PUBLIC_POSTHOG_KEY is set, so a missing
 * key never breaks a page.
 *
 * What this deliberately does NOT do:
 *  - no cookies and no local storage (cookieless mode; identity is a salted
 *    server-side hash that rotates daily), so no cookie banner is needed
 *  - no session recording, no surveys, no autocapture of clicks or form fields
 *  - no emails or names in any event: ?email= and ?first= are masked out of URLs
 *  - honours the browser's Do Not Track setting
 *
 * What it captures: page views (including client-side navigations) and the three
 * product events in app/lib/analytics.ts. Data lives in PostHog's EU region.
 *
 * Two settings live in the PostHog project, not here: cookieless mode must be
 * switched on (Project settings > Cookieless) or events are dropped on ingestion,
 * and "Discard IP data" should be on so no IP address is stored.
 */
import posthog from "posthog-js";

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

if (key) {
  try {
    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com",
      ui_host: "https://eu.posthog.com",
      cookieless_mode: "always",
      persistence: "memory",
      person_profiles: "identified_only",
      capture_pageview: "history_change",
      capture_pageleave: false,
      autocapture: false,
      disable_session_recording: true,
      disable_surveys: true,
      disable_web_experiments: true,
      capture_performance: false,
      capture_exceptions: false,
      advanced_disable_flags: true,
      respect_dnt: true,
      mask_personal_data_properties: true,
      custom_personal_data_properties: ["email", "first", "name"],
    });
  } catch {
    // Analytics must never take a page down.
  }
}
