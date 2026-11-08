---
title: Blanding av sterk syre og sterk base
summary: Regn i stoffmengder (mmol). H₃O⁺ og OH⁻ nøytraliserer hverandre 1:1. Overskuddet fordeles på totalvolumet og bestemmer pH (overskudd syre → pH direkte, overskudd base → via pOH). Ved like mengder er pH = 7.
category: syre-base
order: 3
tags: [nøytralisering, sterk syre, sterk base, overskudd, mmol, totalvolum, HCl, NaOH]
related:
  - generell-kjemi/regnetyper/ph-sterk-syre-og-base
  - generell-kjemi/regnetyper/titrering-svak-syre
  - generell-kjemi/regnetyper/ph-og-h3o-omregning
  - generell-kjemi/teori/syrer-baser-og-ph
sources:
  - file: medod1/exercises/oppgavesett-4-2026--8204427.pdf
  - file: medod1/exercises/oppgavesett-4-fasit-2026--8204433.pdf
    pages: "2"
  - file: medod1/exercises/oppgavesett2-2026--8047637.pdf
  - file: medod1/exercises/oppgavesett2-2026-fasit--8047656.pdf
    pages: "3"
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
fields:
  Reaksjon: "H₃O⁺ + OH⁻ → 2 H₂O (fullstendig)"
  Regn i: "mmol (mL × M = mmol)"
  Nøkkel: "Del overskuddet på TOTALVOLUMET"
---

## Når brukes den

- To løsninger blandes: en **sterk syre** (HCl, HNO₃ …) og en **sterk base** (NaOH, KOH …).
- Også for punktene i en titrering av sterk syre med sterk base (før, ved og etter ekvivalenspunktet).
- Er syren **svak** (eddiksyre, melkesyre, aminosyre), dannes det en buffer eller et basisk salt. Se [titrering av svak syre](/medod1/generell-kjemi/regnetyper/titrering-svak-syre).

## Formler

$$n = c \cdot V \qquad (\text{mmol} = \text{M} \times \text{mL})$$

$$\ce{H3O+ + OH- -> 2H2O}\quad(\text{1:1, går fullstendig})$$

$$c_{\text{overskudd}} = \frac{n_{\text{overskudd}}}{V_{\text{tot}}} \qquad V_{\text{tot}} = V_1 + V_2$$

- Overskudd syre: pH = −log c(H₃O⁺).
- Overskudd base: pOH = −log c(OH⁻), så pH = 14 − pOH.
- Like mengder: nøytral løsning, pH = 7 (NaCl påvirker ikke pH).

## Fremgangsmåte

1. Regn ut mmol $\ce{H3O+}$ fra syren og mmol $\ce{OH-}$ fra basen. Husk faktor 2 for $\ce{Ca(OH)2}$ og $\ce{H2SO4}$.
2. Trekk den minste mengden fra den største. Det som er igjen er overskuddet.
3. Legg sammen volumene: $V_{\text{tot}} = V_1 + V_2$.
4. Konsentrasjon av overskuddet = mmol / mL (gir M).
5. Regn pH. Ved baseoverskudd går du via pOH.

## Regneeksempel

:::eksempel[Regneeksempel: 50 mL 0,1 M HCl + 30 mL 0,1 M NaOH (oppgavesett 4 / eksamen H2025)]
1. $n(\ce{HCl}) = 0{,}1\ \text{M}\cdot 50\ \text{mL} = 5{,}0$ mmol. $n(\ce{NaOH}) = 0{,}1\cdot 30 = 3{,}0$ mmol.
2. Overskudd HCl: 5,0 − 3,0 = 2,0 mmol.
3. $V_{\text{tot}} = 50 + 30 = 80$ mL.
4. $[\ce{H3O+}] = 2{,}0\ \text{mmol}/80\ \text{mL} = 0{,}025$ M.
5. pH = $-\log 0{,}025 = $ **1,60**.

Eksamensalternativene var 1,1 / 1,60 / 0,025 / 2,70. 0,025 er konsentrasjonen, ikke pH, og 2,70 = −log 0,002 får du hvis du tar log av stoffmengden (mol) uten å dele på volumet.
:::

:::eksempel[Regneeksempel: 100,0 mL 0,100 M HCl + 80,0 mL 0,150 M NaOH (oppgavesett 2, oppg. 4)]
1. $n(\ce{HCl}) = 0{,}100 \cdot 100{,}0 = 10{,}0$ mmol. $n(\ce{NaOH}) = 0{,}150\cdot 80{,}0 = 12{,}0$ mmol.
2. Overskudd $\ce{OH-}$: 12,0 − 10,0 = 2,0 mmol.
3. $V_{\text{tot}} = 180{,}0$ mL.
4. $[\ce{OH-}] = 2{,}0/180 = 0{,}0111$ M ⇒ pOH = 1,95.
5. pH = 14 − 1,95 = **12,05**.

Alternativene var 7,0 / 12,44 / 1,95 / 12,05. 1,95 er pOH-fellen. 7,0 får du hvis du tror at syre + base alltid gir nøytral løsning.
:::

## Vanlige feil

:::feil
- **Regne med konsentrasjoner i stedet for stoffmengder.** Nøytraliseringen skjer mol mot mol.
- **Glemme totalvolumet.** Overskuddet fortynnes av begge løsningene.
- **Stoppe ved pOH** når basen er i overskudd.
- **Tro at pH = 7 ved ekvivalens også for svake syrer.** Det gjelder bare sterk + sterk. Svak syre + NaOH gir et basisk salt (pH > 7).
:::

:::eksamen
H2025 Q38 (identisk med oppgavesett 4, oppg. 3): 50 mL 0,1 M HCl + 30 mL 0,1 M NaOH → pH 1,60. Distraktorene er konsentrasjonen (0,025) og −log av stoffmengden uten volum (2,70).
:::

## Test deg selv

:::sjekk[25 mL 0,20 M HCl blandes med 25 mL 0,20 M NaOH. pH?]
5,0 mmol av hver, altså fullstendig nøytralisert. NaCl i vann gir pH = 7,0.
:::

:::sjekk[20 mL 0,10 M NaOH blandes med 10 mL 0,10 M HCl. pH?]
2,0 − 1,0 = 1,0 mmol OH⁻ i 30 mL gir $[\ce{OH-}] = 0{,}0333$ M, pOH = 1,48 og pH = 12,52.
:::

:::sjekk[Hvorfor kan du ikke bare trekke konsentrasjonene fra hverandre når du blander 50 mL 0,1 M HCl og 30 mL 0,1 M NaOH?]
Volumene er ulike, så like konsentrasjoner gir ulike stoffmengder (5 vs. 3 mmol). Nøytraliseringen skjer mol for mol, og overskuddet fortynnes i 80 mL.
:::
