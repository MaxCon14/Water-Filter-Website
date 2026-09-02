import type { Locale } from '../i18n/ui';

/* Selector logic — docs/09-selector-tool.md.
   Four questions. "Not sure" and "whole house" are honest exits, not failures. */

export interface Option { id: string; label: Record<Locale, string>; exit?: 'watertest' | 'commercial' | 'wholehouse' }
export interface Question {
  id: 'problem' | 'where' | 'people' | 'interval';
  multi?: boolean;
  title: Record<Locale, string>;
  hint?: Record<Locale, string>;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 'problem', multi: true,
    title: { en: 'What is wrong with your water?', el: 'Τι πρόβλημα έχει το νερό σας;' },
    hint: { en: 'Choose as many as apply.', el: 'Επιλέξτε όσα ισχύουν.' },
    options: [
      { id: 'chlorine', label: { en: 'It tastes or smells of chlorine', el: 'Έχει γεύση ή μυρωδιά χλωρίου' } },
      { id: 'scale',    label: { en: 'Limescale — furred kettle, spotted glasses', el: 'Άλατα — βραστήρας με πουρί, θαμπά ποτήρια' } },
      { id: 'safety',   label: { en: 'I worry about what is in it', el: 'Ανησυχώ για το τι περιέχει' } },
      { id: 'sediment', label: { en: 'It looks cloudy, or there is grit', el: 'Είναι θολό ή έχει ίζημα' } },
      { id: 'bottled',  label: { en: 'I am tired of buying bottled water', el: 'Βαρέθηκα να αγοράζω εμφιαλωμένο' } },
      { id: 'unsure',   label: { en: 'I am not sure — I just want it tested', el: 'Δεν είμαι σίγουρος — θέλω απλώς έλεγχο' }, exit: 'watertest' },
    ],
  },
  {
    id: 'where',
    title: { en: 'Where would it go?', el: 'Πού θα τοποθετηθεί;' },
    options: [
      { id: 'kitchen',   label: { en: 'The kitchen tap, for drinking and cooking', el: 'Στη βρύση της κουζίνας, για πόση και μαγείρεμα' } },
      { id: 'equipment', label: { en: 'A coffee machine or ice maker', el: 'Σε μηχανή καφέ ή παγομηχανή' } },
      { id: 'business',  label: { en: 'A business — restaurant, café, hotel, office', el: 'Σε επιχείρηση — εστιατόριο, καφέ, ξενοδοχείο, γραφείο' }, exit: 'commercial' },
      { id: 'whole',     label: { en: 'The whole house', el: 'Σε ολόκληρο το σπίτι' }, exit: 'wholehouse' },
    ],
  },
  {
    id: 'people',
    title: { en: 'How many people in the household?', el: 'Πόσα άτομα στο νοικοκυριό;' },
    options: [
      { id: '1-2', label: { en: 'One or two', el: 'Ένα ή δύο' } },
      { id: '3-4', label: { en: 'Three or four', el: 'Τρία ή τέσσερα' } },
      { id: '5+',  label: { en: 'Five or more', el: 'Πέντε ή περισσότερα' } },
    ],
  },
  {
    id: 'interval',
    title: { en: 'How often do you want to think about it?', el: 'Πόσο συχνά θέλετε να το σκέφτεστε;' },
    hint: {
      en: 'Size in this range means how long a cartridge lasts, not how much space it takes.',
      el: 'Το μέγεθος εδώ σημαίνει πόσο κρατάει το φίλτρο, όχι πόσο χώρο πιάνει.',
    },
    options: [
      { id: 'rare',   label: { en: 'As rarely as possible — the longest interval', el: 'Όσο πιο σπάνια γίνεται — το μεγαλύτερο διάστημα' } },
      { id: 'normal', label: { en: 'A normal service interval is fine', el: 'Ένα κανονικό διάστημα είναι μια χαρά' } },
      { id: 'small',  label: { en: 'I would rather have the smaller option', el: 'Προτιμώ τη μικρότερη επιλογή' } },
    ],
  },
];

export type Answers = { problem: string[]; where: string; people: string; interval: string };

/** Technology axis. Parallel, not ranked (docs/02 §2.5). */
export function pickTechnology(problems: string[]): { series: 'fx' | 'h'; media?: string; pre?: string } {
  const has = (k: string) => problems.includes(k);
  const pre = has('sediment') ? 'H17-SD3' : undefined;
  if (has('safety') || has('bottled')) return { series: 'fx', pre };
  if (has('scale') && has('chlorine')) return { series: 'fx', pre };
  if (has('scale')) return { series: 'h', media: 'H17-PS2', pre };
  if (has('chlorine')) return { series: 'h', media: 'H17-CS2', pre };
  if (has('sediment')) return { series: 'h', media: 'H17-SD3' };
  return { series: 'fx', pre };
}

/** Capacity axis. Never returns 17 for a small household — that is overselling. */
export function pickSize(people: string, interval: string): '10' | '15' | '17' {
  const m: Record<string, Record<string, '10' | '15' | '17'>> = {
    '1-2': { small: '10', normal: '10', rare: '15' },
    '3-4': { small: '10', normal: '15', rare: '17' },
    '5+':  { small: '15', normal: '15', rare: '17' },
  };
  return m[people]?.[interval] ?? '15';
}

export function recommend(a: Answers): { sku: string; pre?: string; alt?: string } {
  const tech = pickTechnology(a.problem);
  if (tech.series === 'h') return { sku: tech.media!, pre: tech.pre, alt: 'FX-15' };
  const size = pickSize(a.people, a.interval);
  const sku = `FX-${size}`;
  const altSize = size === '17' ? '15' : size === '15' ? '17' : '15';
  return { sku, pre: tech.pre, alt: `FX-${altSize}` };
}
