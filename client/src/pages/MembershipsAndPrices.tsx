import { Check, Plus } from "lucide-react";
import {
  BallMark,
  BrandWave,
  CourtMark,
  HalftoneDivider,
  RacketQMark,
} from "@/components/BrandMarks";
import {
  PLAYBYPOINT_BOOKING_URL,
  PLAYBYPOINT_SOL_CLUB_URL,
  PLAYBYPOINT_SOL_JUNIOR_MEMBERSHIP_URL,
  PLAYBYPOINT_SOL_JUNIOR_URL,
} from "@/lib/booking";

const benefits = [
  "One hour of court time every day, at any time",
  "Sauna, cold plunge, showers and gym",
  "Member prices on Open Play, groups and lessons",
  "League and ladder entry plus racket rental",
  "One guest pass every month",
  "Seven-day booking window monthly; ten days annual",
];
const packages = [
  [
    "Open Play",
    "5 for $100",
    "$20 each · 2 months",
    "5 for $250",
    "$50 each · 2 months",
  ],
  [
    "Group sessions",
    "5 for $175",
    "$35 each · 2 months",
    "5 for $250",
    "$50 each · 2 months",
  ],
  [
    "Private lessons",
    "6 for $625",
    "$104 each · 3 months",
    "6 for $725",
    "$121 each · 3 months",
  ],
];

export default function MembershipsAndPrices() {
  return (
    <div className="bn-page">
      <section className="bn-page-hero bn-page-hero--membership">
        <div>
          <p className="bn-kicker">Prices & membership</p>
          <h1>
            Play once.
            <br />
            Or make it <em>yours.</em>
          </h1>
          <p>
            Compare drop-in play, packages and full membership without leaving
            Sol's website.
          </p>
          <a className="bn-button bn-button--mustard" href="#compare">
            Compare options
          </a>
        </div>
      </section>
      <HalftoneDivider destination="navy" />
      <section className="bn-membership" id="compare">
        <CourtMark className="bn-court-mark--membership" />
        <div className="bn-membership__lead">
          <p className="bn-kicker">Sol Club</p>
          <h2>
            More than
            <br />
            <em>court time.</em>
          </h2>
          <p>
            An hour on court every day—plus the spaces, pricing and access that
            make Sol feel like your club.
          </p>
          <div className="bn-membership__prices">
            <div>
              <span>Monthly</span>
              <strong>$239</strong>
              <small>Plus taxes and fees · no initiation fee</small>
            </div>
            <div>
              <span>Annual</span>
              <strong>$2,629</strong>
              <small>Paid in full · one month free</small>
            </div>
          </div>
          <a
            className="bn-button bn-button--mustard"
            href={PLAYBYPOINT_SOL_CLUB_URL}
            target="_blank"
            rel="noreferrer"
          >
            Join Sol Club
          </a>
        </div>
        <div className="bn-benefits">
          {benefits.map(item => (
            <p key={item}>
              <Check />
              {item}
            </p>
          ))}
          <details>
            <summary>
              Booking, billing and leaving <Plus />
            </summary>
            <div>
              <p>
                <strong>Booking.</strong> Two active bookings at a time and one
                court booking a day. Cancellation windows appear on each
                booking.
              </p>
              <p>
                <strong>Billing.</strong> Monthly dues charge on the same date
                each month. Annual membership is paid in full.
              </p>
              <p>
                <strong>Leaving.</strong> Month to month with 60 days' written
                notice to sol@solsquash.com.
              </p>
              <p>
                <strong>Family.</strong> 5% off a second active family
                membership; 10% off three or more.
              </p>
              <p>
                <strong>Seasonal?</strong> Message Sol and the team will help
                identify the right option.
              </p>
            </div>
          </details>
        </div>
      </section>
      <HalftoneDivider destination="mustard" />
      <section className="bn-price-compare" id="everyday-pricing">
        <div className="bn-heading-with-mark">
          <div className="bn-section-heading">
            <p className="bn-kicker">Everyday pricing</p>
            <h2>
              With a membership.
              <br />
              <em>Or without one.</em>
            </h2>
          </div>
          <RacketQMark tone="navy" tilt="right" />
        </div>
        <div className="bn-price-table" role="table">
          <div className="bn-price-table__head" role="row">
            <span>Experience</span>
            <span>Member</span>
            <span>Guest</span>
          </div>
          {[
            ["Court access", "From $20", "From $40"],
            ["Open Play", "$25", "$55"],
            ["Group sessions", "$40", "$55"],
            ["Private lessons", "$125", "$145"],
            ["Junior sessions", "$40", "$50"],
          ].map(row => (
            <div role="row" key={row[0]}>
              {row.map(cell => (
                <span role="cell" key={cell}>
                  {cell}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
      <HalftoneDivider destination="teal" />
      <section className="bn-packages">
        <BallMark
          tone="orange"
          className="bn-accent-ball bn-accent-ball--membership"
        />
        <div>
          <p className="bn-kicker">Playing regularly?</p>
          <h2>
            Packages bring the
            <br />
            per-session price <em>down.</em>
          </h2>
          <p>
            Validity begins at purchase. Cancellation windows appear when
            booking.
          </p>
        </div>
        <div className="bn-package-list">
          {packages.map(row => (
            <details key={row[0]}>
              <summary>
                <span>{row[0]}</span>
                <Plus />
              </summary>
              <div>
                <p>
                  <small>Members</small>
                  <strong>{row[1]}</strong>
                  <span>{row[2]}</span>
                </p>
                <p>
                  <small>Non-members</small>
                  <strong>{row[3]}</strong>
                  <span>{row[4]}</span>
                </p>
              </div>
            </details>
          ))}
          <a
            className="bn-button bn-button--mustard"
            href={PLAYBYPOINT_BOOKING_URL}
            target="_blank"
            rel="noreferrer"
          >
            Choose a package
          </a>
        </div>
      </section>
      <HalftoneDivider destination="orange" />
      <section className="bn-juniors" id="juniors">
        <div>
          <p className="bn-kicker">Ages 4–16</p>
          <h2>
            Their way
            <br />
            <em>into squash.</em>
          </h2>
          <p>
            Sol Juniors offers one-hour sessions for ages 7–16. Mini Squash
            gives ages 4–7 forty-five minutes of age-appropriate coaching. Seven
            sessions are included each month.
          </p>
          <div className="bn-actions">
            <a
              className="bn-button bn-button--mustard"
              href={PLAYBYPOINT_SOL_JUNIOR_MEMBERSHIP_URL}
              target="_blank"
              rel="noreferrer"
            >
              Join Sol Junior
            </a>
            <a
              className="bn-text-link"
              href={PLAYBYPOINT_SOL_JUNIOR_URL}
              target="_blank"
              rel="noreferrer"
            >
              See current times
            </a>
          </div>
        </div>
        <img
          src="/media/sol-bruna-medals_a77858ba.jpeg"
          alt="Bruna with competition medals"
        />
      </section>
      <BrandWave destination="navy" />
    </div>
  );
}
