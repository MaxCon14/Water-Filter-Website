# 00 — Executive Summary

*One page. Written for the client stakeholder; everyone else should read it too, because it states
the decisions the rest of the plan depends on.*

---

## What we are building

A bilingual (English/Greek) lead-generation website for Fluux water filtration in Cyprus. No cart,
no checkout, no published price. Every conversion is a qualified enquiry routed to a dealer or
installer with enough detail that they can quote without a discovery call.

Two audiences of equal commercial weight: **homeowners** (limescale anxiety, low technical
literacy, need reassurance) and **commercial buyers** (hotels, restaurants, clinics, developers;
need capacity, flow rates, service contracts and a person to call).

## Five things this plan concluded

**1. The product matrix in the brief does not match the product range that exists.**
The brief describes three lines — FX, FHF2, HFS — each in 10"/15"/17". Research found **FX** and
**HF2**, no line called HFS, and an **H-series** (H17-SD3, H17-CS2, H17-PS2) organised by media
type rather than by size. The 10/15/17 numbers are not inches. Resolving this is the single
biggest blocker in the plan. See [02](02-product-matrix.md) and [99](99-open-questions.md).

**2. Size means cartridge life, not physical fit.**
FX-15 and FX-17 have the same flow rate (9.4 LPM) but different capacity (60,567 L vs 71,992 L).
So the size question is *"how much water do you use and how often do you want to change it"* — not
*"what fits under your sink."* This inverts the most important question in the selector tool.

**3. These are cartridges for third-party heads, not standalone systems.**
The range is built around Everpure and 3M Aqua-Pure head compatibility. That creates a second lead
type the brief did not anticipate — *"I already have a head and need cartridges"* versus *"I need a
full system installed"* — which is a different quote, a different dealer skill, and a different
form. It also means the real business is recurring cartridge replacement, not one-off installs, and
the site should be built to capture that.

**4. Desalination has not solved limescale in Cyprus — and that is the content angle.**
Desalination supplies roughly 70–80% of the island's drinking water, but minerals including
magnesium sulphate and lime are deliberately added back after treatment to stabilise the water.
Cypriot households still get hard water. The competitor-reported island average sits around
250–400 ppm. This is a more interesting, more credible story than generic purity marketing.

**5. District pages are weaker than they look.**
Reported hardness by district overlaps almost completely (Nicosia 280–350, Limassol 250–320,
Larnaca 260–340, Paphos 300–400+ ppm) — and those figures come from a competitor's own help
centre. There is not enough genuine variation to differentiate five pages on water chemistry.
We recommend district pages anyway, but justified by **dealer presence and supply source**, not by
hardness numbers. See [03](03-cyprus-water-context.md).

## The decisions we are recommending

| Decision | Recommendation | Where |
|---|---|---|
| Product framing | Problem → technology → capacity, as a two-step funnel. Not a nine-cell grid. | [02](02-product-matrix.md) |
| Audience split | Shared pages with segmented modules, plus one commercial hub. Not a homepage fork. | [06](06-information-architecture.md) |
| URL strategy | `/en/` and `/el/` subdirectories on one domain. | [04](04-bilingual-architecture.md) |
| Canonical locale | Greek for homeowners, English for commercial and developer buyers. | [04](04-bilingual-architecture.md) |
| Typography | Commissioner + Literata, both with verified Greek. | [11](11-design-direction.md) |
| Primary conversion | Free water test booking, ahead of "request a quote". | [08](08-lead-engine.md) |
| Stack | Astro + a headless CMS with first-class locale pairing. | [12](12-technical-specification.md) |

## The one that will surprise you

**The strongest conversion offer is not a quote — it is a free in-home water test.** Cyprus
incumbents already run this play (Camelot advertises free water testing before and after
installation). A quote request asks the visitor to have already decided; a water test asks only
that they are curious, converts at a far lower psychological cost, and hands the dealer a
qualified, diagnosed lead with a reason to be standing in the customer's kitchen. It should be the
primary homeowner CTA across the site.

## What blocks the build

Two answers change the information architecture, so they are worth chasing before design starts:

1. **What FX, HF2 and the third line actually are**, and whether "HFS" is a real line, a
   mis-transcription of the H-series, or something not yet public.
2. **Whether all sizes serve both audiences**, or commercial is a subset. This decides whether the
   audience split happens at the homepage or deeper in the tree.

Everything else in [99 — Open questions](99-open-questions.md) can be answered during design
without stalling it.

## The two schedule risks

**Greek translation** and **dealer data collection**. Neither is a design problem and both are
routinely underestimated. Translation is not a final-week task — Greek runs materially longer than
English and will break Latin-tuned button and navigation layouts if it arrives after the comps are
signed off. Dealer data (coverage by district, specialism, response commitment) gates the locator,
the routing logic and the entire lead engine, and it depends on commercial conversations Fluux may
not have had yet. Both start in week one. See [15](15-delivery-roadmap.md).
