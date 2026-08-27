# Handoff Prompt — Sol Squash Alternative Version

## Your mandate

You are continuing the **Sol Squash** project at `/home/ubuntu/sol-squash-reimagined`. The current approved preservation baseline is called the **Founders’ Version**. It is checkpoint **`3064699b`**. Do not overwrite it, reset it, or lose it. The earlier structure-only safety checkpoint is **`fdef683a`**; the historically important pre-prototype checkpoint is **`17a0e0ae`**.

Your task is to create an **alternative information architecture** that is substantially easier to navigate and more visually coherent in its editorial flow than the Founders’ Version. You may reshuffle routes, navigation labels, page order, and section order. You may improve contextual navigation. You must **not** create a different design system.

> Treat this as an information-architecture and content-flow redesign, not a visual-brand redesign.

## Non-negotiable preservation rules

Every approved copy block and every existing link destination in the Founders’ Version must remain available in the alternative version. Do not summarize, shorten, rewrite, remove, or invent copy. When dense copy would obstruct the new flow, use progressive disclosure such as an accordion, drawer, dialog, expandable card, or clearly labeled detail view, but keep the full approved text in the DOM.

Do not fabricate reviews, ratings, testimonials, member counts, availability, or other user-generated material. Do not add an embedded Playbypoint iframe or a CSS calendar grid. The existing **Upcoming Sessions** mobile-first vertical list is the scheduling model to retain.

Keep every real image, supplied logo, video, and existing link functional. Use the supplied logo at `/manus-storage/sol-squash-logo_dd364204.png`; do not recreate or approximate the logo in SVG. Existing media must continue to use `/manus-storage/...` paths and must not be copied into the project source tree.

## Immutable visual and interaction system

The alternative version must retain the Founders’ Version’s existing visual language. The website is a warm, mural-led, modern Miami squash club—not a sterile SaaS product, a generic fitness template, or a literal 1970s costume piece.

| Element | Requirement |
|---|---|
| **Palette** | Keep the current mapped palette and its roles: navy `#1a2f6b`, teal `#1a3a3a`, green `#3db234`, orange `#e8471a`, blue `#2563d4`, and cyan `#00c4c4`. Retain Sol mustard `#F4A911` as the intentional exception. Do **not** reintroduce the bright prototype yellow `#f5c518` as a replacement surface or divider fill. |
| **Surfaces** | No white page or card surfaces. White is permitted as text only. Continue using edge-to-edge navy, teal, green, mustard, and orange fields. All containers, images, and cards remain rounded-3xl. |
| **Mural grammar** | Retain real mural/court/palm language, the authentic squash-ball motif with two **off-centre** dots, and the sun/logo imagery. Squash balls remain lime/green or coral/orange as appropriate; cyan remains a wave and signal accent, not a ball fill. Avoid arbitrary badges, lasso lines, or unrelated geometric decorations. |
| **Waves** | Retain the continuous cyan SVG divider geometry. A wave must be a single clean cyan seam between its actual adjacent backgrounds. Its `source` and `destination` fill colors must exactly match the preceding and following section surfaces. There must never be a thin bright-yellow strip, a second cyan band, a background bleed, or a stacked empty wave between sections. |
| **Motion** | Keep Lenis momentum scrolling. Keep Framer Motion typography reveals, page transitions, and magnetic CTAs with spring physics (`type: "spring"`, `stiffness: 400`, `damping: 10`). Respect reduced-motion behavior. |
| **Our Story reading experience** | Retain the focused green/teal right-side story panel that opens from **READ OUR STORY**, with the rest of the site dimmed and blurred for legibility. Keep profile cards fully clickable while retaining their Read Bio controls. |
| **Hero treatment** | Keep the real looping Home intro video (`/manus-storage/sol-squash-intro_5d0ba482.mp4`) full-bleed behind the overlay: taller near-square on desktop and full-height vertical on mobile. |

Do not borrow fonts, component styling, imagery, layout aesthetics, visual assets, or design motifs from the supplied prototype HTML file. That file was previously used only to understand the Founders’ Version’s navigation structure and color inputs. It is **not** a design reference for this alternative version.

## Suggested alternative navigation

Use the Founders’ Version content, but make the visitor’s intent obvious. The proposed top-level navigation is:

| Navigation item | Existing content that belongs there | Primary visitor question answered |
|---|---|---|
| **Home** | Club introduction, real facility/amenity moments, one clear next-session cue, a concise route chooser, a short Our Story invitation, and the mural-led closing moment. | “What is Sol and where do I begin?” |
| **Play** | Court booking, Open Play, coached sessions, private lessons, Taste of Sol, and the existing Upcoming Sessions list or a clear path to it. | “I want to play now.” |
| **New to Squash** | First Lesson with the Pros, Beginner Squash Clinic, first-timer reassurance, equipment/shoe guidance, and beginner-specific FAQs. | “I have never played—what should I do?” |
| **Memberships & Prices** | Sol Club, Sol Junior, packages, all existing pricing, membership terms, and joining FAQs. | “What does joining cost and include?” |
| **Our Story** | The existing founder story, journey, credentials, Bruna/Vini/Frida profiles, values, and right-side reading drawer. The visible label must remain **Our Story**. | “Who built Sol and why?” |
| **FAQ** | The complete six-topic progressive FAQ system: The Basics, How It Works, Never Played, Joining Sol, For the Kids, Booking. | “I need a specific answer.” |
| **Book a Session** | A persistent primary CTA, visually distinct from the navigation, leading to the existing Upcoming Sessions vertical list. | “Show me what I can book.” |

