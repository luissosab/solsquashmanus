/**
 * Sun-bleached Court Club design: the homepage is a sequence of saturated courtside rooms, never a centered SaaS panel.
 */
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Link } from "wouter";
import { MagneticButton } from "@/components/MagneticButton";
import { RetroImage } from "@/components/RetroImage";
import { WaveDivider } from "@/components/WaveDivider";

const heroImage = "/manus-storage/sol-hero-courts_2addd508.jpg";
const loungeImage = "/manus-storage/sol-club-lounge_aa75a6f6.jpg";
const founderImage = "/manus-storage/sol-founders-dusk_9d9585d2.jpg";
const muralImage = "/manus-storage/sol-mural-reference_7499ceaf.png";

const heroWords = ["MIAMI'S", "SQUASH", "HOME."];
const clubFeatures = [
  { number: "01", title: "SQUASH", lead: "5 Full-glass courts.", text: "Book a court, join a session or train with us. All levels welcome.", color: "green" },
  { number: "02", title: "RECOVER & TRAIN", lead: "Sauna, cold plunge, showers and gym.", text: "Get your sweat in, reset and leave feeling better than you came.", color: "mango" },
  { number: "03", title: "STAY & CONNECT", lead: "Café, lounge and workspace.", text: "Grab a drink, get some work done or hang around after your match.", color: "navy" },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <RetroImage src={heroImage} alt="Players rallying in a glass squash court" label="[IMAGE: courts, warm lounge, socializing]" className="home-hero__image" tint="navy" />
        <div className="home-hero__veil" />
        <div className="home-hero__copy">
          <motion.p className="eyebrow eyebrow--cyan" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>LITTLE RIVER · MIAMI</motion.p>
          <h1 aria-label="MIAMI'S SQUASH HOME.">
            {heroWords.map((word, index) => (
              <motion.span key={word} initial={{ opacity: 0, y: 46, rotate: 2 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ type: "spring", stiffness: 210, damping: 20, delay: 0.24 + index * 0.1 }}>{word}</motion.span>
            ))}
          </h1>
          <motion.p className="hero-tagline" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.58 }}>MORE THAN A GAME, A WAY OF LIFE.</motion.p>
          <motion.p className="hero-body" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.68 }}>Come for the squash. Stay for everything around it.</motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.76 }}><MagneticButton href="/schedule" className="button--mango">BOOK A SESSION</MagneticButton></motion.div>
        </div>
        <a className="hero-scroll" href="#club"><span>SCROLL TO RALLY</span><ArrowDownRight size={23} /></a>
      </section>

      <WaveDivider destination="mango" />
      <section className="club-intro" id="club">
        <div className="section-rail"><span>THE CLUB</span><i /></div>
        <div className="club-intro__heading">
          <p className="eyebrow">SQUASH, THEN EVERYTHING ELSE</p>
          <h2>A CLUB<br /><em>YOU ACTUALLY</em><br />STAY IN.</h2>
        </div>
        <div className="club-intro__copy">
          <figure className="mural-glimpse">
            <img src={muralImage} alt="Sol Squash mural at the Little River club" />
          </figure>
          <p>Come for the squash. Stay for everything around it.</p>
        </div>
        <div className="club-feature-grid">
          {clubFeatures.map((feature, index) => (
            <motion.article key={feature.title} className={`club-feature club-feature--${feature.color}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.08 }}>
              <span className="club-feature__number">{feature.number}</span>
              <h3>{feature.title}</h3>
              <p className="club-feature__lead">{feature.lead}</p>
              <p>{feature.text}</p>
              <span className="club-feature__mark" aria-hidden="true">↗</span>
            </motion.article>
          ))}
        </div>
      </section>

      <WaveDivider destination="navy" />
      <section className="home-rally">
        <div className="home-rally__copy">
          <p className="eyebrow eyebrow--cyan">DON'T OVERTHINK IT</p>
          <h2>NEW TO<br /><em>SQUASH?</em><br />PERFECT.</h2>
          <p>Squash is a dynamic indoor racket sport with great cardio, quick reactions and nonstop action.</p>
          <MagneticButton href="/new-to-squash" className="button--cyan">START HERE</MagneticButton>
        </div>
        <RetroImage src="/manus-storage/sol-new-player_805a121f.jpg" alt="Coach welcoming a beginner squash player" label="[IMAGE: first rally, guided by a pro]" className="home-rally__image" tint="mango" />
      </section>

      <WaveDivider destination="green" />
      <section className="home-rhythm">
        <RetroImage src={loungeImage} alt="Sol club lounge with a wellness area" label="[IMAGE: cold plunge, lounge, post-match exhale]" className="home-rhythm__image" tint="cyan" />
        <div className="home-rhythm__copy">
          <p className="eyebrow eyebrow--cyan">FIND YOUR RHYTHM</p>
          <h2>COURT.<br />SAUNA.<br /><em>CAFÉ.</em></h2>
          <p>A good session is only part of a good day.</p>
          <Link href="/play-and-pricing" className="text-link">PICK YOUR WAY IN <span>↗</span></Link>
        </div>
      </section>

      <WaveDivider destination="chalk" />
      <section className="home-story-callout">
        <div className="home-story-callout__copy">
          <span className="eyebrow">BUILT FROM THE LOVE OF THE GAME</span>
          <h2>BUILT BY<br />PLAYERS.<br /><em>MADE FOR</em><br />EVERYONE.</h2>
          <p>MIAMI'S SQUASH HOME.</p>
          <MagneticButton href="/our-story" className="button--navy">MEET THE TEAM</MagneticButton>
        </div>
        <RetroImage src={founderImage} alt="Sol Squash co-founders near a glass court" label="[IMAGE: Bruna & Vini at the court]" className="home-story-callout__image" tint="green" />
      </section>
    </>
  );
}
