---
title: Elektrokjemi – redoks, cellepotensial, Nernst og membranpotensial
summary: Redoksreaksjoner overfører elektroner og deles i to halvreaksjoner. Standard reduksjonspotensialer kombineres til E°celle; halvreaksjonen med lavest E° snus, og E° ganges aldri med koeffisienter. E°celle > 0 betyr spontan reaksjon, ΔG° = −nFE° < 0 og K > 1. Nernst-likningen gir E ved ikke-standardbetingelser, og ved likevekt er E = 0. Konsentrasjonsceller og membranpotensial drives av konsentrasjonsforskjeller.
order: 15
tags: [elektrokjemi, redoks, oksidasjon, reduksjon, oksidasjonsmiddel, reduksjonsmiddel, halvreaksjon, reduksjonspotensial, galvanisk celle, cellepotensial, Nernst, konsentrasjonscelle, membranpotensial, Goldman, elektrolytt, NADH]
related:
  - generell-kjemi/regnetyper/standard-cellepotensial
  - generell-kjemi/regnetyper/nernst-likning
  - generell-kjemi/regnetyper/konsentrasjonscelle-og-membranpotensial
  - generell-kjemi/regnetyper/fri-energi-og-cellepotensial
  - generell-kjemi/teori/termodynamikk
  - generell-kjemi/teori/kjemiske-bindinger
  - cellebiologi/organeller/mitokondrier
  - cellebiologi/organeller/plasmamembranen
  - cellebiologi/cellen/membraner-og-membrantransport
sources:
  - file: medod1/material/generell-kjemi/forelesning5-del2-2026-1--8069233.pdf
  - file: medod1/material/generell-kjemi/elektro-1--7793974.pdf
  - file: medod1/material/generell-kjemi/fl-ot--7793975.pdf
  - file: medod1/material/generell-kjemi/sporretime1-2026-v2--8130558.pdf
    pages: "6-8, 21-22"
  - file: medod1/info/formelhefte--7793986.pdf
  - file: medod1/exercises/oppgavesett3-2026-fasit--8081616.pdf
  - file: medod1/exercises/oppgavesett-4-2026--8204427.pdf
  - file: medod1/exercises/oppgavesett-4-fasit-2026--8204433.pdf
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2022-medod1-h2022-med-svar--4750110.pdf
---

## Elektrolytter

**Elektrolytter** er stoffer som danner ioner i vann og leder elektrisk strøm. **Sterke elektrolytter** ioniseres 100 % (salter, sterke syrer og baser). **Svake elektrolytter** ioniseres delvis (svake syrer og baser). I kroppen er de viktigste Na⁺, K⁺, Ca²⁺ og Cl⁻, i tillegg til syrer og baser. Elektrokjemi handler om omdanning mellom **kjemisk og elektrisk energi**, og i biologien om energiproduksjon via redoksreaksjoner og potensialforskjeller over membraner.

## Redoksreaksjoner

Redoksreaksjoner innebærer **overføring av elektroner** og endring av oksidasjonstall:

| | Elektroner | Oksidasjonstall | Stoffet er … |
|---|---|---|---|
| **Oksidasjon** | **avgis** | øker | **reduksjonsmiddel** (reduserer det andre stoffet) |
| **Reduksjon** | **tas opp** | synker | **oksidasjonsmiddel** (oksiderer det andre stoffet) |

Oksidasjonstall og balansering av redoksreaksjoner regnes som kjent fra videregående. Oksidasjonstall beregnes som formell ladning, men **alle bindingselektronene gis til det mest elektronegative atomet**. I CO₂ er C altså +4, mens den formelle ladningen er 0 (se [kjemiske bindinger](/medod1/generell-kjemi/teori/kjemiske-bindinger)).

:::eksempel[Oppgavesett 4 oppg. 15 og 20]
- $\ce{Zn + Cu^2+ -> Zn^2+ + Cu}$: Zn oksideres (0 → +2) og er reduksjonsmiddel. Cu²⁺ reduseres (+2 → 0) og er oksidasjonsmiddel.
- Cellerespirasjon: glukose oksideres til CO₂ og er **reduksjonsmiddel**. O₂ reduseres til H₂O og er **oksidasjonsmiddel**.
:::

En redoksreaksjon består av **to halvreaksjoner**. Den ene reaktanten oksideres, den andre reduseres, og elektronene leveres fra den ene til den andre.

