import type { Locale } from '../i18n/ui';

/* ============================================================
   Product data — docs/02-product-matrix.md
   EVERY specification here is Tier B/C: sourced from distributor
   and retailer listings, unverified against the manufacturer.
   `verified: false` is the default and the UI must respect it
   (docs/12 §12.3). Nothing renders as fact until Fluux confirms it.
   ============================================================ */

export type Tier = 'A' | 'B' | 'C';
export type SpecKey =
  | 'technology' | 'micron' | 'flow' | 'capacity' | 'interval'
  | 'pressure' | 'temperature' | 'connection' | 'scale';

export interface Spec {
  key: SpecKey;
  value: string | null;      // null = we do not have it
  unit?: string;
  verified: boolean;
  tier: Tier | null;
  note?: string;
}

export type SeriesKey = 'fx' | 'hf2' | 'h';
export type Size = '10' | '15' | '17';

export interface Series {
  key: SeriesKey;
  name: string;
  technology: Record<Locale, string>;
  micron: string;
  audience: ('domestic' | 'commercial')[];
  heads: string[];
  certifications: string[];
  certVerified: boolean;
  headline: Record<Locale, string>;
  summary: Record<Locale, string>;
  /** What it does NOT do. Scope honesty is the trust asset (docs/05 §5.5). */
  scopeNote: Record<Locale, string>;
}

export const series: Series[] = [
  {
    key: 'fx',
    name: 'FX',
    technology: { en: 'Ultrafiltration membrane', el: 'Μεμβράνη υπερδιήθησης' },
    micron: '0.1',
    audience: ['domestic', 'commercial'],
    heads: ['Everpure QL3B'],
    certifications: ['NSF/ANSI 42', 'NSF/ANSI 53', 'NSF/ANSI 401'],
    certVerified: false,
    headline: {
      en: 'The finest filtration in the range',
      el: 'Το πιο λεπτό φιλτράρισμα της σειράς',
    },
    summary: {
      en: 'A 0.1 micron ultrafiltration membrane. Reported as certified for microplastics as well as chlorine, taste and cysts — which makes it the line to choose when the question is what your family drinks.',
      el: 'Μεμβράνη υπερδιήθησης 0,1 micron. Αναφέρεται ως πιστοποιημένη για μικροπλαστικά, χλώριο, γεύση και κύστες — η σειρά που επιλέγετε όταν το ζήτημα είναι τι πίνει η οικογένειά σας.',
    },
    scopeNote: {
      en: 'FX treats the water at one tap. It will not descale your boiler, your washing machine or your solar water heater.',
      el: 'Το FX επεξεργάζεται το νερό σε μία βρύση. Δεν καθαρίζει τα άλατα από τον θερμοσίφωνα, το πλυντήριο ή τον ηλιακό σας.',
    },
  },
  {
    key: 'hf2',
    name: 'HF2',
    technology: { en: 'Carbon block with scale inhibitor', el: 'Carbon block με αναστολέα αλάτων' },
    micron: '0.5',
    audience: ['commercial'],
    heads: ['Everpure QL3B'],
    certifications: ['NSF/ANSI 42', 'NSF/ANSI 53', 'NSF/ANSI 401'],
    certVerified: false,
    headline: {
      en: 'Built for equipment that runs all day',
      el: 'Για εξοπλισμό που δουλεύει όλη μέρα',
    },
    summary: {
      en: 'A 0.5 micron carbon block with scale inhibition, positioned by distributors for ice machines and foodservice. Higher capacity than FX at every size, and it fits the Everpure heads already in most Cypriot kitchens.',
      el: 'Carbon block 0,5 micron με αναστολέα αλάτων, τοποθετημένο για παγομηχανές και μαζική εστίαση. Μεγαλύτερη χωρητικότητα από το FX σε κάθε μέγεθος, και ταιριάζει στις κεφαλές Everpure που ήδη υπάρχουν στις περισσότερες κυπριακές κουζίνες.',
    },
    scopeNote: {
      en: 'Scale inhibition protects the equipment downstream of the cartridge. It is not a water softener for the building.',
      el: 'Ο αναστολέας αλάτων προστατεύει τον εξοπλισμό μετά το φίλτρο. Δεν είναι αποσκληρυντής για ολόκληρο το κτίριο.',
    },
  },
  {
    key: 'h',
    name: 'H',
    technology: { en: 'Single-function media', el: 'Μονής λειτουργίας' },
    micron: '0.5',
    audience: ['domestic', 'commercial'],
    heads: ['Everpure i2000', 'Everpure MC2', 'Everpure ESO7', 'Everpure MH2', 'Everpure H-300', 'Everpure H-104', '3M Aqua-Pure'],
    certifications: ['NSF/ANSI 42', 'NSF/ANSI 53'],
    certVerified: false,
    headline: {
      en: 'One problem, one cartridge',
      el: 'Ένα πρόβλημα, ένα φίλτρο',
    },
    summary: {
      en: 'Sediment, carbon or scale inhibition as separate parts, so a dealer can build the stack your water actually needs. Not an entry-level line — a different shape of answer.',
      el: 'Ίζημα, άνθρακας ή αναστολέας αλάτων ως ξεχωριστά μέρη, ώστε ο αντιπρόσωπος να συνθέσει αυτό που πραγματικά χρειάζεται το νερό σας. Δεν είναι η «οικονομική» σειρά — είναι διαφορετικού τύπου απάντηση.',
    },
    scopeNote: {
      en: 'Each part does one job. Most homes need two of them together, which is a conversation for the water test.',
      el: 'Κάθε μέρος κάνει μία δουλειά. Τα περισσότερα σπίτια χρειάζονται δύο μαζί — κάτι που συζητείται στον έλεγχο νερού.',
    },
  },
];

