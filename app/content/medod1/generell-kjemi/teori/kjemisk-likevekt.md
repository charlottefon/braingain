---
title: Kjemisk likevekt – K, Q og Le Châteliers prinsipp
summary: Ved likevekt går forover- og bakoverreaksjonen like fort, og konsentrasjonene er konstante. Likevektskonstanten K (massevirkningsloven) forteller hvor langt reaksjonen går. Når en reaksjon snus, ganges med n eller summeres, gir det 1/K, Kⁿ og K₁·K₂. Q sammenlignet med K gir retningen, og Le Châtelier forutsier hvordan likevekten forskyves.
order: 7
tags: [likevekt, likevektskonstant, massevirkningsloven, Kc, Kp, reaksjonskvotient, Q, Le Châtelier, heterogen likevekt]
related:
  - generell-kjemi/regnetyper/likevektskonstant-fra-konsentrasjoner
  - generell-kjemi/regnetyper/kombinere-likevektskonstanter
  - generell-kjemi/regnetyper/reaksjonskvotient
  - generell-kjemi/teori/syre-base-likevekter
  - generell-kjemi/teori/termodynamikk
  - proteiner/teori/enzymkatalyse
  - proteiner/teori/myoglobin-og-hemoglobin
sources:
  - file: medod1/material/generell-kjemi/forelesning2-2026--7998527.pdf
    pages: "48-61"
  - file: medod1/material/generell-kjemi/forelesning3-del0-2025--7794114.pdf
  - file: medod1/material/generell-kjemi/forelesning3-del1-3-2026--8030911.pdf
    pages: "1-9"
  - file: medod1/material/generell-kjemi/forelesning5-del1-2026--8063675.pdf
    pages: "20"
  - file: medod1/info/formelhefte--7793986.pdf
  - file: medod1/exercises/hjemmearbeid-fra-forelesning-3--page-374127.html
  - file: medod1/exercises/oppgavesett-4-fasit-2026--8204433.pdf
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
  - file: medod1/exams/2024-medod1-ny-v2024-med-svar--5897534.pdf
---

## Likevektsbegrepet

Kjemisk likevekt er det mest sentrale temaet i generell kjemi i Celle1. Alt som kommer senere (syrer/baser, buffere, løselighet, komplekser, ΔG° og E°) er bare **spesialtilfeller av samme likevektsuttrykk**.

- Når et system nærmer seg likevekt, skjer **både forover- og bakoverreaksjonen samtidig**.
- **Ved likevekt går forover- og bakoverreaksjonen like fort.** Det er en *dynamisk* likevekt: reaksjonene stopper ikke, men nettoendringen er null.
- Ved likevekt er mengden av hver reaktant og hvert produkt **konstant**. Det betyr ikke at de er *like store*.

Hastighetene kobles til K slik: for en ett-trinns reaksjon $aA + bB \rightleftharpoons cC + dD$ er hastigheten forover $k_1[A]^a[B]^b$ og bakover $k_{-1}[C]^c[D]^d$. Ved likevekt er de like, og det gir

$$\frac{k_1}{k_{-1}} = \frac{[C]^c[D]^d}{[A]^a[B]^b} = K$$

(gjelder strengt tatt bare ett-trinns mekanismer).

## Likevektsuttrykket (massevirkningsloven)

For den generelle reaksjonen $aA + bB \rightleftharpoons cC + dD$:

$$K_c = \frac{[C]^c\,[D]^d}{[A]^a\,[B]^b}$$

Produkter står over brøkstreken og reaktanter under. Hver konsentrasjon opphøyes i **koeffisienten fra den balanserte likningen**.

For gasser kan man bruke partialtrykk: $K_p = \dfrac{(P_C)^c(P_D)^d}{(P_A)^a(P_B)^b}$, og $K_p = K_c(RT)^{\Delta n}$ (Δn = mol gass produkter − mol gass reaktanter).

### Hva tas med i K?

K regnes med **relative konsentrasjoner** og er derfor benevningsløs (i biokjemi oppgis likevel ofte enheter, f.eks. $K_d$ i µM):

| Komponent | Hva settes inn |
|---|---|
| Oppløst stoff | konsentrasjon i forhold til 1 M (0,1 M → 0,1) |
| Rene faste stoffer og rene væsker | **tas ikke med** (relativ konsentrasjon = 1) |
| Løsemiddelet i en tynn løsning (også vann) | **tas ikke med** (= 1) |
| Gass | partialtrykk i forhold til 1 atm |

