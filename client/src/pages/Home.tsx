/**
 * Sol mural language: real club imagery, two-dot squash balls, subtle court outlines, palms, and colour fields form one welcoming Miami clubhouse.
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { WaveDivider } from "@/components/WaveDivider";

const assets = {
  court: "/media/sol-facility-glass-court_bc711772.png",
  blueCourt: "/media/sol-facility-blue-court_a3f6989d.png",
  introVideo: "/media/sol-squash-intro_5d0ba482.mp4",
  sauna: "/media/sol-sauna_23e752ac.png",
  clubFacility: "/media/sol-approved-general-facilities_ac64bd88.png",
  mural: "/media/sol-mural-feature_9dd29c1b.png",
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
        </div>
      </section>
      <WaveDivider source="navy" destination="navy" />
      <section className="home-paths" id="home-paths" aria-labelledby="home-paths-title">
        <img className="mural-sun mural-sun--home-paths" src="/media/sol-sun-repaired-orange_e644a385.png" alt="" aria-hidden="true" />
        <div className="home-paths__intro"><p className="eyebrow eyebrow--cyan">FIND YOUR WAY IN</p><h2 id="home-paths-title">WHAT BRINGS<br />YOU TO <em>SOL?</em></h2></div>
        <div className="home-paths__list">
          <Link href="/play" className="home-path-card home-path-card--play"><span>01</span><strong>PLAY</strong><p>Book a court, join a session or train with us. All levels welcome.</p><b>EXPLORE PLAY <i aria-hidden="true">↗</i></b></Link>
          <Link href="/new-to-squash" className="home-path-card home-path-card--new"><span>02</span><strong>NEW TO SQUASH</strong><p>No experience needed. Rackets provided. Come ready to move.</p><b>START HERE <i aria-hidden="true">↗</i></b></Link>
          <Link href="/memberships-and-prices" className="home-path-card home-path-card--member"><span>03</span><strong>MEMBERSHIPS &amp; PRICES</strong><p>Court time every day, the sauna, cold plunge and showers, and member pricing on everything else.</p><b>SEE MEMBERSHIPS <i aria-hidden="true">↗</i></b></Link>
        </div>
      </section>
      <WaveDivider source="navy" destination="mango" />
      <section className="club-intro club-intro--real club-intro--lifestyle" aria-labelledby="club-intro-title">
        <span className="squash-ball squash-ball--home-club" aria-hidden="true"><i /><i /></span>
        <div className="club-intro__section-intro"><h2 id="club-intro-title">THE CLUB</h2><p className="club-intro__promise">Come for the squash. Stay for everything around it.</p></div>
        <div className="club-intro__modules">
          <article className="club-intro__module club-intro__module--squash"><figure><img src={assets.court} alt="One of Sol Squash's full-glass courts" /></figure><div className="club-intro__club-card"><h3>SQUASH</h3><strong>5 Full-glass courts</strong><p>Book a court, join a session or train with us. All levels welcome.</p></div></article>
          <article className="club-intro__module club-intro__module--recover"><figure><img src={assets.sauna} alt="The sauna at Sol Squash" /></figure><div className="club-intro__club-card"><h3>RECOVER &amp; TRAIN</h3><strong>Sauna, cold plunge, showers and gym</strong><p>Get your sweat in, reset and leave feeling better than you came.</p></div></article>
          <article className="club-intro__module club-intro__module--stay"><figure><img src={assets.clubFacility} alt="The café, lounge, workspace and glass-court facilities at Sol Squash" /></figure><div className="club-intro__club-card"><h3>STAY &amp; CONNECT</h3><strong>Café, lounge and workspace</strong><p>Grab a drink, get some work done or hang around after your match. Sol is a club you actually want to stay in.</p></div></article>
        </div>
      </section>
      <WaveDivider source="mango" destination="navy" />
      <section className="mural-feature">
        <div className="mural-feature__copy"><h2>MIAMI'S<br />SQUASH<br /><em>HOME.</em></h2><p>MORE THAN A GAME, A WAY OF LIFE.</p><Link href="/play" className="text-link">PICK YOUR WAY IN <span>↗</span></Link></div>
        <figure className="mural-feature__image"><img src={assets.mural} alt="The Sol Squash front mural with squash-ball graphics and the club sun-face" /></figure>
      </section>
    </>
  );
}
