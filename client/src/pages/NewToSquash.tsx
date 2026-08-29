/**
 * Sun-bleached Court Club design: first-timer confidence is built through warm poster-like cards and generous club imagery.
 */
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { RetroImage } from "@/components/RetroImage";
import { WaveDivider } from "@/components/WaveDivider";
import { PLAYBYPOINT_BOOKING_URL } from "@/lib/booking";

const clubWideImage = "/manus-storage/sol-club-wide_b4871337.png";
const muralReferenceImage = "/manus-storage/sol-mural-reference_10136907.png";

const offers = [
  {
    marker: "01",
    title: "First Lesson with the Pros — $39",
    metadata: "30 MINUTES • ONE-ON-ONE.",
    copy: "Try it for the first time in a private session with Sol founders and coaches Bruna or Vini. We'll provide the racket, show you the basics and get you playing from the start. Then stay for the sauna, cold plunge and showers. One per person.",
    action: "TRY SQUASH",
    tone: "mango",
  },
  {
    marker: "02",
    title: "Beginner Squash Clinic — $55",
    metadata: "1 HOUR • NO EXPERIENCE NEEDED.",
    copy: "For people new to the game and anyone still developing their squash fundamentals. Small group, coached on court. Rackets provided. Dynamic, full-body, seriously fun.",
    action: "SEE SESSIONS",
    tone: "green",
  },
];

export function FirstTimerContent({ includeLeadingWave = true }: { includeLeadingWave?: boolean }) {
  return (
    <>
      {includeLeadingWave && <WaveDivider source="navy" destination="green" />}
      <section className="first-steps" id="first-steps">
        <img className="mural-sun mural-sun--first-steps" src="/manus-storage/sol-sun-repaired-orange_e644a385.png" alt="" aria-hidden="true" />
        <div className="section-rail"><span>YOUR FIRST RALLY</span><i /></div>
        <div className="first-steps__heading"><p className="eyebrow">COME AS YOU ARE</p><h2>WE'LL GET<br />YOU <em>PLAYING.</em></h2></div>
        <div className="first-step-grid">
          {offers.map((offer, index) => (
            <motion.article key={offer.title} className={`first-step-card first-step-card--${offer.tone}`} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.09 }}>
              <div className="first-step-card__top"><span>{offer.marker}</span><span>FIRST-TIMER FAVORITE</span></div>
              <h3>{offer.title}</h3>
              <p className="first-step-card__metadata">{offer.metadata}</p>
              <p>{offer.copy}</p>
              <MagneticButton href={PLAYBYPOINT_BOOKING_URL} className={offer.tone === "mango" ? "button--navy" : "button--mango"}>{offer.action}</MagneticButton>
              <p className="booking-handoff-note">Choose a live time and complete your booking next.</p>
            </motion.article>
          ))}
        </div>
      </section>
      <WaveDivider source="green" destination="navy" />
      <section className="beginner-note">
        <span className="squash-ball squash-ball--beginner" aria-hidden="true"><i /><i /></span>
        <div>
          <p className="eyebrow eyebrow--cyan">WE'VE GOT YOU</p>
          <h2>SHOW UP.<br />WE HANDLE<br /><em>THE REST.</em></h2>
          <ul>
            <li><Check size={19} />Rackets provided.</li>
            <li><Check size={19} />No experience needed.</li>
            <li><Check size={19} />Come ready to move.</li>
          </ul>
        </div>
        <RetroImage src={muralReferenceImage} label="" alt="Sol Squash mural details" className="beginner-note__image" tint="green" />
      </section>
    </>
  );
}

export default function NewToSquash() {
  return (
    <>
      <section className="entry-hero">
        <div className="entry-hero__copy">
          <motion.p className="eyebrow eyebrow--cyan" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>THE RACKET IS WAITING</motion.p>
          <motion.h1 initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
            {["NEVER", "PLAYED?"].map((line) => <motion.span key={line} variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}>{line}</motion.span>)}
            <motion.em variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}>PERFECT.</motion.em>
          </motion.h1>
          <p>Squash is a dynamic indoor racket sport with great cardio, quick reactions and nonstop action.</p>
          <a className="entry-hero__start" href="#first-steps">START HERE <span aria-hidden="true">↓</span></a>
        </div>
        <RetroImage src={clubWideImage} alt="The social space at Sol Squash" label="" className="entry-hero__image" tint="mango" />
      </section>
      <FirstTimerContent />
    </>
  );
}
