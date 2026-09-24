// Checks every URL in the index against what the SEO work promises, so a
// regression shows up here instead of in Search Console weeks later.
//
// Errors (exit 1):
//  * the page is missing, or (with --live) doesn't return 200
//  * <html lang>, <title>, meta description, canonical or og:url is wrong or absent
//  * the hreflang set isn't exactly the one buildUrlIndex() expects — which also
//    makes it reciprocal, since both sides are checked against the same set.
//    /ro/ pages must declare none at all.
//  * a JSON-LD block doesn't parse
//  * the body has too little text to have been pre-rendered
//  * og:image points at a file that doesn't exist (local mode)
//  * a noindex on a page we're asking Google to index
//  * sitemap.xml lists a different set of URLs than the index
//
// Warnings (exit 0, unless --strict):
//  * TODO-TRANSLATE markers: /ur/ and /ro/ titles and descriptions still in English
//  * two pages in the same language sharing a title
//
// Run: npm run check:seo            (the committed files)
//      npm run check:seo -- --live  (the deployed site — run after every push;
//                                    both phase 3 bugs were only visible there)
import { readFileSync, existsSync } from "node:fs";
import { SITE, HREFLANG, HTML_LANG, buildUrlIndex, fileFor } from "./lib/pages.mjs";

const LIVE = process.argv.includes("--live");
const STRICT = process.argv.includes("--strict");
// /ur/map is the thinnest real page at ~50 words; an empty #root is ~0.
const MIN_BODY_WORDS = 30;

const urls = buildUrlIndex();
const errors = [];
const warnings = [];
const err = (path, msg) => errors.push(`${path}: ${msg}`);
const warn = (path, msg) => warnings.push(`${path}: ${msg}`);

