# Sol Squash Website Design Direction

## Three Stylistic Approaches

| Theme Name | Very Brief Intro | Probability |
| --- | --- | --- |
| **Sun-bleached Court Club** | A physical 1970s Miami courtside world with hand-painted murals, saturated poolside color, worn paper signage, and sun-softened sport photography. | 0.07 |
| **Palm-Print Athletic Journal** | A bright editorial scrapbook composed from inked match notes, tropical flora, and oversized athletic type. | 0.03 |
| **Night Rally Neon** | A deep-blue tropical after-dark club accented by hot neon linework and humid late-session energy. | 0.08 |

## Chosen Approach — Sun-bleached Court Club

### Design Movement
**1970s Miami resort modernism** interpreted as a physical neighborhood squash clubhouse rather than a luxury hotel. The visual language combines poolside signage, hand-painted wall murals, vintage athletic ephemera, and exuberant tropical color.

### Core Principles

1. **Physical over digital:** use paper texture, painted linework, sun-shadowed imagery, and tactile blocks instead of sterile interface chrome.
2. **Color in big gestures:** build every major section from edge-to-edge blocks of deep palm green, mango yellow, midnight navy, and off-white.
3. **Playful athletic energy:** typography leans tall, loud, and slightly imperfect; interaction is bouncy, immediate, and generous.
4. **Layers with a reason:** image placeholders, session cards, leaf forms, court-line motifs, and content never feel like floating dashboard widgets.

### Color Philosophy
The site uses **Palm Green (#1B4332)** as the grounding, club-house color; **Mango Gold (#F4A911)** as the sun-struck invitation; **Rally Navy (#0C254A)** for dusk energy and white typography; **Chalk (#FAFAFA)** for breathing room; and **Electric Pool (#00E5FF)** exclusively for the continuous wave dividers and high-energy signals. The colors should feel printed, painted, and inhabitable—not glossy or technical.

### Layout Paradigm
An **unspooling promenade** replaces a centered web-page grid. The visitor moves from a wide court-side hero to a stacked sequence of color rooms. Each section tilts its content relationship: left-weighted copy against right-side visual placeholders, then full-bleed session cards, then a dark strip of club rituals. Sections overlap through continuous waves, rising leaves, and cropped visual frames.

### Signature Elements

1. **Electric Pool sine waves:** continuous #00E5FF wave dividers at each major shift in atmosphere.
2. **Court-corner frames:** thick rounded outlines and curving court-line marks that surround images, sessions, and venue moments.
3. **Sun sticker:** a hand-painted, circular burst that marks prices, calls-to-action, or key moments without becoming a badge system.

### Interaction Philosophy
Nothing should behave like enterprise software. Booking and joining actions attract the pointer with a springy magnetic pull. Session cards lift and shift like physical notice-board cards. Full copy is always present in the DOM; longer explanations are revealed through expandable drawers, not shortened or rewritten.

### Animation
Framer Motion drives a staggered reveal for hero lettering, section labels, and session rows. Page transitions fade and travel on a gentle coastal curve. Primary calls-to-action use a spring transition with `type: "spring"`, `stiffness: 400`, and `damping: 10`. Decorative palms, sun stickers, and image frames may drift a few pixels; all motion respects reduced-motion settings. Lenis supplies momentum scrolling across the experience.

### Typography System
**DM Serif Display** handles expressive display headlines in oversized, compact line-height. **Archivo Narrow** delivers punchy labels, navigation, timings, and CTA words. **Manrope** supports dense explanatory copy at a readable measure. Headlines should enter in fragments and feel like painted sign lettering; operational information is clear, grounded, and never tiny.

### Brand Essence
**Sol Squash is Miami’s sociable, sun-soaked squash clubhouse for people who want a better rally and a better after-rally.**

Personality: **radiant, neighborly, kinetic**.

### Brand Voice
Headlines sound inviting and physical, as if spoken from courtside. Calls-to-action are brief, warm, and decisive. Microcopy is plainspoken rather than salesy.

Examples:

> **Bring your racquet. Find your rally.**

> **The court is calling—come play a good one.**

### Wordmark & Logo
Use the **user-provided Sol Squash logo asset only**. The surrounding brand system supports it with an oversized sun-disc, curved court lines, and a warm painted edge—never a generated or guessed logo mark.

### Signature Brand Color
**Electric Pool — #00E5FF**. It is the unmistakable surge that runs through every major section boundary and motion cue.

## Style Decisions

- All primary containers, images, cards, drawers, and mobile navigation surfaces use `rounded-3xl` or a larger equivalent.
- Major sections meet through continuous sine-wave SVG dividers in `#00E5FF`; straight horizontal rules are not used.
- Full supplied copy remains verbatim in the rendered application, with progressive disclosure used only to manage density.
- Visual blocks use explicit image labels in the component markup so photography/art direction remains visible before final imagery is supplied.
- Electric Pool `#00E5FF` is reserved for wave dividers, court-line loops, motion/high-energy marks, and small signal accents rather than large functional surfaces.
- Pricing, sessions, FAQs, and play options are rendered as physical clubhouse ephemera: printed rate sheets, posted cards, punched session notices, and painted signboards.
- Every non-photographic image frame uses a sun-softened, mural-like texture and descriptive art-direction label so it reads as a real Sol moment, never an abstract UI placeholder.

## Supplied Asset Findings

- **Logo:** the supplied `Sol Squash logo.png` is a large square navy asset with an emphatic lime-green “SOL SQUASH” wordmark and a friendly yellow sun-face device. It will be used as the only logo artwork in the global header, navigation drawer, footer, and favicon handling.
- **Reference social art:** the reviewed club graphic uses a mustard field, a condensed uppercase navy headline, oversized type, and a small logo lockup. The redesign will carry forward that hot-sun color contrast and poster-scale typography while moving the information architecture into a more fluid, complete web experience.
- **Current public site review:** preserve the useful club hierarchy—new-to-squash entry point, ways to play, membership comparisons, schedule, founders, and FAQ—but replace the fragmented, white-first layout with an integrated five-route clubhouse journey built from large color rooms and responsive progressive disclosure.
