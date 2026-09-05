# 99 — Assumptions

*Every assumption made in this plan, labelled and separated from fact. Each states what happens to
the plan if it turns out to be wrong.*

**The overriding constraint:** the research environment blocked all direct page fetching —
`fluux.co.kr`, every distributor site, Amazon, Wikipedia, and the Cyprus government domains. All
web-derived material came through **search-result summaries**, not from reading source pages. The
one exception is the Greek typeface verification (A-14), which was checked directly.

---

## A — Product assumptions

| # | Assumption | Basis | If wrong |
|---|---|---|---|
| **A-1** | "Fluux" is the brand of **Microfilter Co.**, a South Korean manufacturer | Distributor listings consistently pair the names | Provenance messaging and the About page change; no structural impact |
| **A-2** | The brief's "FHF2" is the **HF2** line | Naming similarity; no "FHF2" found anywhere | If they are different lines, the product IA needs a fourth branch |
| **A-3** | "HFS" is most likely the **H-series** (H17-SD3/CS2/PS2), mis-transcribed | H-series exists; nothing named HFS does | **The two-step IA framing absorbs any answer**, but the selector's leaf nodes change |
| **A-4** | ~~The size numbers 10/15/17 are not inches~~ — **FALSIFIED.** They are the cartridge length in inches | Client photograph of FX-10/15/17 side by side: three physical lengths in the ratio 10 : 15 : 17 | **It was wrong.** Corrected in [01](01-context-and-findings.md) Finding 2, [02](02-product-matrix.md) §2.4 and [09](09-selector-tool.md) §9.2. Clearance is now a fitting constraint the installer checks |
| **A-5** | Products are **cartridges for third-party heads** (Everpure, 3M Aqua-Pure), with some head bundles | Repeated, consistent compatibility claims across distributors | The replacement/new-install fork and the cross-reference tool lose their basis |
| **A-6** | The `S` suffix denotes a **scale-inhibitor** variant | FX-15S described as "Scale Inhibitor"; H17-PS2 as polyphosphate | Suffix decoding in the CMS and comparison changes |
| **A-7** | The naming grammar is `{series}{size}-{media}{stage}` | Inferred from observed SKU codes | CMS schema field structure changes |
| **A-8** | The range is **point-of-use only** — no whole-house or softening product | Nothing found addressing whole-house | **Homeowner messaging becomes much broader**; limescale becomes a P0 product claim; selector whole-house branch becomes a normal path |
| **A-9** | FX is domestic-leaning; HF2 is commercial-leaning | Flow, capacity, and distributor positioning ("ice machines") | Audience-aware spec emphasis on SKU pages inverts |
| **A-10** | All specification figures cited are **approximately correct in magnitude** | Two independent sources agreed to within 1 litre on FX-15 (16,000 US gal = 60,566 L) | Individual figures are wrong; the verification gate ([12](12-technical-specification.md) §12.3) is designed to contain exactly this |
| **A-11** | The "35~100 ℃" operating temperature in one source is a **°F/°C error** — **CONFIRMED** | The printed label reads "35~100 °F (2~38 °C)" | Confirmed correct. The distributor listing carried a unit error; the label does not |
| **A-12** | Fluux products are **available in Cyprus** in the sizes and lines described | Assumed from the brief | Range and IA shrink to what is actually stocked |
| **A-13** | Cartridge replacement is a **recurring revenue stream** the business wants to capture | Inferred from the consumable model | The reminder opt-in and replacement content lose their commercial rationale |

## B — Typography and design assumptions

