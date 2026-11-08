---
title: Konsentrasjonscelle og membranpotensial
summary: Samme redokspar i begge halvceller gir E° = 0, så E = (0,0592/n)·log(c_høy/c_lav), positiv når cellen skrives slik at konsentrasjonene utjevnes. Samme Nernst-uttrykk gir likevektspotensialet for ett ion over en membran, E(ion) = (0,0592 V/z)·log([ute]/[inne]) ved 25 °C (61,5 mV/z ved 37 °C).
category: elektro
order: 3
tags: [konsentrasjonscelle, membranpotensial, nernst, kalium, hyperkalemi, Goldman]
related:
  - generell-kjemi/teori/elektrokjemi
  - generell-kjemi/regnetyper/nernst-likning
  - generell-kjemi/regnetyper/standard-cellepotensial
  - cellebiologi/cellen/membraner-og-membrantransport
  - cellebiologi/organeller/plasmamembranen
sources:
  - file: medod1/material/generell-kjemi/forelesning5-del2-2026-1--8069233.pdf
    pages: "20-27"
  - file: medod1/material/generell-kjemi/sporretime1-2026-v2--8130558.pdf
    pages: "6-8"
  - file: medod1/exercises/oppgavesett3-2026--8066331.pdf
  - file: medod1/exercises/oppgavesett3-2026-fasit--8081616.pdf
  - file: medod1/exercises/oppgavesett-4-2026--8204427.pdf
  - file: medod1/exercises/oppgavesett-4-fasit-2026--8204433.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2025-medod1-ny-v2025-med-svar--7269873.pdf
  - file: medod1/exams/2024-medod1-ny-v2024-med-svar--5897534.pdf
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
fields:
  Konsentrasjonscelle: E = (0,0592 V/n)·log(c_høy/c_lav), E° = 0
  Membranpotensial (ett ion): E = (0,0592 V/z)·log([ute]/[inne]) ved 25 °C
  Ved 37 °C: 61,5 mV/z
  Pensumstatus: Prinsippet er pensum, membranberegning brukt i oppgavesett
---

## Når brukes den

- **Konsentrasjonscelle:** samme metall og samme ion i begge halvceller, men ulik konsentrasjon. Eksempel: Cu | Cu²⁺ (0,0010 M) ‖ Cu²⁺ (1,0 M) | Cu. Dette er den **vanligste Nernst-oppgaven på eksamen**.
- **Membranpotensial:** likevektspotensialet (Nernst-potensialet) for ett ion over en selektiv membran, for eksempel K⁺ over cellemembranen.

:::husk
Spørretimen (12.10.2026) sier at det å *beregne* membranpotensial ikke er pensum. Det er pensum å vite at det gjøres med Nernst-likningen, og hvilke faktorer som påvirker potensialet: konsentrasjonsforholdet, ionets ladning, temperaturen og, for flere ioner, permeabiliteten (Goldman). Oppgavesett 3 (oppg. 4) og oppgavesett 4 (oppg. 21) regner likevel ut membranpotensialer. Det lønner seg derfor å kunne den enkle beregningen.
:::

## Formler

**Konsentrasjonscelle.** Begge halvcellene har samme E°, så E°celle = 0. Cellen går mot konsentrasjonsutjevning: oksidasjon (anoden) skjer i den **fortynnede** halvcellen, og reduksjon (katoden) i den **konsentrerte**.

$$E = 0 - \frac{0{,}0592}{n}\log\frac{c_{\text{lav}}}{c_{\text{høy}}} = \frac{0{,}0592\ \text{V}}{n}\log\frac{c_{\text{høy}}}{c_{\text{lav}}}$$

For en Cu²⁺-celle er n = 2, så faktoren blir 0,0296 V per tierpotens i konsentrasjonsforskjell.

**Membranpotensial for ett ion** (fasit til oppgavesett 3 og 4):

$$E(\text{ion}) = \frac{0{,}0592\ \text{V}}{z}\log\frac{[\text{ion}]_{ute}}{[\text{ion}]_{inne}} \quad (25\ °\text{C}), \qquad E(\text{ion}) = \frac{61{,}5\ \text{mV}}{z}\log\frac{[\text{ion}]_{ute}}{[\text{ion}]_{inne}} \quad (37\ °\text{C})$$

- z = ionets ladning **med fortegn**: +1 for K⁺, +2 for Ca²⁺, −1 for Cl⁻.
- Svaret er potensialet på **innsiden relativt til utsiden**. Cytosolsiden er normalt negativ.

