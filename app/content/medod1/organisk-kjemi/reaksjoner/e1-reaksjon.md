---
title: E1-reaksjon
summary: Unimolekylær eliminasjon i to trinn – alkylhalidet dissosierer til et karbokation (langsomt), deretter fjerner en svak base et β-H og det dannes et alken. Første ordens kinetikk; 3° > 2° substrat, svak base, polart protisk løsemiddel og høy temperatur.
category: eliminasjon
tags: [eliminasjon, karbokation, alken, unimolekylær, svak base]
related:
  - organisk-kjemi/reaksjoner/e2-reaksjon
  - organisk-kjemi/reaksjoner/sn1-reaksjon
  - organisk-kjemi/reaksjoner/dehydrering-av-alkoholer
  - organisk-kjemi/reaksjoner/sn2-reaksjon
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-2b-3--8128218.pdf
    pages: "18, 21-24"
  - file: medod1/exercises/oppgaver-sn1-sn2-e1-e2-med-losninger--8122254.pdf
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
fields:
  Type: Eliminasjon
  Trinn: 2 (karbokation-intermediat)
  Kinetikk: 1. orden, k[RX]
  Substrat: 3° > 2°
  Reagens: svak base (H₂O, ROH)
  Produkt: Alken (mest substituerte)
---

## Oversikt

E1 er eliminasjonens «SN1-tvilling». Samme første trinn (karbokationdannelse), men i andre trinn tar basen et proton fra β-karbonet i stedet for å angripe det positive karbonet:

$$\ce{(CH3)3C-Br ->[H2O][\Delta] CH2=C(CH3)2 + H3O^+ + Br^-}$$

## Mekanisme

**Trinn 1 (langsomt):** Alkylhalidet dissosierer – C–Br brytes heterolytisk, elektronparet går til Br:

$$\ce{(CH3)3C-Br <=> (CH3)3C^+ + Br^-}$$

**Trinn 2 (raskt):** En svak base (H₂O) tar et proton fra et **β-karbon** (nabo til C⁺). Elektronparet fra C–H-bindingen flytter inn og danner π-bindingen til det positive karbonet:

$$\ce{(CH3)3C^+ + H2O -> CH2=C(CH3)2 + H3O^+}$$

```smiles-row
CC(C)(C)Br | 2-brom-2-metylpropan
C[C+](C)C | karbokation
C=C(C)C | 2-metylpropen
```

## Betingelser og faktorer

- **Substrat:** hovedsakelig 3°, noen ganger 2° (stabilt karbokation).
- **Base:** svak (H₂O, ROH) – en sterk base ville gitt E2.
- **Løsemiddel:** polart protisk, stabiliserer ionene.
- **Temperatur:** høy temperatur favoriserer E1 over SN1.

$$\text{hastighet} = k[\text{alkylhalid}]$$

## Produkt og stereokjemi

- Hovedprodukt er **det mest substituerte alkenet** (mest stabilt; «Zaitsevs regel» i lærebøker):
  - 2-brom-2-metylbutan → **2-metylbut-2-en**, (CH₃)₂C=CH–CH₃
  - 2-brom-2-metylpentan → **2-metylpent-2-en**
  - 2-brom-2-metylpropan (varmes i vann) → 2-metylpropen
- SN1 konkurrerer alltid (samme karbokation) – produktet blir ofte en blanding av alkohol og alken.

## Biologiske eksempler

- [Syrekatalysert dehydrering av alkoholer](/medod1/organisk-kjemi/reaksjoner/dehydrering-av-alkoholer) er en E1-reaksjon for 3° (og delvis 2°) alkoholer: protonering → H₂O forlater → karbokation → tap av H⁺.
- I kroppen katalyserer dehydrataser tilsvarende fjerning av vann (fumarase: malat ⇌ fumarat), men via enzymmekanismer uten frie karbokationer.

## Sammenlign med

| | E1 | E2 |
|---|---|---|
| Trinn | 2, karbokation | 1, konsertert |
| Base | svak | sterk |
| Hastighet | k[RX] | k[RX][base] |
| Substrat | 3° > 2° | 2°, 3° |

[SN1](/medod1/organisk-kjemi/reaksjoner/sn1-reaksjon): samme intermediat; lav temperatur → substitusjon, høy → eliminasjon.

:::feil
«E1 krever sterk base» er feil (H2024). E1 skjer med **svak** base; sterk base gir E2.
:::

## Test deg selv

:::sjekk[Hva er felles for SN1 og E1, og hva avgjør hvilken som dominerer?]
Begge er unimolekylære og går via samme karbokation. Lav temperatur og nukleofilt angrep gir SN1; høy temperatur gir E1.
:::

:::sjekk[Hvilket alken dannes hovedsakelig fra 2-brom-2-metylbutan under E1-betingelser?]
2-metylbut-2-en, (CH₃)₂C=CHCH₃ – det mest substituerte alkenet (trisubstituert) dominerer over 2-metylbut-1-en.
:::

:::sjekk[Hvorfor påvirker ikke basens konsentrasjon hastigheten av E1?]
Basen deltar bare i det raske trinn 2. Det langsomme trinnet er ioniseringen av alkylhalidet.
:::
