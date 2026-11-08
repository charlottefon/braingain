---
title: Ordstilling og struktur i uttrykk
summary: Et medisinsk uttrykk starter med et substantiv i nominativ. Etter det kommer kongruente attributter (adjektiv, partisipp, apposisjon), substantiv i genitiv med egne attributter, og eventuelt et preposisjonsuttrykk (ante/post/per/in + akk; cum/ex/ab/in/de + abl). Kapitlet viser hvordan du bygger og oversetter uttrykk steg for steg.
order: 10
tags: [ordstilling, uttrykk, preposisjoner, akkusativ, ablativ, oversettelse, struktur]
related:
  - nomenklatur/grammatikk/adnominal-genitiv
  - nomenklatur/grammatikk/endelsesoversikt
  - nomenklatur/uttrykk/status-gravis-post-commotionem-cerebri
  - nomenklatur/uttrykk/cancer-prostatae-cum-metastasibus-ossis-sacri-non-operatus
  - nomenklatur/uttrykk/fractura-simplex-colli-chirurgici-humeri-dextri
sources:
  - file: medod1/exercises/colloquium-quintum-et-ultimum--8208371.pdf
  - file: medod1/material/nomenklatur/forelesningsnotater-28-29-09--8165359.docx
  - file: medod1/exercises/colloquium-tertium--8135336.pdf
  - file: medod1/exercises/colloquium-quartum--8200050.pdf
  - file: medod1/info/forelesningsplan--page-374114.html
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
---

## Hovedregelen (kollokvium 5)

Et latinskspråklig medisinsk uttrykk skal **starte med et substantiv i nominativ** (entall eller flertall). Substantivet står enten alene eller etterfølges av:

1. **Attributivt tillegg** – adjektiv, presens partisipp, perfektum partisipp eller apposisjon. Det må **kongruere** i kjønn, tall og kasus med substantivet.
2. **Nytt substantiv i genitiv** (eiendom, relasjon, tilhørighet). Det kan ha **sine egne** attributive tillegg, som da kongruerer med substantivet i genitiv.
3. Eventuelt et **preposisjonsuttrykk** for tid, retning, ledsagende omstendighet, sted eller retning fra.
4. En **kombinasjon** av disse.

```
SUBSTANTIV(nom)  [attributt(nom)]  [SUBSTANTIV(gen) [attributt(gen)]] …  [preposisjon + akk/abl …]  [attributt(nom) til hovedordet]
fractura         simplex            colli chirurgici  humeri dextri
status           gravis                                                  post commotionem cerebri
cancer                              prostatae                            cum metastasibus ossis sacri    non operatus
```

:::husk
- **Nominativ først.** Et adjektiv eller partisipp kan aldri starte et uttrykk.
- **Attributter står etter** sitt substantiv.
- **Genitiv står etter** det den eier. Attributtene til genitiven står i genitiv.
- Hvert adjektiv kongruerer med **sitt eget** substantiv. Finn ut hvem det hører til ved å se på kjønn, tall og kasus.
:::

## Preposisjoner

| Preposisjon | Kasus | Betydning | Eksempel |
|---|---|---|---|
| *ante* | akk | før (tid) | *status ante **partum*** = tilstand før fødselen |
| *post* | akk | etter (tid) | *post **mortem***; *status gravis post **commotionem** cerebri* |
| *per* | akk | gjennom; per | *per **os*** = gjennom munnen; *per **diem***; *per **capita*** |
| *in* | **akk** ved retning («inn i») | | |
| *in* | **abl** ved sted («i, på») | | *in **vitro***, *in **vivo***, *cancer in **situ*** |
| *cum* | abl | med (ledsagende omstendighet) | *cum **metastasibus***; *cum **laude*** |
| *ex / e* | abl | ut av, fra | *ex **ore***; *cancer ex **origine incerta*** |
| *ab* | abl | (bort) fra | |
| *de* | abl | om, vedrørende | *sigillum communitatis de **civitate bergensi*** |

Kortregel: **retning til/mot/gjennom og tid (før/etter) → akkusativ**. **Retning fra, ut av, sammen med og plassering → ablativ.**

## Bygg et uttrykk – fremgangsmåte

1. Finn **hovedordet** (det det handler om: brudd, svulst, muskel, tilstand). Det skal stå i **nominativ**.
2. Slå opp hvert ord i ordlisten og noter **gen sg, deklinasjon og kjønn**.
3. Sett **adjektiv/partisipp** til hovedordet i riktig kjønn og i nominativ.
4. Legg til **eierne i genitiv** i rekkefølge, slik at hvert nytt ledd eier det forrige. Bøy attributtene deres i genitiv og i *deres* kjønn.
5. Preposisjonsuttrykk: velg **akk eller abl** etter preposisjonen.
6. Kontroller kongruensen for hvert par.

:::eksempel[Oversett «brudd på venstre lårhals» (h2023, h2024; variant h2025, v2025)]
1. Hovedord: brudd = *fractura, ae, 1f* → ***fractura*** (nom sg)
2. Lårhals = lårets hals: *collum, i, 2n* eier brudd → gen ***colli***
3. Lår = *femur, femoris, 3n* eier halsen → gen ***femoris***
4. Venstre hører til låret (n, gen sg): *sinister, 1+2* → ***sinistri***

