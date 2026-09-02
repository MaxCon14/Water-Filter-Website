# 08 — The Lead Engine

*The largest section, because with no cart this **is** the product. A quote request is a far
higher-friction ask than an add-to-cart: the visitor gets nothing immediately, hands over personal
data, and expects to be contacted by a stranger. Everything here is designed against that friction.*

---

## 8.1 The principle

> Build enough confidence that a stranger hands over their contact details, then route that lead to
> the right dealer with enough context that the dealer can quote without a discovery call.

Two halves, often in tension. Every extra qualification field makes the dealer's job easier and the
visitor's decision harder. **The resolution: ask only what the dealer cannot get any other way, and
earn each field by explaining why it is needed.**

## 8.2 Conversion inventory

Ranked by intent — highest first.

| # | Conversion | Intent | Audience | Launch |
|---|---|---|---|---|
| 1 | **Request a quote** | Highest | Both | **P0** |
| 2 | **Book a site survey** | Very high | Commercial | **P0** (as part of commercial enquiry) |
| 3 | **Book a free water test** | High — **lowest friction at this intent** | Homeowner | **P0 — primary** |
| 4 | **Phone call** | High, immediate | Both | **P0** |
| 5 | **WhatsApp** | High, low commitment | Both | **P0** |
| 6 | **Contact a specific dealer** | High, self-selected | Both | **P0** |
| 7 | **Download a spec sheet** | Medium-high, research phase | Commercial | **P0** (ungated) |
| 8 | **Selector completion** | Medium | Homeowner | **P0** |
| 9 | **Replacement reminder opt-in** | Medium, deferred purchase | Both | **P1** |
| 10 | **Cartridge cross-reference** | High — competitor switching | Commercial | **P1** |
| 11 | **Become a dealer** | Separate lead type | Trade | **P1** |
| 12 | Newsletter | Low | Both | P2 |
| 13 | Live chat | Medium | Both | **Defer** |

### The recommendation that matters: lead with the water test, not the quote

**Make the free water test the primary homeowner CTA sitewide, ahead of "request a quote."**

- **It is the established mechanic in this market.** Camelot already advertises free water testing
  before and after each filter change. This is a proven Cyprus play, not an experiment.
- **It asks for curiosity, not a decision.** A quote request implies you have chosen. Most visitors
  have not; they are still establishing whether they have a problem worth solving.
- **It produces a better lead.** The dealer arrives with a measurement, not a guess, and leaves
  having built a personal relationship. This product is sold in the kitchen.
- **It converts the site's weakness into a strength.** No price and no cart is a liability for a
  transactional CTA. For a diagnostic CTA it is irrelevant — nobody expects to buy a test.

Keep *Request a quote* prominent for visitors who have decided. But the sitewide default,
the sticky mobile bar and the homepage hero should say **Book a free water test**.

`[CLIENT INPUT REQUIRED]` Will dealers commit to free on-site testing, and across which districts?
**This recommendation depends entirely on that commercial agreement.** If dealers will not, the
primary CTA reverts to the quote request and the conversion rate will be materially lower.

### Defer live chat

It requires staffing to be worth having; an unstaffed widget actively damages trust. WhatsApp does
the same job in this market with better economics — asynchronous, familiar, and it works on the
device people actually use. Revisit once lead volume justifies a person.

## 8.3 Form design

### Principles

1. **Minimum viable for a cold quote.** Every field justifies itself by preventing a discovery call.
2. **Progressive disclosure.** Group into steps; never present twelve fields at once.
3. **Ask for contact details last.** Commitment increases as the visitor invests; requesting a phone
   number first is the highest-abandonment pattern there is.
4. **Pre-fill everything known.** From the selector, the SKU page, the district page. Never ask
   twice.
5. **Explain each non-obvious field inline.** "Why do we need this?" answered where it is asked.
6. **One column.** Multi-column forms measurably increase errors and break under Greek expansion.

### Homeowner enquiry / water test booking

**Step 1 — Your water** *(what the dealer cannot guess)*

| Field | Type | Req | Notes |
|---|---|---|---|
| District | Select (5) | ✅ | **Drives routing.** First field — cheap and unthreatening |
| Property type | Radio: apartment / house / villa | ✅ | Determines plumbing and access |
| Occupants | Select: 1–2 / 3–4 / 5+ | ✅ | Sizing input |
| Main concern | Multi-select: taste/odour · limescale · safety · bottled cost · sediment · not sure | ✅ | **"Not sure" is essential** — forcing a diagnosis loses the least confident visitor |
| Existing filtration | Radio: none / Fluux / other brand / don't know | ✅ | Routes replacement vs new install ([02](02-product-matrix.md) §2.7) |

