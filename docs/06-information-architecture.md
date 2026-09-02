# 06 — Information Architecture

*Full-depth section.*

---

## 6.1 The audience-split problem, resolved

Homeowners and commercial buyers need different journeys. The site cannot afford to be two parallel
sites. Three mechanisms were considered:

| Mechanism | How it works | Verdict |
|---|---|---|
| **Homepage fork** | Splash: "I'm a homeowner / I'm a business" | **Rejected** |
| **Persistent audience switch** | A global toggle re-skins the whole site | **Rejected** |
| **Shared pages with segmented modules + one commercial hub** | One IA. Homeowner-default pages carry commercial entry points; a dedicated hub owns the commercial journey. | **Recommended** |

### Why not the homepage fork

It puts a decision in front of the visitor **before it has earned one**, and it costs on every axis
that matters here:

- It **halves SEO value**. Both forks compete for the same terms, and organic traffic lands on deep
  pages anyway, bypassing the fork entirely. Most visitors will never see it.
- It **misroutes real people.** A restaurant owner filtering water at home, or a homeowner who is
  also a developer, does not fit either button.
- It **doubles the content burden** — the exact bloat the brief warns about — and Greek translation
  doubles with it.

### Why not the persistent switch

Same content-doubling problem, plus a state that must be preserved across navigation, locale
switching and sharing. High engineering cost, high QA cost, and it makes every shared URL
ambiguous — the recipient may see a different site than the sender.

### Why shared pages with segmented modules

