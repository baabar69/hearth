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
const PATH = "/learn/alternatives-to-therapy";

export const metadata: Metadata = {
  title: "Alternatives to Therapy, and When They Fit",
  description:
    "Support groups, warmlines, peer support, self-help, coaching and AI, compared on cost and fit, with a plain guide to when therapy is still the answer.",
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    title: "Alternatives to Therapy, and When They Fit",
    description:
      "Every common alternative to therapy, what it costs, what it is good for, and when therapy is still the right answer.",
    url: PATH,
    publishedTime: PUBLISHED,
    modifiedTime: REVIEWED,
    authors: ["Hearth"],
  },
};

const FAQ = [
  {
    q: "What can I do instead of therapy?",
    a: "If what you are carrying is heavy but not clinical, the main alternatives are one-to-one peer support (such as Hearth, where one trained listener stays with you for years), free support groups such as NAMI Connection, warmlines staffed by peers, free listening lines, structured self-help based on CBT, coaching for goal-directed change, and steady changes to sleep, movement and routine. Talking to a faith or community leader, or to a friend who already knows you, also counts. None of these treats a mental illness. If you have a diagnosis, thoughts of self-harm, trauma, or something that is stopping you from functioning, therapy is still the answer.",
  },
  {
    q: "What is better than therapy?",
    a: "Nothing is better than therapy at what therapy is for: diagnosing and treating mental illness. But therapy is not the best tool for everything. For grief that is painful but moving, loneliness, family pressure or a hard transition, many people find that continuity, being listened to by the same person over time, matters more than clinical technique. That is what Hearth is built for. The right question is not which is better, but which one fits what you are carrying right now.",
  },
  {
    q: "Can peer support replace therapy?",
    a: "No. Peer supporters do not diagnose, treat conditions or prescribe, and the research shows peer support mostly helps with things like hope, empowerment and feeling less alone rather than clinical symptoms. It can sit alongside therapy, or come before or after it, and for non-clinical weight it may be all someone needs. If you have a clinical condition or are in crisis, peer support is not a substitute.",
  },
  {
    q: "Is a life coach the same as a therapist?",
    a: "No. Therapists are licensed clinicians trained to diagnose and treat mental illness. Coaching is not a regulated profession in the US, Canada or the UK, so anyone can call themselves a coach, and good coaches focus on goals, decisions and accountability rather than healing. A coach can be worth it for a career change or a stuck project. A coach should not be your plan for depression, trauma or an eating disorder.",
  },
  {
    q: "Can I use ChatGPT instead of therapy?",
    a: "An AI chatbot can help you put feelings into words, rehearse a hard conversation or find information at 3am, and it costs little or nothing. It is not a person, it does not know you over time unless you tell it everything again, it can be confidently wrong, and what you type may be stored or used depending on the service and your settings. It is not a crisis service and not treatment. Use it as a notebook that talks back, not as your care.",
  },
  {
    q: "Can I combine alternatives with therapy?",
    a: "Yes, and many people do. A support group or peer supporter between therapy sessions, exercise and sleep alongside treatment, or a self-help workbook your therapist recommends are all common combinations. If you are in therapy, tell your therapist what else you are using, so the pieces work together.",
  },
  {
    q: "Can I pay someone to listen to me?",
    a: "Yes. Hearth matches you by hand with one trained listener (a Keeper) who stays with you for years, from $39 a month for a video or audio call every two weeks. Other paid peer support services exist, and free warmlines and volunteer listening lines connect you with whoever is available. Whichever you choose, check four things: whether you get the same person each time, what training they have, what they do if you are in crisis, and how easy it is to cancel.",
  },
];

type Option = {
  name: string;
  cost: string;
  goodFor: string;
  notFor: string;
  notForLabel?: string;
  samePerson: string;
  body: string;
  ours?: boolean;
  href?: string;
};

const OUR_TAG = {
  display: "inline-block",
  marginLeft: 10,
  padding: "2px 8px",
  borderRadius: 999,
  border: "1px solid var(--ember)",
  color: "var(--ember)",
  fontFamily: "var(--mono)",
  fontSize: 10,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  fontWeight: 500,
  verticalAlign: "middle",
  whiteSpace: "nowrap" as const,
};

