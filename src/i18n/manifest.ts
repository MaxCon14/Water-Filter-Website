import { routes, locales, type Locale, type RouteKey } from './ui';
import { products, series } from '../data/products';

/* Every page, with its slug in both locales.
   This is what makes /el/proionta/ work instead of /el/products/. */
export interface PageEntry {
  /** URL segments after the locale, for THIS locale */
  segments: string[];
  /** The same page's segments in the other locale — drives hreflang */
  altSegments: string[];
  /** Which component renders it */
  view: 'problems' | 'problem' | 'products' | 'series' | 'sku' | 'compare' | 'selector'
      | 'commercial' | 'technology' | 'certifications' | 'dealers' | 'becomeDealer'
      | 'waterTest' | 'enquiry' | 'about' | 'contact' | 'privacy' | 'dealerSharing';
  routeKey: RouteKey;
  props?: Record<string, string>;
}

const seg = (locale: Locale, key: RouteKey) => routes[key][locale].split('/').filter(Boolean);

export function pagesFor(locale: Locale): PageEntry[] {
  const other: Locale = locale === 'en' ? 'el' : 'en';
  const out: PageEntry[] = [];
  const add = (
    view: PageEntry['view'],
    routeKey: RouteKey,
    build: (l: Locale) => string[],
    props?: Record<string, string>,
  ) => out.push({ segments: build(locale), altSegments: build(other), view, routeKey, props });

  add('problems', 'problems', l => seg(l, 'problems'));
  for (const k of ['limescale', 'taste', 'bottled'] as const) {
    add('problem', k, l => seg(l, k), { problem: k });
  }

  add('products', 'products', l => seg(l, 'products'));
  add('compare', 'products', l => [...seg(l, 'products'), ...seg(l, 'compare')]);
  for (const s of series) {
    add('series', 'products', l => [...seg(l, 'products'), s.key], { seriesKey: s.key });
  }
  for (const p of products) {
    add('sku', 'products', l => [...seg(l, 'products'), p.series, p.sku.toLowerCase()], { sku: p.sku });
  }

  add('selector', 'selector', l => seg(l, 'selector'));
  add('commercial', 'commercial', l => seg(l, 'commercial'));
  add('technology', 'technology', l => seg(l, 'technology'));
  add('certifications', 'technology', l => [...seg(l, 'technology'), ...seg(l, 'certifications')]);
  add('dealers', 'dealers', l => seg(l, 'dealers'));
  add('becomeDealer', 'dealers', l => [...seg(l, 'dealers'), 'become-a-dealer']);
  add('waterTest', 'waterTest', l => seg(l, 'waterTest'));
  add('enquiry', 'enquiry', l => seg(l, 'enquiry'));
  add('about', 'about', l => seg(l, 'about'));
  add('contact', 'contact', l => seg(l, 'contact'));
  add('privacy', 'privacy', l => seg(l, 'privacy'));
  add('dealerSharing', 'dealerSharing', l => seg(l, 'dealerSharing'));

  return out;
}

export function allPaths() {
  return locales.flatMap(lang =>
    pagesFor(lang).map(p => ({
      params: { lang, slug: p.segments.join('/') },
      props: {
        locale: lang, view: p.view, routeKey: p.routeKey, extra: p.props ?? {},
        selfPath: `/${lang}/${p.segments.join('/')}/`,
        altPath: `/${lang === 'en' ? 'el' : 'en'}/${p.altSegments.join('/')}/`,
      },
    }))
  );
}
