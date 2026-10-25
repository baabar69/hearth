import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";
import {
  articleLd,
  breadcrumbLd,
  faqLd,
  jsonLd,
  webPageLd,
} from "../lib/schema";

// Pillar page for the head term "peer support" and the definition cluster
// (what it is, types, principles, evidence, downsides, where to find it).
// Every study cited here was checked against PubMed or Crossref on 2026-10-24.

const PUBLISHED = "2026-10-24";
const REVIEWED = "2026-10-24";
const PATH = "/peer-support";
const HEADLINE = "What Is Peer Support? A Plain-English Guide";
const SUMMARY =
  "What peer support is, the main types, what the research shows, how it differs from therapy and counselling, its limits, and where to find it, free or paid.";

export const metadata: Metadata = {
  title: "What Is Peer Support? Types, Evidence, Limits",
  description:
    "Peer support is help from someone who has been there. The types, the five principles, what the research shows, its limits, and where to find it for free.",
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    title: HEADLINE,
    description: SUMMARY,
    url: PATH,
    publishedTime: PUBLISHED,
    modifiedTime: REVIEWED,
    authors: ["Dear Hearth"],
  },
};

const FAQ = [
  {
    q: "What is the meaning of peer support?",
    a: "Peer support means getting help from someone who has lived through something similar to what you are facing. It rests on shared experience and mutual respect rather than professional expertise, and it can happen one-to-one, in a group, by phone or online.",
  },
  {
    q: "What does a peer support worker do?",
    a: "A peer support worker uses their own lived experience to support other people. They listen, share what helped them when that is useful, help people set their own goals, and connect them with services, including clinical care. They work in clinics, hospitals, crisis teams and community programmes. They do not diagnose or treat.",
  },
  {
    q: "What is an example of peer support?",
    a: "A bereaved parent joining a group run by other bereaved parents. A person newly diagnosed with bipolar disorder meeting a peer specialist who has lived with it for years. A carer talking each week with another carer. Each one is help from someone who has been there.",
  },
  {
    q: "What are the five principles of peer support?",
    a: "The principles in SAMHSA's core competencies for peer workers, which Mental Health America uses to explain peer support, are that it is recovery-oriented, person-centred, voluntary, relationship-focused and trauma-informed.",
  },
  {
    q: "What are the four types of peer support?",
    a: "SAMHSA describes four kinds of support that peers give: emotional support (empathy and encouragement), informational support (practical knowledge), instrumental support (concrete help with tasks) and affiliational support (connection to other people and community).",
  },
  {
    q: "What is another name for peer support?",
    a: "Depending on the setting, it is also called mutual support or mutual aid, peer mentoring, lived-experience support, peer listening or peer counselling. In services, the people who provide it may be called peer specialists, peer support workers or recovery coaches.",
  },
  {
    q: "What are the downsides of peer support?",
    a: "It is not treatment, so it will not treat a mental health condition on its own. Training and quality vary widely. Boundaries can blur without good supervision. Groups can feel heavy. Confidentiality rules may differ from a clinician's. And it is not crisis care.",
  },
  {
    q: "Is peer support evidence based?",
    a: "Partly. Reviews find modest benefits for hope, empowerment and self-reported recovery, and some benefit for depression, especially around pregnancy and birth. Effects on clinical symptoms and hospital use are small or absent, and much of the research is of low quality (White et al., 2020; Cooper et al., 2024).",
  },
  {
    q: "Is peer support free?",
    a: "Often, yes. Many support groups, warmlines and online communities are free. Peer specialists working in clinics are paid for by Medicaid or insurance in many US states. Paid one-to-one services, including Hearth, charge a monthly fee.",
  },
  {
    q: "Is peer support the same as counselling?",
    a: "No. Counselling is given by a trained professional, often licensed, and can include assessment and treatment. Peer support is given by someone with relevant lived experience, and it does not diagnose or treat. Many people use both at once.",
  },
  {
    q: "Who can I talk to online for free?",
    a: "7 Cups offers free text chats with volunteer listeners at any hour. NAMI and DBSA run free online support groups in the US. Togetherall is free through many employers, universities and UK health services. If you are in crisis, call or text 988 in the US and Canada, or call Samaritans on 116 123 in the UK and Ireland.",
  },
];

