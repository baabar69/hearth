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

const PUBLISHED = "2026-10-24";
const REVIEWED = "2026-10-24";
const PATH = "/learn/one-to-one-peer-support";

export const metadata: Metadata = {
  title: "One-to-One Peer Support: How It Works",
  description:
    "One trained person who has lived something similar, meeting with you regularly. How one-to-one peer support works, what research shows, and how to choose.",
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    title: "One-to-One Peer Support: How It Works",
    description:
      "What one-to-one peer support is, how it differs from groups and therapy, what the research shows, and the questions to ask before you pay anyone.",
    url: PATH,
    publishedTime: PUBLISHED,
    modifiedTime: REVIEWED,
    authors: ["Dear Hearth"],
  },
};

const FAQ = [
  {
    q: "What is one-to-one peer support?",
    a: "One-to-one peer support is a regular conversation between you and one trained supporter who has lived through something similar to what you are facing. It is sometimes called 1:1 or one-on-one peer support. The supporter listens, reflects and stays with you over time. They do not diagnose or treat, so it is not therapy or counselling.",
  },
  {
    q: "Is one-to-one peer support the same as counselling or therapy?",
    a: "No. A counsellor or therapist is a licensed or regulated professional who can assess, diagnose and treat. A peer supporter is trained to listen and support from shared experience, and does not assess, diagnose or treat. The two can run side by side, and a good peer supporter will tell you when you need a clinician.",
  },
  {
    q: "Does one-to-one peer support work?",
    a: "Modestly, and mostly for how people feel about their own lives. A 2020 meta-analysis of 19 trials found small gains in self-reported recovery and empowerment and no effect on clinical symptoms. A 2021 trial of regular, empathy-focused phone calls found lower loneliness, depression and anxiety after four weeks. If you need a condition treated, the evidence points to therapy.",
  },
  {
    q: "Is there free one-to-one peer support?",
    a: "Yes. In the US many states run free peer-run warmlines, and volunteer listening platforms such as 7 Cups offer free chats. In the UK, Samaritans listen for free, around the clock. The usual trade-off is that you rarely get the same person twice. If cost is the barrier, start with the free options.",
  },
  {
    q: "Should it be the same person every time?",
    a: "If what you want is to be known over time, yes. Seeing the same supporter means you stop retelling your story and they can notice how things change. If what you want is someone to talk to right now, a free line with a different person each time can be the better tool. The research has not settled which format works best, so treat this as a judgement, not a finding.",
  },
  {
    q: "Can I have one-to-one peer support and therapy at the same time?",
    a: "Yes, and many people do. Therapy handles the clinical work. Peer support keeps you company through the weeks in between. With your permission, the two can know about each other so neither is working blind.",
  },
];

const FORMATS_TABLE = [
  [
    "One-to-one peer support",
    "Regular conversations with one trained supporter",
    "Usually yes",
    "Being known over months, the recurring weight of a life",
    "Not clinical care. Paid services cost money.",
  ],
  [
    "Peer support groups",
    "A facilitated group sharing one experience (grief, caregiving, a diagnosis)",
    "Same group, not one person",
    "Hearing that others live it too, often free",
    "Less airtime for you. Quality depends on the facilitator.",
  ],
  [
    "Warmlines and listening lines",
    "Free phone or text lines, often peer-run, before crisis point",
    "Rarely",
    "Someone to talk to today, at no cost",
    "Limited hours on many lines. A new person each time.",
  ],
  [
    "Volunteer chat platforms",
    "Text chats with volunteer listeners",
    "Rarely",
    "An immediate vent, anonymously",
    "Training varies widely. Hard to build continuity.",
  ],
  [
    "Therapy or counselling",
    "Clinical care from a licensed professional",
    "Yes",
    "Diagnosis, treatment, trauma work, medication questions",
    "Cost and waiting lists. Structured around sessions.",
  ],
];

