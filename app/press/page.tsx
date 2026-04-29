import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";
import Link from "next/link";

export const metadata = {
  title: "Press · Hearth",
  description:
    "For journalists, podcasters, and writers covering peer support, diaspora mental health, and the new emotional infrastructure.",
};

export default function PressPage() {
  return (
    <>
      <SharedNav />

      <section className="hero" style={{ paddingBottom: 80 }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            Press
          </div>
          <h1 style={{ marginTop: 24, maxWidth: "16ch" }}>
            For the people <span className="ember-word">writing about us.</span>
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
            Hearth is new. We&rsquo;d rather be quoted accurately than quoted
            often. Here&rsquo;s what we&rsquo;re comfortable saying about
            ourselves &mdash; and what we&rsquo;re not.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
            }}
            className="press-grid"
          >
            <div>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", marginBottom: 18 }}>
                What Hearth is
              </h2>
              <p style={{ color: "var(--ink-2)", lineHeight: 1.65, fontSize: 16 }}>
                A peer-support membership. Members are paired with a Keeper
                &mdash; a trained, paid companion (not a licensed clinician)
                &mdash; for biweekly or weekly Sits, an asynchronous Long Talk
                thread, and group Circles. Keepers come from South Asia and
                hold the cultural fluency that diaspora life requires.
              </p>
            </div>
            <div>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", marginBottom: 18 }}>
                What Hearth isn&rsquo;t
              </h2>
              <p style={{ color: "var(--ink-2)", lineHeight: 1.65, fontSize: 16 }}>
                Therapy. A chatbot. A crisis service. We do not diagnose,
                treat, prescribe, or provide clinical care. When clinical care
                is the right tool, our Keepers refer members to The Bridge,
                our partner network of US-licensed therapists.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div
            style={{
              borderTop: "1px solid var(--rule)",
              paddingTop: 48,
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 48,
              alignItems: "start",
            }}
            className="press-row"
          >
            <h3 style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-3)" }}>
              The numbers
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <FactRow label="Pricing" value="$39/month (Hearthside, biweekly Sits) · $99/month (Hearth Deep, weekly Sits)" />
              <FactRow label="Keeper training" value="120-hour pre-launch program · ongoing supervision · cultural fluency review" />
              <FactRow label="Match time" value="Within 72 hours of intake. Hand-matched, not algorithmic." />
              <FactRow label="Cancellation" value="One click, no exit interview. FTC Click-to-Cancel compliant. Access continues through the end of the billing period you've already paid for." />
              <FactRow label="Where Keepers are based" value="Primarily South Asia. They work evening hours to match US and Canadian time zones." />
              <FactRow label="Where members live" value="Diaspora communities in the US and Canada at launch. UK, Australia, and Gulf coming." />
              <FactRow label="Founded" value="2026" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div
            style={{
              borderTop: "1px solid var(--rule)",
              paddingTop: 48,
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 48,
              alignItems: "start",
            }}
            className="press-row"
          >
            <h3 style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-3)" }}>
              The story
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <p style={{ color: "var(--ink-2)", lineHeight: 1.7, fontSize: 16 }}>
                Most diaspora people we know don&rsquo;t need a clinician.
                They need an elder. The auntie who saw the divorce coming. The
                cousin who quit the job their parents wanted. The neighbour
                who&rsquo;d been through it.
              </p>
              <p style={{ color: "var(--ink-2)", lineHeight: 1.7, fontSize: 16 }}>
                That elder is missing for a generation that left, or whose
                parents left, or whose home village no longer holds the people
                who knew. Therapy fills part of that gap. A friend fills part
                of it. Hearth fills the part nobody else does.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div
            style={{
              borderTop: "1px solid var(--rule)",
              paddingTop: 48,
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 48,
              alignItems: "start",
            }}
            className="press-row"
          >
            <h3 style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-3)" }}>
              Coverage
            </h3>
            <div>
              <p style={{ color: "var(--ink-3)", fontStyle: "italic", lineHeight: 1.6, fontSize: 16 }}>
                Hearth is pre-launch. Coverage will live here as it lands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div
            style={{
              borderTop: "1px solid var(--rule)",
              paddingTop: 48,
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 48,
              alignItems: "start",
            }}
            className="press-row"
          >
            <h3 style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-3)" }}>
              For interviews
            </h3>
            <div>
              <p style={{ color: "var(--ink-2)", lineHeight: 1.7, fontSize: 16 }}>
                Email{" "}
                <a
                  href="mailto:press@hearth.com"
                  style={{ color: "var(--ember)", textDecoration: "underline" }}
                >
                  press@hearth.com
                </a>
                . Please include your outlet, your deadline, and a sentence on
                what the piece is about. We respond within two business days.
              </p>
              <p style={{ marginTop: 14, color: "var(--ink-3)", fontSize: 14, lineHeight: 1.6 }}>
                We don&rsquo;t share member stories without explicit consent.
                Real Sits and Long Talk content stay between members and
                Keepers, always.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 80 }}>
        <div className="wrap">
          <div
            style={{
              background: "var(--paper-2)",
              borderRadius: 12,
              padding: "48px 40px",
              textAlign: "center",
              border: "1px solid var(--rule-2)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: 22,
                lineHeight: 1.4,
                color: "var(--ink)",
                margin: 0,
                maxWidth: "44ch",
                marginInline: "auto",
              }}
            >
              You&rsquo;re welcome to read more from us, in our own words.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 28, flexWrap: "wrap" }}>
              <Link href="/about" className="btn btn-primary">
                Our story
              </Link>
              <Link href="/embers" className="btn btn-ghost">
                Read Embers
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          .press-grid { grid-template-columns: 1fr !important; }
          .press-row { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <SharedFooter />
    </>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 18, alignItems: "baseline", borderBottom: "1px solid var(--rule-2)", paddingBottom: 14 }}>
      <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)" }}>
        {label}
      </span>
      <span style={{ fontFamily: "var(--serif)", fontSize: 16, lineHeight: 1.5, color: "var(--ink)" }}>
        {value}
      </span>
    </div>
  );
}
