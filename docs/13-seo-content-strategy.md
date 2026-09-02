# 13 — SEO & Content Strategy

*Greek and English search behaviour differ and must be researched separately. Translating an English
keyword list into Greek produces terms nobody searches.*

---

## 13.1 The competitive reality

Cyprus water filtration search is **already well served**. `filter.cy`, `waterfilternet.com`,
`filtercy.com`, Karma and Camelot have content on hardness, tap water safety and limescale — much of
it the exact articles a new entrant would write first.

**Recommendation: do not attack the head terms at launch.** "Water filter Cyprus" and "φίλτρα νερού
Κύπρος" are contested by domains with years of authority. Attack instead where Fluux has a real
advantage:

| Opportunity | Why Fluux can win |
|---|---|
| **Everpure / 3M cross-reference terms** | Almost nobody targets these; extremely high commercial intent; Fluux has a genuine product answer |
| **Model-number searches** | `FX-15`, `HF2-17S`, `H17-PS2` — zero competition, and the searcher is far down the funnel |
| **The desalination/remineralisation question** | A genuinely under-served, counterintuitive question ([03](03-cyprus-water-context.md)) |
| **District + dealer intent** | Local packs are winnable with real dealer data |
| **NSF 401 / microplastics** | A specific certification angle competitors do not lead with |

Head terms are a **12–18 month objective**, pursued through the knowledge base, not a launch target.

## 13.2 Keyword clusters — English

Volumes not stated: **no keyword volume data was available in the research environment.** Clusters
are structured by intent and must be validated with real data before content is commissioned.

| Cluster | Example terms | Page | Intent |
|---|---|---|---|
| **Problem — limescale** | limescale cyprus, hard water cyprus, water hardness cyprus | `/water-problems/limescale/` | Informational |
| **Problem — taste** | cyprus tap water taste, chlorine taste tap water | `/water-problems/taste-odour/` | Informational |
| **Problem — safety** | is cyprus tap water safe to drink, microplastics tap water | `/water-problems/safety/` | Informational |
| **Cost** | bottled water cost cyprus, cheaper than bottled water | `/water-problems/bottled-water-cost/` | Commercial |
| **Product — category** | under sink water filter cyprus, water filter system cyprus | `/products/` | Commercial |
| **Product — technical** | 0.1 micron water filter, ultrafiltration vs carbon filter | `/technology/` | Commercial |
| **★ Compatibility** | everpure compatible cartridge, 3m aqua-pure replacement, QL3B cartridge | `/products/cartridge-finder/` | **Transactional** |
| **★ Model** | fluux fx-15, microfilter fx-17, hf2-17s | SKU pages | **Transactional** |
| **Commercial** | commercial water filter cyprus, ice machine water filter, restaurant water filtration | `/commercial/` | Transactional |
| **Local** | water filter limassol, water filter nicosia | District pages | Transactional |
| **Certification** | nsf 401 certified filter, nsf 53 water filter | `/technology/certifications/` | Commercial |

★ = the highest-value, lowest-competition clusters. Prioritise these.

## 13.3 Keyword clusters — Greek

**These are hypotheses requiring native research, not translations.** Commission Greek keyword
research as original work — it is a small budget line that determines whether the larger audience
finds the site at all.

| Cluster | Hypothesised terms | Page |
|---|---|---|
| **Problem — limescale** | άλατα νερού, σκληρό νερό Κύπρος, πουρί | `/el/provlimata-nerou/alata/` |
| **Problem — taste** | γεύση χλωρίνης νερό, οσμή νερού βρύσης | `/el/provlimata-nerou/geusi-osmi/` |
| **Problem — safety** | πόσιμο νερό Κύπρος, μικροπλαστικά στο νερό | `/el/provlimata-nerou/asfaleia/` |
| **Cost** | κόστος εμφιαλωμένου νερού | `/el/provlimata-nerou/kostos-emfialomenou/` |
| **Product** | φίλτρα νερού Κύπρος, φίλτρο νερού κάτω από τον νεροχύτη | `/el/proionta/` |
| **Local** | φίλτρα νερού Λεμεσός, φίλτρα νερού Λευκωσία | District pages |
| **Commercial** | επαγγελματικά φίλτρα νερού, φίλτρο για παγομηχανή | `/el/epaggelmatika/` |

