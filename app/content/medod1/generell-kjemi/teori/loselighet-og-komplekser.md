---
title: Løselighet, løselighetsprodukt og komplekser
summary: Oppløsning av et tungtløselig salt er en heterogen likevekt med Ksp = [An+]^a[Bm−]^b. Ksp er ikke det samme som løselighet. Løseligheten senkes av fellesioner og økes av lav pH (basiske anioner) og kompleksdannelse (K = Ksp·Kf). Komplekser består av et metallion (Lewis-syre) og ligander (Lewis-baser), og kjelatorer som EDTA og sitrat binder metallioner. Kd beskriver binding i biokjemi. Tannemalje løses ved lav pH, mens fluorapatitt er mindre løselig.
order: 13
tags: [løselighet, løselighetsprodukt, Ksp, fellesioneffekt, kompleks, ligand, Kf, dannelseskonstant, kjelator, EDTA, sitrat, Kd, dissosiasjonskonstant, hydroksyapatitt, fluor, nyrestein]
related:
  - generell-kjemi/regnetyper/loselighetsprodukt
  - generell-kjemi/regnetyper/fellesioneffekt
  - generell-kjemi/regnetyper/kompleksdannelse-og-loselighet
  - generell-kjemi/teori/kjemisk-likevekt
  - generell-kjemi/teori/losninger-og-konsentrasjon
  - cellebiologi/sammensatte-tema/saliva-og-salivas-kjemi
  - proteiner/aminosyrer/histidin
  - proteiner/teori/myoglobin-og-hemoglobin
sources:
  - file: medod1/material/generell-kjemi/forelesning-4-2026--8041090.pdf
    pages: "30-66"
  - file: medod1/material/generell-kjemi/sporretime1-2026-v2--8130558.pdf
    pages: "23, 26, 32"
  - file: medod1/info/formelhefte--7793986.pdf
  - file: medod1/exercises/oppgavesett2-2026-fasit--8047656.pdf
  - file: medod1/exercises/oppgavesett3-2026-fasit--8081616.pdf
  - file: medod1/exercises/oppgavesett-4-fasit-2026--8204433.pdf
  - file: medod1/exercises/kollokvium1-losningsforslag-2026--8121960.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
  - file: medod1/exams/2023-medod1-ny-v2023-med-svar--5194537.pdf
  - file: medod1/exams/2022-medod1-h2022-med-svar--4750110.pdf
---

## Løselighet som likevekt

Når et ionisk stoff løses i vann, dissosierer det. Ionene **hydratiseres** av vannmolekylene (ione–dipol). Etter hvert oppstår en likevekt:

$$\text{Stoff} + \text{løsemiddel} \;\underset{\text{krystalliserer}}{\overset{\text{løses}}{\rightleftharpoons}}\; \text{løsning}$$

- **Løselighet** er mengden stoff som løses i et bestemt volum løsemiddel, i mol/L (molar løselighet) eller g/L.
- En **mettet løsning** inneholder så mye oppløst stoff som mulig. Den er i **dynamisk likevekt** med det faste stoffet, så tilsatt fast stoff løses ikke netto.
- Dette er en **heterogen likevekt** (fast stoff + løsning), det samme som gass i væske.

Faktorer som påvirker løselighet: intermolekylære krefter mellom stoff og løsemiddel, temperatur, trykk (gasser), **fellesioner, pH, kompleksdannelse og amfoterisme**.

## Løselighetsproduktet Ksp

$$\ce{A_aB_b(s) <=> a A^{n+}(aq) + b B^{m-}(aq)} \qquad K_{sp} = [A^{n+}]^a\,[B^{m-}]^b$$

Det faste stoffet har relativ konsentrasjon 1 og tas ikke med.

