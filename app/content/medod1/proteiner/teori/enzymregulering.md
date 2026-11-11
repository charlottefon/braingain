---
title: Hemming og regulering av enzymer
summary: Reversibel hemming (kompetitiv, unkompetitiv, mikset/nonkompetitiv; Ki og Ki′) og irreversibel hemming (DFP, suicidale inhibitorer som penicillin) med kliniske eksempler (atorvastatin, metotreksat, metanol/etanol, fomepizol, klavulansyre, HIV-proteasehemmere, kinasehemmere); de fire prinsippene for regulering – allosteri, reversibel kovalent modifisering, proteolytisk aktivering og enzymmengde – og isoenzymer (LDH).
order: 10
tags: [hemming, irreversibel hemming, suicidal inhibitor, selvmordshemmer, mikset hemming, nonkompetitiv, unkompetitiv, Ki, allosteri, kooperativitet, feedback, fosforylering, zymogen, isoenzym, metotreksat, atorvastatin, penicillin, peptidoglykan, kinasehemmer, laktatdehydrogenase]
related:
  - proteiner/teori/enzymkatalyse
  - proteiner/teori/myoglobin-og-hemoglobin
  - proteiner/teori/enzymer-egenskaper
  - proteiner/aminosyrer/serin
  - lab/ovelser/enzymkinetikk-adh
  - organisk-kjemi/reaksjoner/oksidasjon-av-alkoholer
sources:
  - file: medod1/material/proteiner/enzym-2026-2--8223063.pdf
    pages: "18-33"
  - file: medod1/material/proteiner/intro-forelesning--7794102.pdf
    pages: "11-19"
  - file: medod1/material/proteiner/proteiner-og-enzymer-asynkrone-videoer--page-374217.html
  - file: medod1/exercises/kollokvieoppgaver-enzymologi-og-enzym-2025--7794057.pdf
    pages: "4-5"
  - file: medod1/exams/2024-sensorveiledning-medod1-ny-v2024--5897568.docx
  - file: medod1/exams/2024-medod1-ny-v2024-med-svar--5897534.pdf
  - file: medod1/exams/2022-medod1-h2022-med-svar--4750110.pdf
  - file: medod1/exams/2020-medod1-h2020-med-svar--3792252.pdf
  - file: medod1/exams/2020-medod1-ny-v2020-med-svar--2347516.pdf
  - file: medod1/exams/2019-medod1-ny-v2019-med-svar--2098874.pdf
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
---

Kapitlet følger andre halvdel av forelesningen *Enzymer 2* (Aurora Martinez; Miesfeld & McEvoy kap. 6B). Kinetikken (Km/Vmax, Lineweaver–Burk, regneeksempler) står samlet på siden [Enzymkinetikk og hemming](/medod1/proteiner/enzymkinetikk).

## Hvorfor hemming og regulering?

Hemming er viktig for **reguleringen av enzymer**, og **mange medikamenter virker ved å hemme et enzym**. Forelesningens eksempel: **atorvastatin** hemmer **HMG-CoA-reduktase** (3-hydroksy-3-metylglutaryl-CoA-reduktase) og reduserer produksjonen av kolesterol. Forståelse av hemming forklarer også forgiftninger og genetiske sykdommer.

Hemming kan være:

- **reversibel** (vanligst): hemmeren kan dissosiere fra enzymet
- **irreversibel**: hemmeren bindes permanent (kovalent eller svært tett) og blokkerer enzymreaksjonen

## Reversibel hemming

Forelesningen bruker begrepene **kompetitiv**, **unkompetitiv** og **mikset** hemming, og **nonkompetitiv** som et spesialtilfelle av mikset. På eksamen og i andre kapitler her står også «ukompetitiv» og «ikke-kompetitiv» – det er det samme.

| Type | Binder til | Km | Vmax | Opphevet av høy [S]? |
|---|---|---|---|---|
| **Kompetitiv** | Fritt E, i aktivt sete (ikke ES) | ↑ | uendret | **Ja** |
| **Unkompetitiv** | Bare ES, vanligvis nær aktivt sete | ↓ | ↓ | Nei |
| **Mikset** | Både E og ES | ↑, ↓ eller uendret | ↓ | Nei |
| **Nonkompetitiv** (mikset med Ki = Ki′) | E og ES like godt | uendret | ↓ | Nei |

