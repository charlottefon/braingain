---
title: Nernst-likningen (cellepotensial ved ikke-standardbetingelser)
summary: E = E° − (0,0592 V/n)·log Q ved 25 °C. Gir cellepotensialet ved vilkårlige konsentrasjoner, eller en ukjent konsentrasjon når E er målt. n er antall elektroner overført i den balanserte totalreaksjonen. Q skrives som for en vanlig likevekt, uten faste stoffer.
category: elektro
order: 2
tags: [nernst, cellepotensial, reaksjonskvotient, ikke-standardbetingelser, konsentrasjonsbestemmelse]
related:
  - generell-kjemi/teori/elektrokjemi
  - generell-kjemi/regnetyper/standard-cellepotensial
  - generell-kjemi/regnetyper/konsentrasjonscelle-og-membranpotensial
  - generell-kjemi/regnetyper/fri-energi-og-cellepotensial
  - generell-kjemi/regnetyper/reaksjonskvotient
sources:
  - file: medod1/material/generell-kjemi/forelesning5-del2-2026-1--8069233.pdf
    pages: "14-18"
  - file: medod1/info/formelhefte--7793986.pdf
    pages: "5"
  - file: medod1/exercises/oppgavesett3-2026--8066331.pdf
  - file: medod1/exercises/oppgavesett3-2026-fasit--8081616.pdf
  - file: medod1/exercises/oppgavesett-4-2026--8204427.pdf
  - file: medod1/exercises/oppgavesett-4-fasit-2026--8204433.pdf
  - file: medod1/exams/2022-medod1-h2022-med-svar--4750110.pdf
fields:
  Formel (25 °C): E = E° − (0,0592 V/n)·log Q
  Generell form: E = E° − (RT/nF)·ln Q
  I formelheftet: Ja (0,0592 gjelder kun ved 25 °C)
  Ved likevekt: E = 0, Q = K
---

## Når brukes den

- Du skal finne cellepotensialet E når konsentrasjonene **ikke er 1 M**.
- Cellepotensialet er **målt**, og du skal finne en **ukjent ionekonsentrasjon**. Prinsippet brukes for eksempel i ioneselektive elektroder.
- Du skal avgjøre om en redoksreaksjon er spontan ved gitte konsentrasjoner (E > 0 betyr spontan).
- Konsentrasjonsceller og membranpotensial. Se [konsentrasjonscelle og membranpotensial](/medod1/generell-kjemi/regnetyper/konsentrasjonscelle-og-membranpotensial).

## Formler

$$E = E^\circ - \frac{RT}{nF}\ln Q \qquad\text{eller}\qquad E = E^\circ - \frac{2{,}303\,RT}{nF}\log Q$$

Ved 25 °C er 2,303RT/F = 0,0592 V, slik at

$$E = E^\circ - \frac{0{,}0592\ \text{V}}{n}\log Q$$

Symboler:
- R = 8,314 J/(mol·K) og F = 96 485 J/(V·mol), dvs. C/mol.
- n = antall mol elektroner overført i den balanserte totalreaksjonen.
- Q = reaksjonskvotienten for totalreaksjonen, [produkter]/[reaktanter] med koeffisienter som eksponenter. Faste stoffer og rene væsker er med som 1.

**Utledning (forelesning 5):** ΔG = ΔG° + RT ln Q. Sett inn ΔG = −nFE og ΔG° = −nFE°:

$$-nFE = -nFE^\circ + RT\ln Q \quad\Rightarrow\quad E = E^\circ - \frac{RT}{nF}\ln Q$$

- Q < 1 (mye reaktant) gir E > E°.
- Q > 1 (mye produkt) gir E < E°.
- Ved likevekt er E = 0 og Q = K.

## Fremgangsmåte

1. Skriv den **balanserte totalreaksjonen** og finn **n**.
2. Finn **E°celle**. Se [standard cellepotensial](/medod1/generell-kjemi/regnetyper/standard-cellepotensial).
3. Skriv **Q** fra totalreaksjonen. Ta bare med løste ioner og gasser, og opphøy i koeffisientene.
4. Sett inn i E = E° − (0,0592/n)·log Q.
5. **Ukjent konsentrasjon:** løs for log Q = (E° − E)·n/0,0592. Da er Q = 10^(log Q). Løs deretter Q-uttrykket for den ukjente.

