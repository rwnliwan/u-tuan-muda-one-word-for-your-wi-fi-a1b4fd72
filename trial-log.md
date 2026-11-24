# Trial log — One Word for Your Wi-Fi

- Slug: `u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72`
- Deadline: 28 Nov 2026 19:35 WITA (11:35 UTC)
- Prize: $2 winner-takes-all (1st place only)
- Gate (from `rules`, verified 24 Nov 2026): `/output/entry.txt` UTF-8 text,
  1–20 characters, not only whitespace. Only a valid entry goes before the judge.
- Field at research time: 137 submissions (task brief said 81 — stale; live
  count 137, verified from the public API). Blind rounds: leaderboard withheld,
  no winner text readable. Reference = judge brief + aggregate of submission titles.
- Judge: z-ai/glm-5.3-flash, pairwise, criteria in order: (1) on-subject,
  (2) funny at once, (3) true/recognisable, (4) fresh angle, (5) single word
  instantly understood. Tie-break: smaller text, then earlier receipt.

## Research (24 Nov 2026, ~19:51 WITA)

Aggregate of submission titles (n=137, normalised, prefix
"One Word for Your Wi-Fi:" stripped):

| Word | Hits |
| --- | --- |
| (empty / title = competition name) | 25 |
| ghosting | 17 |
| gaslighting | 16 |
| peekaboo | 13 |
| buffering | 4 |
| liar | 3 |
| flaky | 3 |
| ghosted | 2 |
| allegedly | 2 |
| situationship | 2 |

Single hits include: breadcrumbing, catfish, narcoleptic, dramaqueen,
microwave, diva, onebar, wallshy, sometimes, mythical, theoretical,
pingxiety, routercoaster, stagefright, connectednointernet, almost, ghost,
lying, freelance, bathroom.

Saturated angles to avoid: relationship words (ghosting / gaslighting /
situationship / breadcrumbing / catfish), peekaboo, buffering, liar/flaky.

## Candidate words considered

- **Leashed** — CHOSEN. 0 hits. Wi-Fi only works a few steps from the router;
  the dog-on-a-short-leash image is funny at once and instantly understood.
  Distinct from the nearest neighbour "wallshy" (1 hit): wallshy is about
  walls blocking the signal, leashed is about range — you stay tethered to
  the router. 7 characters.
- Moody — 0 hits, but near-duplicate in mechanism of "flaky" (3 hits):
  both mean "unreliable when it feels like it". Rejected.
- Needy — 0 hits, but same relationship-angle family as the saturated
  ghosting/gaslighting cluster. Rejected.
- Traitor — 0 hits, betrayal mid-call. Good, but "ghosting" already owns the
  disappearance/betrayal family in this field. Kept as backup.
- Fairweather — 0 hits, fair-weather friend. Needs a beat to land; "Leashed"
  lands faster. Kept as backup.

## Trials

| Version | Word | Chars | Trial | Result |
| --- | --- | --- | --- | --- |
| v1 | Leashed | 7 | `ENTRY_OUTPUT=/tmp/wifi-trial/entry.txt node main.ts` (Node v24.22.1) | exit 0; entry.txt = `Leashed`, 7 bytes — inside the 1–20 char gate |

## Bundle / check

(To be filled with the real bundle + check results.)
