# 07 — Page Blueprints

*Full-depth section. Block-by-block, in stacking order, for every P0 page. Copy **intent** and
direction — not final copy.*

Each block gives: **name · job · elements · copy intent.**

---

## 7.1 Homepage

| # | Block | Job |
|---|---|---|
| 1 | Hero | Answer "what is this and is it for me" in one screen |
| 2 | Problem triage | Route symptom-led visitors immediately |
| 3 | Bottled water economics | Convert the comparison they are already making |
| 4 | How it works | Collapse the dealer model into three steps |
| 5 | Product framing | Introduce technology-then-capacity without a grid |
| 6 | Certification strip | Third-party proof, early |
| 7 | Commercial entry | Persistent, above-fold-adjacent route for business buyers |
| 8 | Dealer proximity | Make the network concrete |
| 9 | Cyprus water context | Establish local expertise |
| 10 | FAQ | Absorb the top objections |
| 11 | Final CTA | Catch anyone who scrolled |

**1 — Hero.** Elements: headline, one-sentence sub, primary CTA *Book a free water test*, secondary
*Find your filter*, a trust line (certifications + dealer count). *Intent:* name the water problem
in Cyprus and the fact that a local dealer will test it, free. Not a product shot and a slogan —
this visitor does not yet know what they need. **Do not lead with a bottle-of-clear-water image;**
every competitor does, and it says nothing.

**2 — Problem triage.** Five cards mapping to the water-problems hub: limescale · taste and odour ·
bottled water cost · safety and microplastics · sediment. *Intent:* each card states the symptom in
the customer's words ("your kettle furs up in a fortnight"), not the category name.

**3 — Bottled water economics.** A visible calculation: household size → annual bottled spend →
Fluux running cost → difference. *Intent:* show the arithmetic, never assert a saving. Requires
cartridge price and replacement interval — `[CLIENT INPUT REQUIRED]`; until then, ship it showing
only the bottled-water side with the €200–400 Tier B figure and its source.

**4 — How it works.** Three steps: *Tell us about your water → A local dealer tests it, free →
They quote; you decide.* *Intent:* pre-empt "am I about to be cold-called" by describing exactly
what happens. Include what does **not** happen: no obligation, one dealer, not five.

**5 — Product framing.** Two-step framing from [02](02-product-matrix.md) §2.5 — problem first,
then capacity. *Intent:* teach the mental model in one screen. **Never render a nine-cell grid.**

**6 — Certification strip.** NSF/ANSI 42 · 53 · 401 marks, linked to the certifications page.
*Intent:* borrowed credibility for an unknown brand. Gated on verification.

**7 — Commercial entry.** A full-width band: sectors served, the Everpure-compatibility hook, and
*Request a commercial quote*. *Intent:* a commercial buyer must recognise themselves without
scrolling to the footer.

**8 — Dealer proximity.** District list or map thumbnail, dealer count, *Find your dealer*.
*Intent:* the network is real and near you.

**9 — Cyprus water context.** The desalination-remineralisation fact
([03](03-cyprus-water-context.md)). *Intent:* the counterintuitive hook that proves expertise.

**10 — FAQ.** Six questions drawn from the objection map ([14](14-trust-objections-analytics.md)).

**11 — Final CTA.** Water test, plus phone and WhatsApp.

## 7.2 Product line (series) page

Template for `/products/fx/`, `/hf2/`, `/h-series/`.

| # | Block | Job / notes |
|---|---|---|
| 1 | Series hero | What this technology is, and who it is for. Name the problem it solves, not the media. |
| 2 | Technology explainer | Diagram: what the media does, what it removes, what it does **not**. Scope honesty is the trust asset. |
| 3 | Which size | **The capacity ladder.** Lead with change interval, not dimensions — [02](02-product-matrix.md) §2.4. |
| 4 | SKU cards | 3 cards. Each: capacity, flow, change interval, one-line "best for". No prices. |
| 5 | Compare row | Link into the comparison tool, pre-scoped to this series. |
| 6 | Certifications | Per-series marks and certificate numbers. |
| 7 | Compatibility | Which heads this fits. **The conversion hook for existing Everpure owners.** |
| 8 | Applications | Homeowner and commercial use cases, segmented. |
| 9 | FAQ | Series-specific. |
| 10 | Enquiry CTA | Quote request + water test. |

## 7.3 SKU detail page — working without price or cart