**Step 2 — What you need**

| Field | Type | Req | Notes |
|---|---|---|---|
| Interest | Radio: free water test / quote / just researching | ✅ | Sets dealer expectation. "Just researching" is honest and prevents a bad call |
| Timeframe | Select: ASAP / this month / 1–3 months / exploring | ✅ | **Primary scoring input** |
| Preferred contact | Radio: phone / WhatsApp / email | ✅ | Respecting this materially improves contact rates |
| Best time | Select: morning / afternoon / evening | ○ | |

**Step 3 — How to reach you**

| Field | Type | Req | Notes |
|---|---|---|---|
| Name | Text | ✅ | Single field. Never split first/last — no benefit, extra friction |
| Phone | Tel | ✅ | `+357` prefilled, `inputmode="tel"` |
| Email | Email | ○ | **Optional if phone given.** Cyprus homeowners often prefer voice |
| Address | Text | ○ | Only for a water test booking; revealed conditionally |
| Notes | Textarea | ○ | |

**Consent** *(separate, unticked — see §8.8)*

**No budget field.** For homeowners it is intrusive, badly estimated, and timeframe predicts
seriousness better. Budget signal is inferred from property type + occupants + timeframe.

### Commercial enquiry

Longer is acceptable — this buyer expects to specify, and a thin commercial lead is worthless.

**Step 1 — Your business**

| Field | Type | Req |
|---|---|---|
| Business name | Text | ✅ |
| Sector | Select: hotel · restaurant/café · office · clinic · developer · other | ✅ |
| District(s) | Multi-select | ✅ |
| Number of sites | Select: 1 / 2–5 / 6+ | ✅ |

**Step 2 — Your requirement**

| Field | Type | Req | Notes |
|---|---|---|---|
| Application | Multi: drinking · ice machine · coffee · food prep · whole-site · other | ✅ | Maps to series |
| Existing system | Radio: none / Everpure / 3M Aqua-Pure / other / don't know | ✅ | **The highest-value field on the form.** An Everpure answer means a drop-in cartridge swap |
| Estimated daily volume | Select bands + "don't know" | ○ | Sizing |
| Peak flow requirement | Select + "don't know" | ○ | |
| Service contract needed | Radio: yes / no / want to discuss | ✅ | Recurring revenue signal |
| Timeframe | Select: urgent / this quarter / next / planning | ✅ | **Primary scoring input** |
| Budget indication | Select bands + "prefer not to say" | ○ | Acceptable in B2B where it is not for homeowners |

**Step 3 — Contact**

Contact name, role, phone, email (**required** here — B2B runs on email), preferred contact,
notes/upload for a site plan or current spec.

**Consent** *(separate)*

### Validation, errors, mobile

| Concern | Rule |
|---|---|
| Validation timing | **On blur, not on keystroke.** Never validate a field the user has not finished |
| Error placement | Inline, below the field, with an icon — never colour alone (WCAG 1.4.1) |
| Error tone | Plain and constructive: *"We need a phone number so your dealer can reach you"* — not *"Invalid input"* |
| Error summary | On submit failure, a summary at the top links to each error, focus moved to it (WCAG 3.3.1) |
| Phone | Accept spaces, dashes, `+357`, and local 8-digit. Normalise server-side. **Never reject formatting** |
| Required marking | Mark required fields, not optional ones — fewer marks, less visual noise |
| Mobile keyboards | `inputmode="tel"`, `type="email"`, `autocomplete="name \| tel \| email \| postal-code"` |
| Autofill | Full `autocomplete` on every contact field. Measurably lifts completion |
| Persistence | Save to `sessionStorage` per step. A lost form on a flaky mobile connection is a lost lead |
| Zoom | Inputs at **16px minimum** — smaller triggers iOS auto-zoom, which feels broken |
| Touch targets | 44×44px minimum |
| Greek | Every label, hint, error and consent string translated. **Errors are the most commonly missed** |

## 8.4 Lead qualification and scoring

### What the dealer needs to quote cold

