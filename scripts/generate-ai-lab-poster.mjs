/**
 * Renders public/ai-lab-poster.png (1280×720) — poster for the AI Lab project card.
 * Run: node scripts/generate-ai-lab-poster.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "public", "ai-lab-poster.png");

const W = 1280;
const H = 720;
const font =
  "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const pills = [
  "RAG + citations",
  "LangGraph agent",
  "Human approval",
  "n8n webhooks",
  "Guardrails",
  "Usage &amp; cost",
];

let pillSvg = "";
let x = 80;
const y = 500;
for (const label of pills) {
  const w = Math.round(label.replace("&amp;", "&").length * 11 + 36);
  pillSvg += `
  <rect x="${x}" y="${y}" width="${w}" height="44" rx="22" fill="#0f766e" fill-opacity="0.35" stroke="#2dd4bf" stroke-opacity="0.55"/>
  <text x="${x + w / 2}" y="${y + 29}" text-anchor="middle" font-family="${font}" font-size="19" font-weight="600" fill="#99f6e4">${label}</text>`;
  x += w + 12;
}

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0b1020"/>
      <stop offset="50%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#081c1a"/>
    </linearGradient>
    <radialGradient id="glow" cx="82%" cy="18%" r="55%">
      <stop offset="0%" style="stop-color:#14b8a6;stop-opacity:0.28"/>
      <stop offset="60%" style="stop-color:#0ea5e9;stop-opacity:0.06"/>
      <stop offset="100%" style="stop-color:#000;stop-opacity:0"/>
    </radialGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#14b8a6"/>
      <stop offset="100%" style="stop-color:#22d3ee"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2dd4bf" stroke-opacity="0.07" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- flow diagram: n8n -> AI Lab -> approve -->
  <g font-family="${font}" font-size="18" font-weight="600" fill="#94a3b8">
    <rect x="860" y="120" width="150" height="56" rx="12" fill="#111827" stroke="#334155"/>
    <text x="935" y="155" text-anchor="middle">n8n webhook</text>
    <path d="M1010 148 L1050 148" stroke="#2dd4bf" stroke-width="2"/>
    <polygon points="1050,142 1062,148 1050,154" fill="#2dd4bf"/>
    <rect x="1062" y="108" width="150" height="80" rx="12" fill="#0f766e" fill-opacity="0.35" stroke="#2dd4bf"/>
    <text x="1137" y="141" text-anchor="middle" fill="#ccfbf1">Next.js API</text>
    <text x="1137" y="166" text-anchor="middle" fill="#99f6e4" font-size="15">Groq · RAG · Agent</text>
    <path d="M1137 188 L1137 226" stroke="#2dd4bf" stroke-width="2"/>
    <polygon points="1131,226 1137,238 1143,226" fill="#2dd4bf"/>
    <rect x="1040" y="240" width="194" height="56" rx="12" fill="#111827" stroke="#334155"/>
    <text x="1137" y="275" text-anchor="middle">Human approve → Gmail</text>
  </g>

  <text x="80" y="150" font-family="${font}" font-size="22" font-weight="600" fill="#2dd4bf" letter-spacing="0.28em">APPLIED AI · PORTFOLIO PROJECT</text>
  <text x="80" y="260" font-family="${font}" font-size="104" font-weight="800" fill="#f8fafc" letter-spacing="-0.03em">AI Lab</text>
  <text x="80" y="330" font-family="${font}" font-size="38" font-weight="600" fill="#e2e8f0">AI Automation Platform</text>
  <text x="80" y="385" font-family="${font}" font-size="24" fill="#94a3b8">RAG over PDFs · LangGraph research agent · human-in-the-loop · n8n workflows</text>
  <rect x="80" y="420" width="360" height="5" rx="2.5" fill="url(#accent)"/>
  ${pillSvg}
  <text x="80" y="640" font-family="${font}" font-size="20" fill="#64748b">Next.js 16 · TypeScript · Groq · LangGraph · Redis · Docker · Vercel</text>
  <text x="1200" y="640" text-anchor="end" font-family="${font}" font-size="20" font-weight="600" fill="#2dd4bf">ai-lab-alpha-five.vercel.app</text>
</svg>`;

await sharp(Buffer.from(svg)).resize(W, H).png({ compressionLevel: 9 }).toFile(out);
const meta = await sharp(out).metadata();
console.log(`Wrote ${out} (${meta.width}×${meta.height})`);
