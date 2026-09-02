# 14 — Trust, Objections & Analytics

---

## 14.1 Trust signal inventory

Fluux is an unknown brand entering a market where incumbents trade on decades of local presence
(Camelot claims 46 years; Karma since 1999). **Fluux cannot compete on longevity, so it must
compete on verifiability.**

| Signal | Strength | Placement |
|---|---|---|
| **NSF/ANSI certification marks + certificate numbers** | **Highest** | Home, SKU, series, certifications page, footer |
| **Named local dealers with faces and phone numbers** | **Highest** | Locator, district, SKU, confirmation |
| **Free water test with no obligation** | High | Sitewide primary CTA |
| **Published, complete specifications** | High | SKU, comparison |
| Scope honesty — saying what it does not do | High | Problem pages, selector, positioning |
| Downloadable spec sheets, ungated | High | SKU, commercial |
| Everpure/3M compatibility | High (commercial) | Commercial hub, SKU, cross-reference |
| Manufacturer provenance (Microfilter, Korea) | Medium | About |
| Reference installations / case studies | Medium-high | Commercial, projects |
| Dealer response commitment ("within 1 working day") | Medium | Forms, confirmation |
| Transparent running costs | Medium | SKU, cost comparison |
| Exclusive routing — one dealer, not five | Medium | Forms, confirmation |
| Cyprus company registration, VAT, address | Medium | Footer, about, legal |
| Customer reviews | **Deferred** | — |

**On reviews:** do not build a review system for launch. With no volume, three reviews look worse
than none, and a review widget with an empty state actively signals a new and untested business.
Revisit at 50+ completed installations.

**On provenance:** Korean manufacture should be stated plainly on the About page, framed as
engineering credibility rather than hidden. Discovery of a concealed fact is far more damaging than
the fact itself — and in a market this small, it will be discovered.

## 14.2 Objection map — the eight reasons a visitor does not enquire

| # | Objection | Answered by | Where |
|---|---|---|---|
| 1 | **"I've never heard of Fluux."** | Certifications with numbers; manufacturer provenance stated openly; named local dealers; ungated technical documentation | Home certification strip; About; locator; SKU downloads |
| 2 | **"What does it actually cost?"** | **Cost transparency block** — cartridge price and annual running cost, with installation explained as dealer-variable. Plus visible bottled-water arithmetic | SKU block 9 ([07](07-page-blueprints.md) §7.3); cost comparison on home and problem pages |
| 3 | **"Am I about to be cold-called by five companies?"** | *"Your enquiry goes to one dealer. We'll tell you which."* Stated at the form, in the consent text, and on the confirmation | Form expectation block; consent copy; confirmation page |
| 4 | **"Who actually installs this — and are they any good?"** | Named dealers with photos, districts, specialisms and response commitments; the installation page; article 10 | Locator; dealer cards; `/installation/`; knowledge base |
| 5 | **"What happens when it breaks, or when I need a new cartridge?"** | Service and replacement page; reminder opt-in; dealer service commitment; supply lead times | `/installation/replacement/`; SKU block 10; commercial service block |
| 6 | **"Will this actually fix my problem?"** | **Scope honesty** — the plain statement that point-of-use filtration does not descale a boiler. The free water test replaces a guess with a measurement | Problem pages; selector whole-house branch ([09](09-selector-tool.md) §9.6); article 2 |
| 7 | **"Why won't you show me a price?"** | Explain *why* — water treatment depends on your water and plumbing, so the dealer quotes on what you actually have. Then give the running cost anyway | SKU cost block; FAQ; how-it-works |
| 8 | **"Is my data safe, and who are you giving it to?"** | Specific unbundled consent naming the recipient; the dealer-sharing page; plain-language privacy | Consent block ([08](08-lead-engine.md) §8.8); `/privacy/dealer-sharing/` |

### The four dealer-model objections, specifically

The brief singles these out, and they deserve a direct statement of the design response:

- **"Who actually installs this?"** → Objection 4. **Named humans beat any amount of copy.** Dealer
  photography is the highest-leverage asset request in the plan.
- **"What does it really cost?"** → Objections 2 and 7. **The answer is not silence.** Publish the
  recurring cost even though the installed price varies; explain the variance honestly.
- **"What happens when it breaks?"** → Objection 5. A named local dealer with a stated response
  commitment is a better answer than a warranty document.
- **"Am I about to be cold-called?"** → Objection 3. **Exclusive routing is the product feature that
  answers this**, and it must be said out loud at the point of hesitation — beside the submit
  button, not buried in the privacy policy.

**All four are answered by the same underlying decision:** one named dealer, stated in advance. That
is why exclusive routing ([08](08-lead-engine.md) §8.5) is a design and trust decision, not just an
operations one.

## 14.3 Analytics

### Events

