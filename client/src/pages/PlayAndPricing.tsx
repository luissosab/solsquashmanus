/**
 * Sol mural language: play, rates, and every FAQ answer are grouped as welcoming club notices rather than a dense information dump.
 */
import { motion } from "framer-motion";
import { Info, Plus, X } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MagneticButton } from "@/components/MagneticButton";
import { WaveDivider } from "@/components/WaveDivider";
import {
  JoinContinuationBlocks,
  JuniorDecisionSupport,
  SolClubDetails,
  TasteOfSolBlock,
} from "@/components/StructuralContentBlocks";
import data from "@/lib/mock-playbypoint.json";
import {
  PLAYBYPOINT_BOOKING_URL,
  PLAYBYPOINT_COURT_URL,
  PLAYBYPOINT_OPEN_PLAY_URL,
  PLAYBYPOINT_PRIVATE_LESSON_URL,
  PLAYBYPOINT_SESSIONS_URL,
  PLAYBYPOINT_SOL_CLUB_URL,
  PLAYBYPOINT_SOL_JUNIOR_MEMBERSHIP_URL,
} from "@/lib/booking";
import { Link } from "wouter";

const waysToPlay = [
  {
    name: "Book a Court",
    short: "Your court, your hour.",
    long: "Book for one, two or up to three players. Play with a friend, another Sol player or rotate with a group—no membership required.",
    detail: "MAKE A RALLY YOUR OWN",
    action: "BOOK A COURT",
    href: PLAYBYPOINT_COURT_URL,
  },
  {
    name: "Open Play",
    short: "Our social squash mixer.",
    long: "Three hours of games, court rotations and players matched by level. The easiest way to meet people and play when you do not already have a partner.",
    detail: "MEET YOUR NEXT RALLY PARTNER",
    action: "FIND OPEN PLAY",
    href: PLAYBYPOINT_OPEN_PLAY_URL,
  },
  {
    name: "Coached Sessions",
    short: "Train in a small group with Bruna or Vini.",
    long: "Drills & Matches, Clinics and Women Play combine coaching, repetition and match play so you can work on your game and put it into practice.",
    detail: "LEARN, PLAY, REPEAT",
    action: "SEE COACHED SESSIONS",
    href: PLAYBYPOINT_SESSIONS_URL,
  },
  {
    name: "Private Lessons",
    short: "Your game. Our full attention.",
    long: "One-on-one with Bruna or Vini, built around your level, goals and what you want from the game. Train a skill or book a proper match with a pro.",
    detail: "ONE-ON-ONE ON COURT",
    action: "BOOK A PRIVATE LESSON",
    href: PLAYBYPOINT_PRIVATE_LESSON_URL,
  },
  {
    name: "Juniors",
    short: "Ages 4 to 16. All levels welcome.",
    long: "Sol Juniors and Mini Squash are split by age, coached by Bruna and Vini, with member and drop-in ways to join.",
    detail: "THE NEXT GENERATION",
    action: "SEE JUNIOR MEMBERSHIPS",
    href: "/memberships-and-prices#junior-details",
  },
];

const comparisons = [
  {
    label: "Court Access",
    guest: "$120/court · up to 3",
    member: "Included (1 hr/day).",
    tip: "Solo booking $60. Extra member hours $20 a player.",
  },
  {
    label: "Open Play",
    guest: `$${data.pricing.dropIn.openPlay}`,
    member: `$${data.pricing.solClub.openPlay}`,
  },
  {
    label: "Clinics",
    guest: `$${data.pricing.dropIn.clinic}`,
    member: `$${data.pricing.solClub.clinic}`,
  },
  {
    label: "Private Lessons",
    guest: `$${data.pricing.dropIn.lesson}`,
    member: `$${data.pricing.solClub.lesson}`,
  },
  { label: "Sauna/Plunge", guest: "Not Included", member: "Included." },
];