## Elektrokjemiske celler

| Celletype | Energiomdanning |
|---|---|
| **Galvanisk celle** | spontan kjemisk reaksjon → elektrisk strøm (batteri) |
| **Elektrolytisk celle** | elektrisk strøm driver en ikke-spontan reaksjon |

I en galvanisk celle (f.eks. Zn | Zn²⁺ ‖ Cu²⁺ | Cu) er halvreaksjonene adskilt, slik at elektronene må gå gjennom en ytre ledning og gjøre arbeid:
- **Anode**: **oksidasjon**, $\ce{Zn(s) -> Zn^2+ + 2e-}$
- **Katode**: **reduksjon**, $\ce{Cu^2+ + 2e- -> Cu(s)}$

Elektronene går fra anode til katode. Cellediagram skrives *anode | anodeløsning ‖ katodeløsning | katode*, der ‖ er saltbroen.

**Cellepotensialet E** (elektromotorisk spenning, ems) er «kraften» som trekker elektroner fra anoden til katoden, målt i volt. **Standardcellepotensialet E°** er cellepotensialet under standardbetingelser: **1 M** for alle oppløste stoffer, **1 atm** for gasser, rene faste stoffer og væsker, **25 °C**.

## Standard reduksjonspotensial

Halvcellepotensialer angis alltid som **reduksjoner** i en spenningsrekke (tabell), målt mot **standard hydrogenelektroden**: Pt i kontakt med H₂ (1 atm) og [H⁺] = 1 M, der $\ce{2H+ + 2e- -> H2}$ har E° = 0 V per definisjon. Mot denne gir Cu²⁺/Cu E° = +0,34 V.

- **Høy E°** betyr sterk tendens til å bli redusert, altså et **sterkt oksidasjonsmiddel** (venstresiden: Ag⁺, O₂, H₂O₂).
- **Lav (negativ) E°** betyr at den reduserte formen er et **sterkt reduksjonsmiddel** (høyresiden: Zn, NADH).

### Å sette sammen en celle (kursets metode)

1. Finn de to halvreaksjonene med E° (som reduksjoner).
2. Halvreaksjonen med **høyest E°** blir reduksjonen. Den trekker elektroner fra den andre.
3. **Snu** halvreaksjonen med lavest E°, så den blir en oksidasjon, og **skift fortegn** på E°.
4. Multipliser halvreaksjonene slik at antall elektroner blir likt. **E° ganges ALDRI med koeffisienten**, fordi potensial er en intensiv størrelse.
5. Summer:

$$E^\circ_{celle} = E^\circ_{red} + E^\circ_{oks} = E^\circ_{katode} - E^\circ_{anode}$$

Boka gjør dette litt annerledes, men resultatet blir det samme.

:::eksempel[Forelesning 5 eks. 2: Cu(s) | Cu²⁺ (1 M) ‖ Ag⁺ (1 M) | Ag(s)]
- Reduksjon: $\ce{Ag+ + e- -> Ag}$, E° = +0,80 V (×2 for elektronbalansen, men E° forblir 0,80 V).
- Oksidasjon: $\ce{Cu -> Cu^2+ + 2e-}$, E° = −0,34 V (snudd).
- Total: $\ce{Cu + 2Ag+ -> Cu^2+ + 2Ag}$, E°celle = 0,80 − 0,34 = **+0,46 V**.
:::

:::eksempel[Oppgavesett 4 oppg. 2: Zn + Cu²⁺ → Zn²⁺ + Cu]
E°(Zn²⁺/Zn) = −0,76 V og E°(Cu²⁺/Cu) = +0,34 V gir E°celle = 0,34 − (−0,76) = **+1,10 V**.
E° > 0, så reaksjonen er spontan. Det gir ΔG° < 0 og K ≫ 1.
:::

:::eksamen
- **H₂O₂ + 2H⁺ + 2Fe²⁺ → 2H₂O + 2Fe³⁺** med E° = +1,763 og +0,769 V. Svaret er E° = 1,763 − 0,769 = **+0,994 V** (V2026, H2025, V2024, H2021).
- Fellene: +0,225 V (Fe-potensialet ganget med 2: 1,763 − 2·0,769), +2,532 V (addert: 1,763 + 0,769) og +3,301 V (både addert og ganget med 2).
- **Fortegn for E° og ΔG°** med to oppgitte halvreaksjoner, f.eks. A⁺/A = −0,133 V og B²⁺/B = −0,241 V for 2A⁺ + B → 2A + B²⁺: E° = −0,133 − (−0,241) = +0,108 V > 0 og ΔG° < 0 (V2026; varianter i H2025, H2024, H2023, H2022).

