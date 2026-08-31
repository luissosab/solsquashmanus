import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const css = readFileSync(new URL("./index.css", import.meta.url), "utf8");
const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const magneticButton = readFileSync(new URL("./components/MagneticButton.tsx", import.meta.url), "utf8");
const structuralBlocks = readFileSync(new URL("./components/StructuralContentBlocks.tsx", import.meta.url), "utf8");
const home = readFileSync(new URL("./pages/Home.tsx", import.meta.url), "utf8");
const newToSquash = readFileSync(new URL("./pages/NewToSquash.tsx", import.meta.url), "utf8");
const ourStory = readFileSync(new URL("./pages/OurStory.tsx", import.meta.url), "utf8");
const playAndPricing = readFileSync(new URL("./pages/PlayAndPricing.tsx", import.meta.url), "utf8");
const pageShell = readFileSync(new URL("./components/PageShell.tsx", import.meta.url), "utf8");
const sourceRoot = fileURLToPath(new URL(".", import.meta.url));

function readRuntimeSource(directory: string): string {
  return readdirSync(directory, { withFileTypes: true }).map(entry => {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) return readRuntimeSource(fullPath);
    return /\.(css|ts|tsx)$/.test(entry.name) && !entry.name.includes(".test.") ? readFileSync(fullPath, "utf8") : "";
  }).join("\n");
}

const runtimeSource = `${readRuntimeSource(sourceRoot)}\n${html}`;