### Three Greek-specific behaviours to research

1. **Mixed-script queries.** Cypriots frequently type brand and technical terms in Latin inside an
   otherwise Greek query — `φίλτρα νερού Limassol`, or `everpure φίλτρο`. Content should
   accommodate both forms naturally rather than forcing one.
2. **Greeklish.** Latin-transliterated Greek (`filtra nerou`) is common in casual search. Worth
   measuring; probably not worth building pages for.
3. **Terminology is unsettled.** *φίλτρο* vs *σύστημα φιλτραρίσματος*; *άλατα* vs *πουρί* for
   limescale. **Use what the dealers say**, because that is what customers hear on the phone —
   `[CLIENT INPUT REQUIRED]`.

## 13.4 Metadata patterns

Templated, with locale-specific patterns — not translated templates.

| Template | EN title | EL title |
|---|---|---|
| SKU | `{name} — {technology}, {capacity} \| Fluux Cyprus` | `{name} — {technology}, {capacity} \| Fluux Κύπρος` |
| Series | `{series} Series Water Filters \| Fluux Cyprus` | `Σειρά {series} Φίλτρα Νερού \| Fluux Κύπρος` |
| Problem | `{problem} in Cyprus: Causes and Solutions \| Fluux` | `{problem} στην Κύπρο: Αιτίες και Λύσεις \| Fluux` |
| District | `Water Filters in {district} \| Fluux Cyprus` | `Φίλτρα Νερού {district_genitive} \| Fluux Κύπρος` |
| Article | `{title} \| Fluux Cyprus` | `{title} \| Fluux Κύπρος` |

**Greek grammar warning:** district names need the **correct grammatical case**, which a template
cannot derive. "Water Filters in Limassol" → *Φίλτρα Νερού Λεμεσού* (genitive). Store the inflected
form as a CMS field per district rather than concatenating the nominative — otherwise every district
title reads as broken Greek.

**Titles ≤60 characters, descriptions ≤155** — and check the **Greek** versions against those
limits, since Greek runs longer and will truncate first.

## 13.5 Structured data

| Type | Where | Notes |
|---|---|---|
| `Organization` | Global | Fluux Cyprus, logo, contact |
| **`LocalBusiness`** | **Each dealer** | Name, address, geo, phone, opening hours, `areaServed`. **The most valuable structured data on the site** — it feeds local packs |
| `Product` | SKU pages | Name, SKU, brand, description, image. **`offers` omitted** — there is no price, and inventing one is a policy violation |
| `BreadcrumbList` | All | |
| `FAQPage` | FAQ blocks | Only for genuine, visible Q&A |
| `Article` | Knowledge base | With `inLanguage` |
| `WebSite` + `SearchAction` | Home | |
| `HowTo` | Installation/replacement guides | |

**On `Product` without `offers`:** this is correct and safe. Rich results will be limited without
price, which is an accepted consequence of the business model — do **not** fabricate an offer or a
price range to earn a rich snippet. `LocalBusiness` on dealer pages is where the structured-data
value actually is.

**`inLanguage` on every entity**, matching the locale.

## 13.6 Internal linking

**Hub and spoke, with problems as the hubs** — reflecting the IA decision in
[06](06-information-architecture.md) §6.4.

```
Problem hub  ──►  Problem detail  ──►  Recommended series  ──►  SKU
     ▲                  │                                        │
     └──────────────────┴──────  Knowledge articles  ◄───────────┘
                                        │
District page ──► Dealer ──► Enquiry ◄──┘
```

**Rules:**

- Every **article links to at least one product** and one conversion point. Content that does not
  route to a conversion is not doing its job.
- Every **product links back to the problems it solves** — bidirectional, so authority flows both
  ways.
