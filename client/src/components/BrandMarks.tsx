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

/** The official logo artwork is cropped—not redrawn—so the racket-shaped Q remains authentic. */
export function RacketQMark() {
  return (
    <img
      className="bn-racket-q"
      src="/media/sol-racket-q-extracted.png"
      alt=""
      aria-hidden="true"
    />
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
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
        <path
          d="M0,38 C120,74 240,74 360,38 C480,2 600,2 720,38 C840,74 960,74 1080,38 C1200,2 1320,2 1440,38 L1440,90 L0,90 Z"
          fill={waveColors[destination]}
        />
        <path
          d="M0,38 C120,74 240,74 360,38 C480,2 600,2 720,38 C840,74 960,74 1080,38 C1200,2 1320,2 1440,38"
          fill="none"
          stroke="#20d9e8"
          strokeWidth="9"
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
      viewBox="0 0 240 220"
      aria-hidden="true"
    >
      <path d="M20 200V20h200v180M20 120h200M75 120v80M165 120v80M75 165h90" />
    </svg>
  );
}
