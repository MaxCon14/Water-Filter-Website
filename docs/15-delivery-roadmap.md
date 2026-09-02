# 15 — Delivery Roadmap

*Durations are indicative and assume a small dedicated team: one designer, one to two developers, a
content lead, a Greek translator, and an available client decision-maker. **The critical path runs
through client answers and dealer data, not through design or code.***

---

## 15.1 Phases

### Phase 0 — Answers & assets · ~2 weeks, runs alongside Phase 1

**This phase exists because the plan cannot be finished without it.**

| Deliverable | Owner | Blocks |
|---|---|---|
| Answers to blocking questions 1–5 ([99](99-open-questions.md)) | Client | Product IA, selector logic |
| Verified specification data, all SKUs | Client | Every product page |
| Brand assets, or agreement to create them | Client | All design |
| Dealer network list — coverage, specialisms, contacts | Client | **Locator, routing, district pages** |
| Confirmation on free water testing | Client | **The primary CTA** |
| WDD / district water board data pass | Content | Water content credibility |
| Greek keyword research (original, not translated) | SEO | Greek IA and slugs |

**Nothing in Phase 0 is design work, and all of it gates design work.** Start it on day one.

### Phase 1 — Discovery & definition · ~2 weeks

Competitor audit (deeper than [01](01-context-and-findings.md) §1.3); stakeholder interviews;
**dealer interviews** — the most valuable and most commonly skipped research on this project;
validated IA; content inventory; technical architecture sign-off; analytics measurement plan.

*Dependencies:* Phase 0 answers 1–2 for the product IA.

### Phase 2 — Design · ~4 weeks

Art direction routes → chosen route ([11](11-design-direction.md)); design system and tokens;
component library; **P0 templates designed in Greek and English in parallel**; selector and
comparison prototypes; accessibility annotations.

**Two rules that determine whether this phase succeeds:**

1. **Design the Greek comps in parallel, with real Greek copy.** Not Latin lorem ipsum, not "we'll
   check it later". Layouts that only work in English will be discovered in QA, when they are
   expensive.
2. **Prototype the selector and the multi-step form early**, and test them with five real people.
   They are the site's two conversion-critical interactions and the two most likely to be wrong on
   the first attempt.

*Dependencies:* Phase 0 brand assets; Phase 1 IA.

### Phase 3 — Build · ~6 weeks, overlapping Phase 4

Front-end from the component library; CMS schema and editor configuration; **lead engine — forms,
scoring, routing, consent logging**; selector; comparison; dealer locator; CRM and email
integration; i18n routing and hreflang; performance and accessibility CI.

**Build the lead engine first, not last.** It is the highest-risk component, it depends on
commercial agreements that may still be moving, and it is the one thing the site cannot launch
without.

*Dependencies:* Phase 2 components; Phase 0 dealer data for routing.

### Phase 4 — Content · ~4 weeks, overlapping Phase 3

English source content for all P0 pages; product data entry with `verified` flags; the four P0
knowledge articles; **articles 1, 2, 7 and 10 written Greek-first** ([13](13-seo-content-strategy.md));
dealer profiles; legal pages — privacy, cookies, **dealer data sharing**; photography.

*Dependencies:* Phase 0 verified specs and dealer data.

### Phase 5 — Translation · ~3 weeks, **starts inside Phase 4, not after it**

Greek translation of all P0 content; UI string translation including **every error and consent
string**; Greek-native review of Greek-first articles; Greek metadata against length limits; Greek
layout QA.

*Dependencies:* Phase 4 English content, delivered **incrementally**. See §15.2.

### Phase 6 — QA · ~2 weeks

Functional QA both locales; **dealer routing end-to-end with real dealers**; accessibility audit
(external); performance against budget; cross-browser and device; GDPR review — consent flows,
retention, dealer agreements; SEO technical audit — hreflang reciprocity, structured data,
canonicals; analytics verification.

**Do a full dry run of the lead engine with real dealers before launch.** Submit test leads, confirm
they arrive, confirm SMS fires, confirm the response clock and reassignment work. A routing failure
discovered in production destroys dealer confidence in week one, and it is very hard to rebuild.

### Phase 7 — Launch & stabilise · 1 week + 4 weeks monitoring

Soft launch; DNS and redirects; Search Console and sitemaps both locales; **dealer onboarding and
training**; monitoring; four weeks of daily lead-quality review to set the KPI baselines
([14](14-trust-objections-analytics.md) §14.4).

**Indicative total: 14–16 weeks**, with Phase 0 in parallel from week one.

## 15.2 The two schedule risks

The brief names these correctly. Both are real, both are routinely underestimated, and neither is a
design or engineering problem — which is exactly why they get missed in planning.

### Risk 1 — Greek translation

