---
title: Dominerende form og andel protonert ved gitt pH
summary: Sammenlign pH med pKa. Er pH < pKa, dominerer den protonerte formen, og er pH > pKa, dominerer den deprotonerte. For flerprotiske syrer dominerer formen som ligger mellom de to pKa-verdiene som omgir pH. Andelen regner du med HH, f.eks. er ca. 9 % protonert ved pH = pKa + 1.
category: buffer
order: 6
tags: [protolyttfordeling, dominerende form, protonert, deprotonert, flerprotisk syre, fosforsyre, karbonsyre, sitronsyre, histidin, Henderson-Hasselbalch]
related:
  - generell-kjemi/teori/flerprotiske-syrer-og-aminosyrer
  - generell-kjemi/regnetyper/henderson-hasselbalch
  - generell-kjemi/regnetyper/isoelektrisk-punkt
  - generell-kjemi/teori/karbonsyre-og-blodets-ph
  - proteiner/teori/aminosyrer
  - proteiner/aminosyrer/histidin
  - cellebiologi/sammensatte-tema/saliva-og-salivas-kjemi
sources:
  - file: medod1/material/generell-kjemi/forelesning-4-2026--8041090.pdf
    pages: "8-15, 62"
  - file: medod1/material/generell-kjemi/titrering-revidert-petri2020-1-1--7794025.pdf
    pages: "2"
  - file: medod1/exercises/kollokvium1-losningsforslag-2026--8121960.pdf
    pages: "2, 8"
  - file: medod1/exercises/oppgavesett2-2026-fasit--8047656.pdf
    pages: "7"
  - file: medod1/exams/2025-medod1-ny-v2025-med-svar--7269873.pdf
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
  - file: medod1/exams/2022-medod1-h2022-med-svar--4750110.pdf
  - file: medod1/exams/2023-medod1-ny-v2023-med-svar--5194537.pdf
fields:
  Tommelregel: "pH < pKa → protonert; pH > pKa → deprotonert"
  Andel protonert: "1 / (1 + 10^(pH − pKa))"
  pKa ± 1: "91 % / 9 % (forhold 10 : 1)"
---

## Når brukes den

- «Hvilken form dominerer ved pH x?» for fosforsyre, karbonsyre, sitronsyre eller aminosyrer.
- «Er gruppen protonert ved fysiologisk pH?» (COOH, NH₃⁺, His-sidekjede).
- «Hvor stor andel er protonert ved pH = pKa + 1?» og lignende.
- Skisse av protolyttfordeling (kollokvium, lab).

## Formler

Fra Henderson–Hasselbalch:
$$\frac{[\ce{A-}]}{[\ce{HA}]} = 10^{\,\text{pH} - \text{p}K_a}$$

$$\text{andel protonert} = \frac{[\ce{HA}]}{[\ce{HA}] + [\ce{A-}]} = \frac{1}{1 + 10^{\,\text{pH}-\text{p}K_a}}$$

| pH − pKa | [A⁻]/[HA] | % protonert |
|---|---|---|
| −2 | 0,01 | 99 % |
| −1 | 0,1 | 91 % |
| 0 | 1 | 50 % |
| +1 | 10 | 9 % |
| +2 | 100 | 1 % |

**Flerprotisk syre** (forelesning 4): på et «kart» over pH-aksen med pKa-verdiene som skillelinjer dominerer formen mellom de to pKa-ene som omgir pH. Midt mellom to pKa-verdier foreligger nesten alt som **amfolytt** (pH = (pKa₁ + pKa₂)/2).

Kursets kart (ionestyrke 0,2 M):

| Syre | pKa-verdier | Former |
|---|---|---|
| Karbonsyre | 6,38 · 10,32 | H₂CO₃ · HCO₃⁻ · CO₃²⁻ (amfolytt ved 8,35) |
| Fosforsyre | 1,99 · 6,84 · 11,65 | H₃PO₄ · H₂PO₄⁻ · HPO₄²⁻ · PO₄³⁻ (amfolytter ved 4,4 og 9,2; lysbildet runder til 4,5 og 9,3) |
| Sitronsyre | 2,97 · 4,42 · 5,81 | H₃A · H₂A⁻ · HA²⁻ · A³⁻ |

## Fremgangsmåte

1. Skriv opp formene i rekkefølge fra mest til minst protonert, med pKa-verdiene imellom.
2. Plasser pH på aksen. Den formen som ligger i intervallet der pH er, dominerer.
3. Ligger pH nær en pKa (±1), er begge nabo-formene til stede i betydelig mengde (buffer).
4. For tallsvar: regn $10^{\text{pH}-\text{p}K_a}$ og deretter andelen.

## Regneeksempel

:::eksempel[Regneeksempel: fosforsyre ved pH 8 (eksamen V2025)]
Ka₁ = 6,9·10⁻³, Ka₂ = 6,2·10⁻⁸, Ka₃ = 4,8·10⁻¹³ ⇒ pKa = 2,16; 7,21; 12,32.
pH 8 ligger mellom pKa₂ (7,21) og pKa₃ (12,32) ⇒ **HPO₄²⁻** dominerer.
Forhold: [HPO₄²⁻]/[H₂PO₄⁻] = 10^(8 − 7,21) = 10^0,79 ≈ 6.
:::

