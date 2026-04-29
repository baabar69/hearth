"use client";

import { useState } from "react";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

const GIFT_OPTIONS = [
  { months: 1, price: 39, label: "1 month" },
  { months: 3, price: 99, label: "3 months" },
  { months: 6, price: 189, label: "6 months" },
  { months: 12, price: 350, label: "12 months" },
];

const TEMPLATES = [
  {
    label: "For a parent",
    text: "I've been thinking about how much you carry, and how rarely you let anyone help. I wanted to give you something that holds you — a real person, not an app, who will listen the way you deserve to be listened to. No pressure to use it right away. It's yours whenever you're ready.",
  },
  {
    label: "For a partner",
    text: "You've been carrying a lot lately. I wanted to give you something that's just yours — not us, not work, just a space where you get to be heard. I'll be here. This is someone who's also there.",
  },
  {
    label: "For a friend",
    text: "I've been the person you call, and I'm always glad when you do. I also know I have my own limits — my own weeks. I got you a Keeper so you have someone else in your corner. Not instead of me. Alongside.",
  },
];

const FAQ = [
  {
    q: "How does the recipient find out about the gift?",
    a: "We send them a gentle email on the delivery date you choose, explaining what Hearth is and how to get started. There is no hard sell and no deadline to redeem.",
  },
  {
    q: "What if they already have a Hearth membership?",
    a: "The gift extends their current membership. We'll let you know at checkout if the email is already associated with an account.",
  },
  {
    q: "Can they pick their own Keeper?",
    a: "Yes. Every new member goes through the First Sit intake and is hand-matched with Keeper candidates. The recipient picks from three matched options.",
  },
  {
    q: "What if they decide Hearth isn't right for them?",
    a: "They can decline the gift and we'll issue you a refund within 7 days. No awkward conversation required.",
  },
  {
    q: "Does the price appear anywhere in the gift email?",
    a: "No. We mention the duration (e.g., 'one month of Hearth') — never the dollar amount.",
  },
  {
    q: "Can I gift internationally?",
    a: "Currently, gifts can only be redeemed in the US and Canada. UK and Australia are coming soon.",
  },
];

