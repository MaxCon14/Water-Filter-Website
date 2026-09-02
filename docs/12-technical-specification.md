# 12 — Technical Specification

*Weighted toward a content-and-forms site, not commerce. There is no cart, no checkout, no payment,
no inventory and no customer account — a stack chosen for e-commerce would be carrying weight this
project never uses.*

---

## 12.1 Recommended stack

| Layer | Recommendation | Why |
|---|---|---|
| **Framework** | **Astro** | Ships zero JS by default and hydrates only the islands that need it (selector, comparison, locator, forms). The site is ~90% static content with a handful of interactive components — exactly Astro's shape. Excellent i18n routing for the `/en/` `/el/` structure |
| **Interactive islands** | React (via Astro) | Selector, comparison table, dealer locator, multi-step forms |
| **CMS** | **Sanity** | Genuine first-class locale handling, structured content, a good editing experience for a non-technical client, and a flexible enough schema for the `verified` flags and locale pairing in §12.3 |
| **Hosting** | **Netlify** or **Cloudflare Pages** | Edge CDN, atomic deploys, preview branches, serverless functions for form handling |
| **Forms** | Custom serverless endpoints | Off-the-shelf form services cannot do the routing and consent logging in [08](08-lead-engine.md) |
| **Maps** | **MapLibre GL** + MapTiler | Open, no per-load Google billing, full styling control. Five districts and perhaps dozens of dealers — Google Maps is unnecessary cost and an extra consent burden |
| **Analytics** | **Plausible** or **Fathom** | Cookieless and GDPR-friendly, so no consent banner is needed for analytics alone. See §12.6 |
| **CRM** | `[CLIENT INPUT REQUIRED]` — see §12.5 | |
| **Email** | **Resend** or **Postmark** | Transactional reliability; locale-aware templates |
| **Search** | **Pagefind** | Static, builds at deploy, no service dependency. Adequate at this content volume |

### Why not the obvious alternatives

- **Next.js** — capable, but the default is a React runtime on every page for a site that is
  mostly text. More complexity and more JavaScript for no gain here.
- **WordPress** — the bilingual plugins (WPML/Polylang) are workable but fragile, the security and
  maintenance burden is ongoing, and performance requires constant defence. The custom lead routing
  would fight the platform.
- **Webflow** — excellent for marketing sites, but the dealer routing, consent logging and
  cross-reference logic in [08](08-lead-engine.md) exceed what it can do without significant
  external glue.
- **Shopify** — the site has no transactions. It would be paying for, and designing around, a
  commerce engine that never runs.

**The single most important stack property is that the CMS treats locales as first-class**, because
[04](04-bilingual-architecture.md) §4.3 is the constraint most likely to cause a rebuild if it is
got wrong.

## 12.2 Content model

