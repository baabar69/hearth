"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  }, [error]);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        background: "var(--paper)",
      }}
    >
      <div style={{ maxWidth: 540, textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--mono)",
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--ember)",
            marginBottom: 24,
          }}
        >
          Something tipped over
        </p>
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(36px, 6vw, 64px)",
            lineHeight: 1.0,
            fontWeight: 300,
            color: "var(--ink)",
            letterSpacing: "-0.035em",
            marginBottom: 24,
          }}
        >
          We&rsquo;re{" "}
          <span style={{ color: "var(--ember)", fontStyle: "italic" }}>
            sorry.
          </span>
        </h1>
        <p
          style={{
            fontFamily: "var(--serif)",
            fontSize: 18,
            lineHeight: 1.6,
            color: "var(--ink-2)",
            maxWidth: "44ch",
            margin: "0 auto 32px",
          }}
        >
          Something on this page broke. We&rsquo;ve been notified, and
          we&rsquo;ll fix it. In the meantime, you can try again or head
          somewhere else.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={reset} className="btn btn-primary btn-lg">
            Try again
          </button>
          <Link href="/" className="btn btn-ghost btn-lg">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