const DEAR_HEARTH: Option = {
  name: "Hearth",
  href: "/how-it-works",
  ours: true,
  cost: "$39 a month (a call every two weeks) or $99 (weekly)",
  samePerson: "Yes, for years.",
  goodFor: "The recurring weight of a life: grief, family pressure, loneliness, caregiving, transitions.",
  notForLabel: "Also included",
  notFor: "Matched by hand within 72 hours. Free change of Keeper after your first Sit. Cancel any time in one click.",
  body: "One Keeper (a trained peer listener), matched to you by hand and kept for years. You talk in a Sit, a 35 to 60 minute video or audio call, every two weeks or every week. In between there is the Long Talk, a message thread your Keeper replies to within a day, and a short note from them every Friday. Every Keeper completes Hearth's 120-hour training, a background check and monthly supervision, and many trained as psychologists or counsellors in their home countries. Peer support, not therapy.",
};

const CONNECTION: Option[] = [
  DEAR_HEARTH,
  {
    name: "Support groups",
    cost: "Usually free",
    goodFor: "Shared experience of one specific thing: a diagnosis, a loss, caring for someone.",
    notFor: "People who need one-to-one attention, or who freeze in groups.",
    samePerson: "Same group, not one-to-one.",
    body: "NAMI Connection groups are free, peer-led, 90 minutes long, for adults 18 and over, and many now meet online. Grief, caregiver and condition-specific groups run through hospices, hospitals and charities. Quality depends heavily on the facilitator, so try two or three before deciding.",
  },
  {
    name: "Warmlines",
    cost: "Free",
    goodFor: "Talking to someone before things become a crisis, often someone with lived experience.",
    notFor: "Emergencies (use 988), or anyone who wants an ongoing relationship.",
    samePerson: "No. You talk to whoever answers.",
    body: "Warmlines are free, confidential phone lines staffed by peers, and the American Psychiatric Association counts about 30 US states with one. Hours vary. NAMI keeps a national directory. They are badly under-known, and for a hard evening they can be exactly right.",
  },
  {
    name: "Free listening lines and chat",
    cost: "Free",
    goodFor: "Being heard right now, at any hour, without booking anything.",
    notFor: "Continuity. You will usually explain yourself from the start each time.",
    samePerson: "Rarely.",
    body: "Volunteer listener platforms such as 7 Cups connect you with a trained volunteer by text, often within minutes. Training and experience vary by volunteer. Useful for an immediate vent.",
  },
  {
    name: "Faith or community leaders",
    cost: "Free",
    goodFor: "Questions of meaning, family and belonging, held inside a tradition you share.",
    notFor: "Anything where you fear judgement from that same community, or clinical conditions.",
    samePerson: "Yes, often for years.",
    body: "An imam, priest, rabbi, pandit, granthi or elder can offer something no service can: someone who knows your world. The limit is that they are inside it, so some things are hard to say to them.",
  },
  {
    name: "Friends and family",
    cost: "Free",
    goodFor: "Being known already. Nothing else replicates that.",
    notFor: "The things you cannot say to people inside your own life.",
    samePerson: "Yes.",
    body: "Underused because people do not want to be a burden. One honest conversation with a friend often does more than a month of apps. The cost is real too: friends get tired, and they have their own week.",
  },
];

const OTHER: Option[] = [
  {
    name: "One-to-one peer support",
    cost: "Free (volunteer) to paid monthly",
    goodFor: "The recurring weight of a life: grief, family pressure, loneliness, transitions.",
    notFor: "Diagnosis, treatment, trauma processing, medication, crisis.",
    samePerson: "Depends on the service. Ask before you pay.",
    body: "A trained peer supporter, someone who listens rather than treats, meets with you regularly. Some services rotate supporters; some keep you with one person, as Hearth does.",
  },
  {
    name: "Structured self-help",
    cost: "Free to the price of a book or app",
    goodFor: "Learning skills for worry, low mood and sleep, at your own pace.",
    notFor: "Severe or worsening symptoms, or people who need another person to keep going.",
    samePerson: "No person involved, unless it is guided.",
    body: "CBT-based workbooks, free online courses and apps teach the same core skills therapists use for anxiety and low mood. In England, NHS Talking Therapies is free, takes self-referrals, and can include guided self-help with a practitioner. Self-help works best when someone checks in with you, even lightly.",
  },
  {
    name: "Body and routine",
    cost: "Free",
    goodFor: "The floor under everything else: sleep, movement, daylight, food, time outdoors.",
    notFor: "Replacing treatment for a clinical condition.",
    samePerson: "Not applicable.",
    body: "Unglamorous and real. Regular sleep, a daily walk, writing three lines at night: none of it is therapy, and all of it changes the ground you are standing on. Journaling in particular is a common first step for people who are not ready to say things out loud yet.",
  },
  {
    name: "Coaching",
    cost: "Varies widely; unregulated",
    goodFor: "Goals, decisions, career changes, accountability.",
    notFor: "Mental illness, grief or trauma. Coaching looks forward, not back.",
    samePerson: "Yes.",
    body: "Coaching is not a regulated profession in the US, Canada or the UK, so anyone can use the title. A good coach asks what matters, what is in the way, and what the next step is. Ask about training and what they do when something clinical comes up.",
  },
  {
    name: "AI chatbots",
    cost: "Free to low monthly",
    goodFor: "Putting feelings into words, rehearsing a hard conversation, 3am questions.",
    notFor: "Crisis, treatment, or being known by a person over time.",
    samePerson: "There is no person.",
    body: "Always available and never tired. Also confidently wrong at times, not built for emergencies, and what you type may be stored or used to train models depending on the service and your settings. Read the privacy settings before you share anything you would not want kept.",
  },
];

