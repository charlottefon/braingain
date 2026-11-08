---
title: pH i svak syre
summary: Sett opp likevekten HA + H₂O ⇌ H₃O⁺ + A⁻ med en ICE-tabell, så x² = Ka(c − x). Er Ka < 10⁻⁴ (x < 5 % av c), gjelder kursets «enkle formel» pH = ½(pKa − log c). Ellers løser du andregradslikningen.
category: syre-base
order: 4
tags: [svak syre, Ka, pKa, ICE-tabell, andregradslikning, x<<c, maursyre, melkesyre, acetylsalisylsyre]
related:
  - generell-kjemi/teori/syre-base-likevekter
  - generell-kjemi/regnetyper/ph-svak-base-og-salt
  - generell-kjemi/regnetyper/ph-sterk-syre-og-base
  - generell-kjemi/regnetyper/henderson-hasselbalch
  - generell-kjemi/regnetyper/mol-og-konsentrasjon
  - organisk-kjemi/funksjonelle-grupper/karboksylsyrer
sources:
  - file: medod1/material/generell-kjemi/forelesning3-del1-3-2026--8030911.pdf
    pages: "34-48"
  - file: medod1/info/formelhefte--7793986.pdf
  - file: medod1/material/generell-kjemi/sporretime1-2026-v2--8130558.pdf
    pages: "27-29"
  - file: medod1/exercises/oppgavesett2-2026--8047637.pdf
  - file: medod1/exercises/oppgavesett2-2026-fasit--8047656.pdf
    pages: "6"
  - file: medod1/exercises/oppgavesett3-2026-fasit--8081616.pdf
    pages: "5"
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
fields:
  Enkel formel: "pH = ½(pKa − log c)"
  Gyldighet: "Ka < 10⁻⁴ og c ikke for liten (x < 5 % av c)"
  Eksakt: "x = [−Ka + √(Ka² + 4Ka·c)] / 2"
---

## Når brukes den

- Løsningen inneholder **bare en svak syre** HA (Ka eller pKa oppgitt), for eksempel maursyre, eddiksyre, melkesyre, acetylsalisylsyre eller en aminosyre i fullt protonert form (H₂A⁺) **før** det er tilsatt base.
- Er den korresponderende basen også til stede i betydelig mengde, har du en buffer. Bruk da [Henderson–Hasselbalch](/medod1/generell-kjemi/regnetyper/henderson-hasselbalch).
- Svak base eller salt av svak syre: se [pH i svak base og salt](/medod1/generell-kjemi/regnetyper/ph-svak-base-og-salt).

## Formler

$$\ce{HA + H2O <=> H3O+ + A-} \qquad K_a = \frac{[\ce{H3O+}][\ce{A-}]}{[\ce{HA}]} \qquad \text{p}K_a = -\log K_a$$

ICE-tabell med startkonsentrasjon $c$:

| | HA | H₃O⁺ | A⁻ |
|---|---|---|---|
| Start | $c$ | ≈ 0 | 0 |
| Endring | −x | +x | +x |
| Likevekt | $c - x$ | x | x |

$$K_a = \frac{x^2}{c - x}$$

**Tilnærming (x ≪ c):** $K_a \approx \dfrac{x^2}{c} \Rightarrow x = [\ce{H3O+}] = \sqrt{K_a\, c}$, som på logaritmeform gir kursets formel (formelheftet):

$$\boxed{\text{pH} = \tfrac{1}{2}\left(\text{p}K_a - \log c\right)}$$

**Eksakt:** $x^2 + K_a x - K_a c = 0 \Rightarrow x = \dfrac{-K_a + \sqrt{K_a^2 + 4K_a c}}{2}$

Gyldighet for tilnærmingen (forelesning 3): $K_a < 1\cdot10^{-4}$ og c ikke for liten. Kontroller at x < 5 % av c. Andregradslikningen er **alltid** lov.

## Fremgangsmåte

1. Skriv protolysen og Ka-uttrykket. Er Ka bare gitt som pKa, er $K_a = 10^{-\text{p}K_a}$.
2. Vannets egenprotolyse ($K_w = 10^{-14}$) kan overses når syrens Ka er mye større.
3. Sett opp ICE-tabellen med startkonsentrasjon c (regn om fra masse/volum ved behov).
4. Er Ka < 10⁻⁴: bruk $x = \sqrt{K_a c}$ eller pH = ½(pKa − log c).
5. Kontroller: $x/c < 0{,}05$? Hvis ikke, løs andregradslikningen.
6. pH = −log x.

## Regneeksempel

:::eksempel[Regneeksempel: 0,1 M maursyre, Ka = 1,82·10⁻⁴ (forelesning 3)]
$\ce{HCOOH + H2O <=> H3O+ + HCOO-}$

**Tilnærmet:** $x = \sqrt{0{,}1 \cdot 1{,}82\cdot10^{-4}} = 4{,}27\cdot10^{-3}$ M ⇒ pH = **2,37**.
Med den enkle formelen: pKa = 3,74 ⇒ pH = ½(3,74 + 1) = 2,37.

