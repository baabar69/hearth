import Link from "next/link";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";
import {
  jsonLd,
  webPageLd,
  breadcrumbLd,
  faqLd,
  articleLd,
} from "../lib/schema";

export const metadata = {
  title: "Hearth vs. BetterHelp: Which One Do You Need?",
  description:
    "BetterHelp is online therapy with licensed counsellors. Hearth is peer support with one Keeper, kept for years. Costs, formats, who each fits, and the honest alternatives.",
  alternates: { canonical: "/hearth-vs-betterhelp" },
  openGraph: {
    title: "Hearth vs. BetterHelp: Which One Do You Need?",
    description:
      "Therapy with a rotating counsellor, or one trained person who stays. Compared plainly, with costs.",
    url: "/hearth-vs-betterhelp",
    type: "article",
  },
};

const REVIEWED = "2026-08-22";

const COMPARISON = [
  {
    label: "What it is",
    bh: "Online therapy. A licensed mental-health professional, delivered through an app.",
    hearth: "Peer support. One trained, paid Keeper, matched by hand and kept for years.",
  },
  {
    label: "Who you talk to",
    bh: "A counsellor, psychologist, social worker or therapist with a relevant degree and at least three years of experience, per BetterHelp.",
    hearth: "A Keeper: 120 hours of Hearth training, background-checked, supervised monthly. Not a clinician, and clear about it.",
  },
  {
    label: "Continuity",
    bh: "You can be matched to a different therapist if the fit is wrong. Many people do switch, sometimes more than once.",
    hearth: "The same person, for as long as you stay. Switching is free in the first 30 days, then rare by design.",
  },
  {
    label: "Cost",
    bh: "$70 to $100 per week, billed every four weeks, according to BetterHelp's FAQ. That is roughly $280 to $400 a month.",
    hearth: "$39 a month for a call every two weeks, $99 for every week. Chat and the Friday note included. No per-session billing.",
  },
  {
    label: "Format",
    bh: "Messaging any time, plus live chat, phone or video sessions with your therapist.",
    hearth: "A 35 to 60 minute video or audio call, a chat thread in between, and a written note from your Keeper every Friday.",
  },
  {
    label: "Matching",
    bh: "Questionnaire, then an algorithm and availability decide who you get.",
    hearth: "A person at Hearth reads your intake and chooses the Keeper who can hold what you brought. Matched within 72 hours.",
  },
  {
    label: "Can diagnose or prescribe",
    bh: "No. BetterHelp states its therapists cannot make an official diagnosis, fulfil a court order or prescribe medication.",
    hearth: "No. Hearth is not a clinical service. If you need a clinician, your Keeper helps you find one through The Bridge.",
  },
  {
    label: "Crisis support",
    bh: "Not for urgent crisis or emergencies, by BetterHelp's own guidance.",
    hearth: "Not a crisis line. Keepers are trained in crisis protocol and will point you to emergency help.",
  },
  {
    label: "Best for",
    bh: "Working on a clinical condition with a licensed professional, from anywhere, without a waiting list.",
    hearth: "The recurring, non-clinical weight of a life: grief, family pressure, caregiving, identity, the in-between years.",
  },
];

