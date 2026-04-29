import { notFound } from "next/navigation";
import Link from "next/link";
import SharedNav from "../../components/SharedNav";
import SharedFooter from "../../components/SharedFooter";

export const metadata = {
  title: "Keeper Profile · Hearth",
};

type Keeper = {
  slug: string;
  name: string;
  tagline: string;
  city: string;
  languages: string[];
  themes: string[];
  timezone: string;
  availability: string;
  fullBio: string;
  whatPeopleBring: string[];
  notesFromKeeper: string;
  notForNote: string;
};

const KEEPERS: Keeper[] = [
  {
    slug: "aruna-bhattacharya",
    name: "Aruna Bhattacharya",
    tagline: "Was the cousin people called when something didn't make sense yet.",
    city: "Karachi → Toronto",
    languages: ["Bengali", "English", "Hindi"],
    themes: ["Diaspora identity", "Caregiving", "Family pressure", "Career-cultural"],
    timezone: "EST (Toronto)",
    availability: "Monday–Thursday",
    fullBio:
      "Aruna grew up in Karachi in a home where the door was always open — people came in the late afternoon, made tea they didn't need to ask for, and stayed until something shifted. She emigrated to Toronto in her late twenties, trained as a counselor, and then spent the next twenty-five years sitting with people in their hardest chapters. Not on a couch with a clipboard. At a kitchen table, on the phone, in the parking lot after something happened. She realized early that what most people needed first wasn't a session — it was a chair, a long evening, and someone who wasn't tired of them. Aruna became a Keeper because the word finally described what she'd always been. She works primarily with South Asian women navigating the gap between who they were told to be and who they actually are. She is fluent in the particular exhaustion of being the person everyone leans on, and in the specific guilt that comes with needing to be held yourself. She will not rush your sentence. She will not fix what doesn't need fixing. She will notice what you haven't yet.",
    whatPeopleBring: [
      "The family pressure that arrives in a single phone call and ruins the whole week",
      "Caring for aging parents while raising children and working full-time — the sandwich years",
      "The career that makes sense on paper but costs them everything else",
      "Diaspora identity: being too much of one thing and not enough of another",
      "The specific loneliness of being the one who holds everyone else together",
    ],
    notesFromKeeper:
      "I have sat with a lot of hard things in my life. My own, and other people's. What I know is that most people do not need advice as much as they need someone to stay in the room with them while they figure it out. I will stay in the room.",
    notForNote:
      "Aruna is a trained peer supporter, not a licensed therapist. She does not diagnose, prescribe, or provide clinical care. For anything that needs a clinician — a diagnosis, a medication conversation, a crisis — The Bridge is there, and Aruna will walk you to it personally.",
  },
  {
    slug: "rabia-k",
    name: "Rabia K.",
    tagline: "Retired school principal. Will tell you what your mother meant to say.",
    city: "Lahore → Jersey City",
    languages: ["Urdu", "English", "Punjabi"],
    themes: ["Mothers", "Marriage", "Sandwich years", "In-laws"],
    timezone: "EST (New Jersey)",
    availability: "Tuesday–Friday",
    fullBio:
      "Rabia spent thirty-two years as a school principal in two countries — first in Lahore, then in Jersey City — which means she has spent three decades being the calm person in the middle of everyone else's emergency. She did not choose the mentor role; it found her. Younger teachers, parents, students' mothers — they came to her office not always for the official reason. She retired five years ago and found herself doing the same thing without the title. She became a Keeper because it gave the work a proper container. Rabia is particularly equipped for the women in the middle years — the ones managing mothers-in-law and teenagers at the same time, the ones whose marriages have grown complicated in the specific way long partnerships do, the ones who gave so much of themselves that they can't quite locate where they went. She has lived the in-law stories. She has lived the marriage weight. She will not pretend the cultural context doesn't exist. She speaks Punjabi, Urdu, and English, and she will switch between them mid-sentence if that's where the realest word lives.",
    whatPeopleBring: [
      "Marriage tension that's really about unspoken expectations from both families",
      "In-law dynamics that nobody else fully understands",
      "The mother-daughter relationship — when you are both the daughter and the mother",
      "The sandwich years: caught between your children's needs and your parents' needs",
      "The particular loneliness of a long marriage that has drifted",
    ],
    notesFromKeeper:
      "I am a grandmother and I am a daughter and I am a woman who has sat in many difficult rooms. I do not judge the choices people made under pressure. I do not need you to perform healing. I just need you to be honest with me, and I will be honest with you.",
    notForNote:
      "Rabia is a peer supporter, not a licensed therapist. She does not provide clinical care or diagnosis. If you need a clinician — especially for anything involving depression, anxiety disorders, or crisis — The Bridge exists for exactly that, and Rabia will make the introduction herself.",
  },
  {
    slug: "faisal-m",
    name: "Faisal M.",
    tagline: "For the men who were never taught to grieve.",
    city: "Karachi → Houston",
    languages: ["Urdu", "English"],
    themes: ["Grief", "Men's emotional support", "Career crossroads", "Diaspora fathers"],
    timezone: "CST (Houston)",
    availability: "Monday, Wednesday, Friday",
    fullBio:
      "Faisal was a journalist for fifteen years — in Pakistan, then across the Middle East, then in the US. He has sat in rooms where very hard things happened and watched people carry them without language for the weight. When he stopped reporting and moved to Houston, he started noticing the men in his community: the diaspora fathers who had been strong for so long they didn't know how to be anything else, the men who had lost someone and were still performing fine, the ones who had built a career their parents wanted and couldn't articulate why they felt hollow at the center of it. Faisal became a Keeper for the men nobody checks in on. He brings a journalist's discipline — precision with language, patience for the complicated sentence — and a diaspora man's understanding of what gets suppressed and what that suppression costs. He will not ask you to process feelings in a way that feels foreign. He will ask you questions you haven't been asked before. He will stay with you in the hard answer.",
    whatPeopleBring: [
      "Grief that was never processed because there wasn't time or permission to grieve",
      "The diaspora father experience: providing for everyone while slowly losing yourself",
      "Career crossroads where the 'right' choice was made for the family and not the self",
      "The weight of being the patriarch — the cultural expectation of stoic strength",
      "Grief after loss of parents — navigating the first year without the people who came before",
    ],
    notesFromKeeper:
      "I spent a decade watching men in crisis give one-word answers about how they were doing. I know what lives behind those one-word answers. You don't have to call it feelings. You can just tell me what happened.",
    notForNote:
      "Faisal is a peer supporter, not a licensed therapist. He does not diagnose or provide clinical care. For men dealing with clinical depression, PTSD, or active crisis, The Bridge connects you with licensed therapists — including male therapists — with South Asian cultural fluency.",
  },
  {
    slug: "priya-s",
    name: "Priya S.",
    tagline: "For the mothers nobody prepared.",
    city: "Chennai → London → Toronto",
    languages: ["Tamil", "English", "Hindi"],
    themes: ["Postpartum", "New parenthood", "Identity", "Bicultural parenting"],
    timezone: "EST (Toronto)",
    availability: "Tuesday, Thursday, Saturday",
    fullBio:
      "Priya has lived in three countries and raised two children in a fourth. She knows what it is to parent between cultures — to feel inadequate in both directions, to be too traditional for the Canadian school system and too progressive for the Tamil community WhatsApp group, to love her children fiercely and grieve the self she was before they arrived. She also knows postpartum from the inside: the fog, the identity rupture, the way the love and the loss can coexist without anyone telling you that's allowed. She is not here to tell you that motherhood is beautiful. She knows it is. She's also here for the part that nobody talks about at the baby shower. Priya does not have a professional background in counseling — she has a lived background in navigating three cultures, a demanding career in public health, and the particular education of being the first person in her family to raise children far from where she grew up. She was trained by Hearth to hold space, notice patterns, and know her scope. She will stay with you in the uncertain middle.",
    whatPeopleBring: [
      "Postpartum identity loss — who you were before, and who you are now, and the gap between",
      "The specific anxiety of raising bicultural children without a manual for either culture",
      "Mother-in-law dynamics in the context of new parenthood",
      "The guilt of not being the mother you planned to be",
      "New parenthood as a couple — what it does to the relationship",
    ],
    notesFromKeeper:
      "Nobody told me that becoming a mother would feel like losing myself first. I thought that was a failure. I now know it is a nearly universal experience that nobody talks about honestly. I will talk about it honestly with you.",
    notForNote:
      "Priya is a peer supporter, not a licensed therapist. For postpartum depression, anxiety, or any clinical concern, please use The Bridge — Priya will make the connection herself and stay with you through both.",
  },
  {
    slug: "hassan-a",
    name: "Hassan A.",
    tagline: "Holds faith and doubt without forcing resolution.",
    city: "Islamabad → Chicago",
    languages: ["Urdu", "English", "Arabic"],
    themes: ["Grief", "Faith and identity", "First-year-after", "New immigrant"],
    timezone: "CST (Chicago)",
    availability: "Monday, Wednesday, Thursday",
    fullBio:
      "Hassan trained as an Islamic counselor in Islamabad and spent several years doing community counseling in mosques and community centers before emigrating to Chicago. He has worked with people carrying the intersection of faith and personal crisis — the grief that happens when a death makes you question everything, the identity fracture when your faith tradition and your lived experience stop fitting together, the specific weight of the first years in a new country when everything familiar is gone. Hassan became a Keeper because the work he was already doing needed a better infrastructure. He works from a deeply respectful relationship with Islam and a genuine openness to doubt, to questioning, and to sitting with people who are not sure what they believe anymore. He will not resolve your theology for you. He will not push you toward or away from faith. He will sit with you in the honest middle of it. He is also one of the Keepers most experienced with grief — particularly the grief of the first year after a major loss, and the grief that arrives out of order.",
    whatPeopleBring: [
      "The first year after a loss — the one nobody designs grief support for",
      "Faith and doubt existing at the same time, without a safe space to admit that",
      "The identity weight of new immigration — the loneliness, the displacement, the grief of what was left",
      "Grief for parents who were also the bridge to a whole culture now gone",
      "The specific experience of being Muslim in America — the navigation, the code-switching, the cost",
    ],
    notesFromKeeper:
      "I have sat with people who were certain in their faith and people who were not certain of anything. I have never found those conversations to be very different. Everyone is trying to find solid ground. I know how to sit in uncertain ground with you.",
    notForNote:
      "Hassan is a peer supporter with Islamic counseling training. He is not a licensed therapist. For clinical grief, depression, or crisis, The Bridge provides licensed clinicians — including those with Islamic cultural competency. Hassan will make the introduction and stay in your corner throughout.",
  },
];

