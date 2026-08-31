/** Complete decision support without recreating the old site's long linear pages. */
import { MagneticButton } from "./MagneticButton";
import { WaveDivider } from "./WaveDivider";
import {
  PLAYBYPOINT_BOOKING_URL,
  PLAYBYPOINT_SOL_CLUB_URL,
  PLAYBYPOINT_SOL_JUNIOR_MEMBERSHIP_URL,
  PLAYBYPOINT_SOL_JUNIOR_URL,
  PLAYBYPOINT_TASTE_OF_SOL_URL,
} from "@/lib/booking";

const packages = [
  {
    name: "Open Play",
    member: "5 for $100",
    memberNote: "$20 each · valid 2 months",
    guest: "5 for $250",
    guestNote: "$50 each · valid 2 months",
  },
  {
    name: "Group Sessions",
    member: "5 for $175",
    memberNote: "$35 each · valid 2 months",
    guest: "5 for $250",
    guestNote: "$50 each · valid 2 months",
  },
  {
    name: "Private Lessons",
    member: "Pay 5, get 6 · $625",
    memberNote: "$104 each · valid 3 months",
    guest: "Pay 5, get 6 · $725",
    guestNote: "$121 each · valid 3 months",
  },
];

export function TasteOfSolBlock() {
  return (
    <>
      <WaveDivider source="green" destination="navy" />
      <section className="pricing-section pricing-section--real pricing-section--merged-offers">
        <img
          className="mural-sun mural-sun--offers"
          src="/media/sol-sun-repaired-mustard_563e528f.png"
          alt=""
          aria-hidden="true"
        />
        <span
          className="squash-ball squash-ball--offer ball-shadow--light"
          aria-hidden="true"
        >
          <i />
          <i />
        </span>
        <div className="decision-offers__grid">
          <article className="decision-offer">
            <div className="pricing-heading">
              <p className="eyebrow eyebrow--cyan">
                WANT TO TRY BEFORE YOU COMMIT?
              </p>
              <h2>
                TASTE OF
                <br />
                <em>SOL.</em>
              </h2>
            </div>
            <div className="pricing-card">
              <div className="pricing-card__head">
                <span>15 DAYS</span>
                <strong>$99</strong>
              </div>
              <p>
                Two group sessions, a court booking with a guest, and a private
                lesson with Bruna or Vini. Enough to properly get a feel for the
                place before you commit.
              </p>
              <MagneticButton
                href={PLAYBYPOINT_TASTE_OF_SOL_URL}
                className="button--mango"
              >
                GET THE TASTE OF SOL
              </MagneticButton>
            </div>
          </article>
          <article className="decision-offer">
            <div className="pricing-heading">
              <p className="eyebrow eyebrow--cyan">PLAYING OFTEN?</p>
              <h2>
                JOIN THE
                <br />
                <em>CLUB.</em>
              </h2>
            </div>
            <div className="pricing-card">
              <div className="pricing-card__head">
                <span>SOL CLUB</span>
                <strong>MORE TIME ON COURT.</strong>
              </div>
              <p>
                Court time every day, the sauna, cold plunge and showers, and
                member pricing on everything else.
              </p>
              <MagneticButton
                href="/memberships-and-prices"
                className="button--mango"
              >
                SEE MEMBERSHIPS
              </MagneticButton>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export function SolClubDetails() {
  const benefits = [
    [
      "COURT EVERY DAY",
      "One hour included, any time. Extra hours are charged at member rates.",
    ],
    [
      "RECOVER & TRAIN",
      "Sauna, cold plunge, showers and gym whenever the club is open.",
    ],
    [
      "PLAY MORE",
      "Open Play $25, group sessions $40 and private lessons $125.",
    ],
    [
      "THE CLUB EXTRAS",
      "League and ladder entry, racket rental and one guest pass every month.",
    ],
    [
      "BOOK EARLIER",
      "Monthly members book seven days ahead. Annual members book ten.",
    ],
    [
      "BRING THE FAMILY",
      "5% off a second active family membership and 10% off three or more.",
    ],
  ];
  return (
    <section
      className="membership-details"
      aria-labelledby="membership-details-title"
    >
      <div className="membership-details__heading">
        <p className="eyebrow eyebrow--cyan">ONE MEMBERSHIP. FULL SOL.</p>
        <h2 id="membership-details-title">
          MORE THAN
          <br />
          <em>COURT TIME.</em>
        </h2>
        <p>
          An hour of court time every day, at any time—plus the spaces, pricing
          and access that make Sol feel like your club.
        </p>
      </div>
      <div className="membership-benefit-grid">
        {benefits.map(([name, copy], index) => (
          <article key={name}>
            <span>0{index + 1}</span>
            <h3>{name}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      <div className="membership-plan-strip">
        <div>
          <span>MONTHLY</span>
          <strong>$239</strong>
          <small>Plus taxes and fees · no initiation fee</small>
        </div>
        <div>
          <span>ANNUAL</span>
          <strong>$2,629</strong>
          <small>Paid in full · one month free</small>
        </div>
        <MagneticButton
          href={PLAYBYPOINT_SOL_CLUB_URL}
          className="button--mango"
        >
          JOIN SOL CLUB
        </MagneticButton>
      </div>
      <details className="disclosure-panel disclosure-panel--light">
        <summary>
          <span>GOOD TO KNOW</span>
          <strong>
            BOOKING, BILLING &amp; LEAVING <i aria-hidden="true">+</i>
          </strong>
        </summary>
        <div className="membership-rules">
          <article>
            <h3>BOOKING</h3>
            <p>
              Monthly members book seven days ahead, annual members ten and
              visitors three. Two active bookings at a time and one court
              booking a day. Cancellation windows appear on each booking.
            </p>
          </article>
          <article>
            <h3>BILLING</h3>
            <p>
              Monthly dues are charged on the same date each month. Annual
              membership is paid in full and includes one month free. All prices
              are plus taxes and fees.
            </p>
          </article>
          <article>
            <h3>LEAVING</h3>
            <p>
              Membership is month to month with 60 days' written notice to
              sol@solsquash.com. There is no initiation fee, so the notice
              period is the commitment.
            </p>
          </article>
          <article>
            <h3>IN MIAMI FOR THE SEASON?</h3>
            <p>
              Message Sol and the team will help identify the most appropriate
              option.
            </p>
          </article>
        </div>
      </details>
    </section>
  );
}

export function JuniorDecisionSupport() {
  return (
    <section id="junior-details" className="junior-details" aria-labelledby="junior-details-title">
      <div>
        <p className="eyebrow eyebrow--cyan">TWO PROGRAMMES · ALL LEVELS</p>
        <h2 id="junior-details-title">
          THEIR WAY
          <br />
          <em>INTO SQUASH.</em>
        </h2>
      </div>
      <div className="junior-program-grid">
        <article>
          <span>AGES 7–16</span>
          <h3>SOL JUNIORS</h3>
          <p>
            One-hour group sessions coached by Bruna and Vini. Seven sessions
            are included each month.
          </p>
        </article>
        <article>
          <span>AGES 4–7</span>
          <h3>MINI SQUASH</h3>
          <p>
            Forty-five-minute sessions created for younger players, with
            equipment and coaching adapted to their age.
          </p>
        </article>
      </div>
      <div className="junior-rate-strip">
        <span>
          EXTRA MEMBER SESSION <b>$40</b>
        </span>
        <span>
          NON-MEMBER DROP-IN <b>$50</b>
        </span>
        <span>
          JUNIOR MEMBER COURT <b>$20</b>
        </span>
      </div>
      <div className="junior-details__actions">
        <MagneticButton
          href={PLAYBYPOINT_SOL_JUNIOR_MEMBERSHIP_URL}
          className="button--mango"
        >
          JOIN SOL JUNIOR
        </MagneticButton>
        <MagneticButton
          href={PLAYBYPOINT_SOL_JUNIOR_URL}
          className="button--cyan"
        >
          SEE CURRENT TIMES
        </MagneticButton>
      </div>
    </section>
  );
}

export function JoinContinuationBlocks() {
  return (
    <>
      <WaveDivider source="mango" destination="green" />
      <section className="pricing-section pricing-section--real pricing-section--packages-comparison">
        <div className="pricing-heading">
          <p className="eyebrow eyebrow--cyan">ONCE YOU'RE PLAYING</p>
          <h2>
            PLAY MORE.
            <br />
            <em>PAY LESS.</em>
          </h2>
          <p className="section-summary">
            Packages are available to members and non-members. Choose the format
            you play most and keep the per-session price down.
          </p>
        </div>
        <div className="pricing-decision-stack">
          <div className="pricing-card">
            <div className="pricing-card__head">
              <span>PACKAGES</span>
              <strong>KEEP THE RALLY GOING.</strong>
            </div>
            <p>
              Open Play, Drills &amp; Matches, Clinics, Women Play and private
              lessons all have package options.
            </p>
            <MagneticButton href="/play" className="button--mango">
              SEE WAYS TO PLAY
            </MagneticButton>
          </div>
          <details className="disclosure-panel" open>
            <summary>
              <span>MEMBER AND NON-MEMBER</span>
              <strong>
                COMPARE EVERY PACKAGE <i aria-hidden="true">+</i>
              </strong>
            </summary>
            <div
              className="package-table"
              role="table"
              aria-label="Session package comparison"
            >
              <div className="package-table__head" role="row">
                <span role="columnheader">PACKAGE</span>
                <span role="columnheader">MEMBERS</span>
                <span role="columnheader">NON-MEMBERS</span>
              </div>
              {packages.map(item => (
                <div className="package-table__row" role="row" key={item.name}>
                  <strong role="cell">{item.name}</strong>
                  <span role="cell">
                    <b>{item.member}</b>
                    <small>{item.memberNote}</small>
                  </span>
                  <span role="cell">
                    <b>{item.guest}</b>
                    <small>{item.guestNote}</small>
                  </span>
                </div>
              ))}
              <p>
                Open Play runs three hours. Group sessions run one hour. Package
                validity begins at purchase; cancellation windows appear when
                booking.
              </p>
            </div>
          </details>
          <details className="disclosure-panel">
            <summary>
              <span>EVERYDAY PRICING</span>
              <strong>
                COMPARE EVERY PRICE <i aria-hidden="true">+</i>
              </strong>
            </summary>
            <div className="disclosure-panel__content">
              <div className="pricing-card">
                <div className="pricing-card__head">
                  <span>WAYS TO GET ON COURT</span>
                  <strong>WITH OR WITHOUT A MEMBERSHIP.</strong>
                </div>
                <div className="price-row">
                  <span>Court Access</span>
                  <b>From $20</b>
                </div>
                <div className="price-row">
                  <span>Open Play</span>
                  <b>$25 / $55</b>
                </div>
                <div className="price-row">
                  <span>Group Sessions</span>
                  <b>$40 / $55</b>
                </div>
                <div className="price-row">
                  <span>Private Lessons</span>
                  <b>$125 / $145</b>
                </div>
                <div className="price-row">
                  <span>Junior Sessions</span>
                  <b>$40 / $50</b>
                </div>
                <MagneticButton
                  href={PLAYBYPOINT_BOOKING_URL}
                  className="button--mango"
                >
                  BOOK A SESSION
                </MagneticButton>
              </div>
            </div>
          </details>
        </div>
      </section>
    </>
  );
}
