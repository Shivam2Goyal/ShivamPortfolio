// One-off build-time image pipeline for the poster gallery.
//
// Reads raw source images from assets-source/posters/ (not served — outside
// public/) and writes two optimized WebP tiers into public/posters/:
//   thumb/  — small grid preview (width capped, used in the gallery grid)
//   full/   — capped large view (used only when the lightbox opens)
//
// Run with: npm run optimize:posters
// Re-run whenever a poster is added/replaced in assets-source/posters/.

import { readdir, mkdir } from "node:fs/promises";
import { existsSync, statSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC_DIR = path.join(ROOT, "assets-source", "posters");
const THUMB_DIR = path.join(ROOT, "public", "posters", "thumb");
const FULL_DIR = path.join(ROOT, "public", "posters", "full");

const THUMB_WIDTH = 640;
const FULL_MAX_WIDTH = 1800;

const formatKB = (bytes) => `${(bytes / 1024).toFixed(0)}KB`;

async function main() {
  if (!existsSync(SRC_DIR)) {
    console.error(`No source directory at ${SRC_DIR}`);
    process.exit(1);
  }
  await mkdir(THUMB_DIR, { recursive: true });
  await mkdir(FULL_DIR, { recursive: true });

  const files = (await readdir(SRC_DIR)).filter((f) => /\.(png|jpe?g)$/i.test(f));
  if (files.length === 0) {
    console.log("No source images found — nothing to do.");
    return;
  }

  for (const file of files) {
    const srcPath = path.join(SRC_DIR, file);
    const basename = path.basename(file, path.extname(file));
    const thumbPath = path.join(THUMB_DIR, `${basename}.webp`);
    const fullPath = path.join(FULL_DIR, `${basename}.webp`);

    const srcSize = statSync(srcPath).size;

    await sharp(srcPath)
      .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
      .webp({ quality: 72 })
      .toFile(thumbPath);

    await sharp(srcPath)
      .resize({ width: FULL_MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(fullPath);

    const thumbSize = statSync(thumbPath).size;
    const fullSize = statSync(fullPath).size;

    console.log(
      `${file}: ${formatKB(srcSize)} -> thumb ${formatKB(thumbSize)}, full ${formatKB(fullSize)}`,
    );
  }
}

main();