→ ***fractura colli femoris sinistri***, ordrett «det venstre lårets hals sitt brudd».
:::

:::eksempel[Oversett «operert ondartet svulst i bukhulen» (h2024, v2026)]
- svulst = *tumor, oris, **3m*** → *tumor* (nom)
- ondartet → *malignus* (nom sg m, kongruerer med *tumor*)
- bukhulen = *abdomen, minis, 3n* → gen ***abdominis***
- operert → *operatus* (nom sg **m**, hører til *tumor*, selv om det står sist)

→ ***tumor malignus abdominis operatus***
:::

:::eksempel[Analyser «cancer prostatae cum metastasibus ossis sacri non operatus»]
| Ord | Form | Hører til |
|---|---|---|
| cancer | nom sg m | hovedord |
| prostatae | gen sg (1m) | eier *cancer* |
| cum | prep. + abl | |
| metastasibus | abl pl (3f) | styrt av *cum* |
| ossis | gen sg (3n) | eier *metastasibus* |
| sacri | gen sg n | kongruerer med *ossis* (os sacrum = korsbeinet) |
| non operatus | nom sg m | kongruerer med *cancer* |

= ikke operert prostatakreft med spredninger til korsbeinet.
:::

## Oversette fra latin

- Begynn med **hovedordet** (nominativ). Les så genitivkjeden **bakfra**: *ramus anterior nervi spinalis* → «spinalnervens fremre gren».
- Bruk kasusendelsene, ikke ordrekkefølgen alene, til å avgjøre hvem et adjektiv hører til: I *tumor malignus abdominis operatus* er *operatus* nom sg m og hører derfor til *tumor*, ikke til *abdominis*.
- Et adjektiv kan stå før eller etter en genitiv (**parallelluttrykk**): *arteria cerebri posterior* = *arteria posterior cerebri*.

:::feil
- **«cancer origo incerta»** er feil. To substantiv i nominativ etter hverandre er ikke lov (med unntak av apposisjon). Det må enten være genitiv (*cancer **originis incertae*** = kreft av ukjent opphav) eller et preposisjonsuttrykk (*cancer **ex origine incerta*** = kreft fra ukjent opphav).
- Ikke la et adjektiv «arve» kasus fra nabo-ordet. I *fractura colli femoris sinistri* må *sinistri* stå i genitiv **fordi det hører til *femoris***, ikke fordi det står sist.
:::

## Grunnleggende krav (læringsmål)

1. Riktig **kasus** for hver funksjon: nominativ for hovedordet, genitiv for eier, akk/abl etter preposisjon.
2. **Kongruens** mellom hvert attributt og sitt substantiv.
3. **Ordrekkefølge**: substantiv → attributt → genitiv → preposisjonsuttrykk.
4. Riktig **deklinasjon og stamme** for hvert ord, ut fra ordlisten.

:::eksamen
«Oversett til latin» er med hvert år (med nedtrekksmenyer eller ordbrikker). Uttrykkene går igjen nesten ordrett:
- *fractura colli femoris sinistri* (h2023, h2024), *fractura colli femoris dextri* (h2025), *collum femoris sinistri* (v2025)
- *status gravis post commotionem cerebri* (h2023, v2025)
- *tumor malignus abdominis operatus* (h2024, v2026)
- *ulcus diabeticum cruris sinistri* (v2024, v2026)
- *fractura ossis pisiformis* (v2026)
- *status ante partum*, *musculus colli longus* (h2025)
- *ramus posterior nervi spinalis* (h2023)
- *arteria cerebri anterior*, *fractura simplex humeri dextri*, *contusio ossis temporalis* (v2025)

I kollokvium 5 er kortsvarsspørsmålet: «Redegjør kort for hovedreglene for oppbygning av medisinske og anatomiske uttrykk.»
:::

## Test deg selv

:::sjekk[Redegjør kort for hovedreglene for oppbygning av et medisinsk uttrykk.]
Uttrykket starter med et substantiv i nominativ. Etter det kan det komme (1) kongruente attributter (adjektiv, partisipp, apposisjon), (2) substantiv i genitiv med egne attributter i genitiv, (3) et preposisjonsuttrykk (ante/post + akk, in + akk/abl, cum/ex/ab + abl), eller (4) en kombinasjon av disse.
:::

:::sjekk[Oversett til latin: «alvorlig tilstand etter hjernerystelse».]
*status gravis post commotionem cerebri*. *Status* (4m, nom) og *gravis* (nom sg m) kommer først. *Post* styrer akkusativ, så det blir *commotionem* (*commotio, ionis, 3f*). Til slutt *cerebri* (gen sg av *cerebrum*).
:::

:::sjekk[Hvorfor står *operatus* i nominativ i *tumor malignus abdominis operatus*?]
Fordi det attribuerer hovedordet *tumor* (nom sg m), ikke *abdominis*. Hvis det hørte til *abdomen* (3n), måtte det ha vært *operati* (gen sg n).
:::

:::sjekk[Hvilken kasus styrer *cum*, *post* og *ex*?]
*cum* → ablativ, *post* → akkusativ, *ex* → ablativ.
:::

:::sjekk[Oversett *thrombosis arteriae cerebri posterioris*.]
Blodpropp i hjernens bakre arterie. Ordrett: «hjernens bakre arteries blodpropp». *Posterioris* er gen sg f og hører til *arteriae*.
:::