The hardest page in the plan. A conventional product page's entire structure hangs off price and
*Add to basket*; remove both and it collapses unless something replaces them.

### What price and "add to cart" actually do

Four distinct jobs, which must be replaced individually:

| Job | Replacement |
|---|---|
| **Signals tier** — "is this for me?" | An explicit *Best for* statement and a positioning band within the series |
| **Enables comparison** | A complete, honest specification table and the compare tool |
| **Provides the action** | *Request a quote*, pre-filled from context |
| **Signals commitment** — a real thing you can actually buy | Availability, dealer count, and lead time |

**The absent-price risk:** an unpriced product reads as *expensive and evasive*. The site must
address cost explicitly rather than hoping nobody notices. Recommended: a **cost transparency
block** (block 9) that gives the running cost — cartridge price and change interval — even though
the installed system price varies by dealer. Being open about the recurring cost while explaining
that installation depends on the property is honest, defensible, and far better than silence.

`[CLIENT INPUT REQUIRED]` Cartridge retail price. Without it this block cannot ship, and the
no-price objection stays unanswered.

### Block stack

| # | Block | Elements | Intent |
|---|---|---|---|
| 1 | Breadcrumb + SKU code | Series > SKU; code in mono | Orientation; the code is a trust signal |
| 2 | Hero gallery | Product, cartridge-in-head, scale reference, installed context | A cartridge is unfamiliar — show it in a real cabinet |
| 3 | Identity | Name, series, one-line "best for", key specs at a glance | Answer "is this mine" in five seconds |
| 4 | **Size selector** | 10 / 15 / 17 segmented control | **Swaps specs in place without a page load.** Labelled by *change interval*, with capacity secondary. Updates URL for shareability |
| 5 | Primary CTA | *Request a quote* + *Book a water test* | Sticky on mobile |
| 6 | Specification table | Full table, mono figures, `verified` badge per row | The comparison substrate. Unverified rows must not render — [12](12-technical-specification.md) §12.3 |
| 7 | Compatibility | Head models, connection size, cross-reference link | Converts the installed base |
| 8 | Requirements | Pressure, temperature, clearance, plumbing, flush procedure | Pre-empts "will this work in my kitchen" |
| 9 | **Cost transparency** | Cartridge cost, interval, annual running cost, bottled-water comparison | Replaces price. See above |
| 10 | Filter life & replacement | Interval, reminder opt-in, what happens if you overrun | Recurring revenue capture |
| 11 | Installation | What a dealer does, how long, what they need | Answers "who installs this" |
| 12 | Certifications | Marks, certificate numbers, what each covers in plain language | Strongest trust asset |
| 13 | Downloads | Spec sheet PDF, installation guide, certificates — **locale-correct** | A **soft conversion**: email optional, not required |
| 14 | Compare | Against siblings and the other series | |
| 15 | FAQ | SKU-specific | |
| 16 | Dealer proximity | Nearest dealers who fit this | Closes the loop |
| 17 | Final enquiry | Full form or link | |

### Size selector behaviour

- Updates specs, downloads, cost and compatibility **in place**, no reload
- Pushes a URL (`?size=15`) so a selection is shareable and analytics-visible
- Carries the selection into the enquiry form as a pre-filled field
- Default: the mid size (15) — the most broadly applicable, and it makes the ladder legible in both
  directions
- **Never disables an option.** If a size is unavailable, show it with a note; a greyed control
  prompts "why not?" and answers nothing

### Downloads as conversion

The spec-sheet download is the **highest-intent action a commercial visitor takes short of
enquiring**. Do not gate it behind a form — in a technical category that reads as obstructive and
the buyer simply leaves. Offer the file directly, with an optional *"email me this"* that captures
the address if they want it. Track downloads as a conversion event regardless
([14](14-trust-objections-analytics.md)).

## 7.4 Selector tool page

Full logic in [09](09-selector-tool.md).

| # | Block | Notes |
|---|---|---|
| 1 | Intro | Set expectations: four questions, about a minute, ends with a recommendation and no obligation |
| 2 | Question canvas | One question per screen. Progress indicator. Back always available |
| 3 | Result | Recommended SKU + why, in plain language referencing their answers |
| 4 | Alternative | One runner-up with the trade-off stated — proves the tool reasoned |
| 5 | **Pre-filled enquiry** | Answers carried into the form; nothing re-entered |
| 6 | Fallback | No clean match → dealer contact, never a dead end |
| 7 | Save / share | Email the result — a soft conversion for the not-ready |

