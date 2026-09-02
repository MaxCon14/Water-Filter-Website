# 09 — The Filter Selector Tool

*Full-depth section. The core interactive flow — and the site's main mechanism for converting an
uncertain homeowner into a qualified lead.*

---

## 9.1 Design principles

1. **Four questions maximum.** Every additional question costs completion.
2. **Never ask what we can infer.** Size follows from occupants; do not ask twice.
3. **"I don't know" is always available.** Forcing a confident answer from an unconfident visitor
   produces bad recommendations and lost leads. Uncertainty routes to a water test — which is a
   *better* outcome, not a failure.
4. **The result ends in an enquiry, never a product page.** A recommendation the visitor cannot act
   on is a dead end.
5. **Nothing is ever re-entered.** Every answer pre-fills the form.
6. **Explain the reasoning.** "Because you said X, we suggest Y." A black box does not persuade.

## 9.2 The question sequence

### Q1 — What's wrong with your water?

*Multi-select. The primary routing question, mapping to the "problem" axis of
[02](02-product-matrix.md) §2.5.*

| Answer | Signal |
|---|---|
| It tastes or smells of chlorine | → carbon |
| Limescale — furred kettle, spotted glasses | → scale inhibition |
| I worry about what's in it | → membrane |
| It looks cloudy or has grit | → sediment |
| I'm tired of buying bottled water | → general drinking |
| **I'm not sure — I just want it tested** | → **water test** |

*Copy intent:* the customer's words, not category names. "Furred kettle" beats "scale formation".

**"I'm not sure" short-circuits to the water test booking immediately.** No further questions. This
visitor's problem is that they do not know what their problem is, and the honest answer is a
measurement, not a recommendation.

### Q2 — Where will it go?

*Single select. Establishes application and separates domestic from commercial.*

| Answer | Signal |
|---|---|
| Kitchen tap, for drinking and cooking | Domestic point-of-use |
| A coffee machine or ice maker | Equipment protection |
| A business — restaurant, café, hotel, office | **→ Commercial path (§9.7)** |
| Whole house | **→ Scope-honesty branch (§9.6)** |

**"A business" exits the selector.** Commercial requirements are not answerable in four questions —
see §9.7.

**"Whole house" is the honest-answer branch.** Per [02](02-product-matrix.md) §2.6, the found range
is point-of-use. This answer must not be quietly redirected to an under-sink cartridge.

### Q3 — How many people?

*Single select. Drives sizing.*

`1–2` · `3–4` · `5+` · `A business` *(→ commercial)*

*Copy intent:* frame as household size, not litres per day. Nobody knows their litres per day.

### Q4 — How often do you want to think about it?

*Single select. **The size question**, asked correctly.*

| Answer | Signal |
|---|---|
| As rarely as possible — the longest interval available | → largest size |
| A normal service interval is fine | → mid size |
| I'd rather have the smaller, cheaper option | → smallest size |

**This is the most important design decision in the tool.** Per [02](02-product-matrix.md) §2.4,
size determines cartridge life, not physical fit — FX-15 and FX-17 have identical flow. Asking
*"how much space do you have?"* would be the obvious question and would produce systematically
wrong recommendations.

*Copy intent:* a preference about convenience versus cost, which every visitor can answer, rather
than a technical parameter that none can.

**Under the interval numbers** — currently `[CLIENT INPUT REQUIRED]` — this question is
answerable in the abstract but cannot show concrete intervals until Fluux supplies them. Ship the
question; populate the numbers when they arrive.

## 9.3 Decision logic

```
START
  │
  ├─ Q1: "Not sure" ────────────────────────────────→ WATER TEST  [exit]
  │
  ├─ Q2: "A business" ──────────────────────────────→ COMMERCIAL  [exit, §9.7]
  ├─ Q2: "Whole house" ─────────────────────────────→ SCOPE BRANCH [§9.6]
  │
  ▼
Q1 → TECHNOLOGY
  │
  ├─ "worry about what's in it"  ──────────────→ FX        (0.1 µm membrane)
  ├─ "tired of bottled water"    ──────────────→ FX        (broadest reassurance)
  ├─ "tastes/smells of chlorine" ──────────────→ carbon    → H17-CS2, or FX if also safety
  ├─ "limescale"                 ──────────────→ scale     → H17-PS2, or *-S variant
  ├─ "cloudy or grit"            ──────────────→ sediment  → H17-SD3  (+ recommend pairing)
  │
  └─ Multi-select → combine:
        safety + anything          → FX-*S   (membrane + scale inhibition)
        chlorine + limescale       → *-S variant
        sediment + anything        → recommend H17-SD3 as a PRE-filter
                                     alongside the primary recommendation
  ▼
Q3 + Q4 → SIZE
  │
  ├─ 1–2 people  + "smaller/cheaper"   → 10
  ├─ 1–2         + "normal"            → 10
  ├─ 1–2         + "as rarely as poss" → 15
  ├─ 3–4         + "smaller/cheaper"   → 10
  ├─ 3–4         + "normal"            → 15   ◀ most common path
  ├─ 3–4         + "as rarely as poss" → 17
  ├─ 5+          + "smaller/cheaper"   → 15
  ├─ 5+          + "normal"            → 15
  └─ 5+          + "as rarely as poss" → 17
  ▼
RESULT: {technology}-{size}{suffix}
  │
  ├─ Clean match  → RESULT SCREEN
  └─ No clean match → FALLBACK (§9.5)
```

**Note the size matrix never returns 17 for a 1–2 person household** even at maximum interval
preference — the capacity is not usefully consumable at that volume, and recommending it would be
overselling. **A selector that declines to upsell is a trust asset.**

