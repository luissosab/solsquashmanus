/**
 * Sol mural language: real club imagery, two-dot squash balls, subtle court outlines, palms, and colour fields form one welcoming Miami clubhouse.
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { MagneticButton } from "@/components/MagneticButton";
import { WaveDivider } from "@/components/WaveDivider";

const assets = {
  court: "/manus-storage/sol-facility-glass-court_bc711772.png",
  introVideo: "/manus-storage/sol-squash-intro_5d0ba482.mp4",
  sauna: "/manus-storage/sol-sauna_23e752ac.png",
  coldPlunge: "/manus-storage/sol-cold-plunge_baaf4cf6.png",
  mural: "/manus-storage/sol-mural-feature_9dd29c1b.png",
  founders: "/manus-storage/sol-founders-on-court_fbc8dbe3.png",
};

const features = [
  { number: "01", title: "SQUASH", lead: "5 Full-glass courts.", text: "Book a court, join a session or train with us. All levels welcome.", tone: "green" },
  { number: "02", title: "RECOVER & TRAIN", lead: "Sauna, cold plunge, showers and gym.", text: "Get your sweat in, reset and leave feeling better than you came.", tone: "mango" },
  { number: "03", title: "STAY & CONNECT", lead: "Café, lounge and workspace.", text: "Grab a drink, get some work done or hang around after your match.", tone: "navy" },
];

export default function Home() {
  return (
    <>
      <section className="home-hero home-hero--real">
        <div className="home-hero__video-frame" aria-hidden="true"><video className="home-hero__video" autoPlay loop muted playsInline poster={assets.court}><source src={assets.introVideo} type="video/mp4" /></video></div>
        <div className="home-hero__veil" />
        <span className="squash-ball squash-ball--hero" aria-hidden="true"><i /><i /></span>
        <div className="home-hero__copy">
          <motion.p className="eyebrow eyebrow--cyan" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>645 NW 72ND STREET · LITTLE RIVER</motion.p>
          <h1 aria-label="MIAMI'S SQUASH HOME.">{["MIAMI'S", "SQUASH", "HOME."].map((word, index) => <motion.span key={word} initial={{ opacity: 0, y: 46 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 210, damping: 22, delay: 0.22 + index * 0.1 }}>{word}</motion.span>)}</h1>
          <p className="hero-tagline">MORE THAN A GAME, A WAY OF LIFE.</p>
          <p className="hero-body">Come for the squash. Stay for everything around it.</p>
          <MagneticButton href="/schedule" className="button--mango">BOOK A SESSION</MagneticButton>
        </div>
      </section>
      <WaveDivider source="navy" destination="mango" />
      <section className="club-intro club-intro--real">
        <div className="section-rail"><span>THE CLUB</span><i /></div>
        <div className="club-intro__heading"><p className="eyebrow">SQUASH, THEN EVERYTHING ELSE</p><h2>A CLUB<br /><em>YOU ACTUALLY</em><br />STAY IN.</h2></div>
        <div className="club-intro__copy"><p>Come for the squash. Stay for everything around it.</p><span className="squash-ball squash-ball--mango" aria-hidden="true"><i /><i /></span></div>
        <div className="club-feature-grid">{features.map((feature, index) => <motion.article key={feature.title} className={`club-feature club-feature--${feature.tone}`} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.08 }}><span className="club-feature__number">{feature.number}</span><h3>{feature.title}</h3><p className="club-feature__lead">{feature.lead}</p><p>{feature.text}</p><span className="club-feature__mark" aria-hidden="true">↗</span></motion.article>)}</div>
      </section>
      <WaveDivider source="mango" destination="navy" />
      <section className="home-story-callout home-story-callout--real">
        <div className="home-story-callout__copy"><span className="eyebrow eyebrow--cyan">BUILT FROM THE LOVE OF THE GAME</span><h2>BUILT BY<br />PLAYERS.<br /><em>MADE FOR</em><br />EVERYONE.</h2><p>MIAMI'S SQUASH HOME.</p><MagneticButton href="/our-story" className="button--mango">MEET THE TEAM</MagneticButton></div>
        <figure className="real-photo-frame real-photo-frame--team"><img src={assets.founders} alt="Bruna and Vini playing squash at Sol" /></figure>
      </section>
      <WaveDivider source="navy" destination="green" />
      <section className="home-rhythm home-rhythm--real">
        <figure className="recovery-collage" aria-label="Sol's sauna and cold plunge"><div className="recovery-collage__tile recovery-collage__tile--sauna"><img src={assets.sauna} alt="The sauna at Sol Squash" /></div><div className="recovery-collage__tile recovery-collage__tile--plunge"><img src={assets.coldPlunge} alt="The cold plunge at Sol Squash" /></div></figure>
        <div className="home-rhythm__copy"><p className="eyebrow eyebrow--cyan">RECOVER & TRAIN</p><h2>SAUNA, COLD<br />PLUNGE,<br /><em>SHOWERS AND</em><br />GYM.</h2><p>Get your sweat in, reset and leave feeling better than you came.</p><MagneticButton href="/new-to-squash" className="button--mango">TRY SQUASH</MagneticButton></div>
      </section>
      <WaveDivider source="green" destination="navy" />
      <section className="mural-feature">
        <div className="mural-feature__copy"><p className="eyebrow eyebrow--cyan">MORE THAN A GAME, A WAY OF LIFE.</p><h2>MIAMI'S<br />SQUASH<br /><em>HOME.</em></h2><p>Come for the squash. Stay for everything around it.</p><Link href="/play" className="text-link">PICK YOUR WAY IN <span>↗</span></Link></div>
        <figure className="mural-feature__image"><img src={assets.mural} alt="The Sol Squash front mural with squash-ball graphics and the club sun-face" /></figure>
      </section>
    </>
  );
}
