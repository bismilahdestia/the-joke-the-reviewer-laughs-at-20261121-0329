// A the-joke-the-reviewer-laughs-at-20261121-0329 entry (Node 22, standard
// library only): it writes one fixed joke to /output/entry.txt. The joke is a
// reviewer moment every developer beside an agent knows: you ask for a
// one-line fix, the agent rewrites the whole module, and the one line it
// keeps is the bug. The punchline echoes the setup — "one-line fix" comes
// back as "the one line" — so the twist lands on the setup's own words.
// Deterministic, no network: the same bytes every run. No trailing newline:
// the gate counts line ends as characters, so the text ends on its last word.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT =
  'I asked my agent for a one-line fix. It rewrote the whole module — and the one line it kept was the bug.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
