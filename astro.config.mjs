import { defineConfig } from 'astro/config';

// Bilingual architecture per docs/04-bilingual-architecture.md
// /en/ + /el/ subdirectories, no unprefixed routes.
export default defineConfig({
  site: 'https://fluux.com.cy',
  i18n: {
    locales: ['en', 'el'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  build: { inlineStylesheets: 'auto' },
});
