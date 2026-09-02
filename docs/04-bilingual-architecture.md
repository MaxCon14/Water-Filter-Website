# 04 — Bilingual Architecture

*Treat this as a build constraint, not a language toggle. Decisions here shape the URL structure,
the CMS schema, the component library and the typeface selection — all of which are expensive to
revisit.*

---

## 4.1 URL strategy

**Recommendation: `/en/` and `/el/` subdirectories on a single `.com.cy` domain, with no unprefixed
routes.**

```
fluux.com.cy/en/products/fx-15
fluux.com.cy/el/proionta/fx-15
fluux.com.cy/            → 301 to a locale (see §4.4)
```

| Option | Verdict |
|---|---|
| **Subdirectories** `/en/`, `/el/` | **Recommended.** One domain accrues all authority; cheapest to run; trivial hreflang; one TLS cert, one deploy. |
| Subdomains `en.`, `el.` | Rejected. Splits authority for no benefit at this scale. |
| ccTLDs `.com` / `.com.cy` | Rejected. Both locales target the same country — the geo-signal ccTLDs buy is worthless here. |
| Query parameters `?lang=el` | Rejected. Weak signals, poor caching, fragile sharing. |

**Domain recommendation: `.com.cy`.** For a market-specific lead-gen site it is a trust signal in
both languages, and there is no international audience to serve. Register `.cy` and `.com` variants
defensively and redirect.

### Slug translation

**Translate slugs.** `/el/proionta/` not `/el/products/`. Greek slugs rank for Greek queries and
read as a native site rather than a translated one.

**Two exceptions — do not translate:**
- **SKU codes.** `fx-15` stays `fx-15` in both locales. It is a part number, not a word.
- **Established English loanwords** where the Greek market genuinely searches in English. Determine
  per-term during keyword research ([13](13-seo-content-strategy.md)); do not guess.

Greek slugs should be **Latin-transliterated, not Greek-script** (`/el/proionta/` rather than
`/el/προϊόντα/`). Percent-encoded Cyrillic and Greek URLs are ugly when pasted into WhatsApp — a
primary sharing channel in this market — and fragile across older systems. Transliteration keeps
the keyword value without the breakage.

## 4.2 hreflang

Every page carries a **complete, self-referencing, reciprocal** set:

```html
<link rel="alternate" hreflang="en-CY" href="https://fluux.com.cy/en/products/fx-15" />
<link rel="alternate" hreflang="el-CY" href="https://fluux.com.cy/el/proionta/fx-15" />
<link rel="alternate" hreflang="x-default" href="https://fluux.com.cy/en/products/fx-15" />
```

Rules the build must enforce, ideally in CI:

- **Reciprocity.** If EN points to EL, EL must point back. Non-reciprocal hreflang is ignored
  entirely — a silent failure that is easy to ship and hard to notice.
- **Self-reference.** Each page includes itself.
- **Absolute, canonical, indexable URLs only.** Never point hreflang at a redirect or a `noindex`
  page.
- **`x-default` → English**, as the wider net for non-Greek-reading visitors (tourists, expatriate
  property owners, international developers).
- **Region-qualified codes** (`en-CY`, `el-CY`) rather than bare `en`/`el`. There is a real Greek
  market in Greece searching similar terms; `el-CY` keeps Cyprus targeting unambiguous.
- **Untranslated pages emit no hreflang pair at all.** Never point at a fallback in the wrong
  language — see §4.3.

## 4.3 CMS content model for locales

**Recommendation: locale-paired entries with an explicit publication state per locale**, not field-
level translation inside one entry.

```
Product (locale-independent core)
├── sku, series, size, specifications, certifications, images, documents
└── ProductContent [one per locale]
    ├── locale: en-CY | el-CY
    ├── slug, name, summary, body, meta_title, meta_description
    └── status: draft | in_translation | published
```

**Why paired entries rather than translated fields:** specifications, images and SKU codes are
locale-independent facts. Duplicating them per locale guarantees they will drift, and a flow rate
that differs between the English and Greek page is a serious credibility failure on a technical
product. Keep facts once; translate only prose.

