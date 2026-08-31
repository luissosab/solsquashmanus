import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import {
  BrandWave,
  CourtMark,
  HalftoneDivider,
  RacketQMark,
} from "@/components/BrandMarks";

const paths = [
  {
    number: "01",
    title: "I want to play",
    copy: "Courts, open play, coached sessions and private lessons.",
    href: "/play",
    image: "/media/sol-facility-blue-court_a3f6989d.png",
  },
  {
    number: "02",
    title: "I've never played",
    copy: "A first lesson, a racket and a welcoming way onto court.",
    href: "/new-to-squash",
    image: "/media/sol-bruna-medals_a77858ba.jpeg",
  },
  {
    number: "03",
    title: "I'm comparing options",
    copy: "Membership, drop-in prices, packages and junior programmes.",
    href: "/memberships-and-prices",
    image: "/media/sol-club-wide_b4871337.png",
  },
  {
    number: "04",
    title: "What's on this week?",
    copy: "Choose a session, then see live times and availability.",
    href: "/schedule",
    image: "/media/sol-vini-match_ea7f6a9a.jpeg",
  },
];

export default function Home() {
  return (
    <div className="bn-page bn-home">
      <section className="bn-video-hero">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/media/sol-facility-glass-court_bc711772.png"
        >
          <source src="/media/sol-squash-intro_5d0ba482.mp4" type="video/mp4" />
        </video>
        <div className="bn-video-hero__veil" />
        <div className="bn-video-hero__content">
          <p className="bn-kicker">Little River · Miami</p>
          <h1>
            Miami's
            <br />
            squash <em>home.</em>
          </h1>
          <p>
            Five glass courts. Serious coaching. A club built for every level.
          </p>
          <div className="bn-actions">
            <Link className="bn-button bn-button--mustard" href="/play">
              Find your way to play
            </Link>
            <Link className="bn-text-link" href="/new-to-squash">
              Never played? Start here <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
      <HalftoneDivider destination="cream" />

      <section className="bn-journeys">
        <CourtMark className="bn-court-mark--journeys" />
        <div className="bn-section-heading">
          <p className="bn-kicker">Start with what you need</p>
          <h2>
            One club.
            <br />
            <em>Four ways in.</em>
          </h2>
        </div>
        <div className="bn-journey-list">
          {paths.map(path => (
            <Link href={path.href} className="bn-journey" key={path.title}>
              <img src={path.image} alt="" />
              <span className="bn-journey__veil" />
              <span>{path.number}</span>
              <div>
                <h3>{path.title}</h3>
                <p>{path.copy}</p>
              </div>
              <ArrowRight />
            </Link>
          ))}
        </div>
      </section>
      <HalftoneDivider destination="mustard" />

      <section className="bn-club-story">
        <div className="bn-photo bn-photo--tall">
          <img
            src="/media/sol-approved-general-facilities_ac64bd88.png"
            alt="Sol Squash courts, café and social spaces"
          />
        </div>
        <div className="bn-club-story__copy">
          <p className="bn-kicker">Come for the squash</p>
          <h2>
            Stay for everything <em>around it.</em>
          </h2>
          <p>
            Sol is five full-glass courts, but it is also the sauna, cold
            plunge, showers, gym, café, lounge and workspace waiting on the
            other side of your match.
          </p>
          <ul>
            <li>
              <strong>Play</strong>
              <span>Courts, sessions and coaching for every level.</span>
            </li>
            <li>
              <strong>Recover</strong>
              <span>Sauna, cold plunge, showers and gym.</span>
            </li>
            <li>
              <strong>Stay</strong>
              <span>Café, lounge and space to work or connect.</span>
            </li>
          </ul>
          <Link className="bn-text-link" href="/our-story">
            Meet the club <ArrowRight />
          </Link>
        </div>
      </section>

      <HalftoneDivider destination="green" />
      <section className="bn-mural-break">
        <img
          src="/media/sol-mural-feature_9dd29c1b.png"
          alt="Sol Squash's mural-inspired exterior"
        />
        <div>
          <div className="bn-heading-with-mark">
            <RacketQMark tone="mustard" />
            <p>
              The game is fast.
              <br />
              The welcome is easy.
            </p>
          </div>
          <Link className="bn-button bn-button--mustard" href="/schedule">
            See what's on
          </Link>
        </div>
      </section>
      <BrandWave destination="navy" />
    </div>
  );
}
