import type { Metadata } from "next";
import Link from "next/link";
import SharedNav from "../../components/SharedNav";
import SharedFooter from "../../components/SharedFooter";
import {
  articleLd,
  breadcrumbLd,
  faqLd,
  jsonLd,
  webPageLd,
} from "../../lib/schema";

const PUBLISHED = "2026-05-14";
const REVIEWED = "2026-05-14";

export const metadata: Metadata = {
  title:
    "Peer Support vs. Therapy: The Honest Difference (2026 Guide)",
  description:
    "Peer support and therapy do different jobs. A plain guide to what each is for, how they cost, who they fit, and when to choose which. Written by Hearth, a peer-support service that refers out for clinical care.",
  alternates: { canonical: "/learn/peer-support-vs-therapy" },
  openGraph: {
    type: "article",
    title: "Peer Support vs. Therapy: The Honest Difference",
    description:
      "A non-clinical guide to peer support and therapy: what each does, what they cost, who they fit, and when to choose which.",
    url: "/learn/peer-support-vs-therapy",
    publishedTime: PUBLISHED,
    modifiedTime: REVIEWED,
    authors: ["Hearth"],
  },
};

const FAQ = [
  {
    q: "Is peer support the same as therapy?",
    a: "No. Therapy is clinical care delivered by a licensed professional who diagnoses, treats, and is regulated by a licensing board. Peer support is companionship from a trained, paid (or sometimes volunteer) supporter who shares relevant lived experience. Peer supporters do not diagnose, do not prescribe, and do not provide clinical treatment. Both have a role; they answer different needs.",
  },
  {
    q: "When should I choose therapy instead of peer support?",
    a: "Choose therapy when you need a diagnosis or have one already (clinical depression, anxiety disorder, PTSD, eating disorders, OCD, bipolar disorder), when medication is part of the conversation, when you are in or near a crisis state, or when you need a clinician to coordinate care with other medical providers. A peer supporter who is honest about scope will tell you when therapy is the right tool and help you find one.",
  },
  {
    q: "When is peer support a better fit than therapy?",
    a: "Peer support is often the better fit for the recurring, non-clinical weight of a life: grief that does not need diagnosis, family or in-law dynamics, caregiving exhaustion, the slow loneliness of a long marriage, diaspora identity questions, the cost of code-switching, fatherhood, postpartum identity loss, faith and doubt, career-cultural conflict. These are the things people have historically taken to a trusted elder, not a clinician. Peer support is the modern version of that.",
  },
  {
    q: "Is peer support cheaper than therapy?",
    a: "Usually, yes. In the United States, therapy commonly costs $150–$300 per session without insurance and $400–$1,200 per month for weekly care. Subscription peer support typically ranges from free (volunteer platforms like 7 Cups) to $40–$100 per month for paid, paired services like Hearth. Cost differences come from licensure, clinical liability, and the depth of training, not from one being inherently more valuable than the other.",
  },
  {
    q: "Can I do both peer support and therapy at the same time?",
    a: "Yes, and many people do. The two complement each other well: therapy handles the clinical work (diagnosis, treatment, structured modalities like CBT or EMDR), peer support handles the daily weight in between. With your permission, a peer supporter and a therapist can coordinate on what is going on in your life so neither is operating blind.",
  },
  {
    q: "Is peer support evidence-based?",
    a: "Peer support has a meaningful evidence base for specific populations: recovery from substance use, serious mental illness, post-disaster mental health, and chronic illness self-management. Outside of those clinical contexts, the evidence base is younger and the field is still establishing measurement. What we know: continuity (same supporter, same person, over time) and training quality predict outcomes more than any other factor.",
  },
  {
    q: "Is peer support covered by insurance?",
    a: "In most cases, no. Peer support typically falls outside standard mental-health CPT codes used for insurance billing because peer supporters are not licensed clinicians. Some U.S. states cover Medicaid peer-support services delivered through certified Peer Support Specialist programs. Some employer EAPs and FSA/HSA accounts may cover peer support; check with your benefits administrator.",
  },
  {
    q: "How do I know if a peer-support service is legitimate?",
    a: "Look for: a written training program with documented hours (Hearth, for example, runs 120 hours), monthly supervision of the supporters, a clear scope statement (what they will not do), a real handoff path to licensed clinicians for things outside scope, and transparent pricing. Avoid services that claim to replace therapy, market themselves as cheaper diagnosis, or are vague about who their supporters are.",
  },
];

