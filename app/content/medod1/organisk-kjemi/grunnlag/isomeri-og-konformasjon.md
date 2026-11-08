---
title: Isomeri – struktur, konformasjon og cis/trans (E/Z)
summary: Isomerer har samme molekylformel. Konstitusjonelle isomerer har ulik bindingsrekkefølge; stereoisomerer har samme bindinger men ulik 3D-ordning – enantiomerer (speilbilder) eller diastereomerer (bl.a. cis/trans). Konformasjoner skifter ved rotasjon om enkeltbindinger.
order: 4
tags: [isomeri, konstitusjonell, telle isomerer, kokepunkt, konformasjon, cis, trans, E/Z, sykloheksan, newman]
related:
  - organisk-kjemi/grunnlag/kiralitet-og-r-s
  - organisk-kjemi/grunnlag/enantiomerer-diastereomerer-meso
  - organisk-kjemi/funksjonelle-grupper/alkener
  - organisk-kjemi/funksjonelle-grupper/alkaner
  - organisk-kjemi/navnsetting/stereodeskriptorer
  - organisk-kjemi/biomolekyler/lipider
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-2a-3--8116857.pdf
    pages: "2-5, 25, 30-31"
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-1--8106129.pdf
    pages: "20-23, 31-35, 52-54"
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2023-medod1-ny-v2023-med-svar--5194537.pdf
  - file: medod1/exercises/r-og-s-konfigurasjon-oppgaver-med-losninger--8122255.pdf
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-2a-2--8114132.pdf
    pages: "4, 27"
  - file: medod1/exams/2019-medod1-ny-v2019-med-svar--2098874.pdf
  - file: medod1/exams/2018-medod1-ny-v2018-med-svar--1194843.pdf
  - file: medod1/exams/2017-medod1-h2017-med-svar--705807.pdf
  - file: medod1/exams/2021-medod1-h2021-med-svar--3944361.pdf
---

## Oversikt over isomertyper

**Isomerer** = forbindelser med **samme molekylformel**, men ulik struktur.

