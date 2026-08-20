/**
 * Sun-bleached Court Club design: Electric Pool continuous sine waves link every major color room.
 */
type WaveDividerProps = {
  destination: "mango" | "navy" | "green" | "chalk";
  flip?: boolean;
};

const fills = {
  mango: "#F4A911",
  navy: "#0C254A",
  green: "#1B4332",
  chalk: "#FAFAFA",
};

export function WaveDivider({ destination, flip = false }: WaveDividerProps) {
  return (
    <div className={`wave-divider ${flip ? "wave-divider--flip" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1440 94" preserveAspectRatio="none" role="presentation">
        <path d="M0,36 C120,81 240,81 360,36 C480,-9 600,-9 720,36 C840,81 960,81 1080,36 C1200,-9 1320,-9 1440,36 L1440,94 L0,94 Z" fill={fills[destination]} />
        <path d="M0,36 C120,81 240,81 360,36 C480,-9 600,-9 720,36 C840,81 960,81 1080,36 C1200,-9 1320,-9 1440,36" fill="none" stroke="#00E5FF" strokeWidth="10" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}