const FAQ = [
  {
    q: "Is Hearth a replacement for BetterHelp?",
    a: "No. BetterHelp provides therapy from licensed professionals. Hearth provides peer support from a trained Keeper who is not a clinician. If you need treatment for a mental-health condition, you need therapy, and BetterHelp is one way to get it. If what you need is a consistent, trained person for the everyday weight of your life, Hearth is built for that. Many members use both.",
  },
  {
    q: "Is Hearth cheaper than BetterHelp?",
    a: "Yes, but they are priced for different things. BetterHelp's FAQ lists $70 to $100 per week, billed every four weeks, which works out to roughly $280 to $400 a month for licensed therapy. Hearth is $39 a month for a call every two weeks or $99 a month for a call every week, with the chat thread and Friday note included. Hearth costs less because it is not clinical care, not because it is a discounted version of it.",
  },
  {
    q: "Are Hearth Keepers licensed therapists?",
    a: "No. Keepers are trained peer supporters. Each completes Hearth's 120-hour training in listening, sensitivity, scope and crisis protocol, passes a background check and joins monthly supervision. They do not diagnose, treat or prescribe. When something needs a clinician, a Keeper says so and helps you find one.",
  },
  {
    q: "Can I use Hearth and BetterHelp at the same time?",
    a: "Yes, and it is a common pattern. The therapist works on the clinical root. The Keeper holds the week in between: the family call, the anniversary, the quiet hour before bed. Tell each of them the other exists so nobody is working blind.",
  },
  {
    q: "What happens if I start with Hearth and turn out to need therapy?",
    a: "Your Keeper will tell you plainly, usually in the first few conversations, and walk you to The Bridge, Hearth's network of vetted, licensed therapists. The Keeper relationship does not have to end. Many members keep both.",
  },
];

const ALTERNATIVES = [
  {
    name: "Talkspace",
    what: "Online therapy with licensed providers, and psychiatry for medication.",
    better: "Often covered by insurance in the US, which can bring the cost down a long way. Adds psychiatry if medication is part of the picture.",
    limits: "Still therapy, still a provider who may change. Not built for the years-long, non-clinical relationship.",
    fit: "You want clinical care and your insurance covers it.",
  },
  {
    name: "7 Cups",
    what: "Free, anonymous chat with trained volunteer listeners, plus a paid therapy option.",
    better: "Free is free. Available right now, at any hour, with no commitment. A genuine public good.",
    limits: "Listeners are volunteers who rotate. You start from the beginning each time, and nobody carries your story forward.",
    fit: "You need someone to talk to tonight and cannot spend anything.",
  },
  {
    name: "In-person therapy",
    what: "A licensed therapist in a room with you.",
    better: "The deepest clinical work, the widest range of approaches, and a person who can see all of you.",
    limits: "$100 to $300 a session in the US without insurance. Waiting lists for specialists can run months.",
    fit: "You want treatment, and you want it in person.",
  },
  {
    name: "Hearth",
    what: "Peer support: one trained Keeper, matched by hand, kept for years.",
    better: "Continuity. The same person every call, who remembers who your mother is. A Friday note. $39 a month.",
    limits: "Not therapy. Cannot diagnose, treat or prescribe. Not a crisis line.",
    fit: "You do not need treatment. You need someone who stays.",
  },
];