```
┌── Locale ─────────────────────────────────────────────┐
│  code: 'en-CY' | 'el-CY'   ·   isDefault: boolean     │
└───────────────────────────────────────────────────────┘

ProductSeries
├── key            string   (FX | HF2 | H | ...)        [locale-independent]
├── technology     enum     (uf_membrane | carbon_block | sediment | scale_inhibitor)
├── micronRating   decimal
├── audience       enum[]   (domestic | commercial)
├── certifications → Certification[]
├── heroImage      → Asset
└── content        → SeriesContent[]        one per locale
      ├── locale, slug, name, summary, body
      ├── metaTitle, metaDescription
      └── status  (draft | in_translation | published)

Product (SKU)
├── sku            string   unique   (FX-15)            [locale-independent]
├── series         → ProductSeries
├── size           enum     (10 | 15 | 17)
├── mediaSuffix    string?  (S | SD3 | CS2 | PS2)
├── specifications → Specification[]
├── compatibleHeads → FilterHead[]
├── certifications → Certification[]
├── documents      → Document[]
├── images         → Asset[]
├── replacementMonths integer?          [CLIENT INPUT REQUIRED]
├── cartridgePrice   decimal?           [CLIENT INPUT REQUIRED]
├── status         enum   (active | discontinued | announced)
└── content        → ProductContent[]   one per locale
      ├── locale, slug, name, bestFor, body
      ├── metaTitle, metaDescription
      └── status

Specification                    ◀ the verification gate
├── product        → Product
├── key            enum   (flow_rate | capacity | micron | pressure_min | ...)
├── value          decimal | string
├── unit           enum   (lpm | litres | micron | psi | celsius | months)
├── verified       boolean   DEFAULT false        ◀◀ see §12.3
├── sourceTier     enum   (A_manufacturer | B_distributor | C_single)
├── sourceNote     string
├── verifiedAt     datetime?
└── displayOrder   integer

Certification
├── standard       string   (NSF/ANSI 42)
├── certificateNumber string?         [CLIENT INPUT REQUIRED]
├── issuingBody    string
├── verified       boolean  DEFAULT false
├── documentUrl    → Document?
└── content        → CertificationContent[]   locale: whatItCovers (plain language)

FilterHead                       ◀ powers the cross-reference tool
├── manufacturer   string   (Everpure | 3M Aqua-Pure)
├── model          string   (QL3B | i2000 | MC2)
└── compatibleProducts → Product[]

Dealer
├── tradingName, legalName, registrationNumber
├── districts      → District[]
├── services       enum[]  (installation | servicing | supply | water_testing)
├── sectors        enum[]  (domestic | hotel | foodservice | office | clinic | developer)
├── phone, whatsapp, email, address, geo (lat/lng)
├── responseCommitmentHours integer
├── weeklyLeadCap  integer?
├── active         boolean
├── onHolidayUntil date?
├── photo          → Asset?
└── content        → DealerContent[]   locale: description, openingHours

District
├── key            enum  (nicosia | limassol | larnaca | paphos | famagusta)
├── geo            polygon | centroid
├── supplySource   enum[]  (desalinated | borehole | reservoir | mixed)   [UNVERIFIED — §03]
├── hardnessRange  string?          [UNVERIFIED — competitor-sourced]
├── adjacentTo     → District[]     ◀ powers no-match widening, [08] §8.5
└── content        → DistrictContent[]   locale: slug, name, body, localContext

Lead                             ◀ never in the CMS; separate secured store
├── reference      string  unique
├── type           enum  (homeowner | commercial | water_test | dealer_application | cartridge)
├── locale, district, submittedAt
├── payload        jsonb          form answers
├── score          integer, scoreBand enum
├── assignedDealer → Dealer?
├── assignedAt, respondedAt, reassignedFrom
├── status         enum (new | assigned | contacted | quoted | won | lost | expired)
├── consents       → Consent[]
└── retentionExpiresAt  date       ◀ §12.6

Consent                          ◀ legally significant; immutable
├── lead           → Lead
├── type           enum  (dealer_sharing | marketing | replacement_reminder)
├── granted        boolean
├── consentTextVersion string    the exact wording shown
├── locale, grantedAt, ipAddress, formIdentifier
└── withdrawnAt    datetime?

Article · FAQ · Document · Asset · Redirect
    ... each with locale-paired content where user-facing
```

### Model notes

- **Facts are stored once, prose per locale.** A flow rate cannot differ between the English and
  Greek page — see [04](04-bilingual-architecture.md) §4.3.
- **`Specification.verified` is the safety mechanism** for the Tier B/C data problem in
  [02](02-product-matrix.md) §2.1.
- **`FilterHead` is a first-class entity**, not a text field, because it powers the cross-reference
  tool ([02](02-product-matrix.md) §2.7) — the highest-value commercial feature in the plan.
- **`District.adjacentTo`** is data, not hard-coded logic, so routing fallbacks are tunable by an
  administrator.
- **`Consent` records are immutable and append-only.** Editing a consent record destroys the
  evidence it exists to provide.
- **Leads never live in the CMS.** Different access control, different retention, different
  audience.

## 12.3 The verification gate

Because most specification data is currently Tier B/C, **the system must make it structurally
impossible to publish an unverified figure.**

```
Specification.verified === false
   → renders as "Specification pending" with a neutral style
   → excluded from comparison tables and from structured data
   → visible to editors in the CMS with a "needs verification" flag
   → surfaced on an admin dashboard listing everything unverified
```

Plus a build-time check: **the build fails if a P0 product page has no verified specifications at
all.** Better a failed deploy than a live page of confident, wrong numbers.

This is not over-engineering. A published flow rate that turns out to be wrong is a returns problem,
a dealer-trust problem and potentially a consumer-protection problem. The gate costs a day to build.

## 12.4 Performance budget

Mobile-first, assuming a mid-range Android on Cypriot 4G.

| Metric | Target | Hard limit |
|---|---|---|
| **LCP** | < 2.0s | 2.5s |
| **INP** | < 150ms | 200ms |
| **CLS** | < 0.05 | 0.1 |
| **TTFB** | < 400ms | 800ms |
| **FCP** | < 1.5s | 1.8s |

