---
title: SN1-reaksjon
summary: Unimolekylær nukleofil substitusjon i to trinn – den utgående gruppen forlater først og danner et plant karbokation (langsomt, hastighetsbestemmende), deretter angriper nukleofilen fra begge sider. Første ordens kinetikk, favoriseres av 3° substrat, svak nukleofil og polart protisk løsemiddel; gir racemisering.
category: substitusjon
tags: [nukleofil substitusjon, karbokation, solvolyse, racemisering, unimolekylær]
related:
  - organisk-kjemi/reaksjoner/sn2-reaksjon
  - organisk-kjemi/reaksjoner/e1-reaksjon
  - organisk-kjemi/reaksjoner/e2-reaksjon
  - organisk-kjemi/reaksjoner/hydrohalogenering
  - organisk-kjemi/grunnlag/kiralitet-og-r-s
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-2b-3--8128218.pdf
    pages: "5-6, 13-17, 22-24"
  - file: medod1/exercises/oppgaver-sn1-sn2-e1-e2-med-losninger--8122254.pdf
  - file: medod1/exercises/kollokvier-organisk-kjemi--7794158.pdf
  - file: medod1/exercises/kollokvie-organisk-kjemi-medod1-losningsforslag-2024--8157258.doc
  - file: medod1/exams/2025-medod1-ny-v2025-med-svar--7269873.pdf
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
fields:
  Type: Nukleofil substitusjon
  Trinn: 2 (karbokation-intermediat)
  Kinetikk: 1. orden, k[RX]
  Substrat: 3° > 2°
  Løsemiddel: polart protisk
  Stereokjemi: Racemisering (delvis inversjon)
---

## Oversikt

**1 = unimolekylær**: bare alkylhalidet deltar i det hastighetsbestemmende trinnet. Ofte en **solvolyse** – løsemidlet er selv nukleofilen (H₂O gir alkohol, NH₃ gir amin):

$$\ce{(CH3)3C-Br + H2O -> (CH3)3C-OH + HBr}$$

## Mekanisme

**Trinn 1 (langsomt, hastighetsbestemmende):** C–Br-bindingen brytes heterolytisk; elektronparet følger bromet. Det dannes et **karbokation** og Br⁻.

$$\ce{(CH3)3C-Br <=> (CH3)3C^+ + Br^-}$$

**Trinn 2 (raskt):** Nukleofilen (H₂O) angriper karbokationet (elektrofil) med et ledig elektronpar → **protonert alkohol** (oksoniumion).

$$\ce{(CH3)3C^+ + H2O -> (CH3)3C-OH2^+}$$

**Trinn 3 (raskt, protonoverføring):** Et annet vannmolekyl tar H⁺ → alkohol + H₃O⁺.

$$\ce{(CH3)3C-OH2^+ + H2O -> (CH3)3C-OH + H3O^+}$$

```smiles-row
CC(C)(C)Br | 2-brom-2-metylpropan
C[C+](C)C | tert-butylkation (plant, sp²)
CC(C)(C)[OH2+] | protonert alkohol
CC(C)(C)O | 2-metylpropan-2-ol
```

Energidiagram: to topper; den første (ionisering) er høyest. Karbokationet ligger i en «dal» mellom dem.

## Betingelser og faktorer

Siden trinn 1 bestemmer hastigheten, avhenger den av to ting:

1. **Hvor lett den utgående gruppen dissosierer:** RI > RBr > RCl > RF.
2. **Hvor stabilt karbokationet er:** 3° > 2° > 1° > metyl. Alkylgrupper fordeler (stabiliserer) plussladningen.

$$\text{hastighet} = k[\text{alkylhalid}]$$

- **Nukleofilens styrke og konsentrasjon påvirker ikke hastigheten** – den deltar først i det raske trinn 2. Svake nukleofiler (H₂O, ROH, NH₃) er typiske.
- **Polart protisk løsemiddel** (H₂O, metanol, etanol) stabiliserer både karbokationet og den utgående gruppen via solvatisering/hydrogenbindinger → letter ioniseringen.
- **Lav temperatur** favoriserer SN1 framfor konkurrenten E1.

## Produkt og stereokjemi