const COMPARISON = [
  {
    dim: "Who provides care",
    therapy:
      "A licensed clinician (LMFT, LCSW, LPC, psychologist, psychiatrist) regulated by a state or national licensing board.",
    peer:
      "A trained peer supporter, often with lived experience in the themes they support. Not licensed; trained and supervised by the service.",
  },
  {
    dim: "What they do",
    therapy:
      "Diagnose, treat, deliver evidence-based clinical modalities (CBT, EMDR, IFS, ACT, psychodynamic, etc.), prescribe (psychiatrists) or refer for medication.",
    peer:
      "Listen, reflect, hold space, witness, share relevant lived experience, and notice patterns. Do not diagnose or prescribe.",
  },
  {
    dim: "What they cost (US, no insurance)",
    therapy:
      "$150–$300 per session. Roughly $400–$1,200 per month for weekly care. Insurance may cover part of this.",
    peer:
      "Free (volunteer platforms) to ~$40–$100/month (paid subscription services). Hearth is $39 or $99 per month.",
  },
  {
    dim: "What you commit to",
    therapy:
      "Typically weekly or biweekly sessions, often with treatment goals or a defined course (e.g., 12 weeks of CBT).",
    peer:
      "Usually open-ended. The relationship continues as long as it serves you.",
  },
  {
    dim: "How matching works",
    therapy:
      "Often based on insurance availability and license type. Fit is left to the patient to figure out.",
    peer:
      "On the better services, matched by hand for fit (theme, lived experience, language, time zone). Volunteer platforms rotate strangers.",
  },
  {
    dim: "When to use it",
    therapy:
      "Diagnosable conditions, crisis or near-crisis, medication conversations, structured trauma work, anything requiring a clinician's authority.",
    peer:
      "The recurring weight of a life: grief, family, identity, caregiving, transitions, loneliness, the things that don't fit a clinical chair.",
  },
  {
    dim: "What it isn't",
    therapy:
      "Not a friend. Not always immediately available. Not for everyone, and not affordable for many.",
    peer:
      "Not therapy. Not crisis care. Not a replacement for clinical treatment when clinical treatment is needed.",
  },
];