| Salt | Ksp-uttrykk | Ksp ↔ s (molar løselighet) |
|---|---|---|
| AgCl, BaSO₄ (1:1) | $[Ag^+][Cl^-]$ | $K_{sp} = s^2$ |
| PbI₂, MgF₂, Ca(OH)₂ (1:2) | $[Pb^{2+}][I^-]^2$ | $K_{sp} = s(2s)^2 = 4s^3$ |
| Ag₂S, Ag₂CrO₄ (2:1) | $[Ag^+]^2[S^{2-}]$ | $K_{sp} = (2s)^2s = 4s^3$ |
| Al(OH)₃ (1:3) | $[Al^{3+}][OH^-]^3$ | $K_{sp} = s(3s)^3 = 27s^4$ |
| Ba₃(PO₄)₂ (3:2) | $[Ba^{2+}]^3[PO_4^{3-}]^2$ | $K_{sp} = 108s^5$ |

:::husk
**Ksp ≠ løselighet.** Ksp er en likevektskonstant. Løseligheten er hvor mye som faktisk løses (mol/L eller g/L) og avhenger av hva annet som er i løsningen. Salter med ulik støkiometri kan ikke sammenlignes direkte på Ksp.
:::

:::eksempel[Forelesning 4: løselighet av AgCl (Ksp = 1,8·10⁻¹⁰) og PbI₂ (Ksp = 1,0·10⁻⁸)]
AgCl: $s^2 = 1{,}8\cdot10^{-10}$ gir $s = 1{,}3\cdot10^{-5}$ M.
PbI₂: $[Pb^{2+}] = x$ og $[I^-] = 2x$, så $x(2x)^2 = 4x^3 = 1{,}0\cdot10^{-8}$ og $x = 1{,}36\cdot10^{-3}$ M. Det gir $[I^-] = 2{,}72\cdot10^{-3}$ M.
I gram: $1{,}36\cdot10^{-3}\ \text{mol/L}\cdot461\ \text{g/mol} = 0{,}63$ g/L.
:::

Er ionekonsentrasjonene gitt, beregner man **Q** og sammenligner med Ksp. Q < Ksp betyr umettet løsning. Q > Ksp betyr overmettet løsning, og salt felles ut. Oppgavesett 3 oppg. 18: Q = 4,5·10⁻¹⁵ > Ksp = 1,2·10⁻¹⁵.

:::eksamen
- Ksp fra løselighet: BaSO₄ med 1,05·10⁻⁵ M gir **1,1·10⁻¹⁰** (s²). PbI₂ med s = 1,3·10⁻³ M gir **8,8·10⁻⁹** (4s³). Ag₂S med [S²⁻] = 1,077·10⁻¹⁷ M gir **5,0·10⁻⁵¹** (4s³).
- **Fellen** er å glemme koeffisienten inne i parentesen: s³ = 1,25·10⁻⁵¹ er et svaralternativ.

Se [løselighetsprodukt](/medod1/generell-kjemi/regnetyper/loselighetsprodukt).
:::

## Fellesioneffekten

Tilsetter man et ion som allerede inngår i likevekten, forskyves den mot venstre (Le Châtelier), og **løseligheten synker**.

:::eksempel[Forelesning 4: AgCl i 0,1 M NaCl]
$[Cl^-] = 0{,}1 + x \approx 0{,}1$, fordi x er mye mindre enn 0,1 (i rent vann er x bare 1,3·10⁻⁵).
$K_{sp} = x\cdot0{,}1 = 1{,}8\cdot10^{-10}$ gir $x = 1{,}8\cdot10^{-9}$ M, omtrent 7000 ganger lavere enn i rent vann.
:::

:::feil
Tilnærmingen «0,1 + x ≈ 0,1» må kontrolleres. CaSO₄ (Ksp 2,4·10⁻⁵) i 0,01 M Na₂SO₄ gir x = 2,4·10⁻³ med tilnærmingen og 2,0·10⁻³ med andregradslikningen, en feil på 20 % (oppgavesett 4 oppg. 11). Er fellesionet ikke i stort overskudd, løs likningen.
:::

