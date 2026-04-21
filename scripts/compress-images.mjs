import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

const DIR = 'images/speakers';
const TARGET_WIDTH = 600;
const QUALITY = 82;

const files = readdirSync(DIR).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

for (const file of files) {
  const input = join(DIR, file);
  const output = join(DIR, basename(file, extname(file)) + '.webp');
  const before = statSync(input).size;

  await sharp(input)
    .resize(TARGET_WIDTH, null, { withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(output);

  const after = statSync(output).size;
  const pct = Math.round((1 - after / before) * 100);
  console.log(`${file.padEnd(50)} ${(before/1024).toFixed(0).padStart(6)} KB → ${(after/1024).toFixed(0).padStart(5)} KB  (-${pct}%)`);
}
