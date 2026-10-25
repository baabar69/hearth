import type { Metadata } from "next";
import type { ReactNode } from "react";
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
const PATH = "/learn/cheap-therapy";

export const metadata: Metadata = {
  title: "Cheap Therapy Options, With Real Prices",
  description:
    "Every low-cost and free therapy option in the US, Canada and UK, with the real price, who qualifies and the catch. Prices checked 24 October 2026.",
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    title: "Cheap therapy: every low-cost option, with the real price",
    description:
      "Medicaid, community clinics, EAPs, training clinics, Open Path, sliding scale and the online platforms, with verified prices.",
    url: PATH,
    publishedTime: PUBLISHED,
    modifiedTime: REVIEWED,
    authors: ["Hearth"],
  },
};

const FAQ = [
  {
    q: "What is the cheapest way to get therapy?",
    a: "If you qualify, free or near-free care through Medicaid, a Certified Community Behavioral Health Clinic or a federally funded community health center. If you have a job, free sessions through your employer's EAP. After that, a university training clinic, Open Path Collective ($40–70 a session after a $65 one-time fee), or asking a private therapist for a sliding-scale fee. The SAMHSA National Helpline (1-800-662-4357) can point you to local low-cost options for free.",
  },
  {
    q: "How can I get therapy for free?",
    a: "Medicaid if you are eligible, a community health center if your income is at or below the federal poverty guidelines, and an employer EAP for a few sessions. In England, NHS Talking Therapies is free and you can refer yourself. In Ontario, Ontario Structured Psychotherapy is free. Certified Community Behavioral Health Clinics must see you whether or not you can pay. In a crisis, 988 (US and Canada) and Samaritans on 116 123 (UK and Ireland) are free, 24 hours a day.",
  },
  {
    q: "Is Open Path Collective legit?",
    a: "Yes. Open Path is a network of therapists who see members at reduced rates: a one-time $65 membership, then $40–70 a session for individual therapy in the US, or $30 with a student intern, with no recurring fees. It is meant for people without insurance, or with poor mental health coverage, who cannot afford market rates. As with any therapist, check your therapist's licence yourself on your state board's website.",
  },
  {
    q: "Is BetterHelp cheaper than regular therapy?",
    a: "Usually cheaper than full-price weekly therapy, but not cheaper than the low-cost routes. BetterHelp lists $70 to $100 a week, billed every four weeks. A 2024 study put the average cash price of a therapy session at $143.26. Open Path, training clinics and sliding-scale therapists are often cheaper still, especially if you go every other week.",
  },
  {
    q: "Is online therapy cheaper than in person?",
    a: "Often, if you compare it with full-price in-person therapy. The main platforms charge roughly $60 to $120 a week if you pay yourself, against an average cash price of about $143 for an in-person session. Low-cost in-person routes such as Open Path ($40–70) or a community clinic can be cheaper than any platform.",
  },
  {
    q: "Can I get free therapy with Medicaid?",
    a: "Often yes, or very close to free. Medicaid covers outpatient mental health care, and what you pay is usually little or nothing, though the rules vary by state. The harder part is finding a therapist who accepts Medicaid and has space. Community clinics and community health centers are a good place to start.",
  },
  {
    q: "How many free sessions does an EAP give?",
    a: "It depends on your employer's contract. A common range is three to eight free sessions per issue. Check your benefits portal or ask HR, and ask what happens when the free sessions run out.",
  },
  {
    q: "Why is therapy so expensive?",
    a: "The session price pays for more than the hour: notes, treatment planning, supervision and training, licensing, insurance and the cost of running a practice, and therapists cannot fill every hour of the day with clients. About a third of therapists in private practice do not take insurance at all, which pushes many people onto full cash prices.",
  },
  {
    q: "Is free therapy any good?",
    a: "It can be very good. Free and low-cost services are often run by licensed clinicians, or by trainees supervised by licensed staff. The usual trade-offs are waiting lists, a fixed number of sessions and less choice about who you see, not lower quality.",
  },
];

