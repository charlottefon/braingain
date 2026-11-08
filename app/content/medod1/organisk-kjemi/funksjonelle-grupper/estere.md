---
title: Estere
summary: R–C(=O)–O–R′ – karboksylsyrederivat dannet fra karboksylsyre + alkohol (esterifisering, kondensasjon, syrekatalysert, reversibel). Navn alkylalkanoat. Ingen O–H → lavere kokepunkt enn syrer. Hydrolyseres til syre + alkohol. Triacylglyseroler, fosfolipider, aspirin.
category: karbonyl
order: 4
tags: [ester, esterifisering, hydrolyse, kondensasjon, triglyserid, aspirin]
fields:
  Funksjonell gruppe: R–COO–R′
  Navn: alkyl-alkanoat (etylbutanoat)
  Dannelse: syre + alkohol ⇌ ester + H₂O
  H-binding: bare akseptor
related:
  - organisk-kjemi/funksjonelle-grupper/karboksylsyrer
  - organisk-kjemi/funksjonelle-grupper/alkoholer
  - organisk-kjemi/funksjonelle-grupper/amider
  - organisk-kjemi/funksjonelle-grupper/etere
  - organisk-kjemi/navnsetting/karboksylsyrer-og-derivater
  - organisk-kjemi/reaksjoner/forestring
  - organisk-kjemi/reaksjoner/esterhydrolyse-og-forsaapning
  - organisk-kjemi/biomolekyler/lipider
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-4b--8131296.pdf
    pages: "5, 8, 12-15"
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-3a--8116858.pdf
    pages: "11"
  - file: medod1/exercises/oppgaver-karboksylsyrer-estere-amider--8156716.pdf
  - file: medod1/exercises/oppgaver-alkoholer-fenoler-etere--8156711.pdf
  - file: medod1/exercises/kollokvier-organisk-kjemi--7794158.pdf
---

## Struktur og gjenkjenning

- **R–C(=O)–O–R′**: karbonyl-C bundet til et O som igjen er bundet til en karbongruppe. Syredelen (acyl, R–CO–) + alkoholdelen (–OR′).
- Skill fra eter (R–O–R′, ingen C=O) og syre (R–COOH, H på O).
- **Laktoner** = sykliske estere.

```smiles-row
CC(=O)OCC | Etyletanoat (etylacetat)
CCCC(=O)OCC | Etylbutanoat
CCC(=O)OCC | Etylpropanoat
```

## Navnsetting

To ord/ledd: **alkylgruppen fra alkoholen** først, så **syredelen med -oat** (eng. -oate): CH₃CH₂C(=O)OCH₂CH₃ = **etylpropanoat**; CH₃CH₂CH₂COOCH₂CH₃ = **etylbutanoat**; CH₃COOCH₃ = metyletanoat (metylacetat). Syrekjeden nummereres fra karbonylkarbonet. Som substituent: alkoksykarbonyl- (–COOR) eller acyloksy- (–OCOR, f.eks. 2-(etanoyloksy)benzosyre = aspirin).

:::feil
Hvilken del er «etyl» og hvilken er «-oat»? Delen bundet til **karbonyl-C** (inkludert C=O) gir *-oat*-navnet; delen bundet til **O** gir *alkyl*-navnet. Etylmetanoat (HCOOCH₂CH₃) ≠ metyletanoat (CH₃COOCH₃) – men de er konstitusjonelle isomerer.
:::

## Egenskaper

- Polare, men **ingen O–H** → kan ikke H-binde til hverandre → **lavere kokepunkt** enn tilsvarende syrer og alkoholer.
- Små estere er flyktige med fruktig lukt (aroma).
- Aksepterer H-bindinger fra vann → små estere noe vannløselige.

## Typiske reaksjoner

- **Dannelse ([forestring](/medod1/organisk-kjemi/reaksjoner/forestring))**: karboksylsyre + alkohol ⇌ ester + vann. **Kondensasjonsreaksjon** (H₂O avspaltes), **reversibel**, krever vanligvis **syrekatalysator (H⁺)**.
  $$\ce{CH3COOH + C2H5OH <=>[H+] CH3COOC2H5 + H2O}$$
- **[Hydrolyse](/medod1/organisk-kjemi/reaksjoner/esterhydrolyse-og-forsaapning)** (omvendt): ester + vann → syre + alkohol (syre- eller enzymkatalysert; basisk hydrolyse = forsåpning gir karboksylatsalt/såpe).
- **Reduksjon**: LiAlH₄ (ikke NaBH₄) → alkoholer.

:::eksempel[Sur hydrolyse av en ester (jf. kollokvieoppgave 15): CH₃CH₂–CH(CH₃)–C(=O)–O–CH₂CH₃]
Bryt bindingen mellom karbonyl-C og ester-O, tilsett H₂O:
- Syredel: CH₃CH₂CH(CH₃)COOH = **2-metylbutansyre**
- Alkoholdel: HOCH₂CH₃ = **etanol**
:::

## I biologien

- **Triacylglyseroler (triglyserider)** ([Lipider](/medod1/organisk-kjemi/biomolekyler/lipider)): glyserol + 3 fettsyrer bundet med **esterbindinger** (+ 3 H₂O) – energilager i adipocytter.
- **Fosfolipider** (esterbindinger til fettsyrer og fosfat), **kolesterolestere** (lagringsform).
- **Acetylkolin** er en ester (spaltes av acetylkolinesterase).
- **Aspirin (acetylsalisylsyre)**: ester mellom eddiksyre og det fenoliske OH i salisylsyre; syntetiseres fra salisylsyre + eddiksyreanhydrid. Hemmer **irreversibelt** COX-1 og COX-2 (↓ prostaglandiner og tromboksan): smertestillende, febernedsettende, antiinflammatorisk, platehemmende. **Esteraser** hydrolyserer aspirin til salisylsyre + eddiksyre. Pilebark (*Salix*) ble brukt mot smerte og feber helt fra Hippokrates' tid.
- Tioestere (acetyl-CoA) er energirike estervarianter i metabolismen.

```smiles-row
CC(=O)Oc1ccccc1C(=O)O | Acetylsalisylsyre (aspirin)
CC(=O)OCC[N+](C)(C)C | Acetylkolin
```

## Test deg selv

:::sjekk[Hva dannes når etansyre reagerer med etanol under sure betingelser?]
Etyletanoat (etylacetat) og vann – en reversibel, syrekatalysert kondensasjon (esterifisering).
:::

:::sjekk[Hvorfor har etylacetat lavere kokepunkt enn butansyre (begge C₄H₈O₂)?]
Esteren har ingen O–H og kan ikke danne H-bindinger mellom egne molekyler. Butansyre danner sterke H-bundne dimerer.
:::

:::sjekk[Hvilke bindinger brytes når lipase fordøyer et triglyserid, og hva blir produktene?]
Esterbindingene mellom glyserol og fettsyrene hydrolyseres (vann adderes). Produktene er frie fettsyrer (karboksylater) og glyserol / monoacylglyserol.
:::

:::sjekk[Hva er IUPAC-navnet på CH₃–CH₂–C(=O)–O–CH₂–CH₃?]
Etylpropanoat: alkoholdelen er etyl, syredelen har tre C inkludert karbonyl-C (propanoat).
:::
