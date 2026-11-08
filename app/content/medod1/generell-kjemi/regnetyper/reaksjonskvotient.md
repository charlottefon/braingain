---
title: Reaksjonskvotient Q og reaksjonsretning
summary: "Q regnes ut som K, men med nåværende konsentrasjoner i stedet for likevektskonsentrasjoner. Er Q < K, går reaksjonen mot høyre (flere produkter). Er Q > K, går den mot venstre. Er Q = K, er systemet i likevekt. For løselighet: Q > Ksp betyr overmettet løsning, og stoffet felles ut."
category: likevekt
order: 3
tags: [reaksjonskvotient, Q, reaksjonsretning, Le Chatelier, overmettet, likevekt]
related:
  - generell-kjemi/regnetyper/likevektskonstant-fra-konsentrasjoner
  - generell-kjemi/regnetyper/loselighetsprodukt
  - generell-kjemi/regnetyper/fri-energi-og-likevekt
  - generell-kjemi/regnetyper/nernst-likning
  - generell-kjemi/teori/kjemisk-likevekt
  - generell-kjemi/regnetyper/kombinere-likevektskonstanter
  - proteiner/teori/enzymkatalyse
sources:
  - file: medod1/material/generell-kjemi/forelesning3-del1-3-2026--8030911.pdf
    pages: "2-8"
  - file: medod1/info/formelhefte--7793986.pdf
    pages: "3"
  - file: medod1/exercises/hjemmearbeid-fra-forelesning-3--page-374127.html
  - file: medod1/exercises/oppgavesett3-2026-fasit--8081616.pdf
    pages: "7"
  - file: medod1/exercises/oppgavesett-4-fasit-2026--8204433.pdf
    pages: "3"
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
  - file: medod1/exams/2024-medod1-ny-v2024-med-svar--5897534.pdf
fields:
  Formel: "Q = [C]^c[D]^d / ([A]^a[B]^b) med nåværende konsentrasjoner"
  Regel: "Q < K → høyre;  Q > K → venstre;  Q = K → likevekt"
---

## Når brukes den

- Du får **konsentrasjoner i et øyeblikk** (ikke nødvendigvis likevekt) og K. Spørsmålet er om systemet er i likevekt, og hvilken vei reaksjonen går.
- Kvantitativ Le Châtelier: hva skjer når du tilsetter eller fjerner et stoff?
- Løselighet: er løsningen umettet, mettet eller overmettet (feller noe ut)? Sammenlign Q med $K_{sp}$.
- Q går også inn i $\Delta G = \Delta G^\circ + RT\ln Q$ og i Nernst-likningen $E = E^\circ - \frac{0{,}0592}{n}\log Q$ (se [fri energi og likevekt](/medod1/generell-kjemi/regnetyper/fri-energi-og-likevekt) og [Nernst](/medod1/generell-kjemi/regnetyper/nernst-likning)).

## Formler

$$Q = \frac{[\ce{C}]^c\,[\ce{D}]^d}{[\ce{A}]^a\,[\ce{B}]^b}\quad(\text{nåværende konsentrasjoner})$$

| Sammenligning | Betydning | Reaksjonen går … |
|---|---|---|
| $Q < K$ | for lite produkt | mot **høyre** (danner produkter) |
| $Q = K$ | likevekt | ingen nettoendring |
| $Q > K$ | for mye produkt | mot **venstre** (danner reaktanter) |

For løselighet ($Q = [\ce{A^{n+}}]^a[\ce{B^{m-}}]^b$):

| $Q < K_{sp}$ | umettet: mer kan løses |
|---|---|
| $Q = K_{sp}$ | mettet (likevekt) |
| $Q > K_{sp}$ | overmettet: utfelling |

## Fremgangsmåte

1. Skriv balansert likning og uttrykket for Q, med samme form som K.
2. Sett inn de **gitte (nåværende)** konsentrasjonene.
3. Sammenlign Q med K.
4. Konkluder om retningen: «reaksjonen går slik at Q nærmer seg K».

## Regneeksempel

:::eksempel[Er systemet i likevekt? (eksamen H2023)]
A + B ⇌ C har Kc = 3,6. Målt: [A] = 2,3 M, [B] = 4,0 M, [C] = 6,5 M.