describe("Sol typography grammar", () => {
  it("loads the approved display, body, and emotional serif families", () => {
    expect(html).not.toContain("fonts.googleapis.com");
    expect(html).not.toContain("fonts.gstatic.com");
    expect(css).toContain('url("/fonts/archivo-narrow-latin.woff2")');
    expect(css).toContain('url("/fonts/manrope-latin.woff2")');
    expect(css).toContain('url("/fonts/dm-serif-display-regular-latin.woff2")');
    expect(css).toContain('url("/fonts/dm-serif-display-italic-latin.woff2")');
  });

  it("uses only local public media and font files at runtime", () => {
    expect(runtimeSource).not.toContain("/manus-storage/");
    expect(runtimeSource).not.toMatch(/https?:\/\/[^\s"')]+\.(?:gif|jpe?g|mp4|otf|png|svg|ttf|webm|webp|woff2?)/i);

    const localAssets = Array.from(runtimeSource.matchAll(/["'(](\/(?:fonts|media)\/[^"')\s]+)/g), match => match[1]);
    expect(localAssets.length).toBeGreaterThan(0);
    for (const asset of new Set(localAssets)) {
      expect(existsSync(new URL(`../public${asset}`, import.meta.url)), `Missing local asset: ${asset}`).toBe(true);
    }
  });

  it("keeps heading emphasis in the display system instead of arbitrary italics", () => {
    expect(css).toMatch(/\.site-frame main h1 em,[\s\S]*?font-family:var\(--font-display\);[\s\S]*?font-style:normal;/);
  });

  it("uses the sitewide display and body grammar for Club and footer copy", () => {
    expect(css).toMatch(/\.club-intro--lifestyle \.club-intro__section-intro h2[\s\S]*?font-family:var\(--font-display\);[\s\S]*?font-style:normal;/);
    expect(css).toMatch(/\.club-intro--lifestyle \.club-intro__section-intro \.club-intro__promise[\s\S]*?font-family:var\(--font-body\);[\s\S]*?font-style:normal;/);
    expect(css).toMatch(/\.club-footer__main \.club-footer__promise[\s\S]*?font-family:var\(--font-body\);[\s\S]*?font-style:normal;/);
  });

  it("uses the body family and regular style for supporting copy", () => {
    expect(css).toMatch(/\.home-path-card p,[\s\S]*?\.pricing-card > p[\s\S]*?font-family:var\(--font-body\);[\s\S]*?font-style:normal;/);
  });

  it("keeps Taste of Sol and Join the Club inside one merged decision section", () => {
    expect(structuralBlocks).toContain("pricing-section--merged-offers");
    expect(structuralBlocks).toContain("TASTE OF");
    expect(structuralBlocks).toContain("JOIN THE");
    expect(structuralBlocks).not.toContain("export function PlayMembershipPrompt");
  });

  it("opens external booking handoffs in a separate tab", () => {
    expect(magneticButton).toContain('const opensNewTab = /^https?:\\/\\//.test(href)');
    expect(magneticButton).toContain('target={opensNewTab ? "_blank" : undefined}');
    expect(magneticButton).toContain('rel={opensNewTab ? "noreferrer" : undefined}');
  });

  it("uses selective mural accents and distinct Values card colors", () => {
    expect(css).toContain(".mural-sun--first-steps");
    expect(css).toContain(".mural-sun--offers");
    expect(ourStory).toContain("squash-ball--values");
    expect(css).toContain(".mural-sun--faq");
    expect(css).toContain(".mural-sun--profiles");
    expect(newToSquash).toContain("mural-line-field--entry");
    expect(newToSquash).toContain("mural-line-field--beginner");
    expect(css).toMatch(/\.values-list article:nth-child\(1\)[\s\S]*?\.values-list article:nth-child\(4\)/);
    expect(css).toContain(".values-list article > span { color:inherit !important;");
  });

  it("uses matching dots on every decorative ball and rejects generic L/U court marks", () => {
    const renderedMarkup = [home, structuralBlocks, newToSquash, ourStory, playAndPricing].join("\n");
    const renderedVariants = Array.from(renderedMarkup.matchAll(/squash-ball--([a-z-]+)/g), match => match[1]).sort();

    expect(Array.from(new Set(renderedVariants))).toEqual(["beginner", "faq", "hero", "home-club", "home-schedule", "offer", "values"]);
    expect(css).toContain(".squash-ball i { background:var(--sol-navy); }");
    expect(css).toMatch(/\.squash-ball--offer i,[\s\S]*?background:var\(--sol-navy\)/);
    expect(css).toMatch(/\.squash-ball--beginner i,[\s\S]*?background:var\(--sol-teal\)/);
    expect(css).toMatch(/\.squash-ball--values i,[\s\S]*?background:var\(--sol-navy\)/);
    expect(css).toContain(".court-mark { display:none !important; }");
    expect(structuralBlocks).not.toContain('className="court-mark');
    expect(newToSquash).not.toContain('className="court-mark');
    expect(ourStory).not.toContain('className="court-mark');
  });

  it("keeps PERFECT emphasized and combines packages with the price disclosure", () => {
    expect(newToSquash).toMatch(/<motion\.em[\s\S]*?>\s*PERFECT\.\s*<\/motion\.em>/);
    expect(css).toMatch(/\.entry-hero__copy h1 em[\s\S]*?font-style:italic !important/);
    expect(structuralBlocks).toContain("pricing-section--packages-comparison");
    expect(structuralBlocks).toContain("pricing-decision-stack");
  });

  it("renders approved sun accents on Our Story and FAQ", () => {
    expect(ourStory).toContain("mural-sun--profiles");
    expect(ourStory).not.toContain("mural-sun--values");
    expect(playAndPricing).toContain("mural-sun--faq");
  });

  it("separates adjacent Play color rooms and uses a lighter green Home overlay", () => {
    expect(structuralBlocks).toContain('<WaveDivider source="green" destination="navy" />');
    expect(playAndPricing).toContain('<WaveDivider source="navy" destination="navy" />');
    expect(css).toContain(".pricing-section--merged-offers { background-color:var(--sol-navy) !important;");
    expect(css).toContain("rgba(26,58,58,.82)");
  });

  it("uses one repeated text-color pattern per Values and Team card group", () => {
    expect(css).toMatch(/\.values-list article > span \{[\s\S]*?color:var\(--sol-mustard\) !important;/);
    expect(css).toMatch(/\.values-list article h3,[\s\S]*?\.values-list article p \{[\s\S]*?color:var\(--sol-light\) !important;/);
    expect(css).toMatch(/\.profile-card__copy > span,[\s\S]*?\.profile-card__copy > button \{[\s\S]*?color:var\(--sol-mustard\) !important;/);
    expect(css).toMatch(/\.profile-card__copy > h3,[\s\S]*?\.profile-card__copy > p:not\(\.sr-only\) \{[\s\S]*?color:var\(--sol-light\) !important;/);
  });

  it("adds one subtle shadow to every squash-ball variant", () => {
    expect(css).toMatch(/\.squash-ball \{[\s\S]*?filter:drop-shadow\(\.42rem \.58rem \.38rem rgba\(12,37,74,\.5\)\);/);
  });

  it("uses repeated text-role patterns in the first-timer and session card groups", () => {
    expect(newToSquash).not.toContain('offer.tone === "mango" ? "button--navy" : "button--mango"');
    expect(newToSquash).toContain('className="button--mango"');
    expect(css).toMatch(/\.first-step-card__top,[\s\S]*?\.first-step-card \.booking-handoff-note \{[\s\S]*?color:var\(--sol-mustard\) !important;/);
    expect(css).toMatch(/\.session-card__time small,[\s\S]*?\.session-card__info p \{[\s\S]*?color:var\(--sol-mustard\) !important;/);
    expect(css).toMatch(/\.session-card__time span,[\s\S]*?\.session-card__info h3 \{[\s\S]*?color:var\(--sol-light\) !important;/);
  });
  it("adds approved Home accents and closes routes that lacked a footer wave", () => {
    expect(home).toContain("mural-sun--home-paths");
    expect(home).toContain("squash-ball--home-club");
    expect(css).toContain(".home-paths .mural-sun--home-paths");
    expect(css).toContain(".club-intro--lifestyle .squash-ball--home-club");
    expect(pageShell).toContain('location === "/"');
    expect(pageShell).toContain('location === "/faq"');
    expect(pageShell).toContain('location === "/schedule"');
    expect(pageShell).toContain('location === "/play-and-pricing"');
    expect(pageShell).toContain('<WaveDivider source="navy" destination="navy" />');
  });
});
