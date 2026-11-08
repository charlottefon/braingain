---
title: Mol, masse og konsentrasjon
summary: Regn mellom masse, stoffmengde og molar konsentrasjon med n = m/M og c = n/V. Brukes til å lage løsninger, til å regne om prosent- og mg-mengder til molaritet, og som første trinn i nesten alle andre beregninger.
category: grunnleggende
order: 1
tags: [mol, molar masse, molaritet, konsentrasjon, stoffmengde, prosentløsning]
related:
  - generell-kjemi/regnetyper/fortynning-og-blanding
  - generell-kjemi/regnetyper/osmolaritet-ekvivalenter-ionestyrke
  - generell-kjemi/teori/losninger-og-konsentrasjon
  - generell-kjemi/regnetyper/ph-svak-syre
  - generell-kjemi/regnetyper/loselighetsprodukt
sources:
  - file: medod1/exercises/oppgavesett-1-2026--8017863.pdf
  - file: medod1/exercises/fasit-oppgavesett1-2026ny-1--8047271.pdf
  - file: medod1/exercises/kollokvium1-2026--8066247.pdf
  - file: medod1/exercises/kollokvium1-losningsforslag-2026--8121960.pdf
  - file: medod1/exercises/oppgavesett2-2026-fasit--8047656.pdf
    pages: "6"
  - file: medod1/material/generell-kjemi/forelesning2-2026--7998527.pdf
    pages: "30-31, 41"
  - file: medod1/material/generell-kjemi/generell-kjemi--7794006.pdf
fields:
  Formler: "n = m/M,  c = n/V,  m = c·V·M"
  Enheter: "g, g/mol, mol, L, mol/L (M)"
---

## Når brukes den

- Du får en **masse** (g, mg) og skal finne **stoffmengde** (mol) eller **konsentrasjon** (M), eller omvendt.
- Du skal **lage en løsning** med gitt konsentrasjon og volum («hvor mange gram veier du inn?»).
- Du får en **prosentløsning** (f.eks. 0,9 % NaCl) og skal regne den om til mol/L.
- Som første steg i pH-, buffer-, titrerings- og løselighetsoppgaver: regn **alltid** om til mol (eller mmol) før du gjør noe annet.

Petri lister konsentrasjons- og molberegninger som «viktig kunnskap fra før» – de testes sjelden alene, men ligger under nesten alle regneoppgaver på eksamen.

## Formler

$$n = \frac{m}{M} \qquad c = \frac{n}{V} \qquad m = c \cdot V \cdot M$$

| Symbol | Betydning | Enhet |
|---|---|---|
| $n$ | stoffmengde | mol (eller mmol) |
| $m$ | masse | g (eller mg) |
| $M$ | molar masse (sum av atommassene) | g/mol |
| $c$ | molar konsentrasjon (molaritet), skrives også [X] | mol/L = M |
| $V$ | volum av **ferdig løsning** | L (eller mL) |

**Nyttige enhetspar** (samme tallverdi): mmol/mL = mol/L; mg/mmol = g/mol; µmol/mL = mmol/L.

**Prosent (vekt/volum):** $x\,\%$ = $x$ g per 100 mL løsning = $10x$ g/L.

**Ioner fra salter:** $c(\text{ion}) = c(\text{salt}) \times$ antall av ionet i formelen. Eksempel: 0,5 M CaCl₂ gir 0,5 M Ca²⁺ og 1,0 M Cl⁻.

## Fremgangsmåte

1. Skriv opp det som er gitt, med enheter. Gjør om mL → L (eller jobb konsekvent i mmol og mL).
2. Finn molar masse $M$ fra det periodiske systemet hvis den ikke er gitt (H 1,008; C 12,01; N 14,01; O 16,00; Na 22,99; Mg 24,31; Cl 35,45; Ca 40,08). Avrundede heltall (H 1, C 12, O 16) holder ofte – fasiten bruker dem for acetylsalisylsyre (180 g/mol).
3. Bruk $n = m/M$ for å gå fra masse til mol, og $c = n/V$ for å gå fra mol til konsentrasjon (eller baklengs).
4. For salter: multipliser med støkiometrien for å få ionekonsentrasjonene.
5. Sjekk størrelsesorden og antall gjeldende siffer.

## Regneeksempel

:::eksempel[Lage 100 mL med 1 M NaCl og 0,1 M MgCl₂ (oppgavesett 1, oppg. 1)]
**Gitt:** V = 100 mL = 0,100 L; c(NaCl) = 1 M; c(MgCl₂) = 0,1 M.
$M(\ce{NaCl}) = 22{,}99 + 35{,}45 = 58{,}44$ g/mol; $M(\ce{MgCl2}) = 24{,}31 + 2\cdot 35{,}45 = 95{,}21$ g/mol.