Likevekter der komponentene er i ulike faser (fast stoff + løsning, gass + væske) kalles **heterogene likevekter**. Eksempler er løselighet av salter ($K_{sp}$, se [løselighet og komplekser](/medod1/generell-kjemi/teori/loselighet-og-komplekser)) og CO₂ i blod ([karbonsyre](/medod1/generell-kjemi/teori/karbonsyre-og-blodets-ph)).

:::husk
Samme prinsipp gir alle de «spesielle» konstantene i formelheftet. De har bare egne navn:

| Konstant | Reaksjon |
|---|---|
| $K_a$ | svak syre + vann |
| $K_b$ | svak base + vann |
| $K_w$ | vannets egendissosiasjon |
| $K_{sp}$ | oppløsning av tungtløselig salt |
| $K_f$ | kompleksdannelse (dannelseskonstant) |
| $K_d$ | dissosiasjon av kompleks, f.eks. protein–ligand |
:::

:::eksamen
Matching av konstant og reaksjonstype (V2026): $K_w$ hører til vannets egendissosiering, $K_{sp}$ til løselighet, $K_b$ til basereaksjon og $K_f$ til kompleksdannelse.
:::

## Størrelsen på K

| K | Betydning |
|---|---|
| $K \gg 1$ | reaksjonen favoriserer **produkter**; produktene dominerer ved likevekt |
| $K \approx 1$ | betydelige mengder av både reaktanter og produkter |
| $K \ll 1$ | reaksjonen favoriserer **reaktanter** |

K sier ingenting om **hvor fort** likevekten nås. Hastigheten bestemmes av aktiveringsenergien, og en katalysator eller et enzym endrer **ikke** K (se [termodynamikk](/medod1/generell-kjemi/teori/termodynamikk) og [enzymkatalyse](/medod1/proteiner/teori/enzymkatalyse)).

Med K kan man forutsi reaksjonens retning (via Q), beregne konsentrasjoner ved likevekt og vurdere biologisk relevans.

## Tre regler for å manipulere K

| Operasjon | Ny konstant | Eksempel fra forelesningen |
|---|---|---|
| **Snu** reaksjonen | $K_{ny} = 1/K$ | $\ce{N2O4 <=> 2NO2}$, $K_c = 0{,}212$; $\ce{2NO2 <=> N2O4}$: $1/0{,}212 = 4{,}72$ |
| **Multipliser** med faktor n | $K_{ny} = K^n$ | $\ce{2N2O4 <=> 4NO2}$: $K = 0{,}212^2 = 0{,}0449$ |
| **Summer** reaksjoner (flere trinn) | $K = K_1 \cdot K_2 \cdot K_3 \cdots$ | metabolsk vei A → B → C → D: $K = K_1K_2K_3$ |

Reglene kan kombineres: å snu og doble gir $1/K^2$. Typiske anvendelser:

- $K$ for $\ce{A- + H3O+ <=> HA + H2O}$ er $1/K_a$ (snudd syrereaksjon).
- $K$ for $\ce{A- + H2O <=> HA + OH-}$ er $K_w/K_a = K_b$ (snudd syrereaksjon + vannets egendissosiasjon).
- $\ce{HA + B- <=> A- + HB}$ har $K = K_a(HA)/K_a(HB)$ (oppgavesett 2 oppg. 10: $1{,}2\cdot10^{-6}/4{,}0\cdot10^{-4} = 3{,}0\cdot10^{-3}$).
- Løselighet med kompleksdannelse: $K = K_{sp}\cdot K_f$.

Utregninger finner du i [kombinere likevektskonstanter](/medod1/generell-kjemi/regnetyper/kombinere-likevektskonstanter).

:::eksamen
Dette kommer på **hver eneste eksamen**, ofte to ganger:
- K for omvendt og doblet reaksjon er $1/K^2$. Med K = 4 blir det $(1/4)^2 = 0{,}063$ (H2024); med K = 5 blir det 0,04 (H2023).
- A + B ⇌ C ($K_c$ = 0,5) og 2C ⇌ D + E ($K_c$ = 100) gir for 2A + 2B ⇌ D + E: $0{,}5^2\cdot100 = 25$ (H2022, H2025).
- $K_1 = 2\cdot10^3$ og $K_2 = 100$ gir $2\cdot10^5$ (V2023).
- Metabolsk vei A ⇌ B ⇌ C ⇌ D: $K_1\cdot K_2\cdot K_3$, ikke summen (V2026).
:::

