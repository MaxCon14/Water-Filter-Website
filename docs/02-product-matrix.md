# 02 — The Product Matrix

*Full-depth section. The IA, the selector tool and the comparison experience all cascade from the
decisions here.*

---

## 2.1 Source tier warning

Every figure in this document is **Tier B or Tier C**. None is Tier A.

| Tier | Meaning | Publishable? |
|---|---|---|
| **A** | Confirmed by Fluux/Microfilter in writing, or an NSF certification listing | Yes |
| **B** | Consistent across two or more independent distributor listings | Design from it. Do not publish. |
| **C** | Single retailer listing, or a search summary of one | Treat as a hypothesis |

> **This warning was not theoretical.** When the client supplied label photographs, the FX figures
> below turned out to be wrong by up to twelve times on capacity and by three to five times on
> flow, and the 0.1 micron rating was not on any label at all. The FX rows have been replaced with
> label data. **HF2 and H still carry the old listings and should be assumed wrong until
> photographed.**

**No figure below may appear on a customer-facing page, a downloadable spec sheet, or in any
performance claim until Fluux confirms it in writing.** The build should treat every spec field as
CMS content with an explicit `verified` boolean, so unverified values physically cannot render on
the front end. See [12 — Technical specification](12-technical-specification.md) §12.3.

## 2.2 The naming discrepancy — resolve this first

The brief specifies three lines of three sizes: **FX**, **FHF2**, **HFS**, each in 10"/15"/17".

Research found something different:

| Brief | Found | Assessment |
|---|---|---|
| Fluux FX | `FX-10`, `FX-15`, `FX-17`, plus `S` variants (`FX-15S`) | **Matches.** High confidence. |
| Fluux FHF2 | `HF2-10S`, `HF2-15S`, `HF2-17S` | **Almost certainly the same line.** "FHF2" is likely a transcription slip for "HF2" — possibly reading a "Fluux HF2" lockup as one token. |
| Fluux HFS | Nothing found. Instead: `H17-SD3`, `H17-CS2`, `H17-PS2` | **Unresolved.** See below. |

### What "HFS" might be

Four hypotheses, in descending likelihood:

1. **The H-series, mis-transcribed.** `H17-SD3` / `H17-CS2` / `H17-PS2` exist and share a size
   (17) with the other lines. "HFS" could be a compression of "H-series Filter, Scale" or a
   reading of `H..-..S`. *Most likely.*
2. **A Cyprus-specific or newer SKU range** not carried by the international distributors that
   search reached.
3. **`HF-S`** — a scale-inhibited variant of a house/whole-home line, parallel to how `FX-15S`
   relates to `FX-15`.
4. **A genuine third line not publicly listed.** Possible; Korean-market catalogues were
   unreachable.

**Recommendation: do not design around a guess.** Build the IA on the two-axis structure in §2.5,
which absorbs whatever HFS turns out to be, and treat this as blocking question #1 in
[99 — Open questions](99-open-questions.md). The cost of guessing wrong is an IA rebuild; the cost
of asking is one email.

### The naming grammar

The pattern appears to be:

```
{series}{size}-{media}{stage}

FX   -15  S      → FX series, size 15, Scale inhibitor
HF2  -17  S      → HF2 series, size 17, Scale inhibitor
H    17   -SD3   → H series, size 17, SeDiment, 3rd gen/stage
H    17   -CS2   → H series, size 17, Carbon, 2nd
H    17   -PS2   → H series, size 17, Polyphosphate/Scale, 2nd
```

`[CLIENT INPUT REQUIRED]` Confirm the grammar and the meaning of every suffix. **This should
become the naming convention the website is built on** — a documented, decodable code is a
significant trust asset for commercial buyers and a significant clarity asset for the CMS schema.

## 2.3 What we believe each line is

### FX series — ultrafiltration membrane

The premium line. Micro-membrane (UF) filtration to **0.1 micron**.

| Model | Flow rate | Capacity | Micron | Tier |
|---|---|---|---|---|
| FX-10 | 5.7 LPM | 30,000 L | 0.1 µm | B |
| FX-15 | 9.4 LPM (2.5 GPM @ 60 psi) | 60,567 L (≈16,000 US gal) | 0.1 µm | B |
| FX-17 | 9.4 LPM | 71,992 L | 0.1 µm | B |

