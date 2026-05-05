import Link from "next/link";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

export const metadata = {
  title: "Accessibility · Hearth",
  description:
    "How Hearth approaches accessibility. WCAG 2.1 AA commitment, what we've built, what we're still working on, and how to flag a barrier.",
};

const COMMITMENTS = [
  {
    title: "WCAG 2.1 AA",
    body: "We aim to meet Web Content Accessibility Guidelines 2.1 at the AA level across the marketing site and the member experience. We test against this standard and treat failures as bugs.",
  },
  {
    title: "Keyboard navigable",
    body: "Every interactive element is reachable by keyboard. Forms, the intake flow, the Long Talk thread, video Sits — all of it works without a mouse.",
  },
  {
    title: "Screen-reader friendly",
    body: "Pages use semantic HTML. Images have alt text or are marked decorative. Forms have labelled inputs. Dynamic content announces itself.",
  },
  {
    title: "Captions on video Sits",
    body: "Live captions are available on every video Sit, in English and our supported languages. Members can request a transcript after a session.",
  },
  {
    title: "Voice notes alongside text",
    body: "Long Talk supports voice notes and text — pick whichever modality reaches the part of you that needs reaching. We're working on automatic transcripts for voice notes.",
  },
  {
    title: "Adjustable text and contrast",
    body: "Text scales without breaking layout. Colour contrast ratios meet AA across primary content. We avoid colour as the only indicator of meaning.",
  },
];

const LIMITS = [
  "Some Embers essays haven't been audited for screen-reader flow yet — we're working through the archive.",
  "Voice-note auto-transcription is in beta. If you need a transcript and it's not generated, email us and we'll provide one within 24 hours.",
  "Group Circles use a third-party video provider; we're verifying their AA compliance and pushing improvements where they fall short.",
  "Cognitive accessibility is harder to standardise — we welcome feedback on copy density, decision flows, and intake length.",
];

export default function AccessibilityPage() {
  return (
    <>
      <SharedNav />

      {/* HERO */}
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            Accessibility
          </div>
          <h1 style={{ marginTop: 24, maxWidth: "16ch" }}>
            Built so the room is{" "}
            <span className="ember-word">open to everyone.</span>
          </h1>
          <p
            style={{
              maxWidth: "62ch",
              marginTop: 28,
              fontSize: 18,
              lineHeight: 1.65,
              color: "var(--ink-2)",
            }}
          >
            Hearth is a place to be heard. That commitment doesn&rsquo;t hold
            if the door is hard to open. Here&rsquo;s what we&rsquo;ve built,
            what we&rsquo;re still working on, and how to tell us when something
            gets in the way.
          </p>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                What we commit to
              </div>
              <h2 style={{ marginTop: 18 }}>
                The standard we{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  hold ourselves to.
                </span>
              </h2>
            </div>
            <p className="lede">
              These aren&rsquo;t aspirations. They&rsquo;re working tests in our
              build pipeline and review checklists in our design process.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 18,
            }}
            className="acc-grid"
          >
            {COMMITMENTS.map((c, i) => (
              <div
                key={i}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--rule)",
                  borderRadius: 10,
                  padding: "26px 28px 28px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 20,
                    lineHeight: 1.25,
                    fontWeight: 380,
                    color: "var(--ink)",
                    marginBottom: 10,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    color: "var(--ink-2)",
                    fontSize: 15,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKING ON */}
      <section>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: 64,
              alignItems: "start",
            }}
            className="acc-row"
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--ember)",
                  marginBottom: 14,
                }}
              >
                Honest scope
              </p>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.15 }}>
                What we&rsquo;re still{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  working on.
                </span>
              </h2>
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {LIMITS.map((l, i) => (
                <li
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: 14,
                    alignItems: "start",
                    paddingBottom: 14,
                    borderBottom: i === LIMITS.length - 1 ? "none" : "1px solid var(--rule-2)",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--ember)",
                      marginTop: 9,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 16,
                      lineHeight: 1.6,
                      color: "var(--ink-2)",
                    }}
                  >
                    {l}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="wrap">
          <div style={{ maxWidth: 760, marginInline: "auto", textAlign: "center" }}>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#FFE0B0",
                marginBottom: 18,
              }}
            >
              Found a barrier?
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.15,
                color: "var(--paper)",
                marginBottom: 18,
              }}
            >
              Tell us. We&rsquo;ll fix it.
            </h2>
            <p
              style={{
                color: "rgba(242,237,229,0.7)",
                fontSize: 16.5,
                lineHeight: 1.7,
                marginBottom: 28,
                maxWidth: "48ch",
                marginInline: "auto",
              }}
            >
              If something on Hearth gets in the way of you using it, please
              email{" "}
              <a
                href="mailto:access@dearhearth.com"
                style={{ color: "#FFB74D", textDecoration: "underline" }}
              >
                access@dearhearth.com
              </a>
              . Tell us what you ran into and what would help. We respond
              within two business days, and we treat accessibility issues as
              bugs &mdash; not feature requests.
            </p>
            <p
              style={{
                color: "rgba(242,237,229,0.5)",
                fontSize: 13,
                lineHeight: 1.6,
                marginTop: 28,
              }}
            >
              Last reviewed: April 2026. We audit this page quarterly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="wrap">
          <div
            style={{
              padding: "48px 40px",
              background: "var(--paper-2)",
              borderRadius: 12,
              textAlign: "center",
              border: "1px solid var(--rule-2)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: 22,
                lineHeight: 1.4,
                color: "var(--ink)",
                margin: 0,
                maxWidth: "44ch",
                marginInline: "auto",
              }}
            >
              The chair is here. The room is open. Please tell us if it
              isn&rsquo;t.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 28, flexWrap: "wrap" }}>
              <Link href="/intake" className="btn btn-primary">
                Begin the First Sit <span className="arr">&rarr;</span>
              </Link>
              <Link href="/trust" className="btn btn-ghost">
                Trust & security
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .acc-grid { grid-template-columns: 1fr !important; }
          .acc-row { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>

      <SharedFooter />
    </>
  );
}
