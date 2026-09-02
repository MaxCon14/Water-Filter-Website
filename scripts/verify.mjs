/**
 * Pre-commit verification for the Fluux site.
 * Checks the things this build can silently get wrong:
 *   1. every page renders with no console errors
 *   2. no broken internal links
 *   3. hreflang is reciprocal and self-referencing (a non-reciprocal
 *      pair is ignored by search engines — a silent failure)
 *   4. WCAG 2.1 AA via axe-core
 *
 * Usage:  npm run build && npm run preview &   then   node scripts/verify.mjs
 */
import { chromium } from 'playwright';
import { readdirSync, statSync, readFileSync } from 'fs';
import { join, relative } from 'path';
import { createRequire } from 'module';

const BASE = process.env.BASE_URL || 'http://localhost:4321';
const require = createRequire(import.meta.url);
const axeSrc = readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');

function pageUrls(dir = 'dist', base = 'dist') {
  let out = [];
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) out = out.concat(pageUrls(p, base));
    else if (f === 'index.html') out.push(('/' + relative(base, p).replace(/index\.html$/, '')).replace(/\/+/g, '/'));
  }
  return out.sort();
}

const urls = pageUrls();
const b = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
const problems = [];
p.on('pageerror', e => problems.push(`${p.url()} :: ${e.message}`));
p.on('console', m => m.type() === 'error' && problems.push(`${p.url()} :: ${m.text()}`));

const linkTargets = new Set();
const alternates = {};

for (const u of urls) {
  const r = await p.goto(BASE + u, { waitUntil: 'networkidle' });
  if (!r || r.status() >= 400) { problems.push(`${u} :: HTTP ${r?.status()}`); continue; }
  const info = await p.evaluate(() => ({
    links: [...document.querySelectorAll('a[href^="/"]')].map(a => a.getAttribute('href')),
    alts: Object.fromEntries([...document.querySelectorAll('link[rel=alternate]')]
      .map(l => [l.hreflang, new URL(l.href).pathname])),
    h1: document.querySelectorAll('h1').length,
    lang: document.documentElement.lang,
  }));
  info.links.forEach(l => linkTargets.add(l.split(/[#?]/)[0]));
  alternates[u] = info.alts;
  if (info.h1 !== 1) problems.push(`${u} :: expected 1 <h1>, found ${info.h1}`);
  if (!info.lang) problems.push(`${u} :: missing lang attribute`);
}

const pageSet = new Set(urls);
for (const l of linkTargets) {
  if (l && l !== '/' && !pageSet.has(l) && !/\.(svg|woff2|xml|txt|png|jpg)$/.test(l)) {
    problems.push(`broken internal link -> ${l}`);
  }
}

for (const [u, a] of Object.entries(alternates)) {
  if (u === '/') continue;
  const { 'en-CY': en, 'el-CY': el, 'x-default': xd } = a;
  if (!en || !el) { problems.push(`${u} :: incomplete hreflang`); continue; }
  if (u !== en && u !== el) { problems.push(`${u} :: hreflang lacks self-reference`); continue; }
  const partner = u === en ? el : en;
  const pa = alternates[partner];
  if (!pa) { problems.push(`${u} :: hreflang partner ${partner} does not exist`); continue; }
  if (pa['en-CY'] !== en || pa['el-CY'] !== el) problems.push(`${u} :: hreflang not reciprocal with ${partner}`);
  if (xd !== en) problems.push(`${u} :: x-default should point at the English page`);
}

const a11ySample = ['/en/', '/el/', '/en/products/fx/fx-15/', '/el/proionta/fx/fx-15/',
  '/en/products/compare/', '/en/find-your-filter/', '/en/enquiry/', '/el/prosfora/',
  '/en/water-test/', '/en/dealers/', '/en/commercial/'];
for (const u of a11ySample) {
  if (!pageSet.has(u)) continue;
  await p.goto(BASE + u, { waitUntil: 'networkidle' });
  await p.addScriptTag({ content: axeSrc });
  const res = await p.evaluate(async () => window.axe.run(document,
    { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] } }));
  for (const v of res.violations) problems.push(`${u} :: a11y ${v.id} (${v.nodes.length}) — ${v.help}`);
}

await b.close();
console.log(`pages: ${urls.length}   link targets: ${linkTargets.size}   a11y sample: ${a11ySample.length}`);
if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  problems.forEach(x => console.error('  ' + x));
  process.exit(1);
}
console.log('All checks passed.');
