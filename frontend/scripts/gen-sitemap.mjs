// Builds public/sitemap.xml from src/sitemapData.js (the single list of public routes) and stamps robots.txt.
// Runs automatically before `yarn build`; the host comes from SITE_URL, else REACT_APP_BACKEND_URL.
import { execSync } from 'node:child_process';
import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const env = Object.fromEntries(
  (existsSync(`${root}/.env`) ? readFileSync(`${root}/.env`, 'utf8') : '')
    .split('\n').filter((l) => l.includes('=')).map((l) => l.split('=').map((x) => x.trim()))
);
const origin = (process.env.SITE_URL || process.env.REACT_APP_BACKEND_URL || env.SITE_URL || env.REACT_APP_BACKEND_URL || '').replace(/\/$/, '');
if (!origin) throw new Error('SITE_URL or REACT_APP_BACKEND_URL is required to build the sitemap');

const out = '/tmp/hitours-sitemap.cjs';
execSync(`npx esbuild src/sitemapData.js --bundle --platform=node --format=cjs --outfile=${out} --loader:.webp=dataurl --loader:.png=dataurl --loader:.jpg=dataurl --loader:.jpeg=dataurl --loader:.svg=dataurl --loader:.mp4=dataurl --loader:.webm=dataurl --log-level=error`, { cwd: root, stdio: 'inherit' });
const { ALL_URLS } = createRequire(import.meta.url)(out);

const skip = /^\/sitemap|\/internal|^#|^\/#/;
const urls = [...new Set(ALL_URLS)].filter((u) => u.startsWith('/') && !skip.test(u));
const today = new Date().toISOString().slice(0, 10);
const priority = (u) => (u === '/' ? '1.0' : /\/holidays$|^\/tours$|^\/asia$|^\/europe$/.test(u) ? '0.9' : u.split('/').length <= 3 ? '0.8' : '0.7');
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map((u) => `  <url><loc>${origin}${u}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${priority(u)}</priority></url>`)
  .join('\n')}\n</urlset>\n`;
writeFileSync(`${root}/public/sitemap.xml`, xml);
writeFileSync(`${root}/public/robots.txt`, `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${origin}/sitemap.xml\n`);
console.log(`sitemap.xml: ${urls.length} URLs for ${origin}`);