`[CLIENT INPUT REQUIRED]` This tree is built on the researched range. It must be revalidated once
the true SKU list and the HFS question are resolved ([02](02-product-matrix.md) §2.2). **The
structure holds; the leaf nodes may change.**

## 9.4 Result screen

| # | Block | Content |
|---|---|---|
| 1 | Recommendation | SKU name, image, one-line "why this one" |
| 2 | **Reasoning** | *"You told us X and Y, so we've suggested Z."* Restate their answers |
| 3 | Key specs | 3–4 only: what it removes, change interval, flow. **Not the full table** |
| 4 | **Primary CTA** | **Request a quote** — pre-filled |
| 5 | Secondary CTA | Book a free water test |
| 6 | Alternative | One runner-up, **with the trade-off stated plainly** |
| 7 | Save / share | Email me this result — a soft conversion |
| 8 | Full details | Link to the SKU page for those who want the full table |
| 9 | Reassurance | No obligation; your dealer will confirm before anything is installed |

**Block 6 earns disproportionate trust.** Presenting a genuine alternative with an honest trade-off
("the FX-17 lasts longer but costs more up front") demonstrates the tool reasoned rather than
routed. A single unexplained answer reads as a sales funnel.

**Block 9 matters because the recommendation is provisional.** The dealer will verify against actual
water and plumbing. Saying so removes the fear of committing to the wrong thing.

## 9.5 Fallback — no clean match

Never show an error, and never show nothing.

| Situation | Response |
|---|---|
| Conflicting problems (e.g. sediment + safety at high volume) | Present a **multi-stage recommendation** — a pre-filter plus a primary — and note the dealer will confirm |
| Answers outside the domestic range | *"Your requirement is beyond our standard domestic range — let's have a dealer look at it."* → contact |
| No SKU satisfies the combination | *"We'd rather not guess. Book a free water test and your dealer will specify properly."* → water test |
| Anything unhandled | Water test booking |

**Every fallback terminates in a conversion.** The visitor completed four questions — that is a high
engagement signal, and losing them at the last step is the worst outcome available.

## 9.6 The whole-house branch

If the visitor selects "whole house", the honest response — per [02](02-product-matrix.md) §2.6 —
is that the researched range does not address it.

*Copy intent:*

> "Fluux filters water at the tap, which is where you drink it. Whole-house treatment for
> limescale is a different job. Book a free water test and your dealer will tell you what you
> actually need — including whether that's us."

This declines the sale and keeps the lead. It is also the strongest trust signal the tool can
produce, and it converts to a water test at a good rate precisely because it is credible.

**If Fluux does have a whole-house product** (blocking question #4), this branch becomes a normal
recommendation path instead.

## 9.7 Commercial buyers — no separate calculator

**Recommendation: commercial buyers get direct contact and a specification route. Do not build a
commercial sizing calculator for launch.**

**Why not:**

- **Commercial sizing is genuinely not answerable in four questions.** Peak flow, duty cycle,
  equipment type, incoming water chemistry, existing heads, service contract terms. A calculator
  that pretends otherwise produces confidently wrong answers to the highest-value visitors — the
  worst possible failure mode.
- **This buyer does not want a wizard.** They want a spec sheet and a phone number. A consumer-style
  quiz reads as unserious and actively damages credibility.
- **A conversation converts better here.** Commercial deals involve service contracts and
  multi-site rollouts; the discovery call is where the value is, not an obstacle to remove.

**What they get instead:**

1. **The Everpure/3M cross-reference** — for the large segment with existing heads, this replaces
   sizing entirely. They do not need a recommendation; they need a compatibility confirmation.
   **This is the highest-value tool to build for commercial, and it is P1.**
2. **The commercial enquiry form** ([08](08-lead-engine.md) §8.3), which captures application,
   volume and existing system.
3. **A named contact and direct line** on every commercial page.
4. **Ungated spec sheets** for self-service research.

**Revisit after launch** if commercial lead volume justifies it, and build it as a *capacity
planner* (inputs: covers/rooms/machines → throughput → SKU) rather than a consumer quiz.

## 9.8 Form pre-fill

The selector must hand every answer to the enquiry form. **The visitor never re-enters anything.**

| Selector answer | Pre-fills |
|---|---|
| Q1 problems | Main concern (multi-select) |
| Q2 location | Application / property context |
| Q3 occupants | Occupants |
| Q4 interval preference | *(scoring context, not shown)* |
| Result SKU | Product of interest |
| Entry district | District |

**Implementation:**

- Answers held in a **signed, short-lived token in the URL** — shareable, restorable, and it
  survives the round trip to the form
- Also mirrored to `sessionStorage` as a resilience measure
- Pre-filled fields are **visible and editable**, never hidden. A hidden field the customer cannot
  correct produces bad dealer data, and silently-transmitted data is a GDPR transparency problem
- Show a **summary band** at the top of the form: *"Based on your answers: FX-15, Limassol,
  3–4 people — change this"*
- The form's remaining ask is then **just name, phone and consent** — a three-field completion after
  a four-question investment, which is a very strong conversion position

## 9.9 Measurement

Track per step: entries, per-question completion, drop-off by question, "not sure" rate, result
distribution, fallback rate, result→enquiry conversion, and result→water-test conversion.

**The diagnostic ratios:**

- **Drop-off concentrated at one question** means that question is badly worded — most likely Q4,
  the least conventional.
- **A high "not sure" rate on Q1 is not a failure.** It means the water test is doing its job and
  the selector is correctly declining to guess.
- **A high fallback rate** means the decision tree does not cover the real range — revisit once the
  true SKU list lands.
