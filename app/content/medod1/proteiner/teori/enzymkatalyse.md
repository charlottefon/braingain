---
title: Enzymkatalyse – termodynamikk, transisjonstilstand og aktivt sete
summary: ΔG, K'eq og spontanitet; enzymer senker aktiveringsenergien ved å stabilisere transisjonstilstanden uten å endre ΔG eller likevekten; Arrhenius og temperaturavhengighet; ES-kompleks, aktivt sete, induced fit, transisjonstilstandsanaloger; chymotrypsins mekanisme, S1-lommen (chymotrypsin/trypsin/elastase) og cystein-, metallo- og aspartatproteaser.
order: 9
tags: [aktiveringsenergi, transisjonstilstand, ΔG, likevektskonstant, aktivt sete, induced fit, chymotrypsin, katalytisk triade, Arrhenius, trypsin, elastase, cysteinprotease, metalloprotease, spesifisitetslomme]
related:
  - proteiner/teori/enzymer-egenskaper
  - proteiner/teori/enzymregulering
  - proteiner/teori/homologi-og-evolusjon
  - proteiner/aminosyrer/cystein
  - proteiner/aminosyrer/serin
  - proteiner/aminosyrer/histidin
  - proteiner/aminosyrer/aspartat
  - generell-kjemi/teori/termodynamikk
  - generell-kjemi/regnetyper/fri-energi-og-likevekt
  - lab/ovelser/enzymkinetikk-adh
sources:
  - file: medod1/material/proteiner/enzym-2026-1--8215494.pdf
    pages: "12-22, 31"
  - file: medod1/material/proteiner/proteiner-og-enzymer-asynkrone-videoer--page-374217.html
  - file: medod1/exams/2026-sensorveiledning-langsvar-medod1-ny-v2026--7644058.docx
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2016-medod1-h2016-med-svar--1419947.pdf
  - file: medod1/exams/2017-medod1-ny-v2017-med-svar--862603.pdf
  - file: medod1/exams/2021-medod1-h2021-med-svar--3944361.pdf
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
---

## Termodynamikk: ΔG sier om, ikke hvor fort

Grunnlaget står i [Termodynamikk](/medod1/generell-kjemi/teori/termodynamikk) og [ΔG° = −RT ln K](/medod1/generell-kjemi/regnetyper/fri-energi-og-likevekt).

$$\Delta G = \Delta H - T\Delta S$$

- **ΔG < 0 → spontan** (eksergonisk). H = entalpi (varme), S = entropi (uorden), G = fri energi.
- ΔG er **uavhengig av reaksjonsvei** – avhenger bare av G for produkter og reaktanter (substrater).
- ΔG avhenger av konsentrasjonene: $\Delta G = \Delta G^{\circ\prime} + RT \ln\frac{[C][D]}{[A][B]}$
- Ved likevekt er ΔG = 0, så $\Delta G^{\circ\prime} = -RT\ln K'_{eq}$ (standard: 1 M, pH 7, 25 °C).

| K'eq | ΔG°' | |
|---|---|---|
| > 1 | < 0 | Spontan under standardbetingelser |
| = 1 | 0 | |
| < 1 | > 0 | Ikke spontan |

:::feil
**ΔG forteller ingenting om hastigheten.** En spontan reaksjon kan være ekstremt langsom (f.eks. hydrolyse av peptidbindinger).
:::

## Aktiveringsenergi og transisjonstilstand

- **Transisjonstilstanden (‡, overgangstilstanden)**: høyenergi-tilstand med delvis dannede/brutte bindinger og ingen målbar levetid.
- **Aktiveringsenergien** (ΔG‡ = Ea) er energien som må tilføres for å nå ‡. Høyere Ea → langsommere reaksjon.

:::husk
**Enzymer senker aktiveringsenergien ved å fasilitere dannelse og stabilisering av transisjonstilstanden.** De endrer **ikke ΔG**, **ikke K'eq** og **ikke konsentrasjonene ved likevekt** – de får bare likevekten raskere (kinetisk, ikke termodynamisk effekt). Samme enzym katalyserer derfor både fram- og tilbakereaksjonen.
:::