Se [standard cellepotensial](/medod1/generell-kjemi/regnetyper/standard-cellepotensial).
:::

## Cellepotensial og fri energi

$$\Delta G = -nFE \qquad \Delta G^\circ = -nFE^\circ \qquad F = 96\,485\ \text{C/mol} = 96{,}485\ \text{kJ/(V·mol)}$$

n er antall mol elektroner som overføres i den balanserte totalreaksjonen. Dette er den teoretisk maksimale energien cellen har før elektronene begynner å vandre. Etter hvert som reaktantene brukes opp og produktene hoper seg opp, synker E, og ved likevekt er E = 0 («tomt batteri»).

**Alt henger sammen:**

$$\boxed{\Delta G^\circ = -nFE^\circ = -RT\ln K}$$

| E° | ΔG° | K |
|---|---|---|
| > 0 | < 0 | > 1 (produkter favorisert) |
| = 0 | = 0 | = 1 |
| < 0 | > 0 | < 1 |

Ved likevekt er E = 0, ΔG = 0 og Q = K.

:::eksempel[Forelesning 5: elektrontransport fra NADH til O₂]
- $\ce{NAD+ + H+ + 2e- -> NADH}$, E° = −0,32 V (snus)
- $\ce{1/2O2 + 2H+ + 2e- -> H2O}$, E° = +0,82 V
- Total: $\ce{1/2O2 + NADH + H+ -> H2O + NAD+}$, E° = 0,82 + 0,32 = **+1,14 V**

$$\Delta G^\circ = -nFE^\circ = -2\cdot96{,}48\ \tfrac{\text{kJ}}{\text{mol·V}}\cdot1{,}14\ \text{V} = -220\ \text{kJ/mol}$$

Dette er energien som frigjøres når elektronene går fra NADH til O₂. Den driver oksidativ fosforylering i [mitokondriene](/medod1/cellebiologi/organeller/mitokondrier) (ATP-syntase, «en molekylær turbin»).
:::

:::husk
Oppgavesett 4-fasiten kaller formlene ΔG° = −nFE° og E° = (RT/nF) ln K «ikke pensum å huske». Forelesning 5 og spørretimen bruker dem likevel. Det du **må** kunne, er sammenhengen mellom fortegnene: **E° > 0 ⇔ ΔG° < 0 ⇔ K > 1**. Se [ΔG° = −nFE° og K](/medod1/generell-kjemi/regnetyper/fri-energi-og-cellepotensial).
:::

## Nernst-likningen

Setter man ΔG = −nFE og ΔG° = −nFE° inn i ΔG = ΔG° + RT ln Q, får man

$$-nFE = -nFE^\circ + RT\ln Q \;\Rightarrow\; E = E^\circ - \frac{RT}{nF}\ln Q = E^\circ - \frac{2{,}303\,RT}{nF}\log Q$$

Ved 25 °C er $2{,}303RT/F = 0{,}0592$ V, og dette er formen i formelheftet:

$$\boxed{E = E^\circ - \frac{0{,}0592\ \text{V}}{n}\log Q}\qquad (\text{bare ved } 25\,^\circ\text{C})$$

Q settes opp som vanlig. Faste metaller (Cu(s), Zn(s)) tas ikke med. Med Nernst kan man beregne cellepotensialet ved ikke-standardbetingelser og finne ukjente konsentrasjoner.

:::eksempel[Forelesning 5 eks. 3: Cu(s) | Cu²⁺ (0,010 M) ‖ Fe³⁺ (1,0 M), Fe²⁺ (0,10 M) | Pt]
- Reduksjon (×2): $\ce{Fe^3+ + e- -> Fe^2+}$, E° = +0,77 V. Oksidasjon: $\ce{Cu -> Cu^2+ + 2e-}$, E° = −0,34 V.
- Total: $\ce{Cu + 2Fe^3+ -> Cu^2+ + 2Fe^2+}$, E° = 0,43 V og n = 2.
- $Q = \dfrac{[Cu^{2+}][Fe^{2+}]^2}{[Fe^{3+}]^2} = \dfrac{(0{,}010)(0{,}10)^2}{(1{,}0)^2} = 1{,}0\cdot10^{-4}$
- $E = 0{,}43 - \dfrac{0{,}0592}{2}\log(10^{-4}) = 0{,}43 + 0{,}118 = \mathbf{0{,}55\ V}$