### Ki og Ki′ – nøkkelen til mikset hemming

- **Ki** er likevektskonstanten for hemmerens binding til **fritt E**. Lavere Ki = sterkere binding til E.
- **Ki′** er likevektskonstanten for hemmerens binding til **ES**. Lavere Ki′ = sterkere binding til ES.
- Ved **mikset hemming** synker Vmax alltid. Km kan **øke, minke eller være uendret**, avhengig av hemmerens relative affinitet for E og ES: binder den helst E (Ki < Ki′), øker Km; binder den helst ES (Ki′ < Ki), minker Km.
- Når **Ki = Ki′** binder hemmeren E og ES like godt: Km er uendret, bare Vmax synker. Det er **(ren) nonkompetitiv hemming**, som er den varianten tabellen i forelesningen viser.

Detaljer, grafer og regneeksempler: [Enzymkinetikk og hemming](/medod1/proteiner/enzymkinetikk).

### Kompetitiv hemming

Hemmeren (I) binder **E, men ikke ES** – i aktivt sete, i konkurranse med substratet. **Km øker, Vmax påvirkes ikke**, og hemmingen **kan motvirkes ved å øke [S]**. Kompetitive hemmere ligner som regel substratet eller [transisjonstilstanden](/medod1/proteiner/teori/enzymkatalyse) (transisjonstilstandsanaloger er ofte effektive kompetitive hemmere).

### Unkompetitiv hemming – den som ofte glemmes

- Hemmeren binder **bare ES-komplekset**, vanligvis nær det aktive setet (et sete som først dannes når substratet er bundet), ikke fritt E.
- **Både Km og Vmax synker**, med samme faktor → forholdet Km/Vmax er uendret → **parallelle linjer** i Lineweaver–Burk.
- Km synker fordi hemmeren «trekker» ES ut av likevekten E + S ⇌ ES (Le Chateliers prinsipp), slik at det *ser ut* som om enzymet binder substratet sterkere.
- **Høy [S] hjelper ikke** – mer substrat gir mer ES, altså mer bindingssted for hemmeren.

:::feil
- «Ikke-kompetitiv hemmer binder **kun** ES» er feil – det er definisjonen på **ukompetitiv**. En ren ikke-kompetitiv hemmer binder E og ES like godt (H2020).
- «Både ikke-kompetitiv og ukompetitiv hemming endrer Km» er feil – ren ikke-kompetitiv endrer bare Vmax. Riktig: **kompetitiv og ukompetitiv** endrer Km (↑ og ↓) (H2020).
- En ikke-kompetitiv hemmer binder et annet sete og trenger **ikke** ligne substratet (H2020). En kompetitiv hemmer ligner som regel substratet eller transisjonstilstanden.
:::

### Kliniske eksempler på kompetitiv hemming

- **Metanolforgiftning:** metanol → ([alkoholdehydrogenase, ADH](/medod1/lab/ovelser/enzymkinetikk-adh); [oksidasjon av alkoholer](/medod1/organisk-kjemi/reaksjoner/oksidasjon-av-alkoholer)) → formaldehyd → (aldehyddehydrogenase, ALDH) → maursyre (toksisk; blindhet, acidose). Behandling med **etanol** (introforelesningen): etanol er substrat for de samme enzymene og konkurrerer, slik at dannelsen av toksiske metabolitter bremses og metanol skilles ut uomdannet.
- **Fomepizol** er en **kompetitiv hemmer av ADH**: binder aktivt sete når substrat ikke er bundet.
- **HIV-proteasehemmere** binder **aktivt sete** i viral protease → forløperproteiner kløyves ikke → ingen modne viruspartikler.
- **Acetazolamid** hemmer karbonsyreanhydrase (brukes bl.a. ved glaukom).
- **Metotreksat (MTX)** er forelesningens eksempel på **kompetitiv hemming**. MTX hemmer **dihydrofolatreduktase (DHFR)**, et enzym i biosyntesen av nukleotider. MTX **ligner både dihydrofolat (substratet) og tetrahydrofolat (produktet)** og binder DHFR med **høyere affinitet enn disse**. Dermed hemmes syntesen av DNA og RNA, og MTX brukes **mot kreft** (celler som deler seg raskt, rammes mest). I lave doser brukes det også ved revmatoid artritt (lærebokstoff).