### Partial translation — the case that will actually happen

A knowledge-base article exists in English but not yet in Greek. Three options:

| Behaviour | Verdict |
|---|---|
| Show the English content under `/el/` | **No.** Pollutes the Greek index, damages trust. |
| 404 the Greek URL | **No.** Loses the visitor entirely. |
| **Hide from Greek navigation, listings, sitemap and hreflang** | **Recommended.** |

The Greek visitor never sees a link to untranslated content. If they arrive by direct link, serve a
polite Greek page: *"This article is not yet available in Greek — read it in English, or browse
related Greek articles."* Localised, honest, keeps the visitor.

**Hard rule: never machine-translate into production without human review.** In a technical
category, in a small market, an obviously machine-translated Greek page is a stronger negative
trust signal than an English page would have been.

### What must never ship untranslated

Because these are legal or conversion-critical:

- All enquiry forms, including validation and error messages
- Consent copy and the privacy policy ([12](12-technical-specification.md) §12.6)
- Automated confirmation emails
- Navigation, footer, and every CTA

Enforce in CI: **the build fails if a P0 page or any form string lacks a Greek translation.**

## 4.4 Language detection and switching

**Recommendation: detect once, never override, always make it visible and reversible.**

On a first visit to `/`:

1. Read a `fluux_locale` cookie. If set, honour it. Stop.
2. Otherwise read `Accept-Language`. Greek → `/el/`. Anything else → `/en/`.
3. Redirect (302, not 301 — the decision is per-user, not permanent) and set the cookie.

**Never** geo-redirect on IP. Cyprus has a large non-Greek-reading resident population — British
and Russian expatriates, EU nationals, tourists — and IP says nothing about what someone reads.
Language preference is about the person, not the place.

**Switcher requirements:**

- Present in the header on every page, at all breakpoints, **never hidden behind a menu on mobile**
- Labelled **`EN` / `ΕΛ`** — each language named in its own script, never as a flag. A flag is a
  country, not a language, and the Greek flag is wrong for Cyprus.
- Switches to **the same page** in the other locale, not to the homepage — the single most common
  and most infuriating bug in bilingual builds
- Where no translation exists, the switcher is **disabled with a tooltip**, not silently absent
- Sets the cookie on use, so the choice persists

## 4.5 Canonical locale by audience

| Audience | Canonical | Reasoning |
|---|---|---|
| **Homeowners** | **Greek** | The domestic market is Greek-speaking. Greek should feel like the original, not a translation. |
| **Commercial — hospitality, F&B** | **Greek** | Owner-operators and local chains are Greek-speaking. |
| **Commercial — hotel groups, developers, clinics, procurement** | **English** | Technical specification and procurement in Cyprus commonly run in English. Spec sheets and tender documents in particular. |
| **Expatriate homeowners** | **English** | A significant Cyprus segment. |

**The practical consequence:** Greek gets the greater share of *emotional and persuasive* content;
English gets the greater share of *technical and procurement* content. Both locales carry
everything, but effort is not split 50/50.

## 4.6 The locales should diverge, not mirror

Mirror-translation is the default failure mode here, and it wastes the biggest advantage of a
genuinely bilingual build.

| Dimension | Greek | English |
|---|---|---|
| **Search behaviour** | Mixed-script queries; brand and technical terms often typed in Latin even mid-Greek-sentence. Expect `φίλτρο νερού`, `φίλτρα νερού Λεμεσός`, but also `water filter Λεμεσός`. | Cleaner English queries, more spec-led: "0.1 micron under sink filter Cyprus". |
| **Terminology** | Verify whether the market says *φίλτρο νερού* vs *σύστημα φιλτραρίσματος*, and which of *άλατα* / *πουρί* is used for limescale colloquially. **This is a research task, not a translation task.** | Standard industry English. |
| **Trust signals** | Local presence, years in business, named installer, personal referral, a phone number answered by a person. | Certifications, NSF listings, documented specifications, warranty terms. |
| **Content emphasis** | Household cost, family safety, appliance damage, dealer proximity. | Technical specification, compliance, service contracts, capacity planning. |
| **Tone** | Warmer, more direct, more personal. | More restrained and technical. |

