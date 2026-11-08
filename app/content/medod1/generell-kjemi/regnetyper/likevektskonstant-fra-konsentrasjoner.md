---
title: Likevektskonstant fra konsentrasjoner
summary: "Sett likevektskonsentrasjonene inn i massevirkningsuttrykket Kc = [C]^c[D]^d / [A]^a[B]^b. Kjenner du bare startkonsentrasjonene pluss én likevektskonsentrasjon, finner du resten med en ICE-tabell (start – endring – likevekt)."
category: likevekt
order: 1
tags: [likevektskonstant, Kc, massevirkningsloven, ICE-tabell, likevekt]
related:
  - generell-kjemi/regnetyper/kombinere-likevektskonstanter
  - generell-kjemi/regnetyper/reaksjonskvotient
  - generell-kjemi/teori/kjemisk-likevekt
sources:
  - file: medod1/material/generell-kjemi/forelesning2-2026--7998527.pdf
    pages: "49-57"
  - file: medod1/material/generell-kjemi/forelesning3-del0-2025--7794114.pdf
  - file: medod1/info/formelhefte--7793986.pdf
    pages: "1"
  - file: medod1/exercises/hjemmearbeid-fra-forelesning-3--page-374127.html
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
  - file: medod1/exams/2022-medod1-h2022-med-svar--4750110.pdf
fields:
  Formel: "aA + bB ⇌ cC + dD:  Kc = [C]^c[D]^d / ([A]^a[B]^b)"
---

## Når brukes den

- Du får **likevektskonsentrasjonene** og skal finne $K_c$. Dette er den vanligste varianten.
- Du får **startkonsentrasjoner** og **én** likevektskonsentrasjon. Da trenger du en ICE-tabell for å finne resten.
- Du skal skrive likevektsuttrykket for en reaksjon. Det samme prinsippet gir $K_a$, $K_b$, $K_w$, $K_{sp}$ og $K_f$.

## Formler

For $a\,\ce{A} + b\,\ce{B <=> } c\,\ce{C} + d\,\ce{D}$:

$$K_c = \frac{[\ce{C}]^c\,[\ce{D}]^d}{[\ce{A}]^a\,[\ce{B}]^b}$$

- **Produkter i telleren, reaktanter i nevneren**, hver opphøyd i sin koeffisient fra den balanserte likningen.
- Konsentrasjonene skal være **likevektskonsentrasjoner**.
- **Rene faste stoffer og væsker** (og vann som løsningsmiddel i tynne løsninger) har relativ konsentrasjon 1 og tas **ikke med**.
- K er formelt benevningsløs, fordi relative konsentrasjoner (c / 1 M) brukes. I biokjemi oppgis likevel ofte enheter, f.eks. $K_d$ i µM.
- For gasser: $K_p$ med partialtrykk, $K_p = K_c(RT)^{\Delta n}$ (bare til orientering).

**ICE-tabell** (Initial – Change – Equilibrium, på norsk «start – endring – likevekt»): endringene står i forholdet mellom koeffisientene, f.eks. $-2x,\ -x,\ +2x,\ +x$.

## Fremgangsmåte

1. Skriv **balansert** reaksjonslikning.
2. Skriv likevektsuttrykket med eksponenter lik koeffisientene. Utelat faste stoffer og rene væsker.
3. Har du alle likevektskonsentrasjonene, sett dem inn og regn ut.
4. Har du bare start + én likevektsverdi:
   - Sett opp tabellen: start / endring / likevekt.
   - Finn $x$ fra stoffet med kjent likevektsverdi, ut fra koeffisientene.
   - Fyll inn de andre likevektskonsentrasjonene.
   - Sett inn i uttrykket.
5. Vurder svaret: K ≫ 1 betyr at produktene dominerer, K ≪ 1 at reaktantene dominerer.

## Regneeksempel

:::eksempel[Kc for 2A + B ⇌ 2C + D (eksamen V2026, V2025, V2024, H2021)]
Ved likevekt: [A] = 0,02 M, [B] = 0,01 M, [C] = 0,1 M, [D] = 0,05 M.

$$K_c = \frac{[\ce{C}]^2[\ce{D}]}{[\ce{A}]^2[\ce{B}]} = \frac{(0{,}1)^2(0{,}05)}{(0{,}02)^2(0{,}01)} = \frac{5\cdot10^{-4}}{4\cdot10^{-6}} = 125$$

Svaralternativene var 2,5 / 0,008 / 25 000 / **125**. 0,008 = 1/125 (uttrykket snudd på hodet). 25 000 er svaret på hjemmearbeidsvarianten med A + 2B ⇌ 2C + D og [B] = 0,001 M:
$\frac{(0{,}1)^2(0{,}05)}{(0{,}02)(0{,}001)^2} = \frac{5\cdot10^{-4}}{2\cdot10^{-8}} = 25\,000$.
:::

