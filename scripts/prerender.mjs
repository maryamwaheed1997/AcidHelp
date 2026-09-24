// Bakes each page's rendered DOM into its .html file so crawlers see real text
// instead of an empty <div id="root">.
//
// Runs locally before commit (not on Vercel — this project has no build step).
//   npm run prerender
//
// How it stays safe:
//  * Output goes between PRERENDER markers inside #root, so re-running replaces
//    it cleanly and the script is idempotent.
//  * app.js still owns the DOM at runtime: on boot it replaces #root's contents
//    with its own render, so there is never duplicated content or a dead
//    handler. The pre-rendered markup is captured *from that same render*, so
//    what the crawler sees and what the visitor ends up with are identical.
//  * index.html is skipped. It has a hand-authored SSR shell and a bespoke
//    hydrate() path that splices sections in rather than replacing them;
//    overwriting it here would fight that. See the note printed at the end.
//  * Scroll-reveal sections are forced visible before capture, so text inside
//    not-yet-revealed sections is still in the HTML.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { createServer } from "node:http";
import { join, extname } from "node:path";
import { chromium } from "playwright";
import { PAGES, LANGS, langPath, postPath, readPosts, readPostLangs } from "./lib/pages.mjs";

const START = "<!-- PRERENDER:START -->";
const END = "<!-- PRERENDER:END -->";
const PORT = 8099;
const ROOT = process.cwd();

// index.html is excluded on purpose — see the header comment.
const SKIP = new Set(["index.html"]);

const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".svg": "image/svg+xml",
  ".mp4": "video/mp4", ".m4a": "audio/mp4", ".woff2": "font/woff2" };

// Mirror vercel.json's rewrites so the pre-render hits the same URLs production serves.
function resolve(urlPath) {
  const p = urlPath.split("?")[0];
  const direct = join(ROOT, p);
  if (existsSync(direct) && extname(p)) return direct;
  for (const cand of [`${p}.html`, join(p, "index.html")]) {
    const f = join(ROOT, cand);
    if (existsSync(f)) return f;
  }
  return join(ROOT, p === "/" ? "index.html" : p);
}

const server = createServer((req, res) => {
  const file = resolve(decodeURIComponent(req.url));
  if (!existsSync(file)) { res.writeHead(404).end("not found"); return; }
  res.writeHead(200, { "Content-Type": MIME[extname(file)] || "application/octet-stream" });
  res.end(readFileSync(file));
});

function targets() {
  const posts = readPosts();
  const postLangs = readPostLangs();
  const out = [];
  for (const p of PAGES) {
    for (const lang of LANGS) {
      const file = lang === "en" ? p.file : (p.path === "/" ? `${lang}/index.html` : `${lang}${p.path}.html`);
      if (SKIP.has(file)) continue;
      out.push({ url: langPath(lang, p.path), file });
    }
  }
  for (const post of posts) {
    for (const lang of (postLangs[String(post.id)] || ["en"])) {
      const path = postPath(lang, post.slug);
      out.push({ url: path, file: `${path.replace(/^\//, "")}.html` });
    }
  }
  return out;
}

const run = async () => {
  await new Promise(r => server.listen(PORT, r));
  const browser = await chromium.launch({ channel: "chrome" });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });

  // The map page pulls Leaflet tiles from the network; block them so the
  // pre-render is fast and deterministic. Fonts are blocked for the same
  // reason — they affect nothing in the serialised HTML.
  await page.route("**/*", route => {
    const u = route.request().url();
    if (/tile\.|openstreetmap|arcgisonline|fonts\.gstatic/.test(u)) return route.abort();
    return route.continue();
  });

  let changed = 0, done = 0;
  for (const t of targets()) {
    await page.goto(`http://localhost:${PORT}${t.url}`, { waitUntil: "networkidle" });
    // Wait for app.js to have rendered something substantial into #root.
    await page.waitForFunction(() => {
      const r = document.getElementById("root");
      return r && r.children.length > 0 && r.innerText.trim().length > 200;
    }, { timeout: 20000 }).catch(() => {});

    // Force every scroll-reveal section into its revealed state, so hidden
    // sections still contribute their text to the static HTML.
    await page.evaluate(() => {
      document.querySelectorAll(".reveal").forEach(el => {
        el.classList.add("is-visible");
        el.style.opacity = "";
        el.style.transform = "";
      });
      document.getElementById("root")?.classList.remove("nav-hidden");
      document.documentElement.classList.remove("nav-hidden");
    });

    const html = await page.evaluate(() => document.getElementById("root").innerHTML);
    const src = readFileSync(join(ROOT, t.file), "utf8");
    const block = `${START}\n${html}\n${END}`;

    let next;
    if (src.includes(START)) {
      // Re-run: swap the previous block out. Unchanged output here means the
      // render is stable, which is the expected result — not a failure.
      next = src.replace(new RegExp(`${START}[\\s\\S]*?${END}`), () => block);
    } else {
      next = src.replace(/<div id="root"([^>]*)><\/div>/, (_, attrs) => `<div id="root"${attrs}>\n${block}\n</div>`);
      if (next === src) { console.log(`  !! ${t.file}: no empty <div id="root"> to fill`); continue; }
    }
    if (next !== src) { writeFileSync(join(ROOT, t.file), next); changed++; }
    done++;
    const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    console.log(`  ${t.url.padEnd(52)} ${String(words).padStart(5)} words -> ${t.file}`);
  }

  await browser.close();
  server.close();
  console.log(`\n  ${done} page(s) pre-rendered, ${changed} file(s) changed.`);
  console.log(`  index.html is intentionally skipped — it has its own SSR shell and hydrate() path.`);
};

run().catch(e => { console.error(e); server.close(); process.exit(1); });
