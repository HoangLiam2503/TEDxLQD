// Usage: node scripts/compress-images.mjs <file|dir> <outDir> <width> [slug]
//   dir  → every jpg/jpeg/png inside, output keeps the source basename
//   file → one image, output named <slug>.webp (or the source basename)
// HEIC is not readable by sharp: convert first with `sips -s format jpeg in.HEIC --out x.jpg`.
import sharp from 'sharp';
import { readdirSync, statSync, mkdirSync } from 'fs';
import { join, extname, basename } from 'path';

const [src, outDir, widthArg, slug] = process.argv.slice(2);
if (!src || !outDir || !widthArg) {
  console.error('Usage: node scripts/compress-images.mjs <file|dir> <outDir> <width> [slug]');
  process.exit(1);
}

const TARGET_WIDTH = Number(widthArg);
const QUALITY = 80;
mkdirSync(outDir, { recursive: true });

const inputs = statSync(src).isDirectory()
  ? readdirSync(src).filter(f => /\.(jpe?g|png)$/i.test(f)).map(f => join(src, f))
  : [src];

for (const input of inputs) {
  const name = slug && inputs.length === 1 ? slug : basename(input, extname(input));
  const output = join(outDir, name + '.webp');
  const before = statSync(input).size;

  await sharp(input)
    .rotate() // honour EXIF orientation
    .resize(TARGET_WIDTH, null, { withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(output);

  const after = statSync(output).size;
  const pct = Math.round((1 - after / before) * 100);
  console.log(`${basename(input).padEnd(50)} ${(before / 1024).toFixed(0).padStart(6)} KB → ${(after / 1024).toFixed(0).padStart(5)} KB  (-${pct}%)`);
}
