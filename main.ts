// The Most Boring Object, Reviewed in One Line
// make.fun bounty: u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3
//
// The entry is a single funny, true line reviewing the dullest everyday
// object we could name. This program writes that line to
// <output dir>/entry.txt, where the output dir is MAKEFUN_OUTPUT_DIR
// (the grader's /output) or ./out when run locally.
//
// The object: the dustpan. It is in every home, it does one thing, and
// it is famous for failing at the last millimetre of it: no matter how
// carefully you sweep, the dustpan's lip always leaves a thin line of
// dust behind on the floor. That is the joke, and it is true.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review. One line, at most 200 characters, every word earning its place.
const REVIEW =
  "The dustpan has exactly one job — catch the dirt — and it still leaves a thin line of it behind on every single sweep.";

// The gate the sealed scorer applies: UTF-8 text of 1 to 200 characters,
// not only white space, on a single line.
const MAX_CHARS = 200;

function validate(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(
      `review must be 1-${MAX_CHARS} characters, got ${line.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("review must not be only white space");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("review must stay on one line");
  }
  // No control characters: the gate reads the file as plain UTF-8 text.
  for (const ch of line) {
    if (ch.charCodeAt(0) < 0x20) {
      throw new Error("review must not contain control characters");
    }
  }
}

function main(): void {
  validate(REVIEW);

  // Never delete the output directory: the grader mounts it and runs this
  // program as an unprivileged user, so removing it would fail the run.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });

  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, REVIEW, "utf8");
  // Read it back: a silent write failure must not pass locally.
  const written = readFileSync(outPath, "utf8");
  if (written !== REVIEW) {
    throw new Error(`round-trip mismatch in ${outPath}`);
  }
  validate(written);
  console.log(`wrote ${outPath} (${REVIEW.length} chars)`);
  console.log(REVIEW);
}

main();