const TABLE: Array<[string, string, string, string, string]> = [
  ["Hearth", "$39 a month (a call every two weeks) or $99 (weekly)", "Yes, for years", "No, peer support", "Ongoing weight that is not an illness, with one person who stays"],
  ["Therapy", "Cash-pay average about $143 a session in the US", "Usually the same therapist; some apps reassign", "Yes", "Diagnosis, treatment, trauma, patterns you cannot break alone"],
  ["Low-cost therapy (Open Path, sliding scale, clinics)", "$40–70 a session through Open Path, plus a $65 one-time fee", "Usually", "Yes", "People who need therapy but cannot pay full rates"],
  ["Support groups", "Free", "Same group, not one-to-one", "No", "Shared experience of one specific thing"],
  ["Warmlines", "Free", "No", "No", "A hard evening, before it becomes a crisis"],
  ["Free listening lines", "Free", "Rarely", "No", "Being heard right now"],
  ["Other one-to-one peer support", "Free to paid", "Depends on the service", "No", "Ongoing weight that is not an illness"],
  ["Self-help (CBT books, courses, apps)", "Free to low", "No", "Uses clinical methods, not care", "Building skills for worry and low mood"],
  ["Coaching", "Varies; unregulated", "Yes", "No", "Goals and decisions"],
  ["AI chatbots", "Free to low", "No person", "No", "Thinking out loud at any hour"],
  ["Faith or community leaders, friends", "Free", "Yes", "No", "Meaning, belonging, being known"],
];

const REFERENCES = [
  {
    text: "Zhu JM, Huntington A, Haeder S, et al. Insurance acceptance and cash pay rates for psychotherapy in the US. Health Affairs Scholar. 2024;2(9):qxae110.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11412241/",
  },
  {
    text: "Pfeiffer PN, Heisler M, Piette JD, et al. Efficacy of peer support interventions for depression: a meta-analysis. General Hospital Psychiatry. 2011;33(1):29-36.",
    href: "https://pubmed.ncbi.nlm.nih.gov/21353125/",
  },
  {
    text: "Lloyd-Evans B, Mayo-Wilson E, Harrison B, et al. A systematic review and meta-analysis of randomised controlled trials of peer support for people with severe mental illness. BMC Psychiatry. 2014;14:39.",
    href: "https://pubmed.ncbi.nlm.nih.gov/24528545/",
  },
  {
    text: "White S, Foster R, Marks J, et al. The effectiveness of one-to-one peer support in mental health services: a systematic review and meta-analysis. BMC Psychiatry. 2020;20(1):534.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7657356/",
  },
  {
    text: "Kahlon MK, Aksan N, Aubrey R, et al. Effect of layperson-delivered, empathy-focused program of telephone calls on loneliness, depression, and anxiety among adults during the COVID-19 pandemic: a randomized clinical trial. JAMA Psychiatry. 2021;78(6):616-622.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7903319/",
  },
  {
    text: "American Psychiatric Association. Warm lines: providing help before a crisis develops.",
    href: "https://www.psychiatry.org/News-room/APA-Blogs/Warm-Lines-Providing-Help-Before-a-Crisis-Develops",
  },
  {
    text: "NAMI. National warmline directory.",
    href: "https://helplinefaqs.nami.org/article/577-nami-national-warmline-directory",
  },
  {
    text: "NAMI. NAMI Connection recovery support groups.",
    href: "https://www.nami.org/support-groups/nami-connection/",
  },
  {
    text: "Open Path Collective. Session rates and membership (checked 24 October 2026).",
    href: "https://openpathcollective.org/",
  },
  {
    text: "BetterHelp. Frequently asked questions: pricing (checked 24 October 2026).",
    href: "https://www.betterhelp.com/faq/",
  },
  {
    text: "NHS. Find NHS Talking Therapies for anxiety and depression.",
    href: "https://www.nhs.uk/nhs-services/mental-health-services/find-nhs-talking-therapies-for-anxiety-and-depression/",
  },
  {
    text: "988 Suicide and Crisis Lifeline (US) and 9-8-8 Suicide Crisis Helpline (Canada).",
    href: "https://988lifeline.org/",
  },
];