export default function PeerSupportVsTherapyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            webPageLd({
              path: "/learn/peer-support-vs-therapy",
              name: "Peer Support vs. Therapy: The Honest Difference",
              description:
                "A plain-language guide to peer support and therapy: what each is for, how they cost, who they fit, and when to choose which.",
              lastReviewed: REVIEWED,
            }),
            articleLd({
              path: "/learn/peer-support-vs-therapy",
              headline:
                "Peer Support vs. Therapy: The Honest Difference (2026 Guide)",
              description:
                "Peer support and therapy do different jobs. A plain guide to what each is for, how they cost, who they fit, and when to choose which.",
              datePublished: PUBLISHED,
              dateModified: REVIEWED,
              wordCount: 2400,
              about: [
                "Peer support",
                "Therapy",
                "Mental health",
                "Counseling alternatives",
              ],
            }),
            breadcrumbLd([
              { name: "Hearth", path: "/" },
              { name: "Learn", path: "/learn/peer-support-vs-therapy" },
              {
                name: "Peer support vs. therapy",
                path: "/learn/peer-support-vs-therapy",
              },
            ]),
            faqLd(FAQ),
          ]),
        }}
      />
      <SharedNav />

      {/* HERO */}
      <section
        style={{
          padding: "80px 0 56px",
          borderBottom: "1px solid var(--rule-2)",
        }}
      >
        <div className="wrap">
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ink-3)",
              marginBottom: 18,
            }}
          >
            <Link href="/" style={{ color: "var(--ink-3)" }}>Hearth</Link>
            {" · "}
            <Link href="/learn/peer-support-vs-therapy" style={{ color: "var(--ink-3)" }}>
              Learn
            </Link>
            {" · The honest difference"}
          </div>
          <h1 style={{ maxWidth: "20ch", fontSize: "clamp(44px, 7vw, 96px)" }}>
            Peer support vs. therapy.
            <br />
            <span className="serif-i" style={{ color: "var(--ember)" }}>
              The honest difference.
            </span>
          </h1>
          <p
            style={{
              marginTop: 28,
              maxWidth: "60ch",
              fontSize: 20,
              lineHeight: 1.55,
              color: "var(--ink-2)",
            }}
          >
            Peer support is not a cheaper therapy. Therapy is not a fancier
            peer-support service. They do different jobs, for different
            problems, at different stages of a life. This is the guide we
            wished existed before we built Hearth.
          </p>
          <div
            style={{
              marginTop: 28,
              fontFamily: "var(--mono)",
              fontSize: 12,
              color: "var(--ink-3)",
              letterSpacing: "0.04em",
            }}
          >
            Published 14 May 2026 · Reviewed 14 May 2026 · ~12 min read
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section style={{ padding: "56px 0", background: "var(--paper-2)" }}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              The short version
            </div>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(20px, 2.2vw, 26px)",
                lineHeight: 1.5,
                fontWeight: 320,
                color: "var(--ink)",
              }}
            >
              <strong>Therapy is clinical care.</strong> A licensed
              professional diagnoses and treats. It is the right tool for
              clinical conditions, crisis-adjacent states, medication
              questions, and structured trauma work. It typically costs
              $150–$300 per session.
            </p>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(20px, 2.2vw, 26px)",
                lineHeight: 1.5,
                fontWeight: 320,
                color: "var(--ink)",
                marginTop: 18,
              }}
            >
              <strong>Peer support is companionship with training.</strong> A
              trained, often paid supporter listens, witnesses, and stays
              with you through the recurring weight of a life: grief, family,
              identity, caregiving, transitions. They do not diagnose or
              prescribe. Subscriptions typically run free to ~$100/month.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--ink-2)",
                marginTop: 22,
              }}
            >
              You can use both. Many people do. The two complement each other
              well, and a good peer supporter will tell you honestly when
              therapy is the better tool.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}>
        <div className="wrap">
          <h2 style={{ maxWidth: "20ch", marginBottom: 32 }}>
            Side by side, dimension by dimension.
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 15,
                lineHeight: 1.55,
                minWidth: 720,
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px 16px 14px 0",
                      borderBottom: "2px solid var(--rule)",
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                      width: "20%",
                    }}
                  >
                    Dimension
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px 16px",
                      borderBottom: "2px solid var(--rule)",
                      fontFamily: "var(--serif)",
                      fontSize: 18,
                      fontStyle: "italic",
                      fontWeight: 380,
                      color: "var(--ember)",
                      width: "40%",
                    }}
                  >
                    Therapy
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px 0 14px 16px",
                      borderBottom: "2px solid var(--rule)",
                      fontFamily: "var(--serif)",
                      fontSize: 18,
                      fontStyle: "italic",
                      fontWeight: 380,
                      color: "var(--ember)",
                      width: "40%",
                    }}
                  >
                    Peer support
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.dim}>
                    <td
                      style={{
                        padding: "20px 16px 20px 0",
                        borderBottom: "1px solid var(--rule-2)",
                        verticalAlign: "top",
                        fontFamily: "var(--mono)",
                        fontSize: 12,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "var(--ink-3)",
                      }}
                    >
                      {row.dim}
                    </td>
                    <td
                      style={{
                        padding: "20px 16px",
                        borderBottom: "1px solid var(--rule-2)",
                        verticalAlign: "top",
                        color: "var(--ink-2)",
                      }}
                    >
                      {row.therapy}
                    </td>
                    <td
                      style={{
                        padding: "20px 0 20px 16px",
                        borderBottom: "1px solid var(--rule-2)",
                        verticalAlign: "top",
                        color: "var(--ink-2)",
                      }}
                    >
                      {row.peer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DEEP DIVES */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}>
        <div className="wrap">
          <div style={{ maxWidth: "70ch", display: "grid", gap: 56 }}>
            <div>
              <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", marginBottom: 18 }}>
                What therapy actually is.
              </h2>
              <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--ink-2)" }}>
                Therapy in 2026 is a regulated profession in most countries.
                A therapist holds a license issued by a state or national
                board after years of clinical training, supervised practice,
                and exams. Licensure types vary: Licensed Marriage and
                Family Therapist (LMFT), Licensed Clinical Social Worker
                (LCSW), Licensed Professional Counselor (LPC), psychologist
                (PhD/PsyD), psychiatrist (MD/DO who can prescribe). But the
                common thread is that the therapist can legally diagnose,
                document a treatment plan, and operate within a defined
                clinical standard of care.
              </p>
              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.75,
                  color: "var(--ink-2)",
                  marginTop: 18,
                }}
              >
                Therapy uses modalities. Cognitive Behavioral Therapy (CBT)
                teaches you to identify and reframe distorted thoughts.
                Eye Movement Desensitization and Reprocessing (EMDR)
                processes trauma through bilateral stimulation. Internal
                Family Systems (IFS) works with the parts of you that hold
                conflicting needs. Psychodynamic therapy traces patterns to
                their roots in earlier relationships. These are tools, and
                they have evidence behind them for specific conditions.
              </p>
              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.75,
                  color: "var(--ink-2)",
                  marginTop: 18,
                }}
              >
                Therapy is the right answer when you have a diagnosable
                condition, when you are in or close to crisis, when
                medication is part of the picture, when you need structured
                clinical work on trauma, or when the law requires a clinician
                (court-mandated treatment, custody evaluations, certain
                disability accommodations).
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", marginBottom: 18 }}>
                What peer support actually is.
              </h2>
              <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--ink-2)" }}>
                Peer support is companionship by someone who has lived a
                version of what you are living and who has been trained to
                hold space for it without trying to fix it. The phrase has
                clinical roots: in addiction recovery and serious-mental-
                illness recovery, &ldquo;peer specialists&rdquo; are a recognised
                category, often certified, sometimes Medicaid-billable. The
                consumer version of peer support is broader and less
                regulated: paid one-to-one services (like Hearth), volunteer
                platforms (7 Cups, ShareWell), and informal community
                groups.
              </p>
              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.75,
                  color: "var(--ink-2)",
                  marginTop: 18,
                }}
              >
                A peer supporter does not diagnose, does not prescribe, and
                does not treat clinical conditions. What they do, when
                trained well, is sit with you in the part of your life that
                does not fit a fifty-minute clinical hour: the recurring
                family argument, the grief that arrives in waves a year
                later, the identity question that surfaces when you move
                between cultures, the slow loneliness of being the person
                everyone leans on.
              </p>
              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.75,
                  color: "var(--ink-2)",
                  marginTop: 18,
                }}
              >
                The two factors that distinguish good peer support from bad
                peer support are continuity and training. Continuity means
                the same person across months and years, not a rotating
                cast. Training means a documented curriculum (Hearth runs
                120 hours of training, monthly peer supervision, and
                crisis-protocol certification), not a weekend workshop. Both
                matter more than the supporter&rsquo;s lived experience alone.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", marginBottom: 18 }}>
                How to decide which you need.
              </h2>
              <ul
                style={{
                  fontSize: 18,
                  lineHeight: 1.75,
                  color: "var(--ink-2)",
                  paddingLeft: 24,
                  margin: 0,
                }}
              >
                <li style={{ marginBottom: 12 }}>
                  <strong>Choose therapy</strong> if you have or suspect a
                  clinical condition (clinical depression, an anxiety
                  disorder, PTSD, OCD, bipolar disorder, an eating
                  disorder), if you are in or near a crisis state, if
                  medication is on the table, or if your situation requires
                  a clinician&rsquo;s authority (court-mandated treatment,
                  custody, disability claims).
                </li>
                <li style={{ marginBottom: 12 }}>
                  <strong>Choose peer support</strong> for the recurring,
                  non-clinical weight of a life: grief that does not need
                  diagnosis, family or in-law dynamics, caregiver
                  exhaustion, identity questions, transitions, loneliness,
                  the cost of code-switching, faith and doubt, fatherhood,
                  postpartum identity loss, career-cultural conflict.
                </li>
                <li style={{ marginBottom: 12 }}>
                  <strong>Use both</strong> if you can. Many people pair a
                  therapist for the clinical work with a peer supporter for
                  the daily weight in between. With your permission, the two
                  can coordinate.
                </li>
                <li>
                  <strong>Skip both temporarily</strong> if what you need
                  this week is an emergency room, a crisis line (988 in the
                  US, 1-866-585-0445 in Canada, 116 123 in the UK and
                  Ireland), a domestic-violence hotline, or a medical
                  professional. Neither therapy nor peer support is built
                  for acute danger.
                </li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", marginBottom: 18 }}>
                What peer support is not.
              </h2>
              <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--ink-2)" }}>
                Peer support is not a cheaper therapist. If you see a
                service marketing itself as &ldquo;therapy without the price tag,&rdquo;
                that is a red flag. They are either misrepresenting what
                they offer or operating outside their scope. Peer support
                is also not friendship. Friends mean well but get tired,
                have their own lives, and cannot hold consistent attention
                week after week. A trained peer supporter has one job in
                your relationship: to stay with you in the room.
              </p>
              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.75,
                  color: "var(--ink-2)",
                  marginTop: 18,
                }}
              >
                Peer support is not a crisis service. Volunteer-listening
                lines (7 Cups, anonymous chat platforms) are good for an
                immediate vent, but they are not designed for active
                self-harm risk, suicidal ideation, or psychiatric
                emergencies. If you are in crisis, dial 988 (US), 116 123
                (UK/Ireland), 1-866-585-0445 (Canada), or your local
                emergency number.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE HEARTH SITS */}
      <section
        style={{
          padding: "80px 0",
          background: "#FFF7EE",
          borderBottom: "1px solid var(--rule-2)",
        }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "70ch" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              Where Hearth fits in this picture
            </div>
            <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", marginBottom: 22 }}>
              Hearth is paid peer support, paired by hand, kept for the long
              term.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--ink-2)" }}>
              We exist on the peer-support side of this map. Our Keepers are
              trained peer supporters, many of them psychologists or
              counsellors by training in their home countries, and none act
              as licensed therapists here. We do not
              diagnose, do not prescribe, and we are not a crisis service.
              When something needs a clinician, your Keeper says so plainly
              and walks you to The Bridge, our network of vetted, licensed
              therapists matched by hand for fit.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 18,
              }}
            >
              Hearthside is $39 a month for biweekly Sits. Hearth Deep is
              $99 a month for weekly Sits. Both include unlimited async
              Long Talk with your Keeper, Friday reflections, the Embers
              library, and Circles. Both can run alongside therapy.
            </p>
            <div
              style={{
                marginTop: 32,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <Link href="/pricing" className="btn btn-primary btn-lg">
                See Hearth pricing <span className="arr">&rarr;</span>
              </Link>
              <Link href="/how-it-works" className="btn btn-ghost btn-lg">
                How it works
              </Link>
              <Link href="/bridge" className="btn btn-ghost btn-lg">
                About The Bridge
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}>
        <div className="wrap">
          <h2 style={{ marginBottom: 40 }}>Common questions, answered plainly.</h2>
          <div style={{ maxWidth: "70ch" }}>
            {FAQ.map((item, i) => (
              <div
                key={i}
                style={{
                  borderTop: "1px solid var(--rule)",
                  padding: "28px 0",
                }}
              >
                <h3
                  style={{
                    fontSize: "clamp(20px, 1.9vw, 24px)",
                    fontFamily: "var(--serif)",
                    fontWeight: 380,
                    marginBottom: 12,
                    color: "var(--ink)",
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.7,
                    color: "var(--ink-2)",
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section style={{ padding: "60px 0 100px" }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 18 }}>
            <span className="dot" />
            Related reading
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
              maxWidth: 1000,
            }}
          >
            <li>
              <Link
                href="/hearth-vs-therapy"
                style={{
                  display: "block",
                  padding: 20,
                  border: "1px solid var(--rule-2)",
                  borderRadius: 10,
                }}
              >
                <strong>Hearth vs. therapy</strong>
                <br />
                <span style={{ color: "var(--ink-3)", fontSize: 14 }}>
                  How Hearth specifically differs from common therapy
                  platforms.
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/hearth-vs-betterhelp"
                style={{
                  display: "block",
                  padding: 20,
                  border: "1px solid var(--rule-2)",
                  borderRadius: 10,
                }}
              >
                <strong>Hearth vs. BetterHelp</strong>
                <br />
                <span style={{ color: "var(--ink-3)", fontSize: 14 }}>
                  Costs, formats, who each fits, and the honest alternatives.
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/how-it-works"
                style={{
                  display: "block",
                  padding: 20,
                  border: "1px solid var(--rule-2)",
                  borderRadius: 10,
                }}
              >
                <strong>How a Hearth pairing works</strong>
                <br />
                <span style={{ color: "var(--ink-3)", fontSize: 14 }}>
                  Intake, matching, the first Sit, and the Long Talk.
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/learn/what-is-a-hearth-keeper"
                style={{
                  display: "block",
                  padding: 20,
                  border: "1px solid var(--rule-2)",
                  borderRadius: 10,
                }}
              >
                <strong>What is a hearth keeper?</strong>
                <br />
                <span style={{ color: "var(--ink-3)", fontSize: 14 }}>
                  The oldest domestic role there is, and why we borrowed the
                  name.
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/bridge"
                style={{
                  display: "block",
                  padding: 20,
                  border: "1px solid var(--rule-2)",
                  borderRadius: 10,
                }}
              >
                <strong>The Bridge</strong>
                <br />
                <span style={{ color: "var(--ink-3)", fontSize: 14 }}>
                  When and how Keepers hand off to licensed therapists.
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/crisis"
                style={{
                  display: "block",
                  padding: 20,
                  border: "1px solid var(--rule-2)",
                  borderRadius: 10,
                }}
              >
                <strong>If you are in crisis</strong>
                <br />
                <span style={{ color: "var(--ink-3)", fontSize: 14 }}>
                  Crisis-line numbers for the US, Canada, UK, Pakistan, and
                  beyond.
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