:::eksempel[Metotreksat og DHFR (H2020)]
DHFR-aktivitet måles med ulike [MTX] og [dihydrofolat]. Siden hemmingen er kompetitiv:
- Ved **lik [MTX]** er aktiviteten **lavere med 10 µM enn med 100 µM dihydrofolat** – mer substrat utkonkurrerer hemmeren.
- Ved **lik [dihydrofolat]** gir **mer MTX lavere aktivitet**.
:::

:::eksamen
ADH/metanol-klyngen går igjen. Fasiten (H2022, V2024) formulerer etanolens effekt på trinnet formaldehyd → formiat som at **acetaldehyd** (fra etanol) konkurrerer med **formaldehyd** om **ALDH**. Fomepizol: «binder bare til aktivt sete i ADH når substrat ikke er bundet» (V2024). H2023-fasiten markerte «binder et annet sete enn det aktive setet», som strider mot «kompetitiv» – trolig feil fasit. HIV-proteasehemmere binder aktivt sete i proteasen (H2024). Reversibel hemmer kan dissosiere, irreversibel binder permanent (V2025).
:::

## Irreversibel hemming

Hemmeren **binder kovalent** til enzymet eller **endrer strukturen permanent** på annen måte; aktiviteten kommer bare tilbake ved nysyntese. Høy [S] hjelper ikke. Kinetisk ser det ut som en reduksjon i mengden aktivt enzym (Vmax ↓).

- **DFP** (diisopropylfluorfosfat, også skrevet DIPF) hemmer enzymer med **reaktivt serin**: serinproteaser (Ser195 i [chymotrypsin](/medod1/proteiner/teori/enzymkatalyse)) og **acetylkolinesterase (AChE)** – samme mekanisme som nervegasser.

### Suicidale inhibitorer (selvmordshemmere)

Ved suicidal hemming **deltar enzymet selv i å lage den irreversible modifikasjonen**:

1. Hemmeren binder i aktivt sete, og **katalysen starter** som om den var et substrat.
2. Katalysen setter i gang en **irreversibel modifikasjon** av viktige rester (eller av kofaktorer).
3. Enzymet **klarer ikke å fullføre reaksjonen**, og hemmeren blir sittende **irreversibelt bundet**.

### Penicillin – det klassiske eksempelet

Penicillin (Alexander Fleming; fra soppen *Penicillium chrysogenum*; Nobelprisen 1945) var det første antibiotikumet og er en **suicidal inhibitor**.

- Bakteriecelleveggen er forsterket av et **peptidoglykanlag**: polysakkaridkjeder som er **kryssbundet** av **tetrapeptider** (med variert aminosyresekvens) og **pentaglysinbroer**. Tetrapeptidene inneholder **D-aminosyrer** (klassisk struktur hos *Staphylococcus aureus*).
- Det siste trinnet, kryssbindingen mellom tetrapeptidene og pentaglysin, katalyseres av **glykopeptid-transpeptidase**.
- **Penicillin ligner transisjonstilstanden til R-D-Ala-D-Ala** i transpeptidasereaksjonen. Enzymet starter katalysen, den reaktive peptidbindingen i **β-laktamringen** åpnes, og penicillin blir permanent kovalent bundet til aktivt sete. Celleveggen kryssbindes ikke, og bakterien dør.

Videre:

- **Klavulansyre** binder irreversibelt til aktivt sete i bakterielle **β-laktamaser** (enzymer som inaktiverer penicilliner) → gis sammen med amoksicillin for å sikre effekten mot resistente bakterier.

```smiles-row
CC1([C@@H](N2[C@H](S1)[C@@H](C2=O)NC(=O)Cc3ccccc3)C(=O)O)C | Penicillin G (β-laktamring)
C1[C@@H]2N(C1=O)[C@H](/C(=C/CO)/O2)C(=O)O | Klavulansyre
```

