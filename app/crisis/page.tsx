import Link from "next/link";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

export const metadata = {
  title: "Crisis Resources · Hearth",
  description:
    "If you are in crisis, please reach out now. US: 988. Canada: 1-866-585-0445.",
};

export default function CrisisPage() {
  return (
    <>
      <SharedNav />

      <section
        style={{
          padding: "80px 0 120px",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="wrap" style={{ maxWidth: 680 }}>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--ember)",
              marginBottom: 40,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--ember)",
              }}
            />
            Crisis resources
          </div>

          <h1
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 300,
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 40,
            }}
          >
            If you are in crisis, please reach out now.
          </h1>

          <p
            style={{
              fontSize: 20,
              lineHeight: 1.65,
              color: "var(--ink-2)",
              marginBottom: 56,
              maxWidth: "50ch",
            }}
          >
            These are real people, available right now, trained for exactly
            this moment.
          </p>

          {/* Crisis lines */}
          <div
            style={{
              display: "grid",
              gap: 2,
              marginBottom: 64,
            }}
          >
            {[
              {
                country: "United States",
                service: "988 Suicide & Crisis Lifeline",
                contact: "Call or text 988",
                detail: "24/7, free, confidential",
                primary: true,
              },
              {
                country: "Canada",
                service: "Crisis Services Canada",
                contact: "1-866-585-0445",
                detail: "24/7, free, confidential",
                primary: true,
              },
              {
                country: "Pakistan",
                service: "Umang",
                contact: "0311-7786264",
                detail: "Mon–Sat, 9 AM – 5 PM",
                primary: false,
              },
              {
                country: "United Kingdom",
                service: "Samaritans",
                contact: "116 123",
                detail: "24/7, free, confidential",
                primary: false,
              },
            ].map((line) => (
              <div
                key={line.country}
                style={{
                  padding: "28px 32px",
                  background: line.primary ? "var(--ink)" : "var(--paper-2)",
                  color: line.primary ? "var(--paper)" : "var(--ink)",
                  borderRadius: 6,
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  alignItems: "center",
                  gap: 24,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: line.primary ? "#C9B894" : "var(--ink-3)",
                      marginBottom: 6,
                    }}
                  >
                    {line.country}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 20,
                      fontWeight: 380,
                      lineHeight: 1.2,
                      color: line.primary ? "var(--paper)" : "var(--ink)",
                    }}
                  >
                    {line.service}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: line.primary ? "#D8C8AA" : "var(--ink-3)",
                      marginTop: 4,
                    }}
                  >
                    {line.detail}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: line.primary ? 22 : 18,
                    fontWeight: 500,
                    color: line.primary ? "var(--paper)" : "var(--ink)",
                    letterSpacing: "0.02em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {line.contact}
                </div>
              </div>
            ))}
          </div>

          {/* Emergency note */}
          <div
            style={{
              padding: "24px 28px",
              border: "1px solid var(--rule)",
              borderRadius: 6,
              background: "var(--paper-2)",
              marginBottom: 48,
            }}
          >
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--ink-2)",
              }}
            >
              <strong style={{ color: "var(--ink)" }}>
                If you are in immediate danger:
              </strong>{" "}
              Call 911 (US and Canada) or your local emergency number and go
              to your nearest emergency room.
            </p>
          </div>

          {/* Hearth disclaimer */}
          <div
            style={{
              padding: "24px 0",
              borderTop: "1px solid var(--rule-2)",
              marginBottom: 48,
            }}
          >
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.65,
                color: "var(--ink-3)",
                fontFamily: "var(--mono)",
                letterSpacing: "0.01em",
              }}
            >
              Hearth is not a crisis service. Our Keepers are not trained for
              emergency response. Hearth is peer support for the recurring
              weight of a life — not for acute crisis. If you are in danger,
              please use the lines above.
            </p>
          </div>

          {/* Non-crisis CTA */}
          <div
            style={{
              borderTop: "1px solid var(--rule-2)",
              paddingTop: 40,
            }}
          >
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: 20,
                lineHeight: 1.5,
                color: "var(--ink-2)",
                fontStyle: "italic",
                marginBottom: 20,
              }}
            >
              If you are not in crisis but want to talk to someone —
              Hearth is here for the long talks.
            </p>
            <Link href="/#cta" className="btn btn-ghost">
              Pull up a chair <span className="arr">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