const P = { fontSize: 18, lineHeight: 1.75, color: "var(--ink-2)" } as const;
const SECTION = { padding: "80px 0", borderBottom: "1px solid var(--rule-2)" } as const;

function OptionCard({ o }: { o: Option }) {
  const label = {
    fontFamily: "var(--mono)",
    fontSize: 10.5,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "var(--ink-3)",
    marginBottom: 4,
  };
  return (
    <article
      style={{
        background: "var(--paper)",
        border: o.ours ? "1px solid var(--ember)" : "1px solid var(--rule-2)",
        borderLeft: o.ours ? "4px solid var(--ember)" : "1px solid var(--rule-2)",
        borderRadius: 10,
        padding: "24px 24px 26px",
        boxShadow: o.ours ? "0 20px 40px -32px rgba(156,42,26,0.45)" : undefined,
      }}
    >
      <h3 style={{ fontSize: 24, marginBottom: 12 }}>
        {o.href ? (
          <Link href={o.href} style={{ color: "var(--ink)" }}>
            {o.name}
          </Link>
        ) : (
          o.name
        )}
        {o.ours && <span style={OUR_TAG}>Our service</span>}
      </h3>
      <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--ink-2)", margin: 0 }}>
        {o.body}
      </p>
      <dl
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 14,
          marginTop: 18,
          paddingTop: 16,
          borderTop: "1px solid var(--rule-2)",
        }}
      >
        <div>
          <dt style={label}>Cost</dt>
          <dd style={{ margin: 0, fontSize: 15, color: "var(--ink)" }}>{o.cost}</dd>
        </div>
        <div>
          <dt style={label}>Same person?</dt>
          <dd style={{ margin: 0, fontSize: 15, color: "var(--ink)" }}>{o.samePerson}</dd>
        </div>
        <div>
          <dt style={label}>Good for</dt>
          <dd style={{ margin: 0, fontSize: 15, color: "var(--ink-2)" }}>{o.goodFor}</dd>
        </div>
        <div>
          <dt style={label}>{o.notForLabel ?? "Not for"}</dt>
          <dd style={{ margin: 0, fontSize: 15, color: "var(--ink-2)" }}>{o.notFor}</dd>
        </div>
      </dl>
    </article>
  );
}

