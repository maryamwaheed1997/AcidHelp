// Generates every language page and blog-post page from the six hand-written
// English files. Idempotent: re-running overwrites the generated files in place.
//
// Generated files are real, committed HTML — there is no build step on Vercel.
// Each one carries its own <title>, meta description, canonical, hreflang set,
// <html lang/dir>, the window.INITIAL_* seeds app.js reads, and (for posts)
// Article + BreadcrumbList JSON-LD.
//
// Run: npm run gen:pages   (npm run seo chains this before the pre-render)
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import {
  SITE, LANGS, HREFLANG, HTML_LANG, HTML_DIR, PAGES,
  readPosts, readPostLangs, readImageMap, langPath, postPath,
} from "./lib/pages.mjs";

const posts = readPosts();
const postLangs = readPostLangs();
const images = readImageMap();

// Translated <title>/<description> do not exist yet. Rather than silently ship
// English text on a /ur/ URL — which would make the hreflang cluster claim a
// translation that isn't there — each non-English page carries the English
// string plus an explicit TODO marker that the phase 4 check script looks for.
// Fill these in and the marker disappears.
const TODO = "TODO-TRANSLATE";
const translated = (lang, english) => (lang === "en" ? english : `${english}`);
const todoComment = lang =>
  lang === "en" ? "" : `\n  <!-- ${TODO}: title and description below are still the English source text. -->`;

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function headTags({ lang, path, title, description, ogImage, ogType, alternates, xDefault, extraJsonLd }) {
  const url = SITE + path;
  // Roman Urdu has no hreflang tag of its own (see HREFLANG in lib/pages.mjs),
  // so a /ro/ page must declare no alternates at all — not even x-default.
  // hreflang has to be reciprocal: if /ro/about claimed en-PK and ur-PK while
  // /about and /ur/about never pointed back at it, Google would discard the
  // whole annotation set. /ro/ pages stand alone on a self-canonical instead.
  const inCluster = Boolean(HREFLANG[lang]);
  const alts = !inCluster ? "" :
    alternates.map(a => `  <link rel="alternate" hreflang="${HREFLANG[a.lang]}" href="${SITE}${a.path}">`).join("\n")
    + `\n  <link rel="alternate" hreflang="x-default" href="${SITE}${xDefault}">`;
  return `  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${url}">${alts ? "\n" + alts : ""}

  <meta property="og:type" content="${ogType}">
  <meta property="og:site_name" content="AcidHelp">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:image" content="${SITE}${ogImage}">
  <meta property="og:url" content="${url}">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${SITE}${ogImage}">
${extraJsonLd || ""}`;
}

// Reuse the English file's <head> furniture (favicon, fonts, stylesheet) so a
// generated page can never drift from the hand-written ones.
function sharedHead(srcHtml) {
  const from = srcHtml.indexOf("  <!-- Favicon -->");
  const to = srcHtml.indexOf("</head>");
  return srcHtml.slice(from, to).replace(/\n\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "");
}

function pageShell({ lang, path, head, initial }) {
  return `<!DOCTYPE html>
<html lang="${HTML_LANG[lang]}" dir="${HTML_DIR[lang]}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">${todoComment(lang)}
${head}
</head>
<body>
  <div id="root"></div>

${initial}
  <script src="${"../".repeat(path.split("/").length - 2) || "./"}app.js"></script>
</body>
</html>
`;
}

// app.js and styles.css are referenced with a path relative to the generated
// file's depth, so /ur/blog/<slug>.html still resolves them.
const rewriteRel = (html, prefix) =>
  html.replace(/\b(href|src)="(?!https?:|\/\/|\/|#|data:|mailto:|tel:)(?:\.\/)?([^"]+)"/g,
               (_, attr, p) => `${attr}="${prefix}${p}"`);

