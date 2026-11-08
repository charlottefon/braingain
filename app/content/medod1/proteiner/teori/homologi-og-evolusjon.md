---
title: Homologi og evolusjon av proteiner
summary: Ortologer og paraloger, divergent (homologe) vs konvergent (analoge) evolusjon, sekvenssammenstilling med gaps og BLOSUM-score, konservative substitusjoner, tommelfingerregler for homologi, og hvorfor struktur er mer konservert enn sekvens.
order: 5
tags: [homologi, ortolog, paralog, divergent evolusjon, konvergent evolusjon, BLAST, konservativ substitusjon, fylogeni]
related:
  - proteiner/teori/myoglobin-og-hemoglobin
  - proteiner/aminosyrer/lysin
  - proteiner/teori/enzymkatalyse
sources:
  - file: medod1/material/proteiner/proteiner-2-am-2026--8198447.pdf
    pages: "2-10"
  - file: medod1/exams/2020-medod1-h2020-med-svar--3792252.pdf
---

## Homologe proteiner

Proteiner med **felles evolusjonært opphav** kalles **homologer**. To klasser:

| | Ortologer | Paraloger |
|---|---|---|
| Hvor | Homologe proteiner i **ulike arter** | Homologe proteiner i **samme art** |
| Funksjon | **Samme** funksjon | **Ulike** funksjoner |
| Eksempel | Ribonuklease i ku og menneske | Humant ribonuklease og angiogenin; **humant myoglobin og hemoglobin** |

Paraloger oppstår ved genduplikasjon og divergerende evolusjon.

## Divergent og konvergent evolusjon

| | **Divergent evolusjon** | **Konvergent evolusjon** |
|---|---|---|
| Utgangspunkt | **Ett felles stamprotein** som dupliseres eller arves i ulike arter, og deretter endres | **Ulike, ubeslektede** proteiner som uavhengig «finner» samme løsning |
| Resultat | **Homologe** proteiner: lik 3D-struktur, ofte påvisbar sekvenslikhet, funksjon kan bli ulik | **Analoge** proteiner: lik funksjon eller lik kjemisk løsning (f.eks. samme aktivt sete), men **ulik fold og ingen sekvenslikhet** |
| Eksempler | **Myoglobin og hemoglobin** (stamglobin); **chymotrypsin, trypsin og elastase** (samme fold og triade, ulik spesifisitet) | **Chymotrypsin og subtilisin** (bakteriell protease): begge har Ser–His–Asp-triade og oksyanionhull, men helt ulik fold og ulik rekkefølge av triaderestene i sekvensen |

:::feil
Ulik **kvartærstruktur** sier ingenting om slektskap. Hb (tetramer) og Mb (monomer) er likevel homologe, beslektet ved **divergent** evolusjon – ikke konvergent – og har ~26 % sekvensidentitet og nesten lik tertiærstruktur (H2020, V2023).
:::

Eksemplene med proteaser er lærebokstoff; se [spesifisitetslommen](/medod1/proteiner/teori/enzymkatalyse).

## Sekvenssammenstilling

Homologi avgjøres ved **sekvenssammenstilling** og statistisk analyse med bioinformatikk (mest brukt: **BLAST**; struktursammenstilling: f.eks. PDBeFOLD).

- Man prøver mange forskyvninger og velger den med flest identiteter.
- **Gaps** tar høyde for at aminosyrer er satt inn/tatt ut under evolusjonen. Et gap gir minuspoeng, men kan likevel øke totalscore fordi flere identiteter kommer på linje.
- Eksempel: α-hemoglobin vs myoglobin: **38 av 147** identiske → **25,9 %** identitet (38 × 10 − 1 gap × 25 = 355 poeng). Sannsynligheten for at 26 % identitet er tilfeldig: ~1 i 10²⁰.

### Konservative substitusjoner

| | Eksempel | Score i BLOSUM-matrisen |
|---|---|---|
| **Konservativ** – til kjemisk lignende aminosyre | K → R (begge positive) | Høy |
| **Ikke-konservativ** – til kjemisk ulik | K → W (positiv → hydrofob) | Lav/negativ |

