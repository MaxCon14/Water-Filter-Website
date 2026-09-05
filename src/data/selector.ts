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
      en: 'Bigger cartridges last longer, but they are physically longer too — your installer checks the clearance under your sink before fitting anything.',
      el: 'Τα μεγαλύτερα φίλτρα κρατούν περισσότερο, αλλά είναι και πιο μακριά — ο τεχνικός ελέγχει τον διαθέσιμο χώρο πριν τοποθετήσει οτιδήποτε.',
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

/** Size axis — rebuilt from the printed labels.
 *
 *  The earlier version treated 10 -> 15 -> 17 as a capacity ladder. The labels
 *  disprove that: FX-15 treats 11,356 L, the longer FX-17 only 6,056 L, and all
 *  three run at the same 1.9 L/min. So there is no ladder to climb.
 *
 *  What the labels actually support:
 *    FX-15  most capacity, certified to NSF 42/53/401, 6-month interval
 *    FX-17  longest, roughly half the capacity, 6-12 month interval
 *    FX-10  smallest capacity, NSF 42/53 only
 *
 *  So FX-15 is the default for almost everyone. FX-10 is for the lightest use
 *  or the tightest cabinet. FX-17 is only sensible where its length suits the
 *  installation, which is the installer's call, not a web form's.
 */
export function pickSize(people: string, interval: string): '10' | '15' | '17' {
  if (people === '1-2' && interval === 'small') return '10';
  return '15';
}

export function recommend(a: Answers): { sku: string; pre?: string; alt?: string } {
  const tech = pickTechnology(a.problem);
  if (tech.series === 'h') return { sku: tech.media!, pre: tech.pre, alt: 'FX-15' };
  const size = pickSize(a.people, a.interval);
  const sku = `FX-${size}`;
  // The alternative is the honest trade, not the next rung up
  const alt = size === '15' ? 'FX-10' : 'FX-15';
  return { sku, pre: tech.pre, alt };
}
