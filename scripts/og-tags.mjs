// Keeps each page's og:image / twitter:image tags in step with what actually
// exists on disk, and is safe to re-run (idempotent).
//
// Convention: images/og/<page>.jpg at 1200x630. Until a page's file exists the
// tags fall back to images/footer.webp, declaring footer.webp's real dimensions
// rather than the 1200x630 the designed file will have — sending width/height
// that don't match the served image is worse than sending none.
//
// Run: npm run og   (Phase 4 folds this into `npm run seo`)
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const SITE = "https://www.acidhelp.com";
const FALLBACK = { path: "images/footer.webp", w: 1696, h: 960 };

// alt text is per-page because og:image:alt describes the share card, which is
// what someone hears if the card is read out. Reviewed copy, not generated.
const PAGES = {
  "index.html":     { og: "home",      alt: "AcidHelp — emergency first aid and support for acid attack survivors in Pakistan" },
  "map.html":       { og: "map",       alt: "Map of burns units and hospitals treating acid attack injuries across Pakistan" },
  "resources.html": { og: "resources", alt: "Free legal, medical and psychological support services for acid attack survivors" },
  "blog.html":      { og: "blog",      alt: "AcidHelp guides on acid attack first aid, filing an FIR, and reconstructive surgery" },
  "about.html":     { og: "about",     alt: "About AcidHelp, a platform supporting acid attack survivors in Pakistan" },
  "joinus.html":    { og: "joinus",    alt: "Volunteer with or partner with AcidHelp in Pakistan" },
};

// Replace a meta tag's content if the tag exists; insert it after `after` if not.
function setMeta(html, attr, name, value, after) {
  const re = new RegExp(`(<meta ${attr}="${name}" content=")[^"]*(">)`);
  if (re.test(html)) return html.replace(re, (_, a, b) => a + value + b);
  const anchor = new RegExp(`(<meta ${attr}="${after}" content="[^"]*">)`);
  if (!anchor.test(html)) throw new Error(`cannot place ${name}: anchor ${after} missing`);
  return html.replace(anchor, (_, tag) => `${tag}\n  <meta ${attr}="${name}" content="${value}">`);
}

let changed = 0;
for (const [file, cfg] of Object.entries(PAGES)) {
  const designed = `images/og/${cfg.og}.jpg`;
  const has = existsSync(designed);
  const img = has ? designed : FALLBACK.path;
  const [w, h] = has ? [1200, 630] : [FALLBACK.w, FALLBACK.h];
  const url = `${SITE}/${img}`;

  let html = readFileSync(file, "utf8");
  const before = html;
  html = setMeta(html, "property", "og:image", url, "og:description");
  html = setMeta(html, "property", "og:image:width", String(w), "og:image");
  html = setMeta(html, "property", "og:image:height", String(h), "og:image:width");
  html = setMeta(html, "property", "og:image:alt", cfg.alt, "og:image:height");
  html = setMeta(html, "name", "twitter:image", url, "twitter:description");
  html = setMeta(html, "name", "twitter:image:alt", cfg.alt, "twitter:image");

  if (html !== before) { writeFileSync(file, html); changed++; }
  console.log(`  ${file.padEnd(16)} ${has ? "designed" : "FALLBACK"}  ${img} (${w}x${h})`);
}
console.log(`\n  ${changed} file(s) updated.`);
const missing = Object.values(PAGES).filter(c => !existsSync(`images/og/${c.og}.jpg`));
if (missing.length) console.log(`  Still to design (1200x630): ${missing.map(c => `images/og/${c.og}.jpg`).join(", ")}`);
