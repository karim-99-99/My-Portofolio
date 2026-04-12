/**
 * Renders public/og-image.png at 1200×630 for Open Graph / Twitter cards.
 * Run: node scripts/generate-og-image.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "public", "og-image.png");

const W = 1200;
const H = 630;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1220"/>
      <stop offset="45%" style="stop-color:#111827"/>
      <stop offset="100%" style="stop-color:#0f172a"/>
    </linearGradient>
    <radialGradient id="glow" cx="78%" cy="22%" r="55%">
      <stop offset="0%" style="stop-color:#14b8a6;stop-opacity:0.22"/>
      <stop offset="50%" style="stop-color:#0ea5e9;stop-opacity:0.08"/>
      <stop offset="100%" style="stop-color:#000000;stop-opacity:0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="12%" cy="88%" r="45%">
      <stop offset="0%" style="stop-color:#2dd4bf;stop-opacity:0.12"/>
      <stop offset="100%" style="stop-color:#000000;stop-opacity:0"/>
    </radialGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#14b8a6"/>
      <stop offset="50%" style="stop-color:#2dd4bf"/>
      <stop offset="100%" style="stop-color:#22d3ee"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect width="${W}" height="${H}" fill="url(#glow2)"/>
  <rect x="72" y="420" width="400" height="4" rx="2" fill="url(#accent)" opacity="0.95"/>
  <text x="72" y="260" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="68" font-weight="700" fill="#f9fafb" letter-spacing="-0.02em">Kareem Khamis</text>
  <text x="72" y="338" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="34" font-weight="600" fill="#2dd4bf">Full-Stack &amp; Mobile Developer</text>
  <text x="72" y="392" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="22" font-weight="400" fill="#94a3b8">Cairo, Egypt · karimkhamis.com</text>
  <text x="72" y="500" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="18" font-weight="500" fill="#64748b" letter-spacing="0.12em">PORTFOLIO</text>
</svg>`;

await sharp(Buffer.from(svg))
  .resize(W, H)
  .png({ compressionLevel: 9 })
  .toFile(out);

const meta = await sharp(out).metadata();
console.log(`Wrote ${out} (${meta.width}×${meta.height})`);