| # | Assumption | Basis | If wrong |
|---|---|---|---|
| **B-14** | **Greek glyph coverage as stated in [11](11-design-direction.md) §11.3 and [04](04-bilingual-architecture.md) §4.7** | **VERIFIED, not assumed.** Queried Google Fonts `METADATA.pb` subset declarations directly | — |
| **B-15** | Google Fonts metadata accurately reflects the shipped font files | Reasonable; it is the canonical source | Verify visually in a Greek proof before final sign-off |
| **B-16** | Greek coverage is complete **at every weight** in the chosen families | Inferred from family-level subset declarations | Partial-weight coverage fails only in production — **check the specimen at each weight used** |
| **B-17** | Greek text expansion of **10–30%**, more on short strings | Standard localisation guidance | Layouts need more headroom; the mitigation (design in Greek first) covers this either way |
| **B-18** | No brand assets exist; identity creation is in scope | No assets supplied with the brief | If a brand exists, [11](11-design-direction.md) becomes an application of it rather than a definition |
| **B-19** | Contrast ratios in [11](11-design-direction.md) §11.2 | **COMPUTED**, not estimated — WCAG 2.1 relative-luminance formula | — |

## C — Cyprus market and water assumptions

| # | Assumption | Basis | If wrong |
|---|---|---|---|
| **C-20** | Cyprus water is **very hard**, roughly 250–400 ppm | **Tier C — competitor marketing pages**, which have an interest in high numbers | Direction is near-certainly right; **the numbers are not publishable**. Requires the WDD data pass |
| **C-21** | District hardness figures (Nicosia 280–350, Limassol 250–320, Larnaca 260–340, Paphos 300–400+) | **Tier C — a competitor's help centre** | Used only to argue district pages are *weakly* differentiated on chemistry — a conclusion that holds even if the numbers are imprecise |
| **C-22** | Desalination supplies **~80%** of drinking water (March 2026) | Cyprus Mail — Tier A, but a moving figure | Cite with date; re-verify before publication |
| **C-23** | Minerals including magnesium sulphate and lime are **added back** after desalination | Search summary of technical sources | **The plan's best content angle collapses.** Verify before building content on it |
| **C-24** | Annual household bottled water spend is **€200–400** | Estatefy — Tier B, no filtration interest | The economic argument's scale changes; the module design does not |
| **C-25** | Famagusta district has comparable water characteristics to the others | **No data found at all** | District page content for Famagusta needs separate research |
| **C-26** | Competitors are Karma, Camelot, BWT Barrier, Q Water, Aquaphor, filter.cy, waterfilternet, filtercy, altlab, Spirit Water | Search results | Competitive positioning shifts; no structural impact |
| **C-27** | **The free water test is an established mechanic in this market** | Camelot advertises free testing before and after each filter change | **The primary CTA recommendation weakens** — it would become an untested innovation rather than a proven local play |
| **C-28** | Cyprus buyers frequently prefer phone and WhatsApp over forms | Brief's assertion + regional norms; **not independently verified** | Channel prominence changes, not the architecture |
| **C-29** | Traffic will be majority mobile | Regional norms; **not verified** | Breakpoint priorities shift; mobile-first remains correct regardless |
| **C-30** | Everpure and 3M Aqua-Pure have a meaningful **installed base in Cypriot hospitality** | Inferred from their international foodservice presence | **The cross-reference tool loses most of its value** — it is P1 partly for this reason |

## D — Business model assumptions

| # | Assumption | Basis | If wrong |
|---|---|---|---|
| **D-31** | A dealer network exists, or is being recruited, with coverage across the five districts | Implied by the brief | Central routing fallback ([08](08-lead-engine.md) §8.5) is the contingency; the site still launches |
| **D-32** | Dealers will accept **exclusive** lead routing (one dealer per lead) | Recommended, not confirmed | If leads are sold to multiple dealers, objection 3 in [14](14-trust-objections-analytics.md) §14.2 becomes unanswerable and the trust proposition weakens significantly |
| **D-33** | Dealers can be contractually held to a response commitment | Assumed | The response clock and reassignment logic become advisory only |
| **D-34** | Fluux can act as a central fallback when no dealer matches | Assumed | No-match leads have nowhere to go — a hole in the lead engine |
| **D-35** | Prices genuinely vary by dealer, justifying the absence of published pricing | Implied by the brief | If pricing is fixed, publishing it would remove objections 2 and 7 entirely — **worth challenging** |
| **D-36** | Both audiences are of genuinely equal commercial weight | Stated in the brief | The IA's shared-page approach would shift toward the dominant audience |
| **D-37** | English and Greek are both first-class, with Greek serving the larger domestic audience | Stated in the brief | Effort allocation between locales changes |

