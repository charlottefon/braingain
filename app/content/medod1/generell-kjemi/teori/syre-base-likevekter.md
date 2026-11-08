---
title: Syre–base-likevekter – Ka, Kb og pH i svake syrer og baser
summary: Svake syrer og baser er i likevekt med vann og beskrives av Ka og Kb (pKa = −log Ka; lav pKa betyr sterk syre). For korresponderende par gjelder Ka·Kb = Kw (pKa + pKb = 14). pH i en svak syre finnes med ICE-tabell og tilnærmingen x ≪ c, som gir pH = ½(pKa − log c), eller med andregradslikningen. Konstantene avhenger av ionestyrken.
order: 9
tags: [Ka, Kb, pKa, pKb, svak syre, svak base, ICE-tabell, andregradslikning, x<<c, ionestyrke, maursyre]
related:
  - generell-kjemi/teori/syrer-baser-og-ph
  - generell-kjemi/teori/buffere
  - generell-kjemi/regnetyper/ph-svak-syre
  - generell-kjemi/regnetyper/ph-svak-base-og-salt
  - generell-kjemi/regnetyper/kombinere-likevektskonstanter
  - proteiner/teori/aminosyrer
sources:
  - file: medod1/material/generell-kjemi/forelesning3-del1-3-2026--8030911.pdf
    pages: "33-50"
  - file: medod1/material/generell-kjemi/sporretime1-2026-v2--8130558.pdf
    pages: "27-29"
  - file: medod1/info/formelhefte--7793986.pdf
  - file: medod1/exercises/oppgavesett2-2026-fasit--8047656.pdf
  - file: medod1/exercises/oppgavesett3-2026-fasit--8081616.pdf
  - file: medod1/exercises/oppgavesett-4-fasit-2026--8204433.pdf
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
  - file: medod1/exams/2025-medod1-ny-v2025-med-svar--7269873.pdf
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
---

## Syrekonstanten Ka

En svak syre i vann:

$$\ce{HA(aq) + H2O(l) <=> H3O+(aq) + A-(aq)} \qquad K_a = \frac{[H_3O^+][A^-]}{[HA]}$$

$$pK_a = -\log K_a$$

Jo sterkere syren er, desto lenger mot høyre ligger likevekten. Det gir **høyere Ka og lavere pKa**.

## Basekonstanten Kb

En svak base i vann:

$$\ce{B(aq) + H2O(l) <=> BH+(aq) + OH-(aq)} \qquad K_b = \frac{[BH^+][OH^-]}{[B]}$$

$$pK_b = -\log K_b$$

**Høyere Kb og lavere pKb betyr sterkere base.**

## Ka og Kb for korresponderende par

Summen av syrereaksjonen for HA og basereaksjonen for A⁻ er vannets egendissosiasjon. Etter regelen om å summere reaksjoner blir da:

$$K_a\cdot K_b = K_w = 1{,}0\cdot10^{-14} \qquad pK_a + pK_b = 14$$

En sterk syre har altså en svak korresponderende base, og omvendt.

:::eksamen
- $K_a = 1{,}0\cdot10^{-4}$ gir korresponderende base med pKb = **10** (V2025).
- Riktig formulering er «$K_a = K_w/K_b$». Feil alternativer er «pKw = pKa·pKb», «Ka·Kb = 14» og «Kb = 1/Ka» (V2025, H2022).
- $K$ for $\ce{A- + H2O <=> HA + OH-}$ er $K_w/K_a$ (= $K_b$). $K$ for $\ce{A- + H3O+ <=> HA + H2O}$ er $1/K_a$ (H2024, V2026).
- «Vann er en amfolytt. Hvor mange av utsagnene er riktige?» Riktige er $K_w = [H_3O^+][OH^-]$, $pK_w = 14$ og $pK_w = pK_a + pK_b$. Feil er «$K_w = 14$», «$K_w = K_a + K_b$» og «$K_w = -\log[H_2O]$». Svaret var **2** både i H2023 og H2025 (ulike kombinasjoner av utsagnene).
:::

