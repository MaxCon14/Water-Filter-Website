# 11 — Design Direction

*Premium here means **engineered precision and clarity**, not luxury decoration. Fluux is a
technical product sold on trust, in a market where the incumbents look either clinical or cheap.*

---

## 11.1 Three art direction routes

### Route A — "Instrument"

*Reference feel:* Teenage Engineering, Braun/Dieter Rams, Leica, Nothing.

**Rationale.** Treat the cartridge as a precision instrument. Very restrained palette, generous
white space, technical typography, exact alignment, specifications presented as data rather than
marketing. Product photography is clinical and beautifully lit. Every number is a design element.

**Why it fits:** it earns credibility for an unknown brand instantly, differentiates hard from
competitors who look like plumbing suppliers, and makes the absence of price read as *considered*
rather than *evasive*. It suits the commercial audience natively.

**Risk:** it can read as cold to a homeowner who is anxious about their family's water, and it
demands photography discipline the client may not be able to fund. **The domestic warmth has to
come from the copy and the human/dealer imagery, or the route fails with half the audience.**

### Route B — "Cyprus Water"

*Reference feel:* Aesop's regional sensibility, Cyprus tourism at its best, Mediterranean editorial.

**Rationale.** Lead with place. Warm limestone, sea and sky, strong environmental photography — the
Troodos, coastline, Cypriot kitchens. Water as a local, precious, contested resource. The brand
belongs here.

**Why it fits:** it directly counters the biggest objection to an imported Korean brand, and it makes
the district and water-context content feel native rather than bolted on.

**Risk:** it looks like a tourism or lifestyle brand, not a technical one — and it **actively
undermines the commercial audience**, who need specification confidence, not atmosphere. It also
risks a claim of localness the brand cannot substantiate.

### Route C — "Clear Evidence"  ★ Recommended

*Reference feel:* Stripe and Linear's information design, Oatly's plain-speaking honesty (without
the jokes), the best pharmaceutical patient information.

**Rationale.** The brand's distinguishing asset is **honesty about what it does and does not do**
([05](05-positioning-messaging.md)). Build the design system around *making evidence legible*:
specification tables as first-class design objects, visible arithmetic in the cost comparison,
certification marks with real weight, diagrams that explain rather than decorate. Clean and
confident, but warm enough for a kitchen. Restrained colour with one decisive accent, superb
typographic hierarchy, and information design as the hero rather than photography.

**Why it wins:**

- It **serves both audiences from one system** — the thing [06](06-information-architecture.md) says
  the IA must do. Evidence reassures the homeowner and satisfies the commercial buyer.
- It is **the cheapest to execute well**, because it depends on typography and information design
  rather than on a photography budget that does not yet exist (`[CLIENT INPUT REQUIRED]` — no brand
  assets were supplied).
- It is **robust to missing data.** Half the specifications are unverified. A design built on
  legible evidence handles "specification pending" gracefully; a design built on hero photography
  and bold claims does not.
- It is **the most defensible in Greek**, because it leans on structure and hierarchy rather than on
  English-language expressiveness that translation would flatten.

**Risk:** executed lazily it becomes generic SaaS. The guard is materiality — the accent colour,
the water motif, and the photography treatment must carry warmth and specificity, or it reads as a
dashboard.

**Recommendation: Route C, with Route A's photographic discipline for product shots and a measured
borrowing of Route B's palette warmth.**

## 11.2 Colour system

Built for legibility of dense technical content, with the warmth to keep it out of dashboard
territory. Every pairing below is verified against WCAG 2.1.

### Palette

| Token | Hex | Role |
|---|---|---|
| `--ink-900` | `#0B1620` | Primary text, headings |
| `--ink-700` | `#263947` | Body text |
| `--ink-500` | `#526877` | Secondary text, labels |
| `--ink-300` | `#93A6B2` | Disabled, placeholders |
| `--ink-100` | `#DDE5EA` | Borders, dividers |
| `--ink-050` | `#F1F5F7` | Section backgrounds |
| `--surface` | `#FFFFFF` | Cards, page ground |
| `--depth-700` | `#0C4A64` | **Primary brand.** Deep water |
| `--depth-500` | `#12658A` | Interactive, links |
| `--depth-100` | `#DCEDF4` | Tints, selected states |
| `--signal-600` | `#B4531A` | **Accent.** CTAs, Cyprus limestone/terracotta |
| `--signal-100` | `#FBE9DD` | Accent tint |
| `--stone-100` | `#F4F0EA` | Warm neutral — breaks the clinical feel |
| `--ok-700` | `#1B6B4A` | Verified, success |
| `--warn-700` | `#8A5A00` | Pending, caution |
| `--err-700` | `#A32020` | Errors |

