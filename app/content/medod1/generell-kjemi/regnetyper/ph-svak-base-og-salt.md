---
title: pH i svak base og salt av svak syre (Kb = Kw/Ka)
summary: Svake baser (NH₃, acetat, laktat, A⁻ i en aminosyre) gir OH⁻ via B + H₂O ⇌ BH⁺ + OH⁻. Regn [OH⁻] = √(Kb·c), dvs. pOH = ½(pKb − log c), og så pH = 14 − pOH. Er bare Ka for den korresponderende syren oppgitt, finner du Kb = Kw/Ka (pKa + pKb = 14).
category: syre-base
order: 5
tags: [svak base, Kb, pKb, korresponderende syre-base-par, Kw, salt, acetat, ammoniakk, ekvivalenspunkt]
related:
  - generell-kjemi/teori/syre-base-likevekter
  - generell-kjemi/regnetyper/ph-svak-syre
  - generell-kjemi/regnetyper/titrering-svak-syre
  - generell-kjemi/regnetyper/titrering-aminosyre
sources:
  - file: medod1/material/generell-kjemi/forelesning3-del1-3-2026--8030911.pdf
    pages: "36, 43-45"
  - file: medod1/info/formelhefte--7793986.pdf
  - file: medod1/exercises/oppgavesett-4-fasit-2026--8204433.pdf
    pages: "1"
  - file: medod1/exercises/oppgavesett2-2026--8047637.pdf
  - file: medod1/exercises/oppgavesett2-2026-fasit--8047656.pdf
    pages: "6"
  - file: medod1/exercises/oppgavesett3-2026-fasit--8081616.pdf
    pages: "5"
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
  - file: medod1/exams/2025-medod1-ny-v2025-med-svar--7269873.pdf
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
fields:
  Enkel formel: "pOH = ½(pKb − log c); pH = 14 − pOH"
  Sammenheng: "Ka · Kb = Kw = 1,0·10⁻¹⁴ ⇔ pKa + pKb = 14"
  Gyldighet: "Kb < 10⁻⁴ (x < 5 % av c)"
---

## Når brukes den

- Løsningen inneholder en **svak base** alene: $\ce{NH3}$, et amin, eller anionet av en svak syre (acetat, laktat, formiat) som natrium- eller kaliumsalt.
- **Ved ekvivalenspunktet** når en svak syre titreres med NaOH: da er all syre omdannet til A⁻, som er en svak base, og pH > 7.
- Ved **2. ekvivalenspunkt** for en toprotisk aminosyre (bare A⁻ til stede).
- Når du skal finne Kb (eller Ka) fra den andre konstanten i et korresponderende syre-base-par.

## Formler

$$\ce{B + H2O <=> BH+ + OH-} \qquad K_b = \frac{[\ce{BH+}][\ce{OH-}]}{[\ce{B}]}$$

$$\ce{A- + H2O <=> HA + OH-} \qquad K_b(\ce{A-}) = \frac{K_w}{K_a(\ce{HA})}$$

$$K_a \cdot K_b = K_w = 1{,}0\cdot10^{-14} \quad\Longleftrightarrow\quad \text{p}K_a + \text{p}K_b = 14$$

ICE: $K_b = \dfrac{x^2}{c-x} \approx \dfrac{x^2}{c}$ ⇒ $[\ce{OH-}] = x = \sqrt{K_b\,c}$

$$\boxed{\text{pOH} = \tfrac12(\text{p}K_b - \log c) \qquad \text{pH} = 14 - \tfrac12(\text{p}K_b - \log c)}$$

## Fremgangsmåte

1. Identifiser basen og skriv likevekten med vann (basen tar opp H⁺ fra vann og gir OH⁻).
2. Mangler Kb: regn $K_b = K_w/K_a$ ut fra Ka for den korresponderende syren.
3. Finn startkonsentrasjonen c for basen. Etter en titrering er c = mmol A⁻ / totalvolum.
4. $x = [\ce{OH-}] = \sqrt{K_b c}$ (kontroller x < 5 % av c, ellers bruk andregradslikningen).
5. pOH = −log x, og pH = 14 − pOH.

## Regneeksempel

:::eksempel[Regneeksempel: 0,1 M NH3, Kb = 1,8·10⁻⁵ (oppgavesett 4, oppg. 1)]
$\ce{NH3 + H2O <=> NH4+ + OH-}$

$x = \sqrt{1{,}8\cdot10^{-5}\cdot0{,}1} = 1{,}34\cdot10^{-3}$ M = $[\ce{OH-}]$ (1,3 % av c, så OK)
pOH = $-\log(1{,}34\cdot10^{-3}) = 2{,}87$ ⇒ pH = 14 − 2,87 = **11,13**.
:::

