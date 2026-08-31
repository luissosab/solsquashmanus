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
    expect(css).toContain('mask: url("/media/sol-racket-q-extracted.png")');
  });
  it("keeps Home visible and makes the desktop menu substantially larger", () => {
    expect(header).toContain('{ label: "Home", href: "/" }');
    expect(css).toContain("font-size: 1.23rem");
  });
  it("uses the exact logo blue everywhere in the new system and sizes the logo up by 60 percent", () => {
    expect(css).toContain("--bn-navy: #002269");
    expect(marks).toContain('navy: "#002269"');
    expect(css).not.toContain("#0c254a");
    expect(css).not.toContain("12, 37, 74");
    expect(css).toContain("height: 93px");
    expect(css).toContain("width: 125px");
    expect(css).toContain("height: 120px");
  });
  it("uses the cyan wave as a transparent shared boundary without an inserted source-color band", () => {
    expect(marks).not.toContain("backgroundColor: waveColors[source]");
    expect(marks).not.toContain("source: keyof typeof waveColors");
    expect(css).toContain("margin: clamp(-4.75rem, -4.5vw, -3.25rem)");
    expect(css).not.toContain("--bn-blue");
  });
  it("reserves one cyan wave per non-FAQ page for the footer boundary and uses halftones internally", () => {
    for (const page of [home, play, beginner, membership, schedule, story]) {
      expect(page.match(/<BrandWave destination="navy" \/>/g)).toHaveLength(1);
      expect(page).toContain("HalftoneDivider");
    }
    expect(marks).toContain("bn-halftone-divider");
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
  });
});
