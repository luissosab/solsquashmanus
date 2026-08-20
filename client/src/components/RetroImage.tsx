/**
 * Sun-bleached Court Club design: large rounded editorial image fields always retain an explicit art-direction label.
 */
type RetroImageProps = {
  src?: string;
  label: string;
  alt: string;
  className?: string;
  tint?: "mango" | "green" | "navy" | "cyan";
};

export function RetroImage({ src, label, alt, className = "", tint = "navy" }: RetroImageProps) {
  return (
    <figure className={`retro-image retro-image--${tint} ${className}`}>
      {src ? <img src={src} alt={alt} /> : <div className="retro-image__blank" role="img" aria-label={alt} />}
      <div className="retro-image__texture" aria-hidden="true" />
      <figcaption>{label}</figcaption>
      <span className="retro-image__court-line" aria-hidden="true" />
    </figure>
  );
}
