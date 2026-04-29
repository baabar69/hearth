import Link from "next/link";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

export const metadata = {
  title: "Circles · Hearth",
  description:
    "Small, themed cohorts of 6–10 members, facilitated by a Keeper, over 4–8 weeks. The conversation you can't have alone, with people who already understand the room.",
  openGraph: {
    title: "Circles · Hearth",
    description:
      "Small, themed cohorts of 6–10 members, facilitated by a Keeper, over 4–8 weeks. The conversation you can't have alone.",
    type: "website",
    url: "/circles",
    siteName: "Hearth",
  },
  twitter: {
    card: "summary_large_image",
    title: "Circles · Hearth",
    description:
      "Small, themed cohorts of 6–10 members, facilitated by a Keeper, over 4–8 weeks.",
  },
};

const SHAPE = [
  {
    eyebrow: "Cohort size",
    title: "6 to 10 members.",
    body: "Small enough that everyone has room to speak. Large enough that you are not the only one carrying a particular shape of the question.",
  },
  {
    eyebrow: "Length",
    title: "4 to 8 weeks.",
    body: "Themed series with a beginning, middle, and end. Not an open-ended forum. The arc is part of the work.",
  },
  {
    eyebrow: "Facilitation",
    title: "One Keeper, every week.",
    body: "The same trained Keeper holds the room for the whole series. They are not a moderator. They are a host who has sat with this theme before.",
  },
  {
    eyebrow: "Format",
    title: "Video. Evenings.",
    body: "90 minutes, held over secure video. Scheduled to land kindly across US and Canada timezones — usually Wednesday or Thursday evenings.",
  },
];

const WEEK = [
  {
    day: "Monday",
    title: "The prompt arrives.",
    body: "Your Keeper sends a single prompt to the cohort — a question, a passage, a small piece of writing. Something to sit with for two days. Nothing to perform, nothing to submit. Just a thing to carry into Wednesday.",
  },
  {
    day: "Wednesday, 7pm",
    title: "The Circle meets.",
    body: "Ninety minutes on video. Your Keeper opens. People speak when they have something. Silence is allowed and frequent. Nobody is called on. Nobody is graded. The shape of the conversation is the conversation.",
  },
  {
    day: "Thursday",
    title: "The Long Talk thread.",
    body: "A private thread for the cohort opens for the rest of the week. Not a Slack. Not a chat room. A slow place — most members write a paragraph or two, sometimes nothing. Your Keeper reads it and replies in their own voice.",
  },
  {
    day: "Friday",
    title: "The closing reflection.",
    body: "Your Keeper writes a short reflection on what stayed with them from Wednesday — themes they noticed, threads worth carrying forward. Then the week is closed. You rest until Monday.",
  },
];

const THEMES = [
  {
    title: "Diaspora Mothers",
    forWhom: "Mothers raising children in a country that isn't the one that raised them.",
    dates: "Apr 28 → May 26, 2026",
    weeks: "4 weeks",
    facilitator: "Aruna",
    spots: "3 of 8 spots left",
  },
  {
    title: "Eldest Daughters",
    forWhom: "Women who learned early that the family ran on their attention.",
    dates: "May 6 → Jun 17, 2026",
    weeks: "6 weeks",
    facilitator: "Rabia",
    spots: "5 of 10 spots left",
  },
  {
    title: "Grief That Arrived Late",
    forWhom: "For losses you never grieved out loud — the parent, the homeland, the version of yourself.",
    dates: "May 12 → Jun 9, 2026",
    weeks: "4 weeks",
    facilitator: "Priya S.",
    spots: "2 of 8 spots left",
  },
  {
    title: "On Coming Out to a Family You Love",
    forWhom: "A confidential cohort for queer members from communities where the question is layered.",
    dates: "May 20 → Jul 15, 2026",
    weeks: "8 weeks",
    facilitator: "Hassan A.",
    spots: "4 of 8 spots left",
  },
  {
    title: "The Career Your Family Wanted",
    forWhom: "For the doctor who wanted to be a writer. The lawyer who wanted to teach. The dutiful child considering a different door.",
    dates: "Jun 3 → Jul 1, 2026",
    weeks: "4 weeks",
    facilitator: "Faisal M.",
    spots: "6 of 10 spots left",
  },
  {
    title: "Mothers and Daughters: The Long Conversation",
    forWhom: "The fight that has been going for a decade. The love underneath it. The figuring-out, slowly.",
    dates: "Jun 10 → Jul 22, 2026",
    weeks: "6 weeks",
    facilitator: "Aruna",
    spots: "7 of 10 spots left",
  },
];

