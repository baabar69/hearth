import Link from "next/link";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";
import { whopSdk } from "../lib/whop-sdk";

export const metadata = {
  title: "Welcome · Hearth",
  description:
    "Your payment was received. Your Keeper is being matched. Expect an email within 48 hours.",
};

export const dynamic = "force-dynamic";

type WhopReceiptData = {
  productTitle: string | null;
  amount: number | null;
  currency: string | null;
  customerEmail: string | null;
  paymentId: string;
  renewalDate: Date | null;
};

async function fetchReceipt(paymentId: string): Promise<WhopReceiptData | null> {
  try {
    const payment = await whopSdk.payments.retrieve(paymentId);

    let renewalDate: Date | null = null;
    if (payment.membership?.id) {
      try {
        const membership = await whopSdk.memberships.retrieve(
          payment.membership.id,
        );
        if (membership.renewal_period_end) {
          // Whop returns Unix timestamp in seconds.
          renewalDate = new Date(
            Number(membership.renewal_period_end) * 1000,
          );
        }
      } catch {
        // Membership lookup is non-critical; carry on.
      }
    }

    return {
      productTitle: payment.product?.title ?? null,
      amount: payment.subtotal,
      currency: payment.currency ?? null,
      customerEmail: payment.user?.email ?? null,
      paymentId: payment.id,
      renewalDate,
    };
  } catch {
    return null;
  }
}

function formatPrice(amount: number | null, currency: string | null): string {
  if (amount === null || currency === null) return "";
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(amount);
  } catch {
    return `${amount} ${currency.toUpperCase()}`;
  }
}

function formatDate(date: Date | null): string {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function WelcomePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const rawStatus =
    typeof params.status === "string"
      ? params.status
      : typeof params.checkout_status === "string"
        ? params.checkout_status
        : null;
  const paymentId =
    typeof params.payment_id === "string" ? params.payment_id : null;

  const isError =
    rawStatus === "error" ||
    rawStatus === "failed" ||
    rawStatus === "cancelled";

  const receipt = !isError && paymentId ? await fetchReceipt(paymentId) : null;

  return (
    <>
      <SharedNav />

      <main
        style={{
          minHeight: "calc(100vh - 80px)",
          background: "var(--paper)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 24px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 540,
            background: "white",
            border: "1px solid var(--rule)",
            borderRadius: 12,
            padding: "56px 44px",
            boxShadow: "0 30px 60px -40px rgba(26,23,20,0.12)",
            textAlign: "center",
          }}
        >
          {isError ? (
            <ErrorState />
          ) : (
            <SuccessState receipt={receipt} paymentId={paymentId} />
          )}
        </div>
      </main>

      <SharedFooter />
    </>
  );
}

function ErrorState() {
  return (
    <>
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#FDF3F0",
          border: "2px solid var(--ember)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          margin: "0 auto 24px",
        }}
      >
        &#x2715;&#xfe0e;
      </div>
      <h1
        style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(28px, 4vw, 36px)",
          lineHeight: 1.2,
          color: "var(--ink)",
          marginBottom: 16,
          fontWeight: 300,
        }}
      >
        Payment didn&rsquo;t go through.
      </h1>
      <p
        style={{
          color: "var(--ink-2)",
          fontSize: 16,
          lineHeight: 1.65,
          marginBottom: 32,
          maxWidth: "40ch",
          margin: "0 auto 32px",
        }}
      >
        No charge was made. If you&rsquo;d like to try again or need help,
        we&rsquo;re here.
      </p>
      <Link href="/pricing" className="btn btn-primary">
        Try again <span className="arr">&rarr;</span>
      </Link>
    </>
  );
}

function SuccessState({
  receipt,
  paymentId,
}: {
  receipt: WhopReceiptData | null;
  paymentId: string | null;
}) {
  const labelStyle = {
    fontFamily: "var(--mono)" as const,
    fontSize: 10,
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    color: "var(--ink-3)" as const,
  };
  const valueStyle = {
    fontFamily: "var(--serif)" as const,
    fontSize: 16,
    color: "var(--ink)" as const,
    marginTop: 4,
  };

  return (
    <>
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: "#FDF3F0",
          border: "2px solid var(--ember)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          margin: "0 auto 28px",
          color: "var(--ember)",
        }}
      >
        &#x2764;&#xfe0e;
      </div>

      <p
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--ember)",
          marginBottom: 14,
        }}
      >
        Payment received
      </p>

      <h1
        style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(28px, 4vw, 38px)",
          lineHeight: 1.2,
          color: "var(--ink)",
          marginBottom: 18,
          fontWeight: 300,
          maxWidth: "20ch",
          margin: "0 auto 18px",
        }}
      >
        Your Keeper is being matched.
      </h1>

      <p
        style={{
          color: "var(--ink-2)",
          fontSize: 16,
          lineHeight: 1.65,
          marginBottom: 32,
          maxWidth: "42ch",
          margin: "0 auto 32px",
        }}
      >
        A receipt has been sent to your inbox
        {receipt?.customerEmail ? (
          <>
            {" "}
            at <strong>{receipt.customerEmail}</strong>
          </>
        ) : null}
        . Expect an introduction from your Keeper within 48 hours &mdash; we
        pair by hand, not by algorithm.
      </p>

      {receipt && (
        <div
          style={{
            textAlign: "left",
            background: "var(--paper)",
            border: "1px solid var(--rule-2)",
            borderRadius: 10,
            padding: "20px 24px",
            marginBottom: 28,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px 24px",
          }}
        >
          {receipt.productTitle && (
            <div>
              <div style={labelStyle}>Plan</div>
              <div style={valueStyle}>{receipt.productTitle}</div>
            </div>
          )}
          {receipt.amount !== null && (
            <div>
              <div style={labelStyle}>Paid today</div>
              <div style={valueStyle}>
                {formatPrice(receipt.amount, receipt.currency)}
              </div>
            </div>
          )}
          {receipt.renewalDate && (
            <div style={{ gridColumn: "1 / -1" }}>
              <div style={labelStyle}>Next renewal</div>
              <div style={valueStyle}>{formatDate(receipt.renewalDate)}</div>
            </div>
          )}
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <Link href="/embers" className="btn btn-primary">
          While you wait &mdash; read an Ember{" "}
          <span className="arr">&rarr;</span>
        </Link>
        <a
          href="https://whop.com/@me/settings/memberships/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--mono)",
            fontSize: 12,
            letterSpacing: "0.06em",
            color: "var(--ink-2)",
            textDecoration: "underline",
            marginTop: 4,
          }}
        >
          Manage subscription &rarr;
        </a>
      </div>

      {paymentId && (
        <p
          style={{
            marginTop: 36,
            paddingTop: 24,
            borderTop: "1px solid var(--rule-2)",
            fontFamily: "var(--mono)",
            fontSize: 11,
            letterSpacing: "0.06em",
            color: "var(--ink-3)",
            lineHeight: 1.6,
          }}
        >
          Receipt: {paymentId}
        </p>
      )}
    </>
  );
}