- **One page per topic**, so authority concentrates and translation is halved.
- Segmentation happens **where it matters** (a spec table's emphasis, a CTA, a form) rather than at
  the front door.
- **Commercial buyers self-identify by behaviour**, not by declaration — they go to the commercial
  hub, download a spec sheet, or use the capacity-led route. Behaviour is a more reliable signal
  than a button click.
- Degrades gracefully: a commercial visitor on a homeowner-default page still finds what they need,
  just with an extra click.

### The mechanism, concretely

1. **The homepage carries both**, weighted to homeowners (the larger volume) with a clear,
   persistent commercial entry point above the fold — not a footer link.
2. **Product and SKU pages are shared**, with an audience-aware spec emphasis:
   domestic-leaning SKUs lead with *months between changes*; commercial-leaning SKUs lead with
   *litres and flow*. Same data, inverted hierarchy — per [02](02-product-matrix.md) §2.4.
3. **`/commercial/` is a genuine hub**, not a landing page: its own sub-navigation, sector pages,
   case studies, spec library and a separate enquiry form.
4. **Two distinct enquiry forms** — the real fork is at the point of conversion, which is the only
   place the distinction actually changes anything. See [08](08-lead-engine.md).
5. **The selector tool is the homeowner's guided path**; commercial buyers get direct contact and a
   capacity route instead ([09](09-selector-tool.md) §9.7).

**Where the split genuinely happens: the form, not the front door.**

## 6.2 Sitemap

Three levels. `P0` = launch, `P1` = fast-follow, `P2` = later.

Slugs given as `EN` / `EL`. Greek slugs are Latin-transliterated per
[04](04-bilingual-architecture.md) §4.1 and are **provisional pending Greek keyword research**.

```
HOME  /en/ · /el/                                                    [P0]
│
├── WATER PROBLEMS  /water-problems/ · /provlimata-nerou/            [P0]
│   ├── Limescale & hard water    /limescale/ · /alata/              [P0]
│   ├── Taste & odour             /taste-odour/ · /geusi-osmi/       [P0]
│   ├── Bottled water cost        /bottled-water-cost/ · /kostos-emfialomenou/  [P0]
│   ├── Safety & microplastics    /safety/ · /asfaleia/              [P1]
│   └── Sediment & cloudiness     /sediment/ · /izima/               [P1]
│
├── PRODUCTS  /products/ · /proionta/                                [P0]
│   ├── FX series      /products/fx/ · /proionta/fx/                 [P0]
│   │   └── FX-10 · FX-15 · FX-17    /products/fx/fx-15/             [P0]
│   ├── HF2 series     /products/hf2/ · /proionta/hf2/               [P0]
│   │   └── HF2-10S · HF2-15S · HF2-17S                              [P0]
│   ├── H series       /products/h-series/ · /proionta/seira-h/      [P1]
│   │   └── H17-SD3 · H17-CS2 · H17-PS2                              [P1]
│   ├── [HFS series]   [CLIENT INPUT REQUIRED]                       [P?]
│   ├── Compare        /products/compare/ · /proionta/sygkrisi/      [P0]
│   └── Cartridge finder  /products/cartridge-finder/ · /proionta/evresi-filtrou/  [P1]
│
├── FIND YOUR FILTER (selector)  /find-your-filter/ · /vres-to-filtro-sou/  [P0]
│
├── COMMERCIAL  /commercial/ · /epaggelmatika/                       [P0]
│   ├── Hotels & resorts     /commercial/hotels/ · /epaggelmatika/xenodocheia/     [P1]
│   ├── Restaurants & cafés  /commercial/foodservice/ · /epaggelmatika/estiatoria/ [P1]
│   ├── Offices & clinics    /commercial/offices/ · /epaggelmatika/grafeia/        [P2]
│   ├── Developers & new build /commercial/developers/ · /epaggelmatika/anaptyxeis/ [P2]
│   ├── Projects & case studies /commercial/projects/ · /epaggelmatika/erga/       [P1]
│   └── Commercial enquiry   /commercial/enquiry/ · /epaggelmatika/prosfora/       [P0]
│
├── TECHNOLOGY & CERTIFICATIONS  /technology/ · /technologia/        [P0]
│   ├── How filtration works  /technology/how-it-works/ · /technologia/pos-leitourgei/  [P1]
│   └── Certifications        /technology/certifications/ · /technologia/pistopoiiseis/ [P0]
│
├── DEALERS  /dealers/ · /antiprosopoi/                              [P0]
│   ├── Find a dealer     /dealers/find/ · /antiprosopoi/evresi/     [P0]
│   ├── By district       /dealers/nicosia/ · /antiprosopoi/lefkosia/ (×5)  [P1]
│   └── Become a dealer   /dealers/become-a-dealer/ · /antiprosopoi/ginete-antiprosopos/  [P1]
│
├── INSTALLATION & SERVICE  /installation/ · /egkatastasi/           [P1]
│   ├── What to expect    /installation/what-to-expect/ · /egkatastasi/ti-na-perimenete/  [P1]
│   └── Filter replacement /installation/replacement/ · /egkatastasi/antikatastasi/  [P1]
│
├── WATER TEST (booking)  /water-test/ · /elegchos-nerou/            [P0]
│
├── KNOWLEDGE  /knowledge/ · /gnosi/                                 [P1]
│   ├── Article pages     /knowledge/<slug>/ · /gnosi/<slug>/        [P1]
│   └── Water by district /knowledge/water-in-limassol/ (×5)         [P1]
│
├── ABOUT  /about/ · /schetika/                                      [P0]
├── CONTACT  /contact/ · /epikoinonia/                               [P0]
│
└── LEGAL                                                            [P0]
    ├── Privacy policy    /privacy/ · /aporrito/                     [P0]
    ├── Cookie policy     /cookies/ · /cookies/                      [P0]
    ├── Terms            /terms/ · /oroi/                            [P0]
    └── Dealer data sharing /privacy/dealer-sharing/ · /aporrito/koinopoiisi/  [P0]
```

Plus system pages: 404, search, enquiry confirmation, sitemap.xml, robots.txt.

## 6.3 Page register

| Page | Purpose | Primary CTA | Audience | Pri |
|---|---|---|---|---|
| Home | Route to problem, product or dealer within one screen | Book a free water test | Both | P0 |
| Water problems hub | Entry point for symptom-led visitors — the primary commercial route | Find your filter | Home | P0 |
| Limescale | Cyprus's most-searched water problem; honest about scope | Book a water test | Home | P0 |
| Taste & odour | The problem Fluux most cleanly solves | Find your filter | Home | P0 |
| Bottled water cost | Converts the comparison the buyer is already making | Book a water test | Home | P0 |
| Products hub | Explain the two-step framing; never show a 9-cell grid | Find your filter | Both | P0 |
| Series page (×3) | What this technology is for, and which size | View SKUs / Enquire | Both | P0 |
| SKU page | Full specification without price or cart | Request a quote | Both | P0 |
| Compare | Side-by-side, honest attributes | Request a quote | Both | P0 |
| Cartridge finder | Convert competitors' installed base | Check compatibility → enquire | Comm | P1 |
| Selector | Guided 4-question path to a recommendation | Request a quote (pre-filled) | Home | P0 |
| Commercial hub | Own the commercial journey end to end | Request a commercial quote | Comm | P0 |
| Sector pages | Application-specific proof | Commercial quote | Comm | P1 |
| Projects | Reference installations | Commercial quote | Comm | P1 |
| Commercial enquiry | The commercial conversion | Submit | Comm | P0 |
| Technology | Explain UF vs carbon vs scale inhibition | Find your filter | Both | P0 |
| Certifications | The single strongest trust asset | Download spec sheet | Both | P0 |
| Dealer locator | Map + list, filter by district and service | Contact dealer | Both | P0 |
| District dealer pages | Local SEO + genuine local content | Contact dealer | Both | P1 |
| Become a dealer | The second, separate lead type | Apply | Dealer | P1 |
| Installation | Answers "who actually installs this" | Book a water test | Home | P1 |
| Replacement | Recurring revenue + reminder opt-in | Set a reminder | Both | P1 |
| **Water test** | **The primary homeowner conversion** | Book | Home | P0 |
| Knowledge hub | Search acquisition + pre-purchase anxiety | Contextual | Both | P1 |
| Article | Long-tail acquisition | Contextual | Both | P1 |
| District water pages | Local SEO, dealer + supply source | Find a dealer | Both | P1 |
| About | Provenance, honestly handled | Contact | Both | P0 |
| Contact | Phone, WhatsApp, form, hours | Call / WhatsApp | Both | P0 |
| Privacy / Cookies / Terms | GDPR compliance | — | Both | P0 |
| **Dealer data sharing** | **Lawful basis for passing data to dealers** | — | Both | P0 |

## 6.4 Three IA decisions worth stating explicitly

**1. Problems sit above products.** The water-problems hub is a primary navigation item, level with
Products. This follows directly from the two-step framing in [02](02-product-matrix.md) §2.5:
visitors arrive with a symptom, not a SKU. It also matches how the market searches.

**2. The water test is a top-level destination, not a form on another page.** It is the primary
homeowner conversion ([08](08-lead-engine.md) §8.2), so it needs its own URL to be linked, shared,
and used as a campaign landing page.

**3. Dealer data sharing gets its own page, linked from every form.** Passing a named person's
details to a third-party dealer requires a lawful basis and visible, specific consent. A line in
the privacy policy is not sufficient — the consent must be understandable at the point of
collection. See [12](12-technical-specification.md) §12.6.

## 6.5 Navigation

**Primary (desktop):** Water Problems · Products · Find Your Filter · Commercial · Dealers
Utility: `EN/ΕΛ` · phone · **Book a water test** (button)

Six primary items is at the limit for Greek expansion ([04](04-bilingual-architecture.md) §4.8).
Test the Greek nav early; if it does not fit, collapse to the mobile pattern at a wider breakpoint
rather than shortening labels into ambiguity.

**Mobile:** logo · `EN/ΕΛ` · call icon · menu. A sticky bottom bar carries **Book a test** and
**Call**, which are the two actions that matter on a phone.

**Footer:** full sitemap, dealer locator, become-a-dealer, legal cluster, company details, and the
dealer-data-sharing link.

## 6.6 What we are deliberately not building

- **No customer login.** No orders to track; every account adds GDPR surface for no conversion gain.
- **No pricing pages.** Deliberate. What replaces price is specified in [07](07-page-blueprints.md) §7.3.
- **No blog in the conventional sense.** A structured knowledge base, organised by problem and
  question, not a reverse-chronological feed nobody maintains.
- **No live chat at launch.** Deferred — see [08](08-lead-engine.md) §8.2. WhatsApp does the same
  job in this market, at a fraction of the operational cost.