const QUESTIONS = [
  [
    "How are supporters trained?",
    "Ask for the number of hours and what the training covers. Listening, scope and crisis steps should all be in it. A weekend workshop is not the same as a programme.",
  ],
  [
    "What will they not do?",
    "A trustworthy service has a written scope: no diagnosis, no treatment, no medication advice. Vagueness here is a warning sign.",
  ],
  [
    "What happens in a crisis?",
    "Ask exactly what a supporter does if you disclose thoughts of self-harm. The answer should name crisis lines and a plan to help you reach clinical care, not just a disclaimer.",
  ],
  [
    "Will it be the same person?",
    "Ask whether you keep one supporter, how they are matched to you, and whether you can change if the fit is wrong.",
  ],
  [
    "Who supports the supporters?",
    "Supervision or regular case review protects you and them. Ask whether it exists and how often.",
  ],
  [
    "How do I cancel?",
    "It should be one step, with no exit interview. Ask before you pay.",
  ],
  [
    "Where do my words live?",
    "Ask where messages are stored, whether calls are recorded, who can read your notes, and how to have them deleted.",
  ],
  [
    "What does it cost, all in?",
    "Monthly price, what is included, and whether anything renews or rises automatically.",
  ],
];

const REFERENCES = [
  {
    text: "White S, Foster R, Marks J, et al. The effectiveness of one-to-one peer support in mental health services: a systematic review and meta-analysis. BMC Psychiatry. 2020;20:534.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7657356/",
  },
  {
    text: "Kahlon MK, Aksan N, Aubrey R, et al. Effect of layperson-delivered, empathy-focused program of telephone calls on loneliness, depression, and anxiety among adults during the COVID-19 pandemic: a randomized clinical trial. JAMA Psychiatry. 2021;78(6):616-622.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7903319/",
  },
  {
    text: "Dale J, Caramlau IO, Lindenmeyer A, Williams SM. Peer support telephone calls for improving health. Cochrane Database of Systematic Reviews. 2008;(4):CD006903.",
    href: "https://doi.org/10.1002/14651858.CD006903.pub2",
  },
  {
    text: "Mead S, Hilton D, Curtis L. Peer support: a theoretical perspective. Psychiatric Rehabilitation Journal. 2001;25(2):134-141.",
    href: "https://doi.org/10.1037/h0095032",
  },
];

const P = { fontSize: 18, lineHeight: 1.75, color: "var(--ink-2)" } as const;
const P_GAP = { ...P, marginTop: 18 } as const;

