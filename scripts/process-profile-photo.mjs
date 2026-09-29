// One-off crop/grayscale pass for the hero profile photo.
//
// Reads the raw source from assets-source/profile/me.png (not served — outside
// public/) and writes a centered, cropped, grayscale JPEG into public/icons/.
//
// Run with: node scripts/process-profile-photo.mjs
// Re-run (adjusting the crop region below) if the source photo changes.

import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.join(ROOT, "assets-source", "profile", "me.png");
const OUT = path.join(ROOT, "public", "icons", "me.jpg");

// Crop region tuned by hand against the 1200x1600 source to center the face.
const CROP = { left: 375, top: 467, width: 600, height: 600 };

await sharp(SRC).extract(CROP).grayscale().jpeg({ quality: 88 }).toFile(OUT);

console.log(`Wrote ${OUT}`);
