// Funniest Time Machine Warning Label
// Competition: u-eager-stork-81-9647-funniest-time-machine-warning-f8add151
// Writes one warning label to <MAKEFUN_OUTPUT_DIR>/entry.txt. Cap: 120.
// Draft v1: do not meet yourself / kill grandpa / bet on races.
// Revise next to fit 114-120 chars exactly with a billable-cleanup punch.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const SETUP = "WARNING: Never meet yourself, kill grandpa, or bet on races —";
const PUNCHLINE = "paradox cleanup is billable and past-you never pays up.";
const LINE = `${SETUP} ${PUNCHLINE}`;
if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`Invalid entry line: 1-120 chars required, got ${LINE.length}.`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
