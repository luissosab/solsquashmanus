import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const css = readFileSync(new URL("./index.css", import.meta.url), "utf8");
const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const magneticButton = readFileSync(new URL("./components/MagneticButton.tsx", import.meta.url), "utf8");
const structuralBlocks = readFileSync(new URL("./components/StructuralContentBlocks.tsx", import.meta.url), "utf8");

describe("Sol typography grammar", () => {
  it("loads the approved display, body, and emotional serif families", () => {
    expect(html).toContain("Archivo+Narrow");
    expect(html).toContain("Manrope");
    expect(html).toContain("DM+Serif+Display");
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
    expect(css).toContain(".mural-sun--values");
    expect(css).toMatch(/\.values-list article:nth-child\(1\)[\s\S]*?\.values-list article:nth-child\(4\)/);
  });
});
