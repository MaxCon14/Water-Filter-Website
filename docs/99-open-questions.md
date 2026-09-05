# 99 — Open Questions

*Every `[CLIENT INPUT REQUIRED]` in the plan, consolidated and **ordered by how much it blocks the
build**. 34 flags across 14 documents.*

**How to use this:** answer the five Tier 1 questions before design starts. Everything below Tier 1
can be answered during design without stalling it. If time is short, questions 1 and 2 alone are
worth more than the rest combined.

---

## Tier 1 — Blocking. Answer before design starts.

### 1. What are FX, HF2 and the third line — and what is "HFS"?

**Blocks:** product IA, series pages, selector decision tree, comparison, all messaging.

The brief says FX / FHF2 / HFS. Research found FX and HF2, no HFS, and an H-series
(H17-SD3, H17-CS2, H17-PS2) organised by media type. We need:

- Is "FHF2" the same line as "HF2"?
- Is "HFS" a real line? If so, what is it? If not, is the H-series the intended third line?
- What genuinely differentiates each line — media, application, micron rating, flow?
- Is the naming grammar `{series}{size}-{media}{stage}` correct?

*Ref: [02](02-product-matrix.md) §2.2 · Findings 1 and 4 in [01](01-context-and-findings.md)*

### 2. The complete SKU list

**Blocks:** IA, selector leaf nodes, comparison, content model.

Do H-series parts exist at sizes 10 and 15, or only 17? Is the range nine SKUs as briefed, or
fifteen-plus as the research suggests? Which are available in Cyprus specifically?

*Ref: [02](02-product-matrix.md) §2.3*

### 3. ~~Recommended replacement interval~~ — **ANSWERED for FX**

The client's label photographs settled this. **FX-15: every 6 months, or 3,000 gallons, whichever
comes first. FX-17: every 6 to 12 months, varying with local water quality.** FX-10's label does
not state an interval.

Still open for **HF2 and the H series**, and still the number that sets the consumable revenue
cycle. See Q7 below — their data is now actively suspect.

### 4. Is there a whole-house or softening product for Cyprus?

**Blocks:** homeowner IA, messaging scope, selector whole-house branch, the limescale content
strategy.

If yes, the homeowner proposition is much broader and limescale becomes a P0 product claim. If no,
messaging must be disciplined about point-of-use scope.

*Ref: [02](02-product-matrix.md) §2.6 · [09](09-selector-tool.md) §9.6*

### 5. Will dealers provide free on-site water testing, and where?

**Blocks:** the primary sitewide CTA, homepage hero, `/water-test/` page, conversion strategy.

The plan recommends the free water test as the primary homeowner conversion
([08](08-lead-engine.md) §8.2). **That entire recommendation depends on a commercial agreement that
may not exist.** If dealers will not, the primary CTA reverts to a quote request and conversion will
be materially lower.

---

## Tier 2 — Gates a major component. Answer during Phase 1.

### 6. Dealer network data

**Gates:** locator, routing, district pages, confirmation page, `LocalBusiness` schema.

Per dealer: trading name, districts covered, services, sector specialisms, phone, WhatsApp, email,
address, response commitment, weekly capacity, photo and consent to use it.

*Ref: [08](08-lead-engine.md) §8.5 · [12](12-technical-specification.md) §12.2 ·
**the project's critical path**, [15](15-delivery-roadmap.md) §15.2*

### 7. Label photographs for HF2 and the H series — **now urgent**

**Gates:** every HF2 and H figure on the site.

The FX specifications on this site were replaced with manufacturer label data after the client
supplied product photographs. The distributor listings they replaced were wrong by roughly **ten
times on capacity** (FX-15 listed at 60,567 L; the label says 11,356 L) and by **three to five
times on flow** (listed at 9.4 L/min; the label says 1.9 L/min).

HF2 and H are still sourced from those same listings. There is no reason to think they are any more
accurate. **Treat every HF2 and H number on the site as unreliable until a label photograph
confirms it** — a photograph of each label is a five-minute job and is now the single highest-value
thing outstanding.

### 8. Verified specifications for every SKU

**Gates:** all product pages, comparison, structured data.

Flow rate, capacity, micron rating, operating pressure and temperature, dimensions, connection size,
media composition, head compatibility. **Everything currently in the plan is secondary-source and
unpublishable** — [02](02-product-matrix.md) §2.1.

Note specifically: one source states an operating temperature of "35~100 ℃", almost certainly a
°F/°C error. Please confirm the correct figure and check whether the error exists in Fluux's own
distributor material.

### 8. Certification evidence

**Gates:** the "certified, not claimed" pillar — the strongest differentiator in the plan.

Certificate numbers for NSF/ANSI 42, 53 and 401 per SKU; the issuing body; copies of certificates.
**And specifically: can the claim that Fluux was the "world's first range certified to NSF 401 for
microplastics reduction at 0.1 micron" be substantiated?** It is a strong claim from a single
retailer listing and must be verified against the NSF listings database before use.

*Ref: [02](02-product-matrix.md) §2.3 · [05](05-positioning-messaging.md) §5.2*

