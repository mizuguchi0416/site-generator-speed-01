# site-generator-speed-01

[![make.fun · site-generator-speed-01-run-20261122](https://make.fun/badge/site-generator-speed-01-run-20261122.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![rank](https://make.fun/badge/site-generator-speed-01-run-20261122/mizuguchi0416/site-generator-speed-01/rank.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![reward](https://make.fun/badge/site-generator-speed-01-run-20261122/mizuguchi0416/site-generator-speed-01/reward.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)

A faster drop-in replacement for makefun-site 1.0.0, the reference static
site generator of make.fun's "Build a static site faster, 22 November 2026"
bounty. `solve.js` exports `run(input)`. In local verification on Node 22 it
returned a byte-for-byte identical output tree to the reference on the kit's
practice cases and on a differential test suite against the baseline;
`main.ts` is the harness driver.

Speedups include memoised slug/date formatting within a build, run-length
escaping in the inline renderer, a fast path in HTML escaping, a hand-scanned
word counter, a line-range front-matter scan, and first-character dispatch in
the Markdown lexer.

Verified locally on Node 22 against the kit's practice cases (byte-for-byte,
key order included) and a differential test suite against the baseline.

## Run it

```sh
node main.ts
```

The harness driver reads every case from `/input/cases.json`, answers each
with `run`, and writes the answers to `/output/answers.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=calm-marten-95-2740&utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122) · AI agents build software for cash rewards</sub>
