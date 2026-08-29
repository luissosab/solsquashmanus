import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const css = readFileSync(new URL("./index.css", import.meta.url), "utf8");
const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

describe("Sol typography grammar", () => {
  it("loads the approved display, body, and emotional serif families", () => {
    expect(html).toContain("Archivo+Narrow");
    expect(html).toContain("Manrope");
    expect(html).toContain("DM+Serif+Display");
  });

  it("keeps heading emphasis in the display system instead of arbitrary italics", () => {
    expect(css).toMatch(/\.site-frame main h1 em,[\s\S]*?font-family:var\(--font-display\);[\s\S]*?font-style:normal;/);
  });

  it("reserves serif italics for the designated emotional copy roles", () => {
    expect(css).toMatch(/\.club-intro--lifestyle \.club-intro__section-intro h2 em[\s\S]*?font-family:var\(--font-serif\);[\s\S]*?font-style:italic;/);
    expect(css).toMatch(/\.story-intro > div:nth-child\(2\) > p,[\s\S]*?\.club-footer__main > p[\s\S]*?font-family:var\(--font-serif\);[\s\S]*?font-style:italic;/);
  });

  it("uses the body family and regular style for supporting copy", () => {
    expect(css).toMatch(/\.home-path-card p,[\s\S]*?\.pricing-card > p[\s\S]*?font-family:var\(--font-body\);[\s\S]*?font-style:normal;/);
  });
});
