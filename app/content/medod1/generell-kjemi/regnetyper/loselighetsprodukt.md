---
title: Løselighet ↔ Ksp
summary: "Molar løselighet s er mengden salt som løses per liter mettet løsning. For AB er Ksp = s², for AB₂ eller A₂B er Ksp = 4s³, og for AB₃ er Ksp = 27s⁴. Gå begge veier: fra s til Ksp, og fra Ksp til s, mol/L og g/L."
category: likevekt
order: 4
tags: [løselighet, løselighetsprodukt, Ksp, tungtløselig salt, mettet løsning, molar løselighet]
related:
  - generell-kjemi/regnetyper/fellesioneffekt
  - generell-kjemi/regnetyper/kompleksdannelse-og-loselighet
  - generell-kjemi/regnetyper/reaksjonskvotient
  - generell-kjemi/regnetyper/mol-og-konsentrasjon
  - generell-kjemi/teori/loselighet-og-komplekser
  - cellebiologi/sammensatte-tema/saliva-og-salivas-kjemi
sources:
  - file: medod1/material/generell-kjemi/forelesning-4-2026--8041090.pdf
    pages: "40-48"
  - file: medod1/info/formelhefte--7793986.pdf
    pages: "1"
  - file: medod1/exercises/oppgavesett2-2026-fasit--8047656.pdf
    pages: "1"
  - file: medod1/exercises/oppgavesett3-2026-fasit--8081616.pdf
    pages: "7"
  - file: medod1/exercises/oppgavesett-4-fasit-2026--8204433.pdf
    pages: "5"
  - file: medod1/exercises/kollokvium1-losningsforslag-2026--8121960.pdf
    pages: "4, 7"
  - file: medod1/exams/2022-medod1-h2022-med-svar--4750110.pdf
  - file: medod1/exams/2025-medod1-ny-v2025-med-svar--7269873.pdf
fields:
  Formel: "AₐBᵦ(s) ⇌ aAⁿ⁺ + bBᵐ⁻:  Ksp = [Aⁿ⁺]ᵃ[Bᵐ⁻]ᵇ"
  Sammenheng: "AB: s²;  AB₂/A₂B: 4s³;  AB₃: 27s⁴"
---

## Når brukes den

- Finn **molar løselighet** (mol/L) eller **masse som løses** (g/L) fra en oppgitt $K_{sp}$.
- Finn $K_{sp}$ fra en målt ionekonsentrasjon eller masse i mettet løsning.
- Sammenlign løselighet for salter: bare direkte med Ksp hvis saltene har **samme formeltype**.
- Grunnlag for fellesion-, pH- og komplekseffekter (tannemalje, nyrestein, BaSO₄ som kontrastmiddel).

## Formler

$$\ce{A_aB_b(s) <=> } a\,\ce{A^{n+}(aq)} + b\,\ce{B^{m-}(aq)}\qquad K_{sp} = [\ce{A^{n+}}]^a[\ce{B^{m-}}]^b$$

Det faste stoffet tas ikke med, fordi relativ konsentrasjon er 1. Med molar løselighet $s$ blir $[\ce{A^{n+}}] = a\,s$ og $[\ce{B^{m-}}] = b\,s$:

| Type | Eksempel | $K_{sp}$ uttrykt med $s$ | $s$ |
|---|---|---|---|
| AB | AgCl, BaSO₄ | $s\cdot s = s^2$ | $\sqrt{K_{sp}}$ |
| AB₂ | PbI₂, MgF₂, Ca(OH)₂ | $s(2s)^2 = 4s^3$ | $\sqrt[3]{K_{sp}/4}$ |
| A₂B | Ag₂S, Ag₂CrO₄ | $(2s)^2 s = 4s^3$ | $\sqrt[3]{K_{sp}/4}$ |
| AB₃ | Al(OH)₃ | $s(3s)^3 = 27s^4$ | $\sqrt[4]{K_{sp}/27}$ |
| A₃B₂ | Ba₃(PO₄)₂ | $(3s)^3(2s)^2 = 108s^5$ | – |

Løselighet i g/L $= s \cdot M$.

