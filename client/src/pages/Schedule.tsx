import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import {
  BallMark,
  BrandWave,
  CourtMark,
  HalftoneDivider,
  RacketQMark,
} from "@/components/BrandMarks";
import {
  PLAYBYPOINT_BEGINNER_CLINIC_URL,
  PLAYBYPOINT_OPEN_PLAY_URL,
  PLAYBYPOINT_SESSIONS_URL,
  PLAYBYPOINT_SOL_JUNIOR_URL,
  PLAYBYPOINT_WEEKLY_SCHEDULE_URL,
} from "@/lib/booking";

const sessions = [
  {
    type: "Social play",
    title: "Open Play",
    copy: "Three hours of games, rotations and players matched by level.",
    price: "$25 members · $55 guests",
    href: PLAYBYPOINT_OPEN_PLAY_URL,
  },
  {
    type: "Coached",
    title: "Clinics & group sessions",
    copy: "Small-group drills, matches and coaching with Bruna or Vini.",
    price: "$40 members · $55 guests",
    href: PLAYBYPOINT_SESSIONS_URL,
  },
  {
    type: "First timers",
    title: "Beginner clinic",
    copy: "A welcoming one-hour group session. No experience or racket needed.",
    price: "$55",
    href: PLAYBYPOINT_BEGINNER_CLINIC_URL,
  },
  {
    type: "Ages 4–16",
    title: "Sol Junior",
    copy: "Mini Squash and junior group sessions for the next generation.",
    price: "$40 members · $50 guests",
    href: PLAYBYPOINT_SOL_JUNIOR_URL,
  },
];

export default function Schedule() {
  return (
    <div className="bn-page">
      <section className="bn-page-hero bn-page-hero--schedule">
        <div>
          <p className="bn-kicker">Sessions at Sol</p>
          <h1>
            Find your next
            <br />
            <em>rally.</em>
          </h1>
          <p>
            Understand every session here. Use the live calendar only when you
            are ready to choose a time.
          </p>
          <a
            className="bn-button bn-button--mustard"
            href={PLAYBYPOINT_WEEKLY_SCHEDULE_URL}
            target="_blank"
            rel="noreferrer"
          >
            Open the live week
          </a>
        </div>
      </section>
      <HalftoneDivider destination="cream" />
      <section className="bn-schedule-list">
        <CourtMark className="bn-court-mark--schedule" />
        <div className="bn-section-heading">
          <p className="bn-kicker">Choose by experience</p>
          <h2>
            What sounds good
            <br />
            <em>today?</em>
          </h2>
        </div>
        <div>
          {sessions.map((session, index) => (
            <article key={session.title}>
              <span>0{index + 1}</span>
              <div>
                <small>{session.type}</small>
                <h3>{session.title}</h3>
                <p>{session.copy}</p>
                <strong>{session.price}</strong>
              </div>
              <a
                href={session.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`See live times for ${session.title}`}
              >
                <ArrowRight />
              </a>
            </article>
          ))}
        </div>
      </section>
      <HalftoneDivider destination="orange" />
      <section className="bn-schedule-note">
        <BallMark
          tone="green"
          className="bn-accent-ball bn-accent-ball--schedule"
        />
        <div className="bn-heading-with-mark">
          <div>
            <p className="bn-kicker">Rather play on your own time?</p>
            <h2>
              Book a court
              <br />
              or train <em>one-to-one.</em>
            </h2>
          </div>
          <RacketQMark tone="navy" tilt="left-soft" />
        </div>
        <div>
          <p>
            The weekly schedule is for organized sessions. Court bookings and
            private lessons have their own live availability.
          </p>
          <Link className="bn-text-link" href="/play">
            Compare every way to play <ArrowRight />
          </Link>
        </div>
      </section>
      <BrandWave destination="navy" />
    </div>
  );
}
