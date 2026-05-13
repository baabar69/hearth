import { notFound } from "next/navigation";
import Link from "next/link";
import SharedNav from "../../components/SharedNav";
import SharedFooter from "../../components/SharedFooter";
import CheckoutEmbed from "../../components/CheckoutEmbed";
import {
  PLAN_IDS,
  PLAN_DISPLAY,
  isPlanSlug,
  whopEnvironment,
  welcomeUrl,
} from "../../lib/checkout";
import { whopSdk } from "../../lib/whop-sdk";

export const metadata = {
  title: "Checkout · Hearth",
  description: "Secure checkout for your Hearth membership.",
};

export const dynamic = "force-dynamic";

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ plan: string }>;
}) {
  const { plan } = await params;

  if (!isPlanSlug(plan)) {
    notFound();
  }

  const planId = PLAN_IDS[plan];
  const display = PLAN_DISPLAY[plan];
  const environment = whopEnvironment();
  const returnUrl = welcomeUrl();

  // Whop rejects redirect_url unless it starts with https://. Skip it for local
  // http dev — the embed's client-side returnUrl prop handles the redirect.
  const serverRedirectUrl = returnUrl.startsWith("https://")
    ? returnUrl
    : undefined;

  const session = await whopSdk.checkoutConfigurations.create({
    plan_id: planId,
    redirect_url: serverRedirectUrl,
    metadata: {
      plan_slug: plan,
      source: "hearth-pricing",
    },
  });

  return (
    <>
      <SharedNav />

      <main
        style={{
          minHeight: "calc(100vh - 80px)",
          background: "var(--paper)",
          padding: "60px 24px 100px",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ marginBottom: 32, textAlign: "center" }}>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--ember)",
                marginBottom: 12,
              }}
            >
              Checkout · {display.price}
            </p>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(28px, 4vw, 40px)",
                lineHeight: 1.2,
                color: "var(--ink)",
                marginBottom: 12,
                fontWeight: 300,
              }}
            >
              Begin with <em>{display.title}</em>
            </h1>
            <p
              style={{
                color: "var(--ink-2)",
                fontSize: 15,
                lineHeight: 1.6,
                maxWidth: "40ch",
                margin: "0 auto",
              }}
            >
              Cancel any time, in one click. Your card is processed securely by
              Whop &mdash; we never see it.
            </p>
          </div>

          <CheckoutEmbed
            planId={planId}
            sessionId={session.id}
            environment={environment}
            returnUrl={returnUrl}
          />

          <p
            style={{
              marginTop: 28,
              textAlign: "center",
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: "0.06em",
              color: "var(--ink-3)",
              lineHeight: 1.6,
            }}
          >
            Changed your mind?{" "}
            <Link
              href="/pricing"
              style={{ color: "var(--ember)", textDecoration: "underline" }}
            >
              Back to pricing
            </Link>
          </p>
        </div>
      </main>

      <SharedFooter />
    </>
  );
}