| Event | Properties | Why |
|---|---|---|
| `page_view` | path, locale, template | Baseline |
| `problem_card_click` | problem, locale | Which problem drives traffic |
| `selector_start` | entry_point, locale | |
| `selector_question_answered` | question_number, answer | **Drop-off diagnosis** |
| `selector_completed` | result_sku, path_taken | |
| `selector_abandoned` | last_question | **The key diagnostic** |
| `selector_fallback` | reason | Tree coverage gaps |
| `size_selector_changed` | sku, from_size, to_size | Validates the capacity ladder |
| `spec_sheet_download` | sku, locale | **High commercial intent** |
| `comparison_started` / `comparison_skus_changed` | skus | |
| `dealer_search` | district, filters, results_count | **Zero-result searches = coverage gaps** |
| `dealer_card_click` | dealer_id, district | |
| `phone_click` | page, locale, in_hours | |
| `whatsapp_click` | page, locale, in_hours | |
| `form_start` / `form_step_completed` / `form_abandoned` | form_type, step | **Per-step abandonment** |
| `form_submitted` | form_type, score_band, district, locale, prefilled | **Primary conversion** |
| `consent_given` | consent_type, granted | Marketing opt-in rate |
| `water_test_booked` | district, locale | **Primary homeowner conversion** |
| `reminder_optin` | sku | |
| `cross_reference_lookup` | competitor_model, matched | **Competitor switching demand** |
| `dealer_application_submitted` | district | |
| `locale_switched` | from, to, path | Detection accuracy |

**Server-side events** (not client analytics): `lead_assigned`, `dealer_responded`,
`lead_reassigned`, `lead_status_changed`, `lead_won` / `lead_lost`.

### Funnel

```
Landing
  └─► Engaged  (problem page, product page, or selector start)
        └─► Qualified interest  (selector complete, spec download, comparison, dealer search)
              └─► Conversion  (form submitted / test booked / call / WhatsApp)
                    └─► Routed  (dealer assigned)              ◀ server-side
                          └─► Contacted  (dealer responded)     ◀ dealer-reported
                                └─► Quoted
                                      └─► Won
```

**The funnel does not end at form submission.** Most lead-gen analytics stop there, which measures
the website and ignores the business. The last four stages are where lead *quality* becomes visible,
and they are the only way to distinguish a site producing volume from a site producing revenue.

### Dealer-side attribution

The hard part: **the conversion happens offline, in someone's kitchen.** Three mechanisms, in
order of reliability:

1. **Reference number**, issued at submission and carried through every email. The dealer reports
   outcomes against it. Requires dealer cooperation — build it into the dealer agreement.
2. **Automated status prompts.** Email the dealer at +7 and +30 days with one-click
   quoted/won/lost. Low friction is the only way this gets used.
3. **The +3 day customer check-in** ([08](08-lead-engine.md) §8.7). *"Did your dealer get in
   touch?"* — this is **both** service recovery **and** the most honest attribution data available,
   because it comes from the customer rather than the salesperson.

`[CLIENT INPUT REQUIRED]` Dealer commitment to outcome reporting. **Without it, everything below
"Routed" is invisible and lead quality cannot be measured at all.** This is a commercial
negotiation, not a technical problem, and it should be a condition of receiving leads.

## 14.4 The five launch KPIs

| # | KPI | Definition | Target |
|---|---|---|---|
| 1 | **Qualified lead rate** | Leads scoring ≥40 ÷ total sessions | `[BASELINE — set after 4 weeks]` |
| 2 | **Dealer contact rate** | Leads contacted within commitment ÷ leads routed | **≥90%** |
| 3 | **Lead-to-quote rate** | Leads reaching "quoted" ÷ leads routed | `[BASELINE]` |
| 4 | **Selector completion rate** | Completions ÷ starts | **≥60%** |
| 5 | **Locale parity** | Greek conversion rate ÷ English conversion rate | **0.9–1.1** |

**On targets.** Only 2, 4 and 5 get hard numbers, because they measure things we control. KPIs 1 and
3 depend on market response and dealer behaviour and would be invented numbers — **set them from
four weeks of real data rather than guessing now.** A fabricated target is worse than an
acknowledged baseline period, because teams optimise toward it.

**KPI 5 is the one nobody expects, and it is the canary.** If Greek converts materially worse than
English, something in the Greek build is broken — a stiff translation, a broken layout under text
expansion, untranslated errors, or Greek keyword research that was never done. Because Greek serves
the larger audience, a locale gap is the most expensive silent failure available to this project.

## 14.5 Measuring lead *quality*, not volume

The brief is right that success here is quality, not volume. A site that doubles form submissions
while halving the proportion a dealer can quote has made things worse — dealers stop trusting the
leads, response times slip, and the network degrades.

**Composite lead quality score, measured monthly:**

| Component | Weight | Source | Measures |
|---|---|---|---|
| **Completeness** | 20% | Form data | Did the dealer get enough to quote cold? |
| **Contactability** | 20% | Dealer report | Reached on the first or second attempt? |
| **Intent accuracy** | 20% | Dealer report | Was the stated timeframe real? |
| **Routing accuracy** | 15% | Reassignment rate | Right dealer first time? |
| **Quote conversion** | 25% | Dealer report | Did it become a quote? |

**Three guardrail metrics**, watched alongside:

- **Discovery-call rate** — how often a dealer needs a call *before* quoting. **This is the direct
  measure of whether the site achieved its stated job.** It should fall over time; if it does not,
  the form is missing a field.
- **Rejected-lead rate** — leads dealers decline. A rise means qualification has loosened.
- **Duplicate rate** — the same person submitting repeatedly usually means the confirmation is not
  reassuring them.

**The counter-intuitive success signal:** if the free water test works as intended, **raw
form-submission volume may rise while apparent "quote request" conversion falls.** That is the funnel
working correctly — lower-friction entry, qualification happening in the kitchen instead of on the
form. **Judge it on quotes and installations, not on form fills**, or the team will optimise away
the single best thing about the design.