:::eksamen
MgF₂: mettet løsning ved 18 °C har [Mg²⁺] = 1,21·10⁻³ M, så Ksp = 1,21·10⁻³·(2,42·10⁻³)² = 7,09·10⁻⁹. Etter tilsetning av **0,100 mol KF** til 1,000 L blir $[Mg^{2+}] = 7{,}09\cdot10^{-9}/0{,}100^2 = 7{,}09\cdot10^{-7}$ M (H2025, V2023, H2021). Fellen er å svare Ksp selv (7,09·10⁻⁹). Se [fellesioneffekt](/medod1/generell-kjemi/regnetyper/fellesioneffekt).
:::

## pH og løselighet

**Et salt med et basisk anion (fra en svak syre) blir mer løselig når pH synker.** H₃O⁺ fjerner anionet:

$$\ce{CaCO3(s) <=> Ca^2+ + CO3^2-} \qquad \ce{CO3^2- + H3O+ -> HCO3- + H2O}$$

Anionet fjernes, og etter Le Châtelier løses mer CaCO₃. Eksempler er sur nedbør som løser kalkstein og betong, og **tannemalje**.

Anioner fra **sterke** syrer (Cl⁻, Br⁻, I⁻, ClO₄⁻) protoneres ikke, og løseligheten av f.eks. AgBr er upåvirket av pH. Oppgavesett 3 oppg. 16: i HClO₄ er BaF₂, Ca₃(PO₄)₂ og ZnS mer løselige enn i vann, mens AgBr og PbI₂ ikke er det.

:::eksempel[Oppgavesett 2 oppg. 2: mettet CaHPO₄ ⇌ Ca²⁺ + HPO₄²⁻]
| Tilsetning | Fast CaHPO₄ | [Ca²⁺] | [HPO₄²⁻] | Hvorfor |
|---|---|---|---|---|
| CaCl₂ | øker | øker | synker | fellesion |
| HCl | synker (mer løses) | øker | synker | HPO₄²⁻ protoneres |
| KClO₄ | uendret | uendret | uendret | ioner fra sterk syre/base |
| NaOH | synker | øker | synker | HPO₄²⁻ reagerer med base (→ PO₄³⁻) |
| CaHPO₄(s) | øker | uendret | uendret | løsningen er allerede mettet |
:::

:::klinikk
**Tenner og saliva** (mer i [saliva og salivas kjemi](/medod1/cellebiologi/sammensatte-tema/saliva-og-salivas-kjemi)). Emaljen er **hydroksyapatitt**, Ca₅(PO₄)₃OH, med Ksp ≈ 10⁻⁵³. Både PO₄³⁻ og OH⁻ er basiske, så **lav pH løser emaljen** (karies, erosjon).
- **Fluorid** erstatter OH⁻ og danner **fluorapatitt**, Ca₅(PO₄)₃F, som er isomorf (lik struktur) men med Ksp ≈ 10⁻⁵⁷, altså ca. 10 000 ganger mindre. Fluorid fremmer remineralisering, og fluorapatitt hoper seg opp i skadede områder.
- **Tungtløselige salter i kroppen**: knokler og tenner, nyrestein (kalsiumoksalat, -fosfat, -karbonat), tannstein (likner nyrestein) og **urinsyregikt** (natriumuratkrystaller i ledd, nyrestein).
- Eksamen: «Hva øker løseligheten til hydroksyapatitt?» Svaret er **lav pH** (V2026, H2025, H2024).
:::

:::eksamen
«I hvilken løsning er Ag₃PO₄ mest løselig?» Alternativene er 0,1 M AgNO₃, 0,1 M Na₃PO₄, rent vann og 0,1 M HNO₃. Svaret er **0,1 M HNO₃**: syren protonerer PO₄³⁻, mens de to saltene gir fellesioneffekt (H2024).
:::

## Komplekser

**Komplekse ioner** består av et **metallkation (sentralatom)** bundet til ett eller flere små molekyler eller ioner med ledige elektronpar (**ligander**), f.eks. NH₃, CN⁻, OH⁻, H₂O eller aminosyresidekjeder i proteiner.