const relPrefix = path => {
  const depth = path.replace(/^\//, "").split("/").filter(Boolean).length;
  const isDir = path.endsWith("/");
  const up = Math.max(0, (isDir ? depth : depth - 1));
  return up === 0 ? "./" : "../".repeat(up);
};

let written = 0;
const writeFile = (rel, content) => {
  const full = join(process.cwd(), rel);
  mkdirSync(dirname(full), { recursive: true });
  const before = existsSync(full) ? readFileSync(full, "utf8") : null;
  if (before !== content) { writeFileSync(full, content); written++; }
};

// ── language variants of the six top-level pages ────────────────────────────
for (const p of PAGES) {
  const src = readFileSync(p.file, "utf8");
  const enTitle = (src.match(/<title>([\s\S]*?)<\/title>/) || [, ""])[1];
  const enDesc = (src.match(/<meta name="description" content="([^"]*)"/) || [, ""])[1];
  const enOg = (src.match(/<meta property="og:image" content="https:\/\/www\.acidhelp\.com([^"]*)"/) || [, "/images/footer.webp"])[1];
  const shared = sharedHead(src);

  for (const lang of LANGS) {
    if (lang === "en") continue;           // the hand-written file is the English one
    const path = langPath(lang, p.path);
    const file = p.path === "/" ? `${lang}/index.html` : `${lang}${p.path}.html`;
    const head = headTags({
      lang, path,
      title: translated(lang, decodeHtml(enTitle)),
      description: translated(lang, decodeHtml(enDesc)),
      ogImage: enOg, ogType: "website",
      alternates: LANGS.filter(l => HREFLANG[l]).map(l => ({ lang: l, path: langPath(l, p.path) })),
      xDefault: p.path,
    }) + "\n" + rewriteRel(shared, relPrefix(path));
    writeFile(file, pageShell({
      lang, path, head,
      initial: `  <script>window.INITIAL_PAGE = ${JSON.stringify(p.key)}; window.INITIAL_LANG = ${JSON.stringify(lang)};</script>`,
    }).replace('<script src="./app.js">', `<script src="${relPrefix(path)}app.js">`));
  }
}

// ── hreflang on the hand-written English pages ──────────────────────────────
// These six files are authored by hand, not generated, so nothing above touches
// them — which left them with no alternates while the /ur/ pages pointed at
// them. hreflang only works when both sides agree, so patch the English side in
// place. Idempotent: any existing alternate block is replaced, not appended to.
for (const p of PAGES) {
  const file = p.file;
  let html = readFileSync(file, "utf8");
  const alts = LANGS.filter(l => HREFLANG[l])
    .map(l => `  <link rel="alternate" hreflang="${HREFLANG[l]}" href="${SITE}${langPath(l, p.path)}">`)
    .join("\n") + `\n  <link rel="alternate" hreflang="x-default" href="${SITE}${p.path}">`;

  html = html.replace(/\n {2}<link rel="alternate"[^>]*>/g, "");
  const canonical = html.match(/ {2}<link rel="canonical"[^>]*>/);
  if (!canonical) { console.log(`  !! ${file}: no canonical to anchor hreflang to`); continue; }
  const next = html.replace(canonical[0], `${canonical[0]}\n${alts}`);
  writeFile(file, next);
}

// ── one page per post per translated language ───────────────────────────────
const blogSrc = readFileSync("blog.html", "utf8");
const blogShared = sharedHead(blogSrc);

for (const post of posts) {
  const langs = postLangs[String(post.id)] || ["en"];
  const img = images[post.imageKey] || "/images/footer.webp";
  for (const lang of langs) {
    const path = postPath(lang, post.slug);
    const file = `${path.replace(/^\//, "")}.html`;
    const title = `${post.title} | AcidHelp`;
    const jsonLd = `  <script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  image: [SITE + img],
  author: { "@type": post.author.toLowerCase().includes("team") ? "Organization" : "Person", name: post.author },
  datePublished: isoDate(post.date),
  inLanguage: HTML_LANG[lang],
  publisher: { "@type": "NGO", name: "AcidHelp", url: SITE + "/", logo: { "@type": "ImageObject", url: `${SITE}/images/Icons/Favicon.png` } },
  mainEntityOfPage: { "@type": "WebPage", "@id": SITE + path },
}, null, 2).split("\n").map(l => "  " + l).join("\n")}
  </script>
  <script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE + langPath(lang, "/") },
    { "@type": "ListItem", position: 2, name: "Blog", item: SITE + langPath(lang, "/blog") },
    { "@type": "ListItem", position: 3, name: post.title },
  ],
}, null, 2).split("\n").map(l => "  " + l).join("\n")}
  </script>`;

    const head = headTags({
      lang, path,
      title: translated(lang, title),
      description: translated(lang, post.excerpt),
      ogImage: img, ogType: "article",
      alternates: langs.filter(l => HREFLANG[l]).map(l => ({ lang: l, path: postPath(l, post.slug) })),
      xDefault: postPath("en", post.slug),
      extraJsonLd: jsonLd,
    }) + "\n" + rewriteRel(blogShared, relPrefix(path));

    writeFile(file, pageShell({
      lang, path, head,
      initial: `  <script>window.INITIAL_PAGE = "blog"; window.INITIAL_POST = ${JSON.stringify(post.slug)}; window.INITIAL_LANG = ${JSON.stringify(lang)};</script>`,
    }).replace('<script src="./app.js">', `<script src="${relPrefix(path)}app.js">`));
  }
}

function decodeHtml(s) {
  return s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"');
}
// "Jul 23, 2026" -> "2026-07-23". Article.datePublished must be ISO 8601.
function isoDate(human) {
  const d = new Date(`${human} 12:00:00`);   // midday, so no timezone can roll the date over
  if (isNaN(d)) return "";
  const pad = n => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

console.log(`  ${written} file(s) written.`);
console.log(`  Non-English pages carry ${TODO} markers until real translations land.`);