| Page weight | Target | Hard limit |
|---|---|---|
| HTML | < 30 KB | 50 KB |
| CSS | < 40 KB | 60 KB |
| **JS (content page)** | **< 30 KB** | 60 KB |
| JS (selector/locator) | < 120 KB | 180 KB |
| Fonts | < 90 KB | 120 KB |
| Images per page | < 400 KB | 700 KB |
| **Total (content page)** | **< 500 KB** | 900 KB |

**How the budget is met:**

- **Astro ships no JS** for content pages. The 30 KB allowance is analytics and progressive
  enhancement only.
- **Fonts are the main risk in a bilingual build** — Latin *and* Greek subsets. Mitigations: one
  variable family (Commissioner) rather than several statics; **subset per locale so an English page
  never downloads Greek glyphs**; `woff2` only; `font-display: swap`; preload the single body weight.
- Images: AVIF with WebP fallback, responsive `srcset`, lazy-loaded below the fold, explicit
  `width`/`height` on everything to hold CLS at zero.
- Map library loads **only on the locator**, on interaction.
- **CI budget enforcement** via Lighthouse CI — a PR exceeding the hard limit fails.

## 12.5 CRM and lead routing

```
Form submit
   │
   ├─ Serverless function
   │   ├─ Validate (server-side; never trust the client)
   │   ├─ Spam checks (§12.7)
   │   ├─ Persist Lead + immutable Consent records
   │   ├─ Score  ([08] §8.4)
   │   ├─ Route  ([08] §8.5)
   │   ├─ Notify dealer (email + SMS)
   │   ├─ Confirm to customer (locale-correct email)
   │   └─ Push to CRM
   │
   └─ Response-clock worker (scheduled)
       ├─ Reminders → reassignment → central queue
       └─ Alerts to Fluux
```

**CRM: `[CLIENT INPUT REQUIRED]`.** If none exists, **HubSpot** (free tier is genuinely sufficient
at launch, with a good API) or **Pipedrive** (better fit for a dealer-network pipeline).

**Critical:** the lead store is the **source of truth**, not the CRM. Dealer routing, response
clocks and consent records must work even if the CRM is unavailable — and the consent records must
outlive any CRM migration.

**SMS to dealers:** Twilio or a Cypriot aggregator. Dealers will not watch email reliably; SMS is
what makes a 4-hour response target realistic.

## 12.6 GDPR and ePrivacy

**This is a genuine legal design constraint, not boilerplate.** Passing a named person's contact
details to an independent third-party business is the legally significant act at the centre of this
site's business model.

### Lawful basis for dealer transfer

The dealer is **not a processor** — they act on their own account, decide their own follow-up and
retain the data for their own purposes. They are an **independent controller**. This means Fluux
cannot rely on a data processing agreement to cover the transfer; there must be a lawful basis for
the disclosure itself.

**Recommended basis: consent (Article 6(1)(a)), collected separately and specifically.**

Contract (6(1)(b)) is a weak fit because there is no contract with Fluux — the visitor is
requesting an introduction. Legitimate interests (6(1)(f)) is arguable but fragile: the visitor
would not necessarily expect their details to be handed to a separate company, and the balancing
test is exactly the kind of thing a regulator revisits after a complaint. **Consent is
unambiguous, and it is also better UX, because it forces the site to explain what happens.**

**Consequences for the interface** (implemented in [08](08-lead-engine.md) §8.8):

1. **A separate, unticked checkbox** for dealer sharing — never bundled with marketing or with
   "I accept the terms".
2. **Name the recipient, or describe it precisely.** "One dealer in your district, which we will
   name in your confirmation."
3. **Explain the purpose** at the point of collection, with a link to the dealer-sharing page.
4. **Consent must be as easy to withdraw as to give** — a one-click link in every email.
5. **Log the exact consent wording, version, timestamp, IP and locale.** Consent you cannot evidence
   is consent you do not have.
6. **The consent must be in the visitor's own language.** Greek consent text for a Greek form, or it
   is not informed.

### Controller relationships

| Party | Role | Instrument |
|---|---|---|
| Fluux Cyprus | Controller | Privacy policy, consent records |
| Dealer | **Independent controller** | **Data sharing agreement** — required |
| CMS / hosting / email / CRM | Processors | Article 28 DPAs |

`[CLIENT INPUT REQUIRED]` **A data sharing agreement with every dealer** setting out purpose
limitation, retention, security, no onward transfer, no use for unrelated marketing, and
cooperation on data subject requests. **A dealer who will not sign should not receive leads.** This
is a commercial and legal task that must start early — it is on the critical path in
[15](15-delivery-roadmap.md).