| Type | Hva er ulikt? | Eksempel | Kan omdannes uten å bryte bindinger? |
|---|---|---|---|
| **Konstitusjonelle (strukturelle) isomerer** | rekkefølgen atomene er bundet i ("different atom connectivity") | butan / 2-metylpropan; propan-1-ol / metoksyetan | nei |
| **Stereoisomerer** | bare 3D-ordningen ("same connectivity, different 3D arrangement") | | |
| – Enantiomerer | speilbilder som ikke kan legges over hverandre | (R)- og (S)-2-brombutan | nei |
| – Diastereomerer | stereoisomerer som **ikke** er speilbilder | *cis*/*trans*-but-2-en; (2R,3R)- og (2R,3S)-3-klorbutan-2-ol | nei |
| – Konformerer (rotamerer) | rotasjon om σ-binding | forskjøvet/formørket butan; stol-sykloheksan | **ja**, ved rotasjon |

Forelesningens isomertre: isomerer → konstitusjonelle | stereoisomerer → diastereomerer (f.eks. cis/trans, konformerer) og enantiomerer.

:::feil
Forelesningslysbildene kaller stereoisomerer «(conformational isomers)», og ett lysbilde kaller *cis*- og *trans*-but-2-en «structural isomers». Det er upresist: cis/trans-isomerer har **samme** bindingsrekkefølge og er **stereoisomerer (diastereomerer)**, ikke konstitusjonelle isomerer. Konformerer er bare én undergruppe av stereoisomerer. Svar etter definisjonene i tabellen.
:::

## Konstitusjonelle isomerer

Samme molekylformel, ulikt bindingsmønster, **ulike IUPAC-navn** og ulike fysisk-kjemiske egenskaper. Kan til og med tilhøre ulike stoffklasser (alkohol vs eter).

```smiles-row
CCCC | Butan
CC(C)C | 2-metylpropan (isobutan)
CCCO | Propan-1-ol
COCC | Metoksyetan
```

### Telle konstitusjonelle isomerer systematisk

Gjett ikke – gå gjennom skjelettene i fast rekkefølge:

1. **Finn alle karbonskjelett** for antall C, fra lengst kjede til mest forgrenet. Kontroller hvert skjelett ved å finne **lengste kjede** og navngi det – «4-metylpentan» er bare 2-metylpentan tegnet baklengs.
2. **Plasser den funksjonelle gruppen** på hvert skjelett, men bare på **symmetrisk ulike** posisjoner. To posisjoner er like hvis molekylet ser likt ut lest fra den andre enden.
3. **Sjekk betingelsen** i oppgaven (1°/2°/3°, antall H på karbonet). Et C med fire C-naboer kan ikke bære OH (ingen H å erstatte).
4. **Navngi hver kandidat** med IUPAC – får to kandidater samme navn, er de samme stoff.

Antall alkanskjelett: C₄ → 2, C₅ → 3, **C₆ → 5**, C₇ → 9.

| C₆-skjelett | Symmetrisk ulike posisjoner for OH | 1° | 2° | 3° |
|---|---|---|---|---|
| Heksan | C1, C2, C3 | 1 | 2 | 0 |
| 2-metylpentan | C1, C2, C3, C4, C5 | 2 (C1, C5) | 2 (C3, C4) | **1** (C2) |
| 3-metylpentan | C1, C2, C3, metyl-C | 2 (C1, metyl) | 1 (C2) | **1** (C3) |
| 2,2-dimetylbutan | C1, C3, C4 (C2 har ingen H) | 2 (C1, C4) | 1 (C3) | 0 |
| 2,3-dimetylbutan | C1, C2 | 1 (C1) | 0 | **1** (C2) |
| **Sum (17 alkoholer)** | | **8** | **6** | **3** |

:::eksempel[Eksamen v2018, v2019, v2023: Hvor mange tertiære alkoholer har formelen C₆H₁₄O?]
C₆H₁₄O er mettet (CₙH₂ₙ₊₂O) → alkohol eller eter uten ring/dobbeltbinding. Tertiær alkohol: OH på et C med **tre C-naboer og ett H** (før OH settes på). Gå gjennom de fem C₆-skjelettene:
1. Heksan – ingen C med tre C-naboer.
2. 2-metylpentan – C2 → **2-metylpentan-2-ol**.
3. 3-metylpentan – C3 → **3-metylpentan-3-ol**.
4. 2,2-dimetylbutan – C2 har **fire** C-naboer (ingen H å erstatte) – ingen.
5. 2,3-dimetylbutan – C2 og C3 er like (symmetri) → **2,3-dimetylbutan-2-ol** (bare én).

**Svar: 3.**
:::

```smiles-row
CCCC(C)(C)O | 2-metylpentan-2-ol
CCC(C)(O)CC | 3-metylpentan-3-ol
CC(C)C(C)(C)O | 2,3-dimetylbutan-2-ol
```

:::feil
- Å telle 2,3-dimetylbutan-2-ol og «2,3-dimetylbutan-3-ol» som to: de er samme molekyl (lavest lokant → -2-ol).
- Å glemme 3-metylpentan: OH på C3 gir en tertiær alkohol selv om kjeden «ser rett ut».
- Å tegne «2-etylbutan» som eget skjelett: lengste kjede er 5 C → det er 3-metylpentan. (Alkoholnavnet 2-etylbutan-1-ol er derimot riktig, fordi hovedkjeden må inneholde C–OH.)
:::

## Konformasjoner av alkaner

Konformerer har samme bindinger, men ulik romlig ordning som oppstår ved **rotasjon rundt en C–C σ-binding**. De omdannes raskt ved romtemperatur og kan ikke isoleres.

- **Forskjøvet (staggered)**: H-atomene på nabokarbonene står «mellom» hverandre – lavest energi. Ved romtemperatur er ~99 % av etanmolekylene forskjøvet.
- **Formørket (eclipsed)**: H-atomene står rett bak hverandre (Newman-projeksjon) – høyere energi (torsjonsspenning).
- **Butan (rotasjon om C2–C3)**, stabilitet: *anti*-forskjøvet (CH₃-gruppene 180° fra hverandre, mest stabil) > *gauche*-forskjøvet (60°) > formørket > **helt formørket / syn-periplanar** (CH₃ bak CH₃, minst stabil).

:::eksamen
h2025: «Når butan foreligger i eclipsed er det mer stabilt enn i staggered» – **feil**; forskjøvet (staggered) er mest stabilt.
:::

## Sykloalkaner og sykloheksan

- Generell formel **CₙH₂ₙ** (én ring = to H færre enn alkanen). Ringen begrenser rotasjon og kan gi **vinkelspenning** (avvik fra 109,5°) og torsjonsspenning. Små ringer (syklopropan, syklobutan) er spente og mer reaktive.
- **Sykloheksan** foretrekker **stolkonformasjonen**: alle C–C–C-vinkler ≈ 109,5°, alle bindinger forskjøvet → spenningsfri. Stolen kan «flippe» mellom to stolformer (rask ved romtemperatur); båtformen har høyere energi.
- Hvert C har én **aksial** (opp/ned, parallell med ringaksen) og én **ekvatorial** (utover langs ringen) binding. Ved ring-flipp bytter aksial og ekvatorial plass.
- **Store substituenter foretrekker ekvatorial** posisjon (mindre sterisk hindring), f.eks. metylsykloheksan.

:::eksamen
v2023: generell formel for sykloalkaner → **CₙH₂ₙ** (h2025 hadde det feile utsagnet «generell formel for sykloalkaner er CₙHₙ₊₂»).
:::

## Cis/trans-isomeri

Oppstår når **rotasjon er hindret** – av en dobbeltbinding eller en ring – og omdanning bare kan skje ved å bryte og danne bindinger.

**Alkener:** Krav: **hvert** av de to dobbeltbindingskarbonene må ha to *ulike* grupper.
- *cis*: like (eller tilsvarende) grupper på samme side; *trans*: på motsatt side.
- 2-metylprop-1-en har ingen cis/trans-isomeri: C1 bærer to H.
- *cis*- og *trans*-but-2-en har ulike fysiske egenskaper (kp 3,7 °C vs 0,3 °C) – de er diastereomerer.

```smiles-row
C/C=C\C | cis-but-2-en (Z)
C/C=C/C | trans-but-2-en (E)
CC(C)=C | 2-metylprop-1-en – ingen cis/trans
```

**Sykloalkaner:** to substituenter på ulike ringkarbon kan stå på samme side (*cis*) eller hver sin side (*trans*) av ringplanet.

```smiles-row
C[C@H]1CCC[C@H]1C | cis-1,2-dimetylsyklopentan
C[C@H]1CCC[C@@H]1C | trans-1,2-dimetylsyklopentan
```

### Kokepunkt for cis- og trans-isomerer

Cis- og trans-isomerer er **diastereomerer** – ulike stoffer med **ulike** fysiske egenskaper (kokepunkt, smeltepunkt), i motsetning til enantiomerer.

- **cis-1,2-disubstituert**: begge substituentene på samme side → bindingsdipolene summeres til et lite **netto dipolmoment** → dipol–dipol-krefter i tillegg til London → **høyere kokepunkt**.
- **trans-1,2-disubstituert**: substituentene peker hver sin vei → dipolene opphever hverandre mer → lavere kokepunkt.

| Par | cis (kp) | trans (kp) |
|---|---|---|
| but-2-en (forelesning) | 3,7 °C | 0,3 °C |
| 1,2-dimetylsyklopentan | ca. 99 °C | ca. 92 °C |

:::eksempel[Eksamen h2017: Kokepunkt for cis- og trans-1,2-dimetylsyklopentan]
1. Samme molekylformel og samme bindinger → London-kreftene er omtrent like.
2. cis: begge CH₃ på samme side av ringen → molekylet har en «polar side» og et lite dipolmoment.
3. trans: CH₃-gruppene på hver sin side → dipolene opphever hverandre delvis.

**Svar: cis-1,2-dimetylsyklopentan har høyest kokepunkt.** Distraktorer: «samme kokepunkt» (gjelder enantiomerer, ikke cis/trans), «ikke noe bestemt kokepunkt» (feil – de er rene stoffer).
:::

:::eksamen
h2017: «cis- eller trans-1,2-dimetylsyklopentan har høyest kokepunkt?» → **cis**. h2021: «cis-1,2-dimetylsyklopentan har høyere kokepunkt enn trans» var en **riktig** påstand (det feile var at NO₂ dirigerer til para).
:::

:::eksamen
v2026: «Hva kjennetegner forskjellen mellom cis- og trans-isomerer i et sykloalkan?» → like substituenter på samme side (cis) eller motstående side (trans) av ringen. Distraktorer: «de er speilbilder» (det er enantiomerer), «de kan fritt rotere» (det er konformerer).
:::

## E/Z-systemet

Cis/trans er tvetydig når dobbeltbindingen har tre eller fire ulike substituenter. Da brukes **E/Z** (Cahn–Ingold–Prelog):

1. På **hvert** sp²-karbon: rangér de to gruppene etter CIP-prioritet (høyest atomnummer på første atom; ved likhet, gå videre utover – se [Kiralitet og R/S](/medod1/organisk-kjemi/grunnlag/kiralitet-og-r-s)).
2. Gruppene med **høyest prioritet på samme side** → **Z** (*zusammen*, «sammen»).
3. Gruppene med høyest prioritet på **motsatt side** → **E** (*entgegen*, «motsatt»).

:::eksempel[Bestem E/Z: (E)-3-brom-2-klorpent-2-en (kollokvieoppgave)]
Struktur: CH₃–C(Cl)=C(Br)–CH₂CH₃.
- C2: Cl > CH₃ → Cl har høyest prioritet.
- C3: Br > CH₂CH₃ → Br har høyest prioritet.
- **E**: Cl og Br på hver sin side av dobbeltbindingen. (Z: Cl og Br på samme side.)
:::

```smiles (E)-3-brom-2-klorpent-2-en
C/C(Cl)=C(\Br)CC
```

:::feil
**Cis ≠ alltid Z.** Cis/trans beskriver like grupper (f.eks. kjeden), E/Z beskriver grupper med høyest CIP-prioritet. Eksempel: i 1-brom-1-klorpropen kan det være uklart hva som er «cis». Bruk alltid CIP når substituentene er ulike.
:::

## Test deg selv

:::sjekk[Er butan og 2-metylpropan konformerer eller konstitusjonelle isomerer?]
Konstitusjonelle isomerer: begge er C₄H₁₀, men atomene er bundet i ulik rekkefølge (rett kjede vs forgrenet). De kan ikke omdannes ved rotasjon.
:::

:::sjekk[Hvorfor har pent-1-en ikke cis/trans-isomeri, mens pent-2-en har det?]
I pent-1-en bærer C1 to H-atomer – å bytte dem gir samme molekyl. I pent-2-en har både C2 (H, CH₃) og C3 (H, C₂H₅) to ulike grupper, så to geometriske isomerer er mulige.
:::

:::sjekk[Hvorfor sitter en tert-butylgruppe på sykloheksan nesten alltid ekvatorialt?]
I aksial posisjon kolliderer den store gruppen med de aksiale H-atomene på samme side av ringen (sterisk hindring). Ekvatorial posisjon peker utover fra ringen og har lavere energi.
:::

:::sjekk[Hva skiller konformerer fra cis/trans-isomerer?]
Konformerer omdannes ved rotasjon om σ-bindinger uten å bryte bindinger (raskt ved romtemperatur). Cis/trans-isomerer krever brudd på π-bindingen (eller ringen) for å omdannes, og kan isoleres som separate stoffer med ulike egenskaper.
:::

:::sjekk[Er dobbeltbindingen i (CH₃)(H)C=C(CH₃)(CH₂CH₃) E eller Z når de to CH₃-gruppene står på samme side?]
C2: CH₃ > H. C3: CH₂CH₃ > CH₃. De høyest prioriterte gruppene er CH₃ (på C2) og CH₂CH₃ (på C3). Når de to CH₃ er på samme side, står C2-metylen og etylgruppen på motsatt side → **E** – selv om man kunne kalt dette «cis» med tanke på metylgruppene. Navn: (E)-3-metylpent-2-en.
:::

:::sjekk[Hvor mange sekundære alkoholer har formelen C₆H₁₄O? Bruk skjelettmetoden.]
Seks: heksan-2-ol, heksan-3-ol (heksan); 4-metylpentan-2-ol, 2-metylpentan-3-ol (2-metylpentan); 3-metylpentan-2-ol (3-metylpentan); 3,3-dimetylbutan-2-ol (2,2-dimetylbutan). 2,3-dimetylbutan har ingen CH₂ eller CH med to C-naboer, og gir ingen.
:::

:::sjekk[Hvorfor har cis-1,2-dimetylsyklopentan høyere kokepunkt enn trans-isomeren, mens (R)- og (S)-2-butanol har identisk kokepunkt?]
Cis og trans er diastereomerer: ulik geometri gir ulikt dipolmoment (cis har begge CH₃ på samme side → lite netto dipol → sterkere intermolekylære krefter). Enantiomerer er speilbilder med identiske avstander og dipoler, og har derfor like fysiske egenskaper (unntatt optisk aktivitet).
:::
