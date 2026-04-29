import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

export const metadata = {
  title: "Terms of Service · Hearth",
  description:
    "Hearth is peer support, not therapy. Plain-language terms of service.",
};

export default function TermsPage() {
  return (
    <>
      <SharedNav />

      <section style={{ padding: "80px 0 40px", borderBottom: "1px solid var(--rule-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            Terms of Service
          </div>
          <h1 style={{ marginTop: 24, maxWidth: "18ch", fontSize: "clamp(40px, 5vw, 72px)" }}>
            Terms of service, plainly stated.
          </h1>
          <p
            style={{
              marginTop: 18,
              color: "var(--ink-3)",
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Last updated: April 2026 &middot; Governing law: Delaware, USA
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 0 100px" }}>
        <div className="wrap">
          <div style={{ maxWidth: 680, display: "grid", gap: 56 }}>

            <div
              style={{
                padding: "24px 28px",
                background: "#FFF7EE",
                border: "1px solid rgba(156,42,26,0.2)",
                borderRadius: 6,
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "var(--ink-2)",
                  fontWeight: 500,
                }}
              >
                <strong style={{ color: "var(--ember)" }}>The most important thing:</strong>{" "}
                Hearth is peer support, not therapy. Nothing on this platform
                constitutes medical advice, mental health treatment, or a
                doctor-patient relationship. If you are in crisis, please call
                988 (US) or 1-866-585-0445 (Canada).
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(22px, 2vw, 30px)", marginBottom: 18 }}>
                What Hearth is (and isn&rsquo;t)
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)", marginBottom: 16 }}>
                Hearth provides peer support services through trained, paid companions called Keepers. Keepers are not licensed therapists, counselors, social workers, or medical professionals. The service Hearth provides is peer support — companionship, listening, and pattern-noticing — and nothing more.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
                No diagnosis is made through Hearth. No clinical treatment is provided. No prescription or medical advice is given. There is no doctor-patient relationship, therapist-client relationship, or any other clinical relationship formed through the use of Hearth.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(22px, 2vw, 30px)", marginBottom: 18 }}>
                Your agreement
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)", marginBottom: 16 }}>
                By creating a Hearth account, you confirm that you understand the distinction between peer support and clinical therapy, that you are using Hearth as a supplement to (or instead of) clinical care based on your own judgment, and that Hearth has not made any representations about replacing professional mental health treatment.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
                You also confirm you are 18 years of age or older.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(22px, 2vw, 30px)", marginBottom: 18 }}>
                Cancellation
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)", marginBottom: 16 }}>
                You may cancel your membership at any time. Cancellation is available in one click from your account settings, with no phone call, no exit interview, and no dark patterns required. This is compliant with the FTC&rsquo;s Click-to-Cancel rule.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
                After cancellation, your access continues through the end of the current billing period. You will not be charged again. Annual memberships that are cancelled will receive a pro-rated refund of unused months.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(22px, 2vw, 30px)", marginBottom: 18 }}>
                Refund policy
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)", marginBottom: 16 }}>
                Hearth offers a 14-day money-back guarantee from the date of your first Sit. If the service doesn&rsquo;t feel right, email us at{" "}
                <a href="mailto:hello@hearth.com" style={{ color: "var(--ember)", textDecoration: "underline" }}>
                  hello@hearth.com
                </a>{" "}
                and we will issue a full refund with no questions asked and no exit interview.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
                After the 14-day period, refunds are available for unused months on annual plans. Monthly plan charges are not refunded after the billing date.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(22px, 2vw, 30px)", marginBottom: 18 }}>
                Keeper conduct
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
                Keepers are independent contractors trained by Hearth. They are bound by Hearth&rsquo;s Keeper Code of Conduct, which prohibits solicitation of members outside the platform, disclosure of member information, provision of clinical advice, and any conduct that violates member trust. Complaints about Keeper conduct should be directed to{" "}
                <a href="mailto:hello@hearth.com" style={{ color: "var(--ember)", textDecoration: "underline" }}>
                  hello@hearth.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(22px, 2vw, 30px)", marginBottom: 18 }}>
                Limitation of liability
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
                Hearth&rsquo;s liability is limited to the fees paid by the member in the 12 months preceding the claim. Hearth is not liable for indirect, incidental, or consequential damages. Nothing in these terms limits liability for gross negligence or intentional misconduct.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(22px, 2vw, 30px)", marginBottom: 18 }}>
                Governing law
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
                These terms are governed by the laws of the State of Delaware, USA, without regard to conflict of law principles. Disputes will be resolved in Delaware courts unless you are a consumer in a jurisdiction with mandatory local law protections, in which case those protections apply.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(22px, 2vw, 30px)", marginBottom: 18 }}>
                Changes to these terms
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
                We will notify you by email at least 30 days before any material changes to these terms take effect. Continued use of Hearth after that period constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(22px, 2vw, 30px)", marginBottom: 18 }}>
                Questions
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
                Legal questions: email{" "}
                <a href="mailto:legal@hearth.com" style={{ color: "var(--ember)", textDecoration: "underline" }}>
                  legal@hearth.com
                </a>
                . General questions:{" "}
                <a href="mailto:hello@hearth.com" style={{ color: "var(--ember)", textDecoration: "underline" }}>
                  hello@hearth.com
                </a>
                .
              </p>
            </div>

          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