**Verdier fra forelesningene:** AgCl $K_{sp} = 1{,}8\cdot10^{-10}$; PbI₂ $1{,}0\cdot10^{-8}$ (M = 461 g/mol); hydroksyapatitt Ca₅(PO₄)₃OH ≈ $10^{-53}$; fluorapatitt ≈ $10^{-57}$.

## Fremgangsmåte

**Fra Ksp til løselighet**
1. Skriv oppløsningslikningen og Ksp-uttrykket.
2. Sett [ion] = (koeffisient)·s ut fra støkiometrien.
3. Sett inn, løs for s (kvadratrot, tredjerot …).
4. Ved behov: g/L = s · M.

**Fra målt konsentrasjon til Ksp**
1. Finn s (eller konsentrasjonen av ett ion). Regn om fra gram hvis nødvendig.
2. Finn konsentrasjonen av det **andre** ionet via støkiometrien (F⁻ = 2·[Pb²⁺]).
3. Sett inn i Ksp-uttrykket **med eksponenter**.

## Regneeksempel

:::eksempel[AgCl og PbI₂ i vann (forelesning 4)]
**AgCl:** $K_{sp} = [\ce{Ag+}][\ce{Cl-}] = s^2 = 1{,}8\cdot10^{-10}$ ⇒ $s = \sqrt{1{,}8\cdot10^{-10}} = 1{,}3\cdot10^{-5}$ M

**PbI₂:** $\ce{PbI2(s) <=> Pb^2+ + 2I-}$, [Pb²⁺] = s, [I⁻] = 2s
$K_{sp} = s(2s)^2 = 4s^3 = 1{,}0\cdot10^{-8}$ ⇒ $s = \sqrt[3]{2{,}5\cdot10^{-9}} = 1{,}36\cdot10^{-3}$ M
[I⁻] = 2s = 2,71·10⁻³ M; i masse: $1{,}36\cdot10^{-3}\ \text{mol/L}\cdot461\ \text{g/mol} = 0{,}63$ g/L
:::

:::eksempel[Fra målt konsentrasjon til Ksp (eksamen + kollokvium 1)]
**BaSO₄** (kollokvium 1 oppg. 5; eksamen H2024, V2024): [Ba²⁺] = 1,05·10⁻⁵ M i mettet løsning.
$K_{sp} = (1{,}05\cdot10^{-5})^2 = 1{,}10\cdot10^{-10}$

**PbI₂** (eksamen V2025, H2023): s = 1,3·10⁻³ M.
$K_{sp} = s(2s)^2 = 4(1{,}3\cdot10^{-3})^3 = 8{,}8\cdot10^{-9}$

**Ag₂S** (eksamen H2022): [S²⁻] = 1,077·10⁻¹⁷ M ⇒ [Ag⁺] = 2,154·10⁻¹⁷ M.
$K_{sp} = [\ce{Ag+}]^2[\ce{S^2-}] = (2{,}154\cdot10^{-17})^2(1{,}077\cdot10^{-17}) = 5{,}0\cdot10^{-51}$
(Alternativet 1,25·10⁻⁵¹ = s³ er fellen, fordi faktoren 4 er glemt.)

**PbF₂** (kollokvium 1, oppg. 7): 0,0981 g løst i 200 mL, M = 245,2 g/mol.
$n = 4{,}0\cdot10^{-4}$ mol ⇒ [Pb²⁺] = 2,0·10⁻³ M, [F⁻] = 4,0·10⁻³ M
$K_{sp} = (2{,}0\cdot10^{-3})(4{,}0\cdot10^{-3})^2 = 3{,}2\cdot10^{-8}$
:::

:::eksempel[Gram som løses, og AB₃-salt (oppgavesett 4 oppg. 9, oppgavesett 2 oppg. 1a, oppgavesett 3 oppg. 17)]
**MgF₂** ($K_{sp} = 7\cdot10^{-9}$, M = 62,3 g/mol): $4s^3 = 7\cdot10^{-9}$ ⇒ $s = 1{,}2\cdot10^{-3}$ M
Masse i 1,00 L: $1{,}205\cdot10^{-3}\cdot62{,}3 = 0{,}075$ g. (Fasiten skriver 0,078 g, men 1,2·10⁻³ · 62,3 = 0,075 g.)