- **Operating range:** 30–125 psi, 4–38 °C *(Tier C)*
- **Certifications claimed:** NSF/ANSI 42 (chlorine, taste, odour), 53 (cysts, bacteria, organics),
  **401 (microplastics)**. One distributor claims Fluux was the *"world's first range to hold NSF
  401 certification for microplastics reduction at 0.1 micron"* — **a strong marketing claim that
  must be verified against the NSF listings database before it is used.** *(Tier C)*
- **`S` variant media stack:** felt + carbon + ultrafiltration + polyphosphate, described as a
  4-stage hybrid *(Tier C)*
- **Head compatibility:** Everpure QL3B *(Tier B)*

**Cross-confirmation worth noting:** an Amazon listing states "16K gallons" for FX-15 and a UK
distributor states 60,567 L. 16,000 US gal = 60,566 L. Two independent sources agreeing to within
one litre is the strongest evidence in this document.

### HF2 series — carbon block with scale inhibition

Positioned commercially, with repeated references to **ice machines** and foodservice.

| Model | Flow rate | Capacity | Micron | Tier |
|---|---|---|---|---|
| HF2-10S | 7.6 LPM | 45,425 L | 0.5 µm | B |
| HF2-15S | 7.6 LPM | 79,494 L (≈21,000 US gal) | 0.5 µm | B |
| HF2-17S | 7.6 LPM | 98,421 L | 0.5 µm | B |

- **Performance claims:** removes 99.99% of cysts, >92% of chlorine, "28 hazardous chemicals",
  microplastic reduction, scale inhibitor forming a protective layer on machine internals
  *(Tier C — every one of these needs verification)*
- **Certifications claimed:** NSF/ANSI 42, 53, 401 *(Tier C)*
- **Head compatibility:** Everpure QL3B *(Tier B)*

**Note the flow rate is flat across all three sizes.** Same as FX-15/FX-17. This is the clearest
evidence that size is a capacity ladder, not a flow ladder.

### H series — single-function media modules

Organised by **media type**, all found at size 17 and sharing identical hydraulics.

| Model | Media | Flow | Capacity | Micron | Tier |
|---|---|---|---|---|---|
| H17-SD3 | Sediment | 2 GPM (7.57 LPM) | 79,494 L (21,000 gal) | 0.5 µm | B |
| H17-CS2 | Carbon | 2 GPM (7.57 LPM) | 79,494 L | 0.5 µm | B |
| H17-PS2 | Polyphosphate / scale inhibitor | 2 GPM (7.57 LPM) | 79,494 L | 0.5 µm | B |

- **Operating range:** 30–100 psi; inlet/outlet 3/8"; 5-minute flush on install *(Tier C)*
- **Head compatibility:** Everpure i2000, MC2, ESO7, MH2, H-300, H-104; 3M Aqua-Pure *(Tier B)*
- Some listings bundle a head ("Includes Head") *(Tier C)*

**Data quality flag:** one listing states an operating temperature of "35~100 ℃". Water filtration
media does not operate to 100 °C, and 35–100 **°F** (1.7–37.8 °C) matches the FX range's 4–38 °C
almost exactly. **This is a unit error in the source.** It is recorded here as an example of why
Tier B/C data cannot be published — and as a warning that the same error may already exist in
Fluux's own distributor-facing material.

### Do H17-SD3, CS2 and PS2 exist at sizes 10 and 15?

Unknown. Only size 17 was found. If they do, the range is far larger than nine SKUs. If they do
not, the H-series is a **media choice at one size**, which is a fundamentally different shape from
the other two lines and needs its own IA treatment.

`[CLIENT INPUT REQUIRED]` The complete SKU list. This is blocking question #2.

## 2.4 What the size number actually determines

**The cartridge length in inches — and through it, capacity.** Not flow rate.

