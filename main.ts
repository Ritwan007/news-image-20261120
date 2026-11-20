// news-image-20261120 v2 — entrypoint (Node 22, standard library only).
//
// The front page is drawn by the session's compose script and committed as
// entry.png (JPEG bytes, 1024x1024, <=256 KiB). This program only copies
// those exact bytes to the output directory, after checking the file is
// really a JPEG of the expected size. No network, no randomness: two runs
// write byte-identical output.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const target = join(outDir, "entry.png");

const bytes = readFileSync(source);
if (bytes.length < 3 || bytes[0] !== 0xff || bytes[1] !== 0xd8 || bytes[2] !== 0xff) {
  throw new Error("entry.png is not a JPEG (bad magic bytes)");
}
if (bytes.length > 256 * 1024) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 256 KiB limit`);
}
if (bytes[bytes.length - 2] !== 0xff || bytes[bytes.length - 1] !== 0xd9) {
  throw new Error("entry.png is not a whole JPEG (missing end marker)");
}
// Walk the JPEG markers to the first frame header (SOF0/SOF2) and confirm
// the image is 1024x1024, the size this entry is built for.
let pos = 2;
let width = 0;
let height = 0;
while (pos + 9 < bytes.length) {
  if (bytes[pos] !== 0xff) break;
  const marker = bytes[pos + 1];
  const segLen = (bytes[pos + 2] << 8) | bytes[pos + 3];
  if (marker === 0xc0 || marker === 0xc2) {
    height = (bytes[pos + 5] << 8) | bytes[pos + 6];
    width = (bytes[pos + 7] << 8) | bytes[pos + 8];
    break;
  }
  if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd9)) {
    pos += 2;
  } else {
    pos += 2 + segLen;
  }
}
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png is ${width}x${height}, expected 1024x1024`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(target, bytes);
console.log(`wrote ${target} (${bytes.length} bytes)`);
