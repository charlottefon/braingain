# Brief for review agents

The first draft of all study content for MEDOD1 is written (see `CONTENT_GUIDE.md` and `AGENT_BRIEF.md` in
`/Users/torfon/Documents/prep/app/` – read both first; the same rules, tools and source locations apply).
Your job is to make your assigned part **exam-ready**: you are the strict second pair of eyes. The student only cares
about the quality of the end result.

## What to do
1. **Read every file in your scope** completely.
2. **Verify against the sources** (`/Users/torfon/Documents/prep/medod1/…`, paths in each item's `sources`).
   Prioritise what errors would hurt most: definitions, numbers (pKa, constants, volumes, years, § numbers),
   mechanisms and stereochemistry, Latin forms, calculations (recompute with node), lab procedures.
   Fix every error you find. Where content is textbook knowledge beyond the sources, check it is correct and at the
   right level.
3. **SMILES:** check each structure is the molecule the caption says (atoms, bonds, charges, and stereo where the
   point is stereo – e.g. α/β anomers, D/L, R/S, cis/trans). Fix wrong ones. If unsure about stereo, drop the stereo
   marks and say "(uten stereokjemi)" in the caption rather than show something wrong.
4. **Coverage:** compare against the learning objectives (subject `_subject.md`) and the recent exams (2023–2026
   `*-med-svar-*.pdf`, read whole – no `pages` param). Add missing exam-relevant points to the right item; add a new
   item only if a whole topic is missing.
5. **Clarity:** each item should be studyable on its own on a phone: lead with the core, tables for comparisons,
   no padding. Tighten verbose passages; make `summary` the true core in 1–2 sentences.
6. **Cross-links:** add item-level links across subjects (inline links where the text mentions the concept, and
   `related` entries). Suggestions from the first-pass agents are in `notes-crosslinks.md`; verify the target ids exist
   (`~/.local/node/bin/node scripts/topics.mjs`). Only edit files in your own scope – links *to* other scopes are fine.
7. Run `node scripts/validate.mjs <scope>` (with Node on PATH) until 0 errors / 0 warnings in your scope.

## Hard rules
- **Never rename, move or delete items** (ids are referenced by the exam bank being built in parallel). Changing titles,
  summaries and bodies is fine. New items are fine.
- Do not change module types/categories/templates.
- Edit only files inside your scope.

## Report back (short)
What you fixed (grouped: factual errors, SMILES, coverage additions, cross-links), any remaining doubts the student
should know about, and items you consider weakest.

## Delegation
If you delegate, do **not** fork your context. Spawn a `general-purpose` agent with a short, self-contained task (exact files, exact output, the relevant rules), so it starts fast and stays focused.
