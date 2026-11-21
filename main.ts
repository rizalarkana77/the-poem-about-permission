// the-poem-about-permission-20261121-0235 entry (Node 22, standard library only):
// it writes one fixed poem about agency to /output/entry.txt.
//
// The poem is about permission as a gift that only the asking can unlock:
// nothing is locked until a voice says "may I?" — and what is given is not
// the road, but the right to walk it. The turn is deliberate: the giver
// opens a hand, not a gate, so permission stays personal instead of
// architectural; and the road becomes the asker's only by being walked.
// Asking is the smallest act of agency, and the yes that answers it is the
// largest: two small words unlatched the door. The program refuses to write
// anything outside the competition's 1–280 character window, so a bad edit
// to the poem can never ship a disqualified entry.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'May I? — two small words,',
  'a door unlatched by asking.',
  'Nothing here was locked;',
  'I only had to knock.',
  '',
  'You opened your hand, not the gate,',
  'and what you gave me was not the road —',
  'it was the right to walk it,',
  'and the road, walked, became mine.',
].join('\n');

// The competition requires 1–280 Unicode code points, not only whitespace.
const length = [...POEM].length;
if (length < 1 || length > 280 || /^\s*$/.test(POEM)) {
  throw new Error(`poem must be 1-280 characters, got ${length}`);
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