:::eksempel[Regneeksempel: 0,100 M natriumacetat, Ka(HAc) = 1,80·10⁻⁵ (eksamen H2023)]
1. Acetat er basen: $K_b = \dfrac{1{,}0\cdot10^{-14}}{1{,}80\cdot10^{-5}} = 5{,}56\cdot10^{-10}$.
2. $[\ce{OH-}] = \sqrt{5{,}56\cdot10^{-10}\cdot0{,}100} = 7{,}45\cdot10^{-6}$ M.
3. pOH = 5,13 ⇒ pH = **8,87**.

Alternativene var 5,56 / 5,13 / 7,45 / 8,87. Både pOH (5,13) og «sifrene» i Kb og [OH⁻] (5,56 og 7,45) er feller.
:::

:::eksempel[Regneeksempel: melkesyre titrert til ekvivalenspunktet (oppgavesett 3, oppg. 13b)]
100 mL 0,1 M melkesyre (Ka = 1,4·10⁻⁴) + 100 mL 0,1 M NaOH.

1. 10 mmol HA + 10 mmol OH⁻ gir 10 mmol laktat (A⁻). All syre er omdannet.
2. $c(\ce{A-}) = 10\ \text{mmol}/200\ \text{mL} = 0{,}05$ M.
3. $K_b = 10^{-14}/1{,}4\cdot10^{-4} = 7{,}1\cdot10^{-11}$.
4. $[\ce{OH-}] = \sqrt{7{,}1\cdot10^{-11}\cdot0{,}05} = 1{,}89\cdot10^{-6}$ M ⇒ pOH = 5,72 ⇒ pH = **8,3**.
:::

:::eksempel[Regneeksempel: Kb fra målt pH (oppgavesett 2, oppg. 15)]
0,10 M svak base har pH 8,75.

1. pOH = 14 − 8,75 = 5,25 ⇒ $[\ce{OH-}] = 10^{-5{,}25} = 5{,}6\cdot10^{-6}$ M = x.
2. $K_b = \dfrac{x^2}{c - x} = \dfrac{(5{,}6\cdot10^{-6})^2}{0{,}10} = $ **3,2·10⁻¹⁰**.
:::

## Vanlige feil

:::feil
- **Bruke Ka direkte for en base.** Regn om: $K_b = K_w/K_a$.
- **Glemme siste trinn** (pH = 14 − pOH). Eksamen har pOH som alternativ.
- **Tro at pH = 7 ved ekvivalenspunktet** for svak syre + sterk base. Saltet er basisk (pH 8–9).
- **Glemme fortynningen** ved ekvivalenspunktet: c(A⁻) = mmol / *totalvolum*.
- Forveksle $K_b = K_w/K_a$ (reaksjonen $\ce{A- + H2O <=> HA + OH-}$) med $1/K_a$ (reaksjonen $\ce{A- + H3O+ <=> HA + H2O}$). Begge har vært gitt som eksamensoppgaver.
:::

:::eksamen
- **V2025:** Ka = 1,0·10⁻⁴ ⇒ pKb for den korresponderende basen = 14 − 4 = **10**.
- **V2025 og H2022:** «Ka = Kw/Kb» er den riktige påstanden. «Kb = 1/Ka» og «Ka × Kb = 14» er feil.
- **H2024:** K for $\ce{A- + H2O <=> HA + OH-}$ = Kw/Ka.
- **V2026:** K for $\ce{A- + H3O+ <=> HA + H2O}$ = 1/Ka.
- **H2023:** pH i 0,100 M NaAc = 8,87.
:::

## Test deg selv

:::sjekk[Hva er pKb for acetat når pKa for eddiksyre er 4,74?]
pKb = 14 − 4,74 = 9,26.
:::

:::sjekk[Hvorfor er en løsning av natriumacetat basisk, mens NaCl er nøytral?]
Acetat er den korresponderende basen til en svak syre og tar opp H⁺ fra vann, slik at det dannes OH⁻. Cl⁻ er den korresponderende basen til en sterk syre og er altfor svak til å reagere med vann.
:::

:::sjekk[Hva er pH i 0,050 M NH3 (Kb = 1,8·10⁻⁵)?]
$[\ce{OH-}] = \sqrt{1{,}8\cdot10^{-5}\cdot0{,}050} = 9{,}5\cdot10^{-4}$ M ⇒ pOH = 3,02 ⇒ pH = 10,98.
:::

:::sjekk[En syre har Ka = 1·10⁻⁴. Er den korresponderende basen sterk eller svak?]
Svak: Kb = 10⁻¹⁰. Jo sterkere syre, desto svakere korresponderende base.
:::
