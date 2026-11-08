# Brief for exam-bank agents

You are transcribing past MEDOD1 exams (University of Bergen, 1st semester medicine/dentistry) into the question bank
of a study app. The student uses it to practise for the exam on 10 Dec 2026, and every question links to the study
page that covers its topic. Quality matters above all: exact transcription, correct answers, correct topic tags.

## Input
- Exam PDFs with answers: `/Users/torfon/Documents/prep/medod1/exams/<year>-...-med-svar-...pdf`.
  Read the **whole PDF without `pages`** (the page-range option is broken on this machine). The correct options are
  marked with a green ✓ (or green text in dropdown/fill-in questions) – only visible in the page images, so look at them.
- Marking guides for some written questions: `medod1/exams/*sensorveiledning*.docx`
  (read with `textutil -convert txt -stdout <file>`).
- The app's topic pages: `/Users/torfon/Documents/prep/app/content/medod1/<subject>/<module>/<item>.md`.
  Get the list of valid topic paths with:
  `cd /Users/torfon/Documents/prep/app && ~/.local/node/bin/node scripts/topics.mjs`

## Output
One YAML file per exam: `/Users/torfon/Documents/prep/app/content/medod1/eksamen/<id>.yaml`, id = `<year>-h` or `<year>-v`
(høst/vår). Follow the format of the example `content/medod1/eksamen/2025-h.yaml` (it contains a few sample
questions – if you are assigned 2025 høst, replace the whole file).

```yaml
title: MEDOD1 høst 2025          # "MEDOD1 vår 2026" etc.
year: 2025
term: høst                       # høst | vår
source: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf   # relative to /Users/torfon/Documents/prep
note: valgfri kort merknad        # optional
questions:
  - n: 37                        # original question number
    subject: generell-kjemi      # cellebiologi | generell-kjemi | organisk-kjemi | proteiner | nomenklatur | samfunnsmedisin | lab
    topics: [generell-kjemi/regnetyper/ph-svak-syre]   # 1–3 most specific topic paths (item preferred, module allowed)
    type: single                 # single | multi | numeric | fill | text
    points: 1
    stem: |                      # markdown; KaTeX $..$, mhchem $\ce{..}$, ```smiles blocks allowed
      Hva er pH i 0,1 M melkesyre? $K_a = 1{,}4 \times 10^{-4}$
    options: ["8,3", "2,4", "1", "$3{,}7 \times 10^{-3}$"]     # single/multi: in original order
    answer: [1]                  # single/multi: 0-based indices of correct options; numeric: ["3"]
    explanation: |               # short "why" – see below
      ...
    figure: Fischer-projeksjon av en ketoheksose (D-fruktose)   # only if a figure cannot be reproduced
```
- `fill`: dropdown / matrix / translation tasks → `parts: [{prompt: "...", answer: "..."}]`, one per blank/row.
- `text`: short-answer/essay → `model:` answer. Use the sensorveiledning when it exists (`modelSource: Sensorveiledning`),
  otherwise write a concise model answer at the level expected (`modelSource: Egenlaget løsningsforslag`).
- Quote YAML strings that contain `: `, `#`, or start with special characters. Use `|` blocks for multi-line markdown.
  Inside double-quoted YAML strings backslashes must be doubled (`"$\\ce{H2O}$"`) – prefer `|` blocks or single quotes for math.

## Rules
1. **Transcribe exactly** (Norwegian as in the original; fix only obvious typos). Keep option order.
2. Chemical structures shown as images: reproduce as a ```smiles block (with correct stereo where it matters) when possible;
   R/S, Fischer/Haworth and similar figures where the drawing itself is the question: describe precisely in `figure:` and
   make the stem self-contained if you can (e.g. give the SMILES with stereo). Never invent details you cannot see.
3. **Skip** akuttmedisin / "Den akutt syke pasient" / first-aid questions entirely (out of scope this year). Skip questions
   from other courses if any.
4. Answers come from the green marks. If you are confident an official answer is wrong, keep it, and say so in
   `explanation` ("Merk: …").
5. `explanation`: 1–3 sentences on *why* the answer is right (and why tempting wrong options are wrong) for every
   non-trivial question; a fully worked calculation for every calculation question (check your arithmetic). Plain
   recall questions may have a one-line explanation.
6. `topics`: tag the most specific pages that teach what the question tests. Don't tag generically.
7. Validate: `cd /Users/torfon/Documents/prep/app && ~/.local/node/bin/node scripts/validate.mjs eksamen/<id>` → fix all errors.

## Report back (short)
Per exam: number of questions transcribed / skipped (and why), questions with figures you could not reproduce,
suspected wrong official answers, and topics that seem to be missing from the app (concepts asked on the exam that no
page covers) – this last point is important.

## Delegation
If you delegate, do **not** fork your context. Spawn a `general-purpose` agent with a short, self-contained task (exact files, exact output, the relevant rules), so it starts fast and stays focused.