**On the accent.** `--signal-600` is a Cypriot limestone/terracotta warmth against the deep-water
blue. It does two jobs: it keeps the system from reading as generic tech blue, and it gives CTAs a
colour used nowhere else — so the primary action is unmistakable. **Reserve it strictly for
conversion actions.** Its value is its scarcity.

### Contrast — verified

| Foreground | Background | Ratio | Standard |
|---|---|---|---|
| `--ink-900` `#0B1620` | `--surface` `#FFFFFF` | **18.26:1** | AAA |
| `--ink-700` `#263947` | `--surface` `#FFFFFF` | **11.94:1** | AAA |
| `--ink-500` `#526877` | `--surface` `#FFFFFF` | **5.82:1** | AA |
| `--ink-700` `#263947` | `--ink-050` `#F1F5F7` | **10.89:1** | AAA |
| `--depth-500` `#12658A` | `--surface` `#FFFFFF` | **6.45:1** | AA |
| `--depth-700` `#0C4A64` | `--surface` `#FFFFFF` | **9.64:1** | AAA |
| `--surface` `#FFFFFF` | `--depth-700` `#0C4A64` | **9.64:1** | AAA |
| `--surface` `#FFFFFF` | `--signal-600` `#B4531A` | **5.01:1** | AA |
| `--ink-900` `#0B1620` | `--stone-100` `#F4F0EA` | **16.09:1** | AAA |
| `--ink-900` `#0B1620` | `--depth-100` `#DCEDF4` | **15.19:1** | AAA |
| `--err-700` `#A32020` | `--surface` `#FFFFFF` | **7.54:1** | AAA |
| `--ok-700` `#1B6B4A` | `--surface` `#FFFFFF` | **6.46:1** | AA |
| `--warn-700` `#8A5A00` | `--surface` `#FFFFFF` | **5.93:1** | AA |

*Computed with the WCAG 2.1 relative-luminance formula, not estimated. AA normal text requires
4.5:1; AAA requires 7:1.*

**Fails, documented so nobody reaches for them:** `--ink-300` on white is **2.52:1** — decorative
and disabled states only, never text. `--signal-600` on `--stone-100` is **4.41:1**, which fails AA
for normal text and passes only for large text (≥24px, or ≥19px bold) — use `--ink-900` on
tinted grounds instead.

**Never colour alone.** Verified/pending states, error states and comparison highlighting all pair
colour with an icon or a weight change (WCAG 1.4.1).

## 11.3 Typography

**Every face below is verified for Greek** against Google Fonts `METADATA.pb` subset declarations —
see [04](04-bilingual-architecture.md) §4.7 for the method and for the list of common faces that
**fail** this test.

### The system

| Role | Typeface | Greek | Why |
|---|---|---|---|
| **Display / headings** | **Commissioner** | ✅ | Designed by Kostas Bartsokas, a Greek type designer — the Greek is native, not an extension. 4 variable axes give real range without a second family. Low-contrast grotesque: confident, not shouty |
| **Body / UI** | **Commissioner** | ✅ | Same family. One family, tuned by axis |
| **Long-form reading** | **Literata** | ✅ +ext | Screen-optimised serif for knowledge-base articles. Warm and authoritative where the sans would feel like an interface |
| **Specifications / SKU codes** | **JetBrains Mono** | ✅ | Tabular figures for spec tables; makes part numbers unmistakably codes |

**Why Commissioner as the primary.** It is the rare face that is genuinely premium, genuinely
variable, and has Greek drawn by someone who reads Greek. On a bilingual brief where Greek is
first-class, a Greek-designed typeface is both a quality decision and a positioning one. Its four
axes cover display and UI needs from one family, which halves font payload — directly serving the
performance budget in [12](12-technical-specification.md) §12.4.

