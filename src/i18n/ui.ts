export const locales = ['en', 'el'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = { en: 'EN', el: 'ΕΛ' };
export const htmlLang: Record<Locale, string> = { en: 'en-CY', el: 'el-CY' };

/** Slug translation per docs/04 §4.1. SKU codes are never translated. */
export const routes = {
  home:            { en: '',                      el: '' },
  problems:        { en: 'water-problems',        el: 'provlimata-nerou' },
  limescale:       { en: 'water-problems/limescale',          el: 'provlimata-nerou/alata' },
  taste:           { en: 'water-problems/taste-odour',        el: 'provlimata-nerou/geusi-osmi' },
  bottled:         { en: 'water-problems/bottled-water-cost', el: 'provlimata-nerou/kostos-emfialomenou' },
  products:        { en: 'products',              el: 'proionta' },
  compare:         { en: 'compare',               el: 'sygkrisi' },
  selector:        { en: 'find-your-filter',      el: 'vres-to-filtro-sou' },
  commercial:      { en: 'commercial',            el: 'epaggelmatika' },
  technology:      { en: 'technology',            el: 'technologia' },
  certifications:  { en: 'certifications',        el: 'pistopoiiseis' },
  dealers:         { en: 'dealers',               el: 'antiprosopoi' },
  waterTest:       { en: 'water-test',            el: 'elegchos-nerou' },
  enquiry:         { en: 'enquiry',               el: 'prosfora' },
  about:           { en: 'about',                 el: 'schetika' },
  contact:         { en: 'contact',               el: 'epikoinonia' },
  privacy:         { en: 'privacy',               el: 'aporrito' },
  dealerSharing:   { en: 'privacy/dealer-sharing',el: 'aporrito/koinopoiisi' },
} as const;

export type RouteKey = keyof typeof routes;

export function path(locale: Locale, key: RouteKey, ...rest: string[]): string {
  const base = routes[key][locale];
  const segs = [locale, base, ...rest].filter(Boolean);
  return '/' + segs.join('/') + '/';
}

/** A translated child slug, e.g. sub('el','compare') -> 'sygkrisi' */
export function sub(locale: Locale, key: RouteKey): string {
  return routes[key][locale];
}

/** The alternate-locale URL for the SAME page — never the homepage (§4.4). */
export function altPath(locale: Locale, key: RouteKey, ...rest: string[]): string {
  return path(locale === 'en' ? 'el' : 'en', key, ...rest);
}
