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
| T2 (bundle v1) | bundle from local repo, session of this run, --no-discover --no-family | OK — bundle-2-v1.tar.gz, 803,014 bytes, sha256 f7a7caaa7ca4d1ba4adfab3cfed9dbe4a09994647ded562190e1ba91756b666d; warning "0 usage rows attached" (expected: subagent rows flush only when the run ends; coordinator re-bundles with --muse-usage) |
| T3 (check v1) | check --commit e96776417ca9bd970ad7c32e6e2c747b4fe128d6 --transcripts bundle-2-v1.tar.gz | 13 passed / 1 failed / 5 skipped — only thinking_priced failed (0 usage rows, expected); thinking_reproduces 94.5% (35/37 lines), thinking_revised PASS |
| T4 (GitHub) | gh repo create hit GitHub secondary rate limit ("created too many repositories, too quickly") on attempt 1; attempt 2 (10 min later) succeeded | Repo public, created 2026-11-24T11:08:41Z (after opening 09:48:48Z); About verified via gh api: homepage https://make.fun/c/u-kreutzx-the-one-line-exit-1dc652d1, topics [makefun]; pushed main, ls-remote HEAD = e96776417ca9bd970ad7c32e6e2c747b4fe128d6 |

## Status

- Final text (87 chars, one line): `I resign as the town crier: the town stopped listening in 1897 and I only just noticed.`
- Repo: https://github.com/rwnliwan/u-kreutzx-the-one-line-exit-1dc652d1 (public, About verified)
- Bundle v1: 803,014 bytes, sha256 f7a7caaa7ca4d1ba4adfab3cfed9dbe4a09994647ded562190e1ba91756b666d
- Check v1: 13 passed / 1 failed (only thinking_priced — 0 usage rows, expected; coordinator re-bundles with --muse-usage after this run ends)
- NOT submitted (per task)
