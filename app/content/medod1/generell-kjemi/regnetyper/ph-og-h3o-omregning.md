---
title: pH, pOH, [H3O+] og [OH−] (omregning)
summary: Gå fram og tilbake mellom pH, pOH, [H₃O⁺] og [OH⁻] med pH = −log[H₃O⁺], [H₃O⁺] = 10⁻ᵖᴴ og Kw = 1,0·10⁻¹⁴ (pH + pOH = 14). En tidobling av [H₃O⁺] senker pH med 1. Dette er grunnmuren under alle pH-oppgaver.
category: syre-base
order: 1
tags: [pH, pOH, hydroniumion, Kw, vannets ioneprodukt, logaritme, fortynning, blod-pH]
related:
  - generell-kjemi/teori/syrer-baser-og-ph
  - generell-kjemi/regnetyper/ph-sterk-syre-og-base
  - generell-kjemi/regnetyper/ph-svak-syre
  - generell-kjemi/teori/karbonsyre-og-blodets-ph
  - cellebiologi/sammensatte-tema/blodets-ph-regulering-og-hyperventilering
sources:
  - file: medod1/material/generell-kjemi/forelesning3-del1-3-2026--8030911.pdf
    pages: "11-22"
  - file: medod1/info/formelhefte--7793986.pdf
  - file: medod1/material/generell-kjemi/hyperventilering--7794027.pdf
    pages: "8"
  - file: medod1/exercises/oppgavesett2-2026-fasit--8047656.pdf
    pages: "6"
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
  - file: medod1/exams/2025-medod1-ny-v2025-med-svar--7269873.pdf
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
  - file: medod1/exams/2022-medod1-h2022-med-svar--4750110.pdf
fields:
  Nøkkelformel: "pH = −log[H₃O⁺]; pH + pOH = 14"
  Konstant: "Kw = 1,0·10⁻¹⁴ ved 25 °C (oppgis ikke på eksamen)"
  Typisk eksamen: "×100 [H₃O⁺] → pH − 2; nmol i mL → pH"
---

## Når brukes den

- Når du får pH og skal finne $[\ce{H3O+}]$ eller $[\ce{OH-}]$ – eller omvendt.
- Når $[\ce{H3O+}]$ endres med en faktor (dobles, ×100, fortynnes) og du skal finne ny pH.
- Som siste trinn i nesten alle andre pH-beregninger (sterk/svak syre og base, buffer, titrering).
- Kliniske tall: blod-pH 7,4 svarer til $[\ce{H3O+}] = 40$ nM (se [blodets pH-regulering og hyperventilering](/medod1/cellebiologi/sammensatte-tema/blodets-ph-regulering-og-hyperventilering)).

## Formler

$$\text{pH} = -\log[\ce{H3O+}] \qquad [\ce{H3O+}] = 10^{-\text{pH}}$$

$$\text{pOH} = -\log[\ce{OH-}] \qquad [\ce{OH-}] = 10^{-\text{pOH}}$$

$$K_w = [\ce{H3O+}][\ce{OH-}] = 1{,}0\cdot10^{-14}\ \ (25\ ^\circ\text{C}) \quad\Longrightarrow\quad \text{pH} + \text{pOH} = 14$$

| Symbol | Betydning | Enhet |
|---|---|---|
| $[\ce{H3O+}]$ | konsentrasjon av hydroniumioner (= $[\ce{H+}]$) | mol/L (M) |
| $[\ce{OH-}]$ | konsentrasjon av hydroksidioner | mol/L |
| $K_w$ | vannets ioneprodukt | benevningsløs (relative konsentrasjoner) |

Nøytral løsning ved 25 °C: $[\ce{H3O+}] = [\ce{OH-}] = 1{,}0\cdot10^{-7}$ M, pH = 7. Sur: pH < 7. Basisk: pH > 7.

Nyttige logaritme-tommelregler:

| Endring i $[\ce{H3O+}]$ | Endring i pH |
|---|---|
| ×10 | −1 |
| ×100 | −2 |
| ×2 | −0,30 |
| ÷2 | +0,30 |

## Fremgangsmåte

1. Sørg for at konsentrasjonen er i **mol/L**. Får du stoffmengde (mol, mmol, nmol) og volum: $c = n/V$ først.
2. pH fra konsentrasjon: $\text{pH} = -\log[\ce{H3O+}]$. Har du $[\ce{OH-}]$: finn pOH, så pH = 14 − pOH.
3. Konsentrasjon fra pH: $[\ce{H3O+}] = 10^{-\text{pH}}$; $[\ce{OH-}] = K_w/[\ce{H3O+}]$ eller $10^{-(14-\text{pH})}$.
4. Kontroller: $[\ce{H3O+}][\ce{OH-}]$ skal bli $1{,}0\cdot10^{-14}$.
5. Faktorendringer: bruk tabellen over (pH er logaritmisk, ikke lineær).

## Regneeksempel

:::eksempel[Regneeksempel: [H3O+] og [OH−] i blod (forelesning 3)]
Blod har pH = 7,4.

