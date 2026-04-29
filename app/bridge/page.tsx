import Link from "next/link";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

export const metadata = {
  title: "The Bridge · Hearth",
  description:
    "When you need more than a Keeper, we bridge you to a vetted, culturally fluent licensed therapist.",
};

export default function BridgePage() {
  return (
    <>
      <SharedNav />

      {/* HERO */}
      <section className="hero" style={{ paddingBottom: 80 }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            The Bridge
          </div>
          <h1 style={{ marginTop: 24, maxWidth: "20ch" }}>
            When you need more than a Keeper, we bridge you.
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
            Peer support is real and valuable. But some things need a licensed
            clinician. When that moment arrives, we don&rsquo;t abandon you —
            your Keeper walks you across.
          </p>
        </div>
      </section>

      {/* WHY THE BRIDGE EXISTS */}
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
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: 64,
            }}
          >
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}>
                <span className="dot" />
                Why The Bridge exists
              </div>
              <h2 style={{ fontSize: "clamp(28px, 3vw, 44px)" }}>
                Peer support is not a replacement for therapy. It is a
                complement to it.
              </h2>
            </div>
            <div
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--ink-2)",
              }}
            >
              <p>
                Hearth was built for the space between friends and therapists
                — for the recurring weight of a life, for the conversations
                that don&rsquo;t require clinical intervention. Keepers are
                trained for exactly this. They are not trained for everything.
              </p>
              <p style={{ marginTop: 18 }}>
                Clinical depression. Active trauma processing. Eating disorders.
                Crisis. Medication questions. These things need a licensed
                clinician — a therapist, psychiatrist, or counselor with proper
                credentials and clinical supervision. Your Keeper knows this.
                And when the line is reached, your Keeper doesn&rsquo;t step
                away. They build you a bridge and stand at the entrance.
              </p>
              <p style={{ marginTop: 18 }}>
                The Bridge is Hearth&rsquo;s network of vetted, licensed
                therapists with South Asian heritage and cultural fluency.
                When a referral is made, it is a warm handoff — not a directory
                dump, not a goodbye. You keep your Keeper. You add the
                clinician.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE HANDOFF PROCESS */}
      <section style={{ padding: "100px 0" }}>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                How the handoff works
              </div>
              <h2 style={{ marginTop: 18 }}>
                Four steps. Not a goodbye.
              </h2>
            </div>
            <p className="lede">
              The Bridge is not a referral mill. It is a handoff — made by
              your Keeper, to someone specific, at the right time.
            </p>
          </div>

          <div className="between-grid" style={{ marginTop: 0 }}>
            {[
              {
                num: "01",
                title: "Your Keeper notices.",
                body: "Over time, your Keeper learns the shape of your life. They notice when something shifts — when what you're carrying starts to feel clinical rather than situational. They don't pathologize. They notice.",
              },
              {
                num: "02",
                title: "They name it — to you.",
                body: "Your Keeper doesn't act without you. They bring the observation to a Sit. They say what they've noticed, why they think a clinician might help, and what The Bridge actually is. No pressure. No deadline. A conversation.",
              },
              {
                num: "03",
                title: "They introduce you — by name.",
                body: "If you say yes, your Keeper reaches out to a specific Bridge therapist — not a list, a person — and makes the introduction. They share context (with your consent). They tell the therapist who you are.",
              },
              {
                num: "04",
                title: "You keep both.",
                body: "This is not a graduation. Your Keeper stays. Your new therapist joins. The two may coordinate with your permission. You were not abandoned at the door — you walked through it with company.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bcell"
                style={{ background: i === 1 ? "var(--ink)" : "var(--paper-2)" }}
              >
                <div>
                  <div
                    className="label"
                    style={{ color: i === 1 ? "#C9B894" : "var(--ink-3)" }}
                  >
                    Step {step.num}
                  </div>
                  <h3
                    style={{
                      fontSize: 24,
                      color: i === 1 ? "var(--paper)" : "var(--ink)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      color: i === 1 ? "#D8C8AA" : "var(--ink-2)",
                      maxWidth: "36ch",
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO BRIDGE THERAPISTS ARE */}
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
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: 64,
            }}
          >
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}>
                <span className="dot" />
                Bridge therapists
              </div>
              <h2 style={{ fontSize: "clamp(28px, 3vw, 44px)" }}>
                Licensed. Culturally fluent. Vetted by us.
              </h2>
            </div>
            <div>
              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: "var(--ink-2)",
                  marginBottom: 32,
                }}
              >
                Bridge therapists are not found on a general directory. Every
                therapist in our network has been individually vetted by Hearth.
                They are:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 0 }}>
                {[
                  "Licensed in the US or Canada (LCSW, LMFT, LPC, PhD, PsyD tier)",
                  "South Asian heritage or demonstrated cultural fluency with South Asian communities",
                  "Active practice — not overwhelmed caseloads, not waitlisted for six months",
                  "Familiar with diaspora-specific themes: immigration, family pressure, cultural identity, intergenerational dynamics",
                  "Committed to coordinating with Hearth Keepers when appropriate and with member consent",
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

      {/* WHAT BRIDGE IS NOT */}
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
                What The Bridge is not
              </div>
              <h2 style={{ fontSize: "clamp(28px, 3vw, 44px)" }}>
                Not a directory. Not a referral mill.
              </h2>
            </div>
            <div
              style={{ fontSize: 18, lineHeight: 1.7, color: "var(--ink-2)" }}
            >
              <p>
                We are not building a marketplace where therapists bid for
                your business. We are not a directory that emails you a list
                and wishes you luck. We protect therapist caseloads —
                Bridge therapists are never overwhelmed with Hearth referrals.
                The handoff is careful, specific, and human.
              </p>
              <p style={{ marginTop: 18 }}>
                The Bridge is also not a substitute for emergency services. If
                you are in crisis right now, please reach out to 988 (US) or
                1-866-585-0445 (Canada). Your Keeper is not a crisis line and
                neither is The Bridge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOR THERAPISTS */}
      <section
        style={{
          padding: "80px 0",
          borderBottom: "1px solid var(--rule-2)",
          background: "var(--paper-2)",
        }}
      >
        <div className="wrap">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>
                <span className="dot" />
                For therapists
              </div>
              <h3 style={{ maxWidth: "42ch" }}>
                Join The Bridge network.
              </h3>
              <p
                style={{
                  marginTop: 12,
                  color: "var(--ink-2)",
                  fontSize: 16,
                  lineHeight: 1.55,
                  maxWidth: "48ch",
                }}
              >
                A steady pipeline of pre-screened, culturally matched clients.
                Hearth handles the matching. You keep your own fee structure
                and practice autonomy. We protect your caseload.
              </p>
            </div>
            <Link href="/for-therapists" className="btn btn-ghost btn-lg">
              Apply to The Bridge <span className="arr">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bigcta" style={{ padding: "100px 0", textAlign: "center" }}>
        <div className="wrap">
          <div
            className="eyebrow"
            style={{ color: "#FFE0B0", justifyContent: "center", display: "flex" }}
          >
            <span className="dot" style={{ background: "#FFE0B0" }} />
            The Bridge is there when you need it
          </div>
          <h2 style={{ marginTop: 18 }}>
            Start with a Keeper. The Bridge is always close.
          </h2>
          <div className="cta-row" style={{ marginTop: 40 }}>
            <a href="/#cta" className="btn btn-primary btn-lg">
              Pull up a chair <span className="arr">&rarr;</span>
            </a>
            <Link href="/keepers" className="btn btn-ghost btn-lg">
              Meet the Keepers
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
