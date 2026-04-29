import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";
import Link from "next/link";

export const metadata = {
  title: "Stories · Hearth",
  description:
    "What members say about pulling up a chair. Real stories, real Sits, real Keepers — names changed for privacy.",
};

const STORIES = [
  {
    name: "Priya",
    age: "34",
    location: "Toronto",
    keeper: "Aruna",
    topic: "Family pressure",
    quote:
      "My mother and I have been having the same fight for ten years. Aruna didn't fix it. She helped me see what we were both protecting. The fight is still there. The shame around it isn't.",
    months: "8 months in Hearth",
  },
  {
    name: "Hassan",
    age: "29",
    location: "Brooklyn",
    keeper: "Faisal",
    topic: "Career & life direction",
    quote:
      "I quit the job my parents wanted. I didn't tell them for six weeks. Faisal sat with me through that silence. Not a therapist. Just someone who'd done a version of this himself.",
    months: "1 year in Hearth",
  },
  {
    name: "Anonymous",
    age: "41",
    location: "Houston",
    keeper: "Rabia",
    topic: "Intimacy & shame",
    quote:
      "I'd never said any of it out loud. Not to my husband, not to friends, not to a therapist. Rabia didn't flinch. That's what I needed before I could say it to anyone else.",
    months: "6 months in Hearth",
  },
  {
    name: "Devika",
    age: "38",
    location: "Bay Area",
    keeper: "Aruna",
    topic: "Grief & loss",
    quote:
      "My nani died two years ago. I never grieved out loud — there wasn't space for it. Aruna made the space. We talk about her every week. It feels like keeping her with me.",
    months: "1 year and 4 months in Hearth",
  },
  {
    name: "Anonymous",
    age: "26",
    location: "London",
    keeper: "Priya S.",
    topic: "Sexual identity",
    quote:
      "I came to Hearth because I couldn't tell my family. Priya didn't tell me what to do. She helped me figure out who I needed to tell first — myself.",
    months: "5 months in Hearth",
  },
  {
    name: "Sara",
    age: "47",
    location: "Chicago",
    keeper: "Aruna",
    topic: "Caregiving burnout",
    quote:
      "I've been holding everyone for years. My mother. My kids. My husband's grief. The first Sit I cried for forty minutes. Aruna didn't try to stop me. She just stayed.",
    months: "10 months in Hearth",
  },
  {
    name: "Anonymous",
    age: "32",
    location: "Seattle",
    keeper: "Hassan A.",
    topic: "Diaspora identity",
    quote:
      "I'm too American for the family, too brown for the office, too queer for the community. Hassan got it without me having to explain. That's the whole thing — not having to explain.",
    months: "7 months in Hearth",
  },
  {
    name: "Mira",
    age: "39",
    location: "New Jersey",
    keeper: "Rabia",
    topic: "Marriage & partnership",
    quote:
      "We were doing the slow drift. I didn't want a divorce, I didn't want couples therapy. I wanted someone to help me think. Rabia did that. I went home different.",
    months: "9 months in Hearth",
  },
];

export default function StoriesPage() {
  return (
    <>
      <SharedNav />

      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            Stories
          </div>
          <h1 style={{ marginTop: 24, maxWidth: "18ch" }}>
            What it&rsquo;s like to{" "}
            <span className="ember-word">pull up a chair.</span>
          </h1>
          <p
            style={{
              maxWidth: "60ch",
              marginTop: 28,
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--ink-2)",
            }}
          >
            Names are changed. Some are anonymous. The Sits, the Keepers, and
            the words people brought are real, shared with permission.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 28,
            }}
            className="stories-grid"
          >
            {STORIES.map((s, i) => (
              <article
                key={i}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--rule)",
                  borderRadius: 8,
                  padding: "32px 32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    alignSelf: "flex-start",
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--ember)",
                    background: "#FFF7EE",
                    border: "1px solid rgba(156,42,26,0.15)",
                    padding: "4px 10px",
                    borderRadius: 100,
                  }}
                >
                  {s.topic}
                </div>
                <p
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 19,
                    lineHeight: 1.5,
                    fontStyle: "italic",
                    color: "var(--ink)",
                    margin: 0,
                  }}
                >
                  &ldquo;{s.quote}&rdquo;
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    marginTop: 8,
                    paddingTop: 18,
                    borderTop: "1px solid var(--rule-2)",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: 17,
                        color: "var(--ink)",
                      }}
                    >
                      {s.name}
                      <span style={{ color: "var(--ink-3)", fontSize: 14 }}>
                        {" "}
                        &middot; {s.age} &middot; {s.location}
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        letterSpacing: "0.06em",
                        color: "var(--ink-3)",
                        marginTop: 6,
                      }}
                    >
                      WITH {s.keeper.toUpperCase()} &middot;{" "}
                      {s.months.toUpperCase()}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 80 }}>
        <div className="wrap">
          <div
            style={{
              background: "var(--paper-2)",
              borderRadius: 12,
              padding: "56px 40px",
              textAlign: "center",
              border: "1px solid var(--rule-2)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(28px, 4vw, 40px)",
                lineHeight: 1.2,
                color: "var(--ink)",
                margin: 0,
                maxWidth: "20ch",
                marginInline: "auto",
              }}
            >
              Yours could be the next.
            </p>
            <p
              style={{
                marginTop: 18,
                color: "var(--ink-2)",
                fontSize: 16,
                lineHeight: 1.6,
                maxWidth: "44ch",
                marginInline: "auto",
              }}
            >
              The First Sit takes about 12 minutes. We match you by hand within
              72 hours.
            </p>
            <Link
              href="/intake"
              className="btn btn-primary btn-lg"
              style={{ marginTop: 28 }}
            >
              Begin the First Sit <span className="arr">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          .stories-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <SharedFooter />
    </>
  );
}
