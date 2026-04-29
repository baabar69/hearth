"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DISMISS_KEY = "hearth_exit_popup_dismissed";
const SUBMITTED_KEY = "hearth_exit_popup_submitted";
const DISMISS_DAYS = 7;

const EXCLUDED_PATHS = [
  "/intake",
  "/sign-in",
  "/crisis",
  "/privacy",
  "/terms",
  "/accessibility",
];

export default function ExitPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (EXCLUDED_PATHS.some((p) => pathname.startsWith(p))) return;

    if (typeof window === "undefined") return;

    const dismissedAt = localStorage.getItem(DISMISS_KEY);
    if (dismissedAt) {
      const elapsed = Date.now() - Number(dismissedAt);
      const sevenDaysMs = DISMISS_DAYS * 24 * 60 * 60 * 1000;
      if (elapsed < sevenDaysMs) return;
    }

    if (localStorage.getItem(SUBMITTED_KEY)) return;

    let opened = false;
    const trigger = () => {
      if (opened) return;
      opened = true;
      setOpen(true);
    };

    // Desktop: mouse leaves through top of viewport
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    // Mobile fallback: 30s on page + 50% scroll
    const start = Date.now();
    const onScroll = () => {
      const elapsed = Date.now() - start;
      const depth = window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight);
      if (elapsed > 30000 && depth > 0.5) trigger();
    };

    // Tab blur as a softer fallback
    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        const elapsed = Date.now() - start;
        if (elapsed > 20000) trigger();
      }
    };

    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [pathname]);

  const dismiss = () => {
    setOpen(false);
    if (typeof window !== "undefined") {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (typeof window !== "undefined") {
      localStorage.setItem(SUBMITTED_KEY, "1");
    }
    setTimeout(() => {
      setOpen(false);
    }, 2400);
  };

  if (!open) return null;

  return (
    <div
      onClick={dismiss}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "rgba(14, 11, 8, 0.55)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        animation: "hearth-fade-in 0.3s ease-out",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 520,
          background: "var(--paper)",
          borderRadius: 16,
          padding: "44px 40px 36px",
          position: "relative",
          boxShadow: "0 40px 80px -20px rgba(14,11,8,0.4)",
          animation: "hearth-rise 0.35s ease-out",
        }}
      >
        <button
          onClick={dismiss}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--ink-3)",
            fontSize: 22,
            lineHeight: 1,
            padding: 8,
            opacity: 0.7,
          }}
        >
          &times;
        </button>

        {!submitted ? (
          <>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--ember)",
                marginBottom: 16,
              }}
            >
              Before you go
            </p>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(26px, 4.5vw, 36px)",
                lineHeight: 1.1,
                fontWeight: 300,
                color: "var(--ink)",
                marginBottom: 16,
                letterSpacing: "-0.025em",
              }}
            >
              If now isn&rsquo;t the right time,
              <br />
              <span style={{ color: "var(--ember)", fontStyle: "italic" }}>
                let us tend the door.
              </span>
            </h2>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: 16,
                lineHeight: 1.6,
                color: "var(--ink-2)",
                marginBottom: 24,
              }}
            >
              Leave your email and we&rsquo;ll send you{" "}
              <strong style={{ fontWeight: 500 }}>$10 off your First Sit</strong>{" "}
              — good whenever you&rsquo;re ready. No drip campaigns, no
              follow-up sales emails. One note from us, and we&rsquo;ll wait.
            </p>

            <form
              onSubmit={submit}
              style={{
                display: "flex",
                gap: 8,
                marginBottom: 24,
                flexWrap: "wrap",
              }}
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: "1 1 220px",
                  padding: "13px 16px",
                  fontFamily: "var(--mono)",
                  fontSize: 14,
                  border: "1.5px solid var(--rule)",
                  borderRadius: 8,
                  background: "white",
                  color: "var(--ink)",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              <button
                type="submit"
                className="btn btn-primary"
                style={{ whiteSpace: "nowrap" }}
              >
                Send the discount &rarr;
              </button>
            </form>

            <div
              style={{
                paddingTop: 24,
                borderTop: "1px solid var(--rule-2)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--ink-3)",
                  marginBottom: 14,
                }}
              >
                Or — for someone you love
              </p>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 16,
                  lineHeight: 1.55,
                  color: "var(--ink-2)",
                  marginBottom: 18,
                  fontStyle: "italic",
                }}
              >
                Most of us know someone carrying something heavy. A month of
                Hearth might be the kindest thing you give all year.
              </p>
              <Link
                href="/gift"
                onClick={dismiss}
                className="btn btn-ghost"
                style={{ display: "inline-flex" }}
              >
                Light a Hearth for someone &rarr;
              </Link>
            </div>

            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: "0.08em",
                color: "var(--ink-3)",
                textAlign: "center",
                marginTop: 22,
                opacity: 0.7,
              }}
            >
              We never sell your email. Unsubscribe in one click.
            </p>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "#FDF3F0",
                border: "2px solid var(--ember)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                margin: "0 auto 20px",
              }}
            >
              &#x2709;&#xfe0e;
            </div>
            <h3
              style={{
                fontFamily: "var(--serif)",
                fontSize: 26,
                lineHeight: 1.2,
                fontWeight: 300,
                color: "var(--ink)",
                marginBottom: 12,
              }}
            >
              Look for a note in your inbox.
            </h3>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: 16,
                lineHeight: 1.6,
                color: "var(--ink-2)",
                maxWidth: "30ch",
                margin: "0 auto",
              }}
            >
              We&rsquo;ll be here when you&rsquo;re ready. The chair
              isn&rsquo;t going anywhere.
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes hearth-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes hearth-rise {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
