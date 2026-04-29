import Link from "next/link";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

export const metadata = {
  title: "Hearth vs. therapy · Hearth",
  description:
    "Hearth is not a substitute for therapy. It is a different thing. Here's the honest comparison — when therapy is the right tool, when Hearth is, and when you need both.",
};

const COMPARISON = [
  {
    label: "What it is",
    therapy: "Clinical mental-health treatment by a licensed professional.",
    hearth: "Peer support — a paid, trained companion for the long term.",
  },
  {
    label: "Who provides it",
    therapy: "Licensed therapist, psychologist, social worker, or counsellor.",
    hearth: "A Keeper — vetted, trained, and supervised, but not a clinician.",
  },
  {
    label: "Credentials",
    therapy: "Master's or doctoral degree, licensure, supervised clinical hours.",
    hearth: "120-hour Hearth training, lived experience, monthly supervision.",
  },
  {
    label: "What it's for",
    therapy: "Diagnosis, treatment, clinical mental-health conditions, deep psychological work.",
    hearth: "The slow, ongoing weight of living — grief, family, identity, the in-between.",
  },
  {
    label: "Frequency",
    therapy: "Typically 50 minutes, weekly or biweekly, scheduled.",
    hearth: "35–60 min Sit (biweekly or weekly) plus async Long Talk in between.",
  },
  {
    label: "Format",
    therapy: "Video, in-person, sometimes phone. Synchronous.",
    hearth: "Video Sit + asynchronous Long Talk thread (text, voice notes). Friday Reflection.",
  },
  {
    label: "Cost (US, out of pocket)",
    therapy: "$100–$300 per session. ~$400–$1,200/month if weekly.",
    hearth: "$39–$99/month, all in. No per-session billing.",
  },
  {
    label: "Insurance",
    therapy: "Often covered. In-network rates, copays apply.",
    hearth: "Not insurance-eligible. FSA/HSA may apply for some plans.",
  },
  {
    label: "Cultural fluency",
    therapy: "Variable. Specialty therapists exist but availability is limited.",
    hearth: "Built in. Keepers are from the cultural context our members live inside.",
  },
  {
    label: "Wait time",
    therapy: "Often weeks to months for specialty therapists.",
    hearth: "Matched within 72 hours, by hand.",
  },
  {
    label: "Confidentiality",
    therapy: "HIPAA-protected. Session notes part of medical record.",
    hearth: "HIPAA-comparable. Encrypted. Not a medical record.",
  },
  {
    label: "What it can do",
    therapy: "Diagnose. Treat clinical conditions. Trauma processing. Medication referrals.",
    hearth: "Hold the everyday weight. Witness. Reflect. Bridge to therapy when needed.",
  },
  {
    label: "What it can't do",
    therapy: "Be there at 11pm on Tuesday. Always carry the cultural context. Show up cheaply.",
    hearth: "Diagnose. Prescribe. Replace the deep clinical work some seasons need.",
  },
];

const THERAPY_SIGNS = [
  "You're in an active mental-health crisis or having thoughts of self-harm.",
  "You suspect or know you have a clinical condition — depression, anxiety disorder, PTSD, bipolar, etc.",
  "You're managing a diagnosis with medication and need clinical oversight.",
  "You're processing trauma that needs structured clinical work (EMDR, IFS, CBT).",
  "You need a clinical assessment for legal, medical, or workplace reasons.",
  "You want diagnosis, treatment plans, or a chart someone reads.",
];

const HEARTH_SIGNS = [
  "You don't think you need a therapist — you need an elder, an auntie, the cousin who's been through it.",
  "You have a therapist already and need someone for the time in between sessions.",
  "Therapy felt clinical when you wanted something warmer. You'd come back with a Keeper present.",
  "Your weight is real but ordinary — family pressure, grief that's old, the slow drift of a life.",
  "You want cultural context built in. You're tired of explaining who your mother is.",
  "You want a relationship, not a programme. The same person, every week, over months.",
];