- Karbokationet er **sp²-hybridisert og plant** → nukleofilen kan angripe fra begge sider.
- Sitter den utgående gruppen på et stereosenter, dannes **et par enantiomerer**: produkt med invertert og med beholdt konfigurasjon. Typisk 50–70 % invertert produkt (den utgående gruppen skjermer forsiden litt i starten). Optisk aktivitet tapes (helt eller delvis).
- Eksempler fra oppgavene:
  - (CH₃)₃C–Br + NH₃ → (CH₃)₃C–NH₂, **2-metylpropan-2-amin**
  - 2-klor-2-metylbutan + H₂O → **2-metylbutan-2-ol**
  - 2-brom-2-metylpentan + H₂O → **2-metylpentan-2-ol**

:::feil
I SN1 dannes **det** et karbokation – i SN2 og E2 gjør det ikke. H2024 spurte hvilket utsagn om (R)-3-brom-3-metylheksan i vann/aceton som var feil: «det dannes ikke karbokation».
:::

## Biologiske eksempler

- Karbokationliknende (oksokarbeniumion-) intermediater opptrer når glykosidbindinger spaltes og dannes – det anomere karbonet i sukker stabiliserer en positiv ladning via ringoksygenet (lærebokkunnskap). Se [acetal og ketal](/medod1/organisk-kjemi/reaksjoner/acetal-og-ketal).
- SN1-tenkningen (stabile karbokationer, protiske medier) brukes også til å forklare [Markovnikovs regel](/medod1/organisk-kjemi/reaksjoner/hydrohalogenering) og [dehydrering av alkoholer](/medod1/organisk-kjemi/reaksjoner/dehydrering-av-alkoholer).

## Sammenlign med

| | SN1 | SN2 |
|---|---|---|
| Trinn | 2, karbokation | 1, konsertert |
| Hastighet | k[RX] | k[RX][Nu] |
| Reaktivitet | 3° > 2° > 1° > metyl | metyl > 1° > 2° > 3° |
| Nukleofil | styrken spiller ingen rolle | jo bedre, jo raskere |
| Stereokjemi | både beholdt og invertert | invertert |
| Utgående gruppe | I⁻ > Br⁻ > Cl⁻ > F⁻ | I⁻ > Br⁻ > Cl⁻ > F⁻ |

- [E1](/medod1/organisk-kjemi/reaksjoner/e1-reaksjon) deler trinn 1 og karbokationet; varme gjør at basen tar et β-H i stedet for å angripe karbonet.

:::eksamen
- V2025: 2-brom-2-metylbutan + svak base i polart protisk løsemiddel → **SN1**. «Hva favoriserer SN1 over SN2?» → polart protisk løsemiddel + tertiært substrat.
- V2026: «SN1 favoriseres av polare protiske løsemidler» (riktig).
- H2023: «SN1/E1-hastigheten er uavhengig av nukleofilkonsentrasjonen» (riktig).
:::

## Test deg selv

:::sjekk[Hvorfor gir SN1 på et stereosenter en blanding av enantiomerer?]
Karbokationet er plant (sp²), så nukleofilen kan angripe fra begge sider. Angrep fra baksiden gir invertert, fra forsiden beholdt konfigurasjon.
:::

:::sjekk[Hvorfor gjør det ikke SN1-reaksjonen raskere å øke [nukleofil]?]
Det hastighetsbestemmende trinnet er ioniseringen R–X → R⁺ + X⁻, der nukleofilen ikke deltar. Hastighet = k[RX].
:::

:::sjekk[Hvorfor reagerer tertiære alkylhalider lett via SN1, mens metylhalider nesten ikke gjør det?]
Tertiære karbokationer stabiliseres av tre alkylgrupper som fordeler plussladningen. Et metylkation har ingen slik stabilisering og dannes praktisk talt ikke.
:::

:::sjekk[Hva blir produktet når 2-brom-2-metylpropan står i ammoniakk under SN1-betingelser?]
2-metylpropan-2-amin, (CH₃)₃C–NH₂: tert-butylkationet dannes først, så angriper NH₃, og til slutt avgis H⁺ fra nitrogenet.
:::

:::sjekk[Hvordan påvirker et polart protisk løsemiddel SN1 og SN2 ulikt?]
Det stabiliserer karbokationet og den utgående gruppen (letter SN1), men solvaterer anioniske nukleofiler sterkt via hydrogenbindinger (bremser SN2).
:::
