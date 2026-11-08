---
title: Fortynning og blanding av løsninger
summary: Ved fortynning er stoffmengden konstant, så c₁V₁ = c₂V₂. Ved blanding summerer du mol av hvert stoff (eller ion) og deler på totalvolumet. Dette brukes også når en sterk syre fortynnes til ny pH.
category: grunnleggende
order: 2
tags: [fortynning, blanding, c1V1, konsentrasjon, totalvolum]
related:
  - generell-kjemi/regnetyper/mol-og-konsentrasjon
  - generell-kjemi/regnetyper/osmolaritet-ekvivalenter-ionestyrke
  - generell-kjemi/regnetyper/noytralisering-sterk-syre-base
  - generell-kjemi/regnetyper/ph-sterk-syre-og-base
  - generell-kjemi/teori/losninger-og-konsentrasjon
sources:
  - file: medod1/exercises/oppgavesett-1-2026--8017863.pdf
  - file: medod1/exercises/fasit-oppgavesett1-2026ny-1--8047271.pdf
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
  - file: medod1/material/generell-kjemi/generell-kjemi--7794006.pdf
fields:
  Formel: "c₁V₁ = c₂V₂ (fortynning); c = Σn / V_total (blanding)"
---

## Når brukes den

- Du **fortynner** en stamløsning («hvor mye stamløsning trenger jeg?», «hvor mye vann må tilsettes?»).
- Du **blander** to løsninger og skal finne konsentrasjonen av et stoff eller ion i blandingen.
- En **sterk syre/base fortynnes** og du skal finne ny pH, eller omvendt: hvor mye vann som gir en gitt pH.
- Hvis det skjer en **reaksjon** i blandingen (syre + base), bruk i stedet [blanding av sterk syre og base](/medod1/generell-kjemi/regnetyper/noytralisering-sterk-syre-base).

## Formler

**Fortynning** – stoffmengden endres ikke, bare volumet:

$$n = c_1 V_1 = c_2 V_2 \quad\Rightarrow\quad c_2 = \frac{c_1 V_1}{V_2}$$

**Blanding** (ingen reaksjon):

$$c(\text{X i blanding}) = \frac{n_1(\text{X}) + n_2(\text{X})}{V_1 + V_2}$$

| Symbol | Betydning | Enhet |
|---|---|---|
| $c_1, V_1$ | konsentrasjon og volum før fortynning | M, L (eller mL) |
| $c_2, V_2$ | konsentrasjon og **totalt** volum etter fortynning | M, L |
| $V_1+V_2$ | totalvolum ved blanding (antar at volumene er additive) | L |

Fortynningsfaktor $= V_2/V_1 = c_1/c_2$. For en sterk syre gir **10× fortynning en økning på 1 pH-enhet** (se [pH i sterk syre og base](/medod1/generell-kjemi/regnetyper/ph-sterk-syre-og-base)).

## Fremgangsmåte

**Fortynning**
1. Identifiser $c_1, V_1, c_2, V_2$. Den ukjente er som regel $V_1$ eller $V_2$.
2. Sett inn i $c_1V_1 = c_2V_2$. Enhetene for V må bare være like på begge sider.
3. Spørres det om **tilsatt vann**, er svaret $V_2 - V_1$, ikke $V_2$.

**Blanding**
1. Regn ut mol (mmol) av det aktuelle stoffet/ionet i **hver** løsning. Husk støkiometrien (CaCl₂ gir 2 Cl⁻).
2. Summer molene.
3. Del på **totalvolumet**.

## Regneeksempel

:::eksempel[Kloridkonsentrasjon i en blanding (oppgavesett 1, oppg. 2)]
1,2 L 0,8 M glukose (A) blandes med 30 mL 0,5 M CaCl₂ (B). Hva er [Cl⁻]?

