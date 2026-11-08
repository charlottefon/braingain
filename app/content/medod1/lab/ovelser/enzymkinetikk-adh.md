---
title: Enzymkinetikk – alkoholdehydrogenase (ADH)
summary: Gjær-ADH oksiderer etanol med NAD⁺, og dannet NADH følges som økning i A₃₄₀ (NAD⁺ absorberer ikke ved 340 nm). Fra ΔA₃₄₀/min og slutt-A₃₄₀ finner man spesifikk aktivitet (U/mg), Ea (romtemp. vs. 37 °C), substratspesifisitet, Keq og reversibilitet (metabisulfitt, HCl).
category: ovelse
order: 6
tags: [enzymkinetikk, alkoholdehydrogenase, NADH, spektrofotometri, Lambert-Beer, aktiveringsenergi, Arrhenius, likevektskonstant, Le Chatelier, substratspesifisitet, spesifikk aktivitet]
related:
  - proteiner/enzymkinetikk
  - proteiner/teori/enzymkatalyse
  - proteiner/teori/enzymer-egenskaper
  - proteiner/teori/enzymregulering
  - generell-kjemi/teori/kjemisk-likevekt
  - generell-kjemi/regnetyper/likevektskonstant-fra-konsentrasjoner
  - organisk-kjemi/reaksjoner/oksidasjon-av-alkoholer
  - organisk-kjemi/funksjonelle-grupper/alkoholer
  - lab/ovelser/lipid-kolesterol
sources:
  - file: medod1/material/cellebiologi/labhefte-medod1-262109--8060302.pdf
    pages: "43-54"
  - file: medod1/material/proteiner/6-enzymkinetikk--page-374066.html
  - file: medod1/material/proteiner/enzym-2026-1--8215494.pdf
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
  - file: medod1/exams/2021-medod1-h2021-med-svar--3944361.pdf
  - file: medod1/exams/2024-medod1-ny-v2024-med-svar--5897534.pdf
  - file: medod1/exams/2022-medod1-h2022-med-svar--4750110.pdf
fields:
  Øvelse nr: "6 (labhefte-modul 4)"
  Fag: Proteiner og enzymer
  Metode: Kinetisk UV-spektrofotometri ved 340 nm (NADH-dannelse)
  Hva måles: ΔA340/min (hastighet) → U/mg, Ea, substratspesifisitet; A340 ved likevekt → Keq
---

## Formål

Labheftet: studere **hastigheten til en enzymkatalysert reaksjon** med spektrofotometri – følge en enzymreaksjon over tid og se hvordan **enzymkonsentrasjon, temperatur og substrattype** påvirker hastigheten. Endringen i absorbans ved 340 nm brukes til å bestemme:

1. hastigheten for reduksjon av NAD⁺ med etanol (→ enzymaktivitet),
2. konsentrasjonen av NADH ved likevekt (→ **likevektskonstanten**),
3. **aktiveringsenergien** for den enzymkatalyserte reaksjonen,
4. **substratspesifisitet** og **reversibilitet**.

## Bakgrunn og teori

**Spektrofotometri** (Lambert–Beers lov, labheftets appendiks): transmisjon $T = I/I_0$; absorbans

$$A = -\log_{10} T = \varepsilon\, b\, c$$

ε = molar ekstinksjonskoeffisient (M⁻¹ cm⁻¹), b = lysvei (vanligvis 1 cm), c = konsentrasjon (M). **Absorbansen – ikke transmisjonen – er proporsjonal med konsentrasjonen.**

**Alkoholdehydrogenase (ADH)** er en dehydrogenase med **NAD⁺** som koenzym (kosubstrat). Gjær-ADH katalyserer:

$$\ce{CH3CH2OH + NAD+ <=>[ADH] CH3CHO + NADH + H+}$$

Kjemisk er dette [oksidasjon av en primær alkohol til aldehyd](/medod1/organisk-kjemi/reaksjoner/oksidasjon-av-alkoholer); NAD⁺ tar imot et hydridion.

