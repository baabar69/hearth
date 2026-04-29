"use client";

import { useState } from "react";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

export default function ForKeepersPage() {
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
              We read every application carefully. We&rsquo;ll be in touch within
              two weeks. Thank you for the work you already do.
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
            Become a Keeper
          </div>
          <h1 style={{ marginTop: 24, maxWidth: "18ch" }}>
            Are you the person someone needs?
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
            Not a coach. Not a clinician. The person people call at midnight
            when something doesn&rsquo;t make sense yet.
          </p>
        </div>
      </section>

      {/* WHO KEEPERS ARE */}
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
                The Keeper archetype
              </div>
              <h2 style={{ fontSize: "clamp(28px, 3vw, 44px)" }}>
                The elder. The trusted aunt. The village wise-person.
              </h2>
            </div>
            <div
              style={{ fontSize: 18, lineHeight: 1.7, color: "var(--ink-2)" }}
            >
              <p>
                Keepers are people who already do this work — informally,
                unpaid, and without a title. The neighbor everyone sends
                their adult children to. The retired professional people
                call when something heavy happens. The friend who knows
                how to hold a long story without trying to fix it.
              </p>
              <p style={{ marginTop: 18 }}>
                Hearth trains you, gives you the structure and the tools,
                pays you as a professional, and connects you with members
                whose life context matches yours. You bring the presence,
                the cultural fluency, and the particular patience that
                cannot be trained from scratch.
              </p>
              <p style={{ marginTop: 18 }}>
                Keepers are not therapists. They do not diagnose. They do
                not prescribe. They hold space, notice patterns, and — when
                clinical care is the right tool — they know how to build
                a bridge instead of a wall. Less than 8% of Keeper
                applicants are accepted. We are looking for the real thing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT KEEPERS DO */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 40 }}>
            <span className="dot" />
            What Keepers do
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 0,
              border: "1px solid var(--rule)",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            {[
              "Hold weekly or biweekly Sits with matched members — 35–60 minutes each",
              "Maintain The Long Talk: respond to async messages within the agreed window",
              "Write a Friday Reflection every week — a short note of what you noticed",
              "Participate in monthly peer supervision with other Keepers",
              "Maintain Hearth's scope — knowing when to refer to The Bridge and doing it warmly",
              "Complete Hearth's 120-hour initial training program before your first member",
              "Maintain cultural fluency in the themes and communities you work with",
              "Attend quarterly community calls with the Hearth team",
              "Support your members through the pairing process and across tier changes",
              "Complete annual recertification with updated training on crisis protocol",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "24px 28px",
                  borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none",
                  borderBottom: i < 8 ? "1px solid var(--rule)" : "none",
                  display: "grid",
                  gridTemplateColumns: "24px 1fr",
                  gap: 16,
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: "var(--ink-2)",
                  background: i % 4 === 1 || i % 4 === 2 ? "var(--paper-2)" : "var(--paper)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    color: "var(--ember)",
                    paddingTop: 2,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT KEEPERS ARE PAID */}
      <section
        style={{
          padding: "80px 0",
          background: "var(--ink)",
          color: "var(--paper)",
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
              <div
                className="eyebrow"
                style={{ color: "#C9B894", marginBottom: 18 }}
              >
                <span className="dot" />
                Keeper pay
              </div>
              <h2
                style={{
                  fontSize: "clamp(28px, 3vw, 44px)",
                  color: "var(--paper)",
                }}
              >
                Paid as a professional. Not a volunteer.
              </h2>
            </div>
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 24,
                  marginBottom: 32,
                }}
              >
                {[
                  { label: "Entry Keeper", rate: "$12–$15 / Sit" },
                  { label: "Senior Keeper", rate: "$16–$20 / Sit" },
                ].map((tier) => (
                  <div
                    key={tier.label}
                    style={{
                      background: "#211D19",
                      border: "1px solid #3A332C",
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
                        color: "#C9B894",
                        marginBottom: 12,
                      }}
                    >
                      {tier.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: 28,
                        fontWeight: 380,
                        color: "var(--paper)",
                      }}
                    >
                      {tier.rate}
                    </div>
                  </div>
                ))}
              </div>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "#D8C8AA",
                }}
              >
                60% of every membership fee goes directly to the Keeper.
                Keepers are paid biweekly in USD via direct deposit. Pay
                increases with seniority, member retention, and peer
                review. This is meaningful work and meaningful pay — not
                a side gig, not a volunteer program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section style={{ padding: "80px 0 100px" }}>
        <div className="wrap">
          <div
            style={{
              maxWidth: 680,
              margin: "0 auto",
            }}
          >
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              Apply to be a Keeper
            </div>
            <h2 style={{ fontSize: "clamp(28px, 3vw, 44px)", marginBottom: 12 }}>
              Less than 8% accepted. We mean that.
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                color: "var(--ink-2)",
                marginBottom: 40,
              }}
            >
              The application takes 20–30 minutes. The essay questions are
              real questions — we read every answer carefully. If you&rsquo;re
              the person, we&rsquo;ll know.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              style={{ display: "grid", gap: 28 }}
            >
              {/* Basic info */}
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
              >
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
                    Email
                  </label>
                  <input
                    required
                    type="email"
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

              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
              >
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
                    Location (city, country)
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Toronto, Canada"
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
                    placeholder="e.g. Urdu, English, Punjabi"
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
                  Brief background (2–3 sentences)
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Who you are, what you do, where you come from."
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

              {/* Essay 1 */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--serif)",
                    fontSize: 18,
                    fontWeight: 380,
                    color: "var(--ink)",
                    marginBottom: 8,
                  }}
                >
                  Who has informally turned to you, and for what?
                </label>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--ink-3)",
                    marginBottom: 12,
                    lineHeight: 1.5,
                  }}
                >
                  Be specific. Name the relationship, the situation, the kind of
                  support they were looking for and what you gave them.
                </p>
                <textarea
                  required
                  rows={6}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    border: "1px solid var(--rule)",
                    borderRadius: 6,
                    fontSize: 15,
                    background: "var(--paper)",
                    color: "var(--ink)",
                    fontFamily: "var(--serif)",
                    resize: "vertical",
                    lineHeight: 1.7,
                  }}
                />
              </div>

              {/* Essay 2 */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--serif)",
                    fontSize: 18,
                    fontWeight: 380,
                    color: "var(--ink)",
                    marginBottom: 8,
                  }}
                >
                  Describe a moment when you sat with someone in a hard moment.
                  What did you do?
                </label>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--ink-3)",
                    marginBottom: 12,
                    lineHeight: 1.5,
                  }}
                >
                  Not what you said. What you did — how you held the space,
                  what you chose not to say, what happened as a result.
                </p>
                <textarea
                  required
                  rows={6}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    border: "1px solid var(--rule)",
                    borderRadius: 6,
                    fontSize: 15,
                    background: "var(--paper)",
                    color: "var(--ink)",
                    fontFamily: "var(--serif)",
                    resize: "vertical",
                    lineHeight: 1.7,
                  }}
                />
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
                Apply to be a Keeper <span className="arr">&rarr;</span>
              </button>
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--ink-3)",
                  textAlign: "center",
                }}
              >
                We read every application. Response within 2 weeks.
              </p>
            </form>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
