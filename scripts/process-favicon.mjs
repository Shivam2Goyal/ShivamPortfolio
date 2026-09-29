// One-off background-removal + grayscale pass for the favicon.
//
// The source has a solid near-black background baked into opaque pixels
// (not real transparency), so this color-keys it out by distance from the
// background color, converts the remaining subject to grayscale (keeping its
// faceted shading rather than flattening to solid white), trims to content,
// and writes a transparent PNG.
//
// Run with: node scripts/process-favicon.mjs
// Re-run (adjusting BG_COLOR/THRESHOLD below) if the source image changes.

import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.join(ROOT, "assets-source", "favicon", "favicon-source.png");
const OUT = path.join(ROOT, "public", "icons", "favicon.png");

const BG_COLOR = [26, 6, 17];
const THRESHOLD = 55;
const FEATHER = 25;

const { data, info } = await sharp(SRC).raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

const out = Buffer.alloc(width * height * 4);
for (let i = 0; i < width * height; i++) {
  const r = data[i * channels];
  const g = data[i * channels + 1];
  const b = data[i * channels + 2];
  const dist = Math.sqrt((r - BG_COLOR[0]) ** 2 + (g - BG_COLOR[1]) ** 2 + (b - BG_COLOR[2]) ** 2);

  const gray = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
  const boosted = Math.min(255, Math.round(gray * 1.6));
  const alpha = dist < THRESHOLD ? 0 : Math.min(255, Math.round(((dist - THRESHOLD) / FEATHER) * 255));

  out[i * 4] = boosted;
  out[i * 4 + 1] = boosted;
  out[i * 4 + 2] = boosted;
  out[i * 4 + 3] = alpha;
}

await sharp(out, { raw: { width, height, channels: 4 } })
  .trim()
  .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(OUT);

console.log(`Wrote ${OUT}`);
