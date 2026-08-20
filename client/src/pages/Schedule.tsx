/**
 * Sun-bleached Court Club design: the schedule is a mobile-first vertical rally list, never a grid or embedded booking iframe.
 */
import { CalendarDays, ChevronRight, MapPin, Users } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { RetroImage } from "@/components/RetroImage";
import { WaveDivider } from "@/components/WaveDivider";
import data from "@/lib/mock-playbypoint.json";

export default function Schedule() {
  return (
    <>
      <section className="schedule-hero">
        <div><p className="eyebrow eyebrow--cyan">THE COURT IS CALLING</p><h1>UPCOMING<br /><em>SESSIONS.</em></h1><p>Find a rally that feels like your kind of day.</p></div>
        <div className="schedule-hero__date"><CalendarDays size={26} /><span>{data.schedule[0].day}</span><b>18</b><small>AUG 2026</small></div>
      </section>
      <WaveDivider destination="chalk" />
      <section className="sessions-section">
        <div className="sessions-section__top"><div><p className="eyebrow">LIVE CLUB RHYTHM</p><h2>SHOW UP.<br />MAKE A <em>RALLY.</em></h2></div><p className="sessions-section__notice">All sessions are shown as a sleek vertical list from the club schedule. Pick one and meet us on court.</p></div>
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
      <WaveDivider destination="green" />
      <section className="schedule-coda"><RetroImage label="[IMAGE: players gathering at the glass court entrance]" alt="Sol players gathering at a squash court" className="schedule-coda__image" tint="mango" /><div><p className="eyebrow eyebrow--cyan">BETWEEN MATCHES</p><h2>COME FOR A<br />SESSION.<br /><em>STAY FOR</em><br />THE CLUB.</h2><MagneticButton href="/play-and-pricing" className="button--mango">SEE PRICES</MagneticButton></div></section>
    </>
  );
}