**Arrhenius:** $k = A\, e^{-E_a/RT}$, dvs. $\ln k = \ln A - \frac{E_a}{R}\cdot\frac{1}{T}$. Plott ln k mot 1/T → rett linje med stigning −Ea/R ⇒ **Ea = −stigning × R** (brukes i [enzymlaben](/medod1/lab/ovelser/enzymkinetikk-adh)).

### Temperaturavhengighet avslører Ea

Fra to temperaturer: $\ln\frac{k_2}{k_1} = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$. **Jo høyere Ea, desto brattere Arrhenius-linje** – altså desto mer øker hastigheten når T øker. En reaksjon med nesten ingen barriere går omtrent like fort ved alle temperaturer.

:::eksempel[Dobling fra 25 til 37 °C – hvor stor er Ea?]
$E_a = \frac{R\ln 2}{\frac{1}{298\ \text{K}} - \frac{1}{310\ \text{K}}} = \frac{8{,}314 \cdot 0{,}693}{1{,}30\cdot 10^{-4}}\ \text{J/mol} \approx$ **44 kJ/mol**.
Et enzym der hastigheten er nesten lik ved 25 og 37 °C, har en mye lavere barriere (mindre forskjell i fri energi mellom substrat og transisjonstilstand).
:::

:::feil
H2021 (oppgave 58): enzym 1 dobler hastigheten fra 25 til 37 °C, enzym 2 er nesten uendret. Begge katalyserer samme reaksjon, så ΔG (substrat → produkt) er lik – svaret handler om ΔG‡. Den offisielle fasiten sier at enzym 1 har **mindre** forskjell mellom substrat og transisjonstilstand. Etter Arrhenius er det motsatt: **sterk temperaturavhengighet = høy Ea**, så enzym 1 har **større** ΔG‡. Forstå fysikken. Dukker oppgaven opp igjen med samme formulering, vet du hva den gamle fasiten sa.
:::

Temperatureffekten gjelder bare så lenge enzymet er stabilt. Over temperaturoptimum faller aktiviteten fordi enzymet denatureres (se [Enzymer – egenskaper](/medod1/proteiner/teori/enzymer-egenskaper)).

## Enzym–substrat-komplekset og det aktive setet

For katalyse må det dannes et **ES-kompleks**. Substratet bindes i det **aktive setet**:

1. **Tredimensjonalt** – involverer rester som kan ligge langt fra hverandre i sekvensen (lysozym: rest 35, 52, 62, 63, 101, 108).
2. **Liten del av proteinet** – få aminosyrerester, selv om de fleste enzymer er > 12 kDa.
3. Ligger i **kløfter eller lommer** på overflaten; vanligvis upolart (vann utelukkes hvis det ikke deltar), men kan ha ladde grupper.
4. Substratet bindes av **mange svake interaksjoner**, særlig H-bindinger.
5. **Spesifisitet**: komplementær form og kjemi → **nærhet og orientering**.

### Modeller for binding

- **Lås og nøkkel** (Fischer 1890): aktivt sete er ferdig formet.
- **Induced fit** (Koshland 1958) – den foretrukne: **enzymet endrer form når substratet binder**, slik at tilpasningen blir optimal.

### Hvordan enzymet senker Ea

1. **Orienterer substratet** riktig i aktivt sete (nærhet og orientering).
2. **Fasiliterer og stabiliserer transisjonstilstanden**: mange svake interaksjoner optimaliseres i ‡. Bindingen gir **tap av entropi** (substratet låses), men dette kompenseres av en **større reduksjon i entalpi**. Lysbildet sier også at **«strekk og vridning i S motvirkes av bindingen i ES-komplekset»**.
3. Det aktive setet er **mest komplementært til transisjonstilstanden** (ikke til substratet eller produktet).

## Transisjonstilstandsanaloger

**Stabile molekyler som ligner transisjonstilstanden** og derfor binder **ekstra sterkt** i aktivt sete (eksempel: 6-hydroksy-1,6-dihydropurin-ribonukleosid for adenosindeaminase).

