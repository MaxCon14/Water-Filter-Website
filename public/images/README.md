# Product and lifestyle photography

Drop image files here and reference them from a `<Figure>` by passing `src`.
Nothing else needs to change — every slot is already sized and cropping correctly,
so a photograph replaces the fallback art with no layout shift.

```astro
<!-- before: designed fallback art -->
<Figure art="cartridge" tint="sky" ratio="1 / 1" alt="FX-15 filter cartridge" />

<!-- after: the real photograph -->
<Figure src="/images/fx-range.png" art="cartridge" tint="sky" ratio="1 / 1"
        alt="FX-10, FX-15 and FX-17 cartridges side by side" />
```

## Wanted, in priority order

| Filename | Used by | Notes |
|---|---|---|
| `fx-range.png` | Homepage range cards, FX series page | The three FX cartridges side by side. **Supplied — needs adding to this folder.** |
| `fx-10.png`, `fx-15.png`, `fx-17.png` | SKU pages | One per cartridge, same lighting and framing so the comparison is visual |
| `kitchen-tap.jpg` | Homepage story card, editorial grid | Water filling a glass at a kitchen tap |
| `family-table.jpg` | Homepage story card | A family at a table with a carafe |
| `child-drinking.jpg` | Homepage story card | A child drinking a glass of water |
| `installer.jpg` | Editorial grid | An installer fitting a cartridge under a sink |
| `terrace.jpg` | Editorial grid | A carafe on a shaded terrace table |

## Guidance

- **Product shots:** consistent lighting and framing across the range, neutral or
  tinted ground, generous margin. The cards crop square, so keep the cartridge centred.
- **Lifestyle:** real Cypriot interiors and real people rather than stock. Warm
  natural light. Avoid landscape tourism imagery — it pulls the brand toward travel
  and away from the household.
- **Format:** AVIF or WebP where possible, with a JPEG or PNG fallback. Keep each
  file under ~400 KB to stay inside the performance budget in
  `docs/12-technical-specification.md` §12.4.
