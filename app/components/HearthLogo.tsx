"use client";

import { useEffect, useState } from "react";

/* ============================================================
   HEARTH: The Cairn
   Ported from Claude Design (logos-v10.jsx · Round 10).

   Three stacked stones. A wayfinder. Cairns mark trails, summits,
   graves, and sacred places across every culture that ever walked
   over rough ground. They say three things at once:

   1. This is the way.
   2. Someone has been here.
   3. This matters.

   The three stones stand for a week (one Sit), a sit (one
   conversation), and a year (the long arc). Together: time spent
   with someone.
   ============================================================ */

const PALETTE = {
  ink: "#0E0B08",
  paper: "#F2EDE5",
  paper2: "#EAE2D2",
  paper3: "#E0D5BF",
  paper4: "#F8F2E6",
  ember: "#9C2A1A",
  stone: "#7B7164",
  stoneDeep: "#3F3A33",
  stoneLight: "#A89C8C",
} as const;

export type HearthCairnProps = {
  /** rendered size in pixels (square) */
  size?: number;
  /** subtle SMIL animation */
  animated?: boolean;
  /** flip palette for ink-background placements */
  onDark?: boolean;
  /**
   * - "idle"  = quiet drift (default)
   * - "stack" = stones arrive + settle on a 6s loop (sign-in, splash, anniversary)
   * - "intro" = stones stack once and freeze in place (~1.6s); good for first-paint moments
   */
  mode?: "idle" | "stack" | "intro";
  className?: string;
};

