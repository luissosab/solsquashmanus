import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { Link } from "wouter";
import {
  BallMark,
  BrandWave,
  CourtMark,
  RacketQMark,
} from "@/components/BrandMarks";
import { ExperienceDrawer } from "@/components/ExperienceDrawer";
import {
  PLAYBYPOINT_COURT_URL,
  PLAYBYPOINT_OPEN_PLAY_URL,
  PLAYBYPOINT_PRIVATE_LESSON_URL,
  PLAYBYPOINT_SESSIONS_URL,
  PLAYBYPOINT_TASTE_OF_SOL_URL,
} from "@/lib/booking";

const ways = [
  {
    title: "Book a court",
    label: "On your time",
    summary: "Reserve a full-glass court and play your own match.",
    detail:
      "Visitors book three days ahead. Monthly members book seven days ahead and annual members ten. Two active bookings at a time and one court booking per day. Members receive one included hour every day; additional time is charged at the member rate.",
    price: "From $20",
    href: PLAYBYPOINT_COURT_URL,
  },
  {
    title: "Open Play",
    label: "Social competition",
    summary: "Three hours of rotating games, matched by level.",
    detail:
      "Come alone and leave with matches. Sol organizes rotations and helps players find the right level. Open Play is $25 for members and $55 for non-members. Five-session packages are $100 for members and $250 for non-members, valid for two months.",
    price: "$25 / $55",
    href: PLAYBYPOINT_OPEN_PLAY_URL,
  },
  {
    title: "Group sessions",
    label: "Train together",
    summary: "Drills, clinics and coached match play with Bruna or Vini.",
    detail:
      "Small groups combine technical work, movement, drills and match play. Group sessions are $40 for members and $55 for non-members. Five-session packages are $175 for members and $250 for non-members, valid for two months.",
    price: "$40 / $55",
    href: PLAYBYPOINT_SESSIONS_URL,
  },
  {
    title: "Private lessons",
    label: "Focused coaching",
    summary: "One-to-one coaching shaped around your game.",
    detail:
      "Train directly with Bruna or Vini. Lessons are $125 for members and $145 for non-members. Private-lesson packages let you pay for five and receive six: $625 for members or $725 for non-members, valid for three months.",
    price: "$125 / $145",
    href: PLAYBYPOINT_PRIVATE_LESSON_URL,
  },
];

export default function Play() {
  const [active, setActive] = useState<number | null>(null);
  const selected = active === null ? null : ways[active];
  return (
    <div className="bn-page">
      <section className="bn-page-hero bn-page-hero--play">
        <div>
          <p className="bn-kicker">Play at Sol</p>
          <h1>
            Your game.
            <br />
            <em>Your way in.</em>
          </h1>
          <p>
            Book your own court, find a social match, train in a group or work
            one-to-one with the pros.
          </p>
          <a className="bn-button bn-button--mustard" href="#ways-to-play">
            Choose how to play
          </a>
        </div>
        <BallMark tone="green" />
      </section>
      <BrandWave source="navy" destination="cream" />
      <section className="bn-offerings" id="ways-to-play">
        <CourtMark className="bn-court-mark--offerings" />
        <div className="bn-section-heading">
          <p className="bn-kicker">Everything you need to decide</p>
          <h2>
            Pick the experience.
            <br />
            <em>Then book it.</em>
          </h2>
          <p>
            Prices, formats and what to expect stay here. Playbypoint only
            handles the final booking and payment.
          </p>
        </div>
        <RacketQMark tone="orange" />
        <div className="bn-offering-list">
          {ways.map((way, index) => (
            <button
              key={way.title}
              className="bn-offering-row"
              onClick={() => setActive(index)}
            >
              <span>0{index + 1}</span>
              <div>
                <small>{way.label}</small>
                <h3>{way.title}</h3>
                <p>{way.summary}</p>
              </div>
              <strong>{way.price}</strong>
              <Plus />
            </button>
          ))}
        </div>
      </section>
      <BrandWave source="cream" destination="teal" />
      <section className="bn-feature-split">
        <div className="bn-photo">
          <img
            src="/media/sol-founders-lounge_1745d40e.webp"
            alt="Bruna and Vini at Sol Squash"
          />
        </div>
        <div>
          <p className="bn-kicker">Want to try the whole club?</p>
          <h2>
            A proper
            <br />
            <em>Taste of Sol.</em>
          </h2>
          <p>
            <strong>15 days · $99</strong>
          </p>
          <p>
            Two group sessions, one court booking with a guest, and a private
            lesson with Bruna or Vini. Enough time to experience the courts,
            coaching and everything around them before you commit.
          </p>
          <a
            className="bn-button bn-button--mustard"
            href={PLAYBYPOINT_TASTE_OF_SOL_URL}
            target="_blank"
            rel="noreferrer"
          >
            Get the Taste of Sol
          </a>
        </div>
      </section>
      <BrandWave source="teal" destination="orange" />
      <section className="bn-next-step">
        <p>Not sure where your game belongs?</p>
        <Link className="bn-text-link" href="/schedule">
          Explore session types <ArrowRight />
        </Link>
        <Link className="bn-text-link" href="/new-to-squash">
          First time? Start here <ArrowRight />
        </Link>
      </section>
      <ExperienceDrawer
        open={selected !== null}
        title={selected?.title ?? ""}
        eyebrow={selected?.label}
        onClose={() => setActive(null)}
      >
        {selected && (
          <>
            <p className="bn-drawer__price">{selected.price}</p>
            <p>{selected.detail}</p>
            <a
              className="bn-button bn-button--mustard"
              href={selected.href}
              target="_blank"
              rel="noreferrer"
            >
              Choose a live time
            </a>
          </>
        )}
      </ExperienceDrawer>
    </div>
  );
}