## 7.5 Comparison page

Full detail in [10](10-comparison-experience.md).

Blocks: intro and scope · **column selector** (2–3 SKUs) · **sticky attribute table** with the
header row pinned · difference highlighting (a *"show only differences"* toggle) · a plain-language
verdict per column · enquiry CTA carrying the compared set into the form.

## 7.6 Dealer locator

| # | Block | Notes |
|---|---|---|
| 1 | Intro + search | District selector first, postcode/geolocation second. **District is the primary control** — it is how Cyprus is organised |
| 2 | Map + list | Side-by-side desktop; **list-first with a map toggle on mobile** — a map is the wrong default on a phone |
| 3 | Filters | District, service type (install / service / commercial), sector specialism |
| 4 | Dealer card | Name, district(s), specialisms, services, response commitment, phone, WhatsApp, *Request a quote* |
| 5 | No-match state | Never empty. Fall back to the central enquiry — [08](08-lead-engine.md) §8.5 |
| 6 | Become a dealer | Footer band — coverage gaps are recruitment opportunities |

**Dealer card must show:** trading name, districts covered, services, sector specialisms, a
response commitment ("replies within one working day"), and direct contact. **Should not show:**
ratings (no volume to make them meaningful at launch, and a 3-review average reads worse than
none).

## 7.7 Commercial landing page

| # | Block | Intent |
|---|---|---|
| 1 | Hero | Speak to operations, not households: uptime, equipment protection, audit compliance |
| 2 | Sector routes | Hotels · Foodservice · Offices & clinics · Developers |
| 3 | **Everpure compatibility** | *"Already running Everpure or 3M Aqua-Pure? Same heads, different cartridge."* **The single strongest commercial hook** |
| 4 | Capacity & flow | Specification-led, litres and LPM |
| 5 | Service & continuity | Contracts, supply lead times, what happens on a failure |
| 6 | Documentation | Spec sheets, certifications, HACCP-relevant records |
| 7 | Projects | Reference installations `[CLIENT INPUT REQUIRED]` |
| 8 | Named contact | **A person and a direct line, not a form.** Commercial buyers phone |
| 9 | Commercial enquiry | Full form |

## 7.8 Enquiry form page

Field sets in [08](08-lead-engine.md) §8.3.

| # | Block | Notes |
|---|---|---|
| 1 | Context header | Reflect back what they came from ("Quote for FX-15, Limassol") so it feels continuous |
| 2 | Progressive form | Grouped steps, visible progress. About you → about your water → how to reach you |
| 3 | **Consent block** | Separate, specific, unticked consent to pass details to a named dealer. **Not bundled with marketing consent** — [12](12-technical-specification.md) §12.6 |
| 4 | Expectation setting | Who contacts them, how soon, from where — beside the submit button, where it answers the hesitation |
| 5 | Alternative contact | Phone and WhatsApp, equally prominent |
| 6 | Trust reinforcement | Certifications, no-obligation statement, privacy link |

**Confirmation state** is a distinct page (not a toast): what happens next, which dealer, expected
timeframe, a reference number, contact details for the dealer, and a *"wrong dealer? tell us"*
escape. See [08](08-lead-engine.md) §8.7.

## 7.9 Water test booking page — the primary homeowner conversion

Justified in [08](08-lead-engine.md) §8.2. It gets its own page because it is the main CTA
sitewide.

| # | Block | Intent |
|---|---|---|
| 1 | Hero | *"Find out what's actually in your water. Free, at home, no obligation."* |
| 2 | What happens | Dealer visits, tests hardness/chlorine/TDS, explains results, quotes only if asked. **Say explicitly there is no obligation** |
| 3 | What is measured | Sets expectations, demonstrates rigour. `[CLIENT INPUT REQUIRED]` — the actual test parameters |
| 4 | Booking form | **Shortest form on the site.** District, property type, name, phone, preferred time |
| 5 | Consent | Same dealer-sharing consent |
| 6 | Reassurance | No obligation, no cold-calling, one dealer only |
| 7 | Alternative | Phone and WhatsApp booking |

**Why this converts better than a quote request:** a quote asks the visitor to have already
decided. A water test asks only that they are curious. It costs the dealer an hour and hands them a
diagnosed lead and a reason to be standing in the customer's kitchen — which is where this product
is actually sold.
