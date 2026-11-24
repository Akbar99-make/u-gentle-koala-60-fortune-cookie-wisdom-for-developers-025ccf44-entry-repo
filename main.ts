// Fortune Cookie Wisdom for Developers
// make.fun bounty: u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44
//
// Writes exactly one original fortune-cookie line for a software developer
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// The line is 95 characters, a single line, no trailing newline.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You will fix the bug at 3 a.m., and the fix will be deleting the clever line you were proud of.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Post-write verification: the file on disk must be byte-identical to the
// constant, 1-120 characters, a single line with no newline.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the fortune line byte-for-byte");
}
if (written.length < 1 || written.length > 120) {
  throw new Error(`entry.txt length ${written.length} outside 1-120 characters`);
}
if (written.includes("\n") || written.includes("\r")) {
  throw new Error("entry.txt must be a single line with no newline");
}
