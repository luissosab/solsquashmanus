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
    expect(marks).toContain("bn-cyan-wave");
    expect(marks).toContain("bn-racket-q");
    expect(marks).toContain("sol-squash-logo_dd364204.png");
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