const REFERENCES = [
  {
    cite: "Mead S, Hilton D, Curtis L. Peer support: a theoretical perspective. Psychiatric Rehabilitation Journal. 2001;25(2):134–141.",
    url: "https://doi.org/10.1037/h0095032",
  },
  {
    cite: "Solomon P. Peer support/peer provided services: underlying processes, benefits, and critical ingredients. Psychiatric Rehabilitation Journal. 2004;27(4):392–401.",
    url: "https://doi.org/10.2975/27.2004.392.401",
  },
  {
    cite: "White S, Foster R, Marks J, et al. The effectiveness of one-to-one peer support in mental health services: a systematic review and meta-analysis. BMC Psychiatry. 2020;20:534.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7657356/",
  },
  {
    cite: "Smit D, Miguel C, Vrijsen JN, et al. The effectiveness of peer support for individuals with mental illness: systematic review and meta-analysis. Psychological Medicine. 2023;53(11):5332–5341.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10476060/",
  },
  {
    cite: "Cooper RE, Saunders KRK, Greenburgh A, et al. The effectiveness, implementation, and experiences of peer support approaches for mental health: a systematic umbrella review. BMC Medicine. 2024;22:72.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10902990/",
  },
  {
    cite: "Pfeiffer PN, et al. Efficacy of peer support interventions for depression: a meta-analysis. General Hospital Psychiatry. 2011;33(1):29–36.",
    url: "https://doi.org/10.1016/j.genhosppsych.2010.10.002",
  },
  {
    cite: "Lloyd-Evans B, et al. A systematic review and meta-analysis of randomised controlled trials of peer support for people with severe mental illness. BMC Psychiatry. 2014;14:39.",
    url: "https://doi.org/10.1186/1471-244X-14-39",
  },
  {
    cite: "Chien WT, et al. Peer support for people with schizophrenia or other serious mental illness. Cochrane Database of Systematic Reviews. 2019.",
    url: "https://doi.org/10.1002/14651858.CD010880.pub2",
  },
  {
    cite: "Dale J, Caramlau IO, Lindenmeyer A, Williams SM. Peer support telephone calls for improving health. Cochrane Database of Systematic Reviews. 2008.",
    url: "https://doi.org/10.1002/14651858.CD006903.pub2",
  },
  {
    cite: "Kahlon MK, Aksan N, Aubrey R, et al. Effect of layperson-delivered, empathy-focused program of telephone calls on loneliness, depression, and anxiety among adults during the COVID-19 pandemic: a randomized clinical trial. JAMA Psychiatry. 2021;78(6):616–622.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7903319/",
  },
  {
    cite: "Bartone PT, et al. Peer support services for bereaved survivors: a systematic review. Omega: Journal of Death and Dying. 2019;80(1):137–166.",
    url: "https://doi.org/10.1177/0030222817728204",
  },
  {
    cite: "Holt-Lunstad J, et al. Loneliness and social isolation as risk factors for mortality: a meta-analytic review. Perspectives on Psychological Science. 2015;10(2):227–237.",
    url: "https://doi.org/10.1177/1745691614568352",
  },
  {
    cite: "SAMHSA (Substance Abuse and Mental Health Services Administration). Value of Peers, 2017.",
    url: "https://www.samhsa.gov/sites/default/files/programs_campaigns/brss_tacs/value-of-peers-2017.pdf",
  },
  {
    cite: "Mental Health America. What is peer support?",
    url: "https://mhanational.org/resources/what-peer-support/",
  },
];

/* ---------- small layout helpers, matching the /learn pages ---------- */