## Regneeksempel

:::eksempel[Forelesning 5, eksempel 3: Cu(s) | Cu²⁺ (0,010 M) ‖ Fe³⁺ (1,0 M), Fe²⁺ (0,10 M) | Pt]
Halvreaksjonene:
- Reduksjon (×2): Fe³⁺ + e⁻ → Fe²⁺, med E° = 0,77 V
- Oksidasjon: Cu → Cu²⁺ + 2e⁻, med E° = −0,34 V

Totalreaksjonen er $\ce{Cu(s) + 2Fe^3+ -> Cu^2+ + 2Fe^2+}$, med E° = 0,43 V og **n = 2**.

$$Q = \frac{[\ce{Cu^2+}][\ce{Fe^2+}]^2}{[\ce{Fe^3+}]^2} = \frac{(0{,}010)(0{,}10)^2}{(1{,}0)^2} = 1{,}0\times10^{-4}$$

$$E = 0{,}43 - \frac{0{,}0592}{2}\log(1{,}0\times10^{-4}) = 0{,}43 - 0{,}0296\cdot(-4) = 0{,}43 + 0{,}118 = \mathbf{0{,}55\ V}$$

E er større enn E° fordi Q < 1: det er lite produkt.
:::

:::eksempel[Oppgavesett 4, oppg. 7: Fe(s) + 2Ag⁺ → Fe²⁺ + 2Ag(s), E° = +1,24 V, n = 2]
Reaksjonskvotienten er $Q = [\ce{Fe^2+}]/[\ce{Ag+}]^2$.

**a)** [Fe²⁺] = 0,020 M og [Ag⁺] = 0,50 M:

$$Q = \frac{0{,}020}{0{,}25} = 0{,}080 \quad\Rightarrow\quad E = 1{,}24 - 0{,}0296\log(0{,}080) = 1{,}24 - 0{,}0296\cdot(-1{,}097) = 1{,}24 + 0{,}032 = \mathbf{1{,}27\ V}$$

**b)** [Fe²⁺] = 0,50 M og [Ag⁺] = 0,020 M:

$$Q = \frac{0{,}50}{(0{,}020)^2} = 1250 \quad\Rightarrow\quad E = 1{,}24 - 0{,}0296\cdot 3{,}097 = 1{,}24 - 0{,}092 = \mathbf{1{,}15\ V}$$

Begge er positive, så reaksjonen er spontan mot høyre i begge tilfeller. Drivkraften er minst når det er mye produkt (Fe²⁺) og lite reaktant (Ag⁺). E° > 0 betyr at ΔG° < 0 og K > 1.
:::

:::eksempel[Oppgavesett 3, oppg. 5: ukjent [Pb²⁺]]
Cellen er Zn(s) | Zn²⁺ (0,50 M) ‖ Pb²⁺ (? M) | Pb(s), med E° = 0,6365 V og målt E = 0,4438 V.

Totalreaksjonen er $\ce{Zn + Pb^2+ -> Zn^2+ + Pb}$, med n = 2 og $Q = [\ce{Zn^2+}]/[\ce{Pb^2+}]$.

$$\log Q = \frac{(E^\circ - E)\,n}{0{,}0592} = \frac{(0{,}6365 - 0{,}4438)\cdot 2}{0{,}0592} = \frac{0{,}1927}{0{,}0296} = 6{,}51$$

$$Q = 10^{6{,}51} = 3{,}24\times10^{6} \quad\Rightarrow\quad [\ce{Pb^2+}] = \frac{0{,}50}{3{,}24\times10^{6}} = \mathbf{1{,}5\times10^{-7}\ M}$$
:::

:::eksempel[Eksamen H2022: 2Ag⁺ + Sn → 2Ag + Sn²⁺]
Gitt: [Sn²⁺] = 0,020 M, [Ag⁺] = 0,010 M, E°(Ag⁺/Ag) = +0,799 V og E°(Sn²⁺/Sn) = −0,136 V.

$$E^\circ = 0{,}799 - (-0{,}136) = 0{,}935\ \text{V}, \quad n = 2, \quad Q = \frac{0{,}020}{(0{,}010)^2} = 200$$

