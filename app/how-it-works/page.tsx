import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

export const metadata = {
  title: "How it works · Hearth",
  description:
    "No mystery. No fine print. Here is what happens, in order, from the day you sign up to your Keeper.",
};

export default function HowItWorks() {
  return (
    <>
      <SharedNav />

      {/* HERO */}
      <section className="hero" style={{ paddingBottom: 80 }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            How it works
          </div>
          <h1 style={{ marginTop: 24, maxWidth: "18ch" }}>
            How a week with your Keeper actually works.
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
            No mystery. No fine print. Here is what happens, in order, from
            the day you sign up.
          </p>
        </div>
      </section>

      {/* 4 STEPS */}
      <section
        style={{
          background: "var(--paper-2)",
          borderTop: "1px solid var(--rule-2)",
          borderBottom: "1px solid var(--rule-2)",
          padding: "100px 0",
        }}
      >
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 48 }}>
            <span className="dot" />
            The four steps
          </div>

          {/* Step 1 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr",
              gap: 48,
              paddingBottom: 64,
              borderBottom: "1px solid var(--rule)",
              marginBottom: 64,
              alignItems: "start",
            }}
          >
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 72,
                fontWeight: 400,
                color: "var(--rule)",
                lineHeight: 1,
                letterSpacing: "-0.04em",
              }}
            >
              01
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>
                Intake &middot; 12 minutes
              </div>
              <h2 style={{ fontSize: "clamp(32px,3.5vw,52px)", marginBottom: 24 }}>
                The First Sit
              </h2>
              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.65,
                  color: "var(--ink-2)",
                  maxWidth: "58ch",
                }}
              >
                Before we pair you, we sit with you for about 12 minutes. You
                tell us what you&rsquo;re carrying — the specific weight that
                brought you here. We run three short screeners: one for what
                you&rsquo;re navigating, one for your cultural context, and
                one to make sure Hearth is actually the right fit. If something
                clinical comes up, we tell you plainly and point you toward The
                Bridge instead.
              </p>
              <p
                style={{
                  marginTop: 18,
                  fontSize: 18,
                  lineHeight: 1.65,
                  color: "var(--ink-2)",
                  maxWidth: "58ch",
                }}
              >
                The First Sit is not a sales call. It is a real intake. We
                listen for what kind of company will actually help — and that
                sometimes means telling you Hearth is not it.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr",
              gap: 48,
              paddingBottom: 64,
              borderBottom: "1px solid var(--rule)",
              marginBottom: 64,
              alignItems: "start",
            }}
          >
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 72,
                fontWeight: 400,
                color: "var(--rule)",
                lineHeight: 1,
                letterSpacing: "-0.04em",
              }}
            >
              02
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>
                Pairing &middot; 72 hours
              </div>
              <h2 style={{ fontSize: "clamp(32px,3.5vw,52px)", marginBottom: 24 }}>
                Meet your Keepers
              </h2>
              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.65,
                  color: "var(--ink-2)",
                  maxWidth: "58ch",
                }}
              >
                We hand-match you with three Keeper candidates based on your
                language, cultural background, and the themes you carry. You
                get to watch a short video introduction from each one, read
                their profiles, and pick the one who feels right. There is no
                algorithm making this call — a human at Hearth makes the match.
              </p>
              <p
                style={{
                  marginTop: 18,
                  fontSize: 18,
                  lineHeight: 1.65,
                  color: "var(--ink-2)",
                  maxWidth: "58ch",
                }}
              >
                If the match does not feel right in the first 30 days, you
                switch — no questions, no extra charge. The pairing takes 72
                hours from your First Sit. If we can&rsquo;t find the right
                fit in 72 hours, we keep looking and tell you why.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr",
              gap: 48,
              paddingBottom: 64,
              borderBottom: "1px solid var(--rule)",
              marginBottom: 64,
              alignItems: "start",
            }}
          >
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 72,
                fontWeight: 400,
                color: "var(--rule)",
                lineHeight: 1,
                letterSpacing: "-0.04em",
              }}
            >
              03
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>
                The Sit &middot; 35&ndash;60 minutes
              </div>
              <h2 style={{ fontSize: "clamp(32px,3.5vw,52px)", marginBottom: 24 }}>
                The weekly Sit
              </h2>
              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.65,
                  color: "var(--ink-2)",
                  maxWidth: "58ch",
                }}
              >
                Your regular Sit is a 35&ndash;60 minute video call. It has
                a shape: an arrival ritual at the start (a short grounding
                practice your Keeper leads), long listening in the middle, and
                a closing ritual at the end. Your Keeper doesn&rsquo;t take
                notes while you talk — their attention is on you, not a
                clipboard. No notes unless you want them.
              </p>
              <p
                style={{
                  marginTop: 18,
                  fontSize: 18,
                  lineHeight: 1.65,
                  color: "var(--ink-2)",
                  maxWidth: "58ch",
                }}
              >
                Your Keeper notices patterns across sessions. They remember
                what you said six weeks ago and will name the shape of
                something you&rsquo;ve been carrying. Audio-only is always
                an option if the camera feels like too much. Recording is
                opt-in and belongs to you.
              </p>
              <div
                style={{
                  marginTop: 28,
                  display: "flex",
                  gap: 32,
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ember)",
                      marginBottom: 8,
                    }}
                  >
                    Hearthside
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 22,
                      fontWeight: 380,
                    }}
                  >
                    Biweekly Sits
                  </div>
                  <div style={{ fontSize: 14, color: "var(--ink-3)", marginTop: 4 }}>
                    Every two weeks
                  </div>
                </div>
                <div
                  style={{
                    width: 1,
                    background: "var(--rule)",
                    alignSelf: "stretch",
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ember)",
                      marginBottom: 8,
                    }}
                  >
                    Hearth Deep
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 22,
                      fontWeight: 380,
                    }}
                  >
                    Weekly Sits
                  </div>
                  <div style={{ fontSize: 14, color: "var(--ink-3)", marginTop: 4 }}>
                    Every week
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr",
              gap: 48,
              alignItems: "start",
            }}
          >
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 72,
                fontWeight: 400,
                color: "var(--rule)",
                lineHeight: 1,
                letterSpacing: "-0.04em",
              }}
            >
              04
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>
                The Long Talk &middot; always between Sits
              </div>
              <h2 style={{ fontSize: "clamp(32px,3.5vw,52px)", marginBottom: 24 }}>
                The Long Talk
              </h2>
              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.65,
                  color: "var(--ink-2)",
                  maxWidth: "58ch",
                }}
              >
                Between Sits, there&rsquo;s an async thread — your private
                channel with your Keeper. Text, voice notes, photos, links.
                You can write at midnight when something lands. Your Keeper
                replies within 24 hours on Hearthside, within 4 hours on
                Hearth Deep. Slow on purpose. This is not a hotline.
              </p>
              <p
                style={{
                  marginTop: 18,
                  fontSize: 18,
                  lineHeight: 1.65,
                  color: "var(--ink-2)",
                  maxWidth: "58ch",
                }}
              >
                Every Friday, your Keeper sends a reflection — a short note
                about what they noticed this week. Not advice. Pattern-noticing.
                The thing you said that stayed with them. This is a Hearth
                signature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WEEK TIMELINE */}
      <section style={{ padding: "100px 0" }}>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                A week with your Keeper
              </div>
              <h2 style={{ marginTop: 18 }}>
                What a week actually looks like.
              </h2>
            </div>
            <p className="lede">
              Not every week is the same, but here is the shape of a typical
              one on Hearth Deep. Hearthside has the same thread, every-other-week Sits.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: 0,
              border: "1px solid var(--rule)",
              borderRadius: 8,
              overflow: "hidden",
              marginTop: 48,
            }}
          >
            {[
              {
                day: "Sun",
                activity: "A voice note from your Keeper",
                detail:
                  "A short audio message — what your Keeper has been sitting with since your last session.",
                highlight: false,
              },
              {
                day: "Mon",
                activity: "Open",
                detail: "Send whatever lands. Long or short. No expectation.",
                highlight: false,
              },
              {
                day: "Tue",
                activity: "You send a paragraph",
                detail:
                  "Write what's heavy. Your Keeper replies that evening within 4 hours.",
                highlight: true,
              },
              {
                day: "Wed",
                activity: "Your Sit",
                detail:
                  "35–60 minutes on video. Arrival, long listening, closing ritual.",
                highlight: true,
              },
              {
                day: "Thu",
                activity: "Open",
                detail: "The thread stays open. Use it or don't.",
                highlight: false,
              },
              {
                day: "Fri",
                activity: "Friday Reflection",
                detail:
                  "Your Keeper's weekly note: what they noticed, what they'll carry into the next week.",
                highlight: true,
              },
              {
                day: "Sat",
                activity: "Read an Ember",
                detail:
                  "A short essay from the Embers library. 3–7 minutes on the train or in the quiet.",
                highlight: false,
              },
            ].map((item) => (
              <div
                key={item.day}
                style={{
                  padding: "28px 20px",
                  background: item.highlight
                    ? "var(--ink)"
                    : "var(--paper-2)",
                  color: item.highlight ? "var(--paper)" : "var(--ink)",
                  borderRight: "1px solid var(--rule)",
                  minHeight: 220,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: item.highlight ? "#C9B894" : "var(--ink-3)",
                  }}
                >
                  {item.day}
                </div>
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 17,
                    fontWeight: 380,
                    lineHeight: 1.2,
                    color: item.highlight ? "var(--paper)" : "var(--ink)",
                    flex: 1,
                  }}
                >
                  {item.activity}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    lineHeight: 1.5,
                    color: item.highlight ? "#D8C8AA" : "var(--ink-3)",
                  }}
                >
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bigcta"
        style={{ padding: "100px 0", textAlign: "center" }}
      >
        <div className="wrap">
          <div
            className="eyebrow"
            style={{
              color: "#FFE0B0",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <span className="dot" style={{ background: "#FFE0B0" }} />
            The First Sit takes about 12 minutes
          </div>
          <h2 style={{ marginTop: 18 }}>
            Ready to pull up a chair?
          </h2>
          <div className="cta-row" style={{ marginTop: 40 }}>
            <a href="/#cta" className="btn btn-primary btn-lg">
              Pull up a chair <span className="arr">&rarr;</span>
            </a>
            <a href="/keepers" className="btn btn-ghost btn-lg">
              Meet the Keepers first
            </a>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