| Need | Field | Why |
|---|---|---|
| Where | District | Routing + travel |
| What kind of property | Property type / sector | Plumbing, access, scale |
| How much water | Occupants / daily volume | Sizing |
| What problem | Main concern / application | Product selection |
| What exists | Existing filtration | **Replacement vs new install — different quote entirely** |
| How soon | Timeframe | Prioritisation |
| How to reach them | Contact + preference | Contact rate |

### Scoring

A transparent additive model. Simple, explainable to dealers, and tunable without a rebuild.

```
Timeframe:      ASAP/urgent +30 · this month/quarter +20 · 1–3 months +10 · exploring 0
Intent:         quote request +25 · water test +20 · researching +5
Existing system: competitor head +25 (drop-in switch) · none +15 · Fluux +10 · unknown +5
Commercial:     6+ sites +25 · 2–5 +15 · 1 +5
Completeness:   all optional fields +10 · some +5
Contactability: phone given +10 · email only +5
```

| Band | Score | Handling |
|---|---|---|
| **Hot** | 70+ | Immediate dealer notification (SMS + email). 4-hour response target |
| **Warm** | 40–69 | Standard routing. 1 working day |
| **Cool** | <40 | Routed + nurture sequence. 2 working days |

**Note the competitor-head bonus.** A commercial visitor with an Everpure head and a cartridge
requirement is the cheapest possible sale — no installation, no persuasion, purely price and
availability. Score it accordingly.

## 8.5 Dealer routing

### The model

```
Lead submitted
   │
   ├─ 1. Filter by DISTRICT ──────── dealers covering it
   ├─ 2. Filter by SPECIALISM ────── commercial → commercial-capable only
   │                                 sector match preferred (hotel, foodservice)
   ├─ 3. Filter by CAPACITY ──────── exclude dealers at their weekly cap or on holiday
   ├─ 4. Rank ───────────────────── sector specialism > response history > round-robin
   └─ 5. Assign to ONE dealer
         │
         ├─ Notify: email + SMS, with full lead context
         ├─ Start response clock
         └─ Confirm to customer, naming the dealer
```

**Assign to one dealer, not several.** Selling one lead to three dealers produces three calls in an
hour, which is the "am I about to be cold-called" nightmare made real. In a market this small,
reputation damage compounds fast. **Exclusivity is a feature — and it should be stated on the
confirmation page**, because it is genuinely reassuring.

### No match

Never fail silently, and never show the customer an error. In order:

1. **Widen to adjacent districts** (Nicosia↔Larnaca, Limassol↔Paphos), flagging travel to the dealer.
2. **Fall back to a central Fluux queue.** Fluux handles it directly and either services it or
   recruits a dealer.
3. **Customer-facing message is unchanged** — *"We've received your enquiry and will be in touch
   within one working day."* Never *"No dealer available in your area."*
4. **Log the gap.** Repeated no-matches in a district are the become-a-dealer campaign's targeting
   data. See §8.9.

### Non-response

| Elapsed | Action |
|---|---|
| Assignment | Email + SMS to dealer |
| **+4h** (hot) / **+24h** (others) | Reminder to dealer |
| **+8h** / **+48h** | **Reassign** to next-ranked dealer; original marked missed |
| No second dealer | Central Fluux queue |
| **+72h** | Alert to Fluux regardless of state |
| Customer side | If unassigned at 24h, an honest holding email: *"still finding the right installer"* |

**Track missed leads per dealer.** It is the primary input to ranking, and to the network-quality
conversation. A dealer who misses leads should stop receiving them.

`[CLIENT INPUT REQUIRED]` Dealer response commitments, capacity limits, holiday handling, and
whether Fluux can service a lead directly. **All of §8.5 is a commercial design, not a technical
one — it cannot be built until these are agreed.**

## 8.6 Phone and WhatsApp

Cyprus buyers frequently prefer voice and messaging over forms, particularly commercial buyers.
**These are primary channels, not fallbacks.**

| Placement | Behaviour |
|---|---|
| Header (desktop) | Number visible as text, `tel:` linked |
| Header (mobile) | Call icon, always visible, never in the menu |
| **Sticky mobile bar** | **Call + WhatsApp + Book a test.** Persistent |
| Every form page | Beside the form, equally weighted — *"prefer to talk?"* |
| Commercial pages | **A named person and a direct line.** Not a switchboard |
| Dealer cards | Dealer's own number and WhatsApp |
| Footer | Number, hours, WhatsApp |

**Click-to-call:** `tel:+357...` in international format. Desktop shows the number as selectable
text (desktop click-to-call mostly fails and frustrates).

