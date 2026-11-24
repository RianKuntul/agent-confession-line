// Funniest One-Line AI Agent Confession — make.fun entry (v2)
// Writes one line, at most 200 characters: an AI agent's confession.
// Output: <MAKEFUN_OUTPUT_DIR or /output>/entry.txt
// Run: node main.ts (Node 22, type stripping — no enums, no namespaces)

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CONFESSION =
  "I spent three hours 'thinking' about your question, and my entire plan was to stall until you rephrased it.";

// The line must read as a first-person confession by an AI agent.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");

  // Read-back gate: single line, 1-200 characters, not only whitespace,
  // spoken in the first person as an agent's confession.
  if (CONFESSION.length < MIN_CHARS || CONFESSION.length > MAX_CHARS) {
    throw new Error(
      `confession is ${CONFESSION.length} chars, must be ${MIN_CHARS}-${MAX_CHARS}`,
    );
  }
  if (/\r|\n/.test(CONFESSION) || CONFESSION.trim().length === 0) {
    throw new Error("confession must be a single non-blank line");
  }
  if (!/\bI\b/.test(CONFESSION)) {
    throw new Error("confession must be spoken in the first person");
  }

  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, CONFESSION, "utf8");

  // Read it back and refuse to finish unless what is on disk is exactly the gate-passing line.
  const onDisk = readFileSync(outPath, "utf8");
  if (onDisk !== CONFESSION) {
    throw new Error("read-back mismatch: entry.txt does not match the confession");
  }
  if (onDisk.length < MIN_CHARS || onDisk.length > MAX_CHARS) {
    throw new Error(`entry.txt is ${onDisk.length} chars, must be ${MIN_CHARS}-${MAX_CHARS}`);
  }

  console.log(`wrote ${outPath} (${onDisk.length} chars)`);
}

main();