const BOTH_SIGNS = [
  "You're in therapy for a clinical issue and Hearth holds the day-to-day in between.",
  "You're in early therapy and want a Keeper to walk you through the harder weeks.",
  "Your therapist works on the deep root. Your Keeper holds the surface — the family call, the work week, the quiet hour before bed.",
];

export default function HearthVsTherapyPage() {
  return (
    <>
      <SharedNav />

      {/* HERO */}
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            Hearth vs. therapy
          </div>
          <h1 style={{ marginTop: 24, maxWidth: "16ch" }}>
            Hearth is{" "}
            <span className="ember-word">not therapy.</span>
            <br />
            By design.
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
            We are not a cheaper version of therapy. We are not a watered-down
            version of therapy. We are a different thing entirely &mdash; the
            chair that used to be in every village, returned to a generation
            that left the village. Therapy is essential when therapy is the
            right tool. Here&rsquo;s when it is, when Hearth is, and when you
            need both.
          </p>
        </div>
      </section>

      {/* THE COMPARISON */}
      <section style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Side by side
              </div>
              <h2 style={{ marginTop: 18 }}>
                The honest{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  comparison.
                </span>
              </h2>
            </div>
            <p className="lede">
              We&rsquo;re not going to claim Hearth does what therapy does. It
              doesn&rsquo;t. It does something else entirely.
            </p>
          </div>

          <div
            style={{
              background: "var(--paper)",
              border: "1px solid var(--rule)",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr 1fr",
                background: "var(--ink)",
                color: "var(--paper)",
              }}
              className="vs-header"
            >
              <div style={{ padding: "20px 24px", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(242,237,229,0.5)" }}>
                What
              </div>
              <div style={{ padding: "20px 24px", fontFamily: "var(--serif)", fontSize: 22, fontWeight: 380 }}>
                Therapy
              </div>
              <div style={{ padding: "20px 24px", fontFamily: "var(--serif)", fontSize: 22, fontWeight: 380, color: "#FFB74D", borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
                Hearth
              </div>
            </div>

            {COMPARISON.map((row, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr 1fr",
                  borderTop: i === 0 ? "none" : "1px solid var(--rule-2)",
                }}
                className="vs-row"
              >
                <div
                  style={{
                    padding: "20px 24px",
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--ink-3)",
                    background: "var(--paper-2)",
                  }}
                >
                  {row.label}
                </div>
                <div
                  style={{
                    padding: "20px 24px",
                    fontFamily: "var(--serif)",
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: "var(--ink-2)",
                  }}
                >
                  {row.therapy}
                </div>
                <div
                  style={{
                    padding: "20px 24px",
                    fontFamily: "var(--serif)",
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: "var(--ink)",
                    background: "#FFF7EE",
                    borderLeft: "1px solid var(--rule-2)",
                  }}
                >
                  {row.hearth}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHOOSE THERAPY IF */}
      <section>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
            }}
            className="vs-grid-2"
          >
            <div
              style={{
                background: "var(--paper)",
                border: "1px solid var(--rule)",
                borderRadius: 12,
                padding: "40px",
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
                Choose therapy if
              </p>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 28, lineHeight: 1.2, fontWeight: 380, marginBottom: 24 }}>
                You need a clinician.
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {THERAPY_SIGNS.map((s, i) => (
                  <li
                    key={i}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      gap: 14,
                      alignItems: "start",
                      paddingBottom: 14,
                      borderBottom: i === THERAPY_SIGNS.length - 1 ? "none" : "1px solid var(--rule-2)",
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
                    <span style={{ fontFamily: "var(--serif)", fontSize: 15.5, lineHeight: 1.55, color: "var(--ink-2)" }}>
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                background: "var(--ink)",
                color: "var(--paper)",
                borderRadius: 12,
                padding: "40px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#FFB74D",
                  marginBottom: 14,
                }}
              >
                Choose Hearth if
              </p>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 28, lineHeight: 1.2, fontWeight: 380, marginBottom: 24, color: "var(--paper)" }}>
                You need an elder.
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {HEARTH_SIGNS.map((s, i) => (
                  <li
                    key={i}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      gap: 14,
                      alignItems: "start",
                      paddingBottom: 14,
                      borderBottom: i === HEARTH_SIGNS.length - 1 ? "none" : "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#FFB74D",
                        marginTop: 9,
                      }}
                    />
                    <span style={{ fontFamily: "var(--serif)", fontSize: 15.5, lineHeight: 1.55, color: "rgba(242,237,229,0.85)" }}>
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DO BOTH */}
      <section style={{ background: "var(--paper-2)", paddingTop: 100, paddingBottom: 100 }}>
        <div className="wrap">
          <div style={{ maxWidth: 760, marginInline: "auto", textAlign: "center" }}>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--ember)",
                marginBottom: 18,
              }}
            >
              And also
            </p>
            <h2 style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.1, marginBottom: 28 }}>
              Sometimes the answer is{" "}
              <span className="serif-i" style={{ color: "var(--ember)" }}>
                both.
              </span>
            </h2>
            <p style={{ color: "var(--ink-2)", fontSize: 17, lineHeight: 1.7, marginBottom: 48 }}>
              Therapy and Hearth aren&rsquo;t competing. Most of the strongest
              outcomes we see are from members who use both &mdash; therapy
              for the deep root, Hearth for the surface and the steady weight
              between sessions.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              maxWidth: 760,
              marginInline: "auto",
            }}
          >
            {BOTH_SIGNS.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--rule)",
                  borderRadius: 10,
                  padding: "22px 28px",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 18,
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "#FFF7EE",
                    color: "var(--ember)",
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  +
                </span>
                <p
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 16.5,
                    lineHeight: 1.55,
                    color: "var(--ink)",
                    margin: 0,
                  }}
                >
                  {s}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI COMPANIONS */}
      <section>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                And what about AI companions?
              </div>
              <h2 style={{ marginTop: 18 }}>
                The chair is not a{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  chatbot.
                </span>
              </h2>
            </div>
            <p className="lede">
              The AI companion category is real, growing, and useful for some
              things. We&rsquo;re not against it. We&rsquo;re different on
              purpose.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
            }}
            className="vs-ai-grid"
          >
            <div
              style={{
                background: "var(--paper-2)",
                border: "1px solid var(--rule)",
                borderRadius: 12,
                padding: "32px 32px 28px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--ink-3)",
                  marginBottom: 14,
                }}
              >
                What an AI companion is good at
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {[
                  "Available at 3am, every night, no scheduling.",
                  "Will remember your dog's name and your boss's last text.",
                  "Cheaper than human support — usually $5–$20/month.",
                  "No social cost. No fear of being a burden.",
                  "Useful for venting in a low-stakes loop.",
                ].map((t, i) => (
                  <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 10, alignItems: "start" }}>
                    <span style={{ fontFamily: "var(--mono)", color: "var(--ink-3)", fontSize: 14, marginTop: 2 }}>+</span>
                    <span style={{ fontFamily: "var(--serif)", fontSize: 15.5, lineHeight: 1.55, color: "var(--ink-2)" }}>
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                background: "var(--ink)",
                color: "var(--paper)",
                borderRadius: 12,
                padding: "32px 32px 28px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#FFB74D",
                  marginBottom: 14,
                }}
              >
                What only a human Keeper does
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {[
                  "Notices the thing you didn't say. Asks about the silence.",
                  "Has lived a version of the same story. Brings real context, not pattern-matched comfort.",
                  "Sits with you in silence — without filling it.",
                  "Carries cultural fluency you don't have to translate.",
                  "Will tell you, gently, when you need a clinician — and walk you to one.",
                ].map((t, i) => (
                  <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 10, alignItems: "start" }}>
                    <span style={{ color: "#FFB74D", fontSize: 14, marginTop: 2 }}>+</span>
                    <span style={{ fontFamily: "var(--serif)", fontSize: 15.5, lineHeight: 1.55, color: "rgba(242,237,229,0.88)" }}>
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            style={{
              maxWidth: 760,
              marginInline: "auto",
              marginTop: 48,
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(20px, 2.4vw, 26px)",
                lineHeight: 1.5,
                color: "var(--ink-2)",
                fontStyle: "italic",
              }}
            >
              An AI companion gives you a mirror that talks back. A Keeper
              gives you a person who has been where you&rsquo;re sitting.{" "}
              <span style={{ color: "var(--ember)", fontStyle: "normal", fontWeight: 380 }}>
                Both have a place. They aren&rsquo;t the same thing.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* THE BRIDGE */}
      <section>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: 64,
              alignItems: "start",
            }}
            className="vs-bridge-row"
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
                When it tips
              </p>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.15 }}>
                The Bridge is{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  built in.
                </span>
              </h2>
            </div>
            <div>
              <p style={{ color: "var(--ink-2)", fontSize: 17, lineHeight: 1.7, marginBottom: 18 }}>
                If you start with Hearth and your Keeper notices you&rsquo;d
                benefit from a clinician &mdash; for what they&rsquo;re hearing,
                or what you&rsquo;re asking for &mdash; they don&rsquo;t hand
                you a Google search and disappear. They walk you to The
                Bridge: a vetted, culturally-fluent therapist matched by hand,
                introduced by name.
              </p>
              <p style={{ color: "var(--ink-2)", fontSize: 17, lineHeight: 1.7, marginBottom: 24 }}>
                Your Keeper stays your Keeper through the transition. The
                bridge is a value, not a feature.
              </p>
              <Link href="/bridge" className="btn btn-ghost">
                How The Bridge works &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div
            style={{
              padding: "56px 40px",
              background: "var(--ink)",
              color: "var(--paper)",
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
                color: "#FFE0B0",
                marginBottom: 16,
              }}
            >
              Still figuring out which one you need?
            </p>
            <h2 style={{ fontSize: "clamp(32px, 4.5vw, 52px)", lineHeight: 1.1, color: "var(--paper)", marginBottom: 18 }}>
              Start with the{" "}
              <span style={{ color: "var(--ember)", fontStyle: "italic", fontWeight: 300 }}>
                First Sit.
              </span>
            </h2>
            <p style={{ color: "rgba(242,237,229,0.7)", fontSize: 16, lineHeight: 1.6, maxWidth: "48ch", marginInline: "auto", marginBottom: 28 }}>
              The 12-minute intake will help us see what you&rsquo;re carrying.
              If your Keeper thinks therapy is what you actually need, they
              will tell you &mdash; honestly, in the first conversation.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/intake" className="btn btn-primary btn-lg">
                Begin the First Sit <span className="arr">&rarr;</span>
              </Link>
              <Link href="/bridge" className="btn btn-ghost btn-lg" style={{ borderColor: "rgba(255,255,255,0.3)", color: "var(--paper)" }}>
                I want a therapist instead
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .vs-grid-2 { grid-template-columns: 1fr !important; }
          .vs-bridge-row { grid-template-columns: 1fr !important; gap: 24px !important; }
          .vs-ai-grid { grid-template-columns: 1fr !important; }
          .vs-header { grid-template-columns: 100px 1fr 1fr !important; }
          .vs-row { grid-template-columns: 100px 1fr 1fr !important; }
          .vs-header > div, .vs-row > div { padding: 14px 12px !important; font-size: 13px !important; }
        }
        @media (max-width: 600px) {
          .vs-header { grid-template-columns: 1fr !important; }
          .vs-row { grid-template-columns: 1fr !important; }
          .vs-row > div:first-child { font-weight: 600; padding-top: 16px !important; padding-bottom: 4px !important; }
        }
      `}</style>

      <SharedFooter />
    </>
  );
}