**Recommendation: commission Greek keyword research as original research, not as translation of the
English list.** Translating English keywords into Greek produces terms nobody searches. This is a
small budget line that determines whether the Greek half of the site — serving the larger audience
— is found at all.

`[CLIENT INPUT REQUIRED]` Confirm the Greek trade terminology Fluux and its dealers actually use.
Dealer language should drive site language; it is what customers will hear on the phone.

## 4.7 Typography — the hard constraint

**The typeface system must carry a complete Greek glyph set with matching weights and optical
quality in both scripts. Any pairing that only works in Latin is rejected outright.**

This eliminates a large share of the typefaces a designer would reach for on a premium brief. We
verified this rather than assuming it — by querying Google Fonts' own `METADATA.pb` subset
declarations.

### Verified: no Greek support — do not specify these

**`DM Sans`, `Figtree`, `Outfit`, `Work Sans`, `Space Grotesk`, `Poppins`, `Montserrat`, `Rubik`,
`Barlow`, `Public Sans`, `Lexend`, `Archivo`, `Epilogue`, `Instrument Sans`, `Geist`, `Onest`,
`Red Hat Display`, `Red Hat Text`, `Schibsted Grotesk`, `Familjen Grotesk`, `Jost`, `Karla`,
`Cabin`, `Nunito`, `Nunito Sans`, `Albert Sans`, `Hanken Grotesk`, `Bricolage Grotesque`,
`Playfair Display`, `Newsreader`, `Fraunces`, `Instrument Serif`, `Spectral`, `Crimson Pro`,
`DM Serif Display`, `PT Sans`, `PT Serif`, `Lora`, `Mulish`, `Cormorant`.**

That list contains most of the current default palette for premium web work. **Confirming this
before the first comp is the single most valuable thing in this section** — the alternative is
discovering it when Greek copy arrives, after the design is signed off.

### Verified: full Greek support — safe to specify

| Typeface | Greek | Greek Ext | Variable axes | Character |
|---|---|---|---|---|
| **Commissioner** | ✅ | — | **4** | Low-contrast grotesque; flair and slant axes. By Kostas Bartsokas, a Greek type designer — the Greek is designed, not bolted on. |
| **Inter** | ✅ | ✅ | 2 | The reliable UI workhorse. Excellent screen legibility. |
| **IBM Plex Sans** | ✅ | — | 2 | Engineered, technical character. Strong fit for the brief's "engineered precision". |
| **Source Sans 3** | ✅ | ✅ | 1 | Neutral, highly legible. |
| **Manrope** | ✅ | — | 1 | Geometric, contemporary. |
| **Sofia Sans** (+ Condensed, Semi/Extra Condensed) | ✅ | — | 1 | Wide family; condensed cuts are genuinely useful for Greek expansion. |
| **Noto Sans / Noto Sans Display** | ✅ | ✅ | 2 | Guaranteed coverage; visually safe. |
| **Fira Sans** (+ Condensed) | ✅ | ✅ | — | Warm, humanist. |
| **Roboto Flex** | ✅ | — | **13** | Extreme axis control. |
| **Syne** | ✅ | — | 1 | Genuinely characterful display face — rare with Greek. |
| **Literata** | ✅ | ✅ | 2 | Serif. Screen-optimised, warm, authoritative. |
| **Source Serif 4** | ✅ | — | 2 | Serif. Pairs natively with Source Sans 3. |
| **Noto Serif / Noto Serif Display** | ✅ | ✅ | 2 | Serif. |
| **EB Garamond** | ✅ | ✅ | 1 | Serif, incl. polytonic Greek. Traditional. |
| **Alegreya / Alegreya Sans** | ✅ | ✅ | 1 | Serif + sans superfamily. |
| **Vollkorn** | ✅ | — | 1 | Serif, sturdy. |
| **Roboto Slab** | ✅ | ✅ | 1 | Slab serif. |

