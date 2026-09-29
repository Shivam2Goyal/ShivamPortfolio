// Build-time image pipeline for poem gallery tiles — same approach as
// scripts/optimize-posters.mjs.
//
// Reads raw source images from assets-source/poems/ (not served — outside
// public/) and writes a single optimized WebP tier into public/poems/,
// sized for the gallery tile (poems only ever show one size, no lightbox
// full-view tier needed the way posters have).
//
// Run with: npm run optimize:poems
// Re-run whenever a poem image is added/replaced in assets-source/poems/.

import { readdir, mkdir } from "node:fs/promises";
import { existsSync, statSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC_DIR = path.join(ROOT, "assets-source", "poems");
const OUT_DIR = path.join(ROOT, "public", "poems");

const TILE_WIDTH = 900;

const formatKB = (bytes) => `${(bytes / 1024).toFixed(0)}KB`;

async function main() {
  if (!existsSync(SRC_DIR)) {
    console.error(`No source directory at ${SRC_DIR}`);
    process.exit(1);
  }
  await mkdir(OUT_DIR, { recursive: true });

  const files = (await readdir(SRC_DIR)).filter((f) => /\.(png|jpe?g)$/i.test(f));
  if (files.length === 0) {
    console.log("No source images found — nothing to do.");
    return;
  }

  for (const file of files) {
    const srcPath = path.join(SRC_DIR, file);
    const basename = path.basename(file, path.extname(file));
    const outPath = path.join(OUT_DIR, `${basename}.webp`);

    const srcSize = statSync(srcPath).size;

    await sharp(srcPath)
      .resize({ width: TILE_WIDTH, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(outPath);

    const outSize = statSync(outPath).size;
    console.log(`${file}: ${formatKB(srcSize)} -> ${formatKB(outSize)}`);
  }
}

main();