const REFERENCES: Array<{ text: string; href: string }> = [
  { text: "Open Path Collective: rates and membership.", href: "https://openpathcollective.org/" },
  { text: "BetterHelp: FAQ (pricing).", href: "https://www.betterhelp.com/faq/" },
  { text: "Talkspace: pricing.", href: "https://www.talkspace.com/pricing" },
  { text: "Online-Therapy.com: pricing.", href: "https://www.online-therapy.com/pricing" },
  {
    text: "Zhu et al. (2024). Health Affairs Scholar. Study of outpatient therapy session prices by payment type, including cash pay and Medicaid.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11412241/",
  },
  {
    text: "SimplePractice: How much does therapy cost? (state averages from 104.7 million session fees, 2023–2024).",
    href: "https://www.simplepractice.com/resource/how-much-does-therapy-cost",
  },
  { text: "988 Suicide & Crisis Lifeline (US).", href: "https://988lifeline.org/" },
  { text: "9-8-8 Suicide Crisis Helpline (Canada).", href: "https://988.ca/" },
  {
    text: "SAMHSA: National Helpline, 1-800-662-4357.",
    href: "https://www.samhsa.gov/find-help/helplines/national-helpline",
  },
  { text: "FindTreatment.gov.", href: "https://findtreatment.gov/" },
  {
    text: "SAMHSA: Certified Community Behavioral Health Clinics.",
    href: "https://www.samhsa.gov/communities/certified-community-behavioral-health-clinics",
  },
  {
    text: "HRSA: Health Center Program Compliance Manual, chapter 9 (sliding fee discount program).",
    href: "https://bphc.hrsa.gov/compliance/compliance-manual/chapter9",
  },
  { text: "NAMI Connection Recovery Support Group.", href: "https://www.nami.org/support-groups/nami-connection/" },
  {
    text: "American Psychiatric Association: Warm lines, providing help before a crisis develops.",
    href: "https://www.psychiatry.org/News-room/APA-Blogs/Warm-Lines-Providing-Help-Before-a-Crisis-Develops",
  },
  {
    text: "NAMI: national warmline directory.",
    href: "https://helplinefaqs.nami.org/article/577-nami-national-warmline-directory",
  },
  {
    text: "NHS: Find NHS Talking Therapies for anxiety and depression.",
    href: "https://www.nhs.uk/nhs-services/mental-health-services/find-nhs-talking-therapies-for-anxiety-and-depression/",
  },
  {
    text: "Health Sciences North: Ontario Structured Psychotherapy Program.",
    href: "https://hsnsudbury.ca/en/Services-and-Specialties/Mental-Health-and-Addictions/Ontario-Structured-Psychotherapy-Program",
  },
  { text: "CBC News: Wellness Together Canada shuts down (April 2024).", href: "https://www.cbc.ca/1.7162398" },
];

const LINK = { color: "var(--ember)" } as const;
const BODY = { fontSize: 18, lineHeight: 1.75, color: "var(--ink-2)" } as const;

function Para({ children, mt = 18 }: { children: ReactNode; mt?: number }) {
  return <p style={{ ...BODY, marginTop: mt }}>{children}</p>;
}

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} style={LINK} rel="noopener noreferrer">
      {children}
    </a>
  );
}

function Section({
  children,
  alt = false,
  wide = false,
  id,
}: {
  children: ReactNode;
  alt?: boolean;
  wide?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      style={{
        padding: "80px 0",
        borderBottom: "1px solid var(--rule-2)",
        background: alt ? "var(--paper-2)" : undefined,
      }}
    >
      <div className="wrap">
        <div style={{ maxWidth: wide ? undefined : "68ch" }}>{children}</div>
      </div>
    </section>
  );
}

function H2({ children }: { children: ReactNode }) {
  return <h2 style={{ maxWidth: "24ch", marginBottom: 28 }}>{children}</h2>;
}

function H3({ children }: { children: ReactNode }) {
  return <h3 style={{ marginTop: 40, marginBottom: 6 }}>{children}</h3>;
}