**Why it bites:** translation is treated as a final-week task, but Greek is not a find-and-replace.
It expands text by 10–30% and considerably more on short strings, which **breaks layouts that were
signed off in English** ([04](04-bilingual-architecture.md) §4.8). A technical category needs a
translator who understands filtration, not a general translator, and briefing takes time. And
because Greek serves the larger audience, poor Greek is not a partial failure — it is a failure of
the primary market.

**Mitigation:**

- **Start translation in week one of Phase 4**, on completed content, incrementally. Never batch it
  to the end.
- **Design in Greek from the first comp**, with real copy. This is the single most effective
  mitigation and it costs nothing.
- **Brief the translator with [05 — Positioning & messaging](05-positioning-messaging.md)**, not just
  a string file. A translator without voice guidance defaults to formal commercial Greek, which is a
  different brand.
- **Build a translation-status dashboard** from the CMS `status` field, so the gap is visible daily
  rather than discovered at QA.
- **Contingency:** launch with fewer pages in *both* locales rather than more pages in one. A
  half-Greek site is worse than a smaller bilingual one.

### Risk 2 — Dealer data collection

**Why it bites, and why it is the larger risk:** it is not a project task at all — it depends on
commercial conversations Fluux may not have finished, or started. It gates **the locator, the
routing logic, the district pages, the confirmation page and the entire lead engine**. And unlike
translation, no amount of internal effort can accelerate it: you cannot write a dealer network.

It also carries a hidden dependency: **the data sharing agreements** ([12](12-technical-specification.md)
§12.6). A dealer who has not signed one cannot lawfully receive leads, so the legal work must run
alongside recruitment, not after it.

**Mitigation:**

- **Start in Phase 0, week one**, and treat it as the project's critical path.
- **Define the minimum viable dataset** and collect that first: name, districts, phone, services,
  response commitment. Photography, descriptions and specialisms can follow.
- **Send the data sharing agreement with the first data request**, not later.
- **Design the locator to degrade gracefully.** With partial coverage it shows real dealers where
  they exist and routes the rest to the central Fluux queue ([08](08-lead-engine.md) §8.5) — which
  the architecture already supports. **The site can launch with three districts covered.**
- **Contingency:** launch with central routing only — every lead to Fluux, distributed manually.
  Slower and less scalable, but it launches, and it produces the real routing data to build on.

### A third risk worth naming: unverified specifications

Not in the brief, but it emerged from the research ([02](02-product-matrix.md) §2.1). **If Fluux
cannot supply verified specification data, product pages cannot launch with specification tables** —
the verification gate in [12](12-technical-specification.md) §12.3 will correctly block them.

*Mitigation:* the gate degrades to "Specification pending" rather than failing, so pages still ship.
But a product page without specs converts poorly with commercial buyers and undermines the
"certified, not claimed" pillar entirely. **Treat verified spec data as a launch dependency, not a
nice-to-have.**

## 15.3 Dependency map

```
Phase 0  ANSWERS & ASSETS ══════════════════════╗  (critical path)
   │                                            ║
   ├── Q1,Q2 product ──► Phase 1 IA ──► Phase 2 Design ──► Phase 3 Build
   ├── brand assets ────────────────► Phase 2 Design
   ├── verified specs ──────────────────────────► Phase 4 Content ──► Phase 5 Translation
   ├── DEALER DATA ═════════════════════════════► Phase 3 routing ──► Phase 6 QA dry run
   │                                             └► Phase 4 district pages
   ├── water test confirmation ─────► Phase 2 (primary CTA design)
   └── Greek keyword research ──────► Phase 1 IA (slugs) ──► Phase 5

Phase 4 Content ──(incremental)──► Phase 5 Translation ──► Phase 6 QA ──► Phase 7 Launch
```

**Two hard sequencing rules:**

1. **Dealer data gates more than anything else on the diagram.** If one thing is chased hard from
   day one, it is this.
2. **Translation must overlap content, never follow it.** The arrow from Phase 4 to Phase 5 is
   incremental delivery, not a phase boundary.

## 15.4 What could be cut to hit a date

In the order we would cut, with the cost of each stated plainly:

| Cut | Saves | Cost |
|---|---|---|
| District pages | ~1 week | Local SEO deferred; dealer locator still works |
| Comparison tool | ~1 week | Commercial buyers lose a decision aid; SKU tables remain |
| Knowledge base (all 10 articles) | ~2 weeks | Organic acquisition deferred entirely |
| Cartridge cross-reference | Already P1 | Loses the best commercial hook — **cut reluctantly** |
| Sector pages | ~1 week | Commercial hub carries the load alone |
| Become-a-dealer | ~3 days | Recruitment stays manual |

**Never cut:** the enquiry forms, consent flows, dealer routing, the selector, the water test
booking, or Greek parity. Those are the product. **Cutting Greek to hit a date is not a schedule
decision — it is a decision to launch to half the market**, and it should be presented to the client
in exactly those terms.
