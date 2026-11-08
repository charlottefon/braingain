---
title: Titrering av svak syre (halvtitrering, ekvivalenspunkt)
summary: En titreringskurve for svak syre + NaOH har fire områder med hver sin formel. Ren svak syre ved start, buffer (HH) underveis, svak base A⁻ ved ekvivalenspunktet og overskudd OH⁻ etterpå. Ved halvtitrering er pH = pKa, og ved ekvivalens er mol OH⁻ = mol syre.
category: buffer
order: 3
tags: [titrering, titreringskurve, ekvivalenspunkt, halvtitrering, pKa, bufferområde, svak syre, NaOH]
related:
  - generell-kjemi/regnetyper/titrering-aminosyre
  - generell-kjemi/regnetyper/henderson-hasselbalch
  - generell-kjemi/regnetyper/ph-svak-syre
  - generell-kjemi/regnetyper/ph-svak-base-og-salt
  - generell-kjemi/teori/buffere
  - generell-kjemi/regnetyper/noytralisering-sterk-syre-base
  - lab/ovelser/titrering-aminosyrer
sources:
  - file: medod1/material/generell-kjemi/titrering-revidert-petri2020-1-1--7794025.pdf
    pages: "2-4"
  - file: medod1/material/generell-kjemi/forelesning-4-2026--8041090.pdf
    pages: "5-9"
  - file: medod1/exercises/oppgavesett3-2026-fasit--8081616.pdf
    pages: "5"
  - file: medod1/exams/2021-medod1-h2021-med-svar--3944361.pdf
  - file: medod1/exams/2022-medod1-h2022-med-svar--4750110.pdf
fields:
  Halvtitrering: "pH = pKa ([HA] = [A⁻])"
  Ekvivalenspunkt: "n(OH⁻) = n(HA); pH > 7 (svak base A⁻)"
  Konsentrasjon av syren: "c(HA) = c(NaOH)·V(ekv) / V(HA)"
---

## Når brukes den

- Du titrerer en **monoprotisk svak syre** med sterk base (NaOH) og skal finne pH ved et gitt volum, pKa fra kurven eller syrens konsentrasjon fra ekvivalensvolumet.
- Flerprotiske syrer og aminosyrer følger samme logikk trinn for trinn. Se [titrering av toprotisk aminosyre](/medod1/generell-kjemi/regnetyper/titrering-aminosyre).
- Bakgrunn for labøvelsen [Titreranalyse av aminosyrer](/medod1/lab/ovelser/titrering-aminosyrer).

## Formler

Titreringsreaksjonen går fullstendig: $\ce{HA + OH- -> A- + H2O}$

| Område | Hva finnes | pH-formel |
|---|---|---|
| Før tilsetning | bare HA | $\text{pH} = \tfrac12(\text{p}K_a - \log c)$ |
| Bufferområdet | HA + A⁻ | $\text{pH} = \text{p}K_a + \log\dfrac{n_{\ce{A-}}}{n_{\ce{HA}}}$ |
| Halvtitrering | $n_{\ce{HA}} = n_{\ce{A-}}$ | $\text{pH} = \text{p}K_a$ |
| Ekvivalenspunkt | bare A⁻ | $K_b = K_w/K_a$; $\text{pOH} = \tfrac12(\text{p}K_b - \log c_{\ce{A-}})$ |
| Etter ekvivalens | A⁻ + overskudd OH⁻ | $[\ce{OH-}] = n_{\text{overskudd}}/V_{\text{tot}}$ |

Ekvivalenspunktet: $n(\ce{OH-})_{\text{tilsatt}} = n(\ce{HA})_{\text{start}}$, så $c_{\ce{HA}} = \dfrac{c_{\ce{NaOH}} V_{\text{ekv}}}{V_{\ce{HA}}}$

## Fremgangsmåte

1. Regn mmol syre ved start (eller fra ekvivalensvolumet) og mmol OH⁻ tilsatt.
2. Plasser deg på kurven: OH⁻ = 0, OH⁻ < HA, OH⁻ = HA/2, OH⁻ = HA eller OH⁻ > HA.
3. Lag før/etter-tabell i mmol: HA − n(OH⁻), A⁻ + n(OH⁻).
4. Velg formel fra tabellen over.
5. Ved ekvivalens og etter: husk **totalvolumet** når du regner konsentrasjon.

## Regneeksempel

:::eksempel[Regneeksempel: 25,0 mL svak syre (pKa 4,92) titrert med 0,200 M NaOH (eksamen H2021)]
Ekvivalenspunktet nås ved 22,0 mL. Finn pH etter 6,0 mL NaOH.