Ka- og Kb-verdier står i tabeller. **På eksamen blir de oppgitt i oppgaven**, men ikke $K_w$.

## pH i en svak syre – fremgangsmåten

Forelesningseksempel: **0,1 M maursyre**, HCOOH, med $K_a = 1{,}82\cdot10^{-4}$.

1. **Skriv reaksjonene.** Både $\ce{HCOOH + H2O <=> H3O+ + HCOO-}$ ($K_a = 1{,}82\cdot10^{-4}$) og vannets egendissosiasjon ($K_w = 10^{-14}$) foregår.
2. **Finn den dominerende reaksjonen** (høyest K). Det er syrereaksjonen, og vannets bidrag (10⁻⁷ M) kan neglisjeres.
3. **Lag tabell:**

| | HCOOH | H₃O⁺ | HCOO⁻ |
|---|---|---|---|
| Før | 0,1 | ≈ 0 | 0 |
| Endring | −x | +x | +x |
| Likevekt | 0,1 − x | x | x |

4. **Sett inn i Ka:** $\dfrac{x^2}{0{,}1-x} = 1{,}82\cdot10^{-4}$.
5. **Tilnærming x ≪ c:** $\dfrac{x^2}{0{,}1} = 1{,}82\cdot10^{-4}$ gir $x = \sqrt{0{,}1\cdot1{,}82\cdot10^{-4}} = 4{,}27\cdot10^{-3}$ M og **pH = 2,37**.
6. **Eksakt med andregradslikningen:** $x^2 + K_a x - K_a c = 0$ gir
$$x = \frac{-K_a + \sqrt{K_a^2 + 4K_a c}}{2} = 4{,}18\cdot10^{-3}\ \text{M}$$
og **pH = 2,38**. Den negative roten (−4,36·10⁻³; lysbildet skriver −8,71·10⁻³, altså før divisjonen med 2) gir ingen mening. Tilnærmingen er altså god her.

### Den «enkle formelen» (står i formelheftet)

Tilnærmingen x ≪ c gir $[H_3O^+] = \sqrt{K_a c}$. Tar man −log på begge sider:

$$\boxed{pH = \tfrac12\,(pK_a - \log c)} \qquad \text{svak base: } pOH = \tfrac12\,(pK_b - \log c),\ pH = 14 - pOH$$

c er **startkonsentrasjonen**. Test for maursyre: pKa = 3,74, så pH = ½(3,74 + 1) = **2,37** ✓.

:::husk
**Når holder tilnærmingen x ≪ c?**
- Generelt når $K_a < 10^{-4}$ (eller $K_b < 10^{-4}$), og når $[HA] > 100\cdot K_a$. Da er x under 5 % av c.
- Er Ka relativt høy, eller c lav, må man være forsiktig og bruke andregradslikningen. Det er **alltid** lov å bruke den.
- I acetylsalisylsyre-oppgaven (oppgavesett 2 oppg. 12: Ka = 3,0·10⁻⁴, c = 0,018 M) gir den enkle formelen pH 2,63 og andregradslikningen 2,66. Her er man på grensen.
- H₃O⁺ og OH⁻ fra vannets egendissosiasjon kan normalt neglisjeres.
:::

Utregninger: [pH i svak syre](/medod1/generell-kjemi/regnetyper/ph-svak-syre) og [pH i svak base og salt av svak syre](/medod1/generell-kjemi/regnetyper/ph-svak-base-og-salt).

:::eksempel[Oppgavesett 4 oppg. 1: pH i 0,1 M NH₃ (Kb = 1,8·10⁻⁵)]
$\ce{NH3 + H2O <=> NH4+ + OH-}$ gir $x^2/0{,}1 = 1{,}8\cdot10^{-5}$, så $x = [OH^-] = 1{,}34\cdot10^{-3}$ M.
pOH = 2,87 og **pH = 11,13**.
:::