Bruk (sensorveiledning V2026, langsvar 3 p):

- **Potente (reversible, kompetitive) enzymhemmere / legemidler** – Paulings idé.
- **Katalytiske antistoffer (abzymer)**: immunisering med en transisjonstilstandsanalog gir antistoffer som kan katalysere reaksjonen.

## Eksempel: chymotrypsin (serinprotease)

:::husk
Chymotrypsin hører til forelesningen *Enzymer 2*, som ikke ligger i kursmaterialet. Framstillingen bygger på eksamensoppgavene (som spør om triaden, oksyanionhullet, S1-lommen og «ingen metallioner») og standard lærebokstoff.
:::

Chymotrypsin **hydrolyserer peptidbindinger** (på karboksylsiden av store hydrofobe/aromatiske rester).

- **Katalytisk triade: Ser195 – His57 – Asp102.** His57 virker som generell base og tar H⁺ fra Ser195; Asp102 stabiliserer det protonerte His. Ser-O⁻ blir en sterk nukleofil som angriper karbonyl-C i peptidbindingen.
- Det dannes et **tetraedrisk intermediat** (ligner transisjonstilstanden) med negativ ladning på O (oksyanion).
- **Oksyanionhullet**: N–H-grupper i hovedkjeden H-binder og **stabiliserer oksyanionet** i det tetraedriske intermediatet.
- Første produkt (aminodelen) går ut → **acyl-enzym**; vann hydrolyserer acyl-enzymet → andre produkt, fritt enzym.
- **S1-lommen (spesifisitetslommen)** bestemmer hvilken peptidbinding som kløyves (se tabellen under).
- **Ingen metallioner** er involvert.
- **DIPF** reagerer kovalent med Ser195 → irreversibel hemming (identifiserer det reaktive serinet).

### Spesifisitetslommen: chymotrypsin, trypsin og elastase

De tre fordøyelsesproteasene har **samme katalytiske triade og samme fold** (homologe, se [divergent evolusjon](/medod1/proteiner/teori/homologi-og-evolusjon)). Forskjellen i spesifisitet sitter i noen få rester som kler S1-lommen:

| Protease | Rest i bunnen av / langs lommen | Lommen | Kløyver etter (karboksylsiden av) |
|---|---|---|---|
| **Chymotrypsin** | **Ser189** (uladet), Gly216/Gly226 | Dyp og **hydrofob** | Store hydrofobe/aromatiske: **Phe, Tyr, Trp** (Leu, Met) |
| **Trypsin** | **Asp189** (negativ) | Dyp, negativ ladning i bunnen | Positivt ladde: **Lys, Arg** (saltbro til Asp189) |
| **Elastase** | Val216 og Thr226 (store rester) stenger lommen | **Grunn** | Små, nøytrale: **Ala, Gly**, Ser, Val |

Regel for mutantoppgaver: **lommen foretrekker sidekjeder som er komplementære i størrelse og ladning.** Negativ rest i bunnen (Asp/Glu) → positivt ladde substratrester; positiv rest (Lys/Arg) → Asp/Glu; hydrofob rest (Val) → hydrofobe substratrester; store rester som fyller lommen → bare små sidekjeder passer.

## Andre proteaseklasser

Alle proteaser må løse samme problem: peptidbindingen er svært stabil (resonans), så karbonyl-C må angripes av en **aktivert nukleofil**, og det negativt ladde **tetraedriske intermediatet** må stabiliseres. Klassene skiller seg i *hvilken* nukleofil de bruker:

| Klasse | Nukleofil og aktivering | Kovalent acyl-enzym? | Eksempler |
|---|---|---|---|
| **Serinproteaser** | Ser-OH, aktivert av His (+ Asp) i **katalytisk triade** | **Ja** (ester) | Chymotrypsin, trypsin, elastase, trombin |
| **Cysteinproteaser** | Cys-SH, aktivert av His (Cys–His-par) → **tiolat (S⁻)** | **Ja** (tioester) | Papain, kaspaser, katepsiner |
| **Metalloproteaser** | **Vann**, aktivert av **Zn²⁺** | **Nei** | Karboksypeptidase A, termolysin, matriksmetalloproteinaser (MMP) |
| **Aspartatproteaser** | **Vann**, aktivert av to Asp | **Nei** | Pepsin, renin, [HIV-protease](/medod1/proteiner/teori/enzymregulering) |

