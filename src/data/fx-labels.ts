import type { Locale } from '../i18n/ui';

/* ============================================================
   FX range — transcribed from the manufacturer's printed labels
   (client-supplied product photographs, three cartridges).

   These labels REPLACE the distributor-sourced figures that were
   here before. Those were wrong by roughly an order of magnitude
   on capacity and by 3-5x on flow — see docs/02 §2.3.

   Everything in this file is Tier A. Re-check against a physical
   label before it goes to print or to a legal claim.
   ============================================================ */

export interface Reduction {
  contaminant: Record<Locale, string>;
  challenge?: string;
  result: string;
}

export interface FxLabel {
  sku: 'FX-10' | 'FX-15' | 'FX-17';
  inches: 10 | 15 | 17;
  typeLine: Record<Locale, string>;
  claim: Record<Locale, string>;
  nsf: string;
  nsfModel?: string;
  flowLpm: string;
  flowGpm: string;
  capacityL: string;
  capacityGal: string;
  tempC: string;
  tempF: string;
  pressureKpa: string;
  pressurePsi: string;
  /** Now known — this was blocking question #3 */
  replace: Record<Locale, string>;
  flush?: Record<Locale, string>;
  reductions: Reduction[];
  caution?: Record<Locale, string>;
}

export const fxLabels: FxLabel[] = [
  {
    sku: 'FX-10', inches: 10,
    typeLine: { en: 'Basic total & bacteria filter', el: 'Βασικό φίλτρο, ολικό και βακτηρίων' },
    claim: {
      en: 'Removes chlorine, taste and odour, and bacteria. For chlorostatic reduction.',
      el: 'Αφαιρεί χλώριο, γεύση και οσμή, και βακτήρια. Για χλωροστατική μείωση.',
    },
    nsf: 'NSF/ANSI 42, 53', nsfModel: 'EFF-6027S',
    flowLpm: '1.9', flowGpm: '0.5',
    capacityL: '2,839', capacityGal: '750',
    tempC: '0.6–38', tempF: '33–100',
    pressureKpa: '– / 862', pressurePsi: 'max 125',
    replace: { en: 'Not stated on the label', el: 'Δεν αναγράφεται στην ετικέτα' },
    reductions: [
      { contaminant: { en: 'Chlorine',            el: 'Χλώριο' },              result: '≥ 50%' },
      { contaminant: { en: 'Taste and odour',     el: 'Γεύση και οσμή' },      result: '≥ 50%' },
      { contaminant: { en: 'Particulate Class I', el: 'Σωματίδια Class I' },   result: '≥ 85%' },
      { contaminant: { en: 'Cyst',                el: 'Κύστες' },              result: '≥ 99.95%' },
      { contaminant: { en: 'Turbidity',           el: 'Θολότητα' },            result: '≥ 0.5 NTU' },
      { contaminant: { en: 'Lead (pH 6.5)',       el: 'Μόλυβδος (pH 6,5)' },   result: '≥ 99.6%' },
    ],
  },
  {
    sku: 'FX-15', inches: 15,
    typeLine: { en: 'Basic type all-in-one filter', el: 'All-in-one φίλτρο, βασικός τύπος' },
    claim: {
      en: 'High capacity. Sediment, chlorine removal, taste and odour, cyst, bacteria and more.',
      el: 'Υψηλή χωρητικότητα. Ίζημα, αφαίρεση χλωρίου, γεύση και οσμή, κύστες, βακτήρια και άλλα.',
    },
    nsf: 'NSF/ANSI 42, 53, 401', nsfModel: 'EFF-6027S',
    flowLpm: '1.9', flowGpm: '0.5',
    capacityL: '11,356', capacityGal: '3,000',
    tempC: '0.6–37.8', tempF: '33–100',
    pressureKpa: '138–689', pressurePsi: '20–100',
    replace: {
      en: 'Every 6 months, or 3,000 gallons — whichever comes first',
      el: 'Κάθε 6 μήνες ή 3.000 γαλόνια — όποιο συμβεί πρώτο',
    },
    flush: {
      en: 'Flush 3 gallons through the filter before use, about 6 minutes',
      el: 'Ξεπλύνετε 3 γαλόνια πριν τη χρήση, περίπου 6 λεπτά',
    },
    reductions: [
      { contaminant: { en: 'Chlorine, taste and odour', el: 'Χλώριο, γεύση και οσμή' }, challenge: '2.0 mg/L ± 10%',      result: '≥ 97%' },
      { contaminant: { en: 'Particulate Class I',       el: 'Σωματίδια Class I' },      challenge: '≥ 10,000 particles/mL', result: '≥ 85%' },
      { contaminant: { en: 'Cyst (Cryptosporidium)',    el: 'Κύστες (Cryptosporidium)' },challenge: '50,000 per L',        result: '≥ 99.95%' },
      { contaminant: { en: 'Turbidity',                 el: 'Θολότητα' },               challenge: '11 NTU ± 1 NTU',       result: '≥ 99%' },
      { contaminant: { en: 'Lead at pH 6.5',            el: 'Μόλυβδος σε pH 6,5' },     challenge: '150 µg/L ± 10%',       result: '≥ 99%' },
    ],
  },
  {
    sku: 'FX-17', inches: 17,
    typeLine: { en: 'Basic type all-in-one filter', el: 'All-in-one φίλτρο, βασικός τύπος' },
    claim: {
      en: 'High capacity. Sediment and chlorine, taste and odour, cyst, bacteria.',
      el: 'Υψηλή χωρητικότητα. Ίζημα και χλώριο, γεύση και οσμή, κύστες, βακτήρια.',
    },
    nsf: 'NSF certified',
    flowLpm: '1.9', flowGpm: '0.5',
    capacityL: '6,056', capacityGal: '1,600',
    tempC: '4–38', tempF: '39–100',
    pressureKpa: '140–689', pressurePsi: '20–100',
    replace: {
      en: 'Every 6 to 12 months, varying with local water quality',
      el: 'Κάθε 6 έως 12 μήνες, ανάλογα με την ποιότητα του νερού',
    },
    flush: {
      en: 'Flush 2 gallons through the filter before use, about 5 minutes',
      el: 'Ξεπλύνετε 2 γαλόνια πριν τη χρήση, περίπου 5 λεπτά',
    },
    reductions: [],
    caution: {
      en: 'Cold water only. Do not freeze. Must be used with the original manufacturer’s filter head — non-genuine parts may void the warranty.',
      el: 'Μόνο για κρύο νερό. Μην το παγώνετε. Πρέπει να χρησιμοποιείται με την αυθεντική κεφαλή του κατασκευαστή — μη γνήσια εξαρτήματα ακυρώνουν την εγγύηση.',
    },
  },
];

export const fxLabel = (sku: string) => fxLabels.find(l => l.sku === sku);
