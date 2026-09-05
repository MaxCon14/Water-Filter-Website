import type { Locale } from '../i18n/ui';

/* ============================================================
   Product data — docs/02-product-matrix.md

   WARNING on HF2 and H:
   The FX figures below were replaced with manufacturer label data
   after the client supplied product photographs. The distributor
   listings they replaced were wrong by ~10x on capacity and ~3-5x
   on flow. HF2 and H are still sourced from those same listings,
   so treat every one of their numbers as unreliable until a label
   photograph confirms them. See docs/99-open-questions.md Q7.
   EVERY specification here is Tier B/C: sourced from distributor
   and retailer listings, unverified against the manufacturer.
   `verified: false` is the default and the UI must respect it
   (docs/12 §12.3). Nothing renders as fact until Fluux confirms it.
   ============================================================ */

export type Tier = 'A' | 'B' | 'C';
export type SpecKey =
  | 'technology' | 'micron' | 'flow' | 'capacity' | 'interval'
  | 'pressure' | 'temperature' | 'connection' | 'scale' | 'length';

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
    technology: { en: 'All-in-one filtration', el: 'All-in-one φιλτράρισμα' },
    /* The labels state no micron rating. The 0.1 µm figure came from a
       distributor listing and is not supported — do not reinstate it. */
    micron: '',
    audience: ['domestic', 'commercial'],
    heads: ['Original Microfilter head'],
    certifications: ['NSF/ANSI 42', 'NSF/ANSI 53', 'NSF/ANSI 401'],
    certVerified: true,
    headline: {
      en: 'Certified, and the certificate is printed on the cartridge',
      el: 'Πιστοποιημένο, και η πιστοποίηση είναι τυπωμένη πάνω στο φίλτρο',
    },
    summary: {
      en: 'Three all-in-one cartridges that reduce sediment, chlorine, taste and odour, cysts and bacteria. All three run at the same rate — what separates them is how much they treat before they need changing, and the FX-15 treats the most.',
      el: 'Τρία all-in-one φίλτρα που μειώνουν ίζημα, χλώριο, γεύση και οσμή, κύστες και βακτήρια. Και τα τρία έχουν την ίδια παροχή — αυτό που τα ξεχωρίζει είναι πόσο νερό επεξεργάζονται πριν χρειαστούν αλλαγή, και το FX-15 επεξεργάζεται το περισσότερο.',
    },
    scopeNote: {
      en: 'FX treats the water at one tap, for cold water only. It will not descale your boiler, your washing machine or your solar water heater, and the label is explicit that it needs the original manufacturer’s head.',
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

/** Transcribed from the manufacturer's printed label (client-supplied photograph).
 *  Re-check against the physical label before anything goes to print or legal. */
const A = (value: string, unit?: string): Omit<Spec, 'key'> =>
  ({ value, unit, verified: true, tier: 'A', note: undefined });

export const products: Product[] = [
  {
    sku: 'FX-10', series: 'fx', size: '10', audience: ['domestic'],
    bestFor: { en: 'The basic one. Chlorine, taste, cysts and lead', el: 'Το βασικό. Χλώριο, γεύση, κύστες και μόλυβδος' },
    specs: [
      { key: 'technology', ...A('Chemical and mechanical reduction') },
      { key: 'flow',       ...A('1.9', 'L/min'), note: '0.5 gpm' },
      { key: 'capacity',   ...A('2,839', 'L'), note: '750 US gallons' },
      { key: 'length',     ...A('10', 'inch') },
      { key: 'interval',   ...UNKNOWN },
      { key: 'pressure',   ...A('max 125', 'psi'), note: '862 kPa' },
      { key: 'temperature',...A('0.6–38', '°C'), note: '33–100 °F' },
      { key: 'scale',      ...A('No') },
    ],
  },
  {
    sku: 'FX-15', series: 'fx', size: '15', audience: ['domestic', 'commercial'],
    bestFor: { en: 'The most capable. Highest capacity in the range, and the only one certified to 401', el: 'Το πληρέστερο. Μέγιστη χωρητικότητα και το μόνο πιστοποιημένο κατά 401' },
    specs: [
      { key: 'technology', ...A('All-in-one, sediment through bacteria') },
      { key: 'flow',       ...A('1.9', 'L/min'), note: '0.5 gpm' },
      { key: 'capacity',   ...A('11,356', 'L'), note: '3,000 US gallons' },
      { key: 'length',     ...A('15', 'inch') },
      { key: 'interval',   ...A('6', 'months'), note: 'or 3,000 gallons, whichever comes first' },
      { key: 'pressure',   ...A('20–100', 'psi'), note: '138–689 kPa' },
      { key: 'temperature',...A('0.6–37.8', '°C'), note: '33–100 °F' },
      { key: 'scale',      ...A('No') },
    ],
  },
  {
    sku: 'FX-17', series: 'fx', size: '17', audience: ['domestic', 'commercial'],
    bestFor: { en: 'The longest cartridge. Note it holds less than the FX-15', el: 'Το μακρύτερο φίλτρο. Σημειώστε ότι χωράει λιγότερο από το FX-15' },
    specs: [
      { key: 'technology', ...A('Chemical and mechanical reduction') },
      { key: 'flow',       ...A('1.9', 'L/min'), note: '0.5 gpm' },
      { key: 'capacity',   ...A('6,056', 'L'), note: '1,600 US gallons' },
      { key: 'length',     ...A('17', 'inch') },
      { key: 'interval',   ...A('6–12', 'months'), note: 'varies with local water quality' },
      { key: 'pressure',   ...A('20–100', 'psi'), note: '140–689 kPa' },
      { key: 'temperature',...A('4–38', '°C'), note: '39–100 °F' },
      { key: 'scale',      ...A('No') },
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