## Fire prinsipper for regulering av enzymaktivitet

I tillegg til hemming viser Enzymer 2 fire prinsipper (les lærebokas s. 374–382):

| Prinsipp | Kjennetegn | Reversibel? |
|---|---|---|
| **1. Allosteri** | Flere bindingsseter; kooperativitet; homotrop og heterotrop regulering; feedback-hemming. **Følger ikke MM-kinetikk** (sigmoide kurver) | Ja |
| **2. Reversibel kovalent modifisering** | Post-translasjonell modifisering av enzymet, f.eks. **fosforylering med kinaser** og defosforylering med **fosfataser**; viktig i signaloverføring | Ja |
| **3. Proteolytisk aktivering** | Begrenset proteolyse av en inaktiv forløper | **Nei** |
| **4. Regulering av enzymmengde** | **Genekspresjon** (transkripsjon og translasjon) | – (langsom) |

## Allosteri og kooperativitet

**Allosteriske enzymer** (gresk *allos* «annet», *stereos* «område») har **flere bindingsseter**. De reguleres av molekyler (**effektorer**) som binder et **annet sete enn det aktive setet** og endrer konformasjonen.

- **Homotrop regulering:** effektoren er substratet selv (substratbinding i én subenhet påvirker de andre). **Heterotrop regulering:** effektoren er et annet molekyl enn substratet (lærebokdefinisjon).
- Er som regel **multimere** (ofte tetramere) – har kvartærstruktur.
- Viser **sigmoid** v₀–[S]-kurve i stedet for Michaelis–Menten-hyperbel → **positiv kooperativitet**: substratbinding til én subenhet øker affiniteten i de andre (samme prinsipp som O₂ i [hemoglobin](/medod1/proteiner/teori/myoglobin-og-hemoglobin)).
- **Aktivatorer** forskyver kurven mot venstre (mer aktivt R), **inhibitorer** mot høyre (stabiliserer T).
- Sitter typisk ved det **forpliktende (committed), hastighetsbestemmende trinnet** i en metabolsk vei (H2024).
- **Feedback-hemming:** sluttproduktet i en vei hemmer et allosterisk enzym tidlig i veien (f.eks. CTP hemmer aspartattranskarbamoylase), slik at produksjonen stanser når det er nok.

:::eksempel[Sensorveiledning V2024 (langsvar 4 + 2 + 2 p): sigmoid kurve]
1. *Mekanisme:* allosterisk regulering. Flere subenheter binder substrat; binding til den første har lavere affinitet enn de neste (kooperativitet).
2. *Fordel framfor Michaelis–Menten:* lav aktivitet ved lav [S] (substratet kan brukes i andre veier), men **stor økning i aktivitet ved liten økning i [S]** i det bratte området → enzymet kan holde [S] på et bestemt nivå og hindre toksiske nivåer. Svaret må beskrive denne følsomheten for [S].
3. *Kvartærstruktur:* klassiske allosteriske enzymer er multimere (ofte tetramere); kvartærstruktur = hvordan subenhetene er satt sammen.
:::

## Kovalent modifikasjon

- **Fosforylering** av Ser, Thr eller Tyr med **kinaser** (fosfat fra ATP), fjernes av **fosfataser** → **reversibel** av/på-bryter for enzymaktivitet.
- Andre: acetylering, metylering m.m.

### Kinasehemmere som legemidler

Kinaser er sentrale i signalveier for vekst og deling; overaktive kinaser driver mange kreftformer. **Kinasehemmere** blokkerer den katalytiske aktiviteten, de fleste ved å konkurrere med **ATP** om bindingsstedet (f.eks. imatinib mot BCR-ABL-kinasen ved kronisk myelogen leukemi; lærebokstoff).

:::husk
**Molekylær konsekvens av en kinasehemmer: mindre fosforylering av kinasens substratproteiner** → signalet nedstrøms slås av. Hemmeren påvirker ikke translasjonen av kinasen, gir ikke mer proteolyse, og poenget er ikke at kinasen selv blir mindre fosforylert (V2019).
:::

## Proteolytisk aktivering (zymogener)