1. $n(\ce{HA}) = n(\ce{OH-})_{\text{ekv}} = 0{,}200 \cdot 22{,}0 = 4{,}4$ mmol.
2. Tilsatt: $0{,}200 \cdot 6{,}0 = 1{,}2$ mmol OH⁻ (før ekvivalens, så vi er i bufferområdet).
3. Etter reaksjon: HA = 4,4 − 1,2 = 3,2 mmol. A⁻ = 1,2 mmol.
4. pH = 4,92 + log(1,2/3,2) = 4,92 − 0,43 = **4,49**.

Alternativene var 5,35 / 4,92 / 4,49 / 4,36. 4,92 (= pKa) gjelder først ved 11,0 mL (halvtitrering).
:::

:::eksempel[Regneeksempel: hele kurven for samme syre]
$c(\ce{HA}) = 4{,}4\ \text{mmol}/25{,}0\ \text{mL} = 0{,}176$ M.

| NaOH tilsatt | Situasjon | Beregning | pH |
|---|---|---|---|
| 0 mL | svak syre | ½(4,92 − log 0,176) = ½(4,92 + 0,75) | 2,84 |
| 6,0 mL | buffer | 4,92 + log(1,2/3,2) | 4,49 |
| 11,0 mL | halvtitrering | pH = pKa | 4,92 |
| 22,0 mL | ekvivalens | Kb = 10⁻¹⁴/10⁻⁴·⁹² = 8,3·10⁻¹⁰; c(A⁻) = 4,4/47,0 = 0,0936 M; [OH⁻] = 8,8·10⁻⁶ M; pOH 5,05 | 8,95 |
| 25,0 mL | overskudd OH⁻ | (5,0 − 4,4) mmol / 50,0 mL = 0,012 M; pOH 1,92 | 12,08 |
:::

:::eksempel[Regneeksempel: melkesyre ved ekvivalenspunktet (oppgavesett 3, oppg. 13)]
100 mL 0,1 M melkesyre (Ka 1,4·10⁻⁴): pH = **2,4** ved start.
Tilsett 100 mL 0,1 M NaOH: 10 mmol laktat i 200 mL = 0,05 M.
Kb = 7,1·10⁻¹¹ ⇒ [OH⁻] = √(7,1·10⁻¹¹ · 0,05) = 1,9·10⁻⁶ M ⇒ pOH 5,72 ⇒ pH = **8,3**.
:::

## Vanlige feil

:::feil
- **pH = 7 ved ekvivalens:** gjelder bare sterk syre + sterk base. Svak syre gir basisk ekvivalenspunkt.
- **pH = pKa ved ekvivalenspunktet:** nei, det gjelder ved **halv**titrering.
- **Bruke startkonsentrasjoner i HH** uten å trekke fra det som har reagert.
- **Glemme totalvolumet** ved ekvivalenspunktet og etterpå.
- **Feil ekvivalensvolum** når syren og NaOH har ulik konsentrasjon: regn alltid i mmol.
:::

:::eksamen
H2021: titrering av svak syre med pKa 4,92, pH etter 6,0 mL = 4,49. Konseptspørsmål går igjen: «midt i bufferområdet er [H₃O⁺] = Ka» (riktig, H2022) og «halvveis til ekvivalenspunktet er pH = pKa». Flerprotiske varianter (alanin) er langt vanligere, se [titrering av toprotisk aminosyre](/medod1/generell-kjemi/regnetyper/titrering-aminosyre).
:::

## Test deg selv

:::sjekk[Hvordan kan du lese av pKa fra en titreringskurve?]
Finn volumet ved ekvivalenspunktet (pH-hoppet) og ta halvparten. pH ved det volumet er pKa, fordi [HA] = [A⁻] der.
:::

:::sjekk[20,0 mL eddiksyre krever 16,0 mL 0,125 M NaOH til ekvivalens. Hva er konsentrasjonen av eddiksyren?]
n = 0,125 · 16,0 = 2,00 mmol ⇒ c = 2,00/20,0 = 0,100 M.
:::

:::sjekk[Er pH ved ekvivalenspunktet over eller under 7 når eddiksyre titreres med NaOH? Hvorfor?]
Over 7. Ved ekvivalens finnes bare acetat, som er en svak base og danner OH⁻ med vann.
:::

:::sjekk[Hvor i titreringskurven er bufferkapasiteten størst?]
Ved halvtitrering (pH = pKa), der [HA] = [A⁻]. Kurven er flatest der.
:::
