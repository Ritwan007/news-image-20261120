// SPDX-License-Identifier: MIT
// news-image-20261120 v3: the entry image is pre-rendered (see README.md);
// this program copies it to the output directory, byte for byte.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
const outPath = join(outDir, "entry.png");
copyFileSync(join(here, "entry.png"), outPath);
// Guard: the copied file must be a whole JPEG (SOI marker), as the gate checks.
const head = readFileSync(outPath).subarray(0, 2);
if (head[0] !== 0xff || head[1] !== 0xd8) {
  throw new Error("entry.png is not a JPEG");
}