Mange enzymer lages som inaktive forløpere, **zymogener (proenzymer)**, som aktiveres ved at en eller flere peptidbindinger kløyves:

- Fordøyelsesenzymer: **trypsinogen → trypsin** (av enteropeptidase i tarmen), chymotrypsinogen → chymotrypsin (av trypsin), pepsinogen → pepsin (syre). Hindrer at bukspyttkjertelen fordøyer seg selv.
- Koagulasjonskaskaden (protrombin → trombin).

:::husk
Proteolytisk aktivering er **irreversibel** – peptidbindingen kan ikke settes sammen igjen. Allosteri, feedback og fosforylering er reversible (H2022).
:::

## Isoenzymer

**Ulike former av samme enzym** (ulike gener/aminosyresekvens) som katalyserer **samme reaksjon**, men med **ulik Km og Vmax** og ulik regulering. De fordeles på ulike vev, cellerom eller utviklingsstadier → finjustering av metabolismen. Kan skilles og måles diagnostisk.

**Laktatdehydrogenase (LDH)** er standardeksempelet (lærebokstoff): $\ce{pyruvat + NADH + H+ <=> laktat + NAD+}$. LDH er en tetramer av to typer subenheter, **H** (hjerte) og **M** (muskel), som kan kombineres til **fem isoenzymer** (H₄, H₃M, H₂M₂, HM₃, M₄).

| | H₄ (hjerte) | M₄ (skjelettmuskel, lever) |
|---|---|---|
| Tilpasning | Aerob: laktat → pyruvat, som forbrennes | Anaerob glykolyse: pyruvat → laktat, slik at NAD⁺ regenereres |
| Egenskap | Høyere substrataffinitet; hemmes allosterisk av høy [pyruvat] | Lavere affinitet; hemmes ikke av pyruvat – fungerer godt ved anaerob glykolyse |

Vevsskade (f.eks. hjerteinfarkt) lekker vevsspesifikke isoenzymer ut i blodet; mønsteret viser hvilket organ som er skadet.

**Kreatinkinase (CK/CPK)** er en **dimer** av subenhetene **M** og **B** → **tre** isoenzymer: CK-MM (skjelettmuskel), CK-MB (hjerte) og CK-BB (hjerne) (H2018).

:::husk
Telleregel: med to typer subenheter gir en **dimer 3** isoenzymer (MM, MB, BB) og en **tetramer 5** (som LDH) – antall subenheter + 1.
:::

:::feil
Isoenzymer har **ikke** samme Km og Vmax – hele poenget er ulike kinetiske egenskaper (H2024). Isoformer av samme enzym kan ha ulike katalytiske parametre (H2020).
:::

:::eksamen
Isoenzymer: fordelen er **finjustering av metabolismen i ulike vev og utviklingsstadier** (H2024); «ulike former av samme enzym med ulik Vmax/Km, fordelt på vev eller cellerom» (V2025). Penicillin hemmer peptidoglykansyntesen (V2024) som **selvmordshemmer**: enzymet starter katalysen og blir permanent modifisert (V2025, V2026). Sigmoid kurve = allosterisk og kooperativt enzym (H2023, H2025); allosteriske enzymer kan vise positiv kooperativitet (V2024).
:::

## Andre måter å regulere aktivitet

- Mengde enzym (genuttrykk, nedbrytning) – dobbel enzymmengde gir dobbel Vmax.
- Substrat- og produktkonsentrasjon.
- Lokalisering (cellerom).

:::husk
**Momentlisten fra Enzymer 2** (hemming og regulering): reversibel hemming (kompetitiv, unkompetitiv, mikset; nonkompetitiv) · irreversibel hemming (suicidale inhibitorer) · transisjonstilstandsanaloger (katalytiske antistoffer og inhibitorer) · enzymregulering i tillegg til hemmere (allosteri, reversibel kovalent modifisering, proteolytisk aktivering, regulering av enzymmengde). Katalysedelen av momentlisten står i [Enzymkatalyse](/medod1/proteiner/teori/enzymkatalyse).
:::

## Test deg selv