Lite produkt og mye reaktant gir høyere E enn E°.
:::

:::eksempel[Eksamen H2022: 2Ag⁺ + Sn → 2Ag + Sn²⁺, [Sn²⁺] = 0,020 M, [Ag⁺] = 0,010 M]
E° = 0,799 − (−0,136) = 0,935 V. $Q = 0{,}020/0{,}010^2 = 200$.
$E = 0{,}935 - 0{,}0296\cdot\log 200 = 0{,}935 - 0{,}068 = \mathbf{+0{,}867\ V}$.
:::

### Nernst og K

En celle med E = 0 er i likevekt, så Q = K:

$$E^\circ = \frac{0{,}0592\ \text{V}}{n}\log K \qquad K = 10^{\,nE^\circ/0{,}0592}$$

Kjenner man E°, kan man beregne K, og omvendt. For Zn/Cu (E° = 1,10 V, n = 2) blir K ≈ 10³⁷.

Utregninger: [Nernst-likningen](/medod1/generell-kjemi/regnetyper/nernst-likning).

## Konsentrasjonscelle

Begge halvcellene har **samme redokspar, men ulike konsentrasjoner**, så **E° = 0**. Drivkraften er konsentrasjonsforskjellen, og cellen går mot utjevning: halvcellen med **lav** konsentrasjon er anoden (her dannes ioner), og den med **høy** konsentrasjon er katoden (her fjernes ioner).

$$E = 0 - \frac{0{,}0592}{n}\log\frac{c_{lav}}{c_{høy}} = \frac{0{,}0592}{n}\log\frac{c_{høy}}{c_{lav}} > 0$$

:::eksempel[Forelesning 5 eks. 4: Cu-konsentrasjonscelle, 0,1 M og 0,001 M]
Total: Cu²⁺(0,1 M) + Cu(s) → Cu(s) + Cu²⁺(0,001 M), n = 2.
$E = 0 - \dfrac{0{,}0592}{2}\log\dfrac{0{,}001}{0{,}1} = 0{,}0296\cdot2 = \mathbf{0{,}0592\ V}$
E > 0, så likningen er skrevet riktig vei. Det stemmer med utjevning: elektronene går fra den fortynnede til den konsentrerte halvcellen.
:::

:::eksamen
Cu-konsentrasjonscelle kommer på omtrent annenhver eksamen:
- 1,0 M og 0,0010 M gir 0,0296·3 = **+0,089 V** (H2025, H2023).
- 1,0 M og 0,0020 M gir **+0,080 V** (V2025, V2023).
- 0,2 M og 0,01 M gir **+0,038 V** (V2024, H2021).

Fellene er negativt fortegn (log c_lav/c_høy) og å glemme n = 2 (+0,178 V og +0,160 V). Se [konsentrasjonscelle og membranpotensial](/medod1/generell-kjemi/regnetyper/konsentrasjonscelle-og-membranpotensial).
:::

Oppgavesett 3 oppg. 12: i Cd | Cd²⁺ (0,10 M) ‖ Cd²⁺ (1,00 M) | Cd er E = 0,030 V. Tilsetter man KOH til venstre halvcelle, felles Cd(OH)₂ ut. [Cd²⁺] på den fortynnede siden synker, forskjellen øker, og **E øker**.

## Membranpotensial

En **semipermeabel** membran som bare slipper gjennom én ionetype, gir en ladningsforskjell. Ionene diffunderer mot utjevning og drar ladning med seg, og det oppstår et elektrisk potensial over membranen: **membranpotensialet**. I levende celler skapes det av konsentrasjonsforskjeller over [plasmamembranen](/medod1/cellebiologi/organeller/plasmamembranen), opprettholdt av Na⁺/K⁺-ATPase med ATP (se [membrantransport](/medod1/cellebiologi/cellen/membraner-og-membrantransport)). Det er viktig som energikilde for transport og for elektriske signaler.