## E — Technical and delivery assumptions

| # | Assumption | Basis | If wrong |
|---|---|---|---|
| **E-38** | No e-commerce is planned, now or later | Stated in the brief | Astro still works, but a commerce-capable CMS would be chosen differently |
| **E-39** | No customer accounts are needed | Inferred — no orders to track | Adds auth, GDPR surface, and a data model |
| **E-40** | Content volume stays modest (~50–80 pages per locale at launch) | Derived from the sitemap | Pagefind search would need replacing above ~500 pages |
| **E-41** | The client can supply content in English for translation into Greek | Assumed | If content originates in Greek, the translation flow reverses — **cheap to confirm, disruptive to discover late** |
| **E-42** | A qualified technical Greek translator is available | Assumed | The primary schedule risk in [15](15-delivery-roadmap.md) §15.2 worsens materially |
| **E-43** | 14–16 weeks with a small dedicated team | Estimated from the phase breakdown | Scope must be cut per [15](15-delivery-roadmap.md) §15.4 |
| **E-44** | Cookieless analytics and self-hosted fonts mean **no cookie banner is needed** | Follows from the recommended stack | If marketing pixels are added, a full consent platform becomes mandatory — decide before launch (Q24) |
| **E-45** | Consent is the appropriate lawful basis for dealer transfer | Legal analysis in [12](12-technical-specification.md) §12.6 — **not legal advice** | **Requires sign-off by Cyprus-qualified counsel.** If legitimate interests is preferred, the form UI changes but the transparency obligations largely remain |

---

## What the label photographs overturned

The client supplied photographs of the FX-10, FX-15 and FX-17 labels. They replaced the
distributor-sourced figures wholesale:

| Figure | Distributor listing | Printed label | Out by |
|---|---|---|---|
| FX-10 capacity | 30,000 L | **2,839 L** (750 gal) | ~10x |
| FX-15 capacity | 60,567 L | **11,356 L** (3,000 gal) | ~5x |
| FX-17 capacity | 71,920 L | **6,056 L** (1,600 gal) | ~12x |
| Flow, all three | 5.7–9.5 L/min | **1.9 L/min** (0.5 gpm) | 3–5x |
| Micron rating | 0.1 µm | **not stated on any label** | unsupported |
| Head compatibility | Everpure QL3B | **"original manufacturer's filter head"** | contradicted |

Two structural consequences:

1. **Capacity does not rise with length.** FX-15 (15 inch) treats 11,356 L; the longer FX-17
   treats 6,056 L. There is no ladder, and the selector's size logic was rebuilt accordingly.
2. **The 0.1 micron claim has no support** and has been removed from the site. It was a
   distributor figure and appears on none of the three labels.

The corroboration that made the old figures look trustworthy — "two independent sources agree to
within one litre" — was two sources repeating the same wrong listing. Agreement between secondary
sources is not verification.

## The five assumptions most worth testing first

1. ~~**A-4**~~ — **tested and falsified.** The client photograph settled it: the numbers are inches.
   This is exactly why it was top of the list, and the selector has been corrected.
2. **A-8** — that there is no whole-house product. It sets the ceiling on the homeowner proposition.
3. **C-27** — that free water testing is available. The primary sitewide CTA rests on it.
4. **D-32** — that dealers accept exclusive routing. Four of the eight objections in
   [14](14-trust-objections-analytics.md) §14.2 are answered by it.
5. **C-23** — the remineralisation fact. It is the plan's strongest and most distinctive content
   angle, and it comes from a single search summary.