:::sjekk[Hvorfor kan en kompetitiv hemmer overvinnes av høy [S], men ikke en ikke-kompetitiv?]
Kompetitiv hemmer og substrat konkurrerer om samme sete; nok substrat fortrenger hemmeren. En ikke-kompetitiv hemmer binder et annet sete og inaktiverer en andel av enzymet uansett hvor mye substrat som er til stede.
:::

:::sjekk[Forklar hvorfor penicillin kalles en selvmordshemmer.]
Transpeptidasen gjenkjenner penicillin som substrat og starter katalysen; β-laktamringen åpnes, og penicillin blir kovalent og permanent bundet til aktivt sete. Enzymet «begår selvmord» ved å utføre sin egen reaksjon.
:::

:::sjekk[Hvilken biologisk fordel gir sigmoid (kooperativ) kinetikk?]
Enzymet går fra lav til høy aktivitet over et smalt [S]-område. Det gir en følsom av/på-respons som holder substratkonsentrasjonen stabil, og gjør enzymet egnet for regulering ved et forpliktende trinn.
:::

:::sjekk[Hvilken av disse er irreversibel: allosterisk regulering, feedback-hemming, fosforylering, proteolytisk aktivering?]
Proteolytisk aktivering (zymogen → aktivt enzym ved kløyving av peptidbindinger).
:::

:::sjekk[Hva er isoenzymer, og hvorfor er de nyttige?]
Ulike proteinformer som katalyserer samme reaksjon med ulike kinetiske egenskaper (Km, Vmax) og regulering. De lar ulike vev/utviklingsstadier tilpasse metabolismen.
:::

:::sjekk[Hvorfor gis amoksicillin sammen med klavulansyre?]
Resistente bakterier har β-laktamaser som bryter ned amoksicillin. Klavulansyre hemmer β-laktamasen irreversibelt, slik at amoksicillin får virke.
:::

:::sjekk[En ukompetitiv hemmer tilsettes. Hva skjer med Km, Vmax og stigningen i Lineweaver–Burk, og hjelper det å øke [S]?]
Km og Vmax synker med samme faktor, så stigningen Km/Vmax er uendret (parallelle linjer). Økt [S] hjelper ikke – hemmeren binder bare ES, og mer substrat gir mer ES.
:::

:::sjekk[Hva er den molekylære konsekvensen av et legemiddel som hemmer kinase A?]
Kinase A fosforylerer sine substratproteiner mindre, så signalet nedstrøms svekkes. Mengden kinase A (translasjon) påvirkes ikke.
:::

:::sjekk[Er metotreksat en reversibel eller irreversibel hemmer, og hvordan overvinnes hemmingen?]
Reversibel og kompetitiv: MTX ligner både dihydrofolat og tetrahydrofolat og binder aktivt sete i DHFR med høyere affinitet enn dem, uten kovalent binding. Høy konsentrasjon av substratet (dihydrofolat) kan utkonkurrere den. Penicillin og DFP er derimot irreversible.
:::

:::sjekk[En hemmer binder både E og ES, men sterkest til E (Ki < Ki′). Hva skjer med Km og Vmax? Hva om Ki = Ki′?]
Det er mikset hemming: Vmax synker alltid, og Km øker fordi hemmeren helst binder fritt E. Med Ki = Ki′ binder den E og ES like godt (nonkompetitiv hemming): Km er uendret, bare Vmax synker.
:::

:::sjekk[Hva er peptidoglykanlaget, og hvilket trinn blokkerer penicillin?]
Peptidoglykan er polysakkaridkjeder i bakteriecelleveggen, kryssbundet av tetrapeptider (med D-aminosyrer) og pentaglysinbroer. Penicillin ligner transisjonstilstanden til R-D-Ala-D-Ala og blokkerer glykopeptid-transpeptidasen, som katalyserer det siste trinnet, kryssbindingen.
:::

:::sjekk[Nevn de fire prinsippene for regulering av enzymaktivitet (i tillegg til hemming). Hvilket er irreversibelt?]
Allosteri, reversibel kovalent modifisering (f.eks. fosforylering), proteolytisk aktivering og regulering av enzymmengde (genekspresjon). Proteolytisk aktivering er irreversibel.
:::
