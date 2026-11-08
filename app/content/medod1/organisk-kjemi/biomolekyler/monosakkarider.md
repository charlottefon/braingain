---
title: Monosakkarider – klassifisering, Fischer og D/L
summary: Karbohydrater er polyhydroksyaldehyder (aldoser) eller -ketoner (ketoser). Klassifiseres etter karbonylgruppe og antall C (aldoheksose, ketopentose …). Fischer-projeksjon med karbonyl øverst; D/L bestemmes av OH på det kirale C-atomet lengst fra karbonylgruppen. Epimerer, diastereomerer og enantiomerer.
order: 1
tags: [karbohydrat, monosakkarid, aldose, ketose, Fischer, D/L, epimer, enantiomer, diastereomer]
related:
  - organisk-kjemi/biomolekyler/syklisering-og-anomerer
  - organisk-kjemi/reaksjoner/hemiacetal-og-hemiketal
  - organisk-kjemi/reaksjoner/keto-enol-tautomeri
  - organisk-kjemi/grunnlag/enantiomerer-diastereomerer-meso
  - organisk-kjemi/grunnlag/kiralitet-og-r-s
  - lab/ovelser/karbohydrater
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-5--8135969.pdf
    pages: "2-12, 18"
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-2a-3--8116857.pdf
    pages: "15-16, 25-27"
  - file: medod1/exercises/karbohydrater-oppgaver--8155388.pdf
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2024-medod1-ny-v2024-med-svar--5897534.pdf
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
---

## Definisjon

**Karbohydrater** er organiske forbindelser av C, H og O, kjemisk definert som **polyhydroksyaldehyder eller polyhydroksyketoner**, eller forbindelser som gir slike ved hydrolyse. De fleste monosakkarider har formelen CₙH₂ₙOₙ = Cₙ(H₂O)ₙ.

- **Monosakkarider** (kan ikke hydrolyseres videre), **oligosakkarider** (2–ca. 10 enheter, f.eks. disakkarider), **polysakkarider**.
- **Biologiske funksjoner:** energi (glukose → glykolyse → ATP), lager (glykogen i dyr, stivelse i planter), struktur (cellulose, glykosaminoglykaner i ekstracellulærmatriks), cellegjenkjenning (glykoproteiner, glykolipider, blodtyper), byggesteiner i nukleinsyrer (ribose i RNA, 2-deoksyribose i DNA).

## Klassifisering

- **Aldose** = aldehyd (–CHO på C1). **Ketose** = keton (C=O vanligvis på C2).
- Antall C: tri-, tetr-, pent-, heks-, hept-ose.
- Navnet slår sammen: **aldoheksose** (glukose, galaktose, mannose), **ketoheksose** (fruktose), **aldopentose** (ribose), **aldotriose** (glyseraldehyd), **aldotetrose** (erytrose), **ketoheptose** (sedoheptulose).
- Karbonene nummereres fra enden nærmest karbonylgruppen (øverst i Fischer).

```smiles-row
O=C[C@H](O)CO | D-glyseraldehyd (aldotriose)
C([C@H]([C@H]([C@@H]([C@H](C=O)O)O)O)O)O | D-glukose (aldoheksose)
C([C@H]([C@H]([C@@H](C(=O)CO)O)O)O)O | D-fruktose (ketoheksose)
```

:::feil
«Fruktose er en aldose» / «ribose er en ketose» – omvendt! Ribose er en aldopentose (V2025: «hvilket karbohydrat er en aldose?» → ribose; maltose og sukrose er disakkarider, fruktose er ketose).
:::

## Fischer-projeksjon

- Hvert stereosenter tegnes som et kryss: **horisontale** linjer = bindinger **ut mot betrakteren**, **vertikale** linjer = bindinger **bak papiret**.
- For sukker står **karbonylgruppen øverst** (C1 for aldoser), CH₂OH nederst.
- Rotasjon 90° i papirplanet bytter horisontal/vertikal og **inverterer** konfigurasjonen – ikke gjør det. 180° er lov.

**D-glukose** i Fischer (fra toppen): CHO; H–C–OH (C2, OH høyre); HO–C–H (C3, OH venstre); H–C–OH (C4, høyre); H–C–OH (C5, høyre); CH₂OH. Huskeregel: «høyre, venstre, høyre, høyre».

| D-aldoheksose | C2 | C3 | C4 | C5 | Forhold til D-glukose |
|---|---|---|---|---|---|
| D-glukose | H | V | H | H | – |
| D-mannose | **V** | V | H | H | C2-epimer |
| D-allose | H | **H** | H | H | C3-epimer |
| D-galaktose | H | V | **V** | H | C4-epimer |