const FAQS = [
  {
    q: "Are Circles confidential?",
    a: "Yes. What members share inside a Circle stays inside that Circle. Your Keeper holds the same confidentiality they do in a one-to-one Sit. We ask members to agree to the same before the first session — it is part of the opening.",
  },
  {
    q: "What if I miss a session?",
    a: "Life happens. We do not record sessions, so a missed week is genuinely missed — but your Keeper will send a short note about what the room held that night, and the Long Talk thread is open all week. Most cohorts can hold one or two missed weeks comfortably.",
  },
  {
    q: "Can I switch Circles?",
    a: "Before a series begins, yes — write to your Keeper or to circles@hearth.com and we'll move you. Once a cohort has started, we ask you to stay if you can. The room is built on the people who showed up to it.",
  },
  {
    q: "Do I need to share?",
    a: "No. There is no round-robin, no calling on people, no obligation to perform. Many members spend their first week or two mostly listening. The Keeper's job is to make the silence safe, not to fill it.",
  },
  {
    q: "Are these recorded?",
    a: "Never. Circles are not recorded, transcribed, or saved. Nothing leaves the room except what you carry out of it yourself.",
  },
  {
    q: "Can my Keeper join my Circle?",
    a: "Usually no. The Keeper who facilitates a Circle is a different Keeper from your one-to-one Keeper, by design — so the Circle stays a peer cohort and not a second therapy session. If your Keeper happens to be facilitating a theme that interests you, we'll let you know and walk you through the choice.",
  },
];