1. $[\ce{H3O+}] = 10^{-7{,}4} = 4{,}0\cdot10^{-8}$ M (= 40 nM).
2. $[\ce{OH-}] = \dfrac{K_w}{[\ce{H3O+}]} = \dfrac{1{,}0\cdot10^{-14}}{4{,}0\cdot10^{-8}} = 2{,}5\cdot10^{-7}$ M.
3. Kontroll: $(4{,}0\cdot10^{-8})(2{,}5\cdot10^{-7}) = 1{,}0\cdot10^{-14}$ ✓.

Til sammenligning (hyperventilering-forelesningen): pH 6,8 ↔ 160 nM; pH 7,8 ↔ 16 nM.
:::

:::eksempel[Regneeksempel: endret [H3O+] (eksamen V2026, H2025, V2025)]
**a)** En løsning har pH = 6. $[\ce{H3O+}]$ blir 100 ganger høyere. Ny pH?
$\log 100 = 2$, så pH = 6 − 2 = **4**.

**b)** pH 7,4 tilsvarer 40 nM $\ce{H3O+}$. Hva er $[\ce{H3O+}]$ ved pH 7,1?
$10^{-7{,}1} = 7{,}9\cdot10^{-8}$ M ≈ **80 nM** (pH ned 0,3 ⇒ dobling).

**c)** (Oppgavesett 2, oppg. 11) Blod med pH 7,7: $[\ce{H3O+}] = 10^{-7{,}7} = 2{,}0\cdot10^{-8}$ M = 20 nM. Dobles den til 40 nM, blir pH = 7,4.
:::

:::eksempel[Regneeksempel: stoffmengde og volum (H2022/H2021) og fortynning (H2023)]
**a)** 5 nmol $\ce{H3O+}$ i 100 mL: $c = \dfrac{5\cdot10^{-9}\ \text{mol}}{0{,}100\ \text{L}} = 5\cdot10^{-8}$ M ⇒ pH = $-\log(5\cdot10^{-8}) = $ **7,3**. (Samme stoffmengde i 10 mL: $5\cdot10^{-7}$ M ⇒ pH 6,3.)

**b)** Magesaft har pH 1,5. $[\ce{H3O+}] = 10^{-1{,}5} = 0{,}0316$ M ≈ **32 mM** – uansett om det er 200 eller 300 mL (konsentrasjon er uavhengig av volum).

**c)** 2 L sterk syre med pH 2 skal få pH 3. Da må $[\ce{H3O+}]$ ned 10 ganger ⇒ totalvolum 10 × 2 L = 20 L ⇒ tilsett **18 L** vann.

**d)** (H2023) $[\ce{OH-}] = 1{,}0\cdot10^{-5}$ M ⇒ pOH = 5 ⇒ pH = **9,0**. Fellen er pH = 5,0 (= pOH). Løsningen inneholder fortsatt $\ce{H3O+}$ ($10^{-9}$ M).
:::

## Vanlige feil

:::feil
- **Svare med $[\ce{H3O+}]$ når det spørres om pH** (eller omvendt). Eksamen har nesten alltid begge tallene som alternativer.
- **Glemme å regne om til mol/L** når stoffmengde og volum oppgis (nmol i mL).
- **Fortynning:** «hvor mye vann skal tilsettes» ≠ sluttvolum (18 L, ikke 20 L).
- **Lineær tenkning:** dobling av $[\ce{H3O+}]$ gir ikke pH halvert, men pH − 0,30.
- **Volum påvirker ikke pH** for en gitt løsning – pH er en konsentrasjon (magesaft-oppgavene).
- $K_w$ og pH + pOH = 14 gjelder ved 25 °C; $K_w$ oppgis **ikke** på eksamen – den må du kunne.
:::

:::eksamen
Gjengangere: «×100 [H₃O⁺] → ny pH» (V2026, H2025), «pH 7,4 = 40 nM, hva ved 7,1?» (V2025), nmol i mL (H2022, H2021), magesaft pH 1,5/1,8 → 32/16 mM (H2023, H2022, H2021), fortynning 2 L → tilsett 18 L (H2023), $[\ce{OH-}] = 10^{-5}$ M → pH 9 (H2023), 10 mM → pH 2 (V2024). Flervalg om vann: riktige er $K_w = K_aK_b$ og pH + pOH = 14; feil er «pH = log[H₃O⁺]» og «[OH⁻][H₃O⁺] = [H₂O]».
:::

## Test deg selv

:::sjekk[pH i en løsning synker fra 7,4 til 7,1. Hvor mye har [H3O+] endret seg?]
Den er omtrent doblet: $10^{0{,}3} \approx 2$ (40 nM → ca. 80 nM).
:::

:::sjekk[Hva er [OH−] i en løsning med pH 3,0?]
pOH = 14 − 3 = 11 ⇒ $[\ce{OH-}] = 1{,}0\cdot10^{-11}$ M.
:::

:::sjekk[Du har 500 mL saltsyre med pH 1. Hvor mye vann må tilsettes for å få pH 3?]
$[\ce{H3O+}]$ må ned 100 ganger ⇒ totalvolum 50 L ⇒ tilsett 49,5 L vann.
:::

:::sjekk[Hvorfor er pH i 250 mL og 2 L av samme magesaft lik?]
pH avhenger av konsentrasjonen $[\ce{H3O+}]$, ikke av stoffmengden. Samme løsning har samme konsentrasjon uansett hvor mye du tar ut.
:::