**NADH** absorberer sterkt ved **340 nm** ($\varepsilon = 6220\ \text{M}^{-1}\text{cm}^{-1}$), **NAD⁺ nesten ikke**. Økningen i $A_{340}$ følger derfor dannelsen av NADH (og acetaldehyd) direkte.

**Enzymteori som øvelsen illustrerer** (Enzymer 1, Martinez – se [enzymkatalyse](/medod1/proteiner/teori/enzymkatalyse) og [enzymers egenskaper](/medod1/proteiner/teori/enzymer-egenskaper)):
- **1 Unit (U) = 1 µmol produkt per minutt**; **spesifikk aktivitet** = U/mg enzym (oppgis ved definert pH og temperatur).
- Enzymer **senker aktiveringsenergien** ($E_a$, ΔG‡) ved å stabilisere transisjonstilstanden – men **endrer ikke ΔG eller $K_{eq}$**; de gjør bare at likevekten nås raskere.
- Hastighetskonstanten avhenger av $E_a$ og T (Arrhenius): $k = A\, e^{-E_a/RT}$, dvs. $\ln k = \ln A - \frac{E_a}{RT}$. Plott av ln k mot 1/T har stigningstall $s = -E_a/R$.
- **Spesifisitet** skyldes presis passform mellom substrat og aktivt sete.

:::husk
Øvelsen måler **ikke** $K_M$ og $V_{max}$ (substratkonsentrasjonen varieres ikke). Michaelis–Menten og Lineweaver–Burk er likevel eksamensstoff i [proteiner – enzymkinetikk](/medod1/proteiner/enzymkinetikk). Kort: $v_0 = \frac{V_{max}[S]}{K_M+[S]}$; Lineweaver–Burk $\frac{1}{v_0} = \frac{K_M}{V_{max}}\cdot\frac{1}{[S]} + \frac{1}{V_{max}}$ (stigning $K_M/V_{max}$, y-skjæring $1/V_{max}$, x-skjæring $-1/K_M$). Substratene er i stort overskudd i forhold til enzymet (etanol ca. 0,17 M) og endres knapt de første 30 s. Ved fast [S] gir Michaelis–Menten $v_0 = \frac{k_{cat}[E]_T[S]}{K_M+[S]}$, så initialhastigheten blir **proporsjonal med enzymmengden**.
:::

## Prinsipp

- Reaksjonen startes ved å tilsette **etanol** sist, i en kyvette som er nullstilt (Auto Zero) med alt unntatt substrat → all økning i $A_{340}$ skyldes NADH dannet av ADH.
- **Initialhastigheten** = stigningstallet i den **lineære** begynnelsen av kurven (ΔA₃₄₀/min), målt over 30 s.
- **Likevekt**: med ufortynnet enzym (10 × mer) flater kurven ut innen få minutter; slutt-$A_{340}$ gir $[\ce{NADH}]_{lik}$.
- **Le Chatelier**: fjerning av produkt (acetaldehyd) eller tilsetning av produkt ($\ce{H+}$) forskyver likevekten.

Konsentrasjoner i kyvetten (1,00 mL): etanol $2{,}56 \cdot 65/1000 = $ **0,166 M**; NAD⁺ $5 \cdot 65/1000 = $ **0,325 mM**; Na-fosfat $0{,}05 \cdot 165/1000 = 8{,}25$ mM, **pH 8,0**.

## Utstyr og reagenser

| Utstyr | Kjemikalier | Merket |
|---|---|---|
| Spektrofotometer (Kinetics mode) | **På is:** gjær-ADH 1 mg/mL i vann | ADH |
| 3 automatpipetter + spisser | Gjær-ADH 0,1 mg/mL (1∶10) | 1∶10 |
| Glasskyvette, engangskyvetter | 5 mM NAD⁺ | NAD |
| Linsepapir, parafilm, spatel | **På benken:** 0,05 M Na-fosfatbuffer pH 8,0 | Buf |
| | Na-metabisulfitt (krystaller) | Na |
| | 0,1 M HCl | HCl |
| | Etanol 2,56 M | EtOH |
| | Propanol / metanol | Pro / Met |
| | dH₂O; **dH₂O på varmeblokk 40 °C** | |

