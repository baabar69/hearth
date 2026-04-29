"use client";

import { useState } from "react";
import Link from "next/link";
import SharedNav from "../components/SharedNav";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <SharedNav />

      <main
        style={{
          minHeight: "calc(100vh - 80px)",
          background: "var(--paper)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 24px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 440,
            background: "white",
            border: "1px solid var(--rule)",
            borderRadius: 12,
            padding: "48px 40px",
            boxShadow: "0 30px 60px -40px rgba(26,23,20,0.12)",
          }}
        >
          {!submitted ? (
            <>
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
                Members
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
                Welcome back.
              </h1>
              <p
                style={{
                  color: "var(--ink-2)",
                  fontSize: 15,
                  lineHeight: 1.6,
                  marginBottom: 28,
                }}
              >
                Enter your email and we&rsquo;ll send you a sign-in link. No
                passwords, no friction.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    fontFamily: "var(--mono)",
                    fontSize: 14,
                    border: "1.5px solid var(--rule)",
                    borderRadius: 8,
                    background: "var(--paper)",
                    color: "var(--ink)",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Send me a sign-in link <span className="arr">&rarr;</span>
                </button>
              </form>

              <div
                style={{
                  marginTop: 32,
                  paddingTop: 24,
                  borderTop: "1px solid var(--rule-2)",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    color: "var(--ink-3)",
                    fontSize: 14,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Not a member yet?{" "}
                  <Link
                    href="/intake"
                    style={{ color: "var(--ember)", textDecoration: "underline" }}
                  >
                    Begin the First Sit
                  </Link>
                </p>
              </div>
            </>
          ) : (
            <div style={{ textAlign: "center" }}>
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
                  fontSize: 22,
                  margin: "0 auto 24px",
                }}
              >
                &#x2709;&#xfe0e;
              </div>
              <h1
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 28,
                  lineHeight: 1.2,
                  color: "var(--ink)",
                  marginBottom: 12,
                  fontWeight: 300,
                }}
              >
                Check your email.
              </h1>
              <p
                style={{
                  color: "var(--ink-2)",
                  fontSize: 15,
                  lineHeight: 1.6,
                  margin: "0 auto",
                  maxWidth: "32ch",
                }}
              >
                We sent a sign-in link to <strong>{email}</strong>. It expires
                in 15 minutes.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setEmail("");
                }}
                style={{
                  marginTop: 24,
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  letterSpacing: "0.06em",
                  color: "var(--ink-3)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Use a different email
              </button>
            </div>
          )}

          <p
            style={{
              marginTop: 28,
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: "0.06em",
              color: "var(--ink-3)",
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            By signing in you agree to our{" "}
            <Link href="/terms" style={{ color: "var(--ember)" }}>
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" style={{ color: "var(--ember)" }}>
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>
    </>
  );
}
