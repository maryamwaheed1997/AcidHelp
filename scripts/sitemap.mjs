// Writes sitemap.xml from the same URL index the generator and pre-renderer
// use, so a new post or language page can't exist without being listed.
//
// Every published URL goes in — /ro/ included. Roman Urdu sits outside the
// hreflang cluster but is still indexable on its own self-canonical, so it
// needs a way to be discovered other than internal links.
//
// Deliberately left out:
//  * hreflang (<xhtml:link>). Each page already declares its alternates in
//    <head>; a second copy here would be one more place for them to disagree.
//  * changefreq / priority. Google ignores both.
//
// lastmod is the last commit date of the file that serves the URL. gen:pages
// only rewrites a file whose content changed, so this moves when the page does
// and not on every regeneration. A file with no commit yet gets no lastmod
// rather than a guess — commit, then re-run, to fill it in.
//
// Run: npm run sitemap   (after gen:pages and prerender, and after committing)
import { writeFileSync, readFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { SITE, buildUrlIndex, fileFor } from "./lib/pages.mjs";

const lastCommitDate = file => {
  try {
    return execFileSync("git", ["log", "-1", "--format=%cs", "--", file], { encoding: "utf8" }).trim() || null;
  } catch {
    return null;
  }
};

const urls = buildUrlIndex();
const missing = [];
const entries = urls.map(u => {
  const file = fileFor(u);
  if (!existsSync(file)) missing.push(`${u.path} -> ${file}`);
  const lastmod = lastCommitDate(file);
  return `  <url><loc>${SITE}${u.path}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`;
});

// A sitemap entry for a page that doesn't exist is a 404 we'd be asking Google
// to crawl. Refuse to write rather than ship it.
if (missing.length) {
  console.error(`sitemap: ${missing.length} URL(s) have no file behind them — run gen:pages first:\n  ${missing.join("\n  ")}`);
  process.exit(1);
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>
`;

const before = existsSync("sitemap.xml") ? readFileSync("sitemap.xml", "utf8") : "";
if (before === xml) {
  console.log(`sitemap.xml unchanged (${urls.length} URLs).`);
} else {
  writeFileSync("sitemap.xml", xml);
  const undated = entries.filter(e => !e.includes("<lastmod>")).length;
  console.log(`sitemap.xml written: ${urls.length} URLs${undated ? `, ${undated} without lastmod (uncommitted files)` : ""}.`);
}
