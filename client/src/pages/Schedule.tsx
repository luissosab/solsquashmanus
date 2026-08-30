/**
 * Sun-bleached Court Club design: the schedule is a mobile-first vertical rally list, never a grid or embedded booking iframe.
 */
import { CalendarDays, MapPin, Users } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { WaveDivider } from "@/components/WaveDivider";
import { PLAYBYPOINT_BEGINNER_CLINIC_URL, PLAYBYPOINT_OPEN_PLAY_URL, PLAYBYPOINT_SESSIONS_URL, PLAYBYPOINT_SOL_JUNIOR_URL, PLAYBYPOINT_WEEKLY_SCHEDULE_URL } from "@/lib/booking";

const sessions = [
  { type: "SOCIAL PLAY", title: "Open Play", copy: "Three hours of games, rotations and players matched by level.", href: PLAYBYPOINT_OPEN_PLAY_URL },
  { type: "COACHED", title: "Clinics & Group Sessions", copy: "Small-group drills, matches and coaching with Bruna or Vini.", href: PLAYBYPOINT_SESSIONS_URL },
  { type: "FIRST TIMERS", title: "Beginner Squash Clinic", copy: "A welcoming one-hour group session. No experience needed.", href: PLAYBYPOINT_BEGINNER_CLINIC_URL },
  { type: "AGES 4–16", title: "Sol Junior", copy: "Mini Squash and junior group sessions for the next generation.", href: PLAYBYPOINT_SOL_JUNIOR_URL },
];

export default function Schedule() {
  return (
    <>
      <section className="schedule-hero schedule-hero--real">
        <div><p className="eyebrow eyebrow--cyan">THE COURT IS CALLING</p><h1>SESSIONS<br /><em>AT SOL.</em></h1><p>Find the kind of rally that feels like your day. Live times and availability are confirmed when you book.</p></div>
        <div className="schedule-hero__date"><CalendarDays size={23} /><div><span>LIVE TIMES</span><b>WHEN YOU'RE READY</b></div><i aria-hidden="true" /></div>
      </section>
      <WaveDivider source="navy" destination="green" />
      <section className="sessions-section">
        <div className="sessions-section__top"><div><p className="eyebrow">CHOOSE YOUR SESSION</p><h2>SHOW UP.<br />MAKE A <em>RALLY.</em></h2></div><p className="sessions-section__notice">Explore the sessions Sol offers, then choose your live time and availability when you book.</p></div>
        <div className="session-day"><span>CLUB SESSION FORMATS</span><strong>CHOOSE YOUR RALLY</strong></div>
        <div className="session-list">
          {sessions.map((session) => (
            <article className="session-card" key={session.title}>
              <div className="session-card__time"><span>CHOOSE</span><small>TIME ON BOOKING</small></div>
              <div className="session-card__info"><span className="session-type">{session.type}</span><h3>{session.title}</h3><p>{session.copy}</p><p><Users size={15} />See current availability when you book.</p></div>
              <MagneticButton href={session.href} className="button--mango">SEE LIVE TIMES</MagneticButton>
            </article>
          ))}
        </div>
        <div className="schedule-side-note"><MapPin size={20} /><span>645 NW 72nd Street, Miami, FL 33150. Choose a live time and complete your booking next.</span></div>
        <MagneticButton href={PLAYBYPOINT_WEEKLY_SCHEDULE_URL} className="button--cyan">OPEN FULL WEEKLY SCHEDULE</MagneticButton>
      </section>
      <WaveDivider source="green" destination="navy" />
      <section className="schedule-coda"><figure className="schedule-coda__image"><img src="/media/sol-founders-lounge_1745d40e.webp" alt="Bruna and Vini at Sol" /></figure><div><p className="eyebrow eyebrow--cyan">BETWEEN MATCHES</p><h2>COME FOR A<br />SESSION.<br /><em>STAY FOR</em><br />THE CLUB.</h2><MagneticButton href="/memberships-and-prices" className="button--mango">SEE PRICES</MagneticButton></div></section>
    </>
  );
}