export default function GiftPage() {
  const [selectedMonths, setSelectedMonths] = useState(1);
  const [note, setNote] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("today");
  const [submitted, setSubmitted] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  const selectedOption = GIFT_OPTIONS.find((o) => o.months === selectedMonths)!;

  const handleTemplateSelect = (i: number) => {
    setNote(TEMPLATES[i].text);
    setSelectedTemplate(i);
  };

  if (submitted) {
    return (
      <>
        <SharedNav />
        <section style={{ padding: "120px 0", textAlign: "center" }}>
          <div className="wrap">
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "var(--ember)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 28px",
                fontSize: 28,
                color: "#FFF6E8",
              }}
            >
              &#10038;
            </div>
            <h1 style={{ fontSize: "clamp(40px, 5vw, 72px)", marginBottom: 18 }}>
              The Hearth is lit.
            </h1>
            <p
              style={{
                fontSize: 20,
                lineHeight: 1.6,
                color: "var(--ink-2)",
                maxWidth: "44ch",
                margin: "0 auto",
              }}
            >
              Your gift is on its way.{" "}
              {deliveryDate === "today"
                ? "We'll send it today."
                : `We'll send it on your chosen date.`}{" "}
              Thank you for pulling up a chair for someone.
            </p>
          </div>
        </section>
        <SharedFooter />
      </>
    );
  }

  return (
    <>
      <SharedNav />

      {/* HERO */}
      <section style={{ padding: "80px 0 60px", borderBottom: "1px solid var(--rule-2)" }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            Light a Hearth
          </div>
          <h1 style={{ marginTop: 24, maxWidth: "16ch" }}>
            Light a Hearth. Give someone a chair.
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
            For the parent who carries everything quietly. The partner who needs
            something of their own. The friend whose week has been too much.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        style={{
          padding: "80px 0",
          background: "var(--paper-2)",
          borderBottom: "1px solid var(--rule-2)",
        }}
      >
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 40 }}>
            <span className="dot" />
            How it works
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 0,
              border: "1px solid var(--rule)",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            {[
              {
                num: "01",
                title: "Choose a length",
                body: "One month, three, six, or a full year. Pick the amount that feels right for the moment.",
              },
              {
                num: "02",
                title: "Write a note",
                body: "A personal message from you to them. We'll include it in the gift email. Use one of our templates or write your own.",
                dark: true,
              },
              {
                num: "03",
                title: "We onboard them gently",
                body: "We send a calm email explaining what Hearth is, how the First Sit works, and how to get started — at a pace that's theirs.",
              },
            ].map((step) => (
              <div
                key={step.num}
                style={{
                  padding: "36px 32px",
                  background: step.dark ? "var(--ink)" : "var(--paper-2)",
                  borderRight: step.num !== "03" ? "1px solid var(--rule)" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: step.dark ? "#C9B894" : "var(--ember)",
                    marginBottom: 16,
                  }}
                >
                  Step {step.num}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 380,
                    fontSize: 24,
                    marginBottom: 14,
                    color: step.dark ? "var(--paper)" : "var(--ink)",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: step.dark ? "#D8C8AA" : "var(--ink-2)",
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GIFT FORM */}
      <section style={{ padding: "80px 0 100px" }}>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "start",
            }}
          >
            {/* Form */}
            <div>
              <div className="eyebrow" style={{ marginBottom: 28 }}>
                <span className="dot" />
                Gift details
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                style={{ display: "grid", gap: 24 }}
              >
                {/* Gift length */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                      marginBottom: 12,
                    }}
                  >
                    Gift length
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
                    {GIFT_OPTIONS.map((opt) => (
                      <button
                        key={opt.months}
                        type="button"
                        onClick={() => setSelectedMonths(opt.months)}
                        style={{
                          padding: "14px 8px",
                          border: `1px solid ${selectedMonths === opt.months ? "var(--ember)" : "var(--rule)"}`,
                          borderRadius: 8,
                          background:
                            selectedMonths === opt.months
                              ? "#FFF7EE"
                              : "var(--paper)",
                          cursor: "pointer",
                          textAlign: "center",
                          transition: "all 0.2s",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "var(--serif)",
                            fontSize: 20,
                            color:
                              selectedMonths === opt.months
                                ? "var(--ember)"
                                : "var(--ink)",
                            fontWeight: 380,
                          }}
                        >
                          ${opt.price}
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--mono)",
                            fontSize: 10,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "var(--ink-3)",
                            marginTop: 4,
                          }}
                        >
                          {opt.label}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recipient */}
                <div
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--ink-3)",
                        marginBottom: 8,
                      }}
                    >
                      Recipient name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Their name"
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        border: "1px solid var(--rule)",
                        borderRadius: 6,
                        fontSize: 15,
                        background: "var(--paper)",
                        color: "var(--ink)",
                        outline: "none",
                        fontFamily: "var(--sans)",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--ink-3)",
                        marginBottom: 8,
                      }}
                    >
                      Recipient email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="Their email"
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        border: "1px solid var(--rule)",
                        borderRadius: 6,
                        fontSize: 15,
                        background: "var(--paper)",
                        color: "var(--ink)",
                        outline: "none",
                        fontFamily: "var(--sans)",
                      }}
                    />
                  </div>
                </div>

                {/* Personal note */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                      marginBottom: 8,
                    }}
                  >
                    Your personal note
                  </label>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Write something for them..."
                    rows={5}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      border: "1px solid var(--rule)",
                      borderRadius: 6,
                      fontSize: 15,
                      background: "var(--paper)",
                      color: "var(--ink)",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "var(--serif)",
                      lineHeight: 1.6,
                    }}
                  />
                </div>

                {/* Gifter info */}
                <div
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--ink-3)",
                        marginBottom: 8,
                      }}
                    >
                      Your name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        border: "1px solid var(--rule)",
                        borderRadius: 6,
                        fontSize: 15,
                        background: "var(--paper)",
                        color: "var(--ink)",
                        outline: "none",
                        fontFamily: "var(--sans)",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--ink-3)",
                        marginBottom: 8,
                      }}
                    >
                      Your email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="Your email"
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        border: "1px solid var(--rule)",
                        borderRadius: 6,
                        fontSize: 15,
                        background: "var(--paper)",
                        color: "var(--ink)",
                        outline: "none",
                        fontFamily: "var(--sans)",
                      }}
                    />
                  </div>
                </div>

                {/* Delivery date */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                      marginBottom: 12,
                    }}
                  >
                    Delivery
                  </label>
                  <div style={{ display: "flex", gap: 12 }}>
                    {["today", "pick-date"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setDeliveryDate(opt)}
                        style={{
                          padding: "10px 18px",
                          border: `1px solid ${deliveryDate === opt ? "var(--ember)" : "var(--rule)"}`,
                          borderRadius: 999,
                          background:
                            deliveryDate === opt ? "#FFF7EE" : "var(--paper)",
                          cursor: "pointer",
                          fontSize: 14,
                          fontFamily: "var(--sans)",
                          color:
                            deliveryDate === opt ? "var(--ember)" : "var(--ink-2)",
                          transition: "all 0.2s",
                        }}
                      >
                        {opt === "today" ? "Send today" : "Pick a date"}
                      </button>
                    ))}
                  </div>
                  {deliveryDate === "pick-date" && (
                    <input
                      type="date"
                      style={{
                        marginTop: 12,
                        padding: "12px 14px",
                        border: "1px solid var(--rule)",
                        borderRadius: 6,
                        fontSize: 15,
                        background: "var(--paper)",
                        color: "var(--ink)",
                        outline: "none",
                        fontFamily: "var(--sans)",
                      }}
                    />
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    justifyContent: "center",
                    padding: "16px 28px",
                    fontSize: 15,
                    background: "var(--ember)",
                  }}
                >
                  Light a Hearth &mdash; ${selectedOption.price}{" "}
                  <span className="arr">&rarr;</span>
                </button>
                <p
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--ink-3)",
                    textAlign: "center",
                  }}
                >
                  Secure checkout &middot; Price never shown to recipient
                </p>
              </form>
            </div>

            {/* Templates + FAQ */}
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot" />
                Message templates
              </div>
              <div style={{ display: "grid", gap: 12, marginBottom: 48 }}>
                {TEMPLATES.map((t, i) => (
                  <div
                    key={i}
                    onClick={() => handleTemplateSelect(i)}
                    style={{
                      padding: 20,
                      border: `1px solid ${selectedTemplate === i ? "var(--ember)" : "var(--rule)"}`,
                      borderRadius: 8,
                      background:
                        selectedTemplate === i ? "#FFF7EE" : "var(--paper-2)",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 10,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--ember)",
                        marginBottom: 8,
                      }}
                    >
                      {t.label}
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--serif)",
                        fontStyle: "italic",
                        fontSize: 15,
                        lineHeight: 1.6,
                        color: "var(--ink-2)",
                      }}
                    >
                      &ldquo;{t.text.slice(0, 100)}&hellip;&rdquo;
                    </p>
                  </div>
                ))}
              </div>

              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot" />
                Gift FAQ
              </div>
              {FAQ.map((item, i) => (
                <div
                  key={i}
                  style={{
                    borderTop: "1px solid var(--rule-2)",
                    padding: "18px 0",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 17,
                      fontWeight: 380,
                      marginBottom: 8,
                      color: "var(--ink)",
                    }}
                  >
                    {item.q}
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: "var(--ink-2)",
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