Monospace, for specification tables and SKU codes:
**`JetBrains Mono`** ✅, **`Roboto Mono`** ✅, **`Noto Sans Mono`** ✅ (+ext), **`Source Code Pro`**
✅ (+ext), **`Fira Mono`** ✅ (+ext). `Space Mono` and `Inconsolata` have **no Greek**.

Selection and rationale in [11 — Design direction](11-design-direction.md) §11.3.

### Beyond Google Fonts

If the brand warrants licensed type, **Parachute** (`parachute.gr`) is the obvious first call — a
Greek foundry whose families are designed for Greek and Latin in parallel rather than extended into
Greek afterwards. **TypeTogether** and **Commercial Type** also have credible Greek. Budget for it
in discovery; a licensed face with native Greek is a defensible premium signal in this market.

**Verification method for any face not listed above** — do this before it reaches a comp:

```bash
curl -s "https://raw.githubusercontent.com/google/fonts/main/ofl/<fontname>/METADATA.pb" \
  | grep 'subsets: "greek'
```

No output means no Greek. For commercial foundries, request the glyph chart and confirm Greek is
present **at every weight you intend to use** — partial coverage across a family is common and
worse than none, because it fails only in production.

## 4.8 Greek text expansion

**Greek runs longer than English — plan for roughly 10–30% on body copy, and considerably more on
short strings**, where a single English word can double. `Search` → `Αναζήτηση` is 6 → 10
characters.

Short UI strings are the danger, because that is exactly where designers set fixed widths.

### Rules the component library must enforce

| Component | Rule |
|---|---|
| **Buttons** | Never fixed-width. Padding-based, `min-width` only, wrap to two lines gracefully. Test every CTA in Greek before sign-off. |
| **Navigation** | Primary nav must survive ~30% expansion. If it only fits in English, it does not fit. Consider collapsing to the mobile pattern at a wider breakpoint in Greek. |
| **Form labels** | Above inputs, never beside. Side-set labels break first and worst. |
| **Cards in a grid** | Equal heights via grid, not fixed heights. Titles must wrap to three lines without breaking the card. |
| **Tables** | Spec tables are the highest risk — long Greek labels against numeric values. Allow label-column wrapping; never truncate a spec name. |
| **Badges, pills, tabs** | Most likely to overflow. Set a `max-width` with an ellipsis and a `title` attribute as a last resort — but redesign rather than truncate. |

### Process rules, which matter more than the CSS

1. **Design the Greek comp first, or at least in parallel.** Designing in English and translating is
   how this breaks. If the layout works in Greek, English will always fit.
2. **Use real Greek copy in comps, never Latin lorem ipsum.** Greek has different letterforms,
   different rhythm, no ascender/descender pattern matching Latin, and a visibly different colour
   on the page. Latin placeholder text hides every problem you are trying to see.
3. **Include a Greek pass in QA**, with a native reader checking rendering, not just meaning.
4. **Consider `text-wrap: balance`** on headings — it handles unpredictable Greek line breaks
   noticeably better than default wrapping.

### Typographic details specific to Greek

- **Greek does not use all-caps in running text**, and accents are conventionally dropped in
  all-caps setting (`ΑΝΑΖΉΤΗΣΗ` is wrong; `ΑΝΑΖΗΤΗΣΗ` is right). If the design uses uppercase
  labels, buttons or eyebrows, this must be handled deliberately — `text-transform: uppercase` on
  accented Greek produces incorrect typography. **Recommendation: avoid all-caps as a design device
  entirely.** It is a constraint worth accepting up front rather than patching per string.
- **The Greek question mark is `;`** (semicolon), not `?`. It appears in FAQ headings — brief
  translators explicitly.
- **Sentence case throughout**, both locales. Title Case does not exist in Greek, and applying it
  produces text that reads as machine-generated.
- **Verify the final font renders the tonos correctly at every weight**, particularly at display
  sizes where a poorly-drawn accent is very visible.
