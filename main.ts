import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

try {
  const summary = readFileSync(new URL('./summary.txt', import.meta.url));
  mkdirSync(outputDirectory, { recursive: true });
  writeFileSync(join(outputDirectory, 'entry.txt'), summary);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Unable to write entry.txt: ${message}`);
  process.exitCode = 1;
}
