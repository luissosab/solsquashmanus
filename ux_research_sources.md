# Sol Squash UX Research — Source Notes

This research supports a copy-preserving information-architecture and booking-flow recommendation. It does not authorize a visual redesign or a platform integration change.

## Playbypoint: Member Flow, Payments, and Operating Constraints

| Source | Verified findings relevant to Sol |
|---|---|
| [Playbypoint Platform Overview](https://www.playbypoint.com/product/) | Playbypoint supports configurable court rules, booking windows, programs by age/skill/tier, white-label mobile/web access, waitlists, direct lesson booking, lesson packages, memberships, guest access, integrated POS, split payments, tax calculation, transaction history, marketing, and analytics. It also states that court, tier, and time-slot rules are configurable. |
| [How Players Book a Court](https://help.playbypoint.com/en/articles/10859758-how-players-book-a-court) | The member journey is facility home → Book Now → date/court type → time slot → waiver when applicable → review and add players → checkout → confirmation. A user can later manage time, date, or cancellation under bookings. The UI shows availability and potentially a waitlist. |
| [All Reservation Rules Explained](https://help.playbypoint.com/en/articles/11395832-all-reservation-rules-explained) | The club, not the public website, controls availability, booking windows, advance-booking limits, guest limits, required players, payment timing, cancellation and refund rules, pricing models, waitlist behavior, and whether players can edit or cancel. Booking windows can vary between web and app. The daily booking opening time is 6:00 AM. |
| [Playbypoint Terms and Definitions](https://help.playbypoint.com/en/articles/13123108-playbypoint-terms-and-definitions-to-know) | Most clubs capture reservation payments at booking; memberships charge at signup or renewal; lessons/programs may charge at registration or attendance depending on setup. Player accounts retain payment methods, membership, booking history, and ratings. |
| [Payment Gateway Options](https://help.playbypoint.com/en/articles/12218199-payment-gateway-options-cardconnect-stripe-u-s-clients) | U.S. facilities can use Stripe or CardConnect; both support online and in-person payments. Stripe supports ACH in Playbypoint at the time of the document. Payment terminal choices and reuse constraints differ by processor. |
| [Playbypoint Webhooks](https://help.playbypoint.com/en/articles/12204677-guide-to-real-time-notifications-with-playbypoint-webhooks) | Optional paid webhooks can report membership, payment, reservation, program, and check-in events in real time. Publicly documented limits include three retry attempts and one facility-scoped subscription model. Some events do not trigger for upgrades/downgrades, payment-total-only reservation edits, program cancellations, or waitlist promotions. |
| [All Facility Rules Explained](https://help.playbypoint.com/en/articles/12143984-all-facility-rules-explained) | Facility configuration controls who can view the facility calendar (players, public, or teachers), the default booking-block length, and other public-facing availability settings. |
| [Playbypoint Page Builder Overview](https://help.playbypoint.com/en/articles/12748448-page-builder-overview-how-to-create-and-customize-your-facility-pages) | Playbypoint has a Page Builder for its facility pages. Documentation for reservation rules notes that Book Now copy and visibility are managed in Page Builder for Page Builder clubs, while legacy facility-page settings do not apply. |

## Racquet-Club Patterns

| Source | Verified finding relevant to Sol |
|---|---|
| [CourtReserve: Public Racquet-Facility Practices](https://courtreserve.com/public-tennis-pickleball-padel-facility-best-practices/) | A public racquet-facility operator panel emphasizes building the player base from beginner programs, clearly naming programs for the player, and balancing public access with protected member access. The source includes examples of members receiving earlier booking access than the general public. |
| [CourtReserve: Reservation Software Buyer’s Guide](https://courtreserve.com/court-reservation-software-buyers-guide/) | A self-service reservation experience should make real-time availability, booking, confirmations/reminders, self-service cancellation/rescheduling, lessons/programs, memberships, and integrated payments clear. It advises defining operational rules and making member guidance easy to find. |
| [Wilson Padel Club Austin](https://padelclubaustin.com/) | Its public page makes the three key actions explicit—book matches, join clinics, and membership—and exposes starter clinics, equipment expectations, booking access, and membership benefits at a glance. |
| [Union Padel Club: Get Started](https://www.unionpadelclub.com/get-started) | Its beginner page explicitly offers a coached first-time clinic, a faster “already ready” booking path, three visible booking steps, equipment guidance, a direct support route, a visible pricing summary, and short beginner FAQs. |

## UX, Checkout, and Accessibility Guidance

| Source | Verified finding relevant to Sol |
|---|---|
| [NN/g: Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/) | Show only the few important options first and reveal specialized information on request. Secondary controls must make their result obvious. More than two disclosure levels tends to harm usability; group complex material sensibly and test common task completion. |
| [NN/g: Navigation](https://www.nngroup.com/topic/navigation/) | Destination pages should fulfill a user’s information need; transition pages should guide them with short overviews. Labels require strong information scent—vague verbs and weak parallel wording confuse users. |
| [Baymard: Checkout Friction Audit](https://baymard.com/learn/audit-checkout-flow-hidden-friction) | A booking/purchase handoff should keep total price, taxes/fees, terms, next step, and confirmation clear; avoid checkout distractions; minimize default fields; make the primary action explicit; preserve data on errors; and test desktop and mobile paths. |
| [NN/g: Mobile Checkout UX](https://www.nngroup.com/articles/mobile-checkout-ux/) | On mobile, fast direct access, a visible order summary, clear off-site payment signaling, autofill-friendly fields, and limited payment choices reduce friction. |
| [W3C WCAG 2.2 Target Size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) | Pointer targets should be at least 24×24 CSS pixels or sufficiently spaced. Larger target areas aid touch users and users with reduced motor precision. |

## Initial Implications for Sol

1. **The Sol site should be a decision and reassurance layer—not a second reservation system.** Playbypoint owns live availability, player data, waivers, checkout, payment status, and policy enforcement. Sol should route visitors to the correct Playbypoint destination with a plain expectation of what happens next.
2. **Separate first-time, returning-player, and membership-decider journeys.** These are different questions: “Can I do this?”, “What can I book now?”, and “Is a membership worthwhile?”. They should not start on the same dense page.
3. **Keep detailed policy and FAQ copy available without making all visitors read it.** Surface essential conversion facts first—experience required, what to bring, price from, what happens after booking, and cancellation/booking-window notice—then reveal the approved detail in one clear secondary layer.
4. **Do not imitate a live calendar or payments UI.** The site’s existing mobile-first upcoming-session list is the appropriate discovery mechanism; each real booking, program, membership, payment, waiver, and account action should explicitly hand off to Playbypoint.
5. **Treat Sol’s public site as the brand and wayfinding layer, even if Playbypoint Page Builder is available.** Avoid duplicating a configurable facility calendar or reservation interface. Explain the booking expectation before the clearly labeled handoff, then let the configured Playbypoint facility complete the transaction.
