import Link from "next/link";

/**
 * The one place competitor prices live. Every page that quotes online therapy
 * subscriptions, private therapy or 7 Cups renders this rather than restating
 * the numbers, so the figures cannot drift apart between pages.
 *
 * Rows describe categories, not brands. Named providers appear only as the
 * source of a figure, in the footnote, so a price claim always has a citation
 * without the page reading as a comparison against one company.
 *
 * Re-verify on a quarterly cadence and bump FIGURES_AS_OF. A stale price on a
 * comparison page is a legal exposure, not a typo.
 */

export const FIGURES_AS_OF = "August 2026";

type Source = { label: string; href: string; external?: boolean };

type Row = {
  option: string;
  perMonth: string;
  whatYouGet: string;
  clinical: "Yes" | "No";
  sources: Source[];
  hearth?: boolean;
};

const ROWS: Row[] = [
  {
    option: "Hearth, Hearthside",
    perMonth: "$39",
    whatYouGet:
      "One Keeper, matched by hand and kept. A Sit every two weeks, unlimited Long Talk, a written note every Friday.",
    clinical: "No",
    sources: [{ label: "Hearth pricing", href: "/pricing" }],
    hearth: true,
  },
  {
    option: "Hearth, Hearth Deep",
    perMonth: "$99",
    whatYouGet:
      "Everything in Hearthside, with a Sit every week and priority replies on the Long Talk.",
    clinical: "No",
    sources: [{ label: "Hearth pricing", href: "/pricing" }],
    hearth: true,
  },
  {
    option: "Online therapy subscription",
    perMonth: "$260 to $520",
    whatYouGet:
      "$60 to $120 a week, billed monthly or every four weeks. A licensed therapist, usually one live session a week plus messaging. The therapist can change. Some platforms accept US insurance.",
    clinical: "Yes",
    sources: [
      {
        label: "BetterHelp FAQ",
        href: "https://www.betterhelp.com/faq/",
        external: true,
      },
      {
        label: "Talkspace pricing",
        href: "https://www.talkspace.com/pricing",
        external: true,
      },
    ],
  },
  {
    option: "Private therapy, weekly",
    perMonth: "About $715",
    whatYouGet:
      "At the US average of $165 a session. $430 to $1,080 across the usual $100 to $250 range. Licensed clinician, in person or online.",
    clinical: "Yes",
    sources: [{ label: "Our cost guide", href: "/learn/how-much-does-therapy-cost" }],
  },
  {
    option: "Private therapy, every two weeks",
    perMonth: "About $360",
    whatYouGet: "Same clinician, half the frequency. $215 to $540 across the usual range.",
    clinical: "Yes",
    sources: [{ label: "Our cost guide", href: "/learn/how-much-does-therapy-cost" }],
  },
  {
    option: "Free listener services",
    perMonth: "Free",
    whatYouGet:
      "Trained volunteer listeners, available now, a different person each time. Not clinicians. Some offer a separate paid therapy tier.",
    clinical: "No",
    sources: [{ label: "7 Cups", href: "https://www.7cups.com/", external: true }],
  },
];

const th: React.CSSProperties = {
  textAlign: "left",
  padding: "12px 14px",
  borderBottom: "1px solid var(--rule)",
  fontFamily: "var(--mono)",
  fontSize: 11,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--ink-3)",
  fontWeight: 500,
  whiteSpace: "nowrap",
};

const td: React.CSSProperties = {
  padding: "14px",
  borderBottom: "1px solid var(--rule-2)",
  color: "var(--ink-2)",
  verticalAlign: "top",
};

function SourceLink({ s }: { s: Source }) {
  return s.external ? (
    <a href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: "var(--ember)" }}>
      {s.label}
    </a>
  ) : (
    <Link href={s.href} style={{ color: "var(--ember)" }}>
      {s.label}
    </Link>
  );
}

type Props = {
  heading?: string;
  intro?: string;
};

export default function CostComparison({
  heading = "What a month costs, side by side.",
  intro = "Hearth is on this table, and it is not the cheapest thing on it. Read the clinical-care column before the price column: the cheap rows and the clinical rows are different products.",
}: Props) {
  return (
    <section style={{ padding: "80px 0", borderBottom: "1px solid var(--rule-2)" }}>
      <div className="wrap">
        <h2 style={{ maxWidth: "22ch", marginBottom: 16 }}>{heading}</h2>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.7,
            color: "var(--ink-2)",
            maxWidth: "64ch",
            marginBottom: 32,
          }}
        >
          {intro}
        </p>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: 15,
              lineHeight: 1.55,
              minWidth: 760,
            }}
          >
            <thead>
              <tr>
                <th style={th}>Option</th>
                <th style={th}>Per month</th>
                <th style={th}>What you get</th>
                <th style={th}>Clinical care?</th>
                <th style={th}>Source</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr
                  key={r.option}
                  style={r.hearth ? { background: "var(--paper-2)" } : undefined}
                >
                  <td style={{ ...td, color: "var(--ink)", fontWeight: 500 }}>
                    {r.option}
                  </td>
                  <td style={{ ...td, whiteSpace: "nowrap", color: "var(--ink)" }}>
                    {r.perMonth}
                  </td>
                  <td style={td}>{r.whatYouGet}</td>
                  <td
                    style={{
                      ...td,
                      color: r.clinical === "Yes" ? "var(--ink)" : "var(--ember)",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {r.clinical}
                  </td>
                  <td style={{ ...td, whiteSpace: "nowrap" }}>
                    {r.sources.map((s, i) => (
                      <span key={s.href}>
                        {i > 0 ? ", " : ""}
                        <SourceLink s={s} />
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p
          style={{
            fontSize: 15.5,
            lineHeight: 1.7,
            color: "var(--ink-3)",
            marginTop: 20,
            maxWidth: "68ch",
          }}
        >
          Figures as of {FIGURES_AS_OF}. Subscription prices change and vary by
          location and promotion; the sources are each provider&rsquo;s own
          pricing page, checked on that date. Hearth is peer support, not
          therapy. Keepers do not diagnose, treat or prescribe, and a cheaper
          non-clinical service does not meet a clinical need.
        </p>
      </div>
    </section>
  );
}
