/**
 * Product events. Three of them, by design; everything else is a page view.
 *
 * Never pass an email, a name or free text. Properties are counts, flags and
 * plan slugs only. Safe to call on the server or before PostHog has loaded: it
 * simply does nothing.
 */
import posthog from "posthog-js";

type EventName = "short_intake_submitted" | "intake_submitted" | "checkout_viewed";

type EventProps = {
  short_intake_submitted: { topics: number };
  intake_submitted: { paid: boolean };
  checkout_viewed: { plan: string; from_intake: boolean };
};

export function track<E extends EventName>(event: E, props: EventProps[E]): void {
  if (typeof window === "undefined") return;
  try {
    if (!posthog.__loaded) return;
    posthog.capture(event, props);
  } catch {
    // Analytics must never take a page down.
  }
}
