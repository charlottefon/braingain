---
title: Kompleksdannelse (Kf), løselighet med ligand og Kd
summary: "En ligand som binder metallionet trekker løselighetslikevekten mot høyre. Totalreaksjonen salt + ligand ⇌ kompleks + anion har K = Ksp·Kf. Samme likevektstankegang gir dissosiasjonskonstanten Kd = [P][L]/[PL] for protein–ligand-komplekser."
category: likevekt
order: 6
tags: [kompleks, dannelseskonstant, Kf, ligand, løselighet, dissosiasjonskonstant, Kd, affinitet]
related:
  - generell-kjemi/regnetyper/loselighetsprodukt
  - generell-kjemi/regnetyper/fellesioneffekt
  - generell-kjemi/regnetyper/kombinere-likevektskonstanter
  - generell-kjemi/teori/loselighet-og-komplekser
  - proteiner/teori/myoglobin-og-hemoglobin
sources:
  - file: medod1/material/generell-kjemi/forelesning-4-2026--8041090.pdf
    pages: "53-66"
  - file: medod1/info/formelhefte--7793986.pdf
    pages: "2"
  - file: medod1/exercises/oppgavesett2-2026-fasit--8047656.pdf
    pages: "8"
  - file: medod1/exercises/oppgavesett3-2026-fasit--8081616.pdf
    pages: "6"
  - file: medod1/exercises/oppgavesett-4-2026--8204427.pdf
  - file: medod1/exercises/oppgavesett-4-fasit-2026--8204433.pdf
    pages: "5"
  - file: medod1/exercises/kollokvium1-losningsforslag-2026--8121960.pdf
    pages: "8"
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2023-medod1-ny-v2023-med-svar--5194537.pdf
fields:
  Dannelseskonstant: "M⁺ + nL ⇌ MLₙ⁺:  Kf = [MLₙ⁺] / ([M⁺][L]ⁿ)"
  Løselighet med ligand: "K = Ksp · Kf"
  Dissosiasjonskonstant: "PL ⇌ P + L:  Kd = [P][L]/[PL]"
---

## Når brukes den

- Løselighet av et tungtløselig salt når en **ligand** er til stede (AgCl i NH₃, AgI i CN⁻, AgBr i tiosulfat).
- Konsentrasjon av **fritt metallion** i en løsning av et kompleks.
- Total $K_f$ fra trinnvise konstanter (multipliser, eller summer log K).
- **Kd** i biokjemi: protein–ligand, reseptor–legemiddel, enzym–hemmer. Lav Kd betyr høy affinitet. Samme logikk: hemmerkonstanten Kᵢ i [enzymkinetikk](/medod1/proteiner/enzymkinetikk) er en dissosiasjonskonstant, og lav P50 betyr høy O₂-affinitet for [myoglobin og hemoglobin](/medod1/proteiner/teori/myoglobin-og-hemoglobin).

## Formler

Fra formelheftet:

$$\ce{M+ + n\,L <=> ML_n+}\qquad K_f = \frac{[\ce{ML_n+}]}{[\ce{M+}][\ce{L}]^n}$$

$$\ce{PL <=> P + L}\qquad K_d = \frac{[\ce{P}][\ce{L}]}{[\ce{PL}]}$$

- $K_f$ kalles dannelses- eller stabilitetskonstant. Høy $K_f$ betyr stabilt kompleks.
- $K_d$ er den motsatte reaksjonen: for samme kompleks er $K_d = 1/K_f$. Når $[\ce{P}] = [\ce{PL}]$, er $[\ce{L}] = K_d$.
- **Salt + ligand:** $\ce{AgCl(s) + 2NH3 <=> Ag(NH3)2+ + Cl-}$ er summen av oppløsning ($K_{sp}$) og kompleksdannelse ($K_f$), så

$$K = K_{sp}\cdot K_f$$

