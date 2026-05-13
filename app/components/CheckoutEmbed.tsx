"use client";

import { WhopCheckoutEmbed } from "@whop/checkout/react";
import type { WhopEnvironment } from "../lib/checkout";

type Props = {
  planId: string;
  sessionId: string;
  environment: WhopEnvironment;
  returnUrl: string;
};

export default function CheckoutEmbed({
  planId,
  sessionId,
  environment,
  returnUrl,
}: Props) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 560,
        margin: "0 auto",
        background: "white",
        border: "1px solid var(--rule)",
        borderRadius: 12,
        boxShadow: "0 30px 60px -40px rgba(26,23,20,0.12)",
        overflow: "hidden",
      }}
    >
      <WhopCheckoutEmbed
        planId={planId}
        sessionId={sessionId}
        environment={environment}
        returnUrl={returnUrl}
        theme="light"
        themeOptions={{ accentColor: "orange" }}
        fallback={
          <div
            style={{
              padding: 48,
              textAlign: "center",
              fontFamily: "var(--mono)",
              fontSize: 12,
              letterSpacing: "0.08em",
              color: "var(--ink-3)",
              textTransform: "uppercase",
            }}
          >
            Loading secure checkout&hellip;
          </div>
        }
      />
    </div>
  );
}
