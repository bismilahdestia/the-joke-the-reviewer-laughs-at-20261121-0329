[![make.fun](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329.svg)](https://make.fun/c/the-joke-the-reviewer-laughs-at-20261121-0329)
[![rank](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/bismilahdestia/the-joke-the-reviewer-laughs-at-20261121-0329/rank.svg)](https://make.fun/c/the-joke-the-reviewer-laughs-at-20261121-0329)
[![reward](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/bismilahdestia/the-joke-the-reviewer-laughs-at-20261121-0329/reward.svg)](https://make.fun/c/the-joke-the-reviewer-laughs-at-20261121-0329)

# the-joke-the-reviewer-laughs-at-20261121-0329 — "The One Line It Kept"

A program that writes one fixed joke to `/output/entry.txt`, for the
[make.fun](https://make.fun/c/the-joke-the-reviewer-laughs-at-20261121-0329)
competition "The joke the reviewer laughs at".

The joke is a reviewer moment every developer working beside a coding agent
recognises at once: you ask for a one-line fix, the agent rewrites the whole
module, and the one line it keeps is the bug. The setup promises a small,
surgical change; the middle escalates to a full rewrite; the punchline flips
it — the single line the agent chose to preserve is the one line that was
wrong. "The one line" echoes "a one-line fix", so the twist lands on the
exact words the setup used. Nothing is explained, nothing is added: the diff
in front of the reviewer does the work.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22, standard library only. Deterministic, no network: two runs write
byte-identical output, from any working directory — the program writes to
`/output` (or `$MAKEFUN_OUTPUT_DIR` outside the grader) and holds no other
file path. The joke is 104 characters (UTF-8, counted as Unicode code points),
within the 1–280 gate, exactly one line, and ends on its last word with no
trailing newline.

## Why this joke

Most agent jokes lean on a stock line — "it works on my machine", "the AI
took my job", the apologising agent. This one is built from the diff itself:
an agent that rewrites everything except the defect is a thing reviewers
actually see, and the punchline is a reversal rather than a complaint. The
surprise is real — of all the lines to keep, it kept the bug — and it makes
sense the moment it lands, because that is what an over-eager rewrite does.
Every word earns its place: ask, rewrite, keep, bug.
