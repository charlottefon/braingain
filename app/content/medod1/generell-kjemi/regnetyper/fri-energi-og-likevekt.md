---
title: ΔG° = −RT ln K og ΔG = ΔG° + RT ln Q
summary: Kobler fri energi til likevekt. ΔG° gir K (og omvendt), og ΔG ved aktuelle konsentrasjoner finnes fra ΔG° og reaksjonskvotienten Q. En reaksjon med ΔG° > 0 kan være spontan i cellen når Q er liten.
category: termo
order: 3
tags: [fri energi, likevektskonstant, reaksjonskvotient, glykolyse, ATP, kobling]
related:
  - generell-kjemi/teori/termodynamikk
  - generell-kjemi/teori/kjemisk-likevekt
  - generell-kjemi/regnetyper/gibbs-fri-energi
  - generell-kjemi/regnetyper/reaksjonskvotient
  - generell-kjemi/regnetyper/fri-energi-og-cellepotensial
  - proteiner/teori/enzymkatalyse
sources:
  - file: medod1/material/generell-kjemi/forelesning5-del1-2026--8063675.pdf
    pages: "18-25"
  - file: medod1/material/generell-kjemi/sporretime1-2026-v2--8130558.pdf
    pages: "22-24"
  - file: medod1/exercises/oppgavesett3-2026--8066331.pdf
  - file: medod1/exercises/oppgavesett3-2026-fasit--8081616.pdf
  - file: medod1/exercises/oppgavesett-4-fasit-2026--8204433.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
fields:
  Ved likevekt: ΔG = 0, Q = K, E = 0
  R: 8,314 J/(mol·K)
  ΔG° < 0: K > 1
  ΔG° > 0: K < 1
---

## Når brukes den

- Du kjenner **ΔG°** og skal finne **K**, eller omvendt.
- Du skal finne **ΔG under faktiske (ikke-standard) konsentrasjoner**, for eksempel i en celle, og avgjøre om reaksjonen da er spontan.
- Kvalitative spørsmål om sammenhengen mellom fortegnet på ΔG°, størrelsen på K og hva som gjelder ved likevekt.

## Formler

$$\Delta G = \Delta G^\circ + RT\ln Q$$

Ved likevekt er Q = K og ΔG = 0, og da får vi

$$\Delta G^\circ = -RT\ln K \qquad\Longleftrightarrow\qquad K = e^{-\Delta G^\circ/RT}$$

- R = 8,314 J/(mol·K). T i **Kelvin**.
- Under standardbetingelser (alle 1 M) er Q = 1 og ln Q = 0, slik at ΔG = ΔG°.

| ΔG° | K | Ved likevekt dominerer |
|---|---|---|
| < 0 | > 1 | produkter |
| = 0 | = 1 | – |
| > 0 | < 1 | reaktanter |

Hele kjeden, slik forelesningen oppsummerer: $\Delta G^\circ = -nFE^\circ = -RT\ln K$. Se [ΔG° = −nFE°](/medod1/generell-kjemi/regnetyper/fri-energi-og-cellepotensial).

:::husk
Verken ΔG° = −RT ln K eller ΔG = ΔG° + RT ln Q står i formelheftet, og fasiten til oppgavesett 4 sier at det ikke er pensum å *huske* sammenhengen mellom ΔG° og K. Det som må sitte er fortegnene: ΔG° < 0 ⇔ K > 1, og ΔG = 0 ⇔ Q = K. Får du formelen oppgitt, skal du kunne regne med den (oppgavesett 3, oppg. 11).
:::

**Kobling i biokjemi:** Når to reaksjoner legges sammen, **summeres ΔG°** og **K multipliseres**. En ugunstig reaksjon (ΔG° > 0) kan drives ved å koble den til ATP-hydrolyse:
- ATP → ADP + Pᵢ har ΔG° = −30,5 kJ/mol.
- ATP → AMP + PPᵢ har ΔG° = −45,6 kJ/mol.

## Fremgangsmåte

**K fra ΔG°:**
1. Gjør ΔG° om til **J/mol** og T om til **K**.
2. Regn ut eksponenten −ΔG°/(RT).
3. K = e^(eksponenten).

**ΔG ved gitte konsentrasjoner:**
1. Skriv Q = [produkter]/[reaktanter], med koeffisienter som eksponenter.
2. Bruk konsentrasjonene i M. I et forhold mellom like enheter (µM/µM) går enhetene ut.
3. Regn ut ΔG = ΔG° + RT ln Q, alt i J/mol.
4. Fortegnet på ΔG avgjør retningen *under disse forholdene*.

## Regneeksempel

:::eksempel[Oppgavesett 3, oppg. 11: G6P ⇌ F6P i glykolysen]
ΔG° = +1,7 kJ/mol.

