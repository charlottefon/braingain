---
title: Radioaktiv halveringstid
summary: "N(t) = N₀·(½)^(t/t½) gir hvor mye av en radioaktiv isotop som er igjen etter tiden t. Etter n halveringstider er (½)ⁿ igjen, så 12,5 % betyr 3 halveringstider."
category: grunnleggende
order: 4
tags: [halveringstid, radioaktivitet, isotoper, kjernereaksjon, radiokarbondatering]
related:
  - generell-kjemi/teori/reaksjoner-og-radioaktivitet
sources:
  - file: medod1/material/generell-kjemi/forelesning2-2026--7998527.pdf
    pages: "44-47"
  - file: medod1/info/formelhefte--7793986.pdf
    pages: "5"
  - file: medod1/exercises/hjemmearbeid-fra-forelesning-2--page-374126.html
  - file: medod1/exams/2022-medod1-h2022-med-svar--4750110.pdf
fields:
  Formel: "N(t) = N₀ · (½)^(t / t½)  (formelhefte)"
---

## Når brukes den

- Hvor mye av en radioaktiv isotop (eller aktivitet) er igjen etter en gitt tid?
- Hvor lang tid tar det før aktiviteten har sunket til en gitt andel?
- Radiokarbondatering (¹⁴C, t½ = 5730 år) og radioisotoper i forskning/medisin (³²P, t½ = 14,3 døgn).

Hastigheten på en kjernereaksjon påvirkes **ikke** av temperatur, trykk eller katalysator. Halveringstiden er derfor en konstant for isotopen.

## Formler

$$N(t) = N_0 \left(\frac{1}{2}\right)^{t/t_{1/2}}$$

| Symbol | Betydning | Enhet |
|---|---|---|
| $N(t)$ | mengde (eller aktivitet, eller %) ved tiden $t$ | samme som $N_0$ |
| $N_0$ | mengde ved start | g, mol, Bq, % |
| $t$ | tid som har gått | samme enhet som $t_{1/2}$ |
| $t_{1/2}$ | halveringstid | s, døgn, år |

**Finne tiden:** $\dfrac{t}{t_{1/2}} = \log_2\dfrac{N_0}{N} = \dfrac{\log(N_0/N)}{\log 2}$

| Antall halveringstider | 1 | 2 | 3 | 4 | 5 | 10 |
|---|---|---|---|---|---|---|
| Andel igjen | 50 % | 25 % | 12,5 % | 6,25 % | 3,1 % | ≈ 0,1 % |

## Fremgangsmåte

1. Sørg for at $t$ og $t_{1/2}$ har **samme tidsenhet** (gjør f.eks. år om til døgn).
2. Regn ut eksponenten $t/t_{1/2}$ (antall halveringstider).
3. Er eksponenten et heltall, regn i hodet: 3 halveringstider gir ⅛ = 12,5 %. Hvis ikke, bruk kalkulator: $0{,}5^{t/t_{1/2}}$.
4. Gang med $N_0$ (sett $N_0$ = 100 % hvis du skal svare i prosent).

## Regneeksempel

:::eksempel[³²P i forskningslaboratoriet (forelesning 2, hjemmeoppgave)]
³²P har t½ = 14,3 døgn. Hvor mye av aktiviteten er igjen etter 30 døgn og etter 360 døgn? Hva om t½ i stedet var 6 år?

**t½ = 14,3 d:**
- 30 d: $100\% \cdot 0{,}5^{30/14{,}3} = 100\% \cdot 0{,}5^{2{,}10} = 23\ \%$
- 360 d: $100\% \cdot 0{,}5^{360/14{,}3} = 0{,}5^{25{,}2} \cdot 100\% = 2{,}6\cdot10^{-6}\ \%$ (praktisk talt borte)

**t½ = 6 år = 6 · 365 = 2190 d:**
- 30 d: $0{,}5^{30/2190} = 0{,}5^{0{,}0137} = 99\ \%$
- 360 d: $0{,}5^{360/2190} = 0{,}5^{0{,}164} = 89\ \%$

Fasit (forelesning): 23 %, 0,0000026 %, 99 %, 89 %.
:::

:::eksempel[Fra 100 % til 12,5 % (eksamen H2022)]
En isotop har halveringstid 10 døgn. Hvor lang tid tar det før 12,5 % er igjen?

$12{,}5\ \% = \tfrac18 = \left(\tfrac12\right)^3$ ⇒ 3 halveringstider ⇒ $t = 3 \cdot 10 = $ **30 døgn**
:::

:::eksempel[Radiokarbondatering]
En prøve har 25 % av ¹⁴C/¹²C-forholdet i levende organismer (t½ = 5730 år).

$\tfrac{N}{N_0} = 0{,}25 = (\tfrac12)^2$ ⇒ 2 halveringstider ⇒ $t = 2\cdot5730 = 11\,460$ år
:::

## Vanlige feil

:::feil
- **Ulike tidsenheter** for $t$ og $t_{1/2}$ (år vs. døgn).
- **Lineær tenkning:** etter 2 halveringstider er 25 % igjen, ikke 0 %.
- **Bytter om brøken:** eksponenten er $t/t_{1/2}$, ikke $t_{1/2}/t$.
- **Svarer med mengden som har forsvunnet** i stedet for mengden som er igjen (eller omvendt). Les spørsmålet nøye.
:::

:::eksamen
Halveringstid er sjeldent på eksamen. Eneste nyere eksempel er H2022 (10 døgn, 100 % → 12,5 % ⇒ 30 døgn). Formelen står i formelheftet, og eksamensoppgavene er laget slik at de går opp i hele halveringstider.
:::

## Test deg selv

:::sjekk[En isotop har t½ = 8 døgn. Hvor mye av 200 mg er igjen etter 24 døgn?]
24/8 = 3 halveringstider: 200 · ⅛ = 25 mg.
:::

:::sjekk[Hvor mange halveringstider tar det før under 1 % er igjen?]
(½)⁶ = 1,6 % og (½)⁷ = 0,78 %, så det tar 7 halveringstider.
:::

:::sjekk[Påvirkes halveringstiden av at prøven varmes opp eller at isotopen er bundet i et annet molekyl?]
Nei. Kjernereaksjoner påvirkes ikke av temperatur, trykk, katalysator eller kjemisk binding. Det er kjernen som endres, ikke valenselektronene.
:::
