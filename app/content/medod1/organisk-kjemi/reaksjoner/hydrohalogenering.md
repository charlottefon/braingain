---
title: Hydrohalogenering og Markovnikovs regel
summary: Elektrofil addisjon av HBr eller HCl til et alken gir et alkylhalid. Ved usymmetriske alkener følger reaksjonen Markovnikovs regel – H går til C-atomet som allerede har flest H, X til det mest substituerte, fordi det mest stabile karbokationet dannes.
category: addisjon
tags: [addisjon, alken, Markovnikov, HBr, karbokation, elektrofil addisjon]
related:
  - organisk-kjemi/reaksjoner/hydratisering
  - organisk-kjemi/reaksjoner/halogenering-av-alkener
  - organisk-kjemi/reaksjoner/hydrogenering
  - organisk-kjemi/reaksjoner/sn1-reaksjon
  - organisk-kjemi/funksjonelle-grupper/alkener
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-1--8106129.pdf
    pages: "55, 59-60"
  - file: medod1/exercises/oppgaver-til-forlesning-oc1-organiske-reaksjoner--8112303.pdf
  - file: medod1/exercises/kollokvier-organisk-kjemi--7794158.pdf
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2025-medod1-ny-v2025-med-svar--7269873.pdf
  - file: medod1/exams/2024-medod1-ny-v2024-med-svar--5897534.pdf
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
fields:
  Type: Elektrofil addisjon
  Reagens: HBr, HCl
  Regioselektivitet: Markovnikov
  Intermediat: Karbokation
  Produkt: Alkylhalid
---

## Oversikt

Alkener reagerer med HBr → bromalkaner og med HCl → kloralkaner. π-bindingen brytes og H og X legges til hvert sitt karbon:

$$\ce{CH3-CH=CH2 + HBr -> CH3-CHBr-CH3}$$

**Markovnikovs regel:** I addisjon av HX til et **usymmetrisk substituert** alken går **H til det dobbeltbindingskarbonet som har flest H-atomer**, og X til karbonet med færrest H. (Mnemonic: «de rike blir rikere».)

## Mekanisme

To trinn (lærebokmekanisme; forelesningen viser den analoge mekanismen for aromater):

1. **Protonering:** π-elektronene i C=C angriper H i H–Br (elektrofil); H–Br-elektronene går til Br. H bindes til C=C-karbonet med **flest H** (CH₂-enden), slik at plussladningen havner på det mest substituerte karbonet → **det mest stabile karbokationet**.
2. **Nukleofilt angrep:** Br⁻ angriper karbokationet → alkylhalid.

Propen + HBr:

$$\ce{CH3-CH=CH2 + H^+ -> CH3-CH^+-CH3}\quad(2^\circ\text{, foretrukket fremfor } 1^\circ\ \ce{CH3CH2CH2^+})$$
$$\ce{CH3-CH^+-CH3 + Br^- -> CH3-CHBr-CH3}$$

```smiles-row
CC=C | propen
C[CH+]C | 2°-karbokation
CC(C)Br | 2-brompropan
```

## Betingelser og faktorer

- Ingen katalysator nødvendig; HX er selv elektrofilen (syre).
- Markovnikov-regelen gjelder bare **usymmetriske** alkener (ulikt antall H på de to C=C-karbonene). Symmetriske alkener (eten, but-2-en) gir ett produkt uansett.
- Forklaringen er karbokationstabilitet: 3° > 2° > 1°.

## Produkt og stereokjemi

| Alken | + HX | Hovedprodukt |
|---|---|---|
| Propen | HBr | **2-brompropan** (akiralt – ingen R/S) |
| 2-metylpropen | HBr | **2-brom-2-metylpropan** (1-brom-2-metylpropan kun spor) |
| But-1-en | HBr | **2-brombutan** – racemat (R + S) |
| 2-metylbut-1-en | HCl | 2-klor-2-metylbutan |

**Stereokjemi:** karbokationet er plant, så Br⁻ angriper fra begge sider. Dannes et nytt stereosenter (but-1-en → 2-brombutan), blir produktet **racemisk** (50/50 R og S). 2-brompropan har to like metylgrupper og er akiralt.

```smiles-row
CCC=C | but-1-en
CCC(C)Br | 2-brombutan (racemat)
```

:::feil
Ikke svar «(R)-2-brompropan» eller «50/50 R/S-2-brompropan» – 2-brompropan har ingen stereosenter (to CH₃ på samme C). For 2-brombutan er racemat riktig. Begge variantene har vært gitt som alternativer (H2025, V2024, H2023).
:::

## Biologiske eksempler

HX-addisjon skjer ikke i kroppen, men prinsippet – protonering av en C=C som gir det mest stabile karbokationet – går igjen i enzymkatalysert [hydratisering](/medod1/organisk-kjemi/reaksjoner/hydratisering) og i biosyntesen av terpener/steroider (kolesterol).

## Sammenlign med

- [Hydratisering](/medod1/organisk-kjemi/reaksjoner/hydratisering): H₂O i stedet for HX, syrekatalysert, også Markovnikov → alkohol.
- [Halogenering](/medod1/organisk-kjemi/reaksjoner/halogenering-av-alkener): X₂ – begge karbonene får X, så Markovnikov er irrelevant.
- [SN1](/medod1/organisk-kjemi/reaksjoner/sn1-reaksjon): samme karbokationlogikk og samme racemisering.

:::eksamen
HBr + alken kommer på hver eksamen: V2026 (HBr + 1-buten → **2-brombutan**), H2025, V2025 og H2023 (propen + HBr → **2-brompropan**; «Br går til C med færrest H»), V2024 (1-buten + HBr → **både (R)- og (S)-2-brombutan**), kollokviet (2-metylbut-1-en + HCl → 2-klor-2-metylbutan).
:::

## Test deg selv

:::sjekk[Formuler Markovnikovs regel og gi den kjemiske forklaringen.]
H adderes til det C=C-karbonet som allerede har flest H; X går til det andre. Forklaring: protoneringen skjer slik at det mest stabile (mest substituerte) karbokationet dannes, og X⁻ binder seg der plussladningen er.
:::

:::sjekk[Hva blir hovedproduktet av HBr + 2-metylpropen?]
2-brom-2-metylpropan, (CH₃)₃CBr – via tertiært karbokation.
:::

:::sjekk[Hvorfor blir 2-brombutan fra but-1-en + HBr racemisk?]
Karbokationet (CH₃CH⁺CH₂CH₃) er plant; Br⁻ angriper fra begge sider med like stor sannsynlighet, og C2 blir et nytt stereosenter → 50/50 R og S.
:::

:::sjekk[Gjelder Markovnikovs regel for but-2-en + HBr?]
Nei – but-2-en er symmetrisk (ett H på hvert C=C-karbon), så begge adderingsretninger gir 2-brombutan.
:::