**Verdier fra kurset:** AgCl $K_{sp} = 1{,}8\cdot10^{-10}$; Ag(NH₃)₂⁺ $K_f = 1{,}7\cdot10^7$ ($K_1 = 2{,}1\cdot10^3$, $K_2 = 8{,}1\cdot10^3$); AgI $K_{sp} = 8{,}5\cdot10^{-17}$; Ag(CN)₂⁻ $K_f = 5{,}3\cdot10^{18}$.

## Fremgangsmåte

**Løselighet med ligand**
1. Skriv oppløsningen ($K_{sp}$) og kompleksdannelsen ($K_f$). Legg dem sammen til totalreaksjonen; $K = K_{sp}K_f$.
2. Sett opp likevekt: [kompleks] = [anion] = x, og [ligand] = c₀ − n·x.
3. Sett inn i $K = \dfrac{[\text{kompleks}][\text{anion}]}{[\text{L}]^n}$. For n = 2 er venstresiden et kvadrat, så ta **kvadratroten på begge sider**: $\dfrac{x}{c_0 - 2x} = \sqrt{K}$.
4. Løs den lineære likningen for x. Løseligheten er x.

**Fritt metallion fra et kompleks**
1. Skriv dissosiasjonen $\ce{ML2+ <=> M+ + 2L}$ med $K = 1/K_f$.
2. Sett [M⁺] = x, [L] = 2x og [ML₂⁺] ≈ c₀.
3. Løs $x(2x)^2/c_0 = 1/K_f$.

**Kd:** sett målte konsentrasjoner direkte inn i $K_d = [\ce{P}][\ce{L}]/[\ce{PL}]$, med samme enhet for alle.

## Regneeksempel

:::eksempel[AgCl i 1,0 M NH₃ (forelesning 4)]
$K = K_{sp}K_f = 1{,}8\cdot10^{-10}\cdot1{,}7\cdot10^{7} = 3{,}1\cdot10^{-3}$

| | AgCl(s) | + 2NH₃ | ⇌ Ag(NH₃)₂⁺ | + Cl⁻ |
|---|---|---|---|---|
| Likevekt | – | 1,0 − 2x | x | x |

$$\frac{x^2}{(1{,}0-2x)^2} = 3{,}1\cdot10^{-3}\ \Rightarrow\ \frac{x}{1{,}0-2x} = 0{,}0553\ \Rightarrow\ x = \frac{0{,}0553}{1 + 2\cdot0{,}0553} = 0{,}050\ \text{M}$$

Løselighet ≈ 0,050 M, mot 1,3·10⁻⁵ M i vann (≈ 4000 ganger høyere). [NH₃] ≈ 0,9 M.
:::

:::eksempel[AgI i vann og i 0,010 M KCN (kollokvium 1, oppg. 8)]
**a) Vann:** $s = \sqrt{8{,}5\cdot10^{-17}} = 9{,}2\cdot10^{-9}$ M

**b) 0,010 M KCN:** $\ce{AgI(s) + 2CN- <=> Ag(CN)2- + I-}$
$K = 8{,}5\cdot10^{-17}\cdot5{,}3\cdot10^{18} = 450{,}5$
$$\frac{x}{0{,}010-2x} = \sqrt{450{,}5} = 21{,}2\ \Rightarrow\ x = \frac{21{,}2\cdot0{,}010}{1+2\cdot21{,}2} = 4{,}9\cdot10^{-3}\ \text{M}$$

Det er omtrent 500 000 ganger høyere enn i vann. Nesten all CN⁻ er brukt (2x ≈ 0,0098 M).
:::

:::eksempel[Fritt Ag⁺ i 0,10 M Ag(NH₃)₂⁺ (oppgavesett 3, oppg. 15)]
$\ce{Ag(NH3)2+ <=> Ag+ + 2NH3}$, $K = 1/K_f = 1/1{,}7\cdot10^7 = 5{,}9\cdot10^{-8}$

[Ag⁺] = x, [NH₃] = 2x, [Ag(NH₃)₂⁺] ≈ 0,10
$$\frac{x(2x)^2}{0{,}10} = 5{,}9\cdot10^{-8}\ \Rightarrow\ 4x^3 = 5{,}9\cdot10^{-9}\ \Rightarrow\ x = 1{,}1\cdot10^{-3}\ \text{M}$$
Kontroll: x ≈ 1 % av 0,10, så tilnærmingen holder.
:::

