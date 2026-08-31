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

const waveColors = {
  navy: "#002269",
  cream: "#f4f0e7",
  mustard: "#f4b41c",
  teal: "#154443",
  green: "#35ae39",
  orange: "#ef7354",
} as const;

export function HalftoneDivider({
  destination,
}: {
  destination: keyof typeof waveColors;
}) {
  const rows = [
    { y: 7, radius: 1.2, offset: 0 },
    { y: 19, radius: 2, offset: 8 },
    { y: 31, radius: 3, offset: 0 },
    { y: 43, radius: 4.2, offset: 8 },
    { y: 55, radius: 5.8, offset: 0 },
  ];

  return (
    <div className="bn-halftone-divider" aria-hidden="true">
      <svg viewBox="0 0 1440 96" preserveAspectRatio="none">
        <g fill={waveColors[destination]}>
          {rows.flatMap((row, rowIndex) =>
            Array.from({ length: 91 }, (_, dotIndex) => (
              <circle
                key={`${rowIndex}-${dotIndex}`}
                cx={dotIndex * 16 + row.offset}
                cy={row.y}
                r={row.radius}
              />
            ))
          )}
        </g>
      </svg>
    </div>
  );
}

export function BrandWave({
  destination,
}: {
  destination: keyof typeof waveColors;
}) {
  return (
    <div className="bn-brand-wave" aria-hidden="true">
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
      <line x1="208.61" y1="492.77" x2="208.61" y2="490.17" />
      <line x1="541.39" y1="492.77" x2="541.39" y2="490.17" />
      <polyline points="208.61 490.17, 291.81 490.17, 291.81 406.98" />
      <polyline points="541.39 490.17, 458.19 490.17, 458.19 406.98" />
    </svg>
  );
}