- Liganden leverer elektronparet og er en **Lewis-base**. Metallionet mottar det og er en **Lewis-syre**. Bindingen kalles en **koordinativ kovalent binding**.
- **Koordinasjonstall** er antall ligandatomer bundet til metallionet, typisk 2–8 (ofte 2, 4 eller 6), avhengig av ionets størrelse, ladning og elektronkonfigurasjon.
- **Monodentat** ligand: ett atom koordinerer. **Bi-, tri- … heksadentat (polydentat)**: flere atomer fra **samme** ligand koordinerer **samme** metallion. Slike ligander kalles **kjelaterende**.

| Kjelator / kompleks | Bruk / betydning |
|---|---|
| **EDTA** (heksadentat) | behandling av tungmetallforgiftning (Hg²⁺, Pb²⁺, Cd²⁺); i matvarer for å hindre harskning; antikoagulant |
| **Sitrat** (tre COO⁻) | antikoagulant i blodprøver: binder Ca²⁺ som trengs for koagulasjon |
| Oksalat | kalsiumoksalat (nyrestein) |
| Porfyrin i hem (Fe) | [hemoglobin](/medod1/proteiner/teori/myoglobin-og-hemoglobin) og O₂-transport |
| Zn²⁺ i karbonsyreanhydrase | koordinert av [His](/medod1/proteiner/aminosyrer/histidin)-sidekjeder (bare uprotonert imidazol) |
| Kalmodulin | cellulær Ca²⁺-sensor med 4 Ca²⁺-bindingsseter; bindingen endrer konformasjonen og regulerer andre proteiner |
| Vitamin B12 (kobalamin) | Co koordinert av 4 N i korrinringen + 2 aksiale ligander, koordinasjonstall 6 |

:::eksamen
«En polydentat ligand er» **ett molekyl som koordinerer ett metallion gjennom flere grupper** (V2024).
:::

### Dannelseskonstanten Kf

$$\ce{M+ + nL <=> ML_n+} \qquad K_f = \frac{[ML_n^+]}{[M^+][L]^n}$$

Kf kalles også **stabilitetskonstant**. Kompleksdannelse skjer trinnvis, og $K_f = K_1K_2\cdots$. For sølvdiammin er $K_1 = 2{,}1\cdot10^3$ og $K_2 = 8{,}1\cdot10^3$, som gir $K_f = 1{,}7\cdot10^7$. Høy Kf betyr et stabilt kompleks: nesten all Ag⁺ i ammoniakkløsning foreligger som Ag(NH₃)₂⁺. Er trinnkonstantene gitt som log K, **summeres** logaritmene. For Zn(NH₃)₄²⁺ gir det log Kf = 9,46 og Kf = 2,9·10⁹ (oppgavesett 4 oppg. 14).

### Kompleksdannelse øker løseligheten

Liganden binder metallionet, og det fjernes fra løselighetslikevekten (Le Châtelier):

$$\ce{AgCl(s) + 2NH3 <=> Ag(NH3)2+ + Cl-} \qquad K = K_{sp}\cdot K_f$$

:::eksempel[Forelesning 4 eks. 3: løselighet av AgCl i 1,0 M NH₃]
$K = (1{,}8\cdot10^{-10})(1{,}7\cdot10^7) = 3{,}1\cdot10^{-3}$.
Ved likevekt er $[Ag(NH_3)_2^+] = [Cl^-] = x$ og $[NH_3] = 1{,}0 - 2x$. Da er $\dfrac{x^2}{(1{,}0-2x)^2} = 3{,}1\cdot10^{-3}$.
Tar man kvadratroten på begge sider: $\dfrac{x}{1{,}0-2x} = 0{,}0556$, som gir $x = 0{,}050$ M.
Løseligheten er altså 0,050 M, mot 1,3·10⁻⁵ M i rent vann.
:::