**a)** ΔG° > 0, så reaksjonen er **ikke spontan under standardbetingelser**. Da er K < 1:

$$K = e^{-1700/(8{,}314 \cdot 310)} \approx 0{,}52$$

**b)** I cellen er [G6P] = 120 µM, [F6P] = 28 µM og T = 37 °C = 310 K.

$$Q = \frac{[\text{F6P}]}{[\text{G6P}]} = \frac{28}{120} = 0{,}233$$

$$\Delta G = 1700 + (8{,}314)(310)\ln\tfrac{28}{120} = 1700 + 2577 \cdot (-1{,}455) = 1700 - 3750 \approx -2050\ \text{J/mol}$$

ΔG ≈ **−2,05 kJ/mol < 0**, så reaksjonen **er spontan i cellen**. Den lave produktkonsentrasjonen (Q < K) trekker reaksjonen mot høyre.
:::

:::eksempel[K fra ΔG°: ΔG°′ = −5,7 kJ/mol ved 25 °C (H2025)]
$$K = e^{-(-5700)/(8{,}314 \cdot 298)} = e^{2{,}30} \approx 10$$

Svaret er **K′eq > 1**: produktene er favorisert.

En nyttig huskeregel ved 25 °C er at hver −5,7 kJ/mol i ΔG° tilsvarer en faktor 10 i K.

Samme metode for ATP-hydrolyse med ΔG° = −30,5 kJ/mol:

$$K = e^{30500/(8{,}314 \cdot 298)} = e^{12{,}3} \approx 2{,}2 \times 10^{5}$$
:::

:::eksempel[ΔG° fra K: en reaksjon med K = 1,0 × 10⁻³ ved 25 °C]
$$\Delta G^\circ = -RT\ln K = -(8{,}314)(298)\ln(1{,}0\times10^{-3}) = -(2477{,}6)(-6{,}91) \approx +17\,100\ \text{J/mol} = +17{,}1\ \text{kJ/mol}$$

K < 1 gir ΔG° > 0, som forventet.
:::

:::eksamen
Eksamen spør oftest **kvalitativt**:
- «Hvilket utsagn er ikke sant ved likevekt?» Riktig svar: K = 0. Det som gjelder ved likevekt er ΔG = 0, Q = K og E = 0 (V2026).
- Kc ≫ 1 gir ΔG° < 0 og E° > 0, men sier ingenting om hastigheten (oppgavesett 3, oppg. 6).
- Enzymer endrer verken ΔG eller K (V2025), se [enzymkatalyse](/medod1/proteiner/teori/enzymkatalyse).
- ΔG°′ < 0 gir K′eq > 1 (H2025).
:::

## Vanlige feil

:::feil
- **kJ i telleren og J i R.** ΔG° må være i J/mol når R = 8,314 J/(mol·K). Ellers blir eksponenten 1000 ganger for liten.
- **°C i stedet for K.** 37 °C = 310 K.
- **Fortegnsfeil i eksponenten.** K = e^(**−**ΔG°/RT). En negativ ΔG° skal gi K > 1.
- **ΔG og ΔG° forveksles.** ΔG° er en fast verdi for standardbetingelser. ΔG avhenger av de aktuelle konsentrasjonene. En reaksjon med ΔG° > 0 kan ha ΔG < 0 i cellen.
- **log og ln forveksles.** Formelen bruker naturlig logaritme (ln). Med log₁₀ må du gange med 2,303.
- **K = 0 ved likevekt.** Feil. Ved likevekt er ΔG = 0, mens K er en konstant som er større enn 0.
:::

## Test deg selv

:::sjekk[Hva er ΔG og forholdet mellom Q og K når en reaksjon er i likevekt?]
ΔG = 0 og Q = K. For en elektrokjemisk celle er da også E = 0 («tomt batteri»).
:::

:::sjekk[En reaksjon har ΔG° = +10 kJ/mol. Hvordan kan den likevel gå mot høyre i cellen?]
Hvis Q holdes lav, ved at produktet fjernes fortløpende eller reaktanten holdes høy, blir RT ln Q stor og negativ, og ΔG < 0. Alternativt kan reaksjonen kobles til en reaksjon med stor negativ ΔG°, for eksempel ATP-hydrolyse. Da summeres ΔG°-verdiene.
:::

:::sjekk[Hva blir K for en reaksjon med ΔG° = 0?]
K = e⁰ = 1.
:::

:::sjekk[Reaksjon 1 har K₁ = 0,01 og kobles til reaksjon 2 med K₂ = 10⁵. Hva er K for den koblede reaksjonen, og hva er fortegnet på ΔG°?]
K = K₁ · K₂ = 10³ > 1, så ΔG° < 0. Det svarer til at ΔG°-verdiene summeres.
:::