const faqTopics = [
  {
    id: "basics",
    label: "THE BASICS",
    cue: "THE CLUB, AT A GLANCE",
    questions: [
      [
        "Who are Bruna and Vini?",
        "Bruna Marchesi and Vini Rodrigues are professional squash players, coaches, and the husband-and-wife team behind Sol Squash. They met through squash, both represented Brazil internationally, and competed around the world on the PSA World Tour. After spending their lives playing, competing, and coaching, they saw that Miami was missing a true home for the sport: a modern club where serious players could train, new players could discover squash, and everyone could feel part of the community. They created Sol to be the kind of club they always wanted to belong to—welcoming, energetic, social, and built by people who are on the courts every day. You will not just see Bruna and Vini’s names on the website. You will find them coaching sessions, playing matches, meeting members, and helping shape the Sol experience every day.",
      ],
      [
        "What is Sol Squash?",
        "Sol Squash is Miami’s first dedicated squash club, created to give the sport a modern home in the city and introduce more people to everything that makes squash so addictive. Located in Little River, Sol has five squash courts, professional coaching, group sessions, open play, leagues, a gym, sauna, cold plunge, showers, café, lounge, and coworking spaces. It is a place to come for a match or a workout—and stay for everything that happens around it. Whether you have played for years or have never held a racket, there is a way to play at Sol. No experience, partner, or equipment required.",
      ],
      [
        "Where are you located?",
        "We're in Little River, Miami at 645 NW 72nd Street, Miami, FL 33150. We have our own parking on site and street parking is also available nearby.",
      ],
      [
        "Is there parking?",
        "Yes — we have our own parking for players at the club, and there's street parking nearby on NW 72nd Street.",
      ],
      [
        "Do I need to book in advance, or can I just show up?",
        "Book in advance. Courts, sessions and lessons all go through book.solsquash.com, so your court is ready and waiting when you arrive.",
      ],
      [
        "What are your opening hours?",
        "Our regular hours are Monday to Thursday 6am–10pm, Friday 6am–5pm, and Saturday to Sunday 8am–5pm. Summer hours shift a little. Everything at Sol runs on bookings — courts, sessions and lessons — so the live schedule is always the best guide to what's on and when. Book or message us before you come and we'll have everything ready for you.",
      ],
      [
        "Can I book a game with Bruna or Vini?",
        "Yes, whatever level you are. Book a private session and tell us you'd rather play than be taught — same booking, same rate. Some people come to fix their backhand. Some come for a good game and a proper sweat. We're up for both.",
      ],
      [
        "Do you sell session packs?",
        "Yes. Buy five and pay less for each one, for members and non-members. Packs cover Open Play, Drills & Matches, Clinics, Women Play and private lessons. Message us and we'll point you to the best fit.",
      ],
      [
        "Do you have a WhatsApp community?",
        "Yes, and it's where most of the club chat happens. We post announcements and club news there, and there are groups for organizing matches and games between members.",
      ],
    ],
  },
  {
    id: "ways",
    label: "HOW IT WORKS",
    cue: "HOW YOU CAN GET ON COURT",
    questions: [
      [
        "Can I play squash at Sol without a membership?",
        "Yes. You don't need a membership to play at Sol. Book a court, come to open play, join a coached session or take a private lesson. Find out more here.",
      ],
      [
        "How much does it cost to book a squash court in Miami?",
        "A court is $120 for one hour, for up to three players — that's $60 each for two people, or $40 each for three. On your own it's $60. Members get an hour of court time included every day and book extras courts at member rates ($20).",
      ],
      [
        "What is open play?",
        "Our social squash mixer. Three hours of games, court rotations and players matched by level. It's $25 and $55 to non-members. It's the easiest way to meet people and play when you don't already have a partner.",
      ],
      [
        "What coaching options do you have?",
        "Group sessions — Drills & Matches, Clinics and Women Play. Small groups on court with Bruna or Vini, $55 a session or $40 for members. Private lessons — one-on-one, 45 minutes, built around what you want to work on. $145, or $125 for members.",
      ],
      [
        "Is there a way to try Sol before joining?",
        "Yes — Taste of Sol. 15 days for $99: two group sessions, a court booking with a guest, and a private lesson with Bruna or Vini. Enough to properly get a feel for the place before you commit. https://book.solsquash.com/memberships/11542",
      ],
    ],
  },
  {
    id: "never",
    label: "NEVER PLAYED",
    cue: "YOUR FIRST RALLY",
    questions: [
      [
        "I've never played squash before — is Sol for me?",
        "Absolutely. Start with a First Lesson with the Pros — thirty minutes on court, one-on-one with Bruna or Vini, for $39. We provide the racket, show you the basics and get you playing from the start. No experience needed and no pressure. One per person. If you'd rather start in a group, the Beginner Squash Clinic is an hour with a small group, for people new to the game and anyone still building their fundamentals.",
      ],
      [
        "What should I wear to play squash?",
        "For shoes, the easy answer: tennis, padel, pickleball or volleyball shoes are all perfect. On courts 1–4 they need to be non-marking. On our blue court (Court 5), any clean sports shoes work. If you don't have a pair of those, please don't wear high-top shoes — squash needs a low, flat sole. Bring clean trainers and we'll check them with you on arrival.",
      ],
      [
        "Do I need to bring my own racket?",
        "No. Racket rental is complimentary for members and included in the court booking price for everyone else. Just show up.",
      ],
      [
        "How old do you have to be to play?",
        "Any age. Our juniors start at four in Mini Squash, and our first lesson is open to any level and all ages.",
      ],
    ],
  },
  {
    id: "joining",
    label: "JOINING SOL",
    cue: "MEMBERSHIP, WITHOUT MYSTERY",
    questions: [
      [
        "How much is a squash membership in Miami?",
        "Sol Club is $239 a month, or $2,629 a year ($219 per month) — you get one month free. Plus taxes and fees. There's no initiation fee.",
      ],
      [
        "What's included in a Sol Club membership?",
        "An hour of court time every day, at any time — no peak, no off-peak, nothing to count. Full access to the sauna, cold plunge and showers. Member pricing on everything else: open play $25, group sessions $40, private lessons $125. You book seven days ahead on monthly and ten days ahead on annual. One guest pass a month, free entry to every ladder and league, and complimentary racket rental.",
      ],
      [
        "What happens if I want more than my included hour?",
        "A second hour the same day is $20 per player.",
      ],
      [
        "Can I bring a guest?",
        "Yes — every member gets one guest pass a month. Beyond that, guests pay the visitor rate on your court.",
      ],
      [
        "Do you have family discounts?",
        "5% off a second family member and 10% off for three or more. All memberships need to be active at the same time.",
      ],
      [
        "How do I cancel my membership?",
        "Memberships run month to month with 60 days written notice to sol@solsquash.com. There's no initiation fee, so the notice period is the commitment.",
      ],
    ],
  },
  {
    id: "kids",
    label: "FOR THE KIDS",
    cue: "SMALL RACQUETS, BIG ENERGY",
    questions: [
      [
        "Do you have squash for kids?",
        "Yes. Sol Junior is a membership for juniors, ages 4 to 16 — seven group sessions a month, all levels welcome, coached by Bruna and Vini. It's $179 a month or $50 drop in.",
      ],
      [
        "Can my child come to a session without a membership?",
        "Yes, space permitting — a junior drop-in is $50. Junior members can add extra sessions beyond their seven for $40.",
      ],
      [
        "What are the junior programmes?",
        "Two, split by age. Sol Juniors is for ages 7 to 16, one hour. Mini Squash is for ages 4 to 7, forty-five minutes. Your child joins the programme for their age group — current times and availability are always on the schedule. https://book.solsquash.com/programs/sol-junior",
      ],
    ],
  },
  {
    id: "booking",
    label: "BOOKING",
    cue: "THE PRACTICAL BITS",
    questions: [
      [
        "Do I need to book in advance, or can I just show up?",
        "Book in advance. Courts, sessions and lessons all go through book.solsquash.com, so your court is ready and waiting when you arrive.",
      ],
      [
        "How do I check what's on today?",
        "Our full schedule is on the schedule page — Club Mornings, Club Nights, Clinics, Open Play and Beginner Clinics, with times and availability. https://book.solsquash.com/programs?facility_id=1265&category=&search=&view=weekly",
      ],
      [
        "How far ahead can I book?",
        "Monthly members book seven days ahead, annual members ten, and visitors three. Two active bookings at a time, one court booking a day.",
      ],
      [
        "What's your cancellation policy?",
        "It depends what you booked — courts and programmes have different windows. You'll find the policy on the booking page for each one, and again in the notice you get when you book. If you're not sure, message us.",
      ],
      [
        "How do I get in touch?",
        "WhatsApp, text us on 305 481 4295, or email sol@solsquash.com.",
      ],
    ],
  },
] as const;