**Fallbacks (both scripts):**
```css
--font-sans: "Commissioner", "Helvetica Neue", Arial, "Noto Sans", sans-serif;
--font-serif: "Literata", Georgia, "Noto Serif", serif;
--font-mono:  "JetBrains Mono", "SF Mono", Consolas, "Noto Sans Mono", monospace;
```

**Alternative pairing** if Commissioner is rejected: **IBM Plex Sans + Source Serif 4** — both Greek-
verified, and Plex carries a more overtly engineered character that suits Route A.

### Type scale

A 1.25 major-third scale, `clamp()`-fluid between 375px and 1440px.

| Token | Mobile → Desktop | Use |
|---|---|---|
| `--fs-display` | 32 → 56px | Page heroes |
| `--fs-h1` | 28 → 40px | |
| `--fs-h2` | 24 → 32px | Section headings |
| `--fs-h3` | 20 → 24px | Block headings |
| `--fs-h4` | 18 → 20px | Card titles |
| `--fs-body-lg` | 17 → 18px | Lead paragraphs |
| `--fs-body` | 16 → 16px | **Never below 16px** — iOS zoom, and Greek legibility |
| `--fs-small` | 14 → 14px | Captions, labels |
| `--fs-micro` | 12 → 12px | Legal, non-essential only |

**Line height:** 1.2 display, 1.35 headings, **1.6 body**. Greek benefits from the generous body
setting — its letterforms have less vertical contrast than Latin and tighter leading closes it up.

**Measure:** 60–75 characters. Greek runs longer, so set `max-width` in `ch`, not `px`.

**No all-caps as a design device** — see [04](04-bilingual-architecture.md) §4.8 for the Greek accent
rule that makes it a liability.

## 11.4 Spacing, grid, breakpoints

**Spacing** — 4px base, geometric:
`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`
Tokens `--space-1` … `--space-10`. **Nothing off-scale.**

**Grid** — 12 columns desktop, 8 tablet, 4 mobile. Gutter 24px desktop / 16px mobile. Max content
width 1280px; text blocks capped at 720px regardless.

**Breakpoints:**

| Name | Min | Notes |
|---|---|---|
| `sm` | 375px | Baseline. Design here first |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop; comparison table becomes viable |
| `xl` | 1280px | Max content |

**Mobile-first, non-negotiable.** Cyprus traffic will be majority mobile, and the sticky
call/WhatsApp/book bar is a mobile-first pattern.

**Greek breakpoint caution:** the primary navigation may need to collapse to the mobile pattern
*earlier* in Greek than in English. Build the breakpoint as a token that can differ by locale
rather than hard-coding it.

## 11.5 Component inventory

**Atoms** — Button (primary/secondary/tertiary/destructive; icon variants) · Input · Select ·
Radio · Checkbox · Textarea · Label · Helper text · Error message · Link · Badge · Chip · Icon ·
Spinner · Divider · **Spec value** (mono, tabular) · **Verified badge** · **Locale switch**

**Molecules** — Form field (label + input + helper + error) · **Consent checkbox** (unticked,
with explainer link) · Card · Product card · Dealer card · Article card · Spec row · Accordion item ·
Breadcrumb · Pagination · Toast · Tooltip · **Phone/WhatsApp button pair** · Progress indicator ·
**Size selector** (segmented) · Comparison cell · District selector · Search input

**Organisms** — Header (+ locale switch, phone) · Footer · **Sticky mobile action bar** ·
**Enquiry form** (multi-step, progressive) · **Water test booking form** · **Selector question
canvas** · **Selector result** · **Specification table** · **Comparison table** (desktop) ·
**Comparison card stack** (mobile) · **Dealer locator** (map + list) · FAQ accordion · Cost
comparison calculator · Download list · Certification strip · Problem triage grid · Hero variants ·
Article body · Compare tray · **Cookie consent banner**

**Templates** — Home · Problem hub · Problem detail · Product hub · Series · SKU · Compare ·
Selector · Commercial hub · Sector · Enquiry · Water test · Confirmation · Dealer locator · District ·
Knowledge hub · Article · About · Contact · Legal · 404