export default function AlternativesToTherapyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            webPageLd({
              path: PATH,
              name: "Alternatives to Therapy, and When They Fit",
              description:
                "Every common alternative to therapy compared on cost and fit, with a plain guide to when therapy is still the answer.",
              lastReviewed: REVIEWED,
            }),
            articleLd({
              path: PATH,
              headline: "Alternatives to therapy, and when therapy is still the answer",
              description:
                "Support groups, warmlines, peer support, self-help, coaching and AI chatbots compared on cost, fit and continuity.",
              datePublished: PUBLISHED,
              dateModified: REVIEWED,
              wordCount: 3200,
              about: [
                "Alternatives to therapy",
                "Peer support",
                "Support groups",
                "Warmlines",
                "Self-help",
                "Coaching",
              ],
            }),
            breadcrumbLd([
              { name: "Hearth", path: "/" },
              { name: "Alternatives to therapy", path: PATH },
            ]),
            faqLd(FAQ),
          ]),
        }}
      />
      <SharedNav />

      {/* HERO */}
      <section style={{ padding: "80px 0 56px", borderBottom: "1px solid var(--rule-2)" }}>
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
            {" · Alternatives to therapy"}
          </div>
          <h1 style={{ maxWidth: "20ch", fontSize: "clamp(42px, 6.4vw, 88px)" }}>
            Alternatives to therapy,
            <br />
            <span className="serif-i" style={{ color: "var(--ember)" }}>
              and when therapy is still the answer.
            </span>
          </h1>
          <p style={{ marginTop: 28, maxWidth: "60ch", fontSize: 20, lineHeight: 1.55, color: "var(--ink-2)" }}>
            Therapy is the right tool for a lot of things, and the wrong
            shape, or the wrong price, for a lot of others. Here is every
            common alternative, what it costs, what it is good for, and the
            cases where none of them will do.
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
            Published 24 October 2026 · ~13 min read
          </div>
        </div>
      </section>

      {/* SHORT ANSWER */}
      <section style={{ padding: "56px 0", background: "var(--paper-2)" }}>
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
                margin: 0,
              }}
            >
              The main alternatives to therapy are <strong>support groups</strong>,{" "}
              <strong>warmlines</strong> and listening lines,{" "}
              <strong>one-to-one peer support</strong>, structured{" "}
              <strong>self-help</strong>, <strong>coaching</strong>, and changes
              to sleep, movement and routine. None of them treats a mental
              illness. They fit when what you are carrying is heavy but not
              clinical, or while you wait for therapy.
            </p>
          </div>
        </div>
      </section>

      {/* CRISIS FIRST */}
      <section style={{ padding: "28px 0", background: "var(--paper-3)" }}>
        <div className="wrap">
          <p style={{ maxWidth: "72ch", fontSize: 16, lineHeight: 1.65, color: "var(--ink)", margin: 0 }}>
            <strong>If you are in crisis, none of this page applies today.</strong>{" "}
            In the US and Canada call or text <strong>988</strong>, free and
            open 24 hours. In the UK and Ireland, Samaritans on{" "}
            <strong>116 123</strong>. In an emergency, call 911 or 999. More
            numbers on our{" "}
            <Link href="/crisis" style={{ color: "var(--ember)" }}>
              crisis page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* WHEN THERAPY IS THE ANSWER */}
      <section style={SECTION}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>
              First: when therapy is still the answer.
            </h2>
            <p style={P}>
              We are a peer support service, so it would be easy for us to
              tell you that you do not need therapy. Often you do. If any of
              these are true, the alternatives below are things to use
              alongside treatment, not instead of it.
            </p>
            <ul style={{ marginTop: 24, paddingLeft: 0, listStyle: "none", display: "grid", gap: 14 }}>
              {[
                ["You have, or suspect you have, a diagnosis.", "Depression, an anxiety disorder, PTSD, OCD, bipolar disorder, an eating disorder. These have treatments, and treatment is the point."],
                ["You have thoughts of harming yourself.", "Please use the numbers above today."],
                ["It is stopping you from functioning.", "Sleep, work, eating, leaving the house. When the machinery of a day breaks down, that is a clinical signal."],
                ["Trauma is involved.", "Trauma has specific, evidence-based treatments that need a trained clinician."],
                ["Substances have become how you cope.", "Not a moral matter. A clinical one, and it responds to clinical help."],
                ["Medication might be part of the picture.", "Only a prescriber can have that conversation."],
              ].map(([head, body]) => (
                <li key={head} style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}>
                  <strong style={{ color: "var(--ink)" }}>{head}</strong> {body}
                </li>
              ))}
            </ul>
            <p style={{ ...P, marginTop: 24 }}>
              Not sure which side you are on? We wrote a longer guide:{" "}
              <Link href="/learn/do-i-need-therapy" style={{ color: "var(--ember)" }}>
                do I need therapy, or someone to talk to?
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* WHY PEOPLE LOOK ELSEWHERE */}
      <section style={SECTION}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>
              Why people look for something other than therapy.
            </h2>
            <p style={P}>
              <strong style={{ color: "var(--ink)" }}>Cost.</strong> A 2024 study
              of US psychotherapy prices found cash-pay sessions averaged
              $143.26, and about a third of therapists in private practice do
              not take insurance at all (Zhu et al., 2024). Two sessions a
              month at that average is close to $290. Online platforms are
              cheaper but not cheap: BetterHelp lists $70 to $100 a week,
              billed every four weeks.
            </p>
            <p style={{ ...P, marginTop: 18 }}>
              <strong style={{ color: "var(--ink)" }}>Waiting.</strong> Lower-cost
              routes, from community clinics to public services in Canada and
              the UK, often come with waiting lists of weeks or months.
            </p>
            <p style={{ ...P, marginTop: 18 }}>
              <strong style={{ color: "var(--ink)" }}>Rotation.</strong> On some
              platforms you can be reassigned, and starting again with a new
              person means telling your story from the beginning.
            </p>
            <p style={{ ...P, marginTop: 18 }}>
              <strong style={{ color: "var(--ink)" }}>Fit.</strong> Many people
              book a therapist, sit down, and find themselves explaining that
              nothing is really wrong. What they are carrying is real, but it
              is grief, loneliness, a family that runs on their attention, or a
              transition. They want a person, not a treatment plan.
            </p>
            <p style={{ ...P, marginTop: 18 }}>
              All of those are good reasons to look at the options below. Only
              the first is a reason to look for{" "}
              <Link href="/learn/cheap-therapy" style={{ color: "var(--ember)" }}>
                cheaper therapy
              </Link>{" "}
              rather than an alternative to it.
            </p>
          </div>
        </div>
      </section>

      {/* OPTIONS: CONNECTION */}
      <section style={{ ...SECTION, background: "var(--paper-2)" }}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch", marginBottom: 32 }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              The options, part one
            </div>
            <h2 style={{ maxWidth: "24ch", marginBottom: 20 }}>
              Alternatives built on people.
            </h2>
            <p style={P}>
              Most of what helps outside therapy is some form of being heard by
              another person. Here are the main ways to get that, starting with
              ours.
            </p>
          </div>
          <div style={{ display: "grid", gap: 18, maxWidth: 860 }}>
            {CONNECTION.map((o) => (
              <OptionCard key={o.name} o={o} />
            ))}
          </div>
        </div>
      </section>

      {/* OPTIONS: OTHER */}
      <section style={{ ...SECTION, background: "var(--paper-2)" }}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch", marginBottom: 32 }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              The options, part two
            </div>
            <h2 style={{ maxWidth: "24ch", marginBottom: 20 }}>
              Paid support, skills, and tools.
            </h2>
            <p style={P}>
              The rest of the field: one-to-one support, structured skills,
              the basics of the body, coaching, and the newest arrival, AI.
            </p>
          </div>
          <div style={{ display: "grid", gap: 18, maxWidth: 860 }}>
            {OTHER.map((o) => (
              <OptionCard key={o.name} o={o} />
            ))}
          </div>
        </div>
      </section>

      {/* MAYBE YOU WANT THERAPY, CHEAPER */}
      <section style={SECTION}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>
              Maybe you want therapy, just cheaper.
            </h2>
            <p style={P}>
              If the honest reason you are looking for an alternative is the
              price, the better move may be low-cost therapy rather than
              something else entirely. Open Path Collective connects people
              without good coverage to therapists charging $40 to $70 a
              session, after a one-time $65 membership. Many therapists keep
              sliding-scale places they do not advertise, and community mental
              health centres and university training clinics charge less
              still. In England, NHS Talking Therapies is free and you can
              refer yourself.
            </p>
            <p style={{ ...P, marginTop: 18 }}>
              We list every route, with prices, in{" "}
              <Link href="/learn/cheap-therapy" style={{ color: "var(--ember)" }}>
                cheap therapy options, with real prices
              </Link>
              , and how to ask for a lower fee in{" "}
              <Link href="/learn/sliding-scale-therapy" style={{ color: "var(--ember)" }}>
                sliding scale therapy: how to ask
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={SECTION}>
        <div className="wrap">
          <h2 style={{ maxWidth: "24ch", marginBottom: 32 }}>
            Every alternative to therapy, side by side.
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15, lineHeight: 1.6, minWidth: 760 }}>
              <thead>
                <tr>
                  {["Option", "Typical cost", "Same person every time?", "Clinical?", "Best for"].map((h) => (
                    <th
                      key={h}
                      scope="col"
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
                {TABLE.map((row) => {
                  const ours = row[0] === "Hearth";
                  const base = {
                    padding: 14,
                    borderBottom: "1px solid var(--rule-2)",
                    color: "var(--ink-2)",
                    verticalAlign: "top" as const,
                    background: ours ? "var(--paper-2)" : undefined,
                  };
                  return (
                    <tr key={row[0]}>
                      <th
                        scope="row"
                        style={{
                          ...base,
                          textAlign: "left",
                          color: "var(--ink)",
                          fontWeight: ours ? 600 : 500,
                          borderLeft: ours ? "2px solid var(--ember)" : undefined,
                        }}
                      >
                        {ours ? (
                          <>
                            <Link href="/how-it-works" style={{ color: "var(--ink)" }}>
                              Hearth
                            </Link>
                            <span style={OUR_TAG}>Our service</span>
                          </>
                        ) : (
                          row[0]
                        )}
                      </th>
                      {row.slice(1).map((cell, i) => (
                        <td
                          key={i}
                          style={{
                            ...base,
                            color: ours && i === 1 ? "var(--ink)" : base.color,
                            fontWeight: ours && i === 1 ? 600 : 400,
                          }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-3)", marginTop: 16, maxWidth: "68ch" }}>
            Therapy price from Zhu et al. (2024). Open Path rates checked on
            24 October 2026. &ldquo;Same person every time?&rdquo; means
            whether you usually see the same individual each time.
          </p>
        </div>
      </section>

      {/* RESEARCH */}
      <section style={SECTION}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>
              What the research says about peer support as an alternative.
            </h2>
            <p style={P}>
              Peer support is the alternative with the most research behind
              it, and the research is honest about its limits. These studies
              are about peer support in general, not about Hearth.
            </p>
            <ul style={{ marginTop: 22, paddingLeft: 0, listStyle: "none", display: "grid", gap: 16 }}>
              <li style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}>
                <strong style={{ color: "var(--ink)" }}>For depression,</strong>{" "}
                a meta-analysis found peer support reduced depressive symptoms
                more than usual care (7 trials, 869 people), and found no
                significant difference from group CBT in the smaller set of
                trials that compared them (Pfeiffer et al., 2011).
              </li>
              <li style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}>
                <strong style={{ color: "var(--ink)" }}>For severe mental illness,</strong>{" "}
                a review of 18 trials with 5,597 people found little or no
                effect on symptoms or hospital admissions, but some evidence
                of more hope, recovery and empowerment (Lloyd-Evans et al.,
                2014).
              </li>
              <li style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}>
                <strong style={{ color: "var(--ink)" }}>For one-to-one peer support,</strong>{" "}
                a 2020 meta-analysis of 19 trials found modest gains in
                self-reported recovery and empowerment and no effect on
                clinical symptoms (White et al., 2020).
              </li>
              <li style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}>
                <strong style={{ color: "var(--ink)" }}>For loneliness,</strong>{" "}
                a randomised trial gave 240 adults regular phone calls from
                briefly trained lay callers for four weeks; loneliness,
                depression and anxiety all fell compared with the control
                group (Kahlon et al., 2021).
              </li>
            </ul>
            <p style={{ ...P, marginTop: 22 }}>
              The fair reading: peer support helps people feel less alone and
              more able to cope, and it is not a treatment for illness. That is
              exactly why it can be the right alternative for weight that is
              not an illness, and the wrong one for everything on the list at
              the top of this page. More in{" "}
              <Link href="/peer-support" style={{ color: "var(--ember)" }}>
                what is peer support?
              </Link>{" "}
              and{" "}
              <Link href="/learn/one-to-one-peer-support" style={{ color: "var(--ember)" }}>
                one-to-one peer support, explained
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FOR MEN */}
      <section style={SECTION}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>
              Alternatives to therapy for men.
            </h2>
            <p style={P}>
              Plenty of men search for this because the idea of a therapist&rsquo;s
              office feels like an admission of something. A few things tend
              to work better than forcing it:
            </p>
            <ul style={{ marginTop: 22, paddingLeft: 0, listStyle: "none", display: "grid", gap: 14 }}>
              {[
                ["Side by side, not face to face.", "Talking while walking, training or working on something with a friend is easier for many men than sitting across a table."],
                ["A group with a purpose.", "Sports, a men's group, a mosque, temple or church circle, a volunteering crew. The talking happens around the edges."],
                ["One person, steadily.", "A coach for a goal, or a peer supporter for the weight, where the relationship is the point and nobody is diagnosing anything."],
                ["Writing it down first.", "Three lines a night is a private rehearsal for saying it out loud."],
              ].map(([head, body]) => (
                <li key={head} style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}>
                  <strong style={{ color: "var(--ink)" }}>{head}</strong> {body}
                </li>
              ))}
            </ul>
            <p style={{ ...P, marginTop: 22 }}>
              The list at the top of the page applies to men exactly as it
              does to everyone. If you are drinking to get through the week,
              or the thought of not being here has crossed your mind, that is a
              reason for a clinician and for 988, not for a workaround.
            </p>
          </div>
        </div>
      </section>

      {/* WHY PEOPLE CHOOSE DEAR HEARTH */}
      <section style={{ padding: "80px 0", background: "var(--paper-2)" }}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              Our service
            </div>
            <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>
              Why people choose Hearth.
            </h2>
            <p style={P}>
              For weight that is real but not an illness, most people want the
              same thing: one person who listens, remembers, and stays. That is
              what Hearth is built to give you.
            </p>
            <ul style={{ marginTop: 24, paddingLeft: 0, listStyle: "none", display: "grid", gap: 16 }}>
              {[
                ["One person, for years.", "We match you by hand, within 72 hours, with one Keeper who stays with you. If the fit is wrong after your first Sit, you change Keeper at no charge."],
                ["Trained, checked and supervised.", "Every Keeper completes Hearth's 120-hour training, a background check and monthly supervision. Many trained as psychologists or counsellors in their home countries."],
                ["A rhythm you can count on.", "A 35 to 60 minute video or audio Sit every two weeks for $39 a month, or every week for $99 a month."],
                ["Company between calls.", "The Long Talk, your message thread with your Keeper, with replies within a day (within 4 hours on the $99 plan), and a short note from them every Friday."],
                ["No lock-in.", "Cancel any time, in one click."],
              ].map(([head, body]) => (
                <li key={head} style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}>
                  <strong style={{ color: "var(--ink)" }}>{head}</strong> {body}
                </li>
              ))}
            </ul>
            <p style={{ ...P, marginTop: 24 }}>
              Hearth is peer support, not therapy, and not a crisis
              service. If something clinical comes up, your Keeper says so
              plainly, helps you find a licensed therapist, and stays with you
              while you do. More in{" "}
              <Link href="/how-it-works" style={{ color: "var(--ember)" }}>
                how Hearth works
              </Link>{" "}
              and{" "}
              <Link href="/hearth-vs-betterhelp" style={{ color: "var(--ember)" }}>
                Hearth vs. therapy apps
              </Link>
              .
            </p>
            <div className="cta-row" style={{ marginTop: 32 }}>
              <Link href="/intake" className="btn btn-primary btn-lg">
                Start the 12-minute intake <span className="arr">&rarr;</span>
              </Link>
              <Link href="/pricing" className="btn btn-ghost btn-lg">
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={SECTION}>
        <div className="wrap">
          <h2 style={{ maxWidth: "20ch", marginBottom: 36 }}>Common questions.</h2>
          <div style={{ maxWidth: "68ch", display: "grid", gap: 32 }}>
            {FAQ.map((item) => (
              <div key={item.q}>
                <h3 style={{ marginBottom: 12 }}>{item.q}</h3>
                <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--ink-2)" }}>{item.a}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)", marginTop: 32, maxWidth: "68ch" }}>
            On paying for a listener specifically, we wrote a separate guide:{" "}
            <Link href="/learn/pay-someone-to-listen" style={{ color: "var(--ember)" }}>
              can you pay someone to listen to you?
            </Link>
          </p>
        </div>
      </section>

      {/* REFERENCES */}
      <section style={SECTION}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              Sources
            </div>
            <ol style={{ paddingLeft: 20, display: "grid", gap: 10, margin: 0 }}>
              {REFERENCES.map((r) => (
                <li key={r.href} style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-2)" }}>
                  {r.text}{" "}
                  <a href={r.href} rel="noopener" style={{ color: "var(--ember)", wordBreak: "break-word" }}>
                    Link
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
                ["/peer-support", "What is peer support? Types, evidence and limits"],
                ["/learn/one-to-one-peer-support", "One-to-one peer support, explained"],
                ["/learn/peer-support-vs-therapy", "Peer support vs. therapy: the honest difference"],
                ["/learn/cheap-therapy", "Cheap therapy options, with real prices"],
                ["/learn/do-i-need-therapy", "Do I need therapy, or someone to talk to?"],
                ["/crisis", "Crisis resources by country"],
              ].map(([href, label]) => (
                <Link key={href} href={href} style={{ color: "var(--ink)", fontSize: 19, lineHeight: 1.5 }}>
                  {label} &rarr;
                </Link>
              ))}
            </div>
            <div className="cta-row" style={{ marginTop: 44 }}>
              <Link href="/intake" className="btn btn-primary btn-lg">
                Start the 12-minute intake <span className="arr">&rarr;</span>
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