**Flere ioner – Goldman–Hodgkin–Katz (GHK)**, bare til forståelse:

$$\Delta\psi = \frac{RT}{F}\ln\frac{P_{kat}[\text{Kat}]_{ute} + P_{an}[\text{An}]_{inne}}{P_{kat}[\text{Kat}]_{inne} + P_{an}[\text{An}]_{ute}}$$

Hvilepotensialet ligger nærmest Nernst-potensialet til det ionet membranen er mest permeabel for.

## Fremgangsmåte

**Konsentrasjonscelle**
1. Skriv oksidasjon i halvcellen med **lavest** konsentrasjon og reduksjon i den med **høyest**.
2. Sett E° = 0, og finn n (2 for Cu²⁺ og Cd²⁺).
3. Regn ut Q = c_lav/c_høy, altså produktionet (der Cu²⁺ dannes) over reaktantionet (der Cu²⁺ forbrukes).
4. E = −(0,0592/n)·log Q. Svaret skal bli **positivt**.

**Membranpotensial**
1. Finn z med fortegn, og [ute] og [inne].
2. E = (0,0592/z)·log([ute]/[inne]), eller 61,5 mV/z ved 37 °C.
3. Tolk fortegnet: negativt betyr at innsiden er negativ.

## Regneeksempel

:::eksempel[Forelesning 5, eksempel 4: Cu-konsentrasjonscelle, 0,1 M og 0,001 M]
Halvreaksjonene:
- Reduksjon: Cu²⁺₁ (0,1 M) + 2e⁻ → Cu₁(s), med E°
- Oksidasjon: Cu₂(s) → Cu²⁺₂ (0,001 M) + 2e⁻, med −E°

Totalreaksjonen er Cu²⁺₁ (0,1 M) + Cu₂(s) → Cu₁(s) + Cu²⁺₂ (0,001 M), med E° = 0.

$$E = 0 - \frac{0{,}0592}{2}\log\frac{0{,}001}{0{,}1} = -0{,}0296\cdot(-2) = \mathbf{0{,}0592\ V}$$

E > 0, så ligningen er skrevet riktig vei. Konsentrasjonene utjevnes, og elektronene går fra halvcelle 2 til halvcelle 1.
:::

:::eksempel[Eksamensvarianter: Cu-konsentrasjonscelle (6 av 9 eksamener)]
Med E = 0,0296 · log(c_høy/c_lav):

| c_høy | c_lav | log(c_høy/c_lav) | E | Eksamen |
|---|---|---|---|---|
| 1,0 M | 0,0010 M | 3,00 | **+0,089 V** | H2023, H2025 |
| 1,0 M | 0,0020 M | 2,70 | **+0,080 V** | V2023, V2025 |
| 0,2 M | 0,01 M | 1,30 | **+0,038 V** (0,0296 · 1,301 = 0,0385; svaralternativet er 0,038) | H2021, V2024 |

Distraktorene på eksamen:
- Feil fortegn: −0,080 V. Bare log-verdien med feil fortegn: −1,301 V.
- Glemt n = 2: +0,160 V, +0,178 V og +0,077 V (0,0592 · 1,301).
- Bare log-verdien oppgitt: +2,699 V.
- +0,002 V er bare den lave konsentrasjonen (V2023, V2025).
:::

:::eksempel[Oppgavesett 3, oppg. 12: Cd(s) | Cd²⁺ (0,10 M) ‖ Cd²⁺ (1,00 M) | Cd(s)]
**a)** Dette er en konsentrasjonscelle.

**b)** Oksidasjon skjer i venstre halvcelle (0,10 M) og reduksjon i høyre (1,00 M). E° = 0 og n = 2.

$$E = 0 - 0{,}0296\log\frac{0{,}10}{1{,}00} = \mathbf{+0{,}030\ V}$$

**c)** Tilsetter man KOH i venstre halvcelle, felles Cd(OH)₂ ut ($\ce{Cd^2+ + 2OH- -> Cd(OH)2(s)}$). [Cd²⁺] i venstre halvcelle synker, så konsentrasjonsforskjellen øker og **potensialet øker**.
:::

:::eksempel[Oppgavesett 3, oppg. 4: membranpotensial med CaCl₂]
Innsiden har 0,1 M CaCl₂, altså [Ca²⁺] = 0,1 M og [Cl⁻] = 0,2 M. Utsiden har 0,01 M CaCl₂, altså [Ca²⁺] = 0,01 M og [Cl⁻] = 0,02 M.