:::eksempel[Regneeksempel: sitrat og karbonsyre ved pH 7,4 (forelesning 4)]
**Sitronsyre** (pKa 2,97 / 4,42 / 5,81): 7,4 > 5,81 ⇒ **A³⁻ (sitrat)** dominerer. Alle tre karboksylatgruppene er negative og kan binde Ca²⁺, og derfor brukes sitrat som antikoagulasjonsmiddel i blodprøver.
**Karbonsyre** (pKa 6,38 / 10,32): 7,4 ligger mellom, så **HCO₃⁻** dominerer. 6,38 er forelesningsverdien for H₂CO₃/HCO₃⁻. I blod brukes den tilsynelatende pKa = 6,1 for CO₂(aq)/HCO₃⁻ ved 37 °C, se [karbonsyre og blodets pH](/medod1/generell-kjemi/teori/karbonsyre-og-blodets-ph).
:::

:::eksempel[Regneeksempel: andel protonert (eksamen H2023) og histidin]
**a)** pH = pKa + 1: [A⁻]/[HA] = 10 ⇒ andel protonert = 1/11 = **9 %** (alternativer 91 / 1 / 99 / 9 %).

**b)** [Histidin](/medod1/proteiner/aminosyrer/histidin)-sidekjede, pKa 6,0, ved pH 7,4: 1/(1 + 10^1,4) = 1/(1 + 25,1) = **3,8 %** protonert. Sidekjeden er altså stort sett **uladet** og har et fritt elektronpar som kan binde metallioner (Zn²⁺ i karbonsyreanhydrase). Ved pH 5 er den 1/(1 + 0,1) = 91 % protonert, altså positiv (H2025: «ladningen er positiv»).

**c)** Triprotisk syre med pKa 2, 5 og 9 (kollokvium 1, oppg. 3):
- pH 1 = pKa₁ − 1: H₃A dominerer, med [H₂A]/[H₃A] = 0,1.
- pH 7 ligger midt mellom 5 og 9: amfolytten (2. deprotoneringsform) dominerer.
- pH 11: bare den fullt deprotonerte formen.
:::

## Vanlige feil

:::feil
- **Snu regelen.** pH **under** pKa betyr protonert. Tenk «mye H⁺ i løsningen → gruppen beholder H⁺».
- **Glemme at pKa-verdiene avhenger av miljøet.** Kurset bruker konstanter for ionestyrke 0,2 M (fosforsyre pKa₂ = 6,84, ikke 7,2), og i proteiner kan sidekjedenes pKa forskyves.
- **Tro at 50/50 gjelder i hele bufferområdet.** Det gjelder bare ved pH = pKa. Ved pKa ± 1 er forholdet 10 : 1.
- Bruke feil pKa for en flerprotisk syre. Velg de to som pH ligger mellom.
:::

:::eksamen
- «pH < pKa: gruppen er protonert» (V2025, H2024) og «pH > pKa: deprotonert» (V2024).
- «Ved pH 7,4 gir COOH fra seg H⁺ og blir negativ» kommer på proteindelen (H2024, V2025). Glysin (pKa ≈ 2 og 9) ved pH 7: zwitterionet ⁺H₃N–CH₂–COO⁻ dominerer (V2025, V2024). Se [aminosyrer](/medod1/proteiner/teori/aminosyrer).
- Fosforsyre ved pH 8 → HPO₄²⁻ (V2025), og andel protonert ved pKa + 1 = 9 % (H2023).
- Flervalg H2022: en toprotisk syre med pKa 4 og 9 er på amfolyttform ved pH 7, og midt i bufferområdet er [H₃O⁺] = Ka.
- Enzym med to His (pKa 6), der den ene må være protonert og den andre ikke: optimal pH = 6 (V2023).
:::

## Test deg selv

:::sjekk[Hvilken form av fosfat dominerer i cytosol ved pH 7,2 (pKa₂ = 6,84 i kursets tabell)?]
Like over pKa₂, så HPO₄²⁻ dominerer litt over H₂PO₄⁻ (forhold 10^0,36 ≈ 2,3 : 1). Begge er til stede, og det er derfor fosfat buffrer godt intracellulært.
:::

:::sjekk[En karboksylgruppe har pKa 4,0. Hvor stor andel er protonert ved pH 7,0?]
1/(1 + 10³) ≈ 0,1 %. Den er nesten fullstendig deprotonert (COO⁻).
:::

:::sjekk[Ved hvilken pH er en gruppe med pKa 9,0 akkurat 91 % protonert?]
91 % protonert betyr [A⁻]/[HA] = 0,1, altså pH = pKa − 1 = 8,0.
:::

:::sjekk[Hvorfor er histidin en god ligand for metallioner bare når sidekjeden er uprotonert?]
I uprotonert form har imidazol-nitrogenet et fritt elektronpar (Lewis-base) som kan koordinere metallionet. Ved protonering brukes elektronparet til bindingen til H⁺.
:::
