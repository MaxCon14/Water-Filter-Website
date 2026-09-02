# Fluux Cyprus — Website Pre-Build Plan

The complete pre-build plan for the Fluux water filtration website in Cyprus. Written to be
worked from by a design team and a development team simultaneously, and readable by a
non-technical client stakeholder.

**The site's entire job:** build enough confidence that a stranger hands over their contact
details, then route that lead to the right dealer with enough context that the dealer can quote
without a discovery call. Every recommendation in these documents is judged against that sentence.

---

## How to read this

| Doc | Section | For |
|---|---|---|
| [00 — Executive summary](docs/00-executive-summary.md) | The one-page version | Stakeholder |
| [01 — Context & research findings](docs/01-context-and-findings.md) | Fixed context, six findings that reshaped the brief | Everyone |
| [02 — Product matrix](docs/02-product-matrix.md) ★ | What FX / HF2 / H actually are, and how to frame them | Everyone |
| [03 — Cyprus water context](docs/03-cyprus-water-context.md) | The persuasion engine | Content, SEO |
| [04 — Bilingual architecture](docs/04-bilingual-architecture.md) | EN/EL as a build constraint | Design, Dev |
| [05 — Positioning & messaging](docs/05-positioning-messaging.md) | Voice, pillars, value props | Content, Design |
| [06 — Information architecture](docs/06-information-architecture.md) ★ | Sitemap, slugs, audience split | Everyone |
| [07 — Page blueprints](docs/07-page-blueprints.md) ★ | Block-by-block for every P0 page | Design, Content |
| [08 — Lead engine](docs/08-lead-engine.md) ★ | Forms, qualification, dealer routing | Everyone |
| [09 — Filter selector tool](docs/09-selector-tool.md) ★ | Decision tree and form pre-fill | Design, Dev |
| [10 — Comparison experience](docs/10-comparison-experience.md) | Side-by-side UX | Design, Dev |
| [11 — Design direction](docs/11-design-direction.md) | Art direction, type, colour, motion | Design |
| [12 — Technical specification](docs/12-technical-specification.md) | Stack, content model, GDPR | Dev |
| [13 — SEO & content strategy](docs/13-seo-content-strategy.md) | Per-locale clusters, structured data | Content, SEO |
| [14 — Trust, objections & analytics](docs/14-trust-objections-analytics.md) | Objection map, KPIs | Everyone |
| [15 — Delivery roadmap](docs/15-delivery-roadmap.md) | Phases, dependencies, risks | PM |
| [99 — Open questions](docs/99-open-questions.md) | **Blocking client input, ranked** | Client |
| [99 — Assumptions](docs/99-assumptions.md) | Everything we assumed | Everyone |

★ = full-depth sections. The lead engine, IA, blueprints, selector and product matrix carry the
most specification because the build depends on them most.

---

## Read this before you trust a number

Two rules govern every figure in these documents:

1. **No Fluux specification, certification, capacity or flow rate is invented.** Anything not
   found in a source is marked `[CLIENT INPUT REQUIRED]`.
2. **No Cyprus water statistic is invented.** Everything is either cited to a named source or
   flagged unverified.

**Source confidence is low across the board and you should treat it that way.** The primary
manufacturer site (`fluux.co.kr`) and every distributor site were unreachable from the research
environment. All product specifications below come from search-result summaries of distributor and
retailer listings — *secondary sources, unverified against the manufacturer*. Several Cyprus water
figures come from competitors' own marketing pages, which have an interest in the numbers being
alarming.

Every specification table is labelled with its source tier. Nothing here should reach a customer-
facing page, a spec sheet, or a legal claim until Fluux confirms it in writing. See
[99 — Open questions](docs/99-open-questions.md).

The one exception, verified directly: **the Greek typeface support in
[11 — Design direction](docs/11-design-direction.md)** was checked against Google Fonts' own
`METADATA.pb` subset declarations, not asserted from reputation.

---

## Status

Pre-build plan, first pass. Not yet reviewed by the client. The single highest-value action is
answering the top five items in [99 — Open questions](docs/99-open-questions.md) — the first two
change the information architecture.

---

## The website

The site itself is now built, in `src/`. It implements the plan above — the
information architecture from [06](docs/06-information-architecture.md), the design
system from [11](docs/11-design-direction.md), and the lead engine from
[08](docs/08-lead-engine.md).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run preview  # serve the build
npm run verify   # run the checks below against a running preview
```

**63 pages, both locales, fully static.** English at `/en/…`, Greek at `/el/…` with
genuinely translated slugs (`/en/products/fx/fx-15/` ↔ `/el/proionta/fx/fx-15/`),
driven by the route manifest in `src/i18n/manifest.ts`.

### What is wired up

| Feature | Where | Notes |
|---|---|---|
| Filter selector | `src/components/pages/Selector.astro` | Four questions, decision tree in `src/data/selector.ts`. Three honest exits: "not sure" → water test, "whole house" → scope refusal, "a business" → contact |
| Comparison | `src/components/pages/Compare.astro` | 2–3 SKUs, URL state, identical rows collapse rather than pad |
| Enquiry + water test | `Enquiry.astro`, `WaterTest.astro` | Progressive fields, contact details last, pre-filled from the selector |
| Consent | `src/components/Consent.astro` | Three separate unticked consents; dealer sharing is required and explained |
| Verification gate | `src/components/SpecTable.astro` | A spec with `verified: false` renders its source tier; a missing one renders "Specification pending" and never a guess |

### Design decisions worth knowing

**The signature is the measurement readout** — every number on the site carries its
provenance (`Source A/B/C`), because most of the specification data is unverified.
The honesty constraint from [02](docs/02-product-matrix.md) became the visual language
rather than a disclaimer at the bottom.

**Fonts are self-hosted** (`public/fonts/`) — loading them from Google's CDN would
transmit visitor IPs to a third country. Greek and Latin subsets load separately, so
an English page never downloads Greek glyphs. Commissioner's Greek is drawn by a Greek
type designer, which is why it was chosen over the more obvious options — most of which
[have no Greek at all](docs/04-bilingual-architecture.md#47-typography--the-hard-constraint).

**No cookie banner**, deliberately: cookieless analytics, self-hosted fonts, no third-party
embeds. The only cookie records the language you chose.

### Verification

`npm run verify` checks the four things this build can silently get wrong:

1. Every page renders with no console errors
2. No broken internal links
3. **hreflang is reciprocal and self-referencing** — a non-reciprocal pair is silently
   ignored by search engines, and this caught two real bugs during the build
4. WCAG 2.1 AA via axe-core

Current state: **63 pages, 0 broken links, 0 console errors, 0 WCAG 2.1 AA violations.**

### What is deliberately not real

The dealer list is **empty** (`src/data/site.ts`) and the locator says so rather than
inventing names — real dealer data is [blocking question #6](docs/99-open-questions.md).
Phone and WhatsApp numbers are placeholders and marked as such. Forms validate and
confirm but submit nowhere. Every product specification is distributor-sourced and
labelled; none is manufacturer-confirmed.