**a) Membranen slipper bare gjennom Ca²⁺** (z = +2):

$$E = \frac{0{,}059}{+2}\log\frac{0{,}01}{0{,}1} = 0{,}0295\cdot(-1) = \mathbf{-0{,}030\ V}$$

**b) Membranen slipper bare gjennom Cl⁻** (z = −1):

$$E = \frac{0{,}059}{-1}\log\frac{0{,}02}{0{,}2} = (-0{,}059)\cdot(-1) = \mathbf{+0{,}059\ V}$$

Fortegnet snur fordi ionene har motsatt ladning.
:::

:::eksempel[Oppgavesett 4, oppg. 21: K⁺ ved 37 °C og hyperkalemi]
[K⁺]ute = 4 mM og [K⁺]inne = 140 mM:

$$E(\ce{K+}) = \frac{61{,}5\ \text{mV}}{1}\log\frac{4}{140} = 61{,}5\cdot(-1{,}544) \approx \mathbf{-95\ mV}$$

Ved **hyperkalemi** er [K⁺]ute = 8 mM:

$$E(\ce{K+}) = 61{,}5\log\frac{8}{140} = 61{,}5\cdot(-1{,}243) \approx \mathbf{-76\ mV}$$

Potensialet blir omtrent 19 mV mindre negativt, og cellene **depolariseres**. Det endrer eksitabiliteten til nerve- og muskelceller, også i hjertet, og kan gi **hjerterytmeforstyrrelser**.

Hvilepotensialet (≈ −70 mV) ligger nær E(K⁺) fordi membranen i hvile er mest permeabel for K⁺. Na⁺/K⁺-ATPase pumper 3 Na⁺ ut og 2 K⁺ inn med ATP og opprettholder gradientene. Se [membraner og membrantransport](/medod1/cellebiologi/cellen/membraner-og-membrantransport).
:::

:::eksamen
- Cu²⁺-konsentrasjonscellen med 1,0/0,0010 M (0,089 V), 1,0/0,0020 M (0,080 V) eller 0,2/0,01 M (0,038 V) er en av de hyppigst gjentatte regneoppgavene i generell kjemi (H2025, V2025, V2024, H2023, V2023, H2021).
- Ofte er tallene helt identiske fra år til år.
- Nøkkelen er **n = 2** og et **positivt** svar.
:::

## Vanlige feil

:::feil
- **log(c_lav/c_høy) uten minus foran.** Det gir negativ E. En konsentrasjonscelle som går spontant har alltid E > 0.
- **n glemt.** For Cu²⁺ og Cd²⁺ er n = 2. Uten n blir svaret dobbelt så stort.
- **E° ≠ 0 brukt.** I en konsentrasjonscelle er det samme redokspar på begge sider, så E° = 0.
- **Membranpotensial: z uten fortegn.** For anioner (Cl⁻) er z negativ, og fortegnet på potensialet snur.
- **25 °C-faktor brukt ved 37 °C.** Faktoren er 0,0592 V ved 25 °C og 61,5 mV ved 37 °C.
- **Ute og inne forvekslet.** Med formen (0,0592/z)·log([ute]/[inne]) får du innsidens potensial relativt til utsiden.
:::

## Test deg selv

:::sjekk[Hva er drivkraften i en konsentrasjonscelle, og når er den «tom»?]
Konsentrasjonsforskjellen. Cellen går mot utjevning: i den fortynnede halvcellen løses metall opp og danner ioner, i den konsentrerte felles metall ut. Når konsentrasjonene er like, er Q = 1 og E = 0.
:::

:::sjekk[Regn ut E for en Cu²⁺-konsentrasjonscelle med 0,50 M og 0,0050 M ved 25 °C.]
E = (0,0592/2)·log(0,50/0,0050) = 0,0296 · 2 = **0,059 V**.
:::

:::sjekk[Hvorfor gir hyperkalemi depolarisering?]
Høyere [K⁺]ute gjør forholdet [ute]/[inne] større. E(K⁺) blir da mindre negativ, for eksempel fra −95 til −76 mV. Hvilepotensialet, som ligger nær E(K⁺), flyttes mot mindre negative verdier.
:::

:::sjekk[Hvilke faktorer bestemmer membranpotensialet ifølge Nernst og Goldman?]
- Konsentrasjonsforholdet mellom ute og inne for hvert ion.
- Ionets ladning z.
- Temperaturen.
- Når flere ioner bidrar: membranens permeabilitet for hvert ion.
:::