1. Glukose gir ingen Cl⁻. Fra B: $n(\ce{CaCl2}) = 0{,}5 \cdot 0{,}030 = 0{,}015$ mol, så $n(\ce{Cl-}) = 2 \cdot 0{,}015 = 0{,}030$ mol.
2. Totalvolum: 1,2 L + 0,030 L = 1,23 L
3. $[\ce{Cl-}] = 0{,}030 / 1{,}23 = 0{,}024$ M (24 mM)
:::

:::eksempel[Fortynning av sterk syre fra pH 2 til pH 3 (eksamen H2023)]
Du har 2 L av en sterk syre med pH 2. Hvor mye vann må tilsettes for å få pH 3?

1. pH 2 → $[\ce{H3O+}] = 10^{-2}$ M; pH 3 → $10^{-3}$ M. Konsentrasjonen skal altså ned 10 ganger.
2. $c_1V_1 = c_2V_2$: $0{,}01 \cdot 2\ \text{L} = 0{,}001 \cdot V_2$ ⇒ $V_2 = 20$ L
3. Tilsatt vann: $20 - 2 = $ **18 L**

Alternativene var 3 / 1 / 18 / 6 L, og riktig svar er 18 L. Den klassiske fellen er å svare med totalvolumet (20 L) i stedet for tilsatt volum.
:::

:::eksempel[Lage en arbeidsløsning fra en stamløsning]
Du skal lage 250 mL 0,10 M NaOH fra en 2,0 M stamløsning.

$V_1 = \frac{c_2 V_2}{c_1} = \frac{0{,}10 \cdot 250\ \text{mL}}{2{,}0} = 12{,}5$ mL

Pipetter 12,5 mL stamløsning over i en 250 mL målekolbe og fyll opp til merket med vann (tilsatt vann ≈ 237,5 mL).
:::

## Vanlige feil

:::feil
- **Totalvolum vs. tilsatt volum.** Å «fortynne til 20 L» og å «tilsette 20 L» er to forskjellige ting.
- **Glemmer volumet til den andre løsningen** ved blanding. Del alltid på summen av volumene.
- **Glemmer støkiometri** (Cl⁻ fra CaCl₂ = 2 × saltkonsentrasjonen).
- **Bruker c₁V₁ = c₂V₂ når stoffene reagerer** (syre + base). Da må du først trekke fra stoffmengdene som reagerer.
- **Buffer:** fortynning endrer *ikke* pH i en buffer, fordi forholdet [A⁻]/[HA] er det samme. Det gjelder bare sterke syrer/baser at 10× fortynning gir 1 pH-enhet.
:::

:::eksamen
Dette spørres som «hvor mye vann må tilsettes for å endre pH fra X til Y» (H2023: 18 L) og indirekte i alle blandeoppgaver (HCl + NaOH, titrering), der totalvolumet må brukes. I buffereksempelet på eksamen V2023 (maursyre + formiat + 110 mL vann) var poenget at fortynning **ikke** påvirker bufferens pH.
:::

## Test deg selv

:::sjekk[10 mL 1,0 M HCl fortynnes til 1,0 L. Hva blir pH?]
$c_2 = 1{,}0 \cdot 10/1000 = 0{,}010$ M ⇒ pH = 2,0.
:::

:::sjekk[Hvor mye vann må du tilsette 50 mL 0,40 M NaCl for å få 0,10 M?]
$V_2 = 0{,}40 \cdot 50/0{,}10 = 200$ mL, så du tilsetter 150 mL vann.
:::

:::sjekk[100 mL 0,20 M NaCl blandes med 100 mL 0,10 M CaCl₂. Hva er [Cl⁻]?]
n(Cl⁻) = 0,020 + 2·0,010 = 0,040 mol; V = 0,200 L ⇒ [Cl⁻] = 0,20 M.
:::

:::sjekk[En sterk base har pH 12. Du fortynner 100 ganger. Ny pH?]
[OH⁻] går fra 10⁻² til 10⁻⁴ M ⇒ pOH 4 ⇒ pH = 10.
:::
