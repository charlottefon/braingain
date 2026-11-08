---
title: Tioler (og disulfider)
summary: R–SH – svovelanalogen til alkoholer. Endelse -tiol, prefiks sulfanyl-. Svakere H-bindinger enn alkoholer, surere enn alkoholer, binder tungmetaller og oksideres til disulfider (R–S–S–R) – grunnlaget for disulfidbroer i proteiner og kelatorer som succimer.
category: nitrogen-svovel
order: 2
tags: [tiol, sulfhydryl, disulfid, cystein, kelator, succimer]
fields:
  Funksjonell gruppe: –SH (sulfhydryl)
  Endelse / prefiks: -tiol / sulfanyl-
  IUPAC-prioritet: like under alkohol, over amin
  Typisk reaksjon: oksidasjon til disulfid
related:
  - organisk-kjemi/funksjonelle-grupper/alkoholer
  - organisk-kjemi/grunnlag/enantiomerer-diastereomerer-meso
  - organisk-kjemi/navnsetting/alkoholer-etere-tioler-aminer
  - proteiner/aminosyrer/cystein
  - proteiner/teori/proteinstruktur
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-1--8106129.pdf
    pages: "26"
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-2a-3--8116857.pdf
    pages: "29"
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
---

## Struktur og gjenkjenning

- **–SH (sulfhydryl-/tiolgruppe)** på et sp³-karbon: R–SH. Svovel står under oksygen i periodesystemet.
- **Disulfid**: R–S–S–R′, dannes ved oksidasjon av to tioler.
- Forelesningene dekker tioler bare i prioritetstabellen og i succimer-eksemplet, men tiolnavn har vært spurt på eksamen (h2025).

```smiles-row
CCS | Etantiol
C/C=C/CS | But-2-en-1-tiol
N[C@@H](CS)C(=O)O | L-cystein
```

## Navnsetting

- Endelse **-tiol** lagt til hele alkannavnet (e-en beholdes): metantiol, etantiol, **propan-1-tiol**, but-2-en-1-tiol (eldre: 2-buten-1-tiol).
- Prioritet (forelesningens tabell): **alkohol (9) > tiol (10) > amin (11)**. Som substituent: **sulfanyl-** (eldre: merkapto-). Eks.: succimer = (2S,3R)-2,3-**bis(sulfanyl)**butandisyre (*bis* brukes for to like sammensatte substituenter).

## Egenskaper

- S er mindre elektronegativ enn O → **svake H-bindinger** → lavere kokepunkt enn tilsvarende alkoholer.
- **Surere enn alkoholer** (pKa ~10 for alkyltioler; cystein-SH ~8): S–H er svakere, og tiolatet (R–S⁻) er større og bedre til å spre ladningen.
- Sterk, ubehagelig lukt (tilsettes naturgass; skunk, hvitløk).
- **Binder tungmetaller** (Pb, Hg, As) sterkt.

## Typiske reaksjoner

- **Oksidasjon til disulfid** (reversibel redoks):
  $$\ce{2 R-SH <=>[ox][red] R-S-S-R + 2H+ + 2e-}$$
- **Kompleksbinding/kelering av metallioner**.
- Tioler er gode nukleofiler (tiolat).

## I biologien

- **Cystein**: tiol-sidekjede; to cysteiner oksideres til **disulfidbro** (cystin) som stabiliserer tertiær-/kvartærstruktur i ekstracellulære proteiner (f.eks. insulin, antistoffer). Se [Cystein](/medod1/proteiner/aminosyrer/cystein) og [Proteinstruktur](/medod1/proteiner/teori/proteinstruktur).
- **Glutation** (GSH ⇌ GSSG): kroppens viktigste intracellulære antioksidant.
- **Koenzym A** (CoA-SH) danner tioestere (acetyl-CoA).
- **Succimer** (meso-2,3-dimerkaptoravsyre): oral **kelator ved blyforgiftning** – tiolgruppene binder bly og fremmer utskillelse i urin. Eksempel på en medisinsk relevant meso-forbindelse.

```smiles Succimer
OC(=O)[C@H](S)[C@@H](C(=O)O)S
```

:::eksamen
h2025: «Hva er IUPAC-navnet på forbindelsen på bildet?» med alternativene «3-buten-1-tiol», «2-buten-1-tiol», «Thiol 2-butyl». Tell C fra SH-karbonet (C1) og finn hvor dobbeltbindingen starter: HS–CH₂–CH=CH–CH₃ = but-2-en-1-tiol; HS–CH₂–CH₂–CH=CH₂ = but-3-en-1-tiol. v2025: «Hva kjennetegner en tiol?» → sulfhydrylgruppe (–SH) bundet til et karbon (ikke –S– mellom to C = sulfid); «hvilken biologisk forbindelse har –SH?» → **cystein**.
:::

## Test deg selv

:::sjekk[Hvorfor har etantiol (kp ~35 °C) mye lavere kokepunkt enn etanol (78 °C)?]
S–H er nesten upolar sammenlignet med O–H (S er mindre elektronegativ), så tioler danner bare svake hydrogenbindinger.
:::

:::sjekk[Hva skjer kjemisk når en disulfidbro dannes i et protein?]
To cystein-SH oksideres: hver mister H (H⁺ + e⁻), og det dannes en kovalent S–S-binding. Reduksjon (f.eks. med glutation eller merkaptoetanol i lab) bryter den igjen.
:::

:::sjekk[Gi IUPAC-navnet på HS–CH₂–CH=CH–CH₃.]
But-2-en-1-tiol. SH-gruppen (høyest prioritet) får C1, dobbeltbindingen starter på C2.
:::