$$Q = \frac{[\ce{C}]}{[\ce{A}][\ce{B}]} = \frac{6{,}5}{2{,}3\cdot4{,}0} = \frac{6{,}5}{9{,}2} = 0{,}71$$

Q (0,71) < K (3,6): systemet er **ikke** i likevekt, og reaksjonen går mot høyre slik at **mer C dannes**.
:::

:::eksempel[Overmettet løsning? (oppgavesett 3, oppg. 18)]
Saltet AB har $K_{sp} = 1{,}2\cdot10^{-15}$. Målt: [A⁺] = 0,15 µM = 1,5·10⁻⁷ M og [B⁻] = 30 nM = 3,0·10⁻⁸ M.

$$Q = [\ce{A+}][\ce{B-}] = (1{,}5\cdot10^{-7})(3{,}0\cdot10^{-8}) = 4{,}5\cdot10^{-15}$$

Q > Ksp: løsningen er **overmettet**, og AB vil felles ut til Q = Ksp.
:::

:::eksempel[Tilsetter produkt (hjemmearbeid forelesning 3)]
A + 2B ⇌ C + 2D er i likevekt med Kc = 288,2. Så tilsettes 1 mol C.

Telleren i Q øker, så Q > K. Reaksjonen går **mot venstre**: noe av C (og D) forbrukes og A og B dannes, til Q = K igjen. Dette er Le Châteliers prinsipp uttrykt med Q. K er uendret, fordi bare temperaturen endrer K.
:::

## Vanlige feil

:::feil
- **Feil retning:** Q > K betyr at reaksjonen går mot **reaktantene** (venstre), ikke mot flere produkter. Nettopp dette utsagnet er et gjentatt «ikke sant»-alternativ på eksamen.
- **Tror K endres** når konsentrasjoner endres. Det er Q som endres. K endres bare med temperatur.
- **Ulik form på Q og K:** eksponenter og hvilke stoffer som tas med må være de samme.
- **Glemmer enhetsomregning** (µM, nM → M) før du sammenligner med Ksp.
:::

:::eksamen
- «Hvilket utsagn er **ikke** sant?» med alternativet «Hvis Q > K går reaksjonen mot mer produkter» (H2021, V2023, V2024). Det utsagnet er galt.
- Beregn Q og vurder retning (H2023: Q = 0,71 < 3,6 ⇒ mer C dannes).
- Le Châtelier i metabolske veier: når et produkt (C eller D) stadig forbrukes, holdes Q < K, og reaksjonen trekkes mot høyre, så det blir mindre A og B (H2024). Feilalternativene der: «K minker» og «enzymet forskyver likevekten» – et enzym endrer bare hastigheten, ikke K (se [enzymkatalyse](/medod1/proteiner/teori/enzymkatalyse)).
- Oppgavesett 4 oppg. 6g: sammenhengen mellom Q og reaksjonsretning er sentral.
:::

## Test deg selv

:::sjekk[2 SO₂ + O₂ ⇌ 2 SO₃ har K = 100. Nå er [SO₂] = 0,10 M, [O₂] = 0,10 M og [SO₃] = 1,0 M. Hvilken vei går reaksjonen?]
Q = 1,0² / (0,10² · 0,10) = 1/0,001 = 1000 > 100, så reaksjonen går mot venstre.
:::

:::sjekk[A ⇌ B + C har K = 2,0. Nå er [A] = 0,5 M, [B] = 0,5 M og [C] = 0,5 M. I likevekt?]
Q = 0,5·0,5/0,5 = 0,5 < 2,0. Ikke i likevekt; reaksjonen går mot høyre.
:::

:::sjekk[AgCl har Ksp = 1,8·10⁻¹⁰. Felles det ut AgCl når [Ag⁺] = 1·10⁻⁴ M og [Cl⁻] = 1·10⁻⁵ M?]
Q = 1·10⁻⁹ > 1,8·10⁻¹⁰, så ja, AgCl felles ut.
:::

:::sjekk[Hva er Q i en celle der alle løste stoffer er 1 M, og hva betyr det for E og ΔG?]
Q = 1, så log Q = 0. Da er E = E° og ΔG = ΔG° (standardbetingelser).
:::