:::feil
Konstantene **multipliseres**, de adderes ikke. «2/K» og «−K» er feil svar på «snu og doble».
:::

## Beregning av K fra konsentrasjoner

Sett likevektskonsentrasjonene inn i uttrykket. Er bare startkonsentrasjoner og én likevektskonsentrasjon gitt, lager man en **tabell (start – endring – likevekt)** ut fra støkiometrien.

:::eksempel[Forelesning 3 del 0: Kc for H₂ + I₂ ⇌ 2 HI ved 448 °C]
Start: [H₂] = 1,000·10⁻³ M, [I₂] = 2,000·10⁻³ M, [HI] = 0. Ved likevekt er [HI] = 1,87·10⁻³ M.

| | H₂ | I₂ | 2 HI |
|---|---|---|---|
| Start | 1,000·10⁻³ | 2,000·10⁻³ | 0 |
| Endring | −x | −x | +2x |
| Likevekt | 1,000·10⁻³ − x | 2,000·10⁻³ − x | 2x = 1,87·10⁻³ |

x = 0,935·10⁻³, så [H₂] = 0,065·10⁻³ M og [I₂] = 1,065·10⁻³ M.

$$K_c = \frac{(1{,}87\cdot10^{-3})^2}{(0{,}065\cdot10^{-3})(1{,}065\cdot10^{-3})} = \frac{3{,}50\cdot10^{-6}}{6{,}92\cdot10^{-8}} \approx 51$$
:::

:::eksempel[Eksamen V2026/V2025/V2024: Kc for 2A + B ⇌ 2C + D]
[A] = 0,02, [B] = 0,01, [C] = 0,1, [D] = 0,05 M.

$$K_c = \frac{(0{,}1)^2(0{,}05)}{(0{,}02)^2(0{,}01)} = \frac{5\cdot10^{-4}}{4\cdot10^{-6}} = 125$$
:::

Flere eksempler: [likevektskonstant fra konsentrasjoner](/medod1/generell-kjemi/regnetyper/likevektskonstant-fra-konsentrasjoner).

## Reaksjonskvotienten Q

Q har **samme uttrykk som K**, men bruker de **nåværende** konsentrasjonene (f.eks. startkonsentrasjoner), ikke likevektskonsentrasjonene. Reaksjonen går alltid slik at **Q nærmer seg K**:

| Sammenligning | Reaksjonen går … |
|---|---|
| $Q = K$ | er ved likevekt |
| $Q < K$ | mot **høyre** (mer produkt dannes) |
| $Q > K$ | mot **venstre** (mer reaktant dannes) |

Det samme gjelder for løselighet: $Q > K_{sp}$ betyr overmettet løsning, og salt felles ut (oppgavesett 3 oppg. 18).

:::eksempel[Eksamen H2023: A + B ⇌ C, Kc = 3,6]
[A] = 2,3, [B] = 4,0, [C] = 6,5 M. $Q = \dfrac{6{,}5}{2{,}3\cdot4{,}0} = 0{,}71 < 3{,}6$. Systemet er ikke ved likevekt, og **mer C dannes**.
:::

:::feil
«Hvis Q > K, går reaksjonen mot mer produkter» er feil. Det har vært brukt som «hvilket utsagn er ikke riktig» på flere eksamener (V2023, V2024, H2021). Ved Q > K er det for mye produkt, og reaksjonen går mot **venstre**.
:::

Utregning: [reaksjonskvotient](/medod1/generell-kjemi/regnetyper/reaksjonskvotient).

## Le Châteliers prinsipp

> «Når en utøver stress på en reaksjon ved likevekt, vil likevekten forskyves i den retning som opphever dette stresset.»

| Endring | Likevekten forskyves | Kommentar |
|---|---|---|
| Tilsette reaktant | mot høyre | noe av det tilsatte brukes opp; [produkter] øker |
| Tilsette produkt | mot venstre | det dannes mer reaktant |
| Fjerne produkt (f.eks. forbrukes i neste trinn) | mot høyre | mindre A og B igjen; drivkraft i metabolske veier |
| Fjerne reaktant | mot venstre | |
| Økt trykk (gass) | mot siden med færrest mol gass | |
| Temperatur | endotermt: høyere T gir mer produkt | **T er den eneste faktoren som endrer verdien av K** |
| Katalysator/enzym | ingen forskyvning | likevekten nås bare raskere |
| Tilsette rent fast stoff (til mettet løsning) | ingen | fast stoff inngår ikke i K |

