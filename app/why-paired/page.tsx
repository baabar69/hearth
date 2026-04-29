import Link from "next/link";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

export const metadata = {
  title: "Why paired. Why long term. · Hearth",
  description:
    "The whole peer-support category was built around drop-in chats and 12-week programs. Hearth is the opposite — paired with one Keeper, for the long term, on purpose.",
};

const PAIRED_REASONS = [
  {
    n: "01",
    title: "The first three Sits aren't really the work.",
    body: "They're the part where someone learns who you are — what you mean by 'my mother,' which cousin you're talking about, why the wedding is a problem and not a celebration. With a different listener every time, you'd start over every time. The slow part is where the work begins.",
  },
  {
    n: "02",
    title: "Patterns repeat. The same person needs to see them.",
    body: "Most of what people carry isn't one event — it's a pattern. The same fight with the same parent. The career indecision that comes back every spring. The grief that resurfaces on the third Diwali. A Keeper who has heard you describe it three times will catch the fourth before you do.",
  },
  {
    n: "03",
    title: "Safety isn't built in a single conversation.",
    body: "The things that actually need saying out loud — the shame, the doubt, the thing about your marriage you've never told anyone — only come out when you trust the room. That trust takes weeks to build. Drop-in models reset the room every time. Hearth doesn't.",
  },
  {
    n: "04",
    title: "A long view is what changes anything.",
    body: "Therapy works partly because the therapist is still there in month nine. Friendships work because the friend is still there in year five. The thing that helps people change is continuity, not insight. Insight without continuity is a podcast.",
  },
];

const LONG_TERM_REASONS = [
  {
    n: "01",
    title: "Most weight isn't on a 12-week timeline.",
    body: "Group programs end. The cohort moves on. The thing you were carrying when you started the program is often still there at week 13. Hearth is built for the months and years where the same shape of life keeps showing up.",
  },
  {
    n: "02",
    title: "Seasons need different things from the same relationship.",
    body: "The Keeper who held you through a parent's illness is the same Keeper who holds you through the wedding three years later. The continuity is the value — not because they remember the dates, but because they know how you carry hard things, and they show up differently for the next one.",
  },
  {
    n: "03",
    title: "We don't optimise for completion.",
    body: "There's no progress bar, no streak, no graduation. Some members stay for six months. Some stay for years. We don't push you out and we don't pretend the work is done before it is.",
  },
  {
    n: "04",
    title: "If a season doesn't need us, you can pause.",
    body: "Cancel any time. Come back any time. Your Keeper holds the spot. The relationship doesn't end because the subscription paused — and if your Keeper isn't right anymore, we re-pair you, by hand.",
  },
];

const ALTERNATIVES = [
  {
    name: "Drop-in peer chat",
    shape: "Different listener each time. Anonymous. Free or freemium.",
    when: "Good for a one-off vent. Not built for the recurring weight.",
  },
  {
    name: "AI companion",
    shape: "Always on. Remembers things. Cheap. Not a person.",
    when: "Good for low-stakes conversation. Doesn't carry the weight only a human can.",
  },
  {
    name: "12-week group programs",
    shape: "Cohort-based. Curriculum-led. Time-bound. Founder-facilitated.",
    when: "Good for a specific transition. Ends, then you start again.",
  },
  {
    name: "Therapy",
    shape: "Licensed clinician. Diagnostic and treatment scope. $400–1,200/mo.",
    when: "Good for clinical conditions. Not built for the slow weight between sessions.",
  },
];