export function HearthCairn({
  size = 36,
  animated = false,
  onDark = false,
  mode = "idle",
  className,
}: HearthCairnProps) {
  const stoneA = onDark ? PALETTE.stoneLight : PALETTE.stoneDeep; // bottom
  const stoneB = onDark ? PALETTE.paper3 : PALETTE.stone; // middle
  const stoneC = onDark ? PALETTE.paper2 : PALETTE.stoneLight; // top
  const ground = onDark ? "#3A332C" : "#0E0B0822";
  const highlight = onDark ? PALETTE.paper4 : PALETTE.stoneLight;
  const useStack = animated && mode === "stack";
  const useIntro = mode === "intro";

  return (
    <svg
      width={size}
      height={size}
      // Tightened viewBox so the visible cairn fills the box.
      // Original coords span y=44 (top stone tip) → y=110 (cast shadow bottom),
      // x=14 → x=106. Square 80×80 viewBox centered on visible mark center
      // (60, 77) ensures inline-flex `align-items: center` lockups look right.
      viewBox="20 37 80 80"
      role="img"
      aria-label="Hearth"
      className={className}
      style={{ display: "block", overflow: "visible" }}
    >
      <title>Hearth</title>

      {/* Ground line */}
      <line x1="14" y1="106" x2="106" y2="106" stroke={ground} strokeWidth="1" />

      {/* BOTTOM STONE */}
      <g style={{ transformOrigin: "60px 100px" }}>
        {useStack && (
          <>
            <animate
              attributeName="opacity"
              values="0;1;1;1;1;0"
              keyTimes="0;0.1;0.7;0.9;0.95;1"
              dur="6s"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 22; 0 0; 0 0; 0 0"
              keyTimes="0;0.12;0.9;1"
              dur="6s"
              repeatCount="indefinite"
            />
          </>
        )}
        {useIntro && (
          <>
            <animate
              attributeName="opacity"
              values="0;1"
              keyTimes="0;1"
              dur="0.55s"
              begin="0s"
              repeatCount="1"
              fill="freeze"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 22; 0 0"
              keyTimes="0;1"
              dur="0.55s"
              begin="0s"
              repeatCount="1"
              fill="freeze"
              calcMode="spline"
              keySplines="0.22 1 0.36 1"
            />
          </>
        )}
        <path
          d="M 26 106 C 22 100, 22 86, 32 80 C 44 76, 60 76, 76 78 C 90 80, 100 90, 98 100 C 96 106, 92 106, 86 106 L 30 106 C 26 106, 26 106, 26 106 Z"
          fill={stoneA}
        />
        <path
          d="M 30 88 C 36 82, 50 80, 60 82"
          fill="none"
          stroke={highlight}
          strokeWidth="1.2"
          opacity="0.5"
          strokeLinecap="round"
        />
      </g>

      {/* MIDDLE STONE */}
      <g style={{ transformOrigin: "60px 70px" }}>
        {useStack && (
          <>
            <animate
              attributeName="opacity"
              values="0;0;1;1;1;0"
              keyTimes="0;0.18;0.32;0.9;0.95;1"
              dur="6s"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 -28; 0 -28; 0 0; 0 0; 0 0"
              keyTimes="0;0.2;0.36;0.9;1"
              dur="6s"
              repeatCount="indefinite"
            />
          </>
        )}
        {useIntro && (
          <>
            <animate
              attributeName="opacity"
              values="0;0;1"
              keyTimes="0;0.6;1"
              dur="1s"
              begin="0s"
              repeatCount="1"
              fill="freeze"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 -28; 0 -28; 0 0"
              keyTimes="0;0.4;1"
              dur="1s"
              begin="0s"
              repeatCount="1"
              fill="freeze"
              calcMode="spline"
              keySplines="0.5 0 0.5 1; 0.22 1 0.36 1"
            />
          </>
        )}
        <path
          d="M 36 78 C 32 70, 38 60, 48 58 C 60 56, 74 58, 80 64 C 86 70, 82 78, 76 78 L 40 78 C 38 78, 36 78, 36 78 Z"
          fill={stoneB}
        >
          {animated && !useStack && !useIntro && (
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0.4 -0.3; 0 0"
              dur="6s"
              repeatCount="indefinite"
            />
          )}
        </path>
        <path
          d="M 42 66 C 48 62, 58 60, 64 62"
          fill="none"
          stroke={highlight}
          strokeWidth="1"
          opacity="0.45"
          strokeLinecap="round"
        />
      </g>

      {/* TOP STONE */}
      <g style={{ transformOrigin: "60px 50px" }}>
        {useStack && (
          <>
            <animate
              attributeName="opacity"
              values="0;0;0;1;1;1;0"
              keyTimes="0;0.36;0.46;0.6;0.9;0.95;1"
              dur="6s"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 -34; 0 -34; 0 -34; 0 0; 0 0; 0 0"
              keyTimes="0;0.38;0.46;0.6;0.9;1"
              dur="6s"
              repeatCount="indefinite"
            />
          </>
        )}
        {useIntro && (
          <>
            <animate
              attributeName="opacity"
              values="0;0;1"
              keyTimes="0;0.55;1"
              dur="1.5s"
              begin="0s"
              repeatCount="1"
              fill="freeze"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 -34; 0 -34; 0 0"
              keyTimes="0;0.55;1"
              dur="1.5s"
              begin="0s"
              repeatCount="1"
              fill="freeze"
              calcMode="spline"
              keySplines="0.5 0 0.5 1; 0.22 1 0.36 1"
            />
          </>
        )}
        <path
          d="M 50 56 C 48 50, 52 44, 58 44 C 66 44, 72 48, 72 54 C 72 56, 68 58, 62 58 L 54 58 C 52 58, 50 58, 50 56 Z"
          fill={stoneC}
        >
          {animated && !useStack && !useIntro && (
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-0.6 60 56; 0.6 60 56; -0.6 60 56"
              dur="7s"
              repeatCount="indefinite"
            />
          )}
        </path>
      </g>

      {/* Cast shadow under the cairn */}
      <ellipse cx="60" cy="108" rx="36" ry="2" fill={PALETTE.ink} opacity="0.12" />
    </svg>
  );
}

export type HearthWordmarkProps = {
  size?: number;
  color?: string;
  italic?: boolean;
};

/** Type-set Fraunces italic wordmark: used as a fallback in tight spaces. */
export function HearthWordmark({
  size = 28,
  color = PALETTE.ink,
  italic = true,
}: HearthWordmarkProps) {
  return (
    <span
      style={{
        fontFamily: "var(--font-serif), 'Fraunces', Georgia, serif",
        fontWeight: 320,
        fontStyle: italic ? "italic" : "normal",
        fontSize: size,
        letterSpacing: "-0.04em",
        color,
        lineHeight: 0.9,
        whiteSpace: "nowrap",
        fontVariationSettings: '"opsz" 144',
      }}
    >
      Hearth
    </span>
  );
}

export type HearthDrawnWordmarkProps = {
  /** rendered height in pixels (width auto-scales by aspect ratio) */
  height?: number;
  /** fill color: defaults to ink */
  color?: string;
  className?: string;
  /** if true, animate in (fade + slide up) once on mount */
  intro?: boolean;
};