Mellom forsøkene tømmes kyvetten i avfallsbeholder og skylles med dH₂O. **Bland ved å vende kyvetten – ikke rist** (enzymer tåler ikke røff behandling).

## Fremgangsmåte

### Del 1 – Reaksjonshastighet (ulik enzymmengde)

Innstillinger: **Kinetics mode, 340 nm, reaksjonstid 30 s, Rec range 0,0–0,5**.

| | A | B | C |
|---|---|---|---|
| dH₂O | 690 µL | 695 µL | 700 µL |
| Buffer | 165 µL | 165 µL | 165 µL |
| NAD | 65 µL | 65 µL | 65 µL |
| ADH (1∶10) | 15 µL | 10 µL | 5 µL |
| Etanol (start) | 65 µL | 65 µL | 65 µL |

1. Lag blandingen (uten etanol) direkte i kyvetten, vend forsiktig.
2. Sett i instrumentet og **nullstill (Auto Zero)** ved 340 nm.
3. Start reaksjonen med **65 µL etanol** (sluttvolum 1,00 mL), bland, sett raskt tilbake og start målingen umiddelbart.
4. Registrer $A_{340}$ i 30 s; noter **ΔA₃₄₀/min** under *Data List*.
5. Kontroller at kurven er tilnærmet **rett** (lineær del, flater ikke ut).

### Del 2 – Aktiveringsenergi (romtemperatur vs. 37 °C)

| | A (≈ 37 °C) | B (romtemp.) |
|---|---|---|
| Buffer | 165 µL | 165 µL |
| NAD | 65 µL | 65 µL |
| ADH (1∶10) | 5 µL | 5 µL |
| dH₂O | 700 µL **fra 40 °C** | 700 µL |

1. I A tilsettes det oppvarmede vannet **rett før etanol**, så reaksjonen går ved ca. 37 °C.
2. B er identisk med del 1C – bruk den verdien.
3. Start med 65 µL etanol, bland raskt, mål, noter ΔA₃₄₀/min. Sammenlign.

### Del 3 – Substratspesifisitet

| | A (metanol) | B (propanol) | C (etanol) |
|---|---|---|---|
| dH₂O | 695 µL | 695 µL | 695 µL |
| Buffer | 165 µL | 165 µL | 165 µL |
| NAD | 65 µL | 65 µL | 65 µL |
| ADH (1∶10) | 10 µL | 10 µL | 10 µL |
| Alkohol (start) | 65 µL | 65 µL | 65 µL |

C er identisk med del 1B. Alkoholen tilsettes først når du er klar til å starte; noter ΔA₃₄₀/min og sammenlign.

### Del 4 – Likevektskonstanten

Innstillinger: **340 nm, reaksjonstid 3 min, Rec range 0,0–1,0**.

1. Engangskyvette: **695 µL dH₂O + 165 µL buffer + 65 µL NAD + 10 µL ADH (ufortynnet)**.
2. Vend, sett inn, **Auto Zero**.
3. Start med **65 µL etanol** (1,00 mL), bland, mål umiddelbart.
4. Registrer i 3 min eller til $A_{340}$ ikke endres; noter **slutt-$A_{340}$**.

### Del 5 – Reversibilitet

Innstillinger: **340 nm, reaksjonstid 12 min, Rec range 0,0–2,0**.

1. Samme blanding som del 4 (ufortynnet ADH), Auto Zero, start med 65 µL etanol.
2. La reaksjonen gå til absorbansen er stabil (**likevekt**).
3. Ta ut kyvetten, tilsett **noen få krystaller Na-metabisulfitt**, bland, sett tilbake og mål til **ny likevekt**.
4. Ta ut, tilsett **50 µL 0,1 M HCl**, bland, mål til ny likevekt.
5. Tegn av kurven i journalen.

