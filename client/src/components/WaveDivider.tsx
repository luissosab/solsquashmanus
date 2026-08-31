/**
 * Sun-bleached Court Club design: Electric Pool continuous sine waves link every major color room.
 */
type WaveColor = "mango" | "navy" | "green" | "chalk";

type WaveDividerProps = {
  destination: WaveColor;
  source: WaveColor;
  flip?: boolean;
};

const fills = {
  // The retained Sol mustard is the actual destination surface for every "mango" room.
  // Matching this fill prevents a lighter yellow wedge from appearing beneath the cyan seam.
  mango: "#F4A911",
  navy: "#002269",
  green: "#1a3a3a",
  chalk: "#ffffff",
};

export function WaveDivider({ destination, flip = false }: WaveDividerProps) {
  return (
    <div
      className={`wave-divider ${flip ? "wave-divider--flip" : ""}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 94" preserveAspectRatio="none" role="presentation">
        <path
          d="M0,42 C120,78 240,78 360,42 C480,6 600,6 720,42 C840,78 960,78 1080,42 C1200,6 1320,6 1440,42 L1440,94 L0,94 Z"
          fill={fills[destination]}
        />
        <path
          d="M0,42 C120,78 240,78 360,42 C480,6 600,6 720,42 C840,78 960,78 1080,42 C1200,6 1320,6 1440,42"
          fill="none"
          stroke="#00c4c4"
          strokeWidth="10"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