### Retention

| Data | Retention | Basis |
|---|---|---|
| Lead — converted | 7 years | Legal/accounting |
| Lead — not converted | **24 months**, then delete | Proportionate to a considered purchase |
| Lead — no dealer contact | 6 months | Minimisation |
| **Consent records** | **Lead retention + 3 years** | Must outlive the data to evidence lawfulness |
| Analytics | 26 months, aggregated | |
| Dealer applications | 24 months | |

Automate deletion — a documented policy nobody runs is worse than no policy.

### Data subject rights

Access, rectification, erasure, portability, objection, withdrawal — all reachable from the privacy
page and every automated email, in both locales. **A request must propagate to the dealer**, which
is a process obligation, not a technical one, and belongs in the data sharing agreement.

### ePrivacy / cookies

The recommendation is to **avoid the problem rather than manage it**:

- **Cookieless analytics** (Plausible/Fathom) — no consent required.
- **Self-hosted fonts.** Loading Google Fonts from Google's CDN transmits IP addresses to a third
  country and has been found unlawful in EU case law. Self-hosting also improves performance.
- **No third-party embeds** without consent — no YouTube, no Google Maps (MapLibre avoids this),
  no social pixels at launch.
- **Strictly-necessary cookies only** (locale preference, session, CSRF), which need no consent.

**Result: no cookie banner is needed at launch.** That is a real UX and performance win.

**If marketing pixels are later added**, a full consent management platform becomes mandatory —
prior consent, granular categories, reject as easy as accept. Recommendation: **decide before
launch**, because retro-fitting consent management is significantly more expensive than building
without it.

## 12.7 Spam protection

Layered, and **no CAPTCHA at launch**.

1. **Honeypot field** — hidden, styled off-screen (not `display:none`), `tabindex="-1"`,
   `autocomplete="off"`. Catches most naive bots at zero user cost.
2. **Time-to-complete check** — reject submissions faster than ~3 seconds.
3. **Server-side rate limiting** — per IP and per phone number.
4. **Server-side validation** of everything, including field-level plausibility.
5. **Cloudflare Turnstile** — only if 1–4 prove insufficient. Privacy-preserving, usually invisible,
   and far better than reCAPTCHA both for accessibility and for GDPR (reCAPTCHA sends data to
   Google and creates a consent problem).

**No visible CAPTCHA.** It measurably reduces conversion, it is an accessibility barrier, and on a
high-value low-volume lead form the cost of losing one genuine commercial enquiry exceeds the cost
of manually filtering a week of spam.

## 12.8 Accessibility — WCAG 2.1 AA

Target: **AA across the site**, verified by audit before launch.

The specific risk areas for this build:

| Risk | Why it is a risk here | Mitigation |
|---|---|---|
| **Multi-step forms** | The highest-value interaction, and the most complex to make accessible | Focus management between steps; `aria-live` for step changes; error summary with focus move; never rely on colour for errors |
| **Selector tool** | Custom interactive widget, easy to build as an inaccessible div-soup | Real radio groups in a `fieldset`/`legend`; keyboard-navigable; announce progress; the whole tool must work without a mouse |
| **Comparison table** | Complex data relationships | Real `<table>` semantics with `scope`; `<caption>`; the mobile card layout needs its own correct semantics — [10](10-comparison-experience.md) §10.5 |
| **Dealer map** | Maps are frequently unusable by keyboard and screen reader | **The list is the primary interface and must be fully functional without the map.** The map is an enhancement, never the only route |
| **Bilingual content** | Wrong `lang` breaks screen reader pronunciation entirely | `lang` on `<html>` per locale; `lang` on any inline foreign-language text; verify Greek reads correctly in NVDA and VoiceOver |
| **Specification tables** | Dense numeric data | Header associations; never convey meaning by colour alone; units always in text, not implied |
| **Size selector** | Custom segmented control | Implement as a radio group, not buttons; announce the spec change via `aria-live` |
| **Sticky mobile bar** | Can obscure content and focus targets | Ensure it never covers focused elements; test at 200% zoom (WCAG 1.4.10) |

**Process:** automated checks (axe) in CI to catch regressions; a manual keyboard-only pass on every
P0 template; screen reader testing in **both locales**; and an external audit before launch.

**Automated tools catch perhaps a third of real issues.** The manual keyboard pass on the selector
and the forms is where the actual conversion-critical bugs will be found.