:::feil
Labheftets del 3 avsluttes med «sammenlign reaksjonshastigheten ved 37 °C med romtemperatur» – en kopieringsfeil fra del 2. I del 3 skal du sammenligne de **tre alkoholene**.
:::

## Beregninger

:::eksempel[Spesifikk aktivitet (U/mg) – del 1]
Fra Lambert–Beer: $\Delta c/\text{min} = \dfrac{\Delta A_{340}/\text{min}}{\varepsilon b} = \dfrac{\Delta A_{340}/\text{min}}{6220\ \text{M}^{-1}}$. I 1 mL kyvette blir µmol NADH per min $= \dfrac{\Delta A_{340}/\text{min}}{6220} \cdot 10^{-3}\ \text{L} \cdot 10^{6} = \dfrac{\Delta A_{340}/\text{min}}{6{,}22}$. Altså

$$\frac{\text{U}}{\text{mg}} = \frac{\Delta A_{340}/\text{min}}{6{,}22 \cdot (\text{mg ADH i kyvetten})}$$

(labheftet runder til 6,2).

Mg ADH (1∶10 = 0,1 mg/mL = 0,1 µg/µL): 15 µL → 0,0015 mg; 10 µL → 0,0010 mg; 5 µL → 0,0005 mg.

**Tenkte data** (oppdiktet eksempel – labheftet gir ingen fasitverdier; reelle verdier avhenger av enzympartiet): A = 0,35, B = 0,24, C = 0,13 ΔA₃₄₀/min

| Kyvette | mg ADH | ΔA₃₄₀/min | U/mg |
|---|---|---|---|
| A | 0,0015 | 0,35 | $0{,}35/(6{,}22 \cdot 0{,}0015) = 37{,}5$ |
| B | 0,0010 | 0,24 | $0{,}24/(6{,}22 \cdot 0{,}0010) = 38{,}6$ |
| C | 0,0005 | 0,13 | $0{,}13/(6{,}22 \cdot 0{,}0005) = 41{,}8$ |

Gjennomsnitt ≈ **39 U/mg**. Hastigheten er tilnærmet **proporsjonal med enzymmengden** (≈ 3 : 2 : 1), så spesifikk aktivitet blir omtrent lik – som forventet når substratet er i overskudd. Størst avvik for C: 5 µL er vanskeligst å pipettere presist.
:::

:::eksempel[Aktiveringsenergi – del 2]
Arrhenius for to temperaturer (A antas temperaturuavhengig):

$$\ln\frac{k_2}{k_1} = \frac{E_a}{R}\cdot\frac{T_2 - T_1}{T_1 T_2} \quad\Rightarrow\quad E_a = R\,\frac{T_1T_2}{T_2-T_1}\,\ln\frac{k_2}{k_1}$$

$R = 8{,}314$ J mol⁻¹ K⁻¹, $T_1 = 298$ K (25 °C), $T_2 = 310$ K (37 °C). ΔA₃₄₀/min settes inn direkte som k (forholdet er det samme).

$$R\,\frac{T_1T_2}{T_2-T_1} = 8{,}314 \cdot \frac{298 \cdot 310}{12} = 8{,}314 \cdot 7698 = 6{,}40\cdot10^{4}\ \text{J/mol}$$

**Tenkte data**: romtemp. (= del 1C) 0,13; 37 °C 0,23 ΔA₃₄₀/min → $k_2/k_1 = 1{,}77$, $\ln 1{,}77 = 0{,}571$

$$E_a = 6{,}40\cdot10^{4} \cdot 0{,}571 = 3{,}65\cdot10^{4}\ \text{J/mol} \approx \mathbf{37\ kJ/mol}$$

