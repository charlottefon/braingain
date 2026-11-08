---
title: Snu, multiplisere og summere reaksjoner (3 regler for K)
summary: "Snur du reaksjonen, blir K til 1/K. Ganger du koeffisientene med n, blir K til Kⁿ. Legger du sammen reaksjoner, multipliseres K-ene. Dette er den hyppigste regneoppgaven i generell kjemi på eksamen."
category: likevekt
order: 2
tags: [likevektskonstant, regler for K, snu reaksjon, koblede reaksjoner, Ka, Kb, Kw, Kf]
related:
  - generell-kjemi/regnetyper/likevektskonstant-fra-konsentrasjoner
  - generell-kjemi/regnetyper/kompleksdannelse-og-loselighet
  - generell-kjemi/regnetyper/ph-svak-base-og-salt
  - generell-kjemi/regnetyper/fri-energi-og-likevekt
  - generell-kjemi/teori/kjemisk-likevekt
sources:
  - file: medod1/material/generell-kjemi/forelesning2-2026--7998527.pdf
    pages: "58-61"
  - file: medod1/info/formelhefte--7793986.pdf
    pages: "3"
  - file: medod1/exercises/oppgavesett2-2026-fasit--8047656.pdf
    pages: "6"
  - file: medod1/exercises/oppgavesett-4-fasit-2026--8204433.pdf
  - file: medod1/exercises/hjemmearbeid-fra-forelesning-3--page-374127.html
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
fields:
  Snu reaksjonen: "K' = 1/K"
  Gang med n: "K' = Kⁿ"
  Summer reaksjoner: "K = K₁ · K₂ · K₃ …"
---

## Når brukes den

- Du kjenner K for én reaksjon og skal finne K for den **omvendte**, en **oppskalert** eller en **sammensatt** reaksjon.
- Metabolske veier (A ⇌ B ⇌ C ⇌ D): total K = produktet av trinnenes K. Tilsvarende summeres ΔG° for koblede reaksjoner (se [ΔG° = −RT ln K](/medod1/generell-kjemi/regnetyper/fri-energi-og-likevekt)).
- Syre/base: K for $\ce{A- + H3O+ <=> HA + H2O}$ er $1/K_a$, og $K_b = K_w/K_a$. Reaksjonen mellom to syrepar er $K_{a,1}/K_{a,2}$.
- Løselighet med kompleks: $K = K_{sp}\cdot K_f$ (se [kompleksdannelse](/medod1/generell-kjemi/regnetyper/kompleksdannelse-og-loselighet)).
- Trinnvise konstanter oppgitt som logaritmer: log K summeres.

## Formler

Fra formelheftet («3 enkle huskeregler for likevektskonstanter»):

| Operasjon på reaksjonen | Ny konstant |
|---|---|
| Snu den (bytt reaktanter og produkter) | $K' = \dfrac{1}{K}$ |
| Multipliser alle koeffisienter med $n$ | $K' = K^n$ (gange med ½ gir $\sqrt{K}$) |
| Legg sammen to eller flere reaksjoner | $K = K_1 \cdot K_2 \cdot K_3 \cdots$ |
| Snu **og** multipliser med $n$ | $K' = \dfrac{1}{K^n}$ |

I logaritmeform: $\log K_{tot} = \log K_1 + \log K_2 + \ldots$

**Syre/base-spesialtilfeller:**
- $\ce{HA + H2O <=> A- + H3O+}$: $K_a$. Snudd: $\ce{A- + H3O+ <=> HA + H2O}$: $1/K_a$.
- $\ce{A- + H2O <=> HA + OH-}$: $K_b = K_w/K_a$, fordi denne reaksjonen = (snudd syrereaksjon) + (vannets egendissosiasjon): $\frac{1}{K_a}\cdot K_w$.

## Fremgangsmåte

1. Skriv opp målreaksjonen og de gitte reaksjonene med sine K.
2. For hver gitt reaksjon: må den **snus** (stoffet står på feil side)? Må den **multipliseres** (koeffisientene stemmer ikke)? Juster K tilsvarende.
3. Sjekk at summen av de justerte reaksjonene gir målreaksjonen. Mellomprodukter skal kansellere.
4. Multipliser de justerte K-ene.

## Regneeksempel

:::eksempel[Snudd og doblet (eksamen H2024 og H2023)]
A + 2B ⇌ C + 3D har K = 4. Hva er K for 2C + 6D ⇌ 2A + 4B?

1. Reaksjonen er **snudd**: $1/4$
2. Koeffisientene er **doblet**: $(1/4)^2$
3. $K' = \dfrac{1}{4^2} = \dfrac{1}{16} = 0{,}0625 \approx$ **0,063**

(H2023 hadde K = 5, som gir 1/25 = 0,04. V2025 spurte generelt om 2C + 2D ⇌ 2A + 2B og hadde svaret $1/K^2$. V2024 hadde svaret $1/K^3$.)
:::

:::eksempel[Summere reaksjoner (eksamen H2025, H2022 og V2023)]
**H2025/H2022:** A + B ⇌ C har Kc = 0,5, og 2C ⇌ D + E har Kc = 100. Finn K for 2A + 2B ⇌ D + E.
1. Første reaksjon må **dobles** for å gi 2C: $K = 0{,}5^2 = 0{,}25$
2. Legg til 2C ⇌ D + E: $K_{tot} = 0{,}25 \cdot 100 = $ **25**