export function generateStaticParams() {
  return KEEPERS.map((k) => ({ slug: k.slug }));
}

export default function KeeperProfile({
  params,
}: {
  params: { slug: string };
}) {
  const keeper = KEEPERS.find((k) => k.slug === params.slug);
  if (!keeper) notFound();

  return (
    <>
      <SharedNav />

      {/* HERO */}
      <section
        style={{
          padding: "80px 0 60px",
          borderBottom: "1px solid var(--rule-2)",
        }}
      >
        <div className="wrap">
          <Link
            href="/keepers"
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ink-3)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 40,
            }}
          >
            &larr; All Keepers
          </Link>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "start",
            }}
          >
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}>
                <span className="dot" />
                Keeper Profile
              </div>
              <h1
                style={{
                  fontSize: "clamp(48px, 6vw, 88px)",
                  marginBottom: 18,
                }}
              >
                {keeper.name}
              </h1>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "var(--ink-2)",
                  lineHeight: 1.45,
                  maxWidth: "44ch",
                  marginBottom: 32,
                }}
              >
                &ldquo;{keeper.tagline}&rdquo;
              </p>
              <a href="/#cta" className="btn btn-primary btn-lg">
                Pull up a chair with {keeper.name.split(" ")[0]}{" "}
                <span className="arr">&rarr;</span>
              </a>
            </div>

            <div>
              {/* Keeper card visual */}
              <div
                style={{
                  background: "var(--paper-2)",
                  border: "1px solid var(--rule)",
                  borderRadius: 8,
                  padding: 32,
                }}
              >
                <div
                  style={{
                    aspectRatio: "4/3",
                    background:
                      "linear-gradient(135deg, var(--paper-3) 0%, var(--paper-2) 100%)",
                    borderRadius: 6,
                    border: "1px solid var(--rule)",
                    marginBottom: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(ellipse at 60% 20%, rgba(232,168,69,0.2), transparent 60%)",
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 80,
                      fontWeight: 300,
                      color: "var(--ember)",
                      opacity: 0.3,
                      lineHeight: 1,
                    }}
                  >
                    {keeper.name.charAt(0)}
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    fontSize: 13,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 10,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--ink-3)",
                        marginBottom: 6,
                      }}
                    >
                      Location
                    </div>
                    <div style={{ color: "var(--ink-2)" }}>{keeper.city}</div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 10,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--ink-3)",
                        marginBottom: 6,
                      }}
                    >
                      Timezone
                    </div>
                    <div style={{ color: "var(--ink-2)" }}>{keeper.timezone}</div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 10,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--ink-3)",
                        marginBottom: 6,
                      }}
                    >
                      Languages
                    </div>
                    <div style={{ color: "var(--ink-2)" }}>
                      {keeper.languages.join(", ")}
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 10,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--ink-3)",
                        marginBottom: 6,
                      }}
                    >
                      Availability
                    </div>
                    <div style={{ color: "var(--ink-2)" }}>{keeper.availability}</div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 20,
                    paddingTop: 16,
                    borderTop: "1px solid var(--rule-2)",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                  }}
                >
                  {keeper.themes.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL BIO */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 64,
            }}
          >
            <div className="eyebrow" style={{ paddingTop: 6 }}>
              <span className="dot" />
              About {keeper.name.split(" ")[0]}
            </div>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--ink-2)",
                maxWidth: "62ch",
              }}
            >
              {keeper.fullBio}
            </p>
          </div>
        </div>
      </section>

      {/* WHAT PEOPLE BRING */}
      <section
        style={{
          padding: "80px 0",
          background: "var(--paper-2)",
          borderBottom: "1px solid var(--rule-2)",
        }}
      >
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 64,
            }}
          >
            <div className="eyebrow" style={{ paddingTop: 6 }}>
              <span className="dot" />
              What people sit with {keeper.name.split(" ")[0]} about
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gap: 0,
              }}
            >
              {keeper.whatPeopleBring.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "24px 1fr",
                    gap: 18,
                    padding: "20px 0",
                    borderTop: "1px solid var(--rule-2)",
                    alignItems: "start",
                    fontSize: 17,
                    lineHeight: 1.55,
                    color: "var(--ink-2)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      color: "var(--ember)",
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
      </section>

      {/* NOTE FROM KEEPER */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 64,
            }}
          >
            <div className="eyebrow" style={{ paddingTop: 6 }}>
              <span className="dot" />
              A note from {keeper.name.split(" ")[0]}
            </div>
            <blockquote
              style={{
                margin: 0,
                padding: "0 0 0 32px",
                borderLeft: "2px solid var(--ember)",
                fontFamily: "var(--serif)",
                fontSize: "clamp(20px, 2vw, 26px)",
                lineHeight: 1.5,
                fontWeight: 360,
                color: "var(--ink-2)",
                fontStyle: "italic",
              }}
            >
              &ldquo;{keeper.notesFromKeeper}&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* SCOPE NOTE */}
      <section
        style={{
          padding: "60px 0",
          background: "var(--paper-2)",
          borderBottom: "1px solid var(--rule-2)",
        }}
      >
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 64,
            }}
          >
            <div className="eyebrow" style={{ paddingTop: 6 }}>
              <span className="dot" />
              What {keeper.name.split(" ")[0]} is not for
            </div>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--ink-2)",
                maxWidth: "58ch",
              }}
            >
              {keeper.notForNote}{" "}
              <Link
                href="/bridge"
                style={{ color: "var(--ember)", textDecoration: "underline" }}
              >
                Learn about The Bridge &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bigcta" style={{ padding: "100px 0", textAlign: "center" }}>
        <div className="wrap">
          <h2 style={{ marginTop: 18 }}>
            Ready to sit with {keeper.name.split(" ")[0]}?
          </h2>
          <div className="cta-row" style={{ marginTop: 40 }}>
            <a href="/#cta" className="btn btn-primary btn-lg">
              Pull up a chair with {keeper.name.split(" ")[0]}{" "}
              <span className="arr">&rarr;</span>
            </a>
            <Link href="/keepers" className="btn btn-ghost btn-lg">
              Browse all Keepers
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
