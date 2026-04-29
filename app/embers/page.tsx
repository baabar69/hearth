"use client";

import { useState } from "react";
import Link from "next/link";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

const CATEGORIES = [
  "All",
  "Heavy Things",
  "Family Stuff",
  "The In-Between",
  "Practical Ground",
  "Rituals",
];

const ESSAYS = [
  {
    title: "The Weight You Inherited",
    author: "Aruna Bhattacharya",
    authorSlug: "aruna-bhattacharya",
    category: "Heavy Things",
    readTime: "8 min",
    excerpt:
      "Your grandmother carried silence like currency. You learned to spend it the same way. This is about the weight that passes between generations without anyone agreeing to carry it.",
  },
  {
    title: "When Your Parents Call It Concern",
    author: "Rabia K.",
    authorSlug: "rabia-k",
    category: "Family Stuff",
    readTime: "6 min",
    excerpt:
      "There is a particular kind of love that arrives as pressure, as surveillance, as the Sunday call that leaves you flattened. This is about learning to receive it without losing yourself.",
  },
  {
    title: "The Grief That Arrives Ten Years Late",
    author: "Faisal M.",
    authorSlug: "faisal-m",
    category: "Heavy Things",
    readTime: "7 min",
    excerpt:
      "You thought you were fine. Then a song came on, or a smell, or someone else's father died, and the grief you skipped over found you anyway. It always does.",
  },
  {
    title: "The Sunday Before Everything Changes",
    author: "Priya S.",
    authorSlug: "priya-s",
    category: "The In-Between",
    readTime: "4 min",
    excerpt:
      "The last quiet day before a new job, a birth, a move, a diagnosis. The in-between that nobody photographs. This is about learning to stay in it instead of rushing through.",
  },
  {
    title: "What Your Silence Costs You",
    author: "Hassan A.",
    authorSlug: "hassan-a",
    category: "Practical Ground",
    readTime: "5 min",
    excerpt:
      "Silence is not neutral. It has a price, and most of us pay it for years before we see the bill. This is about the specific cost of not saying the thing that needs to be said.",
  },
  {
    title: "A Small Ritual for Hard Days",
    author: "Aruna Bhattacharya",
    authorSlug: "aruna-bhattacharya",
    category: "Rituals",
    readTime: "3 min",
    excerpt:
      "Not a cure. Not a solution. Just a practice for the days when everything feels like too much — something small you can do to mark the moment and move through it.",
  },
];

export default function EmbersPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered =
    activeCategory === "All"
      ? ESSAYS
      : ESSAYS.filter((e) => e.category === activeCategory);

  return (
    <>
      <SharedNav />

      {/* HERO */}
      <section style={{ padding: "80px 0 60px", borderBottom: "1px solid var(--rule-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            Embers
          </div>
          <h1 style={{ marginTop: 24, maxWidth: "16ch" }}>
            Embers. Small written wisdom. Free.
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
            Short pieces. Specific. Written by Keepers and contributing
            essayists. 3&ndash;8 minutes. Not generic wellness content.
          </p>
        </div>
      </section>

      {/* CATEGORY PILLS */}
      <section
        style={{
          padding: "32px 0",
          borderBottom: "1px solid var(--rule-2)",
          background: "var(--paper-2)",
        }}
      >
        <div className="wrap">
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "9px 18px",
                  borderRadius: 999,
                  border: `1px solid ${activeCategory === cat ? "var(--ember)" : "var(--rule)"}`,
                  background: activeCategory === cat ? "#FFF7EE" : "var(--paper)",
                  color: activeCategory === cat ? "var(--ember)" : "var(--ink-2)",
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ESSAY CARDS */}
      <section style={{ padding: "64px 0 100px" }}>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {filtered.map((essay) => (
              <div
                key={essay.title}
                style={{
                  background: "var(--paper-2)",
                  border: "1px solid var(--rule)",
                  borderRadius: 8,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  transition: "transform .25s ease, box-shadow .25s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-3px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 16px 40px -20px rgba(26,23,20,.18)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ember)",
                    }}
                  >
                    {essay.category}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                    }}
                  >
                    {essay.readTime} read
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 380,
                    fontSize: "clamp(20px, 1.8vw, 26px)",
                    lineHeight: 1.2,
                    color: "var(--ink)",
                  }}
                >
                  {essay.title}
                </h3>

                <p
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    color: "var(--ink-2)",
                    flex: 1,
                  }}
                >
                  {essay.excerpt}
                </p>

                <div
                  style={{
                    borderTop: "1px solid var(--rule-2)",
                    paddingTop: 14,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: "var(--ink-3)",
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {essay.author}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink)",
                      borderBottom: "1px solid var(--ink)",
                      paddingBottom: 2,
                    }}
                  >
                    Read &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "80px 0",
                color: "var(--ink-3)",
                fontFamily: "var(--serif)",
                fontSize: 22,
                fontStyle: "italic",
              }}
            >
              More Embers in this category coming soon.
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section
        style={{
          padding: "80px 0",
          background: "var(--paper-2)",
          borderTop: "1px solid var(--rule-2)",
          borderBottom: "1px solid var(--rule-2)",
        }}
      >
        <div className="wrap">
          <div
            style={{
              maxWidth: 560,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div className="eyebrow" style={{ justifyContent: "center", display: "flex", marginBottom: 18 }}>
              <span className="dot" />
              The Ember letter
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 3vw, 44px)",
                marginBottom: 16,
              }}
            >
              A new Ember, when it&rsquo;s lit.
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                color: "var(--ink-2)",
                marginBottom: 32,
              }}
            >
              A short email when a new Ember is published. Once a week.
              No marketing. No streaks. Unsubscribe in one click.
            </p>

            {subscribed ? (
              <div
                style={{
                  padding: "20px 28px",
                  background: "var(--paper)",
                  border: "1px solid var(--rule)",
                  borderRadius: 8,
                  fontFamily: "var(--serif)",
                  fontSize: 20,
                  fontStyle: "italic",
                  color: "var(--ink-2)",
                }}
              >
                You&rsquo;re on the list. We&rsquo;ll be in touch when the
                next Ember is lit.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubscribed(true);
                }}
                style={{ display: "flex", gap: 8 }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  style={{
                    flex: 1,
                    padding: "13px 16px",
                    border: "1px solid var(--rule)",
                    borderRadius: 999,
                    fontSize: 15,
                    background: "var(--paper)",
                    color: "var(--ink)",
                    outline: "none",
                    fontFamily: "var(--sans)",
                  }}
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MEMBER CTA */}
      <section className="bigcta" style={{ padding: "100px 0", textAlign: "center" }}>
        <div className="wrap">
          <div
            className="eyebrow"
            style={{ color: "#FFE0B0", justifyContent: "center", display: "flex" }}
          >
            <span className="dot" style={{ background: "#FFE0B0" }} />
            Embers are free. The Keeper is next.
          </div>
          <h2 style={{ marginTop: 18 }}>
            Ready for the long talk?
          </h2>
          <p
            style={{
              marginTop: 18,
              color: "#FFE0B0",
              fontSize: 17,
              lineHeight: 1.6,
            }}
          >
            Embers are open to everyone. A Keeper is yours with a membership.
          </p>
          <div className="cta-row" style={{ marginTop: 40 }}>
            <a href="/#cta" className="btn btn-primary btn-lg">
              Pull up a chair <span className="arr">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
