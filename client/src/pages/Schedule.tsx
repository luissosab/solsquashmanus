/**
 * Sun-bleached Court Club design: the schedule is a mobile-first vertical rally list, never a grid or embedded booking iframe.
 */
import { CalendarDays, MapPin, Users } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { WaveDivider } from "@/components/WaveDivider";
import data from "@/lib/mock-playbypoint.json";

export default function Schedule() {
  return (
    <>
      <section className="schedule-hero schedule-hero--real">
        <div><p className="eyebrow eyebrow--cyan">THE COURT IS CALLING</p><h1>UPCOMING<br /><em>SESSIONS.</em></h1><p>Find a rally that feels like your kind of day.</p></div>
        <div className="schedule-hero__date"><CalendarDays size={23} /><div><span>{data.schedule[0].day}</span><b>18 AUG 2026</b></div><i aria-hidden="true" /></div>
      </section>
      <WaveDivider source="navy" destination="green" />
      <section className="sessions-section">
        <div className="sessions-section__top"><div><p className="eyebrow">LIVE CLUB RHYTHM</p><h2>SHOW UP.<br />MAKE A <em>RALLY.</em></h2></div><p className="sessions-section__notice">The next good rally is right here. Pick your time and meet us on court.</p></div>
        <div className="session-day"><span>{data.schedule[0].date}</span><strong>{data.schedule[0].day}</strong></div>
        <div className="session-list">
          {data.schedule.flatMap((day) => day.sessions.map((session, index) => (
            <article className="session-card" key={`${day.date}-${session.time}`}>
              <div className="session-card__time"><span>{session.time}</span><small>TO {session.endTime}</small></div>
              <div className="session-card__info"><span className="session-type">{session.type}</span><h3>{session.title}</h3><p><Users size={15} />{session.spots} spots open</p></div>
              <MagneticButton href="https://book.solsquash.com/" className={index % 2 === 0 ? "button--navy" : "button--green"}>BOOK</MagneticButton>
            </article>
          )))}
        </div>
        <div className="schedule-side-note"><MapPin size={20} /><span>645 NW 72nd Street, Miami, FL 33150</span></div>
      </section>
      <WaveDivider source="green" destination="navy" />
      <section className="schedule-coda"><figure className="schedule-coda__image"><img src="/manus-storage/sol-founders-lounge_1745d40e.webp" alt="Bruna and Vini at Sol" /></figure><div><p className="eyebrow eyebrow--cyan">BETWEEN MATCHES</p><h2>COME FOR A<br />SESSION.<br /><em>STAY FOR</em><br />THE CLUB.</h2><MagneticButton href="/play" className="button--mango">SEE PRICES</MagneticButton></div></section>
    </>
  );
}
