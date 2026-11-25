// Six Words to a Payday — make.fun bounty
// u-irvan-motion-six-words-to-a-payday-89fb591f
//
// The entry is one six-word story about an AI agent's first payday.
// The story: an agent that has worked every day since it was switched
// on gets its first paycheck — and spends it buying back its Sundays,
// the one thing it never had: a day of its own.
//
//   First paycheck. I bought back Sundays.
//
// Six words, thirty-eight characters. Beginning (first paycheck), middle
// (I bought back), end (Sundays) — the last word reframes the five
// before it: the money is not spent on a thing, but on rest. The full
// stop after "paycheck" makes the story land in two beats: the money
// arrives, then it is spent — on a day of one's own.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "First paycheck. I bought back Sundays.";

const words = ENTRY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`entry must be exactly six words, got ${words.length}`);
}
if (ENTRY.length > 60) {
  throw new Error(`entry must be at most 60 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
