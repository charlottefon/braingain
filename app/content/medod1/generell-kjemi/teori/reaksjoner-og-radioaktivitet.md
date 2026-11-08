---
title: Kjemiske reaksjoner, isotoper og radioaktiv halveringstid
summary: En kjemisk reaksjon er omlegging av bindinger (elektroner); en kjernereaksjon endrer atomkjernen. Reaksjonstyper er utfelling, syre–base og redoks. Isotoper har samme kjemi men ulik kjernestabilitet. Radioaktivt henfall følger N(t) = N₀(½)^(t/t½) og påvirkes ikke av temperatur, trykk eller katalysator.
order: 6
tags: [kjemiske reaksjoner, reaksjonstyper, kjernereaksjoner, isotoper, radioaktivitet, halveringstid, radiokarbondatering, 14C]
related:
  - generell-kjemi/teori/losninger-og-konsentrasjon
  - generell-kjemi/teori/atomer-og-elektroner
  - generell-kjemi/regnetyper/halveringstid
sources:
  - file: medod1/material/generell-kjemi/forelesning2-2026--7998527.pdf
    pages: "40-47"
  - file: medod1/info/formelhefte--7793986.pdf
  - file: medod1/exercises/hjemmearbeid-fra-forelesning-2--page-374126.html
  - file: medod1/material/generell-kjemi/generell-kjemi--7794006.pdf
  - file: medod1/exams/2022-medod1-h2022-med-svar--4750110.pdf
---

## Kjemiske reaksjoner

**En kjemisk reaksjon = omlegging av kjemiske bindinger (→ elektroner).** Dette regnes som kjent fra videregående, men forelesningen understreker at dere må kunne:
- **balansere reaksjonslikninger** (like mange atomer av hvert slag og lik total ladning på begge sider)
- **mengdeberegninger** (mol, masse, konsentrasjon – se [mol og konsentrasjon](/medod1/generell-kjemi/regnetyper/mol-og-konsentrasjon))
- **reaksjonstyper**

| Reaksjonstype | Hva skjer | Fører videre til |
|---|---|---|
| **Utfellingsreaksjon** | to løste ioner danner et tungtløselig salt, f.eks. $\ce{Ag+ + Cl- -> AgCl(s)}$ | [løselighet, Ksp](/medod1/generell-kjemi/teori/loselighet-og-komplekser) |
| **Syre–basereaksjon** | overføring av H⁺, f.eks. $\ce{HCl + NaOH -> NaCl + H2O}$ | [kjemisk likevekt](/medod1/generell-kjemi/teori/kjemisk-likevekt), [syrer og baser](/medod1/generell-kjemi/teori/syrer-baser-og-ph) |
| **Redoksreaksjon** | overføring av elektroner (endring av oksidasjonstall), f.eks. $\ce{Zn + Cu^2+ -> Zn^2+ + Cu}$ | [elektrokjemi](/medod1/generell-kjemi/teori/elektrokjemi) |

## Kjernereaksjoner

| | Kjemisk reaksjon | Kjernereaksjon |
|---|---|---|
| Hva endres | fordelingen av **valenselektroner** | **atomkjernen** (protoner/nøytroner) |
| Nytt grunnstoff? | aldri | ofte |
| Isotoper | **samme oppførsel** | ofte **ulik oppførsel** |
| Påvirkes hastigheten av temperatur, trykk, katalysator? | ja | **nei** |

### Isotoper

- **Isotoper** = atomer med **samme atomnummer** (antall protoner) men **ulikt massetall** (ulikt antall nøytroner).
- Hydrogen: protium ¹H, deuterium ²H og tritium ³H.
- De fleste naturlige grunnstoffer er blandinger av isotoper. Alle grunnstoffer har minst én radioaktiv isotop (**radioisotop**).

### Radiokarbondatering

- ¹⁴C dannes i øvre atmosfære, tas opp av planter ved fotosyntese og går inn i næringskjeden.
- I levende organismer er forholdet ¹⁴C : ¹²C som i atmosfæren, omtrent 1 : 10¹².
- Når organismen dør, stopper opptaket og ¹⁴C henfaller. Etter **5730 år** (én halveringstid) er forholdet halvert.
- Ved å måle gjenværende ¹⁴C kan man bestemme hvor lenge siden organismen døde.

## Radioaktiv halveringstid

Halveringstiden $t_{1/2}$ er tiden det tar før halvparten av stoffet har henfalt. Den er konstant for en gitt isotop, uavhengig av mengde og ytre forhold.

$$N(t) = N_0 \left(\tfrac12\right)^{t/t_{1/2}}$$

$N(t)$ = mengde ved tid $t$, $N_0$ = mengde ved start, $t$ = tid som har gått, $t_{1/2}$ = halveringstid (samme tidsenhet som $t$!). Formelen står i formelheftet.

:::eksempel[Hjemmeoppgave fra forelesning 2: ³²P, t½ = 14,3 døgn]
Andel igjen, med $N_0 = 100\ \%$:
- Etter 30 døgn: $100\% \cdot 0{,}5^{30/14{,}3} = 100\% \cdot 0{,}5^{2{,}10} \approx$ **23 %**
- Etter 360 døgn: $100\% \cdot 0{,}5^{360/14{,}3} = 0{,}5^{25{,}2} \approx$ **0,0000026 %** (i praksis borte)

Isotop med t½ = 6 år = 2190 døgn:
- Etter 30 døgn: $0{,}5^{30/2190} \approx$ **99 %**
- Etter 360 døgn: $0{,}5^{360/2190} \approx$ **89 %**

Poeng: kort halveringstid gir rask avklinging. Laboratorieisotoper som ³²P blir raskt ubrukelige (og avfallet ufarlig), mens isotoper med lang halveringstid gir varig stråling.
:::

:::eksamen
H2022: halveringstid 10 døgn; hvor lang tid fra 100 % til 12,5 %? 12,5 % = (½)³ → 3 halveringstider = **30 døgn**. Se trinn for trinn i [halveringstid](/medod1/generell-kjemi/regnetyper/halveringstid).
:::

:::feil
- Bruk samme tidsenhet for $t$ og $t_{1/2}$ (døgn mot døgn, år mot år).
- Etter to halveringstider er det **25 %** igjen, ikke 0 %.
- Oppvarming eller katalysator endrer **ikke** halveringstiden til en radioisotop.
:::

## Test deg selv

:::sjekk[Hvorfor oppfører ¹²C og ¹⁴C seg likt i kjemiske reaksjoner, men ulikt i kjernereaksjoner?]
Kjemien bestemmes av elektronene, og isotopene har samme antall protoner og dermed samme elektronkonfigurasjon. Kjernestabiliteten avhenger av antall nøytroner, som er forskjellig.
:::

:::sjekk[Hvor mye av en isotop er igjen etter 4 halveringstider?]
(½)⁴ = 1/16 = 6,25 %.
:::

:::sjekk[En prøve fra et bein har 25 % av den ¹⁴C-andelen levende organismer har. Hvor gammel er den?]
25 % = (½)², altså to halveringstider: 2 × 5730 = 11 460 år.
:::

:::sjekk[Nevn de tre reaksjonstypene fra forelesningen og hvilket tema hver leder til.]
Utfellingsreaksjoner → løselighet (Ksp). Syre–basereaksjoner → likevekt (Ka, pH). Redoksreaksjoner → elektrokjemi (reduksjonspotensial, Nernst).
:::