### 9. Cartridge retail price

**Gates:** the cost transparency block that replaces price on SKU pages; the bottled-water
comparison — the plan's main economic argument.

Without it, objections 2 and 7 in [14](14-trust-objections-analytics.md) §14.2 go unanswered.

*Ref: [07](07-page-blueprints.md) §7.3 · [03](03-cyprus-water-context.md) §3.2*

### 10. Data sharing agreement with dealers

**Gates:** lawful transfer of personal data to dealers — i.e. the entire business model.

Dealers are **independent controllers**, not processors. Each needs a signed agreement covering
purpose limitation, retention, security, no onward transfer and cooperation on data subject
requests. **A dealer who will not sign should not receive leads.**

*Ref: [12](12-technical-specification.md) §12.6*

### 11. Brand assets

**Gates:** all visual design.

Logo (vector, with clear-space rules), any existing palette or typography, photography library,
brand guidelines. If none exist, confirm that creating the identity is in scope — the plan currently
assumes it is.

*Ref: [11](11-design-direction.md) · [01](01-context-and-findings.md) §1.1*

### 12. Contact channels

**Gates:** header, footer, sticky mobile bar, contact page, out-of-hours handling.

Central phone number, WhatsApp Business number, business hours, public holiday handling, and who
answers. Also: is there a named commercial contact for the commercial pages?

*Ref: [08](08-lead-engine.md) §8.6*

### 13. CRM

**Gates:** lead integration architecture.

Which CRM, if any? If none, the plan recommends HubSpot or Pipedrive.

*Ref: [12](12-technical-specification.md) §12.5*

### 14. Dealer commitment to outcome reporting

**Gates:** measurement of lead *quality* — the plan's stated definition of success.

Without it, everything below "Routed" in the funnel is invisible and KPIs 1 and 3 cannot be
measured. This is a commercial negotiation and should be a condition of receiving leads.

*Ref: [14](14-trust-objections-analytics.md) §14.3*

---

## Tier 3 — Affects quality, not feasibility. Answer during design or build.

| # | Question | Affects | Ref |
|---|---|---|---|
| 15 | Confirm the Fluux–Microfilter relationship. Is Fluux Cyprus a distributor, licensee or brand operation? Is Korean manufacture a story to tell or to downplay? | About page, provenance messaging | [01](01-context-and-findings.md) §1.2 |
| 16 | Greek trade terminology used by Fluux and its dealers — *φίλτρο* vs *σύστημα φιλτραρίσματος*, *άλατα* vs *πουρί* | Greek IA, slugs, keyword research, copy | [04](04-bilingual-architecture.md) §4.6, [13](13-seo-content-strategy.md) §13.3 |
| 17 | What exactly does the water test measure? | `/water-test/` page, expectation setting | [07](07-page-blueprints.md) §7.9 |
| 18 | Dealer response commitments, weekly capacity limits, holiday handling. Can Fluux service a lead directly when no dealer matches? | Routing logic, response clock, fallbacks | [08](08-lead-engine.md) §8.5 |
| 19 | Reference installations and case studies — with permission to name | Commercial hub, projects, trust | [07](07-page-blueprints.md) §7.7 |
| 20 | Dealer photography and consent to publish | Locator, district pages — **the strongest answer to "who installs this"** | [11](11-design-direction.md) §11.6 |
| 21 | Legal sign-off on the comparative advertising pattern for competitor comparisons | Cartridge cross-reference tool | [10](10-comparison-experience.md) §10.6 |
| 22 | Do dealers have Google Business Profiles, and may Fluux manage them? | Local SEO | [13](13-seo-content-strategy.md) §13.7 |
| 23 | Do dealers observe seasonal patterns in enquiries or water complaints? | Content, campaign timing — cheap to ask, unavailable to competitors | [03](03-cyprus-water-context.md) §3.5 |
| 24 | Will marketing pixels ever be added? **Decide before launch** — retro-fitting consent management is far more expensive | Cookie banner: needed or not | [12](12-technical-specification.md) §12.6 |
| 25 | Cyprus company registration number, VAT number, registered address | Footer, legal pages | [14](14-trust-objections-analytics.md) §14.1 |
| 26 | Domain — is `fluux.com.cy` available and preferred? | Everything | [04](04-bilingual-architecture.md) §4.1 |

---

## Research the client cannot answer — commission separately

| Task | Why it matters | Ref |
|---|---|---|
| **WDD and district water board data pass** | Every Cyprus water figure in the plan is currently secondary-source, and the hardness numbers come from **competitors' marketing**. ~2 days of work that de-risks every claim on the site and produces genuinely proprietary content | [03](03-cyprus-water-context.md) §3.1 |
| **Greek keyword research, as original research** | Translating the English keyword list produces terms nobody searches. Determines whether the Greek site — serving the larger audience — is found at all | [13](13-seo-content-strategy.md) §13.3 |
| **NSF listings verification** | Independently confirm every certification claim before publication | [02](02-product-matrix.md) §2.1 |
