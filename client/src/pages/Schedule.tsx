/**
 * Sun-bleached Court Club design: the schedule is a mobile-first vertical rally list, never a grid or embedded booking iframe.
 */
import { CalendarDays, MapPin, Users } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { WaveDivider } from "@/components/WaveDivider";
import data from "@/lib/mock-playbypoint.json";
import { PLAYBYPOINT_BOOKING_URL } from "@/lib/booking";

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
          {data.schedule.flatMap((day) => day.sessions.map((session, index) => (
            <article className="session-card" key={`${day.date}-${session.time}`}>
              <div className="session-card__time"><span>CHOOSE</span><small>TIME ON BOOKING</small></div>
              <div className="session-card__info"><span className="session-type">{session.type}</span><h3>{session.title}</h3><p><Users size={15} />See current availability when you book.</p><span className="sr-only">{session.time} to {session.endTime}. {session.spots} spots open.</span></div>
              <MagneticButton href={PLAYBYPOINT_BOOKING_URL} className="button--mango">SEE LIVE TIMES</MagneticButton>
            </article>
          )))}
        </div>
        <div className="schedule-side-note"><MapPin size={20} /><span>645 NW 72nd Street, Miami, FL 33150. Choose a live time and complete your booking next.</span></div>
        <p className="sr-only">{data.schedule.flatMap((day) => day.sessions.map((session) => `${day.date}. ${day.day}. ${session.title}. ${session.time} to ${session.endTime}. ${session.spots} spots open.`)).join(" ")}</p>
      </section>
      <WaveDivider source="green" destination="navy" />
      <section className="schedule-coda"><figure className="schedule-coda__image"><img src="/media/sol-founders-lounge_1745d40e.webp" alt="Bruna and Vini at Sol" /></figure><div><p className="eyebrow eyebrow--cyan">BETWEEN MATCHES</p><h2>COME FOR A<br />SESSION.<br /><em>STAY FOR</em><br />THE CLUB.</h2><MagneticButton href="/memberships-and-prices" className="button--mango">SEE PRICES</MagneticButton></div></section>
    </>
  );
}