:::eksamen
- «Hvordan øke løseligheten av AgCl?» Svaret er **tilsette NH₃** (V2023, H2021).
- Tilsettes HNO₃ til AgCl/NH₃-likevekten, protonerer H⁺ NH₃ til NH₄⁺, og likevekten går **mot venstre**, slik at AgCl felles ut igjen (H2023, H2024, H2025).
- Matching: $K_f$ hører til kompleksdannelse.

Utregninger: [kompleksdannelse og løselighet](/medod1/generell-kjemi/regnetyper/kompleksdannelse-og-loselighet).
:::

## Dissosiasjonskonstanten Kd (biokjemi)

I biokjemi brukes «kompleks» også om to molekyler som binder til hverandre med **intermolekylære krefter** uten å reagere kjemisk. Eksempler er protein–protein, protein–legemiddel, reseptor–ligand, enzym–hemmer og protein–DNA. Bindingen beskrives som dissosiasjon, altså den **omvendte** av Kf:

$$\ce{PL <=> P + L} \qquad K_d = \frac{[P][L]}{[PL]}$$

- **Lav Kd betyr høy affinitet** (komplekset dissosierer lite).
- Når **[P] = [PL]**, er **[L] = Kd**: Kd er ligandkonsentrasjonen som gir halv metning.
- Kd oppgis gjerne med enhet (nM, µM). Da kan den sammenlignes direkte med fysiologiske ligandkonsentrasjoner.

:::eksempel[Oppgavesett 2 oppg. 19: [P] = 20 nM, [L] = 5 µM, [PL] = 10 nM]
$K_d = \dfrac{(20\ \text{nM})(5\ \mu\text{M})}{10\ \text{nM}} = 10\ \mu\text{M}$. Når [P] = [PL], er [L] = 10 µM.
:::

## Test deg selv

:::sjekk[Salt A (AB) har Ksp = 1·10⁻¹⁰ og salt B (AB₂) har Ksp = 1·10⁻¹¹. Hvilket er mest løselig?]
AB: s = √(10⁻¹⁰) = 1·10⁻⁵ M. AB₂: 4s³ = 10⁻¹¹ gir s = 1,4·10⁻⁴ M. **AB₂ er mest løselig** til tross for lavere Ksp. Ksp kan bare sammenlignes direkte for salter med samme støkiometri.
:::

:::sjekk[Hvorfor øker løseligheten av CaCO₃ i sur løsning, mens AgCl ikke påvirkes?]
CO₃²⁻ er en basisk anion (fra en svak syre) og protoneres av H₃O⁺ til HCO₃⁻. Anionet fjernes, og likevekten forskyves mot oppløsning. Cl⁻ er basen til en sterk syre og protoneres ikke, så pH har ingen effekt.
:::

:::sjekk[Hva er likevektskonstanten for AgI(s) + 2CN⁻ ⇌ Ag(CN)₂⁻ + I⁻ når Ksp(AgI) = 8,5·10⁻¹⁷ og Kf = 5,3·10¹⁸?]
Summen av oppløsning og kompleksdannelse gir K = Ksp·Kf = 450. Løseligheten i 0,010 M KCN blir ca. 0,0049 M, mot 9,2·10⁻⁹ M i vann (kollokvium 1 oppg. 8).
:::

:::sjekk[Et legemiddel har Kd = 1 nM mot reseptor X og 1 µM mot reseptor Y. Hvilken binder det best?]
Reseptor X. Lavere Kd betyr høyere affinitet: halv metning nås allerede ved 1 nM fritt legemiddel.
:::

:::sjekk[Hvorfor beskytter fluorid tennene kjemisk?]
F⁻ erstatter OH⁻ i hydroksyapatitt og danner fluorapatitt, som har ca. 10⁴ ganger lavere Ksp. Det er mindre løselig, også ved lav pH, fordi F⁻ er en mye svakere base enn OH⁻. Fluorid fremmer i tillegg remineralisering.
:::