function DataTable({
  head,
  rows,
  minWidth = 760,
}: {
  head: string[];
  rows: ReactNode[][];
  minWidth?: number;
}) {
  const cell = {
    padding: "14px",
    borderBottom: "1px solid var(--rule-2)",
    color: "var(--ink-2)",
    verticalAlign: "top",
  } as const;
  return (
    <div style={{ overflowX: "auto" }}>
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
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((c, j) => (
                <td
                  key={j}
                  style={
                    j === 0
                      ? { ...cell, color: "var(--ink)", fontWeight: 500 }
                      : cell
                  }
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CheapTherapyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            webPageLd({
              path: PATH,
              name: "Cheap therapy: every low-cost option, with the real price",
              description:
                "Free and low-cost therapy options in the US, Canada and the UK, with verified prices, who qualifies and the trade-off on each.",
              lastReviewed: REVIEWED,
            }),
            articleLd({
              path: PATH,
              headline: "Cheap therapy: every low-cost option, with the real price",
              description:
                "Medicaid, community clinics, EAPs, training clinics, Open Path, sliding scale, group therapy and the online platforms, with prices checked 24 October 2026.",
              datePublished: PUBLISHED,
              dateModified: REVIEWED,
              wordCount: 3200,
              about: [
                "Therapy",
                "Cost of therapy",
                "Affordable therapy",
                "Online therapy",
                "Sliding scale fees",
                "Mental health care",
              ],
            }),
            breadcrumbLd([
              { name: "Hearth", path: "/" },
              { name: "Cheap therapy", path: PATH },
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
            {" · Learn · Cheap therapy"}
          </div>
          <h1 style={{ maxWidth: "18ch", fontSize: "clamp(42px, 6.4vw, 88px)" }}>
            Cheap therapy:
            <br />
            <span className="serif-i" style={{ color: "var(--ember)" }}>
              every low-cost option, with the real price.
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
            Therapy does not have to cost $150 a session. Below is every free
            and low-cost route we could verify in the US, Canada and the UK,
            with the price, who qualifies and the catch on each.
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
            Published 24 October 2026 · Prices checked 24 October 2026 · ~14 min read
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
            <strong>If you are in crisis, cost is not the question today.</strong>{" "}
            In the US and Canada, call or text <strong>988</strong>. In the UK
            and Ireland, call Samaritans on <strong>116 123</strong>. Both are
            free, any hour. More numbers on our{" "}
            <Link href="/crisis" style={LINK}>
              crisis page
            </Link>
            .
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
              The cheapest ways to get therapy, roughly from cheapest up:{" "}
              <strong>Medicaid</strong>, a <strong>community mental health
              clinic</strong> or a <strong>community health center</strong> if
              you qualify; free sessions through an employer{" "}
              <strong>EAP</strong>; a <strong>university training
              clinic</strong>; <strong>Open Path Collective</strong> at
              $40–70 a session; a <strong>sliding-scale fee</strong> from a
              private therapist; and <strong>group therapy</strong>. Online
              platforms cost about $60–120 a week if you pay yourself.
            </p>
            <Para mt={22}>
              If you do only one thing today, call the{" "}
              <strong>SAMHSA National Helpline on 1-800-662-4357</strong>. It
              is free, confidential and open 24 hours a day in English and
              Spanish, and its job is to point you to state-funded and
              sliding-fee services near you. It gives referrals, not
              counselling.
            </Para>
            <Para>
              Not sure where to start at all? Our step-by-step guide,{" "}
              <Link href="/learn/cant-afford-therapy" style={LINK}>
                can&rsquo;t afford therapy? what to do
              </Link>
              , walks through the first call and what to say.
            </Para>
          </div>
        </div>
      </section>

      {/* WHAT CHEAP IS MEASURED AGAINST */}
      <Section>
        <H2>What &ldquo;cheap&rdquo; is measured against.</H2>
        <Para mt={0}>
          A 2024 study of therapy prices found that sessions paid in cash
          averaged <strong>$143.26</strong>, against $82.77 for sessions paid
          by Medicaid, and that about a third of therapists in private practice
          do not take insurance at all (Zhu et al., 2024).
        </Para>
        <Para>
          SimplePractice, which runs scheduling and billing software for
          therapists, looked at 104.7 million session fees across 2023 and 2024
          and found state averages running from <strong>$122</strong> in
          Missouri to <strong>$227</strong> in North Dakota.
        </Para>
        <Para>
          So weekly therapy at full price can pass $500 a month. Against that,
          most of the options below are cheap. For the full breakdown by
          country, see{" "}
          <Link href="/learn/how-much-does-therapy-cost" style={LINK}>
            how much therapy costs
          </Link>
          .
        </Para>
      </Section>

      {/* MASTER TABLE */}
      <Section wide id="prices">
        <H2>Cheap therapy options at a glance.</H2>
        <p
          style={{
            fontFamily: "var(--mono)",
            fontSize: 12,
            color: "var(--ink-3)",
            letterSpacing: "0.04em",
            marginBottom: 20,
          }}
        >
          Checked 24 October 2026. Prices change; confirm before you book.
        </p>
        <DataTable
          minWidth={880}
          head={["Option", "Price", "Who qualifies", "Wait", "Same therapist?", "Source"]}
          rows={[
            [
              "Medicaid",
              "Little or nothing; varies by state",
              "Low income; rules set by your state",
              "Finding a provider with space can take time",
              "Usually",
              <Ext key="s" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11412241/">Zhu et al., 2024</Ext>,
            ],
            [
              "Community mental health clinic (CCBHC)",
              "Cannot turn you away for inability to pay",
              "Anyone",
              "Varies by clinic",
              "Usually",
              <Ext key="s" href="https://www.samhsa.gov/communities/certified-community-behavioral-health-clinics">SAMHSA</Ext>,
            ],
            [
              "Community health center (FQHC)",
              "Sliding fee by income; full discount at or below the poverty line",
              "Anyone; discounts by income",
              "Varies by center",
              "Usually",
              <Ext key="s" href="https://bphc.hrsa.gov/compliance/compliance-manual/chapter9">HRSA</Ext>,
            ],
            [
              "Employer EAP",
              "Free for a set number of sessions",
              "Employees with an EAP benefit",
              "Often short",
              "For the free sessions",
              "Your HR or benefits portal",
            ],
            [
              "University training clinic",
              "Low fee; varies by clinic",
              "Usually anyone nearby",
              "Some keep waitlists",
              "Until the trainee's placement ends",
              "Your nearest university",
            ],
            [
              "Open Path Collective (US)",
              "$40–70 individual, $30 student intern, plus $65 once",
              "No insurance or poor coverage, cannot pay market rates",
              "Depends on the therapist",
              "Yes",
              <Ext key="s" href="https://openpathcollective.org/">Open Path</Ext>,
            ],
            [
              "Sliding scale (private therapist)",
              "Varies; you ask",
              "Anyone who asks",
              "Depends on the therapist",
              "Yes",
              <Link key="s" href="/learn/sliding-scale-therapy" style={LINK}>Our guide</Link>,
            ],
            [
              "Group therapy",
              "Usually less than individual; varies",
              "Anyone",
              "Groups start on fixed dates",
              "Same group leader",
              "Clinics and training clinics",
            ],
            [
              "BetterHelp",
              "$70–100 a week, billed every 4 weeks",
              "Anyone",
              "Varies",
              "You can switch",
              <Ext key="s" href="https://www.betterhelp.com/faq/">BetterHelp FAQ</Ext>,
            ],
            [
              "Talkspace",
              "$69–109 a week out of pocket; many insured members pay $0",
              "Anyone; takes insurance",
              "Varies",
              "You can switch",
              <Ext key="s" href="https://www.talkspace.com/pricing">Talkspace</Ext>,
            ],
            [
              "Online-Therapy.com",
              "$60, $90 or $120 a week",
              "Anyone",
              "Varies",
              "Varies",
              <Ext key="s" href="https://www.online-therapy.com/pricing">Online-Therapy.com</Ext>,
            ],
            [
              "NHS Talking Therapies (England)",
              "Free",
              "18+ in England (16–17 in some areas)",
              "Varies by area",
              "For your course of treatment",
              <Ext key="s" href="https://www.nhs.uk/nhs-services/mental-health-services/find-nhs-talking-therapies-for-anxiety-and-depression/">NHS</Ext>,
            ],
            [
              "Ontario Structured Psychotherapy",
              "Free",
              "18+ in Ontario",
              "Varies by region",
              "For your course of treatment",
              <Ext key="s" href="https://hsnsudbury.ca/en/Services-and-Specialties/Mental-Health-and-Addictions/Ontario-Structured-Psychotherapy-Program">HSN</Ext>,
            ],
            [
              "Open Path Collective (Canada)",
              "C$50–90 individual, C$40 student intern, plus C$89 once",
              "Same as US",
              "Depends on the therapist",
              "Yes",
              <Ext key="s" href="https://openpathcollective.org/">Open Path</Ext>,
            ],
          ]}
        />
      </Section>

      {/* US FREE OR NEAR-FREE */}
      <Section>
        <H2>Free or nearly free therapy in the US.</H2>
        <Para mt={0}>
          These are the routes to try first if money is the main obstacle. Some
          depend on income or a job; one of them is open to anyone.
        </Para>

        <H3>Medicaid</H3>
        <Para mt={10}>
          If your income is low, Medicaid is usually the cheapest route there
          is. It covers outpatient mental health care, and what you pay is
          usually little or nothing, though the rules vary by state. The common
          catch is finding a therapist who takes Medicaid and has space. Your
          state&rsquo;s Medicaid plan keeps a provider list, and the community
          clinics below are a good place to start.
        </Para>

        <H3>Certified Community Behavioral Health Clinics (CCBHCs)</H3>
        <Para mt={10}>
          CCBHCs are community mental health clinics that must serve anyone,
          whether or not they can pay. As of July 2025 there were more than 500
          of them across 46 states, Washington DC and Puerto Rico (SAMHSA). Ask
          about the fee when you call: by design, cost should not be the reason
          they turn you away.
        </Para>

        <H3>Community health centers (FQHCs)</H3>
        <Para mt={10}>
          Federally funded community health centers cannot deny anyone care
          because they cannot pay. They charge on a sliding fee scale tied to
          income. At or below the federal poverty guidelines you get a full
          discount (a small nominal fee may apply), and between 100% and 200% of
          the guidelines you pay a reduced share (HRSA). Ask whether yours offers
          counselling or therapy on site. You can find one at{" "}
          <Ext href="https://findahealthcenter.hrsa.gov/">findahealthcenter.hrsa.gov</Ext>.
        </Para>

        <H3>Your employer&rsquo;s EAP</H3>
        <Para mt={10}>
          If you have a job, check for an Employee Assistance Program before you
          pay anyone. An EAP usually gives a small number of free, short-term
          counselling sessions, commonly somewhere between three and eight per
          issue. Ask HR or look in your benefits portal. The catch is the limit:
          an EAP is built for a short stretch of help, so ask at the start what
          happens when the free sessions run out.
        </Para>

        <H3>University training clinics</H3>
        <Para mt={10}>
          Universities that train psychologists, counsellors and social workers
          often run clinics where graduate students see clients under close
          supervision by licensed staff. Fees are usually well below market
          rates and vary by clinic. The trade-offs are honest ones: you will see
          someone early in their career, sessions may be recorded for
          supervision, and your therapist moves on when their placement ends.
          Search for your nearest university with &ldquo;psychology training
          clinic&rdquo; or &ldquo;counseling clinic&rdquo;.
        </Para>

        <H3>The SAMHSA National Helpline and FindTreatment.gov</H3>
        <Para mt={10}>
          The SAMHSA National Helpline (1-800-662-4357) is free, confidential
          and open 24 hours a day, every day, in English and Spanish. It is a
          referral line, not counselling. Tell them you have no insurance or
          very little money, and they will point you to state-funded programs
          and sliding-fee providers. You can also text your ZIP code to 435748,
          or search{" "}
          <Ext href="https://findtreatment.gov/">FindTreatment.gov</Ext>{" "}
          yourself.
        </Para>
      </Section>

      {/* US LOW COST */}
      <Section>
        <H2>Low-cost therapy in the US.</H2>
        <Para mt={0}>
          If you do not qualify for the free routes, these keep the price of a
          session well under the national average.
        </Para>

        <H3>Open Path Collective</H3>
        <Para mt={10}>
          Open Path is a network of therapists who offer reduced rates to people
          who do not have insurance, or whose insurance covers mental health
          poorly, and who cannot afford market rates of roughly $80–200 a
          session. You pay a one-time <strong>$65 membership</strong>, then{" "}
          <strong>$40–70 a session</strong> for individual therapy, $40–80 for
          couples or family sessions, or $30 with a student intern. There are no
          recurring fees. It is one of the most useful single links on this page.
        </Para>

        <H3>Asking for a sliding scale</H3>
        <Para mt={10}>
          Many private therapists keep a few reduced-fee places they do not
          advertise. Asking is normal, it is not rude, and the worst answer is a
          polite no. Our guide to{" "}
          <Link href="/learn/sliding-scale-therapy" style={LINK}>
            sliding scale therapy
          </Link>{" "}
          has the exact words to use by email and by phone.
        </Para>

        <H3>Group therapy</H3>
        <Para mt={10}>
          Group therapy is led by a licensed clinician with several clients in
          the room at once, so it usually costs less per session than seeing
          someone on your own. For some people the group itself is part of what
          helps. Community clinics and training clinics often run groups; prices
          vary.
        </Para>

        <H3>If you have insurance after all</H3>
        <Para mt={10}>
          The cheapest therapist is usually one in your plan&rsquo;s network.
          Medicare Part B also covers outpatient therapy with a licensed
          clinician. If your plan covers mental health badly, our guide to{" "}
          <Link href="/learn/therapy-without-insurance" style={LINK}>
            therapy without insurance
          </Link>{" "}
          covers superbills for out-of-network care and the written cost
          estimate you can ask for before you start.
        </Para>
      </Section>

      {/* ONLINE */}
      <Section wide>
        <div style={{ maxWidth: "68ch" }}>
          <H2>Cheap therapy online: the platforms at their real prices.</H2>
          <Para mt={0}>
            The big platforms charge by the week. These are the prices each one
            listed on 24 October 2026 for people paying out of pocket.
          </Para>
        </div>
        <div style={{ marginTop: 28 }}>
          <DataTable
            minWidth={700}
            head={["Platform", "Price if you pay yourself", "What the price covers", "Insurance"]}
            rows={[
              [
                <Ext key="p" href="https://www.betterhelp.com/faq/">BetterHelp</Ext>,
                "$70–100 a week, billed every 4 weeks",
                "Sessions and messaging with a licensed therapist",
                "Lists financial-aid discounts",
              ],
              [
                <Ext key="p" href="https://www.talkspace.com/pricing">Talkspace</Ext>,
                "$69 a week messaging; $99 video plus messaging; $109 with workshops",
                "Depends on the plan you pick",
                "Takes insurance; says most insured members pay $0",
              ],
              [
                <Ext key="p" href="https://www.online-therapy.com/pricing">Online-Therapy.com</Ext>,
                "$60, $90 or $120 a week",
                "Messaging only, one 45-minute session a week, or two",
                "Not listed",
              ],
            ]}
          />
        </div>
        <div style={{ maxWidth: "68ch" }}>
          <Para mt={26}>
            Over four weeks, BetterHelp comes to $280–400 and Talkspace&rsquo;s
            video plan to about $396. Weekly in-person sessions at the average
            cash price of $143.26 would come to about $573. So the platforms are
            cheaper than full-price weekly therapy, but dearer than Open Path, a
            training clinic, or a sliding-scale therapist you see every other
            week.
          </Para>
          <Para>
            Three things to check before you sign up. Prices change and often
            vary by location, and first-month discounts are common (Online-Therapy.com
            shows lower introductory figures, and Talkspace&rsquo;s own page
            lists different numbers in different places). Ask whether you keep
            the same therapist, and what happens if they leave the platform. And
            read the cancellation terms before the first billing date. We set
            the category against long-term peer support in{" "}
            <Link href="/hearth-vs-betterhelp" style={LINK}>
              Hearth vs. therapy apps
            </Link>
            .
          </Para>
        </div>
      </Section>

      {/* CANADA */}
      <Section>
        <H2>Cheap and free therapy in Canada.</H2>
        <Para mt={0}>
          Public coverage for therapy in Canada depends on your province, and
          most private therapy is paid out of pocket or through workplace
          benefits. The routes worth knowing:
        </Para>
        <ul style={{ marginTop: 22, paddingLeft: 0, listStyle: "none", display: "grid", gap: 16 }}>
          {[
            [
              "Crisis: 9-8-8.",
              "Call or text 988, 24 hours a day, every day of the year. Free.",
            ],
            [
              "Open Path Collective, Canada.",
              "C$50–90 for individual sessions, C$50–100 for couples or family, C$40 with a student intern, after a one-time C$89 membership.",
            ],
            [
              "Ontario Structured Psychotherapy.",
              "Free, short-term cognitive behavioural therapy for adults 18 and over in Ontario. You can refer yourself, and in some regions you do not need a health card. Details vary by region.",
            ],
            [
              "Workplace benefits and EAPs.",
              "Many employers offer an EAP or a yearly amount for counselling. Check before you pay full price.",
            ],
            [
              "University training clinics.",
              "As in the US, supervised trainees at reduced fees.",
            ],
          ].map(([head, body]) => (
            <li key={head} style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}>
              <strong style={{ color: "var(--ink)" }}>{head}</strong> {body}
            </li>
          ))}
        </ul>
        <Para mt={24}>
          One correction many lists still get wrong: Wellness Together Canada,
          the free federal mental health portal, shut down on 3 April 2024. If a
          guide still recommends it, it has not been updated.
        </Para>
      </Section>

      {/* UK */}
      <Section>
        <H2>Free therapy in the UK.</H2>
        <Para mt={0}>
          In England, <strong>NHS Talking Therapies</strong> is free and you can
          refer yourself online, without going through your GP first. It is for
          adults 18 and over (16 and 17 in some areas), and in some areas you
          can refer yourself even if you are not registered with a GP. Waiting
          times vary by area.
        </Para>
        <Para>
          In Scotland, Wales and Northern Ireland, start with your GP, who can
          refer you to local NHS psychological services. In a crisis anywhere in
          the UK or Ireland, Samaritans are on 116 123, free, any hour.
        </Para>
      </Section>

      {/* IS CHEAP THERAPY GOOD */}
      <Section alt>
        <H2>Is cheap therapy any good?</H2>
        <Para mt={0}>
          Usually, yes. A low fee says nothing about the quality of the person
          in the room. Training clinics are supervised by licensed staff, public
          services such as NHS Talking Therapies are built around established
          treatments, and plenty of experienced therapists keep reduced-fee
          places on purpose. The real trade-offs are waiting lists, a fixed
          number of sessions, and less choice about who you see.
        </Para>
        <Para>What should make you walk away, whatever the price:</Para>
        <ul style={{ marginTop: 18, paddingLeft: 0, listStyle: "none", display: "grid", gap: 14 }}>
          {[
            "You cannot find their licence. Every US state lets you look a therapist up on its licensing board's website. If someone calling themselves a therapist is not licensed where you live, they should not be treating you.",
            "Pressure to prepay months up front before you have met.",
            "No clear answer to the question: what happens if I am in crisis?",
            "Anything sold as therapy by someone who is not a licensed clinician. That includes peer support services. We are one, and we do not call what we do therapy.",
            "Being moved to a new therapist without being asked.",
            "Promises to cure or fix you quickly.",
          ].map((item) => (
            <li key={item} style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* NOT THERAPY */}
      <Section>
        <div className="eyebrow" style={{ marginBottom: 18 }}>
          <span className="dot" />
          Not therapy, but less than most therapy
        </div>
        <H2>When what you need is not therapy at a lower price.</H2>
        <Para mt={0}>
          Sometimes the honest answer is that you do not need cheaper therapy.
          You need something other than therapy: company through a hard stretch
          rather than treatment for a condition. These options are not therapy
          and should never be sold as therapy, but they are free or cost less:
        </Para>
        <ul style={{ marginTop: 22, paddingLeft: 0, listStyle: "none", display: "grid", gap: 16 }}>
          <li style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}>
            <strong style={{ color: "var(--ink)" }}>NAMI Connection.</strong>{" "}
            Free, peer-led support groups for adults 18 and over, 90 minutes
            each, many of them online.{" "}
            <Ext href="https://www.nami.org/support-groups/nami-connection/">Find a group</Ext>.
          </li>
          <li style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}>
            <strong style={{ color: "var(--ink)" }}>Warmlines.</strong> Free,
            confidential phone lines staffed by peers, for talking things
            through before they become a crisis. About 30 states have one, and{" "}
            <Ext href="https://helplinefaqs.nami.org/article/577-nami-national-warmline-directory">NAMI lists them</Ext>.
          </li>
          <li style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}>
            <strong style={{ color: "var(--ink)" }}>One-to-one peer support.</strong>{" "}
            A trained person, often with lived experience of what you are
            carrying, who meets with you regularly. Usually paid.{" "}
            <Link href="/peer-support" style={LINK}>What peer support is, and what it is not</Link>.
          </li>
        </ul>

        <H3>Where Hearth fits</H3>
        <Para mt={10}>
          Hearth is one of these, and it is peer support, not therapy. You are
          matched by hand with one <strong>Keeper</strong>, a trained peer
          listener rather than a therapist, and you keep the same person. You
          meet in a <strong>Sit</strong>, a 35–60 minute video or audio call,
          every two weeks for <strong>$39 a month</strong> or every week for{" "}
          <strong>$99 a month</strong>, with an email thread in between. It is
          for the weight of a hard stretch of life: grief, family pressure,
          loneliness, a transition.
        </Para>
        <Para>Hearth is the wrong choice, and you should use the options above, if:</Para>
        <ul style={{ marginTop: 14, paddingLeft: 0, listStyle: "none", display: "grid", gap: 12 }}>
          {[
            "You have, or suspect you have, a condition that needs treatment.",
            "You are in or near crisis, or having thoughts of harming yourself.",
            "You need trauma treatment, or medication is part of the question.",
            "You need records for insurance, work, court or immigration.",
            "A free group or warmline already gives you what you need. Then use the free option.",
          ].map((item) => (
            <li key={item} style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}>
              {item}
            </li>
          ))}
        </ul>
        <Para mt={22}>
          For the full range of options that are not therapy, with the trade-off
          on each, see{" "}
          <Link href="/learn/alternatives-to-therapy" style={LINK}>
            alternatives to therapy, compared
          </Link>
          .
        </Para>
      </Section>

      {/* FAQ */}
      <Section>
        <H2>Common questions.</H2>
        <div style={{ display: "grid", gap: 32 }}>
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
        <div className="eyebrow" style={{ marginBottom: 18 }}>
          <span className="dot" />
          Sources, checked 24 October 2026
        </div>
        <ol style={{ paddingLeft: 20, display: "grid", gap: 10, margin: 0 }}>
          {REFERENCES.map((r) => (
            <li key={r.href + r.text} style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)" }}>
              {r.text}{" "}
              <a
                href={r.href}
                style={{ ...LINK, wordBreak: "break-word" }}
                rel="noopener noreferrer"
              >
                {r.href.replace(/^https:\/\//, "")}
              </a>
            </li>
          ))}
        </ol>
      </Section>

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
                ["/learn/cant-afford-therapy", "Can't afford therapy? What to do, step by step"],
                ["/learn/sliding-scale-therapy", "Sliding scale therapy: how to ask"],
                ["/learn/therapy-without-insurance", "Therapy without insurance: cost and options"],
                ["/learn/how-much-does-therapy-cost", "How much does therapy cost?"],
                ["/learn/alternatives-to-therapy", "Alternatives to therapy, compared"],
                ["/peer-support", "What is peer support?"],
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
