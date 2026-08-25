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
  navy: "#1a2f6b",
  green: "#1a3a3a",
  chalk: "#ffffff",
};

export function WaveDivider({ destination, source, flip = false }: WaveDividerProps) {
  return (
    <div className={`wave-divider ${flip ? "wave-divider--flip" : ""}`} style={{ backgroundColor: fills[source] }} aria-hidden="true">
      <svg viewBox="0 0 1440 94" preserveAspectRatio="none" role="presentation">
        <path d="M0,36 C120,81 240,81 360,36 C480,-9 600,-9 720,36 C840,81 960,81 1080,36 C1200,-9 1320,-9 1440,36 L1440,94 L0,94 Z" fill={fills[destination]} />
        <path d="M0,36 C120,81 240,81 360,36 C480,-9 600,-9 720,36 C840,81 960,81 1080,36 C1200,-9 1320,-9 1440,36" fill="none" stroke="#00c4c4" strokeWidth="10" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}
