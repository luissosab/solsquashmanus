import { useState } from "react";
import { Check, Plus } from "lucide-react";
import {
  BrandWave,
  CourtMark,
  HalftoneDivider,
  RacketQMark,
} from "@/components/BrandMarks";
import { ExperienceDrawer } from "@/components/ExperienceDrawer";
import {
  PLAYBYPOINT_BEGINNER_CLINIC_URL,
  PLAYBYPOINT_FIRST_LESSON_URL,
} from "@/lib/booking";

const starts = [
  {
    title: "First Lesson with the Pros",
    price: "$39",
    meta: "30 minutes · one-to-one",
    copy: "Try squash privately with Sol founders and coaches Bruna or Vini. We provide the racket, teach the basics and get you playing immediately. Then stay for the sauna, cold plunge and showers. One introductory lesson per person.",
    href: PLAYBYPOINT_FIRST_LESSON_URL,
  },
  {
    title: "Beginner Squash Clinic",
    price: "$55",
    meta: "One hour · small group",
    copy: "For complete beginners and players still building their fundamentals. A welcoming, coached session covering movement, technique and rallies. Rackets are provided and no experience is necessary.",
    href: PLAYBYPOINT_BEGINNER_CLINIC_URL,
  },
];

export default function NewToSquash() {
  const [active, setActive] = useState<number | null>(null);
  const selected = active === null ? null : starts[active];
  return (
    <div className="bn-page">
      <section className="bn-page-hero bn-page-hero--beginner">
        <div>
          <p className="bn-kicker">Never played?</p>
          <h1>
            That makes this
            <br />
            <em>easy.</em>
          </h1>
          <p>
            No equipment, experience or squash vocabulary required. Come as you
            are; we'll get you rallying.
          </p>
          <a className="bn-button bn-button--mustard" href="#your-first-rally">
            Choose your first session
          </a>
        </div>
      </section>
      <HalftoneDivider destination="mustard" />
      <section className="bn-reassurance">
        <CourtMark className="bn-court-mark--reassurance" />
        <div className="bn-section-heading">
          <p className="bn-kicker">Why people get hooked</p>
          <h2>
            A workout that
            <br />
            feels like <em>play.</em>
          </h2>
        </div>
        <div className="bn-check-grid">
          <p>
            <Check />
            Indoor and weather-proof
          </p>
          <p>
            <Check />
            Only two people needed
          </p>
          <p>
            <Check />
            Fast to learn
          </p>
          <p>
            <Check />
            Full-body cardio and strategy
          </p>
          <p>
            <Check />
            Rackets provided
          </p>
          <p>
            <Check />
            Sauna and cold plunge after
          </p>
        </div>
      </section>
      <HalftoneDivider destination="cream" />
      <section className="bn-first-rally" id="your-first-rally">
        <div className="bn-photo bn-photo--wide">
          <img
            src="/media/sol-club-wide_b4871337.png"
            alt="The welcoming social space at Sol Squash"
          />
        </div>
        <div>
          <div className="bn-heading-with-mark">
            <div>
              <p className="bn-kicker">Your first rally</p>
              <h2>
                Choose the way
                <br />
                you want to <em>begin.</em>
              </h2>
            </div>
            <RacketQMark tone="green" />
          </div>
          {starts.map((item, index) => (
            <button
              className="bn-choice"
              key={item.title}
              onClick={() => setActive(index)}
            >
              <div>
                <span>{item.meta}</span>
                <h3>{item.title}</h3>
              </div>
              <strong>{item.price}</strong>
              <Plus />
            </button>
          ))}
        </div>
      </section>
      <HalftoneDivider destination="green" />
      <section className="bn-steps">
        <p className="bn-kicker">What happens next</p>
        <ol>
          <li>
            <span>01</span>
            <div>
              <h3>Choose your session</h3>
              <p>Private and focused, or social and coached.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Show up as you are</h3>
              <p>Wear comfortable sports clothes. We provide the racket.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Start playing</h3>
              <p>
                Your coach handles the rules and technique one rally at a time.
              </p>
            </div>
          </li>
        </ol>
      </section>
      <BrandWave destination="navy" />
      <ExperienceDrawer
        open={selected !== null}
        title={selected?.title ?? ""}
        eyebrow="Your first session"
        onClose={() => setActive(null)}
      >
        {selected && (
          <>
            <p className="bn-drawer__price">{selected.price}</p>
            <p>{selected.meta}</p>
            <p>{selected.copy}</p>
            <a
              className="bn-button bn-button--mustard"
              href={selected.href}
              target="_blank"
              rel="noreferrer"
            >
              See live times
            </a>
          </>
        )}
      </ExperienceDrawer>
    </div>
  );
}
