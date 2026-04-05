/**
 * Resizes src/assets/favio.png (K logo) to 512×512 for public/favicon.png.
 * Run: node scripts/generate-favicon.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "src", "assets", "favio.png");
const out = join(root, "public", "favicon.png");

const meta = await sharp(src).metadata();
const w = meta.width ?? 0;
const h = meta.height ?? 0;
if (w < 48 || h < 48) {
  console.warn(`Source is only ${w}×${h}; output may be soft.`);
}

await sharp(src)
  .resize(512, 512, {
    fit: "contain",
    position: "centre",
    background: { r: 0, g: 0, b: 0, alpha: 1 },
    kernel: sharp.kernel.lanczos3,
  })
  .png({ compressionLevel: 9 })
  .toFile(out);

const check = await sharp(out).metadata();
console.log(`Wrote ${out} (${check.width}×${check.height})`);
