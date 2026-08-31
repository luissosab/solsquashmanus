import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ExperienceDrawer } from "@/components/ExperienceDrawer";
import { BrandWave, CourtMark, RacketQMark } from "@/components/BrandMarks";
import { PLAYBYPOINT_PRIVATE_LESSON_URL } from "@/lib/booking";

const profiles = [
  {
    name: "Bruna Marchesi",
    role: "Co-founder · Professional player · Coach",
    image: "/media/sol-bruna-profile_9b6e08d0.jpeg",
    bio: "Bruna represented Brazil internationally, competed on the PSA World Tour and has coached players across the UK, Europe and the USA. At Sol, she works with beginners, juniors and experienced players while shaping the club experience every day.",
    highlights:
      "Brazil national team · PSA World Tour · International coaching",
  },
  {
    name: "Vini Rodrigues",
    role: "Co-founder · Professional player · Coach",
    image: "/media/sol-vini-profile_e0ff7b8e.jpeg",
    bio: "Vini represented Brazil, competed professionally on the PSA World Tour and built a coaching career across several countries. At Sol, he combines elite experience with an accessible coaching style for every level.",
    highlights:
      "Brazil international · PSA World Tour · International coaching",
  },
  {
    name: "Frida",
    role: "Chief welcome officer",
    image: "/media/sol-frida-profile_cfa40671.jpeg",
    bio: "Frida is part of the everyday rhythm of Sol: greeting members, supervising the lounge and making sure nobody takes the club too seriously off court.",
    highlights: "Club culture · Member greetings · Lounge supervision",
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
      <BrandWave source="navy" destination="mustard" />
      <section className="bn-story-copy">
        <CourtMark className="bn-court-mark--story" />
        <p className="bn-kicker">The journey</p>
        <div>
          <h2>
            The club they
            <br />
            wanted to <em>belong to.</em>
          </h2>
          <p>
            Bruna and Vini met at a squash tournament in Brazil in 2015, moved
            to London together, competed on the PSA World Tour, and coached
            players of every level across the UK, Europe and the USA.
          </p>
          <p>
            After years of living the sport as athletes and coaches, they saw
            that Miami was missing a true home for squash: modern courts,
            serious training, an easy welcome for beginners, and enough life
            around the game to make people stay.
          </p>
          <p>
            Sol is that club. You will not only see their names on the
            website—you will find them coaching, playing, meeting members and
            shaping the experience every day.
          </p>
        </div>
      </section>
      <BrandWave source="mustard" destination="cream" />
      <section className="bn-team">
        <RacketQMark tone="orange" />
        <div className="bn-section-heading">
          <p className="bn-kicker">The people behind Sol</p>
          <h2>
            Meet the
            <br />
            <em>home team.</em>
          </h2>
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
      <BrandWave source="cream" destination="navy" />
      <section className="bn-values">
        <div>
          <p className="bn-kicker">What guides the club</p>
          <h2>
            Serious squash.
            <br />
            <em>No unnecessary barriers.</em>
          </h2>
        </div>
        <div>
          <article>
            <span>01</span>
            <h3>Welcoming</h3>
            <p>
              Your level should shape your experience, never your right to
              belong.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Progressive</h3>
            <p>
              Modern coaching, modern facilities and a better way to experience
              the sport.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Community</h3>
            <p>Matches matter. So do the conversations after them.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Joyful</h3>
            <p>
              Squash is demanding. The club around it should still feel alive.
            </p>
          </article>
        </div>
      </section>
      <ExperienceDrawer
        open={selected !== null}
        title={selected?.name ?? ""}
        eyebrow={selected?.role}
        onClose={() => setActive(null)}
      >
        {selected && (
          <>
            <p>{selected.bio}</p>
            <p>
              <strong>{selected.highlights}</strong>
            </p>
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