/**
 * The hand-drawn calligraphic "hearth" wordmark.
 *
 * Sourced from a custom-lettered PNG, vectorized via potrace. Renders via CSS
 * `mask-image` so a single SVG file can be re-colored for any background -
 * just pass `color` (ink for light backgrounds, paper for dark, ember for
 * accent surfaces).
 *
 * Glyph aspect ratio: 863 : 299 ≈ 2.886. Width = height × 2.886.
 */
const WORDMARK_ASPECT = 863 / 299;

export function HearthDrawnWordmark({
  height = 28,
  color = PALETTE.ink,
  className,
  intro = false,
}: HearthDrawnWordmarkProps) {
  return (
    <>
      <span
        role="img"
        aria-label="Hearth"
        className={
          intro
            ? `hearth-wordmark-intro${className ? ` ${className}` : ""}`
            : className
        }
        style={{
          display: "inline-block",
          height,
          width: height * WORDMARK_ASPECT,
          backgroundColor: color,
          WebkitMaskImage: "url(/hearth-wordmark.svg)",
          maskImage: "url(/hearth-wordmark.svg)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          verticalAlign: "middle",
        }}
      />
      {intro && (
        <style>{`
          @keyframes hearth-wordmark-fade-up {
            from { opacity: 0; transform: translateY(4px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .hearth-wordmark-intro {
            animation: hearth-wordmark-fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.55s both;
            will-change: opacity, transform;
          }
          @media (prefers-reduced-motion: reduce) {
            .hearth-wordmark-intro { animation: none; }
          }
        `}</style>
      )}
    </>
  );
}

export type HearthLockupProps = {
  /** wordmark size: interpreted as height for "drawn", font-size for "font" */
  size?: number;
  /** mark height = size × markRatio. Defaults to 1.5 (cairn slightly taller than wordmark) */
  markRatio?: number;
  animated?: boolean;
  mode?: "idle" | "stack" | "intro";
  onDark?: boolean;
  layout?: "horizontal" | "stacked";
  gapRatio?: number;
  /** "drawn" = hand-lettered calligraphic SVG (default); "font" = Fraunces italic text */
  wordmark?: "drawn" | "font";
  /**
   * Convenience: play the intro animation once on mount, then settle to idle drift.
   * Cairn stones stack into place (~1.5s) while wordmark fades up beside them.
   */
  intro?: boolean;
};

/** Horizontal lockup: cairn beside wordmark. Used in the nav. */
export function HearthLockup({
  size = 24,
  markRatio = 1.5,
  animated = false,
  mode = "idle",
  onDark = false,
  layout = "horizontal",
  gapRatio = 0.22,
  wordmark = "drawn",
  intro = false,
}: HearthLockupProps) {
  // Phase machine for the `intro` prop. Starts in "intro" (cairn stacks +
  // wordmark fades up), then settles to "idle" once everything has arrived.
  const [phase, setPhase] = useState<"intro" | "idle">(intro ? "intro" : "idle");
  useEffect(() => {
    if (phase !== "intro") return;
    const t = setTimeout(() => setPhase("idle"), 1700);
    return () => clearTimeout(t);
  }, [phase]);

  const cairnMode: "idle" | "stack" | "intro" =
    phase === "intro" ? "intro" : mode === "stack" ? "stack" : "idle";
  const cairnAnimated = phase === "intro" ? false : animated;

  const markSize = size * markRatio;
  const color = onDark ? PALETTE.paper : PALETTE.ink;
  const WordmarkEl =
    wordmark === "drawn" ? (
      <HearthDrawnWordmark height={size} color={color} intro={intro} />
    ) : (
      <HearthWordmark size={size} color={color} />
    );

  if (layout === "stacked") {
    return (
      <span
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: markSize * 0.12,
        }}
      >
        <HearthCairn
          size={markSize}
          animated={cairnAnimated}
          mode={cairnMode}
          onDark={onDark}
        />
        {WordmarkEl}
      </span>
    );
  }
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: markSize * gapRatio,
      }}
    >
      <HearthCairn
        size={markSize}
        animated={cairnAnimated}
        mode={cairnMode}
        onDark={onDark}
      />
      {WordmarkEl}
    </span>
  );
}
