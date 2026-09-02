import type { Locale } from '../i18n/ui';

/* Districts — docs/03 §3.4.
   Hardness figures are Tier C: they come from a COMPETITOR's help centre
   and overlap almost entirely. Shown only where we can caveat them. */
export interface District {
  key: string;
  name: Record<Locale, string>;
  /** Genitive form — a template cannot derive this (docs/13 §13.4). */
  nameOf: Record<Locale, string>;
  hardness: string | null;
  supply: Record<Locale, string> | null;
}

export const districts: District[] = [
  { key: 'nicosia',   name: { en: 'Nicosia',   el: 'Λευκωσία' },  nameOf: { en: 'Nicosia',   el: 'Λευκωσίας' },  hardness: '280–350', supply: null },
  { key: 'limassol',  name: { en: 'Limassol',  el: 'Λεμεσός' },   nameOf: { en: 'Limassol',  el: 'Λεμεσού' },    hardness: '250–320', supply: null },
  { key: 'larnaca',   name: { en: 'Larnaca',   el: 'Λάρνακα' },   nameOf: { en: 'Larnaca',   el: 'Λάρνακας' },   hardness: '260–340', supply: null },
  { key: 'paphos',    name: { en: 'Paphos',    el: 'Πάφος' },     nameOf: { en: 'Paphos',    el: 'Πάφου' },      hardness: '300–400', supply: null },
  { key: 'famagusta', name: { en: 'Famagusta', el: 'Αμμόχωστος' },nameOf: { en: 'Famagusta', el: 'Αμμοχώστου' }, hardness: null,      supply: null },
];

/* Dealers — placeholder shape only.
   Real network data is blocking question #6 and the project's critical path
   (docs/15 §15.2). The locator is built to degrade to central routing. */
export interface Dealer {
  id: string;
  name: string;
  districts: string[];
  services: ('installation' | 'servicing' | 'supply' | 'water_testing')[];
  sectors: ('domestic' | 'hotel' | 'foodservice' | 'office' | 'clinic')[];
  responseHours: number;
  phone: string;
  whatsapp: string;
}

/** Empty by design. See docs/99-open-questions.md Q6. */
export const dealers: Dealer[] = [];

export const contact = {
  phone: '+357 00 000000',
  phoneHref: '+35700000000',
  whatsapp: '35700000000',
  email: 'hello@fluux.com.cy',
  hoursEn: 'Monday to Friday, 08:00–17:00',
  hoursEl: 'Δευτέρα έως Παρασκευή, 08:00–17:00',
  placeholder: true,
};

/* Problems — the primary commercial route (docs/06 §6.4).
   Ordered by how strongly Fluux can actually answer them (docs/03 §3.3). */
export interface Problem {
  key: string;
  routeKey: 'limescale' | 'taste' | 'bottled';
  symptom: Record<Locale, string>;
  title: Record<Locale, string>;
  /** Can Fluux genuinely solve this? Drives the scope-honesty treatment. */
  answers: 'fully' | 'partly';
}

export const problems: Problem[] = [
  {
    key: 'taste', routeKey: 'taste', answers: 'fully',
    symptom: { en: 'The water tastes or smells of chlorine', el: 'Το νερό έχει γεύση ή μυρωδιά χλωρίου' },
    title:   { en: 'Taste and odour', el: 'Γεύση και οσμή' },
  },
  {
    key: 'bottled', routeKey: 'bottled', answers: 'fully',
    symptom: { en: 'You are still carrying bottled water home', el: 'Ακόμα κουβαλάτε εμφιαλωμένο νερό στο σπίτι' },
    title:   { en: 'The cost of bottled water', el: 'Το κόστος του εμφιαλωμένου' },
  },
  {
    key: 'limescale', routeKey: 'limescale', answers: 'partly',
    symptom: { en: 'Your kettle furs up in a fortnight', el: 'Ο βραστήρας γεμίζει άλατα σε δεκαπέντε μέρες' },
    title:   { en: 'Limescale and hard water', el: 'Άλατα και σκληρό νερό' },
  },
];

/* Cyprus water facts — every one carries its source and tier.
   docs/03 §3.2. None of these is government-verified. */
export interface Fact {
  id: string;
  value: string;
  unit?: string;
  label: Record<Locale, string>;
  source: Record<Locale, string>;
  tier: 'A' | 'B' | 'C';
  note: Record<Locale, string>;
}

export const facts: Fact[] = [
  {
    id: 'desal', value: '80', unit: '%',
    label: { en: 'of Cyprus drinking water is desalinated', el: 'του πόσιμου νερού της Κύπρου είναι αφαλατωμένο' },
    source: { en: 'Cyprus Mail, March 2026', el: 'Cyprus Mail, Μάρτιος 2026' }, tier: 'A',
    note: {
      en: 'A moving figure — older reporting says 70%.',
      el: 'Μεταβαλλόμενο μέγεθος — παλαιότερες αναφορές λένε 70%.',
    },
  },
  {
    id: 'hardness', value: '250–400', unit: 'ppm',
    label: { en: 'reported island hardness', el: 'αναφερόμενη σκληρότητα στο νησί' },
    source: { en: 'Competitor marketing pages', el: 'Διαφημιστικές σελίδες ανταγωνιστών' }, tier: 'C',
    note: {
      en: 'Every figure available to us comes from companies selling water filters. Treat the direction as right and the number as unconfirmed.',
      el: 'Κάθε διαθέσιμο στοιχείο προέρχεται από εταιρείες που πωλούν φίλτρα. Η κατεύθυνση είναι σωστή· ο αριθμός δεν είναι επιβεβαιωμένος.',
    },
  },
  {
    id: 'bottled', value: '200–400', unit: '€/yr',
    label: { en: 'household spend on bottled water', el: 'ετήσια δαπάνη νοικοκυριού σε εμφιαλωμένο' },
    source: { en: 'Estatefy — property market, no filtration interest', el: 'Estatefy — αγορά ακινήτων, χωρίς εμπορικό συμφέρον στα φίλτρα' }, tier: 'B',
    note: {
      en: 'Drinking water only. The best-sourced number on this page.',
      el: 'Μόνο πόσιμο νερό. Το καλύτερα τεκμηριωμένο στοιχείο της σελίδας.',
    },
  },
];