Felles for alle: **katalyserer kløyving av en peptidbinding** og går via en **tetraedrisk transisjonstilstand/intermediat**.

### Cysteinproteaser

1. **His** virker som generell base og tar H⁺ fra Cys-SH → **tiolat (Cys-S⁻)**, en sterk nukleofil. His **aktiverer** altså cysteinet (felle: «Cys deaktiveres av His»).
2. Tiolatet angriper karbonyl-C → tetraedrisk intermediat.
3. Aminodelen går ut → **kovalent tioester (acyl-enzym)**.
4. Vann, aktivert av His, hydrolyserer tioesteren → karboksylsyre-produktet frigjøres og enzymet er regenerert.

Mekanismen er altså den samme som for serinproteaser, med S i stedet for O. Det aktive setet er tilpasset den mer sure og mer nukleofile tiolen. **Muteres Cys til Ser, blir enzymet i praksis inaktivt** – serinet er ikke nukleofilt nok uten en fullstendig triade som aktiverer det. Det blir ikke en serinprotease med samme aktivitet.

### Metalloproteaser (sinkproteaser)

- **Zn²⁺** (bundet til His-rester og Glu i aktivt sete) binder og **polariserer et vannmolekyl**, slik at det mister et proton og blir en sterk nukleofil (OH⁻-lignende). En Glu-rest fungerer som generell base.
- Det aktiverte vannet angriper karbonyl-C **direkte** → tetraedrisk intermediat. Zn²⁺ stabiliserer det negativt ladde oksyanionet.
- Intermediatet faller fra hverandre til to produkter. **Enzymet danner aldri et kovalent intermediat med substratet** – det er den viktigste forskjellen fra serin- og cysteinproteaser.

:::klinikk
**Matriksmetalloproteinaser (MMP)** er sinkavhengige proteaser som bryter ned kollagen og annen ekstracellulær matriks. De er aktive ved periodontitt (vevsnedbrytning) og i dentin, der de kan bryte ned kollagenet i hybridlaget under kompositt­fyllinger.
:::

:::husk
Delen om proteaseklasser og spesifisitetslommer er lærebokstoff (forelesningen *Enzymer 2* mangler i kursmaterialet), men eksamen V2017 og H2016 spurte direkte om cystein- og metalloproteaser og om S1-lommen.
:::

:::eksamen
Hvert år: «Enzymer øker hastigheten ved å **senke Ea / stabilisere transisjonstilstanden**» – feller: «endrer ΔG», «endrer K'eq», «øker Ea», «gir mer produkt ved likevekt». «ΔG°' = −5,7 kJ/mol → K'eq > 1» (H2025). «Hva er IKKE del av chymotrypsins mekanisme?» → metallioner (H2025). «Hva stabiliserer det tetraedriske intermediatet?» → H-bindinger i **oksyanionhullet** (V2026, H2022). Transisjonstilstandsanalog = kan utvikles til effektive reversible hemmere (H2025) – langsvar i V2026. Tredje medlem i triaden med Ser og His = **Asp** (V2025). Chymotrypsin **hydrolyserer peptidbindinger** (H2023). Protease som hemmes av DIPF men kløyver etter Asp/Glu → **positive** rester i S1-lommen (H2023). Induced fit = enzymet endrer form etter at substratet binder (H2024). ΔG sier om reaksjonen er spontan (V2026).

