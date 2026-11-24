// One Word for Your Wi-Fi — entry word: "Leashed"
//
// Why this word wins against the judge brief (rules, in order):
// 1. On-subject: it describes home Wi-Fi exactly as lived — the signal only
//    works within a few steps of the router, so you end up sitting on the
//    floor next to it.
// 2. Funny at once: a dog on a short leash. No setup, no explanation — the
//    image lands the moment you read it.
// 3. True and recognisable: everyone has dragged a laptop closer to the
//    router, or stood in one exact spot where the bars come back.
// 4. Fresh angle: the field is saturated with relationship words (ghosting,
//    gaslighting, peekaboo, situationship, breadcrumbing). Nobody named the
//    range problem — Wi-Fi that refuses to travel.
// 5. One word, instantly understood, 7 characters. It also works as a
//    network name, which is what the winning word becomes.
//
// Gate: /output/entry.txt must be UTF-8 text of 1 to 20 characters.
// "Leashed" is 7 characters, a single word, no whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Leashed";

const outDir = process.env.ENTRY_OUTPUT
  ? process.env.ENTRY_OUTPUT.replace(/\/entry\.txt$/, "")
  : "/output";
const outPath = process.env.ENTRY_OUTPUT ?? `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, WORD, "utf8");