type TopicId = (typeof faqTopics)[number]["id"];
type ContentSection = "all" | "play" | "join" | "faq";

const faqTopicActions: Record<
  string,
  { href: string; label: string; external?: boolean }
> = {
  basics: { href: "/our-story", label: "EXPLORE OUR STORY" },
  ways: { href: "/play", label: "EXPLORE PLAY" },
  never: { href: "/new-to-squash", label: "START HERE" },
  joining: { href: "/memberships-and-prices", label: "VIEW MEMBERSHIPS" },
  kids: { href: "/memberships-and-prices", label: "EXPLORE SOL JUNIOR" },
  booking: {
    href: PLAYBYPOINT_BOOKING_URL,
    label: "BOOK A SESSION",
    external: true,
  },
};

function renderAnswer(answer: string) {
  return answer.split(/(https:\/\/[^\s]+)/g).map((part, index) =>
    part.startsWith("https://") ? (
      <a key={`${part}-${index}`} href={part}>
        {part}
      </a>
    ) : (
      part
    )
  );
}

export default function PlayAndPricing({
  section = "all",
}: {
  section?: ContentSection;
}) {
  const [activeWay, setActiveWay] = useState(-1);
  const [tier, setTier] = useState<"guest" | "member">("member");
  const [activeTopic, setActiveTopic] = useState<TopicId>("basics");
  const showPlay = section === "all" || section === "play";
  const showJoin = section === "all" || section === "join";
  const showFaq = section === "all" || section === "faq";
  return (
    <>
      {showPlay && (
        <>
          <section className="play-hero play-hero--mural">
            <div>
              <p className="eyebrow eyebrow--cyan">WAYS TO PLAY</p>
              <h1>
                PICK YOUR
                <br />
                WAY <em>IN.</em>
              </h1>
              <p>
                Court bookings, open play, coached sessions and lessons. With or
                without a membership.
              </p>
            </div>
            <figure className="play-hero__mural">
              <img
                src="/media/sol-facility-blue-court_a3f6989d.png"
                alt="The blue squash court at Sol"
              />
            </figure>
          </section>
          <WaveDivider source="navy" destination="green" />
          <section className="ways-section ways-section--real">
            <div className="section-rail">
              <span>WAYS TO PLAY</span>
              <i />
            </div>
            <div className="ways-list">
              {waysToPlay.map((way, index) => {
                const isActive = activeWay === index;
                return (
                  <motion.article
                    layout
                    key={way.name}
                    className={`way-card ${isActive ? "way-card--active" : ""}`}
                  >
                    <button
                      type="button"
                      className="way-card__toggle"
                      onClick={() => setActiveWay(isActive ? -1 : index)}
                      aria-expanded={isActive}
                      aria-controls={`play-option-${index}`}
                    >
                      <div className="way-card__top">
                        <span>0{index + 1}</span>
                        <span>
                          {isActive ? <X size={21} /> : <Plus size={21} />}
                        </span>
                      </div>
                      <h2>{way.name}</h2>
                      <p>{way.short}</p>
                    </button>
                    {isActive && (
                      <motion.div
                        id={`play-option-${index}`}
                        className="way-card__expanded"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <span>{way.detail}</span>
                        <p>{way.long}</p>
                        <MagneticButton
                          href={way.href}
                          className="button--mango"
                        >
                          {way.action}
                        </MagneticButton>
                        <p className="booking-handoff-note">
                          Choose a live time and complete your booking next.
                        </p>
                      </motion.div>
                    )}
                  </motion.article>
                );
              })}
            </div>
          </section>
          <TasteOfSolBlock />
        </>
      )}
      {showJoin && (
        <>
          {showPlay && <WaveDivider source="navy" destination="navy" />}
          <section className="pricing-section pricing-section--real">
            <div className="pricing-heading">
              <p className="eyebrow eyebrow--cyan">ADULT PRICING</p>
              <h2>
                ADULT
                <br />
                <em>PRICING.</em>
              </h2>
            </div>
            <div
              className="pricing-switch"
              role="group"
              aria-label="Pricing tier"
            >
              <button
                onClick={() => setTier("guest")}
                className={tier === "guest" ? "is-selected" : ""}
              >
                DROP-IN · GUEST
              </button>
              <button
                onClick={() => setTier("member")}
                className={tier === "member" ? "is-selected" : ""}
              >
                SOL CLUB · $239/MO
              </button>
            </div>
            <div className="pricing-card">
              {" "}
              <div className="pricing-card__head">
                <span>
                  {tier === "guest" ? "DROP-IN · GUEST" : "SOL CLUB · $239/MO"}
                </span>
                <strong>
                  {tier === "guest" ? "DROP-IN · GUEST" : "SOL CLUB · $239/MO"}
                </strong>
              </div>
              {comparisons.map(row => (
                <div className="price-row" key={row.label}>
                  <span>
                    {row.label}
                    {row.tip && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            className="info-button"
                            aria-label={`More information about ${row.label}`}
                          >
                            <Info size={14} />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="membership-tooltip">
                          7-day booking window. 1 guest pass every month. Racket
                          rental on us.
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </span>
                  <b>{tier === "guest" ? row.guest : row.member}</b>
                </div>
              ))}
              <div className="pricing-card__note">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button>
                      MEMBERSHIP NOTES <Info size={15} />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="membership-tooltip">
                    7-day booking window. 1 guest pass every month. Racket
                    rental on us.
                  </TooltipContent>
                </Tooltip>
              </div>
              <MagneticButton
                href={PLAYBYPOINT_SOL_CLUB_URL}
                className="button--mango"
              >
                JOIN SOL CLUB
              </MagneticButton>
              <p className="booking-handoff-note">
                Choose your membership and complete it next.
              </p>
            </div>
          </section>
          <SolClubDetails />
          <WaveDivider source="navy" destination="mango" />
          <section className="junior-section junior-section--real">
            <div className="junior-section__painted-label" aria-hidden="true">
              <img src="/media/sol-sun-repaired-navy_6dbcb19f.png" alt="" />
            </div>
            <div>
              <p className="eyebrow">FOR THE NEXT GENERATION</p>
              <h2>
                SOL JUNIOR
                <br />
                <em>$179/MO</em>
              </h2>
              <p>
                Ages 7 to 16. A membership for juniors. 7 group sessions
                included per month. Extra session $40. Drop In: $50.
              </p>
              <MagneticButton
                href={PLAYBYPOINT_SOL_JUNIOR_MEMBERSHIP_URL}
                className="button--navy"
              >
                JOIN SOL JUNIOR
              </MagneticButton>
              <p className="booking-handoff-note">
                Choose a live time and complete your booking next.
              </p>
            </div>
          </section>
          <JuniorDecisionSupport />
          <JoinContinuationBlocks />
        </>
      )}
      {showFaq && (
        <>
          {showJoin && <WaveDivider source="mango" destination="navy" />}
          <section className="faq-guide" id="sol-guide">
            <img
              className="mural-sun mural-sun--faq"
              src="/media/sol-sun-repaired-orange_e644a385.png"
              alt=""
              aria-hidden="true"
            />
            <div className="faq-guide__intro">
              <p className="eyebrow eyebrow--cyan">
                EVERYTHING YOU NEED TO KNOW.
              </p>
              <h2>
                EVERYTHING
                <br />
                <em>YOU NEED</em>
                <br />
                TO KNOW.
              </h2>
            </div>
            <div
              className="faq-topic-nav"
              role="tablist"
              aria-label="Sol guide topics"
            >
              {faqTopics.map((topic, index) => (
                <button
                  key={topic.id}
                  role="tab"
                  aria-selected={activeTopic === topic.id}
                  onClick={() => setActiveTopic(topic.id)}
                  className={activeTopic === topic.id ? "is-active" : ""}
                >
                  <span>0{index + 1}</span>
                  {topic.label}
                </button>
              ))}
            </div>
            <div className="faq-topic-panels">
              {faqTopics.map(topic => {
                const action = faqTopicActions[topic.id];
                const actionContent = (
                  <>
                    {action.label} <span aria-hidden="true">↗</span>
                  </>
                );
                return (
                  <section
                    key={topic.id}
                    role="tabpanel"
                    hidden={activeTopic !== topic.id}
                    className="faq-topic-panel"
                  >
                    <div className="faq-topic-panel__head">
                      <span
                        className="squash-ball squash-ball--faq"
                        aria-hidden="true"
                      >
                        <i />
                        <i />
                      </span>
                      <div>
                        <h3>{topic.label}</h3>
                      </div>
                      <b>{topic.questions.length} QUESTIONS</b>
                    </div>
                    <Accordion type="single" collapsible className="faq-list">
                      {topic.questions.map(([question, answer], index) => (
                        <AccordionItem
                          key={question}
                          value={`${topic.id}-${index}`}
                        >
                          <AccordionTrigger>{question}</AccordionTrigger>
                          <AccordionContent>
                            {renderAnswer(answer)}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                    <div className="faq-topic-panel__action">
                      {action.external ? (
                        <a href={action.href} className="text-link">
                          {actionContent}
                        </a>
                      ) : (
                        <Link href={action.href} className="text-link">
                          {actionContent}
                        </Link>
                      )}
                    </div>
                  </section>
                );
              })}
            </div>
          </section>
        </>
      )}
      {showPlay && !showJoin && (
        <WaveDivider source="navy" destination="navy" />
      )}
      {showJoin && !showFaq && (
        <WaveDivider source="green" destination="navy" />
      )}
    </>
  );
}