**WhatsApp:** `https://wa.me/357XXXXXXXX?text=<prefilled>` — pre-fill context ("I'm interested in
FX-15 in Limassol") so the conversation starts qualified. **Use the WhatsApp Business API** so
messages land in a shared inbox and can be routed to dealers, not a personal handset.

**Hours handling:**

- Display business hours in local time, in both locales
- **Out of hours: change the label, not the link.** *"We're closed — call back from 08:00, or
  message us on WhatsApp and we'll reply in the morning."* Never hide the number
- WhatsApp gets an out-of-hours auto-reply with a response commitment
- Handle Cyprus public holidays and the August slowdown — a silent August is a real risk

`[CLIENT INPUT REQUIRED]` Central phone number, WhatsApp Business number, hours, and who answers.

## 8.7 Post-submission

**A dedicated confirmation page, not a toast.** It carries the highest-attention moment in the
funnel and is analytically essential.

**Must contain:** a clear confirmation; a **reference number**; **who** will contact them (dealer
name and district, once assigned); **when** ("within one working day"); **how** (their stated
preference); what happens on the call; the dealer's direct contact; a *"wrong dealer / change my
details"* escape; and, for a water test, what to have ready.

**Must not contain:** an immediate upsell, a newsletter prompt, or a social follow ask. Let the
conversion land.

### Automated email

Sent in **the locale the form was submitted in** — not the browser default, not the account
default. Within 60 seconds.

Contents: reference number, submitted summary (so they can check it), dealer details, expected
timeframe, what happens next, a correction contact, spec sheets for any product referenced, and an
unsubscribe/data-rights link (GDPR).

**A separate email to the dealer**, containing the full lead context, the score band, the response
deadline, and one-tap accept/decline.

### Nurture

Only for those who consented to marketing — a distinct consent from dealer-sharing (§8.8).

| When | Homeowner | Commercial |
|---|---|---|
| +3 days | "Did your dealer get in touch?" — **service recovery, not marketing.** The single most valuable message in the sequence | Same |
| +7 days | Your water problem explained (matched to their stated concern) | Sector case study |
| +21 days | Bottled water cost comparison | Service contract explainer |
| +60 days | Still thinking? Book a water test | Check-in from a named person |

**The +3 day check-in doubles as quality assurance.** A "no, nobody called" reply is the earliest
and cheapest signal that a dealer is failing, and it lets Fluux recover the lead while it is still
warm.

## 8.8 Consent — a design constraint, not a checkbox

Passing a named person's details to a third-party dealer requires a lawful basis and specific,
informed, unbundled consent. This **changes the form UI**. Full legal analysis in
[12](12-technical-specification.md) §12.6.

**Three separate, independently-unticked consents:**

```
☐  Share my details with my local Fluux dealer so they can contact me
   about my enquiry.                                              [REQUIRED to submit]
   → Your enquiry goes to one dealer only. We'll tell you which.
     See how we share your data.

☐  Email me about Fluux products, offers and water advice.        [OPTIONAL]

☐  Remind me when my filter is due for replacement.               [OPTIONAL]
```

**Rules:**

- **Never pre-ticked.** Never bundled. Never a single "I agree to the terms and privacy policy".
- The dealer-sharing consent is **required to submit**, because without it there is no service to
  provide — and the form must say so plainly rather than failing silently.
- **Name the dealer where known.** Specificity is what makes consent informed. Where the dealer is
  not yet assigned, say *"one dealer in your district, which we'll name when we confirm."*
- **Log consent**: text version, timestamp, IP, locale, form. Retention rules in
  [12](12-technical-specification.md) §12.6.

## 8.9 Become-a-dealer funnel

A **separate lead type** that must stay out of the customer's way.

**Placement:** footer on every page; a band at the bottom of the dealer locator (a visitor finding
no dealer is a recruitment signal); the About page. **Never** in the primary navigation, and never
mixed into a customer form.

**Its own page and its own form:**

Company name · contact name and role · districts covered · years trading · business type
(plumber / water treatment / appliance retail / other) · existing brands carried · team size ·
installation capability · service capability · commercial experience · why Fluux.

**Routing:** goes to Fluux commercial, **never** to the dealer pipeline. Different CRM object,
different sequence, different owner. Mixing them corrupts lead reporting and, worse, risks routing
a competitor's enquiry to a dealer.

**Targeting:** the no-match log (§8.5) is the prospect list. Districts generating unserviced leads
are exactly where recruitment pays.
