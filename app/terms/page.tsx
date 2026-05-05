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
            Last updated: May 2026 &middot; Governing law: Delaware, USA
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
                After cancellation, your access continues through the end of the current billing period you have already paid for. You will not be charged again. Annual memberships are paid in full upfront, and you retain full access through the end of the term you have paid for.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(22px, 2vw, 30px)", marginBottom: 18 }}>
                Billing &amp; payments
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)", marginBottom: 16 }}>
                A valid payment method is required to begin a Hearth membership. Monthly plans are billed on the same date each month, starting the day you sign up. Annual plans are billed in full upfront at a discounted rate. Receipts are provided for every charge.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
                All charges are final once a billing period has begun. Cancellation stops future charges but does not reverse charges for billing periods that have already started or that you have already used. If you believe a charge was made in error, please email{" "}
                <a href="mailto:hello@dearhearth.com" style={{ color: "var(--ember)", textDecoration: "underline" }}>
                  hello@dearhearth.com
                </a>
                {" "}within 30 days and we will review your case.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "clamp(22px, 2vw, 30px)", marginBottom: 18 }}>
                Keeper conduct
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
                Keepers are independent contractors trained by Hearth. They are bound by Hearth&rsquo;s Keeper Code of Conduct, which prohibits solicitation of members outside the platform, disclosure of member information, provision of clinical advice, and any conduct that violates member trust. Complaints about Keeper conduct should be directed to{" "}
                <a href="mailto:hello@dearhearth.com" style={{ color: "var(--ember)", textDecoration: "underline" }}>
                  hello@dearhearth.com
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
                Service availability &amp; warranties
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
                Hearth is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; We work hard to keep the platform running smoothly, but we do not guarantee uninterrupted access, error-free operation, or that the service will meet every member&rsquo;s specific needs. We make no warranty that any conversation with a Keeper will produce a specific outcome. Hearth is companionship, not a guaranteed result.
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
                <a href="mailto:legal@dearhearth.com" style={{ color: "var(--ember)", textDecoration: "underline" }}>
                  legal@dearhearth.com
                </a>
                . General questions:{" "}
                <a href="mailto:hello@dearhearth.com" style={{ color: "var(--ember)", textDecoration: "underline" }}>
                  hello@dearhearth.com
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
