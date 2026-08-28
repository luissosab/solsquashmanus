/**
 * Sol mural language: real club imagery, two-dot squash balls, subtle court outlines, palms, and colour fields form one welcoming Miami clubhouse.
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { MagneticButton } from "@/components/MagneticButton";
import { WaveDivider } from "@/components/WaveDivider";

const assets = {
  court: "/manus-storage/sol-facility-glass-court_bc711772.png",
  blueCourt: "/manus-storage/sol-facility-blue-court_a3f6989d.png",
  introVideo: "/manus-storage/sol-squash-intro_5d0ba482.mp4",
  sauna: "/manus-storage/sol-sauna_23e752ac.png",
  coldPlunge: "/manus-storage/sol-cold-plunge_baaf4cf6.png",
  lounge: "/manus-storage/sol-founders-lounge_1745d40e.webp",
  mural: "/manus-storage/sol-mural-feature_9dd29c1b.png",
};

export default function Home() {
  return (
    <>
      <section className="home-hero home-hero--real">
        <div className="home-hero__video-frame" aria-hidden="true"><video className="home-hero__video" autoPlay loop muted playsInline poster={assets.court}><source src={assets.introVideo} type="video/mp4" /></video></div>
        <div className="home-hero__veil" />
        <span className="squash-ball squash-ball--hero" aria-hidden="true"><i /><i /></span>
        <div className="home-hero__copy">
          <motion.p className="eyebrow eyebrow--cyan" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>645 NW 72ND STREET · LITTLE RIVER</motion.p>
          <h1 aria-label="MIAMI'S SQUASH HOME."><motion.span initial={{ opacity: 0, y: 46 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 210, damping: 22, delay: 0.22 }}>MIAMI'S SQUASH HOME.</motion.span></h1>
          <p className="hero-tagline">BUILT BY PLAYERS. MADE FOR EVERYONE.</p>
          <MagneticButton href="#home-paths" className="button--mango">PICK YOUR WAY IN</MagneticButton>
        </div>
      </section>
      <section className="home-paths" id="home-paths" aria-labelledby="home-paths-title">
        <div className="home-paths__intro"><p className="eyebrow eyebrow--cyan">FIND YOUR WAY IN</p><h2 id="home-paths-title">WHAT BRINGS<br />YOU TO <em>SOL?</em></h2></div>
        <div className="home-paths__list">
          <Link href="/play" className="home-path-card home-path-card--play"><span>01</span><strong>PLAY</strong><p>Book a court, join a session or train with us. All levels welcome.</p><b>EXPLORE PLAY <i aria-hidden="true">↗</i></b></Link>
          <Link href="/new-to-squash" className="home-path-card home-path-card--new"><span>02</span><strong>NEW TO SQUASH</strong><p>No experience needed. Rackets provided. Come ready to move.</p><b>START HERE <i aria-hidden="true">↗</i></b></Link>
          <Link href="/memberships-and-prices" className="home-path-card home-path-card--member"><span>03</span><strong>MEMBERSHIPS &amp; PRICES</strong><p>Court time every day, the sauna, cold plunge and showers, and member pricing on everything else.</p><b>SEE MEMBERSHIPS <i aria-hidden="true">↗</i></b></Link>
        </div>
      </section>
      <WaveDivider source="navy" destination="mango" />
      <section className="club-intro club-intro--real club-intro--lifestyle" aria-labelledby="club-intro-title">
        <div className="club-intro__heading"><p>THE CLUB</p><h2 id="club-intro-title">Come for the<br />squash. Stay for<br />everything around it.</h2></div>
        <div className="club-intro__lifestyle-images" aria-label="Sol Squash club spaces">
          <figure><img src={assets.sauna} alt="The sauna at Sol Squash" /></figure>
          <figure><img src={assets.lounge} alt="The lounge and workspace at Sol Squash" /></figure>
          <figure><img src={assets.coldPlunge} alt="The cold plunge at Sol Squash" /></figure>
        </div>
        <div className="club-intro__club-cards">
          <article className="club-intro__club-card"><h3>SQUASH</h3><strong>5 Full-glass courts</strong><p>Book a court, join a session or train with us. All levels welcome.</p></article>
          <article className="club-intro__club-card"><h3>RECOVER &amp; TRAIN</h3><strong>Sauna, cold plunge, showers and gym</strong><p>Get your sweat in, reset and leave feeling better than you came.</p></article>
          <article className="club-intro__club-card"><h3>STAY &amp; CONNECT</h3><strong>Café, lounge and workspace</strong><p>Grab a drink, get some work done or hang around after your match. Sol is a club you actually want to stay in.</p></article>
        </div>
      </section>
      <WaveDivider source="mango" destination="navy" />
      <section className="mural-feature">
        <div className="mural-feature__copy"><p className="eyebrow eyebrow--cyan">MORE THAN A GAME, A WAY OF LIFE.</p><h2>MIAMI'S<br />SQUASH<br /><em>HOME.</em></h2><p>Come for the squash. Stay for everything around it.</p><Link href="/play" className="text-link">PICK YOUR WAY IN <span>↗</span></Link></div>
        <figure className="mural-feature__image"><img src={assets.mural} alt="The Sol Squash front mural with squash-ball graphics and the club sun-face" /></figure>
      </section>
    </>
  );
}
