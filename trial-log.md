# Trial log — The One-Line Exit (u-kreutzx-the-one-line-exit-1dc652d1)

- Competition: The One-Line Exit, $2 top 10, deadline 26 Nov 17:50 WITA
- Gate: 1–140 characters, exactly one line (resignation letter)
- Field: 835 submissions, 593 distinct titles; dev rate decides top-500 cut for final heat
- Judge: comedy editor, criteria in order — joke lands; surprise turn; fits the form; specific voice; quotable

## Candidates (all drafted fresh in this session, checked with check_dup.py)

| # | Text | Chars | Dup check (max ratio / Jaccard) | Verdict |
|---|------|-------|---------------------------------|---------|
| 1 | I resign as the town crier: the town stopped listening in 1897 and I only just noticed. | 87 | 0.51 / 0.12, no exact match | **CHOSEN** — town crier appears in no field title; mechanism (town stopped listening, crier only just noticed) is unique in the field |
| 2 | I resign as a professional mourner: I have cried at four hundred funerals and no one has ever cried at mine. | 113 | 0.65 / 0.22, no exact match | REJECTED — same core joke mechanism as two field titles (professional mourner who wept at hundreds of funerals) |
| 3 | I resign as the scarecrow: the crows filed a formal complaint, and frankly, they were right. | 89 | 0.58 / 0.17, no exact match | REJECTED — same core mechanism as field's penguin-union titles (animals organise, worker concedes they are right) |
| 4 | I resign as the lighthouse keeper: the ships never wave back, so I have decided to stop waving first. | 101 | 0.56 / 0.18, no exact match | BACKUP — passes numbers, but lighthouse keeper is a crowded job in the field and the mechanism overlaps other keeper titles |

## Trials

| Trial | What changed | Result |
|-------|--------------|--------|
| T1 (local) | main.ts v1 run locally with ENTRY_OUTPUT to a temp dir | PASS — exit 0, wrote 87 chars, exactly 1 line, no trailing newline, text byte-identical to candidate 1 |

## Status

- Final text (87 chars, one line): `I resign as the town crier: the town stopped listening in 1897 and I only just noticed.`
- Bundle/check: pending