export default function HearthVsBetterHelpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            webPageLd({
              path: "/hearth-vs-betterhelp",
              name: "Hearth vs. BetterHelp · Hearth",
              description: metadata.description,
              lastReviewed: REVIEWED,
            }),
            articleLd({
              path: "/hearth-vs-betterhelp",
              headline: "Hearth vs. BetterHelp: which one do you need?",
              description: metadata.description,
              datePublished: REVIEWED,
              about: ["Peer support", "Online therapy", "BetterHelp"],
            }),
            faqLd(FAQ),
            breadcrumbLd([
              { name: "Hearth", path: "/" },
              { name: "Hearth vs. BetterHelp", path: "/hearth-vs-betterhelp" },
            ]),
          ]),
        }}
      />
      <SharedNav />

      {/* HERO */}
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            Hearth vs. BetterHelp
          </div>
          <h1 style={{ marginTop: 24, maxWidth: "16ch" }}>
            Not a cheaper BetterHelp.{" "}
            <span className="ember-word">A different chair.</span>
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
            BetterHelp sells therapy: a licensed professional, through an app,
            for about $280 to $400 a month. Hearth sells something older and
            narrower: one trained person, matched to you by hand, who stays for
            years. For $39 a month. This page compares the two honestly,
            including where BetterHelp is the better choice.
          </p>
          <p
            style={{
              maxWidth: "62ch",
              marginTop: 18,
              fontSize: 14,
              lineHeight: 1.6,
              color: "var(--ink-3)",
            }}
          >
            If you are in crisis right now, neither service is the right door.
            In the US call or text 988. In the UK, Samaritans on 116 123.{" "}
            <Link href="/crisis" style={{ textDecoration: "underline" }}>
              More crisis resources
            </Link>
            .
          </p>
        </div>
      </section>

      {/* SHORT ANSWER */}
      <section style={{ background: "var(--paper-2)", paddingTop: 80, paddingBottom: 80 }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            The short answer
          </div>
          <div
            className="vs-grid-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 18,
              marginTop: 28,
            }}
          >
            {[
              {
                h: "Choose BetterHelp if",
                p: "you want therapy. A diagnosed condition, anxiety or depression that needs treatment, trauma work, or simply a licensed professional. BetterHelp gets you one quickly, from anywhere.",
              },
              {
                h: "Choose Hearth if",
                p: "you do not need treatment. You need a consistent person for the weight that is real but not clinical: the family call, the old grief, the caregiving years, the drift of a long marriage.",
              },
              {
                h: "Use both if",
                p: "you are in therapy for the root and want someone to hold the week in between. The therapist treats. The Keeper stays. Tell each one the other exists.",
              },
            ].map((c) => (
              <div
                key={c.h}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--rule)",
                  borderRadius: 8,
                  padding: "26px 24px",
                }}
              >
                <h3 style={{ fontSize: 22, marginBottom: 10 }}>{c.h}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink-2)" }}>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABLE */}
      <section>
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
              BetterHelp details are taken from BetterHelp&rsquo;s own public
              FAQ as of {REVIEWED}. Prices change; check their site before you
              decide. Hearth is our own service, so read our column with that
              in mind.
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
              className="vs-header"
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr 1fr",
                background: "var(--ink)",
                color: "var(--paper)",
              }}
            >
              <div style={{ padding: "20px 24px", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#C9B894" }}>
                What
              </div>
              <div style={{ padding: "20px 24px", fontFamily: "var(--serif)", fontSize: 22, fontWeight: 380 }}>
                BetterHelp
              </div>
              <div style={{ padding: "20px 24px", fontFamily: "var(--serif)", fontSize: 22, fontWeight: 380, color: "#FFB74D", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>
                Hearth
              </div>
            </div>
            {COMPARISON.map((row, i) => (
              <div
                key={row.label}
                className="vs-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr 1fr",
                  borderTop: i === 0 ? "none" : "1px solid var(--rule-2)",
                }}
              >
                <div style={{ padding: "20px 24px", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)", background: "var(--paper-2)" }}>
                  {row.label}
                </div>
                <div style={{ padding: "20px 24px", fontFamily: "var(--serif)", fontSize: 15, lineHeight: 1.55, color: "var(--ink-2)" }}>
                  {row.bh}
                </div>
                <div style={{ padding: "20px 24px", fontFamily: "var(--serif)", fontSize: 15, lineHeight: 1.55, color: "var(--ink)", background: "#FFF7EE", borderLeft: "1px solid var(--rule-2)" }}>
                  {row.hearth}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE EACH IS BETTER */}
      <section style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div
            className="vs-grid-2"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}
          >
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Where BetterHelp is better
              </div>
              <h2 style={{ marginTop: 18, fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: 1.12 }}>
                If you need a clinician, they have thousands.
              </h2>
              <div style={{ marginTop: 22, display: "grid", gap: 14, fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)" }}>
                <p>
                  <b>Licensed professionals.</b> Every BetterHelp provider holds
                  a relevant degree, professional credentials and at least three
                  years of experience. That is the bar for treating a
                  mental-health condition, and Keepers do not meet it, on
                  purpose.
                </p>
                <p>
                  <b>Speed and scale.</b> A large network means you can usually
                  start within days, in most countries, in many languages and
                  specialisms. No waiting list for a trauma specialist in your
                  city.
                </p>
                <p>
                  <b>More ways to talk.</b> Messaging, live chat, phone and video
                  with your therapist. If you want a text-first therapy
                  relationship, that is a real strength.
                </p>
                <p>
                  <b>Clinical frameworks.</b> CBT, EMDR, structured treatment
                  plans. When the work is treatment, you want a professional
                  trained in treatment.
                </p>
              </div>
            </div>
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Where Hearth is different
              </div>
              <h2 style={{ marginTop: 18, fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: 1.12 }}>
                One person who remembers who your mother is.
              </h2>
              <div style={{ marginTop: 22, display: "grid", gap: 14, fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)" }}>
                <p>
                  <b>Continuity, by design.</b> A therapy app can hand you a new
                  counsellor. Hearth will not. Your Keeper is the same person in
                  month one and year three, so you stop re-explaining your life
                  and start being known.
                </p>
                <p>
                  <b>Matched by a person.</b> Someone at Hearth reads what you
                  wrote and chooses a Keeper for your language, your context and
                  the themes you carry. Not an algorithm, not whoever is free.
                </p>
                <p>
                  <b>A shape, not just sessions.</b> A call every two weeks, a
                  chat thread between them, and a few written lines from your
                  Keeper every Friday about what they noticed. Small, specific,
                  yours to keep.
                </p>
                <p>
                  <b>Priced for years, not a crisis.</b> $39 a month is a price
                  you can hold for a long time. That matters, because the things
                  Keepers hold are long.
                </p>
                <p>
                  <b>A door to therapy when you need it.</b> If a Keeper hears
                  something that needs a clinician, they say so and walk you to{" "}
                  <Link href="/bridge" style={{ textDecoration: "underline" }}>
                    The Bridge
                  </Link>
                  , our network of vetted, licensed therapists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE REAL QUESTION */}
      <section>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="eyebrow">
            <span className="dot" />
            The real question
          </div>
          <h2 style={{ marginTop: 18, fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.1 }}>
            Do you need treatment, or company?
          </h2>
          <div style={{ marginTop: 28, display: "grid", gap: 18, fontSize: 17, lineHeight: 1.65, color: "var(--ink-2)" }}>
            <p>
              Most comparisons of BetterHelp and its alternatives argue about
              price and convenience. Those matter, but they skip the question
              underneath: what is the thing you are carrying, and what does it
              actually need?
            </p>
            <p>
              Some weight is clinical. Depression that has settled in, anxiety
              that has taken over, trauma that keeps replaying. That needs
              treatment from someone licensed to give it, and no amount of warmth
              substitutes. If that is you, choose therapy. BetterHelp is a
              reasonable way to get it fast.
            </p>
            <p>
              A lot of weight is not clinical. The mother who brings it up again.
              The grief that is four years old and still has no name. The years
              of parenting your parents. The loneliness of being known only in
              pieces. Therapy can hold this, but it was not built for it, and at
              $300 a month most people stop before the slow work is done.
            </p>
            <p>
              That second kind of weight is what Hearth exists for. It used to
              be held by an elder, a trusted aunt, the cousin everyone called.
              Modern life removed those people and did not replace them. A
              Keeper is the replacement: trained, paid, supervised, and yours.
            </p>
            <p>
              We are not better than therapy. We are better than no one, which is
              what most people have for this part of their lives.
            </p>
          </div>
        </div>
      </section>

      {/* ALTERNATIVES */}
      <section style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                BetterHelp alternatives
              </div>
              <h2 style={{ marginTop: 18 }}>
                The other doors,{" "}
                <span className="serif-i" style={{ color: "var(--ember)" }}>
                  honestly.
                </span>
              </h2>
            </div>
            <p className="lede">
              Including the ones that beat us on something. A comparison where
              we win everything would not be worth your time.
            </p>
          </div>
          <div
            className="vs-grid-2"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}
          >
            {ALTERNATIVES.map((a) => (
              <div
                key={a.name}
                style={{
                  background: a.name === "Hearth" ? "var(--ink)" : "var(--paper)",
                  color: a.name === "Hearth" ? "var(--paper)" : "var(--ink)",
                  border: "1px solid var(--rule)",
                  borderRadius: 8,
                  padding: "28px 26px",
                }}
              >
                <h3 style={{ fontSize: 26, marginBottom: 6, color: a.name === "Hearth" ? "#FFB74D" : "var(--ink)" }}>{a.name}</h3>
                <p style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: a.name === "Hearth" ? "#C9B894" : "var(--ink-3)", marginBottom: 16 }}>
                  {a.what}
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.55, marginBottom: 10 }}>
                  <b>Where it is better:</b> {a.better}
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.55, marginBottom: 10, opacity: 0.85 }}>
                  <b>Where it is limited:</b> {a.limits}
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.55 }}>
                  <b>Best if:</b> {a.fit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="eyebrow">
            <span className="dot" />
            Questions people ask
          </div>
          <div style={{ marginTop: 24, borderTop: "1px solid var(--rule)" }}>
            {FAQ.map((f) => (
              <div key={f.q} style={{ padding: "26px 0", borderBottom: "1px solid var(--rule-2)" }}>
                <h3 style={{ fontSize: 22, marginBottom: 10 }}>{f.q}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)" }}>{f.a}</p>
              </div>
            ))}
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
            <p style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#FFE0B0", marginBottom: 16 }}>
              The intake takes about 12 minutes
            </p>
            <h2 style={{ fontSize: "clamp(32px, 4.5vw, 52px)", lineHeight: 1.1, color: "var(--paper)", marginBottom: 18 }}>
              Tell us what you&rsquo;re{" "}
              <span style={{ color: "var(--ember)", fontStyle: "italic", fontWeight: 300 }}>
                carrying.
              </span>
            </h2>
            <p style={{ color: "rgba(242,237,229,0.7)", fontSize: 16, lineHeight: 1.6, maxWidth: "48ch", marginInline: "auto", marginBottom: 28 }}>
              If what you describe needs a therapist, we will say so on the next
              screen and point you somewhere good. If it needs a Keeper, you
              will be matched within 72 hours.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/intake" className="btn btn-primary btn-lg">
                Start the 12-minute intake <span className="arr">&rarr;</span>
              </Link>
              <Link href="/bridge" className="btn btn-ghost btn-lg" style={{ borderColor: "rgba(255,255,255,0.3)", color: "var(--paper)" }}>
                I want a therapist instead
              </Link>
            </div>
            <p style={{ marginTop: 28, color: "rgba(242,237,229,0.6)", fontSize: 14, lineHeight: 1.7 }}>
              Keep reading:{" "}
              <Link href="/hearth-vs-therapy" style={{ color: "#FFD7B5", textDecoration: "underline" }}>
                Hearth vs. therapy
              </Link>
              {" · "}
              <Link href="/learn/peer-support-vs-therapy" style={{ color: "#FFD7B5", textDecoration: "underline" }}>
                Peer support vs. therapy, the long read
              </Link>
              {" · "}
              <Link href="/learn/do-i-need-therapy" style={{ color: "#FFD7B5", textDecoration: "underline" }}>
                Do I need therapy?
              </Link>
              {" · "}
              <Link href="/learn/cant-afford-therapy" style={{ color: "#FFD7B5", textDecoration: "underline" }}>
                When you can&rsquo;t afford therapy
              </Link>
              {" · "}
              <Link href="/learn/what-is-a-hearth-keeper" style={{ color: "#FFD7B5", textDecoration: "underline" }}>
                What is a hearth keeper?
              </Link>
              {" · "}
              <Link href="/pricing" style={{ color: "#FFD7B5", textDecoration: "underline" }}>
                Full pricing
              </Link>
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .vs-grid-2 { grid-template-columns: 1fr !important; }
          .vs-grid-3 { grid-template-columns: 1fr !important; }
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
