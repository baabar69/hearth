"use client";

import { useState } from "react";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

export default function ForTherapistsPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <>
        <SharedNav />
        <section style={{ padding: "120px 0", textAlign: "center" }}>
          <div className="wrap">
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "var(--ember)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 28px",
                fontSize: 28,
                color: "#FFF6E8",
              }}
            >
              &#10038;
            </div>
            <h1 style={{ fontSize: "clamp(40px, 5vw, 72px)", marginBottom: 18 }}>
              Application received.
            </h1>
            <p
              style={{
                fontSize: 20,
                lineHeight: 1.6,
                color: "var(--ink-2)",
                maxWidth: "44ch",
                margin: "0 auto",
              }}
            >
              We review every Bridge application personally. We&rsquo;ll be
              in touch within two weeks to schedule a conversation.
            </p>
          </div>
        </section>
        <SharedFooter />
      </>
    );
  }

  return (
    <>
      <SharedNav />

      {/* HERO */}
      <section style={{ padding: "80px 0 60px", borderBottom: "1px solid var(--rule-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            Join The Bridge
          </div>
          <h1 style={{ marginTop: 24, maxWidth: "16ch" }}>
            Build The Bridge with us.
          </h1>
          <p
            style={{
              marginTop: 28,
              color: "var(--ink-2)",
              fontSize: 20,
              lineHeight: 1.55,
              maxWidth: "52ch",
            }}
          >
            A steady pipeline of pre-screened, culturally matched clients.
            You keep your practice. We protect your caseload. The referrals
            are warm, not a directory dump.
          </p>
        </div>
      </section>

      {/* WHAT BRIDGE THERAPISTS RECEIVE */}
      <section
        style={{
          padding: "80px 0",
          background: "var(--paper-2)",
          borderBottom: "1px solid var(--rule-2)",
        }}
      >
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: 64,
            }}
          >
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}>
                <span className="dot" />
                What you receive
              </div>
              <h2 style={{ fontSize: "clamp(28px, 3vw, 44px)" }}>
                Clients who are already doing the work.
              </h2>
            </div>
            <div>
              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: "var(--ink-2)",
                  marginBottom: 28,
                }}
              >
                Bridge therapists receive referrals that are fundamentally
                different from a standard directory. Members who reach The
                Bridge have been working with a Keeper — they are not coming
                to you cold. They have already done the work of naming what
                they&rsquo;re carrying.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 0 }}>
                {[
                  "Pre-screened members — Hearth handles intake, pairing, and ongoing support",
                  "Culturally matched referrals — members whose cultural context aligns with yours",
                  "Warm handoffs from their Keeper — you get context, with member consent",
                  "No obligation to take every referral — you control your caseload",
                  "You keep your own fee structure, billing, and practice autonomy",
                  "Coordination with Hearth Keepers when appropriate — the client keeps both",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      padding: "18px 0",
                      borderTop: "1px solid var(--rule-2)",
                      display: "grid",
                      gridTemplateColumns: "24px 1fr",
                      gap: 16,
                      fontSize: 16,
                      color: "var(--ink-2)",
                      lineHeight: 1.55,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--ember)",
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        letterSpacing: "0.14em",
                        paddingTop: 3,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: 64,
            }}
          >
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}>
                <span className="dot" />
                Requirements
              </div>
              <h2 style={{ fontSize: "clamp(28px, 3vw, 44px)" }}>
                Who we&rsquo;re looking for.
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
              }}
            >
              {[
                {
                  label: "License",
                  body: "Active, in-good-standing clinical license in your jurisdiction — LCSW, LMFT, LPC, PhD, PsyD, registered psychotherapist, clinical psychologist, or international equivalent.",
                },
                {
                  label: "Cultural fluency",
                  body: "Demonstrated clinical experience with members navigating life between cultures, family pressure, and intergenerational dynamics. Heritage is a plus, not a requirement.",
                },
                {
                  label: "Active practice",
                  body: "Currently accepting new clients. Not on a waitlist of 6+ months. Caseload capacity matters.",
                },
                {
                  label: "Alignment",
                  body: "Comfort with the peer support model — not competing with it, coordinating with it.",
                },
              ].map((req, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--paper-2)",
                    border: "1px solid var(--rule)",
                    borderRadius: 8,
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ember)",
                      marginBottom: 10,
                    }}
                  >
                    {req.label}
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)" }}>
                    {req.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section style={{ padding: "80px 0 100px" }}>
        <div className="wrap">
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              Apply to The Bridge
            </div>
            <h2 style={{ fontSize: "clamp(28px, 3vw, 44px)", marginBottom: 12 }}>
              Join the network.
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                color: "var(--ink-2)",
                marginBottom: 40,
              }}
            >
              We review every application personally. If you&rsquo;re a
              match, we&rsquo;ll schedule a 30-minute conversation.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              style={{ display: "grid", gap: 24 }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                      marginBottom: 8,
                    }}
                  >
                    Full name
                  </label>
                  <input
                    required
                    type="text"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      border: "1px solid var(--rule)",
                      borderRadius: 6,
                      fontSize: 15,
                      background: "var(--paper)",
                      color: "var(--ink)",
                      fontFamily: "var(--sans)",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                      marginBottom: 8,
                    }}
                  >
                    License type
                  </label>
                  <select
                    required
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      border: "1px solid var(--rule)",
                      borderRadius: 6,
                      fontSize: 15,
                      background: "var(--paper)",
                      color: "var(--ink)",
                      fontFamily: "var(--sans)",
                    }}
                  >
                    <option value="">Select license</option>
                    <option>LCSW</option>
                    <option>LMFT</option>
                    <option>LPC</option>
                    <option>PhD</option>
                    <option>PsyD</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                      marginBottom: 8,
                    }}
                  >
                    Licensed state(s) / province(s)
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. NY, NJ, ON"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      border: "1px solid var(--rule)",
                      borderRadius: 6,
                      fontSize: 15,
                      background: "var(--paper)",
                      color: "var(--ink)",
                      fontFamily: "var(--sans)",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                      marginBottom: 8,
                    }}
                  >
                    Languages spoken
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Hindi, English, Urdu"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      border: "1px solid var(--rule)",
                      borderRadius: 6,
                      fontSize: 15,
                      background: "var(--paper)",
                      color: "var(--ink)",
                      fontFamily: "var(--sans)",
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ink-3)",
                    marginBottom: 8,
                  }}
                >
                  Headway/Alma profile URL (optional)
                </label>
                <input
                  type="url"
                  placeholder="https://"
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    border: "1px solid var(--rule)",
                    borderRadius: 6,
                    fontSize: 15,
                    background: "var(--paper)",
                    color: "var(--ink)",
                    fontFamily: "var(--sans)",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ink-3)",
                    marginBottom: 8,
                  }}
                >
                  Cultural background and community experience
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your cultural background and your experience working with members navigating life between cultures, family pressure, or intergenerational dynamics."
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    border: "1px solid var(--rule)",
                    borderRadius: 6,
                    fontSize: 15,
                    background: "var(--paper)",
                    color: "var(--ink)",
                    fontFamily: "var(--sans)",
                    resize: "vertical",
                    lineHeight: 1.6,
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ink-3)",
                    marginBottom: 8,
                  }}
                >
                  Current caseload status
                </label>
                <select
                  required
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    border: "1px solid var(--rule)",
                    borderRadius: 6,
                    fontSize: 15,
                    background: "var(--paper)",
                    color: "var(--ink)",
                    fontFamily: "var(--sans)",
                  }}
                >
                  <option value="">Select</option>
                  <option>Actively accepting new clients (can start within 2 weeks)</option>
                  <option>Limited availability (1–2 spots, 4–6 week wait)</option>
                  <option>Waitlist open (6+ weeks, planning ahead)</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  justifyContent: "center",
                  padding: "16px 28px",
                  fontSize: 15,
                }}
              >
                Apply to The Bridge <span className="arr">&rarr;</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
