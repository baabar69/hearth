import Link from "next/link";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";
import KeeperPortrait from "../components/KeeperPortrait";

export const metadata = {
  title: "Meet the Keepers · Hearth",
  description:
    "Each one a person, not a profile. Browse, listen, read. The match matters.",
};

type Keeper = {
  slug: string;
  name: string;
  city: string;
  tagline: string;
  themes: string[];
  languages: string[];
  bio: string;
  photo?: string;
};

const KEEPERS: Keeper[] = [
  {
    slug: "aruna-bhattacharya",
    name: "Aruna Bhattacharya",
    city: "Karachi → Toronto",
    tagline: "Was the cousin people called when something didn't make sense yet.",
    themes: ["Diaspora identity", "Caregiving", "Family pressure", "Career-cultural"],
    languages: ["Bengali", "English", "Hindi"],
    bio: "25 years counseling people through the hardest chapters — without a clipboard.",
    photo: "/images/keepers/aruna.jpg",
  },
  {
    slug: "rabia-k",
    name: "Rabia K.",
    city: "Lahore → Jersey City",
    tagline: "Retired school principal. Will tell you what your mother meant to say.",
    themes: ["Mothers", "Marriage", "Sandwich years", "In-laws"],
    languages: ["Urdu", "English", "Punjabi"],
    bio: "Has informally mentored 60+ younger women across two countries.",
    photo: "/images/keepers/rabia.jpg",
  },
  {
    slug: "faisal-m",
    name: "Faisal M.",
    city: "Karachi → Houston",
    tagline: "For the men who were never taught to grieve.",
    themes: ["Grief", "Men's emotional support", "Career crossroads", "Diaspora fathers"],
    languages: ["Urdu", "English"],
    bio: "Former journalist. Sits with hard things without flinching.",
    photo: "/images/keepers/faisal.jpg",
  },
  {
    slug: "priya-s",
    name: "Priya S.",
    city: "Chennai → London → Toronto",
    tagline: "For the mothers nobody prepared.",
    themes: ["Postpartum", "New parenthood", "Identity", "Bicultural parenting"],
    languages: ["Tamil", "English", "Hindi"],
    bio: "Three cultures, two kids, one very honest voice.",
    photo: "/images/keepers/priya.jpg",
  },
  {
    slug: "hassan-a",
    name: "Hassan A.",
    city: "Islamabad → Chicago",
    tagline: "Holds faith and doubt without forcing resolution.",
    themes: ["Grief", "Faith and identity", "First-year-after", "New immigrant"],
    languages: ["Urdu", "English", "Arabic"],
    bio: "Trained Islamic counselor turned Keeper.",
    photo: "/images/keepers/hassan.jpg",
  },
];

export default function KeepersPage() {
  return (
    <>
      <SharedNav />

      {/* HERO */}
      <section className="hero" style={{ paddingBottom: 80 }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            The Keepers
          </div>
          <h1 style={{ marginTop: 24, maxWidth: "16ch" }}>
            Meet the Keepers.
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
            Each one a person, not a profile. Browse, listen, read. The match
            matters.
          </p>
        </div>
      </section>

      {/* KEEPER GRID */}
      <section
        style={{
          background: "var(--paper-2)",
          borderTop: "1px solid var(--rule-2)",
          borderBottom: "1px solid var(--rule-2)",
          padding: "80px 0 100px",
        }}
      >
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {KEEPERS.map((k) => (
              <div
                key={k.slug}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--rule)",
                  borderRadius: 8,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  transition: "transform .25s ease, box-shadow .25s ease",
                }}
                className="keeper-card"
              >
                <KeeperPortrait name={k.name} photo={k.photo} aspectRatio="4/3" />

                <div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 24,
                      fontWeight: 380,
                      lineHeight: 1.1,
                      marginBottom: 6,
                    }}
                  >
                    {k.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                    }}
                  >
                    {k.city}
                  </div>
                </div>

                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: "var(--ink-2)",
                  }}
                >
                  &ldquo;{k.tagline} {k.bio}&rdquo;
                </p>

                {/* Themes */}
                <div className="keeper-tags">
                  {k.themes.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Languages */}
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--ink-3)",
                    borderTop: "1px solid var(--rule-2)",
                    paddingTop: 14,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>{k.languages.join(" · ")}</span>
                  <Link
                    href={`/keepers/${k.slug}`}
                    className="btn btn-ghost"
                    style={{ padding: "8px 14px", fontSize: 12.5 }}
                  >
                    Read profile <span className="arr">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}

            {/* "Coming soon" card */}
            <div
              style={{
                background: "var(--paper-3)",
                border: "1px dashed var(--rule)",
                borderRadius: 8,
                padding: 28,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 16,
                textAlign: "center",
                minHeight: 320,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  fontWeight: 380,
                  color: "var(--ink-2)",
                  lineHeight: 1.3,
                }}
              >
                New Keepers every month.
              </div>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--ink-3)",
                  lineHeight: 1.55,
                  maxWidth: "28ch",
                }}
              >
                Don&rsquo;t see someone who fits? We add Keepers regularly
                based on language, theme, and community need.
              </p>
              <Link href="/#cta" className="btn btn-primary">
                Pull up a chair <span className="arr">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOR KEEPERS CTA */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}>
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
                For potential Keepers
              </div>
              <h3 style={{ maxWidth: "42ch" }}>
                Are you the person someone needs?
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
                Keepers are trained mentors rooted in communities where the
                village elder tradition is alive. If people naturally turn to
                you in their hard chapters, this might be yours.
              </p>
            </div>
            <Link href="/for-keepers" className="btn btn-ghost btn-lg">
              Apply as a Keeper <span className="arr">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