Konservative endringer gis høyere score fordi proteinet mer sannsynlig har tålt dem strukturelt og funksjonelt.

## Tommelfingerregler (proteiner > 100 aminosyrer)

- **> 25 % identitet** → svært sannsynlig homologi (Mb og Hb, 26 %: homologe paraloger).
- **< 15 %** → homologi usannsynlig, trolig tilfeldig.
- **15–25 %** → se på **3D-struktur** for å konkludere.

:::husk
**Struktur er mer konservert enn sekvens**, fordi funksjonelle krav begrenser strukturelle endringer. α-Hb, myoglobin og leghemoglobin har bare ~15 % sekvenslikhet, men ~50 % strukturlikhet.
:::

## Fylogeni

Fylogenetiske trær bygget på sekvenssammenstillinger viser evolusjonært slektskap (f.eks. ortologe myoglobiner hos menneske, hest, hval, skilpadde, tunfisk – endringene viser tilpasning til miljø). Globinfamilien: en felles stamglobin (~800 mill. år) delte seg i myoglobin (kromosom 22) og hemoglobin, som igjen delte seg i α-familien (kromosom 16: ζ, α) og β-familien (kromosom 11: ε, γ, δ, β).

**Paleoproteomikk:** svært stabile proteiner (kollagen i tenner/bein) kan overleve DNA – kollagen fra en 160 000 år gammel jeksel viste at kjeven tilhørte et denisovamenneske.

:::eksamen
Humant Hb og Mb er **paraloger** (V2023), beslektet ved **divergerende evolusjon** – selv om Hb er tetramer og Mb monomer (V2023). Høy sekvenslikhet → kan ha felles stamfar (V2025). «Sekvens bestemmer struktur, men struktur kan være bevart til tross for sekvensvariasjon» (V2025). 26 % sekvensidentitet + høy strukturlikhet → felles opphav (V2026). Konservative substitusjoner får høyere score fordi de oftere bevarer struktur og funksjon (H2025). Mb og Hb-subenheter: ganske lik tertiærstruktur, mindre lik primærstruktur (H2022).
:::

## Test deg selv

:::sjekk[Hva er forskjellen på ortologer og paraloger? Gi eksempler.]
Ortologer: homologer i ulike arter med samme funksjon (ribonuklease i ku og menneske). Paraloger: homologer i samme art med ulik funksjon (humant myoglobin og hemoglobin).
:::

:::sjekk[To proteiner på 200 aminosyrer har 18 % sekvensidentitet. Hva gjør du for å avgjøre om de er homologe?]
15–25 % er en gråsone; sammenlign 3D-strukturene. Høy strukturlikhet tyder på homologi, siden struktur er mer konservert enn sekvens.
:::

:::sjekk[Hvorfor kan et gap øke totalscoren i en sammenstilling?]
Gapet koster poeng, men kan bringe mange flere identiske rester på linje, slik at gevinsten fra identitetene blir større enn straffen.
:::

:::sjekk[Hvorfor er struktur mer konservert enn sekvens?]
Funksjonen avhenger av 3D-strukturen. Mange sekvensendringer (særlig konservative) kan tolereres uten å endre folden, mens endringer som ødelegger strukturen selekteres bort.
:::

:::sjekk[Hb er en tetramer og Mb en monomer. Er de beslektet ved divergent eller konvergent evolusjon?]
Divergent: de stammer fra et felles stamglobin (genduplikasjon) og er homologe paraloger med ~26 % sekvensidentitet og nesten lik tertiærstruktur. Ulik kvartærstruktur endrer ikke det.
:::

:::sjekk[Chymotrypsin og subtilisin har begge Ser–His–Asp-triade, men ulik fold. Hva viser det?]
Konvergent evolusjon: to ubeslektede (analoge) proteiner har uavhengig kommet fram til samme katalytiske løsning.
:::
