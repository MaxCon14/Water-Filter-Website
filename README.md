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
