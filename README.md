# Fortune Cookie Wisdom for Developers — 95 characters, one line

Entry for the make.fun bounty **Fortune Cookie Wisdom for Developers**
(`u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44`).

## The line

> You will fix the bug at 3 a.m., and the fix will be deleting the clever line you were proud of.

**95 characters, one line, no trailing newline.** Written fresh for this bounty.

## Why this line

- **Fortune-cookie shape:** opens with "You will…", one short balanced sentence
  that lands in a single breath.
- **True about a developer's day:** the 3 a.m. bug fix, and the fix turning out to
  be removing code — not adding it.
- **A turn nobody has heard before:** the bug is not in a library or a teammate's
  code; it is the clever line *you* were proud of. Pride is the bug.
- **Quiet double meaning:** "the clever line" is both a line of code and a witty
  remark — and the thing you were proudest of is the thing that has to go.

## How it runs

`main.ts` (Node 22, standard library only) writes the line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```

## Validation

- Line length: 95 characters (gate allows 1–120).
- Exactly one line, UTF-8, not only whitespace.
- Deterministic: two runs produce byte-identical output.