> **Correction.** An earlier version of this section stated that the size numbers were *not*
> inches and that clearance was irrelevant. A client-supplied photograph of the FX range shows
> three distinct physical lengths in the ratio 10 : 15 : 17. Clearance matters. The rest of this
> section — that length buys capacity rather than flow — still holds and is confirmed by the
> printed label.

| | FX-10 | FX-15 | FX-17 |
|---|---|---|---|
| Flow | 5.7 LPM | 9.4 LPM | 9.4 LPM |
| Capacity | 30,000 L | 60,567 L | 71,992 L |

FX-10 is genuinely a smaller-duty product — lower flow *and* lower capacity. But FX-15 → FX-17 buys
**+19% capacity at identical flow**. The only thing the customer gains is time between changes.

### Why this matters more than it sounds

The obvious selector question — *"how much space do you have?"* — is **necessary but not
sufficient.** Clearance rules sizes out; consumption and change frequency choose between the ones
that remain. The selector asks the second and leaves the first to the installer, who measures it
on the day. See [09](09-selector-tool.md) §9.2.

A worked example for the site, using the FX-15 figure and a stated assumption:

> A four-person Cypriot household using roughly 8 litres a day for drinking and cooking would take
> **over 20 years** to exhaust an FX-15's 60,567 L rating.

Capacity is therefore **not the binding constraint for domestic drinking-water use** — the
manufacturer's recommended replacement interval is, and we do not have it.

`[CLIENT INPUT REQUIRED]` **The recommended replacement interval in months, per SKU.** This is
blocking question #3, and it is more commercially important than any capacity figure: it sets the
consumable revenue cycle, the reminder schedule, the running-cost calculator and the honest answer
to "what does this actually cost me per year."

**Design consequence:** for domestic SKUs, lead with **months**, show litres as secondary. For
commercial SKUs, lead with **litres and flow**, because a restaurant genuinely will exhaust
capacity and its buyer thinks in throughput. Same data, inverted hierarchy by audience. See
[07 — Page blueprints](07-page-blueprints.md) §7.3.

## 2.5 Recommended framing — and why

### The recommendation

**Frame the range as `Problem → Technology → Capacity`. Two visible decisions, never a matrix.**

```
Step 1 — What is wrong with your water?
   Taste / smell / chlorine ........... carbon-led     → H17-CS2, HF2
   Limescale, appliance damage ........ scale-led      → *-S variants, H17-PS2
   Grit, sediment, cloudiness ......... sediment-led   → H17-SD3
   Safety, microplastics, "everything"  membrane-led   → FX
   Ice machine / foodservice .......... commercial     → HF2

Step 2 — How much water, how often do you want to touch it?
   → size 10 / 15 / 17 within the chosen technology
```

### Why not good/better/best

Because it is false, and a commercial buyer will catch it. FX at 0.1 µm and HF2 at 0.5 µm are not
rungs on a ladder — HF2 carries scale inhibition that a plain FX does not, and a hotel with an ice
machine is better served by HF2 than by the "better" FX. Selling a ladder would systematically
misdirect the highest-value leads, and it would make every spec-literate buyer distrust the rest of
the site.

### Why not three parallel answers either

Because within a series, 10 → 15 → 17 **is** a straightforward ladder, and pretending otherwise
adds friction to an easy decision.

### Why the two-step funnel wins

- It **never shows the visitor nine or fifteen options.** Step 1 has five answers; step 2 has
  three. Two easy questions instead of one paralysing grid.
