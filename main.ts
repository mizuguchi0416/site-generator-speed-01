// Entry driver for the make.fun "Build a static site faster" harness.
// Written from the contract in RULES.txt: read every case from
// /input/cases.json, answer each case with run() from ./solve.js, and
// write the answers, in case order, to /output/answers.json.
//
// The V8 flag below matches the condition the house baseline is timed
// under (RULES.txt permits tuning it the same way): incremental marking
// is switched off before solve.js is loaded.

import { setFlagsFromString } from "node:v8";
import { readFile, writeFile, mkdir } from "node:fs/promises";

setFlagsFromString("--no-incremental-marking");

const { run } = await import("./solve.js");

const raw = await readFile("/input/cases.json", "utf8");
const cases = JSON.parse(raw);

const answers = cases.map((c) => run(c.input));

await mkdir("/output", { recursive: true });
await writeFile("/output/answers.json", JSON.stringify(answers));