### Components this build needs that a standard library would not have

1. **Consent checkbox** — unticked by default, with inline explainer and a link to dealer-sharing.
   Its own component because it is legally significant and must never be accidentally styled or
   defaulted like an ordinary checkbox ([12](12-technical-specification.md) §12.6).
2. **Verified badge** — renders a spec's provenance. Prevents unverified data reaching the page
   ([02](02-product-matrix.md) §2.1).
3. **Size selector** — swaps specs in place, updates the URL, feeds the form.
4. **Comparison card stack** — the mobile comparison pattern; a genuinely separate component from
   the desktop table, not a responsive variant.
5. **Bilingual text container** — enforces `lang`, locale-appropriate `max-width` in `ch`, and
   expansion-safe wrapping.
6. **Phone/WhatsApp pair** — with hours-aware labelling ([08](08-lead-engine.md) §8.6).

## 11.6 Imagery

**Balance: roughly 60% technical / informational, 40% human and contextual.** This follows Route C —
evidence leads, warmth supports.

**Product photography.** Clinical, consistent, one lighting setup across the range. Neutral or
`--stone-100` ground. Every SKU shot identically so comparison is genuinely visual. Include a
**scale reference** and at least one **installed-in-a-real-cabinet** shot — a bare cartridge on
white is unfamiliar and slightly alienating to a homeowner.

**Cypriot context: yes, but restrained.** Real Cypriot kitchens, real installers, real premises —
not stock Mediterranean lifestyle. **Avoid landscape tourism imagery**; it pulls toward Route B and
weakens commercial credibility. The place should be recognisable in the *interiors and the people*,
not in a sea view.

**People.** Dealers and installers by name and face wherever possible. This is the single strongest
answer to *"who actually installs this"* ([14](14-trust-objections-analytics.md)) and it makes the
network tangible. `[CLIENT INPUT REQUIRED]` — dealer photography and consent to use it.

**Water as a motif — discipline required.** Avoid the category clichés: splashes, droplets on
chrome, a glass being filled in slow motion. Every competitor uses them and they carry no
information. **Recommended instead:** water as *structure* — flow diagrams, filtration cross-
sections, micron-scale illustration, the physical texture of scale on a heating element. Show the
problem and the mechanism, not the aesthetic of water.

**Iconography.** Single consistent set, 1.5px stroke, 24px grid, rounded joins. Geometric and
technical, matching Commissioner's construction. Icons carry meaning in the problem triage and spec
tables, so they must be legible at 24px and never the sole carrier of meaning.

**Diagrams are a first-class asset in Route C.** Budget for a proper illustration system: how
ultrafiltration differs from carbon adsorption, what a micron means, where the cartridge sits in the
plumbing, what scale inhibition does. These are the pages that will earn links and answer the
questions that block purchase.

## 11.7 Motion

**Principle: motion clarifies state change. It never decorates, and it never delays.**

| Token | Duration | Easing | Use |
|---|---|---|---|
| `--motion-instant` | 100ms | `ease-out` | Hover, focus |
| `--motion-fast` | 180ms | `cubic-bezier(.2,0,.2,1)` | Buttons, toggles, accordions |
| `--motion-base` | 260ms | `cubic-bezier(.2,0,.2,1)` | Panels, step transitions, tray |
| `--motion-slow` | 400ms | `cubic-bezier(.4,0,.2,1)` | Modals, map |

**What moves:** selector step transitions (a slide that signals progress); size-selector spec swaps
(a brief cross-fade so the change is noticed); accordions; form step progression; validation
appearance; the compare tray; the sticky bar on scroll direction.

**What does not move:** page loads (no entrance animations — they delay content); specification
tables; anything above the fold on first paint; anything on a form the user is actively completing.

**Reduced motion.** `prefers-reduced-motion: reduce` removes all transform and opacity transitions,
replacing them with instant state changes. Nothing loses function — the selector still advances,
the accordion still opens. **Parallax, autoplaying video and scroll-triggered animation are excluded
from this build entirely**, so there is nothing that becomes unusable when motion is off.

**Performance.** Animate `transform` and `opacity` only. Never `height`, `top` or `width`. Anything
running longer than 400ms on a mid-range Android is a bug, not a design decision.