:::eksempel[Eksamen H2023: pH i 0,100 M natriumacetat (Ka(HAc) = 1,80·10⁻⁵)]
Acetat er en svak base: $K_b = K_w/K_a = 5{,}56\cdot10^{-10}$.
$[OH^-] = \sqrt{0{,}100\cdot5{,}56\cdot10^{-10}} = 7{,}45\cdot10^{-6}$ M, så pOH = 5,13 og **pH = 8,87**.
Distraktorene 5,13 (pOH) og 7,45 (mantissen) er typiske feller.
:::

:::eksamen
«pH i 0,1 M melkesyre, Ka = 1,4·10⁻⁴»: $\sqrt{1{,}4\cdot10^{-5}} = 3{,}74\cdot10^{-3}$ M gir **pH 2,4**. Alternativet 3,7·10⁻³ er [H₃O⁺], ikke pH (V2026, H2025). Svak syre med pKa 4,48, 0,1 M: ½(4,48 + 1) = **2,74** (H2024).
:::

## Hvordan Kb for basen finnes fra pH

Oppgavesett 2 oppg. 15: 0,10 M av en svak base har pH 8,75.
pOH = 5,25, så $[OH^-] = 5{,}62\cdot10^{-6}$ M. Da er $K_b = \dfrac{x^2}{c - x} \approx \dfrac{(5{,}62\cdot10^{-6})^2}{0{,}10} = 3{,}2\cdot10^{-10}$.

## Flerprotiske syrer – kort

Flerprotiske syrer avgir protonene **trinnvis** og har én Ka per trinn. $K_{a1} > K_{a2} > K_{a3}$, slik at pKa øker for hvert trinn. Ved pH-beregning tar man utgangspunkt i den **dominerende** reaksjonen. Se [flerprotiske syrer og aminosyrer](/medod1/generell-kjemi/teori/flerprotiske-syrer-og-aminosyrer).

## Konstantene avhenger av løsningen

Kjemikere og biologer bruker ulike verdier for samme syre. Eksempel: **pKa2 for fosforsyre er 7,2** (kjemi, ionestyrke ≈ 0) og **6,8** i biokjemi. Grunnen er at alle stoffer i en løsning vekselvirker med hverandre, og ladde og polare molekyler påvirkes mest. **Ionestyrken** er derfor en viktig faktor. I biologi/biokjemi bruker man konstanter tilpasset **ionestyrke 0,2 M** (fysiologisk). Fosforsyre har da pK 1,99 / 6,84 / 11,65, og karbonsyre har pKa1 = 6,24 ved 25 °C og **6,1 ved 37 °C**.

## Test deg selv

:::sjekk[Syre HA har Ka = 1,2·10⁻⁶ og HB har Ka = 4,0·10⁻⁴. Hvilken er sterkest, og hva er K for HA + B⁻ ⇌ A⁻ + HB?]
HB er sterkest (høyest Ka). Reaksjonen er syrereaksjonen til HA pluss den snudde syrereaksjonen til HB, så $K = K_a(HA)/K_a(HB) = 3{,}0\cdot10^{-3}$. Likevekten ligger til venstre, fordi den sterkeste syren og basen reagerer til den svakeste.
:::

:::sjekk[Hvorfor kan man som regel se bort fra H₃O⁺ fra vannets egendissosiasjon når man regner pH i en svak syre?]
Ka for syren er mange tierpotenser større enn Kw, og syren gir [H₃O⁺] i området 10⁻⁵–10⁻² M. Vannets 10⁻⁷ M (som også undertrykkes av syren) blir da neglisjerbart. Unntak er svært fortynnede eller svært svake syrer.
:::

:::sjekk[Når må man bruke andregradslikningen i stedet for pH = ½(pKa − log c)?]
Når x ikke er ≪ c, altså når x > 5 % av c. Det skjer typisk når Ka > ~10⁻⁴ eller når c er lav (c < 100·Ka). Andregradslikningen er alltid riktig.
:::

:::sjekk[Hva er pKb for basen til en syre med pKa 4,74, og hva sier det om basen?]
pKb = 14 − 4,74 = 9,26. Basen (acetat) er svak, Kb ≈ 5,6·10⁻¹⁰.
:::