**Al(OH)₃** ($K_{sp} = 2\cdot10^{-32}$): $\ce{Al(OH)3 <=> Al^3+ + 3OH-}$
$K_{sp} = s(3s)^3 = 27s^4$ ⇒ $s = (2\cdot10^{-32}/27)^{1/4} = 5\cdot10^{-9}$ M (oppgavesett 2-fasiten). Strengt tatt er 3s ≈ 1,5·10⁻⁸ M OH⁻ mindre enn de 10⁻⁷ M vannet selv gir. Med [OH⁻] ≈ 10⁻⁷ M blir s ≈ 2·10⁻¹¹ M.

**BaSO₄ som kontrastmiddel** (oppgavesett 3, $K_{sp} = 2{,}3\cdot10^{-8}$ som oppgitt der): $s = \sqrt{2{,}3\cdot10^{-8}} = 1{,}5\cdot10^{-4}$ M. Masse **barium** i 1,00 L: $1{,}5\cdot10^{-4}\cdot137{,}3 = 0{,}021$ g.
:::

## Vanlige feil

:::feil
- **Glemmer støkiometrien:** for AB₂ er Ksp = 4s³, ikke s³ eller s². Både faktoren 2 i (2s) og kvadratet skal med.
- **Sammenligner Ksp direkte** for salter av ulik type. Et AB₂-salt med mindre Ksp kan likevel være mer løselig enn et AB-salt.
- **Blander Ksp og løselighet.** Ksp er en likevektskonstant, mens løselighet er en konsentrasjon (mol/L eller g/L). På eksamen er Ksp-verdien selv ofte en distraktor.
- **Masse av ion vs. masse av salt.** Spør oppgaven om masse barium, gang med M(Ba), ikke M(BaSO₄).
:::

:::eksamen
- Ksp fra målt konsentrasjon: BaSO₄ s² = 1,1·10⁻¹⁰ (H2024, V2024), PbI₂ 4s³ = 8,8·10⁻⁹ (V2025, H2023), Ag₂S 4s³ = 5,0·10⁻⁵¹ (H2022). Distraktorene er s² eller s³ uten faktoren 4.
- Kvalitative spørsmål om **tannemalje**: hydroksyapatitt løses lettere ved **lav pH** (V2026, H2025, H2024), og fluorapatitt er mindre løselig (Ksp ≈ 10⁻⁵⁷ mot 10⁻⁵³). Se [saliva og salivas kjemi](/medod1/cellebiologi/sammensatte-tema/saliva-og-salivas-kjemi).
:::

## Test deg selv

:::sjekk[CaF₂ har Ksp = 3,9·10⁻¹¹. Finn molar løselighet.]
4s³ = 3,9·10⁻¹¹ ⇒ s = (9,75·10⁻¹²)^(1/3) = 2,1·10⁻⁴ M.
:::

:::sjekk[I en mettet Ag₂CrO₄-løsning er [Ag⁺] = 1,3·10⁻⁴ M. Finn Ksp.]
[CrO₄²⁻] = ½·1,3·10⁻⁴ = 6,5·10⁻⁵ M; Ksp = (1,3·10⁻⁴)²·6,5·10⁻⁵ = 1,1·10⁻¹².
:::

:::sjekk[Gipsvann: CaSO₄·2H₂O har Ksp = 6,1·10⁻⁵. Overskrides grensen for drikkevann på 2,60·10⁻³ M SO₄²⁻? (oppgavesett 3, oppg. 20)]
s = √(6,1·10⁻⁵) = 7,8·10⁻³ M SO₄²⁻, som er omtrent 3 ganger grenseverdien. Nei, vannet oppfyller ikke standarden.
:::

:::sjekk[AgCl (Ksp 1,8·10⁻¹⁰) og Ag₂CrO₄ (Ksp 1,9·10⁻¹²): hvilket er mest løselig i mol/L?]
AgCl: s = 1,3·10⁻⁵ M. Ag₂CrO₄: s = (1,9·10⁻¹²/4)^(1/3) = 7,8·10⁻⁵ M. Ag₂CrO₄ er mest løselig, selv om Ksp-verdien er lavere.
:::
