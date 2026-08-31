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
    <span className="bn-racket-q" aria-hidden="true">
      <img src="/media/sol-squash-logo_dd364204.png" alt="" />
    </span>
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