Biologiske eksempler fra kurset:
- O₂ i lunger og blod: $\ce{O2(lunger) <=> O2(blod)}$ (Henrys lov), deretter $\ce{Hb + 4O2 <=> Hb(O2)4}$, og i vevet går likevekten motsatt vei (se [myoglobin og hemoglobin](/medod1/proteiner/teori/myoglobin-og-hemoglobin)).
- CO₂-systemet ved hyperventilering, se [karbonsyre og blodets pH](/medod1/generell-kjemi/teori/karbonsyre-og-blodets-ph).
- Løselighet øker når et produkt fjernes: syre fjerner basiske anioner, og ligander binder metallionet. Se [løselighet og komplekser](/medod1/generell-kjemi/teori/loselighet-og-komplekser).

:::eksempel[Hjemmearbeid F3: A + 2B ⇌ C + 2D, Kc = 288,2; tilsetter 1 mol C]
Q blir større enn K, og likevekten forskyves mot **venstre**: noe C (og D) reagerer tilbake til A og B til Q = K igjen. **K er uendret** (288,2), fordi bare temperaturen endrer K.
:::

:::eksamen
- «C/D forbrukes kontinuerlig i en metabolsk vei» betyr at likevekten forskyves mot høyre, og det blir mindre A og B (H2024, V2025).
- «Tilsetter mer B» betyr at [D] øker (H2023).
- AgCl(s) + 2NH₃ ⇌ Ag(NH₃)₂⁺ + Cl⁻ med HNO₃ tilsatt: H⁺ binder NH₃ som NH₄⁺, og likevekten forskyves mot venstre (H2023, H2024, H2025).
:::

## Hva gjelder ved likevekt?

| Størrelse | Ved likevekt |
|---|---|
| Hastighet forover vs. bakover | like |
| Q | = K |
| ΔG | = 0 |
| E (cellepotensial) | = 0 V («tomt batteri») |
| K | **har en bestemt verdi, aldri 0** |

Sammenhengen $\Delta G^\circ = -RT\ln K = -nFE^\circ$ behandles i [termodynamikk](/medod1/generell-kjemi/teori/termodynamikk) og [elektrokjemi](/medod1/generell-kjemi/teori/elektrokjemi).

:::eksamen
«Hvilket utsagn er ikke sant ved likevekt?» Alternativene er ΔG = 0, K = Q, K = 0 og E = 0 V. Riktig svar er **K = 0** (V2026).
:::

## Test deg selv

:::sjekk[Hvorfor tas ikke vann og faste stoffer med i likevektsuttrykket?]
Konstantene regnes med relative konsentrasjoner (aktiviteter). For et rent fast stoff, en ren væske eller løsemiddelet i en tynn løsning er denne lik 1, og de faller derfor ut av uttrykket. Derfor er f.eks. $K_{sp} = [Ag^+][Cl^-]$ uten [AgCl(s)].
:::

:::sjekk[Reaksjonen A + B ⇌ C + D har K. Hva er K for 3C + 3D ⇌ 3A + 3B?]
Å snu gir 1/K, og å gange med 3 opphøyer i tredje. Svaret er $1/K^3$ (V2024).
:::

:::sjekk[Et enzym tilsettes en reaksjon ved likevekt. Hva skjer med K og med likevektskonsentrasjonene?]
Ingenting. Enzymet senker aktiveringsenergien like mye for begge retninger og øker begge hastighetene. Likevekten nås raskere, men K og konsentrasjonene ved likevekt er uendret.
:::

:::sjekk[Ved et øyeblikk er Q = 10 for en reaksjon med K = 0,5. Hvilken vei går reaksjonen, og hva skjer med Q?]
Q > K: det er for mye produkt. Reaksjonen går mot venstre, og Q synker til den blir 0,5.
:::

:::sjekk[Hvorfor er det galt å si at «ved likevekt er konsentrasjonene av reaktanter og produkter like»?]
Likevekt betyr at konsentrasjonene er **konstante**, fordi forover- og bakoverhastigheten er like. Forholdet mellom dem er gitt av K, og ved K ≫ 1 dominerer produktene.
:::