**V2023 (og hjemmearbeid forelesning 3):** A + B ⇌ C + D har K₁ = 2·10³, og C ⇌ E har K₂ = 100.
Summen gir A + B ⇌ D + E (C kansellerer): $K = 2\cdot10^3 \cdot 100 = $ **2·10⁵**
:::

:::eksempel[To syrepar: HA + B⁻ ⇌ A⁻ + HB (oppgavesett 2, oppg. 10)]
$K_a(\ce{HA}) = 1{,}2\cdot10^{-6}$ og $K_a(\ce{HB}) = 4{,}0\cdot10^{-4}$.

1. $\ce{HA + H2O <=> A- + H3O+}$: $K_{a,HA}$
2. $\ce{B- + H3O+ <=> HB + H2O}$ (syrereaksjonen til HB **snudd**): $1/K_{a,HB}$
3. Summen gir $\ce{HA + B- <=> A- + HB}$:

$$K = \frac{K_{a,HA}}{K_{a,HB}} = \frac{1{,}2\cdot10^{-6}}{4{,}0\cdot10^{-4}} = 3{,}0\cdot10^{-3}$$

K < 1: likevekten ligger mot venstre, fordi HB er den sterkeste syren.
:::

:::eksempel[Trinnvise konstanter som logaritmer (oppgavesett 4, oppg. 14)]
Zn²⁺ + 4NH₃ ⇌ [Zn(NH₃)₄]²⁺ i fire trinn: log K₁ = 2,37, log K₂ = 2,44, log K₃ = 2,50, log K₄ = 2,15.

$\log K_f = 2{,}37 + 2{,}44 + 2{,}50 + 2{,}15 = 9{,}46$ ⇒ $K_f = 10^{9{,}46} = 2{,}9\cdot10^{9}$

Kf er svært stor, så komplekset er stabilt.
:::

## Vanlige feil

:::feil
- **Legger sammen K-ene** i stedet for å multiplisere (K₁ + K₂ + K₃ er et standard distraktoralternativ).
- **Ganger K med n** i stedet for å opphøye: å doble reaksjonen gir $K^2$, ikke $2K$. Tilsvarende gir snudd + doblet $1/K^2$, ikke $2/K$ eller $1/(2K)$.
- **−K for snudd reaksjon** (V2026-distraktoren «−Ka»). Det skal være $1/K$.
- **Blander 1/Ka og Kw/Ka.** $\ce{A- + H3O+ -> HA + H2O}$ gir $1/K_a$, mens $\ce{A- + H2O -> HA + OH-}$ gir $K_b = K_w/K_a$.
- Merk forskjellen fra E°: cellepotensialet **multipliseres ikke** når halvreaksjonen ganges opp, men K gjør det.
:::

:::eksamen
Dette er det mest stabile eksamenstemaet i generell kjemi og har kommet på **alle** eksamener 2021–2026, ofte to ganger per sett:
- snudd + skalert: $1/K^2$, $1/K^3$, $(1/4)^2 = 0{,}063$, $(1/5)^2 = 0{,}04$
- summerte reaksjoner: $0{,}5^2\cdot100 = 25$, $2\cdot10^3\cdot100 = 2\cdot10^5$, metabolsk vei $K_1K_2K_3$ (V2026)
- syre/base: $1/K_a$ (V2026, H2021) og $K_w/K_a = K_b$ (H2024)
:::

## Test deg selv

:::sjekk[N₂O₄ ⇌ 2NO₂ har Kc = 0,212. Hva er K for 2NO₂ ⇌ N₂O₄ og for 2N₂O₄ ⇌ 4NO₂? (forelesning 2)]
Snudd: 1/0,212 = 4,72. Doblet: 0,212² = 0,0449.
:::

:::sjekk[A ⇌ B (K₁ = 10), B ⇌ C (K₂ = 0,01), C ⇌ D (K₃ = 50). Hva er K for A ⇌ D, og hva er K for D ⇌ A?]
K = 10 · 0,01 · 50 = 5. Snudd: 1/5 = 0,2.
:::

:::sjekk[Eddiksyre har Ka = 1,8·10⁻⁵. Hva er K for CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻?]
$K_b = K_w/K_a = 10^{-14}/1{,}8\cdot10^{-5} = 5{,}6\cdot10^{-10}$.
:::

:::sjekk[Hva er K for ½A ⇌ ½B hvis A ⇌ B har K = 16?]
Å gange med ½ gir $K^{1/2} = \sqrt{16} = 4$.
:::

:::sjekk[Ag₂CrO₄(s) ⇌ 2Ag⁺ + CrO₄²⁻ har Ksp = 1,9·10⁻¹², og Ag⁺ + 2NH₃ ⇌ Ag(NH₃)₂⁺ har Kf = 1,7·10⁷. Finn K for Ag₂CrO₄(s) + 4NH₃ ⇌ 2Ag(NH₃)₂⁺ + CrO₄²⁻ (oppgavesett 4, oppg. 4).]
Kompleksreaksjonen må dobles: $K = K_{sp}\cdot K_f^2 = 1{,}9\cdot10^{-12}\cdot(1{,}7\cdot10^7)^2 = 1{,}9\cdot10^{-12}\cdot2{,}89\cdot10^{14} \approx 550$.
:::
