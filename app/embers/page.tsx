"use client";

import { useState } from "react";
import Link from "next/link";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

const CATEGORIES = [
  "All",
  "Grief",
  "Family",
  "Diaspora",
  "Identity",
  "Intimacy",
];

const ESSAYS = [
  {
    slug: "the-weight-you-inherited",
    title: "The Weight You Inherited",
    author: "Aruna Bhattacharya",
    category: "Family",
    readTime: "7 min",
    excerpt:
      "My grandmother kept her grief in a tin box on the highest shelf of the kitchen, and we all learned to look up at it without asking. I am forty-two now, and only this year did I understand what I had been carrying.",
  },
  {
    slug: "on-saying-no-to-your-mother",
    title: "On Saying No to Your Mother",
    author: "Rabia Khan",
    category: "Family",
    readTime: "6 min",
    excerpt:
      "I said no to my mother on a Tuesday afternoon, over the phone, about a wedding I did not want to attend. I had practiced the sentence for weeks. It came out smaller than I had expected.",
  },
  {
    slug: "late-grief",
    title: "Late Grief",
    author: "Faisal Mahmood",
    category: "Grief",
    readTime: "6 min",
    excerpt:
      "My father died in 2014. I gave the eulogy in two languages. I did not cry. I went back to work on a Monday. The grief found me anyway, ten years late, in the spice aisle of a grocery store in Houston.",
  },
  {
    slug: "code-switch-fatigue",
    title: "Code-Switch Fatigue",
    author: "Devika Iyer",
    category: "Diaspora",
    readTime: "7 min",
    excerpt:
      "I have three voices. The work voice, the family voice, the friend voice. I switch between them so fast I no longer know which one is the original. I am tired in a way that sleep does not fix.",
  },
  {
    slug: "the-bedroom-got-quiet",
    title: "The Bedroom Got Quiet",
    author: "Saira Ahmed",
    category: "Intimacy",
    readTime: "7 min",
    excerpt:
      "We did not fight. We did not stop being kind. The bedroom just got quiet in a way I did not have language for, and I lived inside the quiet for almost three years before I admitted it to anyone.",
  },
  {
    slug: "the-year-i-stopped-performing",
    title: "The Year I Stopped Performing",
    author: "Meera Krishnan",
    category: "Identity",
    readTime: "7 min",
    excerpt:
      "I had been the good daughter, the good employee, the good friend, the good wife. I was thirty-six when I noticed, in a parking lot, that I had not asked myself what I wanted in maybe a decade. This is what happened next.",
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
              <Link
                key={essay.slug}
                href={`/embers/${essay.slug}`}
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
                  textDecoration: "none",
                  color: "inherit",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(-3px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 16px 40px -20px rgba(26,23,20,.18)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "";
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
              </Link>
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