:::eksempel[Dissosiasjonskonstant for protein–ligand (oppgavesett 2, oppg. 19)]
Ved likevekt: [P] = 20 nM, [L] = 5 µM, [PL] = 10 nM.

$$K_d = \frac{[\ce{P}][\ce{L}]}{[\ce{PL}]} = \frac{20\ \text{nM}\cdot5\ \mu\text{M}}{10\ \text{nM}} = 10\ \mu\text{M}$$

Når [P] = [PL], er [L] = Kd = 10 µM. Halvparten av proteinet er da bundet. Bindingen skyldes intermolekylære krefter (hydrogenbindinger, dipol–dipol, dispersjon; i biokjemi kalt van der Waals-krefter).
:::

## Vanlige feil

:::feil
- **Ganger Ksp og Kf feil vei.** Totalreaksjonen er *summen* av oppløsning og kompleksdannelse, så K = Ksp·Kf, ikke Ksp/Kf.
- **Glemmer 2x i ligandkonsentrasjonen** (to ligander per metallion), eller glemmer å kvadrere [L].
- **Forveksler Kf og Kd:** høy Kf betyr stabilt kompleks; lav Kd betyr høy affinitet.
- **Fellesion-refleks:** AgCl i konsentrert KCl skulle ifølge fellesioneffekten bli *mindre* løselig, men kompleksdannelse (AgCl₂⁻) kan gjøre det motsatte (oppgavesett 4, oppg. 8).
:::

:::eksamen
- **AgCl(s) + 2NH₃ ⇌ Ag(NH₃)₂⁺ + Cl⁻; tilsett HNO₃** → likevekten forskyves mot **venstre**, fordi H⁺ omdanner NH₃ til NH₄⁺ (H2023, H2024, H2025).
- **Hvordan øke løseligheten til AgCl?** → tilsett **NH₃** (kompleksdannelse) (H2021, V2023).
- Koble konstant til reaksjonstype: $K_f$ = kompleksdannelse (V2026).
- Et **polydentat** (kjelaterende) ligand er ett molekyl som koordinerer ett metallion med flere grupper, f.eks. EDTA eller sitrat (V2024).
:::

## Test deg selv

:::sjekk[Ag⁺ + NH₃ ⇌ Ag(NH₃)⁺ har K₁ = 2,1·10³, og Ag(NH₃)⁺ + NH₃ ⇌ Ag(NH₃)₂⁺ har K₂ = 8,1·10³. Hva er Kf?]
Kf = K₁·K₂ = 2,1·10³ · 8,1·10³ = 1,7·10⁷.
:::

:::sjekk[AgCl i 1,0 M KCl: (a) uten kompleks, (b) med AgCl₂⁻ (Kf = 1,1·10⁵). Ksp = 1,77·10⁻¹⁰. (oppgavesett 4, oppg. 8)]
(a) s = Ksp/1,0 = 1,77·10⁻¹⁰ M. (b) AgCl + Cl⁻ ⇌ AgCl₂⁻ har K = Ksp·Kf = 1,77·10⁻¹⁰ · 1,1·10⁵ = 1,9·10⁻⁵, så [AgCl₂⁻] = K·[Cl⁻] ≈ 1,9·10⁻⁵ · 1,0 = 1,9·10⁻⁵ M. Det er høyere enn i rent vann (1,3·10⁻⁵ M).
:::

:::sjekk[Et legemiddel har Kd = 2 nM for reseptoren, et annet har Kd = 2 µM. Hvilket binder sterkest?]
Det med Kd = 2 nM. Det trengs 1000 ganger lavere ligandkonsentrasjon for å fylle halvparten av reseptorene.
:::

:::sjekk[Hvorfor brukes sitrat eller EDTA i blodprøverør?]
De er kjelaterende ligander som binder Ca²⁺ i stabile komplekser. Fritt Ca²⁺, som er nødvendig for koagulasjon, fjernes, og blodet levrer seg ikke.
:::
