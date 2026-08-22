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

const PUBLISHED = "2026-08-22";
const REVIEWED = "2026-08-22";

export const metadata: Metadata = {
  title: "Do I Need Therapy, or Someone to Talk To?",
  description:
    "A plain way to tell the difference. What points toward therapy, what points toward support, and the full range of options between them. Written by a peer-support service that refers out for clinical care.",
  alternates: { canonical: "/learn/do-i-need-therapy" },
  openGraph: {
    type: "article",
    title: "Do I Need Therapy, or Just Someone to Talk To?",
    description:
      "What points toward therapy, what points toward support, and how to tell which one you are actually looking for.",
    url: "/learn/do-i-need-therapy",
    publishedTime: PUBLISHED,
    modifiedTime: REVIEWED,
    authors: ["Hearth"],
  },
};

const FAQ = [
  {
    q: "Do I need therapy, or do I just need someone to talk to?",
    a: "If what you are carrying is interfering with daily functioning, has lasted months without lifting, involves patterns you cannot break alone, or touches trauma, self-harm or substance use, that points toward therapy. If it is painful but not disordered, a hard chapter rather than an illness, and what you mostly want is to not be alone in it, that points toward support. Many people need both at different times, and plenty of people move between them over a life.",
  },
  {
    q: "Is it wrong to go to therapy if I am not mentally ill?",
    a: "No. Therapy is not reserved for diagnosable conditions, and plenty of people use it for stress, life transitions and self-understanding. The question is not whether you deserve it. The question is whether a clinical tool is the right shape for what you are carrying, and whether you can sustain the cost and the waiting.",
  },
  {
    q: "What are the alternatives to therapy?",
    a: "Peer support, support groups such as those run by NAMI, warmlines, community and faith groups, coaching for goal-directed work, and simply talking to people who already know you. None of these are therapy and none should be sold as therapy. Each does something therapy does not, mostly around continuity, cost and not requiring you to be unwell to qualify.",
  },
  {
    q: "Can peer support replace therapy?",
    a: "No, and any peer-support service claiming otherwise is one to avoid. Peer supporters do not diagnose, do not treat conditions and do not prescribe. If you have a clinical condition, are in or near crisis, or need medication, therapy or psychiatry is the right tool and peer support is not a substitute for it. Peer support can sit alongside therapy, and often does.",
  },
  {
    q: "How do I know if my grief is normal or something more?",
    a: "Ordinary grief is intensely painful and comes in waves that gradually spread further apart, while you slowly resume the rest of your life. Signs that warrant clinical attention include grief that does not shift at all over many months, an inability to function that persists, intrusive images that will not stop, or thoughts of harming yourself. Grief itself is not a disorder and does not need treating. A clinician can help you tell the difference if you are unsure.",
  },
];