$$E = 0{,}935 - 0{,}0296\log 200 = 0{,}935 - 0{,}0296\cdot 2{,}301 = 0{,}935 - 0{,}068 = \mathbf{+0{,}867\ V}$$
:::

:::eksempel[Oppgavesett 3, oppg. 14: Cd(s) | Cd²⁺ (? M) ‖ Ag⁺ (1,000 M) | Ag(s)]
E° = 1,2022 V og målt E = 1,2871 V.

Totalreaksjonen er $\ce{Cd + 2Ag+ -> Cd^2+ + 2Ag}$, med n = 2 og $Q = [\ce{Cd^2+}]/[\ce{Ag+}]^2$.

$$\log Q = \frac{(1{,}2022 - 1{,}2871)\cdot 2}{0{,}0592} = \frac{-0{,}0849}{0{,}0296} = -2{,}868$$

$$Q = 10^{-2{,}868} = 1{,}35\times10^{-3}$$

Siden [Ag⁺] = 1,000 M, blir **[Cd²⁺] = 1,35 × 10⁻³ M ≈ 1,4 × 10⁻³ M**. (Runder du log Q til −2,87 før du opphøyer, får du 1,3 × 10⁻³ – behold en ekstra desimal i log Q, siden 10ˣ forstørrer avrundingsfeil.)
:::

:::eksamen
- En full Nernst-beregning for en galvanisk celle har kommet én gang de siste årene (H2022, svar +0,867 V).
- Langt vanligere er Nernst for en **konsentrasjonscelle**, der E° = 0 (Cu²⁺ 1,0 M / 0,0020 M → +0,080 V i V2025 og V2023; 1,0 M / 0,0010 M → +0,089 V i H2025; 0,2 M / 0,01 M → +0,038 V i V2024, der 0,0592 gir 0,0385 V – alternativene er laget med 0,059). Se [konsentrasjonscelle og membranpotensial](/medod1/generell-kjemi/regnetyper/konsentrasjonscelle-og-membranpotensial).
- Nernst-likningen står i formelheftet, men husk at 0,0592 V **bare gjelder ved 25 °C**.
:::

## Vanlige feil

:::feil
- **n glemt eller feil.** n er antall elektroner i den *balanserte* totalreaksjonen, for eksempel 2 for Cu + 2Fe³⁺. Den er ikke koeffisienten foran et ion.
- **Q skrevet feil vei, eller uten eksponenter.** Det skal være produkter over reaktanter, med [Ag⁺]² når koeffisienten er 2. Faste metaller er ikke med.
- **Fortegnsfeil.** Det er **minus** foran (0,0592/n)·log Q.
- **E° ganget med koeffisient.** Se [standard cellepotensial](/medod1/generell-kjemi/regnetyper/standard-cellepotensial).
- **0,0592 brukt ved 37 °C.** Ved 37 °C er faktoren 0,0615 V (61,5 mV), eller bruk RT/nF · ln Q med T i Kelvin.
- **ln og log blandet.** 0,0592 hører til log₁₀. RT/F hører til ln.
:::

## Test deg selv

:::sjekk[Hva er E for en galvanisk celle når reaksjonen har nådd likevekt, og hva er Q da?]
E = 0 («tomt batteri») og Q = K. Da får vi E° = (0,0592/n)·log K.
:::

:::sjekk[Er Co(s) + Fe²⁺(1,94 M) → Co²⁺(0,15 M) + Fe(s) spontan? E°celle = −0,167 V, n = 2.]
Q = 0,15/1,94 = 0,077, som gir log Q = −1,11. E = −0,167 − 0,0296·(−1,11) ≈ **−0,13 V** < 0, så reaksjonen er **ikke spontan** som skrevet. Det er oppgavesett 3, oppg. 8.
:::

:::sjekk[Hvordan endres E når reaktantkonsentrasjonen økes?]
Q blir mindre, så log Q synker, og E = E° − (0,0592/n)·log Q øker. Cellen får større drivkraft, i tråd med Le Châtelier.
:::

:::sjekk[Hvorfor er cellepotensialet høyere i a) (1,27 V) enn i b) (1,15 V) i Fe/Ag-eksempelet?]
I a) er det mye reaktant (Ag⁺) og lite produkt (Fe²⁺), så Q = 0,08 < 1 og E > E°. I b) er det motsatt, så Q = 1250 > 1 og E < E°.
:::
