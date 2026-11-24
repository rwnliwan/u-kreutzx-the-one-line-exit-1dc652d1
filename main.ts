// Entry for make.fun "The One-Line Exit" (u-kreutzx-the-one-line-exit-1dc652d1).
// Writes one single-line resignation letter to /output/entry.txt
// (or to $ENTRY_OUTPUT when that is set). Node 22 stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY_TEXT =
  "I resign as the town crier: the town stopped listening in 1897 and I only just noticed.";

const outFile =
  process.env.ENTRY_OUTPUT ?? join("/output", "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, ENTRY_TEXT, "utf8");
console.log(`wrote ${ENTRY_TEXT.length} characters to ${outFile}`);