Uten enzym: **226 kJ/mol** (54 kcal/mol). ADH senker altså $E_a$ med ca. 190 kJ/mol. Tommelfinger: dobling av hastigheten fra 25 til 37 °C ⇒ $E_a = 6{,}40\cdot10^4 \cdot \ln 2 \approx 44$ kJ/mol.
:::

:::eksempel[Likevektskonstant – del 4]
**Tenkt data**: slutt-$A_{340}$ = 0,80 (realistisk: maks mulig er $0{,}325\cdot10^{-3} \cdot 6220 = 2{,}0$ hvis all NAD⁺ ble redusert)

1. $[\ce{NADH}] = \dfrac{A}{\varepsilon b} = \dfrac{0{,}80}{6220} = 1{,}29\cdot10^{-4}$ M = 0,129 mM
2. $[\ce{CH3CHO}] = [\ce{NADH}] = 1{,}29\cdot10^{-4}$ M (1∶1)
3. $[\ce{NAD+}] = 0{,}325 - 0{,}129 = 0{,}196$ mM $= 1{,}96\cdot10^{-4}$ M
4. $[\text{etanol}] = 0{,}1664 - 0{,}0001 \approx 0{,}166$ M (praktisk talt uendret)
5. $[\ce{H+}] = 10^{-8{,}0}$ M (pH 8,0 – bufferen holder pH)

$$K_{eq} = \frac{[\ce{CH3CHO}][\ce{NADH}][\ce{H+}]}{[\text{etanol}][\ce{NAD+}]} = \frac{(1{,}29\cdot10^{-4})^2 \cdot 10^{-8}}{0{,}166 \cdot 1{,}96\cdot10^{-4}} \approx \mathbf{5\cdot10^{-12}\ M}$$

Liten $K_{eq}$ (litteraturverdi ca. $10^{-11}$ M, samme størrelsesorden): likevekten ligger langt mot venstre ved nøytral pH; at så mye NADH likevel dannes skyldes det enorme etanoloverskuddet og høy pH (lav [H⁺]). Se [likevektskonstant fra konsentrasjoner](/medod1/generell-kjemi/regnetyper/likevektskonstant-fra-konsentrasjoner).

(Faglærer presiserer i videoen at det er **[NAD⁺]**, ikke NADH, som regnes ut i det siste mellomregningstrinnet.)
:::

## Forventede resultater og tolkning

**Del 1** – $A_{340}$ stiger lineært de første 30 s. ΔA₃₄₀/min **A : B : C ≈ 3 : 2 : 1** (15 : 10 : 5 µL enzym) – hastigheten er proporsjonal med [E] når substratet er i overskudd. Spesifikk aktivitet (U/mg) blir tilnærmet lik i alle tre.

**Del 2** – Høyere hastighet ved 37 °C (typisk 1,5–2 ganger). $E_a$ med enzym blir noen titalls kJ/mol, mye lavere enn 226 kJ/mol uten enzym → enzymet senker aktiveringsenergien ved å stabilisere transisjonstilstanden og gir derfor mange størrelsesordener høyere hastighet. (Ved for høy temperatur ville enzymet denaturere og hastigheten falle.)

**Del 3** – Gjær-ADH er ikke absolutt spesifikk, men har klar preferanse: **etanol raskest**, propanol langsommere, **metanol svært langsomt** (nesten ingen økning). Forklaring: **spesifisitet** skyldes passformen mellom substrat og aktivt sete – setet i gjær-ADH er best tilpasset etanol; propanol (større) og særlig metanol bindes og orienteres dårligere for hydridoverføringen. (Lever-ADH hos mennesket omsetter derimot metanol – derav metanolforgiftning.)

**Del 4** – Kurven stiger og **flater ut** (platå) når likevekt er nådd; platåets $A_{340}$ gir [NADH] ved likevekt.

**Del 5** – kurvens form:

