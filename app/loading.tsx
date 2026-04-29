export default function Loading() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--paper)",
        gap: 18,
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "radial-gradient(circle at 50% 65%, #F2A86B 0%, var(--ember) 45%, var(--ember-deep) 80%)",
          boxShadow: "0 0 0 1px #1A171422, inset 0 -6px 10px #6E1A0F55, 0 0 28px rgba(228,137,76,0.4)",
          animation: "hearth-pulse 1.6s ease-in-out infinite",
        }}
      />
      <p
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--ink-3)",
          margin: 0,
        }}
      >
        Tending the chair
      </p>
      <style>{`
        @keyframes hearth-pulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.08); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