:::eksempel[H₂ + I₂ ⇌ 2 HI ved 448 °C (forelesning 3, del 0)]
Start: [H₂] = 1,000·10⁻³ M, [I₂] = 2,000·10⁻³ M, [HI] = 0. Ved likevekt: [HI] = 1,87·10⁻³ M.

| | H₂ | I₂ | 2 HI |
|---|---|---|---|
| Start | 1,000·10⁻³ | 2,000·10⁻³ | 0 |
| Endring | −x | −x | +2x |
| Likevekt | 1,000·10⁻³ − x | 2,000·10⁻³ − x | 2x = 1,87·10⁻³ |

$x = 0{,}935\cdot10^{-3}$ ⇒ [H₂] = 0,065·10⁻³ M, [I₂] = 1,065·10⁻³ M

$$K_c = \frac{(1{,}87\cdot10^{-3})^2}{(0{,}065\cdot10^{-3})(1{,}065\cdot10^{-3})} = \frac{3{,}50\cdot10^{-6}}{6{,}92\cdot10^{-8}} = 50{,}5$$

[H₂] = 0,065·10⁻³ M har bare to gjeldende siffer (differansen av to nesten like tall), så svaret bør strengt tatt oppgis som K ≈ 51. Små differanser i ICE-tabellen gir stor usikkerhet i K.
:::

:::eksempel[ICE med ulike koeffisienter (eksamen H2022)]
2A + 2B ⇌ C + 3D. Start: A = 0,30 M, B = 0,80 M, C = 0, D = 0,30 M. Ved likevekt er [D] = 0,60 M.

| | 2A | 2B | C | 3D |
|---|---|---|---|---|
| Start | 0,30 | 0,80 | 0 | 0,30 |
| Endring | −2x | −2x | +x | +3x |
| Likevekt | 0,10 | 0,60 | 0,10 | 0,60 |

$3x = 0{,}60 - 0{,}30 = 0{,}30$ ⇒ $x = 0{,}10$

$$K_c = \frac{[\ce{C}][\ce{D}]^3}{[\ce{A}]^2[\ce{B}]^2} = \frac{0{,}10\cdot(0{,}60)^3}{(0{,}10)^2(0{,}60)^2} = \frac{0{,}0216}{0{,}0036} = 6{,}0$$
:::

## Vanlige feil

:::feil
- **Glemmer eksponentene** (koeffisientene) eller bruker dem som faktorer: det skal være $[\ce{C}]^2$, ikke $2[\ce{C}]$.
- **Snur brøken:** reaktanter i telleren gir 1/K.
- **Bruker startkonsentrasjoner** i stedet for likevektskonsentrasjoner. Startverdier gir Q, ikke K (se [reaksjonskvotient](/medod1/generell-kjemi/regnetyper/reaksjonskvotient)).
- **Tar med faste stoffer eller vann** i uttrykket.
- **Feil endringsforhold i ICE-tabellen.** Endringene følger koeffisientene, ikke alltid én-til-én.
:::

:::eksamen
«Beregn Kc fra likevektskonsentrasjoner» (2A + B ⇌ 2C + D ⇒ **125**) har kommet med identiske tall på fire eksamener (H2021, V2024, V2025, V2026). ICE-tabell kom på H2022 (svar 6,0). Et utsagn som går igjen: ved likevekt er **foroverhastighet = bakoverhastighet**, Q = K, ΔG = 0 og E = 0. **K = 0 er aldri riktig.**
:::

## Test deg selv

:::sjekk[Skriv Kc for N₂(g) + 3H₂(g) ⇌ 2NH₃(g).]
$K_c = \dfrac{[\ce{NH3}]^2}{[\ce{N2}][\ce{H2}]^3}$
:::

:::sjekk[A ⇌ 2B. Ved likevekt er [A] = 0,40 M og [B] = 0,20 M. Hva er K?]
K = 0,20² / 0,40 = 0,040 / 0,40 = 0,10.
:::

:::sjekk[Hvorfor tas ikke CaCO₃(s) med i likevektsuttrykket for CaCO₃(s) ⇌ CaO(s) + CO₂(g)?]
Rene faste stoffer har relativ konsentrasjon (aktivitet) lik 1. Uttrykket blir derfor bare K = [CO₂] (eller $P_{\ce{CO2}}$).
:::

:::sjekk[A + B ⇌ C startes med 1,0 M A og 1,0 M B. Ved likevekt er [C] = 0,50 M. Finn K.]
x = 0,50 ⇒ [A] = [B] = 0,50 M. K = 0,50/(0,50·0,50) = 2,0.
:::
