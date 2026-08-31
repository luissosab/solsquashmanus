export function SunMark({
  tone = "mustard",
}: {
  tone?: "mustard" | "orange" | "cyan";
}) {
  return (
    <img
      className={`bn-sun-mark bn-sun-mark--${tone}`}
      src={`/media/sol-sun-repaired-${tone === "mustard" ? "mustard_563e528f" : tone === "orange" ? "orange_e644a385" : "cyan_372f6d5e"}.png`}
      alt=""
      aria-hidden="true"
    />
  );
}

export function BallMark({
  tone = "green",
}: {
  tone?: "green" | "orange" | "cyan";
}) {
  return (
    <span className={`bn-ball-mark bn-ball-mark--${tone}`} aria-hidden="true">
      <i />
      <i />
    </span>
  );
}

/** The complete connected Q artwork is extracted from the official logo and recolored only through its alpha mask. */
export function RacketQMark({
  tone = "green",
}: {
  tone?: "green" | "navy" | "mustard" | "orange" | "cyan" | "cream";
}) {
  return (
    <span className={`bn-racket-q bn-racket-q--${tone}`} aria-hidden="true" />
  );
}

export function CyanWave() {
  return (
    <svg
      className="bn-cyan-wave"
      viewBox="0 0 900 44"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 22 C75 -4 150 48 225 22 S375 -4 450 22 S600 48 675 22 S825 -4 900 22" />
    </svg>
  );
}

const waveColors = {
  navy: "#0c254a",
  cream: "#f4f0e7",
  mustard: "#f4b41c",
  teal: "#154443",
  orange: "#ef7354",
} as const;

export function BrandWave({
  source,
  destination,
  flip = false,
}: {
  source: keyof typeof waveColors;
  destination: keyof typeof waveColors;
  flip?: boolean;
}) {
  return (
    <div
      className={`bn-brand-wave ${flip ? "bn-brand-wave--flip" : ""}`}
      style={{ backgroundColor: waveColors[source] }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none">
        <path
          d="M0,28 C120,52 240,52 360,28 C480,4 600,4 720,28 C840,52 960,52 1080,28 C1200,4 1320,4 1440,28 L1440,64 L0,64 Z"
          fill={waveColors[destination]}
        />
        <path
          d="M0,28 C120,52 240,52 360,28 C480,4 600,4 720,28 C840,52 960,52 1080,28 C1200,4 1320,4 1440,28"
          fill="none"
          stroke="#20d9e8"
          strokeWidth="11"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

export function CourtMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`bn-court-mark ${className}`}
      viewBox="0 0 750 750"
      aria-hidden="true"
    >
      <rect x="208.61" y="121.52" width="332.77" height="506.96" />
      <line x1="208.61" y1="406.98" x2="541.39" y2="406.98" />
      <line x1="375" y1="406.98" x2="375" y2="628.48" />
      <polyline points="208.61 490.17, 291.81 490.17, 291.81 406.98" />
      <polyline points="541.39 490.17, 458.19 490.17, 458.19 406.98" />
    </svg>
  );
}