**Eksakt:** $x^2 + 1{,}82\cdot10^{-4}x - 1{,}82\cdot10^{-5} = 0$
$x = \dfrac{-1{,}82\cdot10^{-4} + \sqrt{(1{,}82\cdot10^{-4})^2 + 4\cdot1{,}82\cdot10^{-5}}}{2} = 4{,}18\cdot10^{-3}$ M ⇒ pH = **2,38**.
(Den negative roten, −4,36·10⁻³, gir ikke mening. Lysbildet oppgir −8,71·10⁻³, som er tallet før divisjonen med 2.)

Forskjellen er bare 0,01 pH-enheter, så tilnærmingen er god (x/c = 4 %).
:::

:::eksempel[Regneeksempel: 0,1 M melkesyre, Ka = 1,4·10⁻⁴ (eksamen V2026, H2025; oppgavesett 3 oppg. 13a)]
$x = \sqrt{1{,}4\cdot10^{-4}\cdot 0{,}1} = 3{,}74\cdot10^{-3}$ M ⇒ pH = $-\log(3{,}74\cdot10^{-3}) = $ **2,4** (2,43).
Ka er like over 10⁻⁴, men x/c = 3,7 % < 5 %, så tilnærmingen holder: andregradslikningen gir x = 3,67·10⁻³ M og pH 2,44.

Alternativene var 2,4 / 1 / 3,7·10⁻³ / 8,3. 3,7·10⁻³ er $[\ce{H3O+}]$, 1 er pH for en sterk syre, og 8,3 er pH etter titrering til ekvivalenspunktet.
:::

:::eksempel[Regneeksempel: 3 tabletter acetylsalisylsyre i 300 mL (oppgavesett 2, oppg. 12)]
$\ce{C9H8O4}$, 324 mg per tablett, Ka = 3,0·10⁻⁴ (pKa = 3,52).

1. Masse: 3 × 324 mg = 0,972 g. M = 9·12 + 8·1 + 4·16 = 180 g/mol.
2. $n = 0{,}972/180 = 5{,}4\cdot10^{-3}$ mol ⇒ $c = 5{,}4\cdot10^{-3}/0{,}300 = 0{,}018$ M.
3. Enkel formel: pH = ½(3,52 − log 0,018) = ½(3,52 + 1,74) = 2,63.
4. Kontroll: $x = 10^{-2{,}63} \approx 2{,}3\cdot10^{-3}$ M, som er ca. 13 % av c > 5 %. Tilnærmingen er ikke god nok.
5. Andregradslikningen: $x = \dfrac{-3{,}0\cdot10^{-4}+\sqrt{(3{,}0\cdot10^{-4})^2 + 4\cdot3{,}0\cdot10^{-4}\cdot0{,}018}}{2} = 2{,}18\cdot10^{-3}$ M ⇒ pH = **2,66** (fasit).
:::

## Vanlige feil

:::feil
- **Svare med $[\ce{H3O+}]$ i stedet for pH** (3,7·10⁻³ vs. 2,4).
- **Behandle svak syre som sterk** (pH = −log c = 1 for 0,1 M melkesyre).
- **Fortegnsfeil i den enkle formelen:** det er pKa **minus** log c. For c < 1 er −log c positiv, så pH = ½(3,74 + 1).
- **Bruke tilnærmingen når Ka ≥ 10⁻⁴ eller c er lav** uten å kontrollere 5 %-regelen (acetylsalisylsyre).
- Blande Ka og pKa: $K_a = 10^{-\text{p}K_a}$.
:::

:::eksamen
«pH i 0,1 M melkesyre (Ka 1,4·10⁻⁴)» = 2,4 har kommet på både V2026 og H2025. H2024: svak syre med pKa 4,48 og c = 0,1 M gir pH = ½(4,48 + 1) = 2,74 (distraktorer 5,48 / 1,74 / 3,24). Formelheftet inneholder den enkle formelen, men du må selv vite når den gjelder.
:::

## Test deg selv

:::sjekk[Hva er pH i 0,10 M eddiksyre (pKa 4,74)?]
pH = ½(4,74 + 1) = 2,87. x ≈ 1,3·10⁻³ M er ca. 1,3 % av c, så tilnærmingen er OK.
:::

:::sjekk[Hvorfor kan vi som regel se bort fra H3O+ fra vannets egenprotolyse?]
Kw = 10⁻¹⁴ er mange tierpotenser mindre enn Ka for syren. Vannet bidrar med ≤ 10⁻⁷ M H₃O⁺, og bidraget undertrykkes i tillegg av syrens H₃O⁺ (Le Châtelier).
:::

:::sjekk[En svak syre med pKa 5,0 har c = 0,010 M. Hva blir pH, og holder tilnærmingen?]
pH = ½(5,0 + 2,0) = 3,5. Da er x = 3,2·10⁻⁴ M, som er 3,2 % av c, så tilnærmingen holder.
:::

:::sjekk[Hva skjer med pH i en svak syre hvis du fortynner den 100 ganger?]
Med den enkle formelen øker pH med ½·log 100 = 1 enhet (ikke 2 som for en sterk syre). Protolysegraden øker ved fortynning.
:::