(H = OH til høyre, V = OH til venstre.)

## D- og L-konfigurasjon

- Fischers system (eldre enn R/S, brukes fortsatt for sukker og aminosyrer).
- Se på det **kirale karbonet lengst fra karbonylgruppen** (det konfigurasjonsbestemmende, i heksoser C5): OH **til høyre = D**, OH **til venstre = L**.
- Referanse: D-glyseraldehyd (OH til høyre på C2). Nesten alle naturlige sukker er **D**.
- D/L sier **ingenting** om retningen sukkeret dreier planpolarisert lys (+/−): D-glukose er (+), D-fruktose er (−).

:::eksamen
D/L kommer igjen og igjen: V2026 og V2024 («hva bestemmer D/L?» → OH på stereogent C **lengst fra karbonylgruppen**, ikke lysrotasjon, ikke det anomere C), H2024 og H2023 (les av Fischer: D- eller L-form), H2024 (antall kirale C i en åpen aldo**heptose** = 5), H2025 (navngi D-fruktose fra Fischer; antall kirale C i åpen fruktose = 3).
:::

## Antall stereoisomerer – og hvilke slags

- Endekarbonene (CHO og CH₂OH) er ikke kirale – tell bare CHOH-ene imellom. Åpen **aldoheksose: 4 stereosentre (C2–C5) → 2⁴ = 16 stereoisomerer** (8 D + 8 L). Åpen **ketoheksose: 3 (C3–C5) → 8**. Åpen aldoheptose: 5 (C2–C6). I ringform kommer det anomere C i tillegg (glukopyranose: 5).
- **[Enantiomerer](/medod1/organisk-kjemi/grunnlag/enantiomerer-diastereomerer-meso)**: speilbilder; *alle* stereosentre er motsatt (D-glukose og L-glukose).
- **Diastereomerer**: stereoisomerer som ikke er speilbilder; ulik konfigurasjon på ett eller flere, men ikke alle, sentre (D-glukose og D-galaktose).
- **Epimerer**: diastereomerer som skiller seg på **nøyaktig ett** stereosenter (D-mannose = C2-epimer, D-galaktose = C4-epimer av D-glukose).
- **Anomerer**: spesielle epimerer som skiller seg bare på det **anomere C** i ringform (α/β) – se [syklisering](/medod1/organisk-kjemi/biomolekyler/syklisering-og-anomerer).

:::feil
«Epimerer er ikke-overleggbare speilbilder» (H2025) og «diastereomerer er speilbilder» (V2024) er feil – det beskriver enantiomerer. Pass også på å telle karbonene: H2024 viste en åpen aldo**heptose** (7 C, fem CHOH) – svaret var 5, ikke 4 som for en heksose.
:::

## Viktige monosakkarider

| Sukker | Type | Merk |
|---|---|---|
| D-glukose | aldoheksose | blodsukker, hovedbrensel |
| D-galaktose | aldoheksose | C4-epimer av glukose; i laktose |
| D-mannose | aldoheksose | C2-epimer av glukose |
| D-fruktose | ketoheksose | fruktsukker; i sukrose; reduserende via endiol |
| D-ribose | aldopentose | RNA, ATP, NAD, CoA, cAMP |
| 2-deoksy-D-ribose | aldopentose | DNA; mangler OH på C2 |

Avledede sukker: **glukuronat** (C6 oksidert til COO⁻), **glukosamin** (C2-OH → NH₂), **N-acetylglukosamin** (GlcNAc, i kitin).

## Test deg selv

:::sjekk[Hvordan avgjør du om et sukker i Fischer-projeksjon er D eller L?]
Finn det kirale C-atomet lengst fra karbonylgruppen (nederste stereosenter). OH til høyre = D, til venstre = L.
:::

:::sjekk[Hva er forholdet mellom D-glukose og D-galaktose, og mellom D-glukose og L-glukose?]
D-glukose/D-galaktose: epimerer (ulik bare på C4), altså diastereomerer. D-/L-glukose: enantiomerer (alle sentre motsatt).
:::

:::sjekk[Hvor mange stereosentre har åpen D-fruktose, og hvor mange stereoisomerer gir det?]
Tre (C3, C4, C5) → 2³ = 8 ketoheksose-stereoisomerer.
:::

:::sjekk[Sier «D» noe om hvilken vei sukkeret dreier planpolarisert lys?]
Nei. D/L er en strukturell konvensjon; dreieretningen (+/−) må måles. D-fruktose er venstredreiende.
:::

:::sjekk[Klassifiser ribose og fruktose fullstendig.]
Ribose: aldopentose (aldehyd på C1, 5 C). Fruktose: ketoheksose (keton på C2, 6 C).
:::
