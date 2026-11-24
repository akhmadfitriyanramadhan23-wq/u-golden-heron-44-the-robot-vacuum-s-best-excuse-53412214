// The Robot Vacuum's Best Excuse — one line, at most 140 characters, giving
// the funniest excuse a robot vacuum could offer for missing a spot.
// Writes the line to /output/entry.txt. Node 22, standard library only.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "I didn't miss that spot — I was giving the dust time to reflect on its choices. It chose to stay, and honestly, I respect that.";

const limit = 140;

function main(): void {
  const length = Array.from(text).length;
  if (length < 1 || length > limit) {
    throw new Error(`entry must be 1-${limit} characters, got ${length}`);
  }
  const targetDir = "/output";
  const targetFile = join(targetDir, "entry.txt");
  mkdirSync(targetDir, { recursive: true });
  writeFileSync(targetFile, text, "utf8");
  const written = readFileSync(targetFile, "utf8");
  if (written !== text) {
    throw new Error("read-back mismatch: entry.txt does not match the entry text");
  }
  console.log(`wrote ${length} characters to ${targetFile}`);
  console.log(text);
}

main();