const BODY: CSSProperties = { fontSize: 18, lineHeight: 1.75, color: "var(--ink-2)" };
const LIST_ITEM: CSSProperties = { fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" };
const LINK: CSSProperties = { color: "var(--ember)" };

function Section({
  children,
  tint,
  id,
}: {
  children: ReactNode;
  tint?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      style={{
        padding: "72px 0",
        borderBottom: tint ? undefined : "1px solid var(--rule-2)",
        background: tint ? "var(--paper-2)" : undefined,
      }}
    >
      <div className="wrap">{children}</div>
    </section>
  );
}

function Prose({ children }: { children: ReactNode }) {
  return <div style={{ maxWidth: "68ch" }}>{children}</div>;
}

function H2({ children }: { children: ReactNode }) {
  return <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>{children}</h2>;
}

function P({ children, first }: { children: ReactNode; first?: boolean }) {
  return <p style={{ ...BODY, marginTop: first ? 0 : 20 }}>{children}</p>;
}

function Bullets({ items }: { items: Array<[string, string]> }) {
  return (
    <ul
      style={{
        marginTop: 24,
        paddingLeft: 0,
        listStyle: "none",
        display: "grid",
        gap: 16,
      }}
    >
      {items.map(([head, body]) => (
        <li key={head} style={LIST_ITEM}>
          <strong style={{ color: "var(--ink)" }}>{head}</strong> {body}
        </li>
      ))}
    </ul>
  );
}

function Table({
  head,
  rows,
  minWidth = 680,
}: {
  head: string[];
  rows: string[][];
  minWidth?: number;
}) {
  const cell: CSSProperties = {
    padding: "14px",
    borderBottom: "1px solid var(--rule-2)",
    color: "var(--ink-2)",
    verticalAlign: "top",
  };
  return (
    <div style={{ overflowX: "auto", marginTop: 8 }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 15,
          lineHeight: 1.6,
          minWidth,
        }}
      >
        <thead>
          <tr>
            {head.map((h) => (
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
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((value, i) =>
                i === 0 ? (
                  <th
                    key={i}
                    scope="row"
                    style={{
                      ...cell,
                      textAlign: "left",
                      color: "var(--ink)",
                      fontWeight: 500,
                    }}
                  >
                    {value}
                  </th>
                ) : (
                  <td key={i} style={cell}>
                    {value}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PeerSupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            webPageLd({
              path: PATH,
              name: HEADLINE,
              description: SUMMARY,
              lastReviewed: REVIEWED,
            }),
            articleLd({
              path: PATH,
              headline: HEADLINE,
              description: SUMMARY,
              datePublished: PUBLISHED,
              dateModified: REVIEWED,
              wordCount: 4200,
              about: [
                "Peer support",
                "Mutual aid",
                "Peer support specialist",
                "Emotional support",
                "Mental health",
              ],
            }),
            breadcrumbLd([
              { name: "Dear Hearth", path: "/" },
              { name: "Peer support", path: PATH },
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
            {" · Guide · Peer support"}
          </div>
          <h1 style={{ maxWidth: "18ch", fontSize: "clamp(42px, 6.4vw, 88px)" }}>
            What is peer support?
            <br />
            <span className="serif-i" style={{ color: "var(--ember)" }}>
              A plain-English guide.
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
            Peer support is one of the oldest ways people get through hard
            things, and one of the least explained. This guide covers what it
            is, the main types, what the research does and does not show, how
            it differs from therapy, and where to find it in the US, Canada
            and the UK, including the free options.
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
            Published 24 October 2026 · ~14 min read · Sources listed at the end
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
            <strong>If you are in crisis, peer support is not the first call.</strong>{" "}
            In the US and Canada call or text <strong>988</strong>. In the UK
            and Ireland, call Samaritans on <strong>116 123</strong>. In an
            emergency, call 911 or 999. More numbers on our{" "}
            <Link href="/crisis" style={LINK}>
              crisis page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* THE SHORT ANSWER */}
      <Section tint>
        <Prose>
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
            <strong>Peer support</strong> is help from someone who has been
            through something similar to what you are facing. Instead of a
            professional treating a problem, a peer offers understanding,
            practical knowledge and company, drawn from their own experience.
            It happens one-to-one, in groups, by phone and online, and it works
            alongside therapy rather than replacing it.
          </p>
          <P>
            One of the most quoted definitions comes from Shery Mead and
            colleagues, who describe peer support as &ldquo;a system of giving
            and receiving help founded on key principles of respect, shared
            responsibility, and mutual agreement of what is helpful&rdquo;
            (Mead, Hilton and Curtis, 2001). The important word is mutual. A
            peer is not above you. They sit beside you.
          </P>
        </Prose>
      </Section>

      {/* WHAT IS A PEER */}
      <Section>
        <Prose>
          <H2>What is a &ldquo;peer&rdquo;?</H2>
          <P first>
            A peer is someone whose experience overlaps with yours in a way
            that matters. In mental health services the word usually means a
            person with lived experience of mental health difficulties who has
            been trained to use that experience to support others. In everyday
            life it is wider: another bereaved parent, another carer, another
            person who moved countries at thirty and had to start again.
          </P>
          <P>
            The overlap does not have to be exact. What matters is that you do
            not have to explain the basics, and that the person is not there to
            assess you. Patricia Solomon&rsquo;s review of peer-provided
            services names experiential knowledge, the expertise that comes
            from having lived something, as one of peer support&rsquo;s core
            ingredients (Solomon, 2004). It is what makes the help credible,
            and it is why the relationship feels more equal than a clinical
            one.
          </P>
        </Prose>
      </Section>

      {/* HOW IT WORKS */}
      <Section>
        <Prose>
          <H2>How peer support works, and where it happens.</H2>
          <P first>
            There is no single format. Peer support is defined by who is
            helping and how, not by the setting. These are the main places you
            will find it.
          </P>
          <Bullets
            items={[
              [
                "One-to-one.",
                "A single peer supporter meets you regularly, by video, phone or in person. This is the format most often studied inside mental health services (White et al., 2020). We cover it in depth in our guide to one-to-one peer support.",
              ],
              [
                "Support groups.",
                "Peer-led groups, many of them free, meet weekly around a shared experience: depression, bipolar disorder, grief, caring for someone, recovery from addiction.",
              ],
              [
                "Warmlines and phone lines.",
                "Warmlines are free, non-crisis phone lines, often staffed by people with lived experience. They are for the hard evening that is not an emergency.",
              ],
              [
                "Online communities.",
                "Moderated forums and chat services where you can talk with others, often anonymously and sometimes at any hour.",
              ],
              [
                "Inside health services.",
                "Peer support workers (in the US often called certified peer specialists, or recovery coaches in addiction services) work in hospitals, clinics, crisis teams and community programmes alongside clinical staff.",
              ],
              [
                "Workplaces and campuses.",
                "Some employers, universities and emergency services train staff to support colleagues who are going through something hard.",
              ],
            ]}
          />
          <P>
            Read more:{" "}
            <Link href="/learn/one-to-one-peer-support" style={LINK}>
              one-to-one peer support, and how it differs from groups
            </Link>
            .
          </P>
        </Prose>
      </Section>

      {/* TYPES */}
      <Section>
        <H2>The types of peer support.</H2>
        <Prose>
          <P first>
            SAMHSA, the US federal agency for mental health and substance use,
            groups the help that peers give into four kinds of support
            (SAMHSA, 2017). Most good peer support mixes all four.
          </P>
          <Bullets
            items={[
              [
                "Emotional support.",
                "Empathy, encouragement and being listened to without judgement.",
              ],
              [
                "Informational support.",
                "Practical knowledge: how a system works, what helped them, where to find resources.",
              ],
              [
                "Instrumental support.",
                "Concrete help with tasks, such as filling in a form, getting to an appointment, or finding housing or benefits.",
              ],
              [
                "Affiliational support.",
                "Connection to other people and to community, so you feel part of something rather than alone with it.",
              ],
            ]}
          />
          <P>The formats those kinds of support come in look like this.</P>
        </Prose>
        <Table
          head={["Type", "What it is", "Common examples"]}
          rows={[
            [
              "Mutual-support groups",
              "People with a shared experience meet regularly to support each other",
              "NAMI Connection groups, DBSA groups, 12-step groups, grief groups",
            ],
            [
              "Peer specialists and peer workers",
              "Trained, often certified, people with lived experience, employed inside services",
              "Certified peer specialists in US clinics; peer support workers in NHS teams",
            ],
            [
              "Recovery coaches",
              "Peer supporters focused on recovery from alcohol or drug use",
              "Recovery community organisations, addiction services",
            ],
            [
              "Family and carer peer support",
              "Parents and carers supporting others in the same role",
              "NAMI Family-to-Family, local carer groups",
            ],
            [
              "Online peer communities",
              "Moderated forums and text chat, often anonymous",
              "Togetherall, 7 Cups",
            ],
            [
              "Paired one-to-one peer support",
              "One trained peer, the same person over months or years",
              "Peer mentoring programmes, Hearth",
            ],
            [
              "Workplace peer support",
              "Colleagues trained to support colleagues",
              "Programmes in emergency services and healthcare",
            ],
          ]}
        />
      </Section>

      {/* PRINCIPLES */}
      <Section tint>
        <Prose>
          <H2>The five principles of peer support.</H2>
          <P first>
            SAMHSA&rsquo;s core competencies for peer workers rest on five
            principles, and Mental Health America uses the same list to explain
            what makes peer support work. Peer support is:
          </P>
          <Bullets
            items={[
              [
                "Recovery-oriented.",
                "It holds hope that people can get better and build a life they want, on their own terms.",
              ],
              [
                "Person-centred.",
                "You set the direction. The supporter does not decide what your goals should be.",
              ],
              [
                "Voluntary.",
                "You choose to take part, and you can stop.",
              ],
              [
                "Relationship-focused.",
                "The relationship itself, built on mutual respect, is the support.",
              ],
              [
                "Trauma-informed.",
                "It is aware of how past harm shapes people, and careful about safety, trust and choice.",
              ],
            ]}
          />
        </Prose>
      </Section>

      {/* EXAMPLES */}
      <Section>
        <Prose>
          <H2>Examples of peer support.</H2>
          <P first>
            Abstract definitions only go so far. Here is what peer support
            looks like in ordinary life.
          </P>
          <Bullets
            items={[
              [
                "Grief.",
                "A woman whose father died last year joins a group run by people who lost a parent. Nobody tells her it should be easier by now.",
              ],
              [
                "A new diagnosis.",
                "A man newly diagnosed with bipolar disorder meets a peer specialist at his clinic who was diagnosed twelve years ago and now works full time.",
              ],
              [
                "After a birth.",
                "A new mother who feels nothing like she expected talks each week by phone with a volunteer who went through postnatal depression herself.",
              ],
              [
                "Caring.",
                "Someone caring for a parent with dementia gets practical advice on respite and benefits from another carer, and an hour a week where someone asks how she is.",
              ],
              [
                "Loneliness.",
                "Someone who moved cities for work, and knows nobody yet, talks with the same trained peer listener every week.",
              ],
            ]}
          />
        </Prose>
      </Section>

      {/* DOES AND DOES NOT */}
      <Section>
        <H2>What a peer supporter does, and does not do.</H2>
        <div
          className="ps-two"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            maxWidth: 1000,
          }}
        >
          <div>
            <h3 style={{ marginBottom: 14 }}>Does</h3>
            <ul style={{ paddingLeft: 20, margin: 0, display: "grid", gap: 10 }}>
              {[
                "Listens without judgement, and without rushing to fix",
                "Shares parts of their own experience when it helps you, not them",
                "Helps you work out what you want and the next small step",
                "Shares practical knowledge about services and systems",
                "Helps you find clinical care when you need it",
                "Shows up consistently, so you are not starting over each time",
              ].map((t) => (
                <li key={t} style={LIST_ITEM}>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ marginBottom: 14 }}>Does not</h3>
            <ul style={{ paddingLeft: 20, margin: 0, display: "grid", gap: 10 }}>
              {[
                "Diagnose a mental health condition",
                "Prescribe, or advise on medication",
                "Deliver treatment such as CBT or trauma therapy",
                "Replace emergency or crisis services",
                "Tell you what to do with your life",
                "Make the conversation about themselves",
              ].map((t) => (
                <li key={t} style={LIST_ITEM}>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* EVIDENCE */}
      <Section>
        <Prose>
          <H2>What the research says.</H2>
          <P first>
            The honest summary: peer support reliably helps people feel less
            alone, more hopeful and more in charge of their own recovery. Its
            effect on clinical symptoms is smaller and less consistent, and much
            of the research is of low to moderate quality. That is not a
            weakness so much as a description of what peer support is for.
          </P>
        </Prose>
        <Table
          head={["Study", "What it looked at", "What it found"]}
          minWidth={720}
          rows={[
            [
              "White et al., 2020 (BMC Psychiatry)",
              "One-to-one peer support in mental health services: 19 trials, 3,329 people",
              "A modest positive effect on self-reported recovery and empowerment. No effect on clinical symptoms or on use of services.",
            ],
            [
              "Smit et al., 2023 (Psychological Medicine)",
              "28 randomised trials of peer support for people with mental illness",
              "Small positive effects on clinical recovery (g = 0.19) and personal recovery (g = 0.15).",
            ],
            [
              "Cooper et al., 2024 (BMC Medicine)",
              "An umbrella review of 35 systematic reviews",
              "Some evidence of benefit for depression, especially around pregnancy and birth, and for self-efficacy and recovery. Most of the reviews were low quality.",
            ],
            [
              "Pfeiffer et al., 2011 (General Hospital Psychiatry)",
              "Peer support for depression, meta-analysis",
              "Fewer depressive symptoms than usual care. In the trials that compared it with group CBT, the difference was not significant.",
            ],
            [
              "Lloyd-Evans et al., 2014 (BMC Psychiatry)",
              "Peer support for people with severe mental illness",
              "Little effect on hospital admission or symptoms. Some evidence of more hope, recovery and empowerment.",
            ],
            [
              "Chien et al., 2019 (Cochrane)",
              "Peer support for schizophrenia and other serious mental illness",
              "Not enough good-quality evidence to judge either way.",
            ],
            [
              "Kahlon et al., 2021 (JAMA Psychiatry)",
              "A randomised trial of 240 adults: four weeks of short, regular phone calls from briefly trained lay callers",
              "Lower loneliness, depression and anxiety than the comparison group.",
            ],
            [
              "Dale et al., 2008 (Cochrane)",
              "Peer support by telephone for health: 7 trials, 2,492 people",
              "Some benefits across health outcomes, from studies the authors judged to be of limited quality.",
            ],
            [
              "Bartone et al., 2019 (Omega)",
              "Peer support for people who have been bereaved: 32 studies",
              "Most studies found it helpful, though study designs varied widely.",
            ],
          ]}
        />
        <Prose>
          <P>
            One more piece of context. A large meta-analysis linked loneliness
            and social isolation to a higher risk of early death
            (Holt-Lunstad et al., 2015). Connection is not a luxury, and peer
            support is one of the few kinds of help built entirely around it.
          </P>
          <P>
            <strong>What this means for you.</strong> If you want to feel less
            alone, more understood and better able to steer your own life, peer
            support has reasonable evidence behind it. If you need a mental
            health condition treated, the evidence points to therapy,
            medication or both, with peer support alongside rather than
            instead.
          </P>
        </Prose>
      </Section>

      {/* COMPARISON */}
      <Section>
        <H2>Peer support vs therapy, counselling and coaching.</H2>
        <Prose>
          <P first>
            These four get mixed up constantly. In the US, &ldquo;therapy&rdquo;
            and &ldquo;counselling&rdquo; are often used for the same thing; the
            useful line is between help that can diagnose and treat, and help
            that cannot.
          </P>
        </Prose>
        <Table
          head={["", "Peer support", "Counselling", "Therapy", "Coaching"]}
          minWidth={820}
          rows={[
            [
              "Who gives it",
              "Someone with relevant lived experience, trained in peer support",
              "A trained counsellor, usually licensed or registered",
              "A licensed clinician: psychologist, clinical social worker, psychotherapist",
              "A coach; training varies widely",
            ],
            [
              "Main aim",
              "Connection, hope, being understood, practical help",
              "Working through a specific problem or life event",
              "Assessing and treating mental health conditions",
              "Reaching goals, usually forward-looking",
            ],
            [
              "Diagnoses or treats",
              "No",
              "Often, depending on licence",
              "Yes",
              "No",
            ],
            [
              "The relationship",
              "Mutual, side by side",
              "Professional",
              "Professional and clinical",
              "Professional, goal-focused",
            ],
            [
              "Regulation",
              "Certification in some places, not required everywhere",
              "Usually licensed or registered",
              "Licensed",
              "Largely unregulated",
            ],
            [
              "Cost",
              "Often free in groups; paid one-to-one services exist",
              "Varies; sometimes covered by insurance",
              "Often the most expensive; insurance may cover it",
              "Varies",
            ],
            [
              "Best for",
              "Hard chapters, isolation, living with a condition, recovery",
              "A defined problem you want to work through",
              "Diagnosable conditions, trauma, persistent symptoms",
              "Career and goal-directed change",
            ],
          ]}
        />
        <Prose>
          <P>
            The full comparison, including when to choose which, is in{" "}
            <Link href="/learn/peer-support-vs-therapy" style={LINK}>
              peer support vs therapy: the key differences
            </Link>
            . If you are not sure which you need, start with{" "}
            <Link href="/learn/do-i-need-therapy" style={LINK}>
              do I need therapy, or someone to talk to?
            </Link>
          </P>
        </Prose>
      </Section>

      {/* DOWNSIDES */}
      <Section>
        <Prose>
          <H2>The downsides and limits of peer support.</H2>
          <P first>
            Any guide that only lists benefits is selling something. These are
            the real limits.
          </P>
          <Bullets
            items={[
              [
                "It is not treatment.",
                "Peer support will not treat depression, PTSD, an eating disorder or psychosis on its own. It can sit alongside treatment.",
              ],
              [
                "Quality varies.",
                "Training ranges from a short course to formal certification. Some volunteer services provide very little.",
              ],
              [
                "Shared experience can mislead.",
                "What helped your peer may not help you. A good peer supporter knows the difference and says so.",
              ],
              [
                "Boundaries can blur.",
                "Because the relationship is more equal, it can drift into friendship or dependence without good training and supervision.",
              ],
              [
                "Groups are not for everyone.",
                "Hearing other people's stories can be heavy, and some people need one person rather than a room.",
              ],
              [
                "Confidentiality rules differ.",
                "Peer supporters are not always bound by the same legal duties as clinicians. Ask any service what happens to what you share.",
              ],
              [
                "It is not crisis care.",
                "If you are at risk, use a crisis line: 988 in the US and Canada, 116 123 in the UK and Ireland, or your local emergency number.",
              ],
            ]}
          />
        </Prose>
      </Section>

      {/* ONLINE OPTIONS */}
      <Section>
        <H2>Online peer support options, compared.</H2>
        <Prose>
          <P first>
            Online peer support ranges from free, anonymous chat to paid,
            scheduled one-to-one support. They do different jobs.
          </P>
        </Prose>
        <Table
          head={["Option", "Cost", "Format", "Best for", "Trade-off"]}
          minWidth={860}
          rows={[
            [
              "NAMI Connection groups (US)",
              "Free",
              "Peer-led groups, in person and online",
              "Adults living with a mental health condition",
              "Group format at fixed times; varies by local affiliate",
            ],
            [
              "DBSA support groups (US)",
              "Free",
              "Peer-led groups, many online",
              "Depression and bipolar disorder",
              "Built around a diagnosis; group rather than one-to-one",
            ],
            [
              "Warmlines",
              "Free",
              "Phone, sometimes text",
              "A hard evening that is not an emergency",
              "A different person each time; limited hours in many areas",
            ],
            [
              "7 Cups",
              "Free listener chats; paid options exist",
              "Text chat with volunteer listeners, at any hour",
              "Talking right now, anonymously",
              "Volunteers with basic training; rarely the same person twice",
            ],
            [
              "Togetherall",
              "Free if your employer, university or local health service provides it",
              "Anonymous online community, monitored around the clock",
              "Anonymity, and support at 3am",
              "A community, not a one-to-one relationship",
            ],
            [
              "Paid one-to-one peer support (for example, Hearth)",
              "A monthly fee",
              "The same trained person: scheduled calls plus messages",
              "Continuity: someone who knows your story",
              "It costs money, and it is not on demand at 3am",
            ],
          ]}
        />
        <Prose>
          <P>
            <strong>Where the free options are better, plainly.</strong> If you
            need someone right now, in the middle of the night, a 24-hour chat
            or a crisis line beats any scheduled service. If money is the
            barrier, try the free groups first; many are excellent. If you want
            people who share your exact diagnosis, DBSA and NAMI groups are
            built for exactly that. If what you want is one person who stays,
            that is where paid one-to-one support earns its place. More on
            weighing all of this in{" "}
            <Link href="/learn/alternatives-to-therapy" style={LINK}>
              alternatives to therapy
            </Link>{" "}
            and{" "}
            <Link href="/learn/cant-afford-therapy" style={LINK}>
              cheap and free options when you can&rsquo;t afford therapy
            </Link>
            .
          </P>
        </Prose>
      </Section>

      {/* HISTORY */}
      <Section>
        <Prose>
          <H2>A short history of peer support.</H2>
          <P first>
            People have always helped each other through hard things, but
            modern peer support has a few clear roots. Alcoholics Anonymous,
            founded in 1935, turned sponsorship, one person in recovery guiding
            another, into a structured practice.
          </P>
          <P>
            In the 1970s, former psychiatric patients organised self-help
            groups and drop-in centres, arguing that people with lived
            experience knew things professionals did not. From the late 1990s,
            US states began training and certifying peer specialists, and peer
            support workers became part of mental health services in the US,
            the UK, Canada and Australia.
          </P>
          <P>
            Today the field includes paid professionals, volunteers, online
            communities and informal groups. They share one idea: someone who
            has been there can help in ways nobody else can.
          </P>
        </Prose>
      </Section>

      {/* HOW TO FIND IT */}
      <Section>
        <H2>How to find peer support.</H2>
        <div
          className="ps-three"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 36,
          }}
        >
          {[
            {
              where: "United States",
              items: [
                "NAMI: free peer-led support groups and classes. The NAMI HelpLine is 1-800-950-6264.",
                "DBSA: free online and local groups for depression and bipolar disorder.",
                "Warmlines: search “warmline” with your state; most states have at least one.",
                "Your clinic or community mental health centre: ask if they have a certified peer specialist.",
                "Grief: GriefShare groups, and The Compassionate Friends for bereaved parents.",
                "Alcohol and drugs: AA, NA, SMART Recovery and local recovery community organisations.",
              ],
            },
            {
              where: "Canada",
              items: [
                "Canadian Mental Health Association: many local branches run peer support programmes.",
                "Peer Support Canada: sets national certification standards for peer supporters.",
                "Ask your family doctor or local health service about peer programmes nearby.",
                "In crisis: call or text 9-8-8, at any hour.",
              ],
            },
            {
              where: "United Kingdom",
              items: [
                "Mind: many local Minds run peer support groups.",
                "Hub of Hope: a national directory of mental health support, including peer groups.",
                "Togetherall: free in many NHS areas, universities and workplaces.",
                "If you need therapy rather than peer support, in England you can refer yourself to NHS Talking Therapies.",
                "Samaritans: 116 123, free, at any hour.",
              ],
            },
          ].map((col) => (
            <div key={col.where}>
              <h3 style={{ marginBottom: 14 }}>{col.where}</h3>
              <ul style={{ paddingLeft: 20, margin: 0, display: "grid", gap: 10 }}>
                {col.items.map((t) => (
                  <li key={t} style={{ ...LIST_ITEM, fontSize: 16 }}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* WHERE HEARTH FITS */}
      <Section tint>
        <Prose>
          <div className="eyebrow" style={{ marginBottom: 18 }}>
            <span className="dot" />
            Where we fit
          </div>
          <H2>Where Hearth fits.</H2>
          <P first>
            Hearth (in full, Dear Hearth) is a paid, one-to-one peer support
            service. You are matched by hand with one <strong>Keeper</strong>,
            a trained peer supporter, and you keep the same person for as long
            as it helps. You talk in a <strong>Sit</strong>, a 35–60 minute
            video or audio call, every two weeks for $39 a month or every week
            for $99 a month. In between there is the{" "}
            <strong>Long Talk</strong>, a written thread with your Keeper, and
            a short note from them every Friday.
          </P>
          <P>
            Many Keepers trained as psychologists or counsellors in their home
            countries, and every Keeper completes Hearth&rsquo;s training in
            listening, scope and crisis steps. None of them acts as a clinician
            at Hearth. If what you are carrying needs therapy, your Keeper will
            say so and help you find a licensed therapist.
          </P>
          <P>
            Hearth is built for one gap in the comparison above: continuity.
            Groups change, phone lines rotate, and free listeners are rarely
            the same person twice. If you want one person who knows your story,
            that is what we do. If you need something free, immediate or
            clinical, use the options above instead. We would rather you got
            the right help than our help.{" "}
            <Link href="/how-it-works" style={LINK}>
              How Hearth works
            </Link>{" "}
            ·{" "}
            <Link href="/pricing" style={LINK}>
              Pricing
            </Link>
          </P>
          <div className="cta-row" style={{ marginTop: 32 }}>
            <Link href="/intake" className="btn btn-primary btn-lg">
              Start the 12-minute intake <span className="arr">&rarr;</span>
            </Link>
            <Link href="/pricing" className="btn btn-ghost btn-lg">
              See pricing
            </Link>
          </div>
        </Prose>
      </Section>

      {/* FAQ */}
      <Section>
        <h2 style={{ maxWidth: "20ch", marginBottom: 36 }}>
          Common questions about peer support.
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
      </Section>

      {/* REFERENCES */}
      <Section>
        <Prose>
          <h2 style={{ maxWidth: "20ch", marginBottom: 24 }}>Sources.</h2>
          <ol
            style={{
              paddingLeft: 22,
              margin: 0,
              display: "grid",
              gap: 12,
              fontSize: 15,
              lineHeight: 1.6,
              color: "var(--ink-2)",
            }}
          >
            {REFERENCES.map((r) => (
              <li key={r.url}>
                {r.cite}{" "}
                <a
                  href={r.url}
                  rel="noopener"
                  style={{ ...LINK, wordBreak: "break-all" }}
                >
                  {r.url.replace(/^https:\/\//, "")}
                </a>
              </li>
            ))}
          </ol>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-3)", marginTop: 22 }}>
            Last reviewed 24 October 2026. This guide is general information,
            not medical advice. Hearth is peer support, not therapy and not a
            crisis service.
          </p>
        </Prose>
      </Section>

      {/* KEEP READING */}
      <section style={{ padding: "72px 0" }}>
        <div className="wrap">
          <div style={{ maxWidth: "68ch" }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />
              Keep reading
            </div>
            <div style={{ display: "grid", gap: 18, marginTop: 8 }}>
              {[
                ["/learn/one-to-one-peer-support", "One-to-one peer support: how it works"],
                ["/learn/peer-support-vs-therapy", "Peer support vs therapy: the key differences"],
                ["/learn/alternatives-to-therapy", "Alternatives to therapy, and who each one suits"],
                ["/learn/do-i-need-therapy", "Do I need therapy, or someone to talk to?"],
                ["/learn/cant-afford-therapy", "Can't afford therapy? Cheap and free options"],
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

      <style>{`
        @media (max-width: 900px) {
          .ps-two { grid-template-columns: 1fr !important; gap: 28px !important; }
          .ps-three { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>

      <SharedFooter />
    </>
  );
}
