import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const read = (path: string) =>
  readFileSync(new URL(path, import.meta.url), "utf8");
const home = read("./pages/Home.tsx");
const play = read("./pages/Play.tsx");
const beginner = read("./pages/NewToSquash.tsx");
const membership = read("./pages/MembershipsAndPrices.tsx");
const schedule = read("./pages/Schedule.tsx");
const story = read("./pages/OurStory.tsx");
const marks = read("./components/BrandMarks.tsx");
const header = read("./components/SiteHeader.tsx");
const shell = read("./components/PageShell.tsx");
const drawer = read("./components/ExperienceDrawer.tsx");
const faq = read("./pages/FAQ.tsx");
const faqSource = read("./pages/PlayAndPricing.tsx");
const css = read("./brand-new.css");
const legacyCss = read("./index.css");
const legacyWave = read("./components/WaveDivider.tsx");

describe("brand-new Sol visitor experience", () => {
  it("keeps the Home video hero", () => {
    expect(home).toContain("sol-squash-intro_5d0ba482.mp4");
    expect(home).toContain("autoPlay");
  });
  it("uses the mural's locked symbols", () => {
    expect(marks).toContain("sol-sun-repaired");
    expect(marks).toContain("bn-ball-mark");
    expect(marks).toContain("bn-brand-wave");
    expect(marks).toContain("bn-racket-q");
    expect(css).toContain("sol-racket-q-extracted.png");
    expect(marks).toContain("BrandWave");
    expect(marks).toContain("CourtMark");
    expect(marks).toContain('viewBox="0 0 750 750"');
    expect(marks).toContain('x="208.61"');
    expect(marks).toContain('x1="208.61" y1="492.77"');
    expect(marks).toContain(
      'points="541.39 490.17, 458.19 490.17, 458.19 406.98"'
    );
    expect(css).toContain('mask: url("/media/sol-racket-q-extracted.png")');
  });
  it("keeps squash balls out of every primary page hero", () => {
    for (const [page, heroClass] of [
      [home, "bn-video-hero"],
      [play, "bn-page-hero"],
      [beginner, "bn-page-hero"],
      [membership, "bn-page-hero"],
      [schedule, "bn-page-hero"],
      [story, "bn-story-hero"],
    ]) {
      const start = page.indexOf(`<section className="${heroClass}`);
      const end = page.indexOf("</section>", start);
      expect(page.slice(start, end)).not.toContain("BallMark");
      expect(page.slice(end)).toContain("BallMark");
    }
  });
  it("keeps Home visible and makes the desktop menu substantially larger", () => {
    expect(header).toContain('{ label: "Home", href: "/" }');
    expect(css).toContain("font-size: 1.23rem");
  });
  it("uses the exact logo blue everywhere and matches the logo box to the unchanged header heights", () => {
    expect(css).toContain("--bn-navy: #002269");
    expect(marks).toContain('navy: "#002269"');
    expect(css).not.toContain("#0c254a");
    expect(css).not.toContain("12, 37, 74");
    expect(css).toContain("height: 120px");
    expect(css).toContain("width: 205px");
    expect(css).toContain("height: 96px");
    expect(css).toContain("width: 164px");
    expect(css).toContain("height: 120px");
  });
  it("uses the cyan wave as a transparent shared boundary without an inserted source-color band", () => {
    expect(marks).not.toContain("backgroundColor: waveColors[source]");
    expect(marks).not.toContain("source: keyof typeof waveColors");
    expect(css).toContain("margin: clamp(-4.75rem, -4.5vw, -3.25rem)");
    expect(css).not.toContain("--bn-blue");
    expect(marks).not.toContain('<rect y="60"');
    expect(legacyWave).not.toContain("backgroundColor: fills[source]");
  });
  it("reserves one cyan wave per non-FAQ page for the footer boundary and uses halftones internally", () => {
    for (const page of [home, play, beginner, membership, schedule, story]) {
      expect(page.match(/<BrandWave destination="navy" \/>/g)).toHaveLength(1);
      expect(page).toContain("HalftoneDivider");
    }
    expect(marks).toContain("bn-halftone-divider");
    expect(marks).toContain('viewBox="0 0 1440 30"');
    expect(marks).toContain("const dotSpacing = 7");
    expect(marks).not.toContain("spacing:");
    expect(marks).toContain("radius: 0.7");
    expect(marks).toContain("radius: 1.25");
    expect(marks).toContain("radius: 1.8");
    expect(marks).toContain("radius: 2.35");
    expect(marks).toContain("radius: 3");
    expect(marks).toContain("opacity: 0.08");
    expect(marks).toContain("opacity: 0.92");
    expect(marks).toContain("fillOpacity={row.opacity}");
    expect(css).toContain("height: clamp(2.25rem, 3vw, 3rem)");
    expect(shell).not.toContain('location === "/"');
    expect(shell).not.toContain('location === "/schedule"');
  });
  it("does not introduce palm-tree iconography", () => {
    expect(
      [home, play, beginner, membership, schedule, story, marks]
        .join("\n")
        .toLowerCase()
    ).not.toContain("palm");
  });
  it("gives each primary visitor journey its own implementation", () => {
    for (const page of [play, beginner, membership, schedule, story])
      expect(page).not.toContain('from "./PlayAndPricing"');
  });
  it("renders real court geometry as oversized background artwork only", () => {
    expect(css).toContain("opacity: 0.26");
    expect(css).toContain("position: absolute");
    expect(css).toContain("width: clamp(58rem, 92vw, 112rem)");
    expect(css).toContain(".bn-offerings > :not(.bn-court-mark)");
    expect(css).toContain("z-index: 1");
  });
  it("pairs Q rackets with headings and varies their upright-safe rotations", () => {
    for (const page of [home, play, beginner, membership, schedule, story]) {
      expect(page).toContain('className="bn-heading-with-mark"');
    }
    for (const angle of [
      "rotate(-22deg)",
      "rotate(-7deg)",
      "rotate(18deg)",
      "rotate(43deg)",
      "rotate(58deg)",
    ]) {
      expect(css).toContain(angle);
    }
    expect(home).toContain('tilt="right"');
    expect(play).toContain('tilt="left"');
    expect(beginner).toContain('tilt="right-soft"');
    expect(schedule).toContain('tilt="left-soft"');
    expect(css).toContain("justify-content: flex-start");
  });
  it("makes the membership comparison legible at twice the former scale", () => {
    expect(css).toContain("font-size: 2rem");
    expect(css).toContain("font-size: 1.36rem");
  });
  it("promotes the Play routing strip into a proper closing decision section", () => {
    expect(play).toContain("Find your");
    expect(play).toContain("next rally.");
    expect(play).toContain("Explore session types");
    expect(css).toContain("min-height: 28rem");
  });
  it("treats the club values as a primary brand statement rather than quiet grid copy", () => {
    expect(css).toContain(".bn-values article:nth-child(4)");
    expect(css).toContain("min-height: 22rem");
    expect(css).toContain("font-size: clamp(3.4rem, 5.25vw, 6.25rem)");
    expect(css).toContain("grid-template-rows: auto 1fr auto");
    expect(css).toContain("min-width: 6rem");
    expect(css).toContain("grid-column: 2");
    expect(story).toContain("Community First");
    expect(story).toContain(
      "Everyone belongs here — from first-timers to competitive players."
    );
    expect(story).toContain("Excellence on Court");
    expect(story).toContain("We’ve competed at the highest level.");
    expect(story).toContain("Genuine Care");
    expect(story).toContain(
      "We truly connect with the people we work with. We’re invested in"
    );
    expect(story).toContain("Squash for Miami");
    expect(story).toContain(
      "Dynamic, challenging, endlessly fun — Miami is just getting"
    );
    expect(story).not.toContain("<h3>Welcoming</h3>");
    expect(story).not.toContain("<h3>Progressive</h3>");
    expect(story).not.toContain("<h3>Joyful</h3>");
  });
  it("preserves the full founders' biographies and verified achievements", () => {
    expect(story).toContain("From Brazil.");
    expect(story).not.toContain("The club they");
    expect(story).toContain("career-high world ranking of #98");
    expect(story).toContain("career-high world ranking of #132");
    expect(story).toContain("2011 Pan American Games");
    expect(story).toContain("Moscow in 2018");
    expect(story).toContain("competed at the PSA World Championships");
    expect(story).toContain("England Squash Level 2");
    expect(story).toContain("SafeSport Certified");
    expect(story).not.toContain("bn-founder-record");
    expect(css).toContain(".bn-profile-drawer__facts");
  });
  it("uses squash-ball accents as decorative punctuation outside the heroes", () => {
    for (const page of [home, play, beginner, membership, schedule, story]) {
      expect(page).toContain("bn-accent-ball");
    }
    expect(marks).toContain('aria-hidden="true"');
    expect(css).toContain(".bn-accent-ball--home");
    expect(css).toContain(".bn-accent-ball--values");
    expect(css).toContain(
      ".bn-story-copy > :not(.bn-court-mark):not(.bn-accent-ball)"
    );
  });
  it("gives the junior headline enough vertical room for the squash descender", () => {
    expect(css).toContain(".bn-juniors h2");
    expect(css).toContain("line-height: 0.94");
    expect(css).toContain("padding-bottom: 0.12em");
  });
  it("keeps decision details on Sol before booking handoffs", () => {
    expect(play).toContain("Prices, formats and what to expect stay here");
    expect(membership).toContain(
      "Compare drop-in play, packages and full membership"
    );
    expect(schedule).toContain("Understand every session here");
  });
  it("retains immersive progressive-disclosure drawers", () => {
    expect(drawer).toContain('className="bn-drawer"');
    expect(css).toContain("backdrop-filter: blur(18px)");
    expect(play).toContain("ExperienceDrawer");
    expect(beginner).toContain("ExperienceDrawer");
    expect(story).toContain("ExperienceDrawer");
  });
  it("locks readable dark text onto light information surfaces", () => {
    expect(css).toContain(".site-frame .bn-offerings h2");
    expect(css).toContain(".site-frame .bn-first-rally h3");
    expect(css).toContain(".site-frame .bn-price-compare span");
    expect(css).toContain("color: var(--bn-navy) !important");
  });
  it("keeps the protected FAQ wrapper and topic source intact", () => {
    expect(faq).toContain('<PlayAndPricing section="faq" />');
    expect(faqSource).toContain('id: "basics"');
    expect(faqSource).toContain('id: "ways"');
    expect(faqSource).toContain('id: "never"');
    expect(faqSource).toContain('id: "joining"');
    expect(faqSource).toContain('id: "kids"');
    expect(faqSource).toContain('id: "booking"');
    expect(legacyCss).toContain("--sol-navy:#002269");
    expect(legacyCss).toContain("--sol-blue:#002269");
    expect(legacyCss).toContain("background-color:var(--sol-green) !important");
    expect(legacyWave).toContain('navy: "#002269"');
  });
});