export default function WhyPairedPage() {
  return (
    <>
      <SharedNav />

      {/* HERO */}
      <section className="hero" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            Why paired. Why long term.
          </div>
          <h1 style={{ marginTop: 24, maxWidth: "16ch" }}>
            One person.{" "}
            <span className="ember-word">For as long as it takes.</span>
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
            The whole peer-support category was built around drop-in chats,
            anonymous listeners, AI companions, and 12-week programs. Hearth
            is the opposite. We pair you with one Keeper, by hand, and we
            don&rsquo;t set a finish line. Here&rsquo;s why that choice
            isn&rsquo;t a feature &mdash; it is the product.
          </p>
        </div>
      </section>

      {/* WHY PAIRED */}
      <section style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Why paired
              </div>
              <h2 style={{ marginTop: 18 }}>
                Drop-in models{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  reset the room
                </span>{" "}
                every time.
              </h2>
            </div>
            <p className="lede">
              Anonymous chat with a different volunteer each session is good
              for venting. It is bad for the slow work that the recurring
              weight of a life requires. Here&rsquo;s the difference,
              concretely.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 18,
            }}
            className="why-grid"
          >
            {PAIRED_REASONS.map((r) => (
              <ReasonCard key={r.n} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY LONG TERM */}
      <section>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Why long term
              </div>
              <h2 style={{ marginTop: 18 }}>
                Most things don&rsquo;t resolve{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  in twelve weeks.
                </span>
              </h2>
            </div>
            <p className="lede">
              The grief that arrives ten years late. The career indecision
              that comes back every spring. The same fight with the same
              parent. These need a long view, not a programme.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 18,
            }}
            className="why-grid"
          >
            {LONG_TERM_REASONS.map((r) => (
              <ReasonCard key={r.n} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* WHAT HEARTH ISN'T */}
      <section style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Where Hearth fits
              </div>
              <h2 style={{ marginTop: 18 }}>
                Honest about{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  the shape of the category.
                </span>
              </h2>
            </div>
            <p className="lede">
              We&rsquo;d rather show you the whole landscape than pretend
              we&rsquo;re the only chair in the room.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {ALTERNATIVES.map((a, i) => (
              <div
                key={i}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--rule)",
                  borderRadius: 10,
                  padding: "22px 28px",
                  display: "grid",
                  gridTemplateColumns: "200px 1fr 1fr",
                  gap: 24,
                  alignItems: "center",
                }}
                className="why-alt-row"
              >
                <span
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 19,
                    fontWeight: 380,
                    color: "var(--ink)",
                  }}
                >
                  {a.name}
                </span>
                <span
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.55,
                    color: "var(--ink-2)",
                  }}
                >
                  {a.shape}
                </span>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    letterSpacing: "0.04em",
                    lineHeight: 1.5,
                    color: "var(--ink-3)",
                  }}
                >
                  {a.when}
                </span>
              </div>
            ))}
            <div
              style={{
                background: "var(--ink)",
                color: "var(--paper)",
                borderRadius: 10,
                padding: "26px 28px",
                display: "grid",
                gridTemplateColumns: "200px 1fr 1fr",
                gap: 24,
                alignItems: "center",
              }}
              className="why-alt-row"
            >
              <span
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  fontStyle: "italic",
                  fontWeight: 380,
                  color: "#FFB74D",
                }}
              >
                Hearth
              </span>
              <span
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.55,
                  color: "rgba(242,237,229,0.88)",
                }}
              >
                One human Keeper, paired by hand, the same person every Sit, for as long as it takes.
              </span>
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  letterSpacing: "0.04em",
                  lineHeight: 1.5,
                  color: "rgba(242,237,229,0.6)",
                }}
              >
                Built for the months and years the other models don&rsquo;t reach.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="wrap">
          <div
            style={{
              padding: "56px 40px",
              background: "var(--paper)",
              border: "1px solid var(--rule)",
              borderRadius: 16,
              textAlign: "center",
            }}
          >
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
              The First Sit takes about 12 minutes
            </p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15, marginBottom: 18 }}>
              Pull up a chair.{" "}
              <span className="serif-i" style={{ color: "var(--ember)" }}>
                Stay as long as you want.
              </span>
            </h2>
            <p style={{ color: "var(--ink-2)", fontSize: 16, lineHeight: 1.6, maxWidth: "44ch", marginInline: "auto", marginBottom: 28 }}>
              We match you to a Keeper by hand within 72 hours. You stay
              paired for as long as the relationship serves you. No streaks,
              no graduation, no exit interview.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/intake" className="btn btn-primary btn-lg">
                Begin the First Sit <span className="arr">&rarr;</span>
              </Link>
              <Link href="/keepers" className="btn btn-ghost btn-lg">
                Meet the Keepers
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .why-alt-row { grid-template-columns: 1fr !important; gap: 8px !important; padding: 20px 22px !important; }
          .why-alt-row > span:nth-child(2) { padding-top: 4px; }
        }
      `}</style>

      <SharedFooter />
    </>
  );
}

function ReasonCard({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div
      style={{
        background: "var(--paper)",
        border: "1px solid var(--rule)",
        borderRadius: 10,
        padding: "28px 30px 30px",
      }}
    >
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: 12,
          letterSpacing: "0.12em",
          color: "var(--ember)",
          marginBottom: 10,
          display: "block",
        }}
      >
        {n}
      </span>
      <h3
        style={{
          fontFamily: "var(--serif)",
          fontSize: 21,
          lineHeight: 1.25,
          fontWeight: 380,
          color: "var(--ink)",
          marginBottom: 12,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: "var(--ink-2)",
          fontSize: 15.5,
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {body}
      </p>
    </div>
  );
}