export interface Product {
  sku: string;
  series: SeriesKey;
  size: Size;
  suffix?: string;
  audience: ('domestic' | 'commercial')[];
  bestFor: Record<Locale, string>;
  specs: Spec[];
}

const B = (value: string | null, unit?: string): Omit<Spec, 'key'> =>
  ({ value, unit, verified: false, tier: value ? 'B' : null });
const C = (value: string | null, unit?: string): Omit<Spec, 'key'> =>
  ({ value, unit, verified: false, tier: value ? 'C' : null });
const UNKNOWN: Omit<Spec, 'key'> = { value: null, verified: false, tier: null };

export const products: Product[] = [
  {
    sku: 'FX-10', series: 'fx', size: '10', audience: ['domestic'],
    bestFor: { en: 'One or two people, a single kitchen tap', el: 'Ένα ή δύο άτομα, μία βρύση κουζίνας' },
    specs: [
      { key: 'technology', ...B('Ultrafiltration (UF) membrane') },
      { key: 'micron',     ...B('0.1', 'µm') },
      { key: 'flow',       ...B('5.7', 'L/min') },
      { key: 'capacity',   ...B('30,000', 'L') },
      { key: 'interval',   ...UNKNOWN },
      { key: 'pressure',   ...C('30–125', 'psi') },
      { key: 'temperature',...C('4–38', '°C') },
      { key: 'scale',      ...C('No — S variant adds it') },
    ],
  },
  {
    sku: 'FX-15', series: 'fx', size: '15', audience: ['domestic', 'commercial'],
    bestFor: { en: 'The flagship. A family home, or light commercial use', el: 'Η ναυαρχίδα. Οικογενειακό σπίτι ή ελαφριά επαγγελματική χρήση' },
    specs: [
      { key: 'technology', ...B('Ultrafiltration (UF) membrane') },
      { key: 'micron',     ...B('0.1', 'µm') },
      { key: 'flow',       ...B('9.4', 'L/min') },
      { key: 'capacity',   ...B('60,567', 'L'), note: 'Two independent sources agree to within one litre (16,000 US gal = 60,566 L).' },
      { key: 'interval',   ...UNKNOWN },
      { key: 'pressure',   ...C('30–125', 'psi') },
      { key: 'temperature',...C('4–38', '°C') },
      { key: 'scale',      ...C('No — S variant adds it') },
    ],
  },
  {
    sku: 'FX-17', series: 'fx', size: '17', audience: ['commercial'],
    bestFor: { en: 'High volume. Same flow as FX-15, longer between changes', el: 'Μεγάλος όγκος. Ίδια παροχή με το FX-15, μεγαλύτερα διαστήματα αλλαγής' },
    specs: [
      { key: 'technology', ...B('Ultrafiltration (UF) membrane') },
      { key: 'micron',     ...B('0.1', 'µm') },
      { key: 'flow',       ...B('9.4', 'L/min') },
      { key: 'capacity',   ...B('71,992', 'L') },
      { key: 'interval',   ...UNKNOWN },
      { key: 'pressure',   ...C('30–125', 'psi') },
      { key: 'temperature',...C('4–38', '°C') },
      { key: 'scale',      ...C('No — S variant adds it') },
    ],
  },
  {
    sku: 'HF2-10S', series: 'hf2', size: '10', suffix: 'S', audience: ['commercial'],
    bestFor: { en: 'A single ice machine or coffee station', el: 'Μία παγομηχανή ή σταθμός καφέ' },
    specs: [
      { key: 'technology', ...B('Carbon block + scale inhibitor') },
      { key: 'micron',     ...B('0.5', 'µm') },
      { key: 'flow',       ...B('7.6', 'L/min') },
      { key: 'capacity',   ...B('45,425', 'L') },
      { key: 'interval',   ...UNKNOWN },
      { key: 'scale',      ...B('Yes') },
    ],
  },
  {
    sku: 'HF2-15S', series: 'hf2', size: '15', suffix: 'S', audience: ['commercial'],
    bestFor: { en: 'A busy café or restaurant kitchen', el: 'Πολυσύχναστο καφέ ή κουζίνα εστιατορίου' },
    specs: [
      { key: 'technology', ...B('Carbon block + scale inhibitor') },
      { key: 'micron',     ...B('0.5', 'µm') },
      { key: 'flow',       ...B('7.6', 'L/min') },
      { key: 'capacity',   ...B('79,494', 'L') },
      { key: 'interval',   ...UNKNOWN },
      { key: 'scale',      ...B('Yes') },
    ],
  },
  {
    sku: 'HF2-17S', series: 'hf2', size: '17', suffix: 'S', audience: ['commercial'],
    bestFor: { en: 'Hotel scale. The longest interval in the range', el: 'Κλίμακα ξενοδοχείου. Το μεγαλύτερο διάστημα αλλαγής της σειράς' },
    specs: [
      { key: 'technology', ...B('Carbon block + scale inhibitor') },
      { key: 'micron',     ...B('0.5', 'µm') },
      { key: 'flow',       ...B('7.6', 'L/min') },
      { key: 'capacity',   ...B('98,421', 'L') },
      { key: 'interval',   ...UNKNOWN },
      { key: 'scale',      ...B('Yes') },
    ],
  },
  {
    sku: 'H17-SD3', series: 'h', size: '17', suffix: 'SD3', audience: ['domestic', 'commercial'],
    bestFor: { en: 'Grit and cloudiness — usually a pre-filter, not the whole answer', el: 'Ίζημα και θολότητα — συνήθως προφίλτρο, όχι η πλήρης λύση' },
    specs: [
      { key: 'technology', ...B('Sediment') },
      { key: 'micron',     ...B('0.5', 'µm') },
      { key: 'flow',       ...B('7.57', 'L/min') },
      { key: 'capacity',   ...B('79,494', 'L') },
      { key: 'interval',   ...UNKNOWN },
      { key: 'connection', ...C('3/8"') },
      { key: 'scale',      ...B('No') },
    ],
  },
  {
    sku: 'H17-CS2', series: 'h', size: '17', suffix: 'CS2', audience: ['domestic', 'commercial'],
    bestFor: { en: 'Chlorine taste and smell, on its own', el: 'Γεύση και οσμή χλωρίου, μεμονωμένα' },
    specs: [
      { key: 'technology', ...B('Carbon') },
      { key: 'micron',     ...B('0.5', 'µm') },
      { key: 'flow',       ...B('7.57', 'L/min') },
      { key: 'capacity',   ...B('79,494', 'L') },
      { key: 'interval',   ...UNKNOWN },
      { key: 'connection', ...C('3/8"') },
      { key: 'scale',      ...B('No') },
    ],
  },
  {
    sku: 'H17-PS2', series: 'h', size: '17', suffix: 'PS2', audience: ['domestic', 'commercial'],
    bestFor: { en: 'Scale at the point of use — the Cyprus-specific part', el: 'Άλατα στο σημείο χρήσης — το εξειδικευμένο για την Κύπρο μέρος' },
    specs: [
      { key: 'technology', ...B('Polyphosphate scale inhibitor') },
      { key: 'micron',     ...B('0.5', 'µm') },
      { key: 'flow',       ...B('7.57', 'L/min') },
      { key: 'capacity',   ...B('79,494', 'L') },
      { key: 'interval',   ...UNKNOWN },
      { key: 'connection', ...C('3/8"') },
      { key: 'scale',      ...B('Yes') },
    ],
  },
];

export const bySeries = (key: SeriesKey) => products.filter(p => p.series === key);
export const bySku = (sku: string) => products.find(p => p.sku.toLowerCase() === sku.toLowerCase());
export const getSeries = (key: SeriesKey) => series.find(s => s.key === key)!;
export const spec = (p: Product, key: SpecKey) => p.specs.find(s => s.key === key);

/** Nothing in this dataset is manufacturer-confirmed yet. */
export const anyVerified = products.some(p => p.specs.some(s => s.verified));