- It **maps to how each audience already thinks.** Homeowners arrive with a symptom ("my kettle is
  furred"). Commercial buyers arrive with an application ("ice machine, 80 kg/day"). Step 1 accepts
  both.
- It **degrades gracefully if HFS turns out to be a real fourth line** — a new technology is a new
  answer in step 1, not an IA rebuild.
- It is **the selector tool and the IA at the same time**, so the navigation and the guided tool
  teach the same mental model instead of competing. See [09](09-selector-tool.md).

**One consequence to accept:** this framing puts *problem* pages above *product* pages in the
hierarchy. The water-problems hub becomes the primary commercial route, not a content annexe. That
is reflected in [06 — IA](06-information-architecture.md).

## 2.6 Domestic, commercial, or both

Assessment based on flow rate, capacity and how distributors position each line. **All Tier C.**

| SKU | Domestic | Commercial | Reading |
|---|---|---|---|
| FX-10 | ✅ Primary | ⚠️ Light only | 5.7 LPM suits a single under-sink tap |
| FX-15 | ✅ Strong | ✅ Yes | The natural flagship for both |
| FX-17 | ⚠️ Over-specified | ✅ Primary | Capacity only pays back at volume |
| HF2-10S | ❌ | ✅ Primary | Positioned for ice machines |
| HF2-15S | ❌ | ✅ Primary | |
| HF2-17S | ❌ | ✅ Primary | |
| H17-SD3 | ✅ | ✅ | Pre-filter in a multi-stage build |
| H17-CS2 | ✅ | ✅ | |
| H17-PS2 | ✅ Strong | ✅ | Directly targets the Cyprus limescale problem |

### The business finding

**The lineup serves both audiences, but not symmetrically, and this has a strategic consequence
the brief should hear plainly.**

The range is a **point-of-use cartridge system**. Nothing found addresses **whole-house treatment
or water softening** — and in a market defined by limescale damage to boilers, washing machines and
solar water heaters, that is the problem Cypriot homeowners most want solved. A 0.1 µm under-sink
membrane produces excellent drinking water. It does nothing for the scale destroying the appliances
the customer is actually angry about.

Two consequences:

1. **The homeowner proposition is narrower than the brief assumes.** Fluux answers *drinking water
   quality* and, via polyphosphate SKUs, *scale inhibition at the point of use* — not whole-house
   limescale. Marketing it against boiler damage would be a claim the product cannot support, and
   the free water test would repeatedly surface a problem Fluux cannot solve. Both are trust
   liabilities.
2. **The commercial proposition is stronger than the brief assumes.** Everpure-compatible cartridges
   for ice machines, coffee equipment and foodservice in a hospitality-dense economy is a sharp,
   defensible wedge, sold to buyers who already understand cartridge replacement cycles and already
   own the heads.

`[CLIENT INPUT REQUIRED]` **Does Fluux offer whole-house filtration or softening in Cyprus?**
Blocking question #4. If yes, the homeowner IA needs a whole-house branch and the plan's balance
shifts. If no, the homeowner messaging must be disciplined about what it promises, and Fluux should
consider whether dealers can pair Fluux point-of-use with a third-party softener.

## 2.7 System, consumable, or both

**Both — and the site must handle both explicitly.**

The range is cartridges for third-party heads (Everpure, 3M Aqua-Pure), with some listings bundling
a head. So a visitor arrives in one of three states:

| State | What they need | Route |
|---|---|---|
| No filtration | Head + cartridge + installation | Full enquiry → dealer survey → install |
| Has a compatible head | Cartridges only | **Fast path.** Compatibility check → dealer or direct supply |
| Has a competitor system | Compatibility check, then switch | Cross-reference tool → enquiry |

**This third state is the sharpest acquisition opportunity in the plan and the brief does not
mention it.** Everpure and 3M Aqua-Pure are installed across Cypriot hospitality. A **cartridge
cross-reference tool** — "enter your current cartridge, see the Fluux equivalent" — converts a
competitor's installed base directly, at near-zero persuasion cost, because the switching decision
is only about price and availability, not about trust in the technology.

Recommended as a **P1** build. See [06 — IA](06-information-architecture.md) and
[08 — Lead engine](08-lead-engine.md) §8.4.

**The recurring-revenue consequence:** if the business is consumables, the site's job does not end
at the install. A **replacement reminder opt-in** — email or SMS at the right interval, in the
right locale — is a low-friction conversion for someone not ready to buy, and it feeds the dealer a
warm lead on a predictable cycle. It belongs in the conversion inventory. It is not in the brief's.

## 2.8 What we still need

Consolidated into [99 — Open questions](99-open-questions.md). The four that block the IA:

1. What is HFS? Is "FHF2" HF2?
2. The complete SKU list — do H-series parts exist at 10 and 15?
3. Recommended replacement interval in months, per SKU.
4. Is there a whole-house or softening product for Cyprus?