This table is the recommended information architecture, not a visual reference. Preserve existing context-sensitive calls to action, but update their routes so they do not lead to legacy duplicate pages or dead ends. Keep a reliable Home return and scroll-to-top behavior for every main route.

## Content-flow goals

The Founders’ Version placed content according to an externally supplied structure. The alternative version should improve the journey without losing any approved text or links.

1. **Home should orient, not exhaust.** It should provide a strong first impression, establish what Sol is, help visitors self-identify as a returning player, first-timer, or prospective member, and then point them decisively to the right destination. It must not behave as a duplicate of the entire site.

2. **Play should serve active intent.** Keep all the existing ways-to-play information together and make the upcoming session list/book action easy to reach. Taste of Sol should read as a low-commitment bridge toward membership, not as a buried FAQ answer.

3. **New to Squash should remove anxiety.** All beginning-player copy and practical guidance should be together, including First Lesson, Beginner Clinic, equipment reassurance, and beginner FAQs. Do not hide this journey under a generic Play route.

4. **Memberships & Prices should support comparison.** Place adult membership, junior membership, packages, drop-in comparison, all prices, and relevant terms in one coherent progression. Avoid splitting a membership decision across multiple pages.

5. **Our Story remains narrative.** Retain the current strong story treatment and profile drawer. It should not become a generic corporate About page.

6. **FAQ remains comprehensive but non-overwhelming.** Keep the existing six-topic system and full copy, while using its topic switcher and accordion disclosure to reduce density. Link answers back into the appropriate destination whenever a person needs to act.

## Project files to inspect before editing

| File | Why it matters |
|---|---|
| `client/src/App.tsx` | Active Wouter route map, including visible and legacy routes. |
| `client/src/components/SiteHeader.tsx` | Sticky desktop/mobile navigation and persistent Book action. |
| `client/src/components/ClubFooter.tsx` | Footer navigation and closing CTA paths. |
| `client/src/components/PageShell.tsx` | Shared route transition and scroll-to-top behavior. |
| `client/src/components/WaveDivider.tsx` | Source/destination wave colors and the seam geometry that must remain intact. |
| `client/src/components/StructuralContentBlocks.tsx` | Temporary structural blocks from the Founders’ Version; reuse, refactor, or relocate their existing approved content rather than losing it. |
| `client/src/pages/Home.tsx` | Current Home sections, real images, and video hero. |
| `client/src/pages/NewToSquash.tsx` | Existing first-timer content and reusable `FirstTimerContent`. |
| `client/src/pages/PlayAndPricing.tsx` | Existing Play/Join/FAQ source copy, pricing, FAQs, and dialogs. |
| `client/src/pages/Schedule.tsx` | Required mobile-first Upcoming Sessions experience. |
| `client/src/pages/OurStory.tsx` | Story drawer, credentials, mandatory profile images, and values. |
| `client/src/index.css` | The established visual system and final palette overrides. Do not casually override it with a new design. |
| `todo.md` | Existing implementation history and completed Founder-Version alignment work. |

## Implementation safeguards

Before changing layout or routes, create a new explicitly named checkpoint from **`3064699b`**. Never use `git reset --hard`; use the project checkpoint mechanism for recovery. Maintain responsive behavior at desktop and mobile widths, and run `pnpm check && pnpm build` after the final changes.

Use the existing components and CSS classes wherever practical so the alternate architecture visibly belongs to the same Sol site. When you introduce a new route label such as **Memberships & Prices**, change only navigation and structural placement—do not replace the current typography, color system, media treatment, waves, or motion grammar.

## Acceptance checklist

- [ ] The Founders’ Version checkpoint `3064699b` remains available for direct contrast and rollback.
- [ ] All approved copy remains present, verbatim, and accessible in the DOM.
- [ ] All existing link destinations remain functional and route to a relevant current page or booking destination.
- [ ] The top-level navigation clearly separates existing players, first-timers, prospective members, story readers, and FAQ users.
- [ ] Book a Session is a persistent primary action, not a confusing duplicate navigation category.
- [ ] The visible label remains **Our Story** and its right-side focused reading panel still works.
- [ ] The current palette, mustard exception, mural imagery, squash-ball rule, cyan wave seams, real media, rounded forms, Lenis, Framer Motion, and magnetic CTAs are preserved.
- [ ] No white surfaces, bright-yellow wave wedges, design borrowing from the reference HTML, mocked reviews, calendar grids, or embedded booking iframe are introduced.
- [ ] Desktop and mobile routes are visually checked, `pnpm check && pnpm build` succeeds, and a new post-change checkpoint is saved.

Begin by confirming that you understand this is an alternate **content architecture** built on the same visual and editorial system—not a replacement brand or a redesign based on the old HTML file.
