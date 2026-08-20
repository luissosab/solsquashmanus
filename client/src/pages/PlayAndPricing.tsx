/**
 * Sun-bleached Court Club design: play options are tactile expanding court-side notices, while rates read like a club menu.
 */
import { motion } from "framer-motion";
import { Info, Plus, X } from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { MagneticButton } from "@/components/MagneticButton";
import { RetroImage } from "@/components/RetroImage";
import { WaveDivider } from "@/components/WaveDivider";
import data from "@/lib/mock-playbypoint.json";

const waysToPlay = [
  { name: "Book a Court", short: "Your court, your hour.", long: "Your court, your hour. Play with a friend, another Sol player or rotate with a group of three.", detail: "MAKE A RALLY YOUR OWN" },
  { name: "Open Play", short: "Our social squash mixer.", long: "Our social squash mixer. Three hours of games, court rotations and players matched by level.", detail: "MEET YOUR NEXT RALLY PARTNER" },
  { name: "Coached Sessions", short: "Train in a small group with Bruna or Vini.", long: "Train in a small group with Bruna or Vini — Drills & Matches, Clinics and Women Play.", detail: "LEARN, PLAY, REPEAT" },
  { name: "Private Lessons", short: "Your game. Our full attention.", long: "Your game. Our full attention. One-on-one with Bruna or Vini.", detail: "ONE-ON-ONE ON COURT" },
];

const comparisons = [
  { label: "Court Access", guest: "$60/hr", member: "Included (1 hr/day).", tip: "Extra hours $20 a player" },
  { label: "Open Play", guest: `$${data.pricing.dropIn.openPlay}`, member: `$${data.pricing.solClub.openPlay}` },
  { label: "Clinics", guest: `$${data.pricing.dropIn.clinic}`, member: `$${data.pricing.solClub.clinic}` },
  { label: "Private Lessons", guest: `$${data.pricing.dropIn.lesson}`, member: `$${data.pricing.solClub.lesson}` },
  { label: "Sauna/Plunge", guest: "Not Included", member: "Included." },
];

const faqs = [
  ["Who are Bruna and Vini?", "Bruna Marchesi and Vini Rodrigues are professional squash players, coaches, and the husband-and-wife team behind Sol Squash. They met through squash, both represented Brazil internationally, and competed around the world on the PSA World Tour. After spending their lives playing, competing, and coaching, they saw that Miami was missing a true home for the sport: a modern club where serious players could train, new players could discover squash, and everyone could feel part of the community. They created Sol to be the kind of club they always wanted to belong to—welcoming, energetic, social, and built by people who are on the courts every day. You will not just see Bruna and Vini’s names on the website. You will find them coaching sessions, playing matches, meeting members, and helping shape the Sol experience every day."],
  ["What is Sol Squash?", "Sol Squash is Miami’s first dedicated squash club, created to give the sport a modern home in the city and introduce more people to everything that makes squash so addictive. Located in Little River, Sol has five squash courts, professional coaching, group sessions, open play, leagues, a gym, sauna, cold plunge, showers, café, lounge, and coworking spaces. It is a place to come for a match or a workout—and stay for everything that happens around it. Whether you have played for years or have never held a racket, there is a way to play at Sol. No experience, partner, or equipment required."],
  ["Where are you located?", "We're in Little River, Miami at 645 NW 72nd Street, Miami, FL 33150. We have our own parking on site and street parking is also available nearby."],
  ["Is there parking?", "Yes — we have our own parking for players at the club, and there's street parking nearby on NW 72nd Street."],
  ["Do I need to book in advance, or can I just show up?", "Book in advance. Courts, sessions and lessons all go through book.solsquash.com, so your court is ready and waiting when you arrive."],
  ["What are your opening hours?", "Our regular hours are Monday to Thursday 6am–10pm, Friday 6am–5pm, and Saturday to Sunday 8am–5pm. Summer hours shift a little. Everything at Sol runs on bookings — courts, sessions and lessons — so the live schedule is always the best guide to what's on and when. Book or message us before you come and we'll have everything ready for you."],
  ["Can I book a game with Bruna or Vini?", "Yes, whatever level you are. Book a private session and tell us you'd rather play than be taught — same booking, same rate. Some people come to fix their backhand. Some come for a good game and a proper sweat. We're up for both."],
  ["Do you sell session packs?", "Yes. Buy five and pay less for each one, for members and non-members. Packs cover Open Play, Drills & Matches, Clinics, Women Play and private lessons. Message us and we'll point you to the best fit."],
  ["Do you have a WhatsApp community?", "Yes, and it's where most of the club chat happens. We post announcements and club news there, and there are groups for organizing matches and games between members."],
];

