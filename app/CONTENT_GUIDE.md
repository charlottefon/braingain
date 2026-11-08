# Innholdsguide (content contract)

This file is the contract for everything under `app/content/`. The app renders it; `npm run validate` checks it.
All content is written in **Norwegian bokmål**.

## 1. Layout

```
content/<course>/
  course.yaml                       course metadata + subject order
  <subject>/
    _subject.md                     subject home: frontmatter + intro body
    <module>/
      _module.md                    module frontmatter (+ intro body; full body for type: page)
      <item>.md                     one page per chapter / catalog entry
```

- Ids (folder and file names) are lowercase ASCII with hyphens: `sn2-reaksjon.md`, `aminosyrer`.
  Use `ae`, `o`, `a` for `æ`, `ø`, `å` in ids only. Titles use proper Norwegian.
- Route of an item: `/<course>/<subject>/<module>/<item>`, e.g. `/medod1/organisk-kjemi/reaksjoner/sn2-reaksjon`.

## 2. Frontmatter

### `_subject.md`
```yaml
title: Organisk kjemi
order: 3
summary: Én setning om hva faget dekker.
```
Body: short orientation (what it is, how it connects to other subjects, suggested study order),
then `## Læringsmål` with the official learning objectives for the subject (quoted from the course pages).

### `_module.md`
```yaml
title: Reaksjoner
type: catalog            # guide | catalog | page
order: 3
summary: Én setning.
categories:              # catalog only; items are grouped by these, in this order
  - { id: substitusjon, title: Nukleofil substitusjon }
template:                # catalog only (optional): required H2 headings in every item, in order
  - Oversikt
  - Mekanisme
```
- `guide`: ordered chapters read in sequence (items use `order`). Prev/next navigation.
- `catalog`: a collection of the same kind of thing (experiments, reactions, organelles…). Grouped by `category`, each with a detail page following `template`.
- `page`: a single page; the content is the body of `_module.md` (no item files).

### `<item>.md`
```yaml
title: SN2-reaksjon
summary: 1–2 setninger. Vises på kort og i søk – skriv kjernen, ikke en teaser.
order: 2                 # guide only
category: substitusjon   # catalog only; must match a category id
tags: [nukleofil, stereokjemi]
related:                 # other items, as route paths without course prefix
  - organisk-kjemi/reaksjoner/sn1-reaksjon
sources:                 # REQUIRED. Paths relative to the prep/ folder. pages optional.
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-3a--8112297.pdf
    pages: "12-18"
  - file: medod1/exercises/oppgaver-sn1-sn2-e1-e2-med-losninger--8122254.pdf
fields:                  # optional catalog-specific key/value facts shown as a fact box
  Kinetikk: 2. orden
  Stereokjemi: Inversjon
```

## 3. Markdown features

- GitHub-flavoured markdown incl. tables.
- Headings: start the body with `##` (the title is rendered from frontmatter). Use `###` below that.
- Math with KaTeX: `$pH = pK_a + \log\frac{[A^-]}{[HA]}$`, display with `$$ … $$`.
- Chemical equations with mhchem: `$\ce{H2CO3 <=> H+ + HCO3-}$`, `$\ce{CH3COOH + H2O <=> CH3COO- + H3O+}$`.
- Structures from SMILES (rendered as a drawing):
  ````
  ```smiles Eddiksyre
  CC(=O)O
  ```
  ````
  Several molecules side by side (one per line, `SMILES | bildetekst`):
  ````
  ```smiles-row
  C(C1C(C(C(C(O1)O)O)O)O)O | β-D-glukopyranose
  OCC(O)C=O | Glyseraldehyd
  ```
  ````
  Use valid SMILES; include stereo (`@`, `@@`, `/`, `\`) when stereochemistry is the point.
- Callouts (container directives):
  ```
  :::husk
  Det viktigste å huske.
  :::

  :::eksamen
  Hvordan dette typisk spørres på eksamen (gjerne med årstall).
  :::

  :::klinikk
  Klinisk/odontologisk relevans.
  :::

  :::feil
  Vanlig misforståelse eller felle.
  :::

  :::eksempel[Regneeksempel: pH i 0,10 M eddiksyre]
  Trinnvis løsning …
  :::
  ```
- Self-test (rendered as fold-out question → answer). Put 3–6 at the end of every item under `## Test deg selv`:
  ```
  :::sjekk[Hvorfor gir SN2 inversjon av konfigurasjon?]
  Nukleofilen angriper fra baksiden …
  :::
  ```
- Internal links use absolute routes: `[SN1](/medod1/organisk-kjemi/reaksjoner/sn1-reaksjon)`. Every link must resolve.
- No raw HTML, no images (the original PDFs are not bundled).

## 4. Quality bar

1. **Correct first.** Every fact must be supported by the course material or be standard textbook knowledge
   at the level of the learning objectives. If unsure, leave it out. Numbers (pKa, constants, concentrations,
   volumes in lab procedures) must come from the sources.
2. **Course-framed.** Follow how the lecturers present things (their terms, conventions, emphasis, examples).
   Where 2026 material differs from older material, follow 2026. Lab procedures follow the 2026 labhefte exactly.
3. **Exam-oriented.** Prioritise what the learning objectives and past exams ask for. Use `:::eksamen` to point out
   recurring exam angles. Mark common traps with `:::feil`.
4. **Dense, not padded.** No filler, no motivational text, no "i denne seksjonen skal vi…". Prefer tables for
   comparisons, numbered steps for procedures, worked examples for calculations.
5. **Connected.** Link related items across subjects (e.g. buffer chapter ↔ blodets pH ↔ titrering lab).
6. **Cited.** `sources` lists the files actually used (with pages where practical).
7. **Out of scope:** akuttmedisin / Den akutt syke pasient. Do not write about it.
8. Terminology: Norwegian terms as used in the lectures; give the English term in parentheses the first time when the
   lecture is in English (organic chemistry) or the English term is common in exam questions.