Proteaser (eldre sett, men samme type figur-/mutantoppgaver): «Hvilken påstand om cysteinproteasen er **feil**?» → «Cysteinet blir deaktivert av histidin» (H2016). Cys → Ser i en cysteinprotease → enzymet blir mest sannsynlig **inaktivt** fordi triaden en serinprotease trenger, mangler (V2017). «Hvilken påstand om metalloproteasen er **feil**?» → «Enzymet danner et kovalent intermediat med substratet» (V2017). Chymotrypsin Ser189 → **Val**: foretrekker **hydrofobe** rester (H2016). Ser189 → **Asp**: foretrekker **positivt ladde** rester, som trypsin (V2017). Karbonsyreanhydrase hydrerer ~**10⁶ CO₂ per sekund** per enzymmolekyl (H2024; se [kcat-tabellen](/medod1/proteiner/enzymkinetikk)).

V2025 spurte hvordan bindingen i ES-komplekset påvirker strekk og vridning i substratet; fasiten var **«motvirker»**, som på lysbilde 18. Mange lærebøker beskriver det motsatte (binding forvrenger substratet mot ‡), men på eksamen gjelder lysbildets formulering.
:::

## Test deg selv

:::sjekk[En reaksjon har ΔG°' = −20 kJ/mol, men går nesten ikke uten enzym. Hvordan er det mulig?]
ΔG sier bare at reaksjonen er termodynamisk gunstig. Hastigheten bestemmes av aktiveringsenergien, som her er høy; enzymet senker Ea uten å endre ΔG.
:::

:::sjekk[Påvirker et enzym mengden produkt ved likevekt?]
Nei. K'eq og likevektskonsentrasjonene er de samme; enzymet gjør bare at likevekten nås raskere.
:::

:::sjekk[Hva er en transisjonstilstandsanalog, og nevn to bruksområder.]
Et stabilt molekyl som ligner reaksjonens transisjonstilstand og derfor binder svært sterkt i aktivt sete. Brukes som potente enzymhemmere/legemidler og til å lage katalytiske antistoffer (abzymer).
:::

:::sjekk[Beskriv rollene til Ser195, His57, Asp102 og oksyanionhullet i chymotrypsin.]
Ser195 er nukleofilen som angriper karbonyl-C. His57 er generell base som aktiverer Ser (og senere generell syre). Asp102 orienterer og stabiliserer His57. Oksyanionhullet stabiliserer den negative ladningen i det tetraedriske intermediatet.
:::

:::sjekk[Hvorfor gir binding i ES-komplekset et entropitap, og hvorfor går det likevel?]
Substratet låses i én orientering (tap av frihet = ΔS < 0). Mange svake bindinger i aktivt sete gir en større negativ ΔH som mer enn kompenserer.
:::

:::sjekk[Chymotrypsin kløyver etter Phe, trypsin etter Lys/Arg og elastase etter Ala. Forklar ut fra S1-lommen.]
Chymotrypsin har en dyp, hydrofob lomme med uladet Ser189 i bunnen – passer store aromatiske sidekjeder. Trypsin har negativ Asp189 i bunnen, som danner saltbro med positiv Lys/Arg. I elastase fyller Val216 og Thr226 lommen, så bare små sidekjeder får plass.
:::

:::sjekk[Hva er den viktigste mekanistiske forskjellen mellom en sinkmetalloprotease og en serin- eller cysteinprotease?]
I metalloproteasen er nukleofilen et vannmolekyl aktivert av Zn²⁺, og det angriper peptidbindingen direkte. Enzymet danner ikke et kovalent acyl-enzym-intermediat. Serin- og cysteinproteaser bruker sin egen Ser/Cys som nukleofil og blir kovalent bundet til substratet (ester/tioester) før hydrolysen.
:::

:::sjekk[Hva er rollen til histidin i en cysteinprotease?]
Generell base: His tar H⁺ fra Cys-SH og gjør det til et nukleofilt tiolat (aktiverer Cys). Senere aktiverer His vannet som hydrolyserer tioesteren.
:::

:::sjekk[Enzym A øker hastigheten 2× fra 25 til 37 °C, enzym B nesten ikke. Hvilket har høyest aktiveringsenergi?]
Enzym A. Etter Arrhenius gir høy Ea sterk temperaturavhengighet (ca. 44 kJ/mol for en dobling mellom 25 og 37 °C). ΔG for reaksjonen er lik for begge, fordi reaksjonen er den samme.
:::
