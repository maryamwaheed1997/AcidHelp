// Emits FAQPage structured data for the home page, from the same t.faqs array
// app.js already renders there — so the markup and the visible text can never
// disagree, which is what Google requires of FAQPage.
//
// GATED ON REVIEW. Every current answer is medical first-aid guidance ("flush
// for 20 minutes", "never cover with cloth", "toothpaste will not neutralise").
// Structured data gets surfaced directly in search results, stripped of the
// page's context and disclaimer, so it must not ship until a human has
// confirmed the wording is medically reviewed. Flip the flag below once that
// confirmation exists, re-run `npm run faq`, and the block is injected.
const MEDICALLY_REVIEWED = false;

import { readFileSync, writeFileSync } from "node:fs";

const START = "<!-- FAQ-JSONLD:START -->";
const END = "<!-- FAQ-JSONLD:END -->";

// Pull the English FAQ pairs straight out of app.js.
const src = readFileSync("app.js", "utf8");
const block = src.slice(src.indexOf("faqs:["), src.indexOf("],", src.indexOf("faqs:[")));
const faqs = [...block.matchAll(/\{\s*q:"((?:[^"\\]|\\.)*)",\s*a:"((?:[^"\\]|\\.)*)"\s*\}/g)]
  .map(m => ({ q: unesc(m[1]), a: unesc(m[2]) }));
function unesc(s) { return s.replace(/\\"/g, '"').replace(/\\\\/g, "\\"); }

if (!faqs.length) { console.error("  no FAQs found in app.js"); process.exit(1); }

const jsonld = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

let html = readFileSync("index.html", "utf8");
html = html.replace(new RegExp(`\\n?  ${START}[\\s\\S]*?${END}`), "");

if (MEDICALLY_REVIEWED) {
  const script = `\n  ${START}\n  <script type="application/ld+json">\n${JSON.stringify(jsonld, null, 2).split("\n").map(l => "  " + l).join("\n")}\n  </script>\n  ${END}`;
  html = html.replace("</head>", `${script}\n</head>`);
  console.log(`  injected FAQPage JSON-LD with ${faqs.length} question(s).`);
} else {
  console.log(`  NOT injected — MEDICALLY_REVIEWED is false in scripts/faq-jsonld.mjs.`);
  console.log(`  ${faqs.length} question(s) are ready and waiting on medical sign-off:`);
  faqs.forEach((f, i) => console.log(`    ${i + 1}. ${f.q}`));
}
writeFileSync("index.html", html);