- Drivkraften er den samme som i en konsentrasjonscelle, og potensialet har samme størrelse men **motsatt polaritet**. Cytosolsiden av plasmamembranen er **negativ**.
- For ett ion (Nernst-potensial):

$$E_{ion} = \frac{0{,}0592\ \text{V}}{z}\log\frac{[\text{ion}]_{ute}}{[\text{ion}]_{inne}}\ (25\,^\circ\text{C}) \qquad \frac{61{,}5\ \text{mV}}{z}\log\frac{[\text{ion}]_{ute}}{[\text{ion}]_{inne}}\ (37\,^\circ\text{C})$$

- Med flere ioner brukes **Goldman–Hodgkin–Katz**-likningen («modifisert Nernst»), der hvert ion vektes med membranens **permeabilitet** P:

$$\Delta\psi = \frac{RT}{F}\ln\frac{P_{kat}[\text{Kat}]_{ute} + P_{an}[\text{An}]_{inne}}{P_{kat}[\text{Kat}]_{inne} + P_{an}[\text{An}]_{ute}}$$

:::husk
Spørretime 1: å **beregne** membranpotensial er ikke pensum, men det er pensum å vite at det beregnes med **Nernst-likningen** (Goldman for flere ioner), og hvilke faktorer som påvirker det: **konsentrasjonsforhold, ioneladning z, temperatur og permeabilitet**. Oppgavesett 3 og 4 regner det likevel ut, så kunne en enkel Nernst-utregning.
:::

:::eksempel[Oppgavesett 4 oppg. 21: K⁺-potensial ved 37 °C, [K⁺]ute = 4 mM og [K⁺]inne = 140 mM]
$E_K = 61{,}5\cdot\log(4/140) = 61{,}5\cdot(-1{,}54) \approx -95$ mV.
Ved **hyperkalemi** stiger [K⁺]ute til 8 mM: $E_K = 61{,}5\cdot\log(8/140) \approx -76$ mV, altså mindre negativt. Cellene depolariseres, eksitabiliteten endres, og det kan gi **hjerterytmeforstyrrelser**.

Hvilepotensialet (ca. −70 mV) ligger nær E(K⁺), fordi membranen i hvile er mest permeabel for K⁺ (lekkasjekanaler). Na⁺/K⁺-ATPase pumper 3 Na⁺ ut og 2 K⁺ inn og opprettholder gradientene.
:::

## Test deg selv

:::sjekk[Hvorfor ganger man ikke E° med 2 når en halvreaksjon multipliseres med 2 for å balansere elektronene?]
E° er et potensial (energi per ladning) og en intensiv størrelse, uavhengig av hvor mye stoff som reagerer. ΔG° (= −nFE°) er derimot ekstensiv og skalerer med n.
:::

:::sjekk[En celle har E°celle = +0,30 V. Hva kan du si om ΔG°, K og spontanitet? Hva er E når cellen er «tom»?]
ΔG° < 0, K > 1, og reaksjonen er spontan i skrevet retning under standardbetingelser. Når cellen er tom, er den i likevekt med Q = K og ΔG = 0, og E = 0 V.
:::

:::sjekk[I en Cu-konsentrasjonscelle med 1,0 M og 0,0010 M Cu²⁺: hvilken elektrode er anoden, og hva er E?]
Halvcellen med 0,0010 M er anoden: Cu oksideres og [Cu²⁺] øker mot utjevning. E = (0,0592/2)·log(1,0/0,0010) = 0,0296·3 = **0,089 V**.
:::

:::sjekk[Hvorfor blir membranpotensialet mindre negativt ved hyperkalemi?]
E_K ∝ log([K⁺]ute/[K⁺]inne). Når [K⁺]ute øker, blir forholdet mindre ulikt 1, og logaritmen mindre negativ. Hvilepotensialet, som domineres av K⁺-permeabiliteten, følger med, og cellene depolariseres.
:::

:::sjekk[Hvilket stoff er sterkest oksidasjonsmiddel: Ag⁺ (E° = +0,80 V) eller Cu²⁺ (E° = +0,34 V)?]
Ag⁺, fordi det har høyest reduksjonspotensial og størst tendens til å ta opp elektroner. Derfor oksiderer Ag⁺ Cu, og ikke omvendt.
:::