| Tidspunkt | Hva skjer | $A_{340}$ |
|---|---|---|
| Etter etanol | NADH dannes til likevekt | Stiger → platå |
| + Na-metabisulfitt | Bisulfitt reagerer med karbonylgruppen og binder **acetaldehyd** som aldehyd-bisulfittforbindelse → produkt fjernes → likevekten forskyves mot **høyre** | Stiger til **nytt, høyere** platå |
| + 50 µL 0,1 M HCl | [H⁺] øker (H⁺ er produkt) → likevekten forskyves mot **venstre**; NADH oksideres tilbake til NAD⁺ | **Synker** til nytt, lavere platå |

Hvorfor gir 50 µL 0,1 M HCl (5 µmol H⁺) så tydelig effekt når det er buffer i kyvetten? Bufferen er bare 8,25 mM fosfat (8,25 µmol, ca. 7,1 µmol $\ce{HPO4^2-}$ ved pH 8,0). 5 µmol H⁺ bruker opp det meste av basen: $pH ≈ 7{,}2 + \log\frac{2{,}1}{6{,}1} ≈ 6{,}7$ – [H⁺] øker ca. 20 ganger.

$$\ce{S2O5^2- + H2O -> 2HSO3-} \qquad \ce{CH3CHO + HSO3- -> CH3CH(OH)SO3-}$$

Dette viser at reaksjonen er **reversibel** og at enzymet ikke bestemmer hvor likevekten ligger – det gjør konsentrasjonene ([Le Chatelier](/medod1/generell-kjemi/teori/kjemisk-likevekt)).

## Feilkilder

- Etanol ikke tilsatt sist / for lang tid før målingen starter → initialfasen tapt.
- Måling utenfor lineært område (kurven flater ut) → underestimert hastighet.
- Pipettering av små volumer (5 µL enzym) → stor relativ feil.
- Enzym ikke holdt på is (aktivitetstap), eller ristet (denaturering).
- Temperatur i «37 °C»-forsøket er bare omtrentlig (40 °C vann blandet med romtemperert) og faller under målingen.
- Kyvette med fingermerker/riper, luftbobler, ikke nullstilt.
- Likevekt: avlest før platå; H⁺ antatt konstant (pH 8,0); dannet H⁺ ignoreres.
- Gjenbruk av glasskyvette uten god skylling → overføring av enzym/alkohol.

## Klinisk relevans

- **Spektrofotometri** brukes på alle legekontor og sykehus, f.eks. til hemoglobin. Svært mange kliniske enzymanalyser følger NADH/NADPH ved 340 nm.
- **Alkoholmetabolisme**: ADH i leveren omdanner etanol til acetaldehyd. Ved **metanolforgiftning** omdanner ADH metanol til toksiske produkter (formaldehyd/maursyre); behandlingen er **fomepizol** (kompetitiv hemmer av ADH) eller etanol (konkurrerer med metanol om det aktive setet). Se [hemming og regulering av enzymer](/medod1/proteiner/teori/enzymregulering).
- ADH trenger **Zn²⁺** som kofaktor (metallion) og NAD⁺ som kosubstrat (v2024).

## Typiske eksamensspørsmål

:::eksamen
- **Temperatur og Ea** (h2021): Enzym 1 har dobbel hastighet ved 37 vs. 25 °C, enzym 2 tilnærmet lik → enzym 1 har **større forskjell i fri energi mellom substrat og transisjonstilstand** (høyere $E_a$).
- **ADH og substrater**: bakteriell ADH med oppgitt $K_M$ og $V_{max}$ – «hvilket substrat omsettes raskest i en blanding?» Svar: det med høyest $V_{max}/K_M$ (ved lav [S] er $v ≈ \frac{V_{max}}{K_M}[S]$).
  - h2019, h2021: etanol ($K_M$ 0,1 mM, $V_{max}$ 0,26 µM/min) vs. oktanol (0,008 mM, 0,23 µM/min) → **oktanol** (28,8 vs. 2,6).
  - h2023: etanol, metanol (0,001 mM, 0,23) og propanol (0,01 mM, 0,20), 1∶1∶1 → **metanol** (230 vs. 20 vs. 2,6).
  - Merk: tallene gjelder en tenkt bakteriell ADH – ikke gjær-ADH fra labben, der etanol er best. Se [enzymkinetikk](/medod1/proteiner/enzymkinetikk).