export default function DoINeedTherapyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            webPageLd({
              path: "/learn/do-i-need-therapy",
              name: "Do I Need Therapy, or Just Someone to Talk To?",
              description:
                "How to tell whether what you are carrying calls for clinical care or for support, and what the full range of options looks like.",
              lastReviewed: REVIEWED,
            }),
            articleLd({
              path: "/learn/do-i-need-therapy",
              headline: "Do I Need Therapy, or Just Someone to Talk To?",
              description:
                "What points toward therapy, what points toward support, and the full range of options between them.",
              datePublished: PUBLISHED,
              dateModified: REVIEWED,
              wordCount: 2100,
              about: [
                "Therapy",
                "Mental health support",
                "Peer support",
                "Counselling",
                "Emotional support",
              ],
            }),
            breadcrumbLd([
              { name: "Hearth", path: "/" },
              { name: "Learn", path: "/learn/do-i-need-therapy" },
              { name: "Do I need therapy", path: "/learn/do-i-need-therapy" },
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
            <Link href="/" style={{ color: "var(--ink-3)" }}>
              Hearth
            </Link>
            {" · "}
            <Link href="/learn/do-i-need-therapy" style={{ color: "var(--ink-3)" }}>
              Learn
            </Link>
            {" · Do I need therapy?"}
          </div>
          <h1 style={{ maxWidth: "20ch", fontSize: "clamp(42px, 6.4vw, 88px)" }}>
            Do I need therapy,
            <br />
            <span className="serif-i" style={{ color: "var(--ember)" }}>
              or someone to talk to?
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
            Most people asking this have already sensed the answer and want
            permission to trust it. Here is a plain way to tell the difference,
            including the cases where the honest answer is therapy.
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
            Published 22 August 2026 · ~9 min read
          </div>
        </div>
      </section>

      {/* CRISIS FIRST */}
      <section style={{ padding: "28px 0", background: "var(--paper-3)" }}>
        <div className="wrap">
          <p
            style={{
              maxWidth: "72ch",
              fontSize: 16,
              lineHeight: 1.65,
              color: "var(--ink)",
              margin: 0,
            }}
          >
            <strong>If you are in crisis, start here, not with this article.</strong>{" "}
            In the US call or text <strong>988</strong>. In the UK and Ireland,
            Samaritans on <strong>116 123</strong>. In Canada,{" "}
            <strong>1-866-585-0445</strong>. More numbers on our{" "}
            <Link href="/crisis" style={{ color: "var(--ember)" }}>
              crisis page
            </Link>
            . If you are thinking about harming yourself, that is a clinical
            situation and it needs a clinician, today.
          </p>
        </div>
      </section>

      {/* THE SHORT ANSWER */}
      <section style={{ padding: "64px 0", background: "var(--paper-2)" }}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              The short answer
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
              If what you are carrying is <strong>interfering with your daily
              functioning</strong>, has lasted months without lifting, involves
              patterns you cannot break alone, or touches trauma, self-harm or
              substance use, that points toward <strong>therapy</strong>.
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
              If it is painful but not disordered, a hard chapter rather than an
              illness, and what you mostly want is to <strong>not be alone in
              it</strong>, that points toward <strong>support</strong>.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--ink-2)",
                marginTop: 22,
              }}
            >
              Those are not two tribes. Many people need both, at different
              times, and move between them across a life. The rest of this page
              is about telling which one you are looking for right now.
            </p>
          </div>
        </div>
      </section>

      {/* SIGNS TOWARD THERAPY */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>
              What points toward therapy.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--ink-2)" }}>
              None of these mean something is wrong with you. They mean the tool
              you need is a clinical one, in the same way a broken bone needs an
              x-ray rather than a good listener.
            </p>
            <ul
              style={{
                marginTop: 26,
                paddingLeft: 0,
                listStyle: "none",
                display: "grid",
                gap: 18,
              }}
            >
              {[
                [
                  "It is affecting how you function.",
                  "Sleep, appetite, work, the ability to leave the house or answer messages. When the basic machinery of a day stops working, that is a clinical signal.",
                ],
                [
                  "It has not shifted in months.",
                  "Hard chapters move, even slowly. Something that has sat at the same intensity since spring is behaving differently from ordinary difficulty.",
                ],
                [
                  "You keep repeating a pattern you can see and cannot stop.",
                  "The same shape of relationship, the same collapse at the same point. Seeing it clearly and still repeating it is exactly what therapy is built for.",
                ],
                [
                  "Trauma is involved.",
                  "Assault, abuse, an accident, combat, a medical event. Trauma has specific evidence-based treatments and those need a trained clinician.",
                ],
                [
                  "Substances have become part of how you cope.",
                  "Not a moral matter. It is a clinical one, and it responds to clinical help.",
                ],
                [
                  "You have thoughts of harming yourself.",
                  "This is not a judgement call. Please use the numbers above today.",
                ],
                [
                  "Medication is or might be part of the picture.",
                  "Only a prescriber can have that conversation with you.",
                ],
                [
                  "You already have a diagnosis.",
                  "Depression, anxiety disorder, PTSD, OCD, bipolar disorder, an eating disorder. These have treatments, and treatment is the point.",
                ],
              ].map(([head, body]) => (
                <li
                  key={head}
                  style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}
                >
                  <strong style={{ color: "var(--ink)" }}>{head}</strong>{" "}
                  {body}
                </li>
              ))}
            </ul>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 26,
              }}
            >
              If several of those are true, the rest of this page is less
              important than finding a clinician. Cost and waiting lists are real
              obstacles and we have written about{" "}
              <Link
                href="/learn/cant-afford-therapy"
                style={{ color: "var(--ember)" }}
              >
                what to do when you cannot afford therapy
              </Link>
              , but the obstacle does not change the answer.
            </p>
          </div>
        </div>
      </section>

      {/* SIGNS TOWARD SUPPORT */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>
              What points toward support.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--ink-2)" }}>
              A great deal of human difficulty is not a disorder. It is weight.
              It is real, it is heavy, and it does not have a treatment because
              it is not an illness.
            </p>
            <ul
              style={{
                marginTop: 26,
                paddingLeft: 0,
                listStyle: "none",
                display: "grid",
                gap: 18,
              }}
            >
              {[
                [
                  "Grief that is painful but moving.",
                  "Bereavement is not a condition. It is the cost of having loved someone, and mostly what it needs is company and time rather than treatment.",
                ],
                [
                  "Family and in-law dynamics.",
                  "Nothing here is diagnosable. It is a long negotiation that keeps recurring and rarely resolves cleanly.",
                ],
                [
                  "Caregiving exhaustion.",
                  "The problem is not your mind. It is that you are doing too much for too long with too little relief.",
                ],
                [
                  "Identity, belonging and the cost of code-switching.",
                  "Questions about who you are between cultures or life stages are not symptoms.",
                ],
                [
                  "Loneliness inside a full life.",
                  "Partnered, employed, surrounded by people, and still nobody actually knows what your year has been like.",
                ],
                [
                  "A transition rather than a crisis.",
                  "New parenthood, a move, a career change, a divorce, retirement. Disorienting, and ordinary.",
                ],
                [
                  "You have done therapy and it worked.",
                  "You are not in a clinical episode now. What you want is someone who stays, so you do not arrive at the next hard thing from a standing start.",
                ],
              ].map(([head, body]) => (
                <li
                  key={head}
                  style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}
                >
                  <strong style={{ color: "var(--ink)" }}>{head}</strong>{" "}
                  {body}
                </li>
              ))}
            </ul>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 26,
              }}
            >
              There is a specific and common version of this: you booked a
              therapist, sat down, and found yourself explaining that nothing is
              really wrong. That feeling is worth listening to. It usually means
              the thing you are carrying is real but is not clinical, and a
              clinical setting is the wrong room for it.
            </p>
          </div>
        </div>
      </section>

      {/* THE FULL LANDSCAPE */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <h2 style={{ maxWidth: "24ch", marginBottom: 32 }}>
            Everything that sits between a friend and a clinician.
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 15,
                lineHeight: 1.6,
                minWidth: 680,
              }}
            >
              <thead>
                <tr>
                  {["Option", "What it is for", "The honest trade-off"].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: "12px 14px",
                        borderBottom: "1px solid var(--rule)",
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--ink-3)",
                        fontWeight: 500,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Therapy",
                    "Diagnosis, treatment, trauma work, medication conversations",
                    "Expensive, often a waiting list, and structured around appointments rather than continuity",
                  ],
                  [
                    "Psychiatry",
                    "Medication and complex diagnosis",
                    "Harder to access, usually the longest wait of all",
                  ],
                  [
                    "Support groups (NAMI and similar)",
                    "Shared experience of a specific thing, free",
                    "Group rather than individual, and quality varies by facilitator",
                  ],
                  [
                    "Warmlines",
                    "Talking to someone before crisis, free",
                    "Different person each time, limited hours, badly under-known",
                  ],
                  [
                    "7 Cups and listener platforms",
                    "Immediate free listening",
                    "Volunteers, variable training, and rarely the same person twice",
                  ],
                  [
                    "Coaching",
                    "Goal-directed change and accountability",
                    "Unregulated, forward-looking, not built for grief or loss",
                  ],
                  [
                    "Friends and family",
                    "Being known already, which nothing else can replicate",
                    "They are inside your life, so some things cannot be said to them",
                  ],
                  [
                    "Peer support",
                    "Continuity, being witnessed, the recurring weight of a life",
                    "Not clinical care. Cannot diagnose or treat. Usually paid.",
                  ],
                ].map(([opt, forWhat, tradeoff]) => (
                  <tr key={opt}>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid var(--rule-2)",
                        color: "var(--ink)",
                        fontWeight: 500,
                        verticalAlign: "top",
                      }}
                    >
                      {opt}
                    </td>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid var(--rule-2)",
                        color: "var(--ink-2)",
                        verticalAlign: "top",
                      }}
                    >
                      {forWhat}
                    </td>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid var(--rule-2)",
                        color: "var(--ink-2)",
                        verticalAlign: "top",
                      }}
                    >
                      {tradeoff}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "var(--ink-3)",
              marginTop: 22,
              maxWidth: "68ch",
            }}
          >
            Several of these are free. If a free option fits what you are
            carrying, use the free option. We would rather you got the right help
            than our help. If you are weighing up the online therapy platforms
            specifically, we set the category against Hearth in{" "}
            <Link
              href="/hearth-vs-betterhelp"
              style={{ color: "var(--ember)" }}
            >
              Hearth vs. therapy apps
            </Link>
            .
          </p>
        </div>
      </section>

      {/* WHERE HEARTH FITS */}
      <section style={{ padding: "80px 0", background: "var(--paper-2)" }}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              Where we fit
            </div>
            <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>
              What Hearth is, in one paragraph.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--ink-2)" }}>
              Hearth is a peer-support membership. You are matched with one{" "}
              <strong>Keeper</strong>, a trained peer companion rather than a
              clinician, and you keep the same person for as long as it serves
              you. You talk in a <strong>Sit</strong>, a scheduled video or audio
              conversation, and in between you have the{" "}
              <strong>Long Talk</strong>, a written thread that stays open.
              Nobody rotates. You never explain your situation from the beginning
              twice.
            </p>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 20,
              }}
            >
              That is the whole proposition, and it is deliberately narrow. It
              suits the second list on this page and not the first.
            </p>
          </div>
        </div>
      </section>

      {/* WHEN TO CHOOSE THERAPY OVER US */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "26ch", marginBottom: 28 }}>
              When you should choose therapy over Hearth.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--ink-2)" }}>
              We would rather write this plainly than have you find out after
              paying us.
            </p>
            <ul
              style={{
                marginTop: 24,
                paddingLeft: 0,
                listStyle: "none",
                display: "grid",
                gap: 14,
              }}
            >
              {[
                "You have a diagnosis, or you suspect you have one.",
                "You are in or near crisis, or you are having thoughts of self-harm.",
                "Medication is part of the question.",
                "You need trauma-specific treatment.",
                "Substance use has become part of how you cope.",
                "You need documentation for work, court, immigration or insurance. Hearth does not produce clinical records because it does not produce clinical care.",
                "You need someone who can coordinate with your GP or care team.",
              ].map((item) => (
                <li
                  key={item}
                  style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--ink-2)",
                marginTop: 26,
              }}
            >
              If someone joins Hearth and it becomes clear that clinical care is
              what they need, their Keeper says so and helps them get there
              through <strong>The Bridge</strong>, our referral network of
              licensed therapists. The Keeper stays alongside them through it,
              because being handed off and dropped is its own small injury.
            </p>
            <div
              style={{
                marginTop: 30,
                padding: "24px 28px",
                background: "var(--paper)",
                border: "1px solid var(--rule-2)",
              }}
            >
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "var(--ink-2)",
                  margin: 0,
                }}
              >
                <strong style={{ color: "var(--ink)" }}>
                  Peer support is not a cheaper therapy.
                </strong>{" "}
                Keepers do not diagnose, do not treat conditions and do not
                prescribe. Any service that blurs that line is worth walking away
                from, including this one if we ever do it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <h2 style={{ maxWidth: "20ch", marginBottom: 36 }}>
            Common questions.
          </h2>
          <div style={{ maxWidth: "68ch", display: "grid", gap: 32 }}>
            {FAQ.map((item) => (
              <div key={item.q}>
                <h3 style={{ marginBottom: 12 }}>{item.q}</h3>
                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.75,
                    color: "var(--ink-2)",
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEEP READING */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              Keep reading
            </div>
            <div style={{ display: "grid", gap: 18, marginTop: 8 }}>
              <Link
                href="/learn/cant-afford-therapy"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Cannot afford therapy? What to actually do &rarr;
              </Link>
              <Link
                href="/learn/peer-support-vs-therapy"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Peer support vs. therapy: the honest difference &rarr;
              </Link>
              <Link
                href="/hearth-vs-therapy"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Hearth vs. therapy: the honest comparison &rarr;
              </Link>
              <Link
                href="/bridge"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                The Bridge: how we refer out for clinical care &rarr;
              </Link>
              <Link
                href="/crisis"
                style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
              >
                Crisis resources by country &rarr;
              </Link>
            </div>
            <div className="cta-row" style={{ marginTop: 44 }}>
              <Link href="/#cta" className="btn btn-primary btn-lg">
                Pull up a chair <span className="arr">&rarr;</span>
              </Link>
              <Link href="/pricing" className="btn btn-ghost btn-lg">
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