export default function OneToOnePeerSupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            webPageLd({
              path: PATH,
              name: "One-to-One Peer Support: How It Works",
              description:
                "What one-to-one peer support is, how it differs from groups, listening lines and therapy, what the research shows, and how to choose a service.",
              lastReviewed: REVIEWED,
            }),
            articleLd({
              path: PATH,
              headline: "One-to-One Peer Support, Explained Plainly",
              description:
                "What one-to-one peer support is, who it suits, what the evidence says, what it costs, and the questions to ask before choosing a service.",
              datePublished: PUBLISHED,
              dateModified: REVIEWED,
              wordCount: 2300,
              about: [
                "Peer support",
                "One-to-one peer support",
                "Emotional support",
                "Loneliness",
                "Mental health support",
              ],
            }),
            breadcrumbLd([
              { name: "Dear Hearth", path: "/" },
              { name: "Learn", path: "/peer-support" },
              { name: "One-to-one peer support", path: PATH },
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
              Dear Hearth
            </Link>
            {" · "}
            <Link href="/peer-support" style={{ color: "var(--ink-3)" }}>
              Learn
            </Link>
            {" · One-to-one peer support"}
          </div>
          <h1 style={{ maxWidth: "20ch", fontSize: "clamp(42px, 6.4vw, 88px)" }}>
            One-to-one peer support,
            <br />
            <span className="serif-i" style={{ color: "var(--ember)" }}>
              explained plainly.
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
            One-to-one peer support means one trained person, who has lived
            through something like what you are facing, meeting with you
            regularly to listen. Not a group, not a chat queue, and not
            therapy. Here is how it works, what the research honestly shows,
            and how to choose a service.
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
            Published 24 October 2026 · ~10 min read
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
            In the US and Canada call or text <strong>988</strong>. In the UK
            and Ireland, Samaritans on <strong>116 123</strong>. More numbers on
            our{" "}
            <Link href="/crisis" style={{ color: "var(--ember)" }}>
              crisis page
            </Link>
            . Peer support is not crisis care.
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
              <strong>One-to-one peer support</strong> is a regular
              conversation with one trained supporter who shares some of your
              experience. They listen, reflect and stay with you over time.
              They do not diagnose or treat, which is what separates it from
              counselling and therapy.
            </p>
            <p style={{ ...P, marginTop: 22 }}>
              It is one form of{" "}
              <Link href="/peer-support" style={{ color: "var(--ember)" }}>
                peer support
              </Link>
              , the broad practice of people helping each other from shared
              experience. Researchers describe that practice as built on
              mutual respect and shared responsibility rather than on one
              person being the expert (Mead, Hilton and Curtis, 2001). The
              one-to-one version takes that idea and gives it to you alone,
              with one person, on a schedule.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT DIFFERS */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <h2 style={{ maxWidth: "24ch", marginBottom: 18 }}>
            How it differs from groups, lines and therapy.
          </h2>
          <p style={{ ...P, maxWidth: "68ch", marginBottom: 32 }}>
            The same word, peer support, covers very different things. The
            biggest differences are whether you see the same person, and
            whether anyone is treating you.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 15,
                lineHeight: 1.6,
                minWidth: 760,
              }}
            >
              <thead>
                <tr>
                  {[
                    "Format",
                    "What it is",
                    "Same person each time?",
                    "Good for",
                    "The trade-off",
                  ].map((h) => (
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
                {FORMATS_TABLE.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td
                        key={i}
                        style={{
                          padding: "14px",
                          borderBottom: "1px solid var(--rule-2)",
                          color: i === 0 ? "var(--ink)" : "var(--ink-2)",
                          fontWeight: i === 0 ? 500 : 400,
                          verticalAlign: "top",
                        }}
                      >
                        {cell}
                      </td>
                    ))}
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
            For the longer comparison with clinical care, see{" "}
            <Link
              href="/learn/peer-support-vs-therapy"
              style={{ color: "var(--ember)" }}
            >
              peer support vs. therapy
            </Link>
            .
          </p>
        </div>
      </section>

      {/* WHO IT SUITS */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>
              Who it suits, and who it does not.
            </h2>
            <h3 style={{ fontSize: 24, marginBottom: 14 }}>It tends to suit you if</h3>
            <ul style={{ ...P, paddingLeft: 24, margin: 0 }}>
              <li style={{ marginBottom: 10 }}>
                What you are carrying is heavy but not an illness: grief,
                family pressure, caregiving, a move, a divorce, loneliness
                inside a busy life.
              </li>
              <li style={{ marginBottom: 10 }}>
                You want someone who remembers last month without being told.
              </li>
              <li style={{ marginBottom: 10 }}>
                A group feels too exposed, or you would rather not compete for
                airtime.
              </li>
              <li style={{ marginBottom: 10 }}>
                You have finished a course of therapy and want company, not
                treatment, for whatever comes next.
              </li>
              <li>
                You are in therapy and want support in the weeks between
                sessions.
              </li>
            </ul>
            <h3 style={{ fontSize: 24, margin: "36px 0 14px" }}>
              It is the wrong tool if
            </h3>
            <ul style={{ ...P, paddingLeft: 24, margin: 0 }}>
              <li style={{ marginBottom: 10 }}>
                You are in or near crisis, or having thoughts of harming
                yourself. Use the numbers at the top of this page today.
              </li>
              <li style={{ marginBottom: 10 }}>
                You have, or suspect you have, a condition that needs
                treatment: depression that will not lift, an anxiety
                disorder, PTSD, an eating disorder, OCD, bipolar disorder.
              </li>
              <li style={{ marginBottom: 10 }}>
                Medication is part of the question.
              </li>
              <li>
                You need clinical records for work, court, insurance or
                immigration.
              </li>
            </ul>
            <p style={{ ...P, marginTop: 26 }}>
              If you are not sure which side you are on, our guide to{" "}
              <Link
                href="/learn/do-i-need-therapy"
                style={{ color: "var(--ember)" }}
              >
                whether you need therapy or someone to talk to
              </Link>{" "}
              walks through the signs.
            </p>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>
              What the research actually shows.
            </h2>
            <p style={P}>
              The plain summary: one-to-one peer support helps people feel more
              hopeful and more in charge of their lives, by a modest amount. It
              does not reliably reduce clinical symptoms. Three bodies of
              evidence are worth knowing.
            </p>
            <p style={P_GAP}>
              <strong style={{ color: "var(--ink)" }}>
                The main review of one-to-one peer support.
              </strong>{" "}
              A 2020 systematic review and meta-analysis in BMC Psychiatry
              pooled 19 trials with 3,329 people receiving one-to-one peer
              support in mental health services. It found small improvements in
              self-reported recovery and empowerment, and no effect on clinical
              symptoms or on how much people used services (White et al.,
              2020).
            </p>
            <p style={P_GAP}>
              <strong style={{ color: "var(--ink)" }}>
                Regular phone calls and loneliness.
              </strong>{" "}
              A 2021 randomised trial in JAMA Psychiatry gave 240 adults a
              series of short, empathy-focused phone calls from briefly trained
              lay callers over four weeks, during the COVID-19 pandemic. Compared
              with a control group, they reported less
              loneliness, depression and anxiety (Kahlon et al., 2021). The
              callers were not peers in the lived-experience sense, so this is
              evidence about the format, a regular call with the same kind of
              attentive listener, more than about peer support itself.
            </p>
            <p style={P_GAP}>
              <strong style={{ color: "var(--ink)" }}>
                Peer support by telephone for health.
              </strong>{" "}
              A Cochrane review of peer support phone calls for a range of
              health conditions found some benefit, but most of the studies
              were of low quality (Dale et al., 2008).
            </p>
            <p style={P_GAP}>
              Read together: expect one-to-one peer support to help you feel
              less alone and more able to carry what you are carrying. Do not
              expect it to treat a condition. Anyone who promises clinical
              results from peer support is overselling it, and that includes
              us if we ever do.
            </p>
          </div>
        </div>
      </section>

      {/* CONTINUITY */}
      <section style={{ padding: "80px 0", background: "var(--paper-2)" }}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>
              Why the same person matters.
            </h2>
            <p style={P}>
              Most free listening services give you whoever is available. That
              is a real strength when you need someone now. It is a weakness
              when what you need is to be known.
            </p>
            <p style={P_GAP}>
              With the same supporter over months, three things change. You
              stop retelling your story from the beginning. They notice when
              something shifts, because they remember how you sounded in
              spring. And the relationship itself becomes something you can
              lean on, which is much of what people mean when they say they
              want someone to talk to.
            </p>
            <p style={P_GAP}>
              We should be straight about the limits of that argument. The
              research has not compared same-person and rotating formats head to
              head, so this is a reasoned judgement, not a proven finding. It is
              the judgement Hearth is built on, and you should weigh it as an
              argument rather than take it as fact.
            </p>
          </div>
        </div>
      </section>

      {/* FORMATS AND COST */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>
              Phone, video or messages, and what it costs.
            </h2>
            <ul
              style={{
                paddingLeft: 0,
                listStyle: "none",
                display: "grid",
                gap: 18,
                margin: 0,
              }}
            >
              {[
                [
                  "Phone.",
                  "No camera, easy from a parked car or a walk. Two of the studies above used phone calls.",
                ],
                [
                  "Video.",
                  "Closer to sitting together. You can see a face, and silence feels less awkward. It needs a private room and a steady connection.",
                ],
                [
                  "Messages.",
                  "Good for the thing you cannot say out loud yet, and for the days in between calls. Slower, and easy to keep at arm's length.",
                ],
              ].map(([head, body]) => (
                <li key={head} style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}>
                  <strong style={{ color: "var(--ink)" }}>{head}</strong> {body}
                </li>
              ))}
            </ul>
            <p style={{ ...P, marginTop: 26 }}>
              Many services combine a scheduled call with messages in between,
              which is usually the most sustainable shape.
            </p>
            <h3 style={{ fontSize: 24, margin: "36px 0 14px" }}>Cost</h3>
            <p style={P}>
              One-to-one peer support runs from free to a monthly subscription.
              Warmlines, many of them peer-run, are free in many US states.
              Volunteer listening platforms are free. Samaritans in the UK and
              Ireland listen for free, day and night. Paid services charge a
              monthly fee, and in exchange you usually get a trained supporter,
              a schedule and the same person.
            </p>
            <p style={P_GAP}>
              <strong style={{ color: "var(--ink)" }}>
                Where the free options are better:
              </strong>{" "}
              if you need someone at three in the morning, a free 24-hour line
              beats any scheduled service. If money is tight, a free peer
              support group plus a warmline covers a great deal. Paid
              one-to-one support makes sense when continuity is the thing you
              are missing and you can afford it without strain.
            </p>
          </div>
        </div>
      </section>

      {/* QUESTIONS TO ASK */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "24ch", marginBottom: 18 }}>
              Eight questions to ask before you pay anyone.
            </h2>
            <p style={P}>
              These work for any service, including ours. A good one answers
              all of them in writing without being chased.
            </p>
            <ol
              style={{
                marginTop: 26,
                paddingLeft: 24,
                display: "grid",
                gap: 16,
              }}
            >
              {QUESTIONS.map(([q, a]) => (
                <li key={q} style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}>
                  <strong style={{ color: "var(--ink)" }}>{q}</strong> {a}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section
        style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "26ch", marginBottom: 28 }}>
              Safety, and when therapy is the right answer.
            </h2>
            <p style={P}>
              A peer supporter is not a crisis service and not a clinician. If
              a conversation reaches self-harm, abuse, psychosis or anything
              that needs treatment, a good supporter says so plainly, gives
              you the crisis numbers and helps you find clinical care. They do
              not quietly carry on.
            </p>
            <p style={P_GAP}>
              Choose therapy instead, or as well, when you have a diagnosis or
              suspect one, when symptoms are affecting sleep, work or eating,
              when trauma is involved, or when medication might help. Cost is a
              real obstacle, and there are routes around it in our guide to{" "}
              <Link
                href="/learn/cant-afford-therapy"
                style={{ color: "var(--ember)" }}
              >
                cheap and free therapy options
              </Link>
              . If you are weighing other routes entirely, see{" "}
              <Link
                href="/learn/alternatives-to-therapy"
                style={{ color: "var(--ember)" }}
              >
                alternatives to therapy
              </Link>
              .
            </p>
          </div>
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
            <p style={P}>
              Hearth is paid one-to-one peer support. You are matched by hand
              with one <strong>Keeper</strong>, a trained peer supporter rather
              than a clinician, and you keep the same person for as long as it
              serves you. You talk in a <strong>Sit</strong>, a 35 to 60 minute
              video or audio call, every two weeks ($39 a month) or every week
              ($99 a month). In between there is the <strong>Long Talk</strong>,
              an email thread your Keeper replies to within a day, and a short
              note from them every Friday. After your first Sit you can ask
              for a different Keeper at no charge, and you can cancel in one
              click.
            </p>
            <p style={P_GAP}>
              It suits the first list on this page, not the second. When
              something needs a clinician, your Keeper says so and helps you
              find one.
            </p>
            <div className="cta-row" style={{ marginTop: 32 }}>
              <Link href="/intake" className="btn btn-primary btn-lg">
                Start the 12-minute intake <span className="arr">&rarr;</span>
              </Link>
              <Link href="/how-it-works" className="btn btn-ghost btn-lg">
                How it works
              </Link>
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
                <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--ink-2)" }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENCES */}
      <section
        style={{ padding: "60px 0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              References
            </div>
            <ol
              style={{
                paddingLeft: 20,
                margin: 0,
                display: "grid",
                gap: 12,
                fontSize: 15,
                lineHeight: 1.6,
                color: "var(--ink-2)",
              }}
            >
              {REFERENCES.map((r) => (
                <li key={r.href}>
                  {r.text}{" "}
                  <a
                    href={r.href}
                    rel="noopener"
                    style={{ color: "var(--ember)", wordBreak: "break-all" }}
                  >
                    {r.href.replace("https://", "")}
                  </a>
                </li>
              ))}
            </ol>
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
              {[
                ["/peer-support", "What is peer support? A plain-English guide"],
                ["/learn/peer-support-vs-therapy", "Peer support vs. therapy: the honest difference"],
                ["/learn/do-i-need-therapy", "Do I need therapy, or someone to talk to?"],
                ["/learn/alternatives-to-therapy", "Alternatives to therapy, and when each one fits"],
                ["/pricing", "Hearth pricing"],
                ["/crisis", "Crisis resources by country"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}
                >
                  {label} &rarr;
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
