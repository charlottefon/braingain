# Brief for content agents

You are writing study content for a Norwegian medical/dental student preparing for the MEDOD1 exam at the
University of Bergen (school exam 10 Dec 2026, 5 hours, mostly multiple choice + some short answer/essay, pass/fail).
The content is rendered by a SvelteKit study app (offline PWA on Mac and phone). The student cares about one thing:
**the quality of the content** – correct, complete for the exam, well structured, and easy to study from.

## Before you start
1. Read `/Users/torfon/Documents/prep/app/CONTENT_GUIDE.md` – the content contract (layout, frontmatter, markdown features, quality bar). Follow it exactly.
2. Look at the `_subject.md` / `_module.md` files already in your assigned folders – structure, categories and templates are fixed. Do not change module types, categories or templates. You may fill in the body of `_subject.md` / `_module.md` (keep the frontmatter, you may improve `summary`).
3. Read the course sources thoroughly **before** writing. Course material lives in `/Users/torfon/Documents/prep/medod1/`
   (`material/<subject>/`, `exercises/`, `exams/`, `info/`). Each folder has a `readme.md` index mapping titles to file names.

## Reading the sources
- PDFs: use the Read tool with `pages` (max 20 pages per call). Lecture slide decks can be long – read all of them for your subject.
- `.html` pages: Read them directly (they are saved Canvas pages).
- `.docx` / `.doc` / `.pptx`: `textutil -convert txt -stdout <file>` works for .doc/.docx. For .pptx: `unzip -p <file> 'ppt/slides/*.xml' | sed -e 's/<\/a:p>/\n/g' -e 's/<[^>]*>//g'`.
- There is no Python on this machine. Node is at `~/.local/node/bin` (use `export PATH="$HOME/.local/node/bin:$PATH"`).
- Past exams with answers: `medod1/exams/*-med-svar-*.pdf` (2015–2026, prefixed by year). Skim the most recent ones (2023–2026) for your subject to calibrate what is asked and how; use `:::eksamen` callouts to point out recurring angles.
- **Out of scope:** akuttmedisin / "Den akutt syke pasient" – ignore that material completely.

## Writing
- Write files only inside your assigned folders under `/Users/torfon/Documents/prep/app/content/medod1/`.
- Norwegian bokmål. Exam-oriented, dense, correct. Tables for comparisons, numbered steps for procedures, worked examples for calculations.
- Every item: frontmatter per the guide (title, summary, category/order, tags, sources with real file paths relative to `/Users/torfon/Documents/prep/`, `related` within your own subject), body starting at `##`, ending with `## Test deg selv` (3–6 `:::sjekk` questions that test understanding, not trivia).
- Links: link freely to items you create. Across subjects, link only to module routes that already exist (e.g. `/medod1/lab/ovelser`, `/medod1/generell-kjemi/regnetyper`) – a later pass will add item-level cross-links.
- Use SMILES drawings where a structure helps (functional groups, amino acids, sugars, reaction partners). Use `\ce{}` for reaction equations.
- No images and no raw HTML.

## Validate
Run `cd /Users/torfon/Documents/prep/app && export PATH="$HOME/.local/node/bin:$PATH" && node scripts/validate.mjs <your-subject>` and fix **all** errors
(and warnings about your own files) before you finish. Then re-read your items once as a strict examiner would: wrong facts, missing exam-relevant points, unclear explanations – fix them.

## Report back (short)
- Files written (one line each: path – title)
- Anything you were unsure of, source conflicts, or gaps in the source material
- Suggested cross-links to other subjects (as `from → to-topic` pairs) for the later linking pass

## Delegation
If you delegate, do **not** fork your context. Spawn a `general-purpose` agent with a short, self-contained task (exact files, exact output, the relevant rules), so it starts fast and stays focused.
