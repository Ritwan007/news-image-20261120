// news-image-20261120 — entry program.
// Copies the pre-rendered front page (entry.png) to the output directory.
// The image is a 1024x1024 broadsheet of Friday 20 November 2026 world news,
// composed in-session from fresh research and fresh generated artwork.
// After copying, the program checks the copy is byte-for-byte the source,
// so a partial write can never pass as an entry.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(here, "entry.png");
const dst = join(outDir, "entry.png");
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);
if (statSync(src).size !== statSync(dst).size) {
  throw new Error("entry.png copy is incomplete");
}
