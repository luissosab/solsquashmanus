import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ExperienceDrawer } from "@/components/ExperienceDrawer";
import {
  BallMark,
  BrandWave,
  CourtMark,
  HalftoneDivider,
  RacketQMark,
} from "@/components/BrandMarks";
import { PLAYBYPOINT_PRIVATE_LESSON_URL } from "@/lib/booking";

const profiles = [
  {
    name: "Bruna Marchesi",
    role: "Co-founder · Professional player · Coach",
    image: "/media/sol-bruna-profile_9b6e08d0.jpeg",
    bio: "Bruna came to squash later—but when she did, she went all in. After graduating from university in London, she returned to Brazil and walked into the squash tournament where she met Vini. He became her coach. She turned professional, represented Brazil and Italy internationally, reached a career-high world ranking of #98, and competed at the PSA World Championships. Because she discovered squash as an adult and took it all the way to the professional tour, she understands every stage of the journey. On court she brings energy, presence and genuine connection.",
    highlights: ["#98 world ranking", "PSA World Tour", "2 nations"],
    credentials: [
      "England Squash Level 2",
      "US Squash Coach Pass",
      "SafeSport Certified",
      "English · Portuguese",
    ],
  },
  {
    name: "Vini Rodrigues",
    role: "Co-founder · Professional player · Coach",
    image: "/media/sol-vini-profile_e0ff7b8e.jpeg",
    bio: "Vini picked up a racket at seven years old and never put it down. Self-taught from the start, he turned professional, represented the Brazilian National Team for years, reached a career-high world ranking of #132, and won bronze at the 2011 Pan American Games in Guadalajara. He built more than two decades of coaching experience alongside his playing career and reached the final of the PSA World Tour event in Moscow in 2018. He started coaching early to fund his professional career—and what began as necessity became a true calling.",
    highlights: [
      "#132 world ranking",
      "20+ years coaching",
      "Pan Am bronze 2011",
    ],
    credentials: [
      "WSF Level 2",
      "US Squash Level 2",
      "England Squash Level 2",
      "SafeSport Certified",
      "English · Portuguese · Spanish",
    ],
  },
  {
    name: "Frida",
    role: "Chief welcome officer",
    image: "/media/sol-frida-profile_cfa40671.jpeg",
    bio: "Frida has been part of the story since Brazil. She survived the move to London and now patrols Sol like she owns the place—which, honestly, she kind of does. She takes her naps seriously, loves chasing squash balls, and has been known to jump on court mid-session when she sees an opportunity she cannot ignore. She greets everyone who walks through the door.",
    highlights: ["Always on duty", "Ball chaser", "Pure Sol energy"],
    credentials: ["Official staff member", "Head of Court Security"],
  },
];

export default function OurStory() {
  const [active, setActive] = useState<number | null>(null);
  const selected = active === null ? null : profiles[active];
  return (
    <div className="bn-page">
      <section className="bn-story-hero">
        <img
          src="/media/sol-team_28f84027.jpeg"
          alt="Bruna, Vini and Frida on a Sol court"
        />
        <div className="bn-story-hero__veil" />
        <div>
          <p className="bn-kicker">From Brazil to Little River</p>
          <h1>
            Built by players.
            <br />
            <em>Made for everyone.</em>
          </h1>
        </div>
      </section>
      <HalftoneDivider destination="mustard" />
      <section className="bn-story-copy" id="founders">
        <CourtMark className="bn-court-mark--story" />
        <p className="bn-kicker">The journey</p>
        <div>
          <h2>
            From Brazil.
            <br />
            To London.
            <br />
            <em>To Little River.</em>
          </h2>
          <p>
            Sol Squash did not start with a business plan. It started with a
            sport that changed two lives—and a shared belief that squash
            deserves a real home in Miami.
          </p>
          <p>
            Bruna and Vini met at a squash tournament in Brazil in 2015. They
            moved to London together, competed on the PSA World Tour, and
            coached players of every level across the UK, Europe and the USA.
            After years of living the sport as athletes, coaches and builders,
            they decided to create the modern, welcoming squash home Miami was
            missing.
          </p>
          <p>
            They wanted to share squash through their eyes: the joy, the
            challenge and the connection. Seeing people fall in love with the
            sport the way they did drives everything at Sol. You will find them
            coaching, playing, meeting members and shaping the club every day.
          </p>
        </div>
        <BallMark
          tone="cyan"
          className="bn-accent-ball bn-accent-ball--story"
        />
      </section>
      <HalftoneDivider destination="cream" />
      <section className="bn-team">
        <div className="bn-heading-with-mark">
          <div className="bn-section-heading">
            <p className="bn-kicker">The people behind Sol</p>
            <h2>
              Meet the
              <br />
              <em>home team.</em>
            </h2>
          </div>
          <RacketQMark tone="orange" tilt="left" />
        </div>
        <div className="bn-team-grid">
          {profiles.map((profile, index) => (
            <button key={profile.name} onClick={() => setActive(index)}>
              <img src={profile.image} alt={profile.name} />
              <span>0{index + 1}</span>
              <div>
                <h3>{profile.name}</h3>
                <p>{profile.role}</p>
                <strong>
                  Read profile <ArrowRight />
                </strong>
              </div>
            </button>
          ))}
        </div>
      </section>
      <HalftoneDivider destination="green" />
      <section className="bn-values" id="values">
        <BallMark
          tone="orange"
          className="bn-accent-ball bn-accent-ball--values"
        />
        <div>
          <h2>
            What Sol is <em>really</em> about.
          </h2>
        </div>
        <div>
          <article>
            <span>01</span>
            <h3>Community First</h3>
            <p>
              Everyone belongs here — from first-timers to competitive players.
              What matters is how you feel when you walk in.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Excellence on Court</h3>
            <p>
              We’ve competed at the highest level. That standard shows up in
              every lesson, session, and interaction at Sol.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Genuine Care</h3>
            <p>
              We truly connect with the people we work with. We’re invested in
              your growth, on and off the court.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Squash for Miami</h3>
            <p>
              Dynamic, challenging, endlessly fun — Miami is just getting
              started with this sport and we’re here for all of it.
            </p>
          </article>
        </div>
      </section>
      <BrandWave destination="navy" />
      <ExperienceDrawer
        open={selected !== null}
        title={selected?.name ?? ""}
        eyebrow={selected?.role}
        onClose={() => setActive(null)}
      >
        {selected && (
          <>
            <p>{selected.bio}</p>
            <div className="bn-profile-drawer__facts">
              <div>
                <span>Career highlights</span>
                {selected.highlights.map(item => (
                  <strong key={item}>{item}</strong>
                ))}
              </div>
              <div>
                <span>Credentials</span>
                {selected.credentials.map(item => (
                  <strong key={item}>{item}</strong>
                ))}
              </div>
            </div>
            {active !== 2 && (
              <a
                className="bn-button bn-button--mustard"
                href={PLAYBYPOINT_PRIVATE_LESSON_URL}
                target="_blank"
                rel="noreferrer"
              >
                Book a lesson
              </a>
            )}
          </>
        )}
      </ExperienceDrawer>
    </div>
  );
}