const decode = s => s.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`, "i"));
  return m ? decode(m[1]) : null;
};
const tags = (html, name) => html.match(new RegExp(`<${name}\\b[^>]*>`, "gi")) || [];
const metaContent = (html, key, val) =>
  tags(html, "meta").filter(t => attr(t, key) === val).map(t => attr(t, "content"));

async function load(u) {
  if (!LIVE) {
    const file = fileFor(u);
    return existsSync(file) ? { html: readFileSync(file, "utf8") } : { error: `no file ${file}` };
  }
  try {
    const res = await fetch(SITE + u.path, { redirect: "manual" });
    if (res.status !== 200) return { error: `HTTP ${res.status}` };
    return { html: await res.text(), robotsHeader: res.headers.get("x-robots-tag") };
  } catch (e) {
    return { error: `fetch failed: ${e.message}` };
  }
}

function check(u, { html, robotsHeader }) {
  const p = u.path;
  const self = SITE + p;

  const lang = (html.match(/<html\b[^>]*>/i) || [""])[0];
  if (attr(lang, "lang") !== HTML_LANG[u.lang]) err(p, `<html lang="${attr(lang, "lang")}">, expected "${HTML_LANG[u.lang]}"`);

  const titles = [...html.matchAll(/<title>([\s\S]*?)<\/title>/gi)].map(m => decode(m[1].trim()));
  if (titles.length !== 1 || !titles[0]) err(p, `expected one non-empty <title>, found ${titles.length}`);

  const descs = metaContent(html, "name", "description");
  if (descs.length !== 1 || !descs[0]) err(p, `expected one non-empty meta description, found ${descs.length}`);

  const canon = tags(html, "link").filter(t => attr(t, "rel") === "canonical").map(t => attr(t, "href"));
  if (canon.length !== 1 || canon[0] !== self) err(p, `canonical ${JSON.stringify(canon)}, expected ${self}`);

  const ogUrl = metaContent(html, "property", "og:url");
  if (ogUrl.length !== 1 || ogUrl[0] !== self) err(p, `og:url ${JSON.stringify(ogUrl)}, expected ${self}`);

  // hreflang: compare as sorted "tag href" strings so the diff reads cleanly.
  const got = tags(html, "link").filter(t => attr(t, "rel") === "alternate" && attr(t, "hreflang"))
    .map(t => `${attr(t, "hreflang")} ${attr(t, "href")}`).sort();
  const want = !HREFLANG[u.lang] ? [] : [
    ...u.alternates.map(a => `${HREFLANG[a.lang]} ${SITE}${a.path}`),
    `x-default ${SITE}${u.xDefault}`,
  ].sort();
  if (got.join("|") !== want.join("|")) {
    const extra = got.filter(x => !want.includes(x));
    const miss = want.filter(x => !got.includes(x));
    err(p, `hreflang mismatch${miss.length ? `; missing: ${miss.join(", ")}` : ""}${extra.length ? `; unexpected: ${extra.join(", ")}` : ""}`);
  }

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(m[1]); } catch (e) { err(p, `JSON-LD doesn't parse: ${e.message}`); }
  }

  const robots = [...metaContent(html, "name", "robots"), robotsHeader || ""].join(" ");
  if (/noindex/i.test(robots)) err(p, `noindex on an indexed URL (${robots.trim()})`);

  const body = (html.split(/<body\b[^>]*>/i)[1] || "")
    .replace(/<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>|<noscript\b[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ");
  const words = body.split(/\s+/).filter(Boolean).length;
  if (words < MIN_BODY_WORDS) err(p, `only ${words} words of body text — not pre-rendered? (run prerender after gen:pages)`);

  if (!LIVE) {
    for (const img of metaContent(html, "property", "og:image")) {
      const local = img.startsWith(SITE) ? img.slice(SITE.length + 1) : null;
      if (local && !existsSync(decodeURIComponent(local))) err(p, `og:image ${img} has no file behind it`);
    }
  }

  if (html.includes("TODO-TRANSLATE")) warn(p, "title/description still the English source text (TODO-TRANSLATE)");

  return titles[0];
}

async function sitemapLocs() {
  const xml = LIVE
    ? await fetch(`${SITE}/sitemap.xml`).then(r => (r.ok ? r.text() : ""), () => "")
    : existsSync("sitemap.xml") ? readFileSync("sitemap.xml", "utf8") : "";
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
}

// Fetch a few at a time: fast, but gentle on the live site.
const results = [];
for (let i = 0; i < urls.length; i += 6) {
  results.push(...await Promise.all(urls.slice(i, i + 6).map(load)));
}

const titlesByLang = {};
urls.forEach((u, i) => {
  const r = results[i];
  if (r.error) return err(u.path, r.error);
  const title = check(u, r);
  if (title) (titlesByLang[u.lang] ??= {}, (titlesByLang[u.lang][title] ??= []).push(u.path));
});
for (const byTitle of Object.values(titlesByLang)) {
  for (const [title, paths] of Object.entries(byTitle)) {
    if (paths.length > 1) warn(paths.join(", "), `share the title "${title}"`);
  }
}

const locs = await sitemapLocs();
const expected = urls.map(u => SITE + u.path);
const notListed = expected.filter(x => !locs.includes(x));
const stray = locs.filter(x => !expected.includes(x));
if (!locs.length) err("sitemap.xml", "missing or empty");
else {
  if (notListed.length) err("sitemap.xml", `missing ${notListed.length} URL(s) — run npm run sitemap: ${notListed.join(", ")}`);
  if (stray.length) err("sitemap.xml", `lists ${stray.length} URL(s) the site doesn't publish: ${stray.join(", ")}`);
}

// TODO-TRANSLATE is one fact about 18 pages; collapse it so real problems aren't buried.
const todo = warnings.filter(w => w.includes("TODO-TRANSLATE"));
const otherWarnings = warnings.filter(w => !w.includes("TODO-TRANSLATE"));

console.log(`check:seo (${LIVE ? `live, ${SITE}` : "local files"}): ${urls.length} URLs, ${errors.length} error(s), ${warnings.length} warning(s)`);
for (const e of errors) console.log(`  ERROR  ${e}`);
for (const w of otherWarnings) console.log(`  warn   ${w}`);
if (todo.length) console.log(`  warn   ${todo.length} page(s) still have English titles/descriptions (TODO-TRANSLATE):\n           ${todo.map(w => w.split(":")[0]).join("\n           ")}`);

process.exit(errors.length || (STRICT && warnings.length) ? 1 : 0);
