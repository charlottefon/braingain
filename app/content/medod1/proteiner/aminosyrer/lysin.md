---
title: Lysin
summary: Basisk aminosyre med ε-aminogruppe (pKa ≈ 10,5). Positivt ladet ved fysiologisk pH; trypsin kløyver etter Lys/Arg.
category: basisk
tags: [basisk, positiv ladning, aminogruppe, trypsin]
related:
  - proteiner/aminosyrer/arginin
  - proteiner/aminosyrer/histidin
  - proteiner/teori/aminosyrer
  - proteiner/teori/proteinmetoder
  - organisk-kjemi/funksjonelle-grupper/aminer
sources:
  - file: medod1/material/proteiner/proteiner-1-am-2026--8186375.pdf
    pages: "8-9, 13, 15"
  - file: medod1/material/proteiner/enzym-2026-1--8215494.pdf
    pages: "6"
  - file: medod1/exercises/kollokvieoppgaver-enzymologi-og-enzym-2025--7794057.pdf
fields:
  Trebokstavkode: Lys
  Énbokstavkode: K
  Sidekjede (kort): –(CH₂)₄–NH₂ (ε-amino)
  pKa sidekjede: "10,5 (tabell 4.3; lysbilde: 10,4)"
  Gruppe i forelesningen: Positivt ladet (basisk)
  Ladning ved pH 7,4: "+1 (sidekjede)"
  Essensiell: ja
---

## Struktur

```smiles L-lysin
N[C@@H](CCCCN)C(=O)O
```

## Sidekjeden

- Fire CH₂ + primær aminogruppe (ε-amino). pKa ≈ **10,5** (lysbilde 13: 10,4).
- Ved pH 7,4 (≪ pKa) beholder den H⁺: **–NH₃⁺**. «Som isolerte aminosyrer beholder Lys og Arg alltid H⁺ ved pH 7,4.»
- Den lange alifatiske delen er hydrofob, men enden er ladd → sitter oftest på proteinoverflaten.

## Biologisk betydning

- **Trypsin** kløyver peptidbindinger på karboksylsiden av **Lys/Arg** (gruppespesifisitet).
- **2,3-BPG-lommen** i deoksy-Hb er positivt ladd (bl.a. β-Lys82, β-His2, β-His143) og binder det negativt ladde 2,3-BPG.
- **K → R** er forelesningens eksempel på **konservativ** substitusjon (begge positive); **K → W** er ikke-konservativ.

:::eksempel[Kollokvie: nettoladning for Ala-Gly-Glu-Lys]
pKa (tabell 4.3): α-NH₃⁺ 8,0; α-COOH 3,1; Glu 4,0; Lys 10,5.

| pH | N-term | Glu | Lys | C-term | Netto |
|---|---|---|---|---|---|
| 1,0 | +1 | 0 | +1 | 0 | **+2** |
| 2,0 | +1 | 0 | +1 | 0 | **+2** |
| 4,5 | +1 | −1 | +1 | −1 | **0** |
| 7,0 | +1 | −1 | +1 | −1 | **0** |
| 12,0 | 0 | −1 | 0 | −1 | **−2** |

(Grupper telles som fullt ladet/uladet etter om pH er under eller over pKa; ved pH 4,5 er Glu ~76 % deprotonert, så netto ≈ 0.)
:::

## Test deg selv

:::sjekk[Hvilken ladning har Lys-sidekjeden ved pH 7,4 og ved pH 12?]
+1 ved pH 7,4 (pH < pKa 10,5 → protonert). 0 ved pH 12 (pH > pKa → deprotonert –NH₂).
:::

:::sjekk[Hvor kløyver trypsin, og hvilken type spesifisitet er det?]
På karboksylsiden av Lys og Arg – gruppespesifisitet (gjenkjenner en type sidekjede, ikke hele substratet).
:::

:::sjekk[Hvorfor får Lys→Arg høyere score enn Lys→Trp i en BLOSUM-matrise?]
Lys→Arg er konservativ (begge positivt ladde), og proteinet tåler den oftere strukturelt og funksjonelt; Lys→Trp bytter ladd mot hydrofob.
:::