export default function CirclesPage() {
  return (
    <>
      <SharedNav />

      {/* HERO */}
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            Circles
          </div>
          <h1 style={{ marginTop: 24, maxWidth: "16ch" }}>
            The conversation{" "}
            <span className="ember-word">you can&rsquo;t have alone.</span>
          </h1>
          <p
            style={{
              maxWidth: "60ch",
              marginTop: 28,
              fontSize: 18,
              lineHeight: 1.65,
              color: "var(--ink-2)",
            }}
          >
            Small, themed cohorts of six to ten members, facilitated by a Keeper,
            over four to eight weeks. The eldest daughters, the diaspora mothers,
            the grief that arrived late. A room of people who already understand
            the question, so you do not spend the night explaining it.
          </p>
          <div className="hero-cta" style={{ marginTop: 32 }}>
            <Link href="/intake" className="btn btn-primary btn-lg">
              Join Hearth &amp; access Circles <span className="arr">&rarr;</span>
            </Link>
            <Link href="#themes" className="btn btn-ghost btn-lg">
              See upcoming themes
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT A CIRCLE IS */}
      <section style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                What a Circle is
              </div>
              <h2 style={{ marginTop: 18 }}>
                A small room,{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  held carefully.
                </span>
              </h2>
            </div>
            <p className="lede">
              Circles share the shape of a Sit &mdash; slow, paired with a real
              person, no streaks &mdash; but with a few other members in the room
              who are bringing a version of the same thing.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 20,
            }}
            className="circles-shape-grid"
          >
            {SHAPE.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--rule)",
                  borderRadius: 10,
                  padding: "32px 32px 32px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ember)",
                    marginBottom: 14,
                  }}
                >
                  {s.eyebrow}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 22,
                    lineHeight: 1.25,
                    fontWeight: 380,
                    color: "var(--ink)",
                    marginBottom: 14,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    color: "var(--ink-2)",
                    fontSize: 15,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A WEEK IN A CIRCLE */}
      <section>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                A week in a Circle
              </div>
              <h2 style={{ marginTop: 18 }}>
                Four touchpoints,{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  one slow week.
                </span>
              </h2>
            </div>
            <p className="lede">
              The Circle is the Wednesday night, but the week is the Circle.
              Here is what one looks like, from Monday morning to Friday
              evening.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 880,
            }}
          >
            {WEEK.map((w, i) => (
              <div
                key={i}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--rule)",
                  borderRadius: 10,
                  padding: "28px 32px",
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  gap: 32,
                  alignItems: "start",
                }}
                className="circles-week-row"
              >
                <div>
                  <p
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ember)",
                      marginBottom: 8,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 20,
                      lineHeight: 1.2,
                      fontStyle: "italic",
                      fontWeight: 380,
                      color: "var(--ink)",
                      margin: 0,
                    }}
                  >
                    {w.day}
                  </p>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 22,
                      lineHeight: 1.25,
                      fontWeight: 380,
                      color: "var(--ink)",
                      marginBottom: 12,
                    }}
                  >
                    {w.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--ink-2)",
                      fontSize: 16,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {w.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING THEMES */}
      <section id="themes" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Upcoming themes
              </div>
              <h2 style={{ marginTop: 18 }}>
                Six rooms{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  opening this season.
                </span>
              </h2>
            </div>
            <p className="lede">
              New Circles open each month. Members reserve their seat in the app;
              single passes are available at $35 if you want to try one before
              joining.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 20,
            }}
            className="circles-themes-grid"
          >
            {THEMES.map((t, i) => (
              <article
                key={i}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--rule)",
                  borderRadius: 10,
                  padding: "28px 30px 30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--ember)",
                    }}
                  >
                    {t.weeks}
                  </span>
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "var(--rule)",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.08em",
                      color: "var(--ink-3)",
                    }}
                  >
                    {t.dates}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 24,
                    lineHeight: 1.2,
                    fontWeight: 380,
                    color: "var(--ink)",
                    margin: 0,
                  }}
                >
                  {t.title}
                </h3>
                <p
                  style={{
                    color: "var(--ink-2)",
                    fontSize: 15,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {t.forWhom}
                </p>
                <div
                  style={{
                    marginTop: 6,
                    paddingTop: 16,
                    borderTop: "1px solid var(--rule-2)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 14,
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 10,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--ink-3)",
                        margin: 0,
                        marginBottom: 4,
                      }}
                    >
                      Facilitator
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--serif)",
                        fontStyle: "italic",
                        fontSize: 16,
                        color: "var(--ink)",
                        margin: 0,
                      }}
                    >
                      {t.facilitator}
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 10,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--ink-3)",
                        margin: 0,
                        marginBottom: 4,
                      }}
                    >
                      Availability
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 12,
                        color: "var(--ember)",
                        margin: 0,
                      }}
                    >
                      {t.spots}
                    </p>
                  </div>
                </div>
                <Link
                  href="/intake"
                  style={{
                    marginTop: 10,
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    letterSpacing: "0.06em",
                    color: "var(--ember)",
                    textDecoration: "underline",
                    alignSelf: "flex-start",
                  }}
                >
                  Reserve a seat &rarr;
                </Link>
              </article>
            ))}
          </div>

          <p
            style={{
              marginTop: 36,
              textAlign: "center",
              fontFamily: "var(--mono)",
              fontSize: 12,
              letterSpacing: "0.08em",
              color: "var(--ink-3)",
            }}
          >
            New themes open monthly. Members are notified two weeks before
            registration opens.
          </p>
        </div>
      </section>

      {/* HONEST SCOPE BOX */}
      <section>
        <div className="wrap">
          <div
            style={{
              padding: "40px 44px",
              background: "#FFF7EE",
              border: "1px solid rgba(156,42,26,0.18)",
              borderRadius: 12,
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: 28,
              alignItems: "start",
              maxWidth: 880,
              marginInline: "auto",
            }}
            className="circles-scope-box"
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "var(--ember)",
                color: "white",
                fontFamily: "var(--serif)",
                fontSize: 22,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              ≠
            </div>
            <div>
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
                The honest scope
              </p>
              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 24,
                  lineHeight: 1.25,
                  fontWeight: 380,
                  marginBottom: 14,
                  color: "var(--ink)",
                }}
              >
                What Circles are not.
              </h3>
              <p
                style={{
                  color: "var(--ink-2)",
                  fontSize: 16,
                  lineHeight: 1.7,
                  margin: 0,
                  marginBottom: 14,
                }}
              >
                Circles are not group therapy. They are not a clinical support
                group. They are not AA-style mutual aid. They are not advice
                circles &mdash; nobody is telling you what to do, and nobody is
                graded for participation.
              </p>
              <p
                style={{
                  color: "var(--ink-2)",
                  fontSize: 16,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                A Circle is a <em>peer cohort</em>, facilitated by a trained
                Keeper. The work is being in a room with other people who
                already understand the shape of the question &mdash; and a host
                who keeps the room safe enough that the slow conversation can
                happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING RECAP */}
      <section style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Pricing
              </div>
              <h2 style={{ marginTop: 18 }}>
                Circles are{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  included.
                </span>
              </h2>
            </div>
            <p className="lede">
              Both Hearth tiers include Circles in the monthly membership. Single
              passes are available if you want to try one without joining.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 20,
            }}
            className="circles-pricing-grid"
          >
            <div
              style={{
                background: "var(--paper)",
                border: "1px solid var(--rule)",
                borderRadius: 12,
                padding: "30px 28px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  fontStyle: "italic",
                  fontWeight: 380,
                  margin: 0,
                  marginBottom: 8,
                }}
              >
                Hearthside
              </p>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 32,
                  fontWeight: 300,
                  margin: 0,
                  marginBottom: 14,
                }}
              >
                $39<span style={{ fontSize: 16, color: "var(--ink-3)" }}>/mo</span>
              </p>
              <p
                style={{
                  color: "var(--ink-2)",
                  fontSize: 15,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Biweekly Sits with your matched Keeper, plus{" "}
                <strong style={{ color: "var(--ink)" }}>
                  one Circle per month
                </strong>{" "}
                included in the membership.
              </p>
            </div>

            <div
              style={{
                background: "var(--ink)",
                color: "var(--paper)",
                borderRadius: 12,
                padding: "30px 28px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  fontStyle: "italic",
                  fontWeight: 380,
                  margin: 0,
                  marginBottom: 8,
                  color: "var(--paper)",
                }}
              >
                Hearth Deep
              </p>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 32,
                  fontWeight: 300,
                  margin: 0,
                  marginBottom: 14,
                  color: "var(--paper)",
                }}
              >
                $99
                <span style={{ fontSize: 16, color: "rgba(242,237,229,0.6)" }}>
                  /mo
                </span>
              </p>
              <p
                style={{
                  color: "rgba(242,237,229,0.85)",
                  fontSize: 15,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Weekly Sits, priority Long Talk, plus{" "}
                <strong style={{ color: "#FFE0B0" }}>
                  two Circles per month
                </strong>{" "}
                included in the membership.
              </p>
            </div>

            <div
              style={{
                background: "var(--paper)",
                border: "1px dashed var(--rule)",
                borderRadius: 12,
                padding: "30px 28px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  fontStyle: "italic",
                  fontWeight: 380,
                  margin: 0,
                  marginBottom: 8,
                }}
              >
                Single pass
              </p>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 32,
                  fontWeight: 300,
                  margin: 0,
                  marginBottom: 14,
                }}
              >
                $35
                <span style={{ fontSize: 16, color: "var(--ink-3)" }}>
                  {" "}
                  /Circle
                </span>
              </p>
              <p
                style={{
                  color: "var(--ink-2)",
                  fontSize: 15,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                For non-members, or members who want an extra Circle on top of
                what their tier includes. One series, no membership required.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 32, textAlign: "center" }}>
            <Link href="/pricing" className="btn btn-ghost">
              See full pricing &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Common questions
              </div>
              <h2 style={{ marginTop: 18 }}>
                The questions{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  before the room.
                </span>
              </h2>
            </div>
            <p className="lede">
              The things people ask before signing up. If your question
              isn&rsquo;t here, write to{" "}
              <a
                href="mailto:circles@hearth.com"
                style={{ color: "var(--ember)", textDecoration: "underline" }}
              >
                circles@hearth.com
              </a>
              .
            </p>
          </div>

          <dl
            style={{
              maxWidth: 760,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {FAQS.map((f, i) => (
              <div
                key={i}
                style={{
                  paddingTop: 24,
                  paddingBottom: 24,
                  borderTop: "1px solid var(--rule-2)",
                  borderBottom:
                    i === FAQS.length - 1 ? "1px solid var(--rule-2)" : "none",
                }}
              >
                <dt
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 20,
                    lineHeight: 1.3,
                    fontWeight: 380,
                    color: "var(--ink)",
                    marginBottom: 12,
                  }}
                >
                  {f.q}
                </dt>
                <dd
                  style={{
                    margin: 0,
                    color: "var(--ink-2)",
                    fontSize: 16,
                    lineHeight: 1.7,
                    maxWidth: "68ch",
                  }}
                >
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>

          <p
            style={{
              marginTop: 32,
              maxWidth: 760,
              fontFamily: "var(--mono)",
              fontSize: 12,
              letterSpacing: "0.06em",
              color: "var(--ink-3)",
            }}
          >
            For the broader site FAQ, see{" "}
            <Link
              href="/faq"
              style={{ color: "var(--ember)", textDecoration: "underline" }}
            >
              /faq
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div
            style={{
              padding: "56px 40px",
              background: "var(--ink)",
              borderRadius: 16,
              textAlign: "center",
              color: "var(--paper)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#FFE0B0",
                marginBottom: 12,
              }}
            >
              The next Circle opens in two weeks
            </p>
            <h2
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                lineHeight: 1.1,
                color: "var(--paper)",
                marginBottom: 18,
              }}
            >
              Pull up a chair{" "}
              <span style={{ color: "var(--ember)", fontStyle: "italic" }}>
                in a room that already understands.
              </span>
            </h2>
            <p
              style={{
                color: "rgba(242,237,229,0.7)",
                fontSize: 16,
                lineHeight: 1.6,
                maxWidth: "48ch",
                marginInline: "auto",
                marginBottom: 28,
              }}
            >
              Join Hearth and your first Circle is included in the membership.
              Or pick up a single pass and try one before you decide.
            </p>
            <div
              className="cta-row"
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="/intake" className="btn btn-primary btn-lg">
                Join Hearth &amp; access Circles{" "}
                <span className="arr">&rarr;</span>
              </Link>
              <Link href="/pricing" className="btn btn-ghost btn-lg">
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .circles-shape-grid { grid-template-columns: 1fr !important; }
          .circles-themes-grid { grid-template-columns: 1fr !important; }
          .circles-pricing-grid { grid-template-columns: 1fr !important; }
          .circles-week-row { grid-template-columns: 1fr !important; gap: 12px !important; padding: 24px !important; }
          .circles-scope-box { grid-template-columns: 1fr !important; gap: 18px !important; padding: 28px !important; }
        }
      `}</style>

      <SharedFooter />
    </>
  );
}