- Every **district page links to its dealers**, and every dealer links to its district.
- **Contextual in-body links**, not just related-post modules; they carry far more weight and are
  more useful.
- **Never link across locales.** A Greek page links only to Greek pages. Cross-locale links dilute
  hreflang signals and confuse the visitor.
- **Descriptive anchor text**, translated per locale — never "click here" / "εδώ".

## 13.7 Local SEO

Five districts, five plays.

1. **Google Business Profiles.** One per dealer with a physical premises, categorised for water
   treatment, verified, with real photos. `[CLIENT INPUT REQUIRED]` — whether dealers have GBPs and
   whether Fluux may manage them.
2. **District pages built on real differentiation** — dealer, supply source, local context. Per
   [03](03-cyprus-water-context.md) §3.4, **not** on hardness figures that barely differ.
3. **NAP consistency.** Name, address and phone identical across the site, GBP and directories.
   Inconsistent NAP is the most common and most avoidable local SEO failure.
4. **Local citations** — `oncyprus.com` and equivalent Cyprus directories.
5. **`LocalBusiness` schema** on every dealer entity.

**Both locales must be covered**, since local searches run in both languages, often mixed.

**Do not build city or village pages.** Five districts is the honest granularity. Going below it is
where this pattern becomes the thin content the brief rightly warns about.

## 13.8 Ten knowledge base articles

Each serves a real search intent **and** a pre-purchase anxiety.

| # | Title (intent) | Locale | Audience | Anxiety it answers | Pri |
|---|---|---|---|---|---|
| 1 | **Cyprus desalinates most of its drinking water. So why is your kettle still furred?** | **EL first**, EN | Homeowner | "I thought this was solved" — the counterintuitive hook, and the article most likely to earn links | **P0** |
| 2 | **What a water filter can and cannot fix in a Cypriot home** | **EL first**, EN | Homeowner | "Will this actually solve my problem?" — the scope-honesty piece that prevents the overpromise in [03](03-cyprus-water-context.md) §3.3 | **P0** |
| 3 | **Bottled water vs filtered: the real annual cost in Cyprus** | EL + EN | Homeowner | "Is this worth it?" — with visible arithmetic | **P0** |
| 4 | **Already have an Everpure or 3M system? What fits, and what it costs** | **EN first**, EL | Commercial | "Do I have to replace everything?" — the highest commercial intent on the list | **P0** |
| 5 | **What NSF/ANSI 42, 53 and 401 actually certify** | EN + EL | Both | "Is 'certified' meaningful or marketing?" | P1 |
| 6 | **Micron ratings explained: why 0.1 isn't always better than 0.5** | EN first, EL | Both | "Am I being upsold?" — the honesty piece that builds real authority | P1 |
| 7 | **What happens during a home water test** | **EL first**, EN | Homeowner | "Am I inviting a salesperson into my house?" — directly de-risks the primary CTA | **P0** |
| 8 | **Water filtration for Cypriot restaurants: ice, coffee and compliance** | EL + EN | Commercial | "Will this pass a health inspection?" | P1 |
| 9 | **How often should you change a water filter — and what happens if you don't** | EL + EN | Both | "What's the ongoing commitment?" — feeds the reminder opt-in | P1 |
| 10 | **Choosing an installer in Cyprus: what to ask before you commit** | **EL first**, EN | Homeowner | "Who is this person and can I trust them?" — the core dealer-model objection | P1 |

**Note the locale-first designations.** Articles 1, 2, 7 and 10 are emotional and local — write them
in **Greek first** and translate to English, so the Greek reads native. Articles 4, 5 and 6 are
technical and procurement-facing — **English first**. This is the divergence principle from
[04](04-bilingual-architecture.md) §4.6 applied concretely.

**Article 7 deserves particular attention.** It directly de-risks the site's primary conversion
([08](08-lead-engine.md) §8.2). If visitors hesitate to book a water test, this article is the
remedy — and it is the one nobody would think to write.