export default function PlayAndPricing() {
  const [activeWay, setActiveWay] = useState(0);
  const [tier, setTier] = useState<"guest" | "member">("guest");
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  return (
    <>
      <section className="play-hero">
        <div>
          <p className="eyebrow eyebrow--cyan">WAYS TO PLAY</p>
          <h1>PICK YOUR<br />WAY <em>IN.</em></h1>
          <p>Court bookings, open play, coached sessions and lessons. With or without a membership.</p>
        </div>
        <RetroImage label="[IMAGE: wide glass court and players between rallies]" alt="Squash court waiting for the next rally" className="play-hero__image" tint="mango" />
      </section>
      <WaveDivider destination="chalk" />
      <section className="ways-section">
        <div className="section-rail"><span>WAYS TO PLAY</span><i /></div>
        <div className="ways-list">
          {waysToPlay.map((way, index) => {
            const isActive = activeWay === index;
            return (
              <motion.button layout key={way.name} className={`way-card ${isActive ? "way-card--active" : ""}`} onClick={() => setActiveWay(isActive ? -1 : index)} aria-expanded={isActive}>
                <div className="way-card__top"><span>0{index + 1}</span><span>{isActive ? <X size={21} /> : <Plus size={21} />}</span></div>
                <h2>{way.name}</h2>
                <p>{way.short}</p>
                {isActive && <motion.div className="way-card__expanded" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}><span>{way.detail}</span><p>{way.long}</p></motion.div>}
              </motion.button>
            );
          })}
        </div>
      </section>
      <WaveDivider destination="green" />
      <section className="pricing-section">
        <div className="pricing-heading"><p className="eyebrow eyebrow--cyan">ADULT PRICING</p><h2>YOUR GAME.<br />YOUR <em>PACE.</em></h2></div>
        <div className="pricing-switch" role="group" aria-label="Pricing tier">
          <button onClick={() => setTier("guest")} className={tier === "guest" ? "is-selected" : ""}>DROP-IN (GUEST)</button>
          <button onClick={() => setTier("member")} className={tier === "member" ? "is-selected" : ""}>SOL CLUB ($239/MO)</button>
        </div>
        <div className="pricing-card">
          <div className="pricing-card__head"><span>{tier === "guest" ? "DROP-IN (GUEST)" : "SOL CLUB ($239/MO)"}</span><strong>{tier === "guest" ? "PLAY WHEN YOU WANT" : "MAKE SOL YOUR HOME"}</strong></div>
          {comparisons.map((row) => <div className="price-row" key={row.label}><span>{row.label}{row.tip && <Tooltip><TooltipTrigger asChild><button className="info-button" aria-label={`More information about ${row.label}`}><Info size={14} /></button></TooltipTrigger><TooltipContent>{row.tip}</TooltipContent></Tooltip>}</span><b>{tier === "guest" ? row.guest : row.member}</b></div>)}
          <div className="pricing-card__note"><Tooltip><TooltipTrigger asChild><button>MEMBERSHIP NOTES <Info size={15} /></button></TooltipTrigger><TooltipContent className="membership-tooltip">7-day booking window. 1 guest pass every month. Racket rental on us.</TooltipContent></Tooltip></div>
          <MagneticButton href="#" onClick={() => setCheckoutOpen(true)} className="button--mango">BOOK A SESSION</MagneticButton>
        </div>
      </section>
      <WaveDivider destination="mango" />
      <section className="junior-section">
        <div className="junior-section__badge">SOL<br />JUNIOR</div>
        <div><p className="eyebrow">FOR THE NEXT GENERATION</p><h2>SOL JUNIOR<br /><em>($179/MO)</em></h2><p>Ages 7 to 16. A membership for juniors. 7 group sessions included per month. Extra session $40. Drop In: $50.</p></div>
        <RetroImage label="[IMAGE: junior player laughing after a rally]" alt="Junior squash player at Sol" className="junior-section__image" tint="navy" />
      </section>
      <WaveDivider destination="chalk" />
      <section className="faq-section">
        <div className="faq-section__heading"><p className="eyebrow">THE GOOD-TO-KNOW</p><h2>QUESTIONS?<br /><em>WE'VE GOT</em><br />YOU.</h2></div>
        <Accordion type="single" collapsible className="faq-list">
          {faqs.map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`}><AccordionTrigger>{question}</AccordionTrigger><AccordionContent>{answer}</AccordionContent></AccordionItem>)}
        </Accordion>
      </section>
      <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
        <DialogContent className="checkout-dialog">
          <DialogTitle>ONE MORE GOOD IDEA.</DialogTitle>
          <div className="checkout-dialog__sun">SOL</div>
          <p>Add a 5-pack for $250 and save $25.</p>
          <button className="dialog-close" onClick={() => setCheckoutOpen(false)}>NOT TODAY</button>
        </DialogContent>
      </Dialog>
    </>
  );
}
