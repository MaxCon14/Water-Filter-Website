# 10 — Comparison Experience

*The comparison page is where a spec-literate visitor decides — and where an honest brand separates
itself from one padding rows to manufacture differences.*

---

## 10.1 What is being compared

Three comparison types, in descending frequency:

| Type | Example | Frequency |
|---|---|---|
| **Sizes within a series** | FX-10 vs FX-15 vs FX-17 | Most common |
| **Technologies across series** | FX-15 vs HF2-15S | Common — the genuinely hard decision |
| **Fluux vs a competitor cartridge** | FX-15 vs an Everpure equivalent | Commercial, high intent |

The third is the most commercially valuable and the most delicate. See §10.6.

**Maximum three columns.** Four fits nowhere on mobile, and a decision between four cartridges is a
decision the selector should have narrowed already.

## 10.2 Attribute set

Ordered by decision value, not by convenience. **Every row must be a row where the answer can
differ** — a row that reads identically down every column is padding, and padding is exactly what
makes a comparison table untrustworthy.

| # | Attribute | Why it earns its place |
|---|---|---|
| 1 | **Best for** | Plain-language positioning. The only row a non-technical visitor may read |
| 2 | **What it removes** | The actual purchase reason. Chips: chlorine · cysts · microplastics · sediment · scale |
| 3 | **Filtration technology** | UF membrane vs carbon block — the real difference between series |
| 4 | **Micron rating** | 0.1 vs 0.5 µm. Meaningful to commercial buyers |
| 5 | **Change interval** | **Lead row for domestic.** `[CLIENT INPUT REQUIRED]` |
| 6 | **Capacity (litres)** | **Lead row for commercial** |
| 7 | **Flow rate (LPM)** | Genuinely differentiating: FX-10 5.7 vs FX-15/17 9.4 |
| 8 | **Scale inhibition** | Yes/no. Directly relevant to Cyprus |
| 9 | **Certifications** | NSF 42 / 53 / 401, per SKU |
| 10 | **Head compatibility** | Everpure / 3M models. The switching decision |
| 11 | **Typical application** | Domestic / light commercial / commercial |
| 12 | **Running cost per year** | The honest cost comparison. `[CLIENT INPUT REQUIRED]` |

**Deliberately excluded:** dimensions and weight (fitment is the dealer's job, and it invites the
false inference that the size number is physical); operating pressure and temperature (identical
across the range — a padding row by definition); marketing claims of any kind.

**No price row.** Running cost (row 12) is the honest substitute and is more decision-useful anyway.

### Honesty rules

1. **A row identical across all columns gets collapsed by default**, shown under *"shared
   specifications"*. Present, verifiable, not padding.
2. **Never invent a differentiator.** If FX-15 and FX-17 differ only in capacity, the table says so.
   A two-row difference honestly presented is more persuasive than twelve rows of noise.
3. **Unverified values do not render.** Per [12](12-technical-specification.md) §12.3, a spec
   without `verified: true` shows as *"Specification pending"* — never a guess, never a blank.
4. **Never mark a column "Best".** The visitor decides; the site informs. A "recommended" badge in a
   comparison table undermines the whole exercise.

## 10.3 Layout

### Desktop

A table with attributes as rows and SKUs as columns.

- **Sticky header row** carrying product name, image thumbnail and CTA — as the visitor scrolls
  deep into specs they must never lose track of which column is which. This is the single most
  common comparison-table failure.
- **Sticky first column** (attribute names).
- **Difference highlighting**: a *"Show only differences"* toggle. **Default off** — showing it on
  first would hide the shared strengths that build confidence.
- **Row hover** highlights the full row across columns.
- Each column footer repeats *Request a quote*.

### Mobile

**A table does not work on a 375px screen.** Do not attempt to shrink one.

**Recommended: stacked attribute cards.** One card per attribute, with the 2–3 products as rows
inside it.

```
┌─────────────────────────────┐
│ CHANGE INTERVAL             │
│ ─────────────────────────── │
│ FX-15          12 months    │
│ FX-17          18 months  ● │   ● = highest value in this row
└─────────────────────────────┘
```

- Preserves every value; no truncation and no horizontal scrolling
- The attribute is the heading, so context is never lost
- **A sticky product-selector bar** at the top shows which products are being compared and allows
  swapping without scrolling back
- Consciously rejected: horizontal-scroll tables (values scroll out of view, poor accessibility)
  and a column-switcher carousel (only ever shows one product, defeating the purpose)

### Greek

Attribute names are the long strings ([04](04-bilingual-architecture.md) §4.8). The attribute column
must wrap to two lines without breaking the row rhythm. **Never truncate a specification name** —
an ellipsised spec is worse than no spec.

## 10.4 Entry and exit

Enterable from anywhere:

| From | Mechanism |
|---|---|
| Series page | *Compare all three sizes* → pre-loaded |
| SKU page | *Compare with…* → this SKU plus a picker |
| Products hub | *Compare products* → empty state with a picker |
| Selector result | *Compare with the alternative* → both loaded |
| Persistent compare tray | Checkbox on cards; a tray collects up to 3 |

**Persistent compare tray:** a checkbox on every product card adds to a dismissible bottom tray
showing thumbnails and a *Compare (2)* button. Persists in `sessionStorage` across navigation.
Recommended as **P1** — valuable, but not worth delaying launch.

**URL state is essential.** `/products/compare/?skus=fx-15,fx-17` — shareable (a commercial buyer
sends it to a colleague), bookmarkable, back-button-correct, and analytically legible.

**Exits:**
- Per-column *Request a quote*, carrying the comparison set into the form
- Per-column *View full details* → SKU page
- *Still not sure?* → **water test**, the honest exit for someone who cannot decide
- Remove a column without losing the others

**Never a dead end.** A visitor comparing specs is close to deciding; every exit should be a
conversion or a step toward one.

## 10.5 Accessibility

- A real `<table>` with `<th scope="col">` and `<th scope="row">` — not a grid of `<div>`s. Screen
  reader users depend on the row/column association to make sense of a comparison at all
- `<caption>` naming what is compared
- Difference highlighting must not rely on colour alone (WCAG 1.4.1) — pair with an icon or weight
- The mobile card layout needs its own semantics: a definition list or a small table per attribute
- Sticky headers must not obscure content at 200% zoom (WCAG 1.4.10)

## 10.6 Competitor comparison — recommended, with discipline

Comparing Fluux against Everpure or 3M Aqua-Pure cartridges is **the single highest-intent
comparison a commercial visitor can make**, because the switching decision is narrow: same head,
same fitting, different cartridge.

**Recommendation: build it, as part of the cartridge cross-reference tool (P1).**

**Rules:**

- **Compare only verifiable published specifications.** Micron rating, capacity, flow, certifications.
- **Never disparage.** State both sets of numbers and let them speak.
- **Never claim a competitor's product is worse.** Claim compatibility and let price and
  availability do the work.
- **Legal review before launch.** Comparative advertising is lawful in the EU but conditional —
  it must compare objectively verifiable, material, relevant features of products meeting the same
  need, and must not mislead or denigrate. `[CLIENT INPUT REQUIRED]` — Fluux's legal counsel
  should sign off the pattern once, after which the template is safe to populate.
- **Cite the source and date of every competitor figure**, and re-verify on a schedule.
  Competitor specifications change, and a stale comparison is both a credibility and a legal risk.