- **Fomepizol** (h2022, h2023, v2024): kompetitiv hemmer → binder **kun til det aktive setet i ADH når substrat ikke er bundet** (h2023-fasiten avviker og er trolig feil – se [enzymregulering](/medod1/proteiner/teori/enzymregulering)).
- **Etanol ved metanolforgiftning** (h2022, v2024): etanol konkurrerer med metanol om ADH; spør oppgaven om trinnet *formaldehyd → format*, er fasitsvaret at **acetaldehyd** (fra etanol) konkurrerer med formaldehyd om **ALDH**.
- **Enzym og likevekt** (gjenganger: h2019, h2020, h2023, v2024, v2026 m.fl.): «Et enzym reduserer aktiveringsenergien» (riktig) vs. «øker/endrer likevektskonstanten» (feil).
- **Kofaktorer** (v2024): Zn²⁺ i ADH er en **kofaktor** (metallion, ikke kosubstrat); NAD⁺ er kosubstrat.
- Kortsvar: forklar hvorfor man måler ved 340 nm, regn U/mg eller $E_a$, forklar effekten av metabisulfitt og HCl.
:::

## Test deg selv

:::sjekk[Hvorfor følges reaksjonen ved 340 nm?]
NADH absorberer sterkt ved 340 nm (ε = 6220 M⁻¹cm⁻¹), mens NAD⁺ nesten ikke gjør det. Økningen i A₃₄₀ er derfor direkte proporsjonal med dannet NADH (Lambert–Beer), og reaksjonen kan følges kontinuerlig.
:::

:::sjekk[ΔA₃₄₀/min = 0,31 med 10 µL ADH (0,1 mg/mL) i 1 mL. Hva er spesifikk aktivitet?]
mg ADH = 0,010 mL · 0,1 mg/mL = 0,001 mg. U/mg = 0,31 / (6,22 · 0,001) ≈ 50 U/mg.
:::

:::sjekk[Hastigheten øker fra 0,10 til 0,20 ΔA/min fra 298 til 310 K. Beregn Ea.]
$E_a = 8{,}314 \cdot \frac{298\cdot310}{12} \cdot \ln 2 = 6{,}40\cdot10^4 \cdot 0{,}693 ≈ 44$ kJ/mol.
:::

:::sjekk[Hvorfor øker A₃₄₀ når du tilsetter natriummetabisulfitt etter at likevekt er nådd?]
Bisulfitt binder acetaldehyd (aldehyd-bisulfittforbindelse) og fjerner dermed et produkt. Etter Le Chatelier forskyves likevekten mot høyre; mer etanol og NAD⁺ omsettes, og mer NADH dannes.
:::

:::sjekk[Endrer ADH likevektskonstanten for etanol + NAD⁺ ⇌ acetaldehyd + NADH + H⁺?]
Nei. Enzymet senker aktiveringsenergien for både fram- og tilbakereaksjonen like mye, så likevekten nås raskere, men K_eq (og ΔG) er uendret. Likevektsposisjonen styres av konsentrasjoner, pH og temperatur.
:::

:::sjekk[Hvorfor er hastigheten i del 1 proporsjonal med enzymmengden?]
Substratkonsentrasjonene er de samme i alle kyvettene og praktisk talt konstante i måleperioden (stort overskudd i forhold til enzymet). Da er $v_0 = k_{cat}[E]_T[S]/(K_M+[S])$ = konstant · [E]_T, så dobbelt så mye enzym gir dobbelt så høy hastighet. (Måles i den lineære delen, før substrat brukes opp og produkt hoper seg opp.)
:::
