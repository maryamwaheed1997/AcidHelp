// Single source of truth for "which URLs exist", shared by the generator, the
// pre-renderer and (in phase 4) the sitemap and check scripts.
//
// Post slugs are read straight out of app.js rather than duplicated here — a
// post is publishable exactly when it has a slug, so the two can never drift.
import { readFileSync } from "node:fs";

export const SITE = "https://www.acidhelp.com";

// en lives at the root; the others under a prefix. Order matters for output.
export const LANGS = ["en", "ur", "ro"];
export const LANG_PREFIX = { en: "", ur: "/ur", ro: "/ro" };

// hreflang per language. Roman Urdu is deliberately absent: it has no
// well-supported BCP-47 tag Google honours, and claiming ur-PK for both /ur/
// and /ro/ would put two pages in conflict for the same language+region. The
// /ro/ pages still get a self-referencing canonical, they just sit outside the
// hreflang cluster.
export const HREFLANG = { en: "en-PK", ur: "ur-PK" };

// <html lang> / dir. Every language currently renders LTR — Urdu is handled by
// per-glyph font fallback, not RTL layout (see the note in styles.css).
export const HTML_LANG = { en: "en", ur: "ur", ro: "ur-Latn" };
export const HTML_DIR = { en: "ltr", ur: "ltr", ro: "ltr" };

// The six top-level pages: the file each is generated from, its clean path, and
// the app's internal page key.
export const PAGES = [
  { key: "emergency", file: "index.html",     path: "/" },
  { key: "medical",   file: "map.html",       path: "/map" },
  { key: "resources", file: "resources.html", path: "/resources" },
  { key: "blog",      file: "blog.html",      path: "/blog" },
  { key: "about",     file: "about.html",     path: "/about" },
  { key: "joinus",    file: "joinus.html",    path: "/joinus" },
];

// Pull id/slug/title/author/date/excerpt/image for every post that has a slug.
export function readPosts(appJsPath = "app.js") {
  const src = readFileSync(appJsPath, "utf8");
  const start = src.indexOf("const BLOG_POSTS = [");
  const block = src.slice(start, src.indexOf("\n];", start));
  const posts = [];
  const re = /\{\s*id:(\d+),\s*slug:"([^"]+)",\s*category:"([^"]*)"[\s\S]*?title:"((?:[^"\\]|\\.)*)"[\s\S]*?excerpt:"((?:[^"\\]|\\.)*)"[\s\S]*?author:"([^"]*)",\s*date:"([^"]*)",\s*image:([A-Za-z0-9_.]+)/g;
  let m;
  while ((m = re.exec(block))) {
    posts.push({
      id: Number(m[1]), slug: m[2], category: m[3],
      title: unesc(m[4]), excerpt: unesc(m[5]),
      author: m[6], date: m[7], imageKey: m[8].replace(/^IMG\./, ""),
    });
  }
  return posts;
}

// Which languages a given post is actually translated into. BLOG_I18N keys the
// translations by post id; a post with no entry for a language must not get a
// URL in that language (it would just be the English text on a /ur/ URL).
export function readPostLangs(appJsPath = "app.js") {
  const src = readFileSync(appJsPath, "utf8");
  const s = src.indexOf("const BLOG_I18N");
  const blk = src.slice(s, src.indexOf("\nBLOG_POSTS.forEach", s));
  const out = {};
  const heads = [...blk.matchAll(/^ {2}(\d+):\s*\{/gm)];
  heads.forEach((h, i) => {
    const seg = blk.slice(h.index, i + 1 < heads.length ? heads[i + 1].index : blk.length);
    out[h[1]] = ["en", ...new Set([...seg.matchAll(/^ {4}(ur|ro):\s*\{/gm)].map(x => x[1]))];
  });
  return out;
}

// Resolve an IMG.<key> reference to its real path, so post pages can point
// og:image at the post's own artwork.
export function readImageMap(appJsPath = "app.js") {
  const src = readFileSync(appJsPath, "utf8");
  const start = src.indexOf("const IMG = {");
  const block = src.slice(start, src.indexOf("\n};", start));
  const out = {};
  for (const m of block.matchAll(/^\s*(\w+):\s*"([^"]+)"/gm)) out[m[1]] = m[2].replace(/^\.\//, "/");
  return out;
}

const unesc = s => s.replace(/\\"/g, '"').replace(/\\\\/g, "\\");

export const langPath = (lang, path) => {
  const pre = LANG_PREFIX[lang] || "";
  if (!pre) return path;
  return path === "/" ? `${pre}/` : `${pre}${path}`;
};
export const postPath = (lang, slug) => `${LANG_PREFIX[lang] || ""}/blog/${slug}`;

// Every URL the site publishes, with the alternates each one should declare.
export function buildUrlIndex(appJsPath = "app.js") {
  const posts = readPosts(appJsPath);
  const postLangs = readPostLangs(appJsPath);
  const urls = [];

  for (const p of PAGES) {
    for (const lang of LANGS) {
      urls.push({
        type: "page", key: p.key, lang,
        path: langPath(lang, p.path),
        srcFile: p.file,
        alternates: LANGS.filter(l => HREFLANG[l]).map(l => ({ lang: l, path: langPath(l, p.path) })),
        xDefault: p.path,
      });
    }
  }
  for (const post of posts) {
    const langs = postLangs[String(post.id)] || ["en"];
    for (const lang of langs) {
      urls.push({
        type: "post", key: post.slug, lang, post,
        path: postPath(lang, post.slug),
        alternates: langs.filter(l => HREFLANG[l]).map(l => ({ lang: l, path: postPath(l, post.slug) })),
        xDefault: postPath("en", post.slug),
      });
    }
  }
  return urls;
}