1. $n(\ce{NaCl}) = c \cdot V = 1\ \text{M} \cdot 0{,}100\ \text{L} = 0{,}100$ mol → $m = 0{,}100 \cdot 58{,}44 = 5{,}84$ g
2. $n(\ce{MgCl2}) = 0{,}1 \cdot 0{,}100 = 0{,}0100$ mol → $m = 0{,}0100 \cdot 95{,}21 = 0{,}952$ g

**Fremgangsmåte på lab:** vei inn 5,84 g NaCl og 0,952 g MgCl₂. Løs saltene i litt mindre enn 100 mL vann i en 100 mL målekolbe, og fyll opp til merket. Volumet som teller er volumet av **ferdig løsning**, ikke vannet du tilsetter.
:::

:::eksempel[Ibuprofen og fysiologisk saltvann (oppgavesett 1 oppg. 4; kollokvium 1 oppg. 10d)]
**a) Ibuprofen:** M = 206,3 g/mol, n = 82 mmol.
$m = n \cdot M = 0{,}082\ \text{mol} \cdot 206{,}3\ \text{g/mol} = 16{,}9\ \text{g}$
(Snarvei: mmol × g/mol = mg, altså 82 · 206,3 = 16 917 mg.)

**b) 0,9 % NaCl** («fysiologisk saltvann»), M = 58,44 g/mol:
0,9 % = 0,9 g per 100 mL = 9,0 g/L
$c = \frac{9{,}0\ \text{g/L}}{58{,}44\ \text{g/mol}} = 0{,}154\ \text{mol/L}$
(Løsningsforslaget bruker M = 58,5 og får samme svar, 0,154 M.)

Fordi NaCl gir to partikler, er osmolariteten ≈ 0,31 osmol/L – omtrent som i plasma. Se [osmolaritet](/medod1/generell-kjemi/regnetyper/osmolaritet-ekvivalenter-ionestyrke).
:::

:::eksempel[Konsentrasjon av acetylsalisylsyre fra tabletter (oppgavesett 2, oppg. 12)]
Tre tabletter med 324 mg acetylsalisylsyre (C₉H₈O₄) løses i 300 mL vann.

1. $M = 9\cdot 12 + 8\cdot 1 + 4\cdot 16 = 180$ g/mol
2. $m = 3 \cdot 324\ \text{mg} = 972\ \text{mg} = 0{,}972$ g
3. $n = 0{,}972 / 180 = 5{,}4\cdot 10^{-3}$ mol
4. $c = 5{,}4\cdot 10^{-3}\ \text{mol} / 0{,}300\ \text{L} = 0{,}018$ M

Denne konsentrasjonen går videre inn i [pH i svak syre](/medod1/generell-kjemi/regnetyper/ph-svak-syre) (gir pH ≈ 2,66).
:::

## Vanlige feil

:::feil
- **Glemmer å gjøre mL om til L.** 30 mL er 0,030 L. Jobber du i mmol, må volumet være i mL.
- **Bruker volumet av vann i stedet for volumet av ferdig løsning.** Molaritet er mol per liter *løsning*.
- **Glemmer støkiometrien i saltet.** 0,5 M CaCl₂ gir **1,0 M** Cl⁻, ikke 0,5 M.
- **Feil prosent-omregning.** 0,9 % er 9 g/L, ikke 0,9 g/L.
:::

:::eksamen
Ren mol/masse-regning kommer sjelden som egen oppgave, men den er alltid første steg i eksamensoppgaver om titrering (mmol H₂A⁺ og mmol NaOH), blanding av syre og base, og løselighet («hvor mange gram løses i 1 L?», g/L ↔ mol/L). Feil her gir feil sluttsvar selv om resten av metoden er riktig.
:::

## Test deg selv

:::sjekk[Hvor mange gram glukose (M = 180 g/mol) trenger du til 250 mL av en 0,20 M løsning?]
$n = 0{,}20 \cdot 0{,}250 = 0{,}050$ mol; $m = 0{,}050 \cdot 180 = 9{,}0$ g.
:::

:::sjekk[Hva er [Na⁺] og [SO₄²⁻] i 0,15 M Na₂SO₄?]
Hver Na₂SO₄ gir 2 Na⁺ og 1 SO₄²⁻: [Na⁺] = 0,30 M og [SO₄²⁻] = 0,15 M.
:::

:::sjekk[En 5 % glukoseløsning (w/v) – hva er konsentrasjonen i mol/L?]
5 g per 100 mL = 50 g/L; 50 / 180 = 0,28 M.
:::

:::sjekk[0,0981 g PbF₂ (M = 245,2 g/mol) er løst i 200 mL. Hva er [Pb²⁺]? (kollokvium 1, oppg. 7)]
$n = 0{,}0981/245{,}2 = 4{,}0\cdot10^{-4}$ mol; $c = 4{,}0\cdot10^{-4}/0{,}200 = 2{,}0\cdot10^{-3}$ M. Dette brukes videre til å finne $K_{sp}$ i [løselighetsprodukt](/medod1/generell-kjemi/regnetyper/loselighetsprodukt).
:::
