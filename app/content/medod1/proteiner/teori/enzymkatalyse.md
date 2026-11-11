---
title: Enzymkatalyse – transisjonstilstand, katalytiske strategier og proteaser
summary: ΔG, K'eq og spontanitet; enzymer senker aktiveringsenergien ved å stabilisere transisjonstilstanden uten å endre ΔG eller likevekten; Arrhenius; ES-kompleks, aktivt sete, induced fit, transisjonstilstandsanaloger; de fire katalytiske strategiene (syre-base, kovalent, metallion, approksimasjon); chymotrypsins mekanisme i 8 trinn, oksyanionhullet og S1-lommen; serin-, cystein-, aspartyl- og metalloproteaser (HIV-protease).
order: 9
tags: [aktiveringsenergi, transisjonstilstand, ΔG, likevektskonstant, aktivt sete, induced fit, katalytiske strategier, syre-base-katalyse, kovalent katalyse, metallionkatalyse, approksimasjon, karbonsyreanhydrase, chymotrypsin, katalytisk triade, oksyanionhull, Arrhenius, trypsin, elastase, cysteinprotease, aspartylprotease, HIV-protease, metalloprotease, spesifisitetslomme]
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
  - file: medod1/material/proteiner/enzym-2026-2--8223063.pdf
    pages: "2-17, 30-31"
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

**Stabile molekyler som ligner transisjonstilstanden** og derfor binder **ekstra sterkt** i aktivt sete. Ideen ble foreslått av **Linus Pauling (1948)**. Enzymer stabiliserer transisjonstilstanden: bindingsenergien (ΔG_B) reduserer aktiveringsenergien (ΔG‡, Ea). Riktig orientering av de katalytiske gruppene i aktivt sete trengs for å stabilisere både ES og transisjonstilstanden.

- **Prolin racemase** (L-prolin ⇌ D-prolin) går via en plan transisjonstilstand. En stabil, plan analog binder **160× bedre** enn L-prolin (Enzymer 2).
- Adenosindeaminase: 6-hydroksy-1,6-dihydropurin-ribonukleosid (Enzymer 1).

Bruk (Enzymer 2; sensorveiledning V2026, langsvar 3 p):

- **Effektive kompetitive hemmere / legemidler.** De fungerer som **reversible** hemmere, og de viser hvordan enzymet binder transisjonstilstanden selektivt (info om mekanismen).
- **Katalytiske antistoffer (abzymer)**: transisjonstilstandsanalogen brukes som **antigen**; antistoffer som binder den, kan bli nye enzymer.

## Katalytiske strategier

Enzymer bruker **fire generelle strategier** med reaktive aminosyrerester og (ofte) kofaktorer. **De fleste enzymer, og særlig proteaser, kombinerer flere** i samme reaksjon (Enzymer 2).

| Strategi | Hva skjer | Eksempler fra forelesningen |
|---|---|---|
| **1. Syre-base-katalyse** | Sidekjeder i aktivt sete er **protondonorer og -akseptorer**; ladde/ioniserbare rester (His, Asp, Glu, Lys, Cys, Ser, Tyr) er ofte med | Proteaser (chymotrypsin; første trinn i serinproteaser), karbonsyreanhydrase, pankreatisk ribonuklease |
| **2. Kovalent katalyse** | En reaktiv gruppe i aktivt sete danner en **kovalent binding til et intermediat**; bindingen må brytes igjen for å regenerere fritt E | **Acyl-enzym**-intermediatet i chymotrypsin |
| **3. Metallionkatalyse** | Metallioner hjelper til å **danne nukleofiler**, **aktivere intermediater** eller **stabilisere ladninger** i transisjonstilstanden (elektrostatisk) | Zn²⁺ i karbonsyreanhydrase og metalloproteaser |
| **4. Approksimasjon** | Enzymet øker den **effektive konsentrasjonen** av reaktantene og sikrer **riktig orientering** | De fleste enzymer; H₂O og CO₂ i karbonsyreanhydrase |

Metallionenes roller (lysbilde 4):

- **Essensielle for aktivitet (tett bundet):** Fe²⁺, Fe³⁺, Cu²⁺, Mn²⁺, Co²⁺
- **Strukturelle:** Na⁺, K⁺, Ca²⁺
- **Både essensielle og strukturelle:** Mg²⁺, Zn²⁺

:::eksempel[Karbonsyreanhydrase – tre strategier i ett enzym]
$\ce{CO2 + H2O <=> HCO3- + H+}$ ([karbonsyre og blodets pH](/medod1/generell-kjemi/teori/karbonsyre-og-blodets-ph))

- **Metallion:** **tre His-rester koordinerer Zn²⁺**. Zn²⁺ binder et vannmolekyl og gjør det til en nukleofil (OH⁻ bundet til Zn).
- **Syre-base:** vannet avgir et proton; Zn²⁺ støtter det nukleofile angrepet på CO₂.
- **Approksimasjon:** H₂O og CO₂ holdes tett sammen og riktig orientert i aktivt sete.
:::

## Eksempel: chymotrypsin (serinprotease)

Peptidbindingen er **vanskelig å bryte**: den har partiell dobbeltbindingskarakter ([peptidbindingen](/medod1/proteiner/teori/peptidbindingen)), er stabil og har høy aktiveringsenergi for hydrolyse. Proteaser er **hydrolaser** (vann er substrat) og akselererer reaksjonen svært effektivt. Chymotrypsin er det **klassiske eksempelet på kombinasjon av kovalent og syre-base-katalyse**.

- Bryter ned proteiner i **duodenum** (tolvfingertarmen). Hydrolyserer peptidbindinger på karboksylsiden av store hydrofobe/aromatiske rester.
- Består av **3 polypeptidkjeder** som er resultat av **proteolytisk aktivering** (chymotrypsinogen → chymotrypsin) og holdes sammen av **disulfidbroer**.
- **Katalytisk triade: Asp102 – His57 – Ser195** (bovint chymotrypsin). En reorganisering av H-bindingene i triaden gjør **Ser195 til en potent nukleofil** (det «reaktive serinet»): His57 tar H⁺ fra Ser195, og Asp102 stabiliserer det protonerte His.
- **Ingen metallioner** er involvert.
- **DFP/DIPF** (diisopropylfluorfosfat) reagerer kovalent med Ser195 → [irreversibel hemming](/medod1/proteiner/teori/enzymregulering).

### Mekanismen i 8 trinn (Miesfeld & McEvoy fig. 7.29)

**Acyleringstrinnet**

1. Substratet binder, og **Ser195 angriper karbonyl-C** i peptidbindingen.
2. Et **tetraedrisk intermediat** dannes og stabiliseres av **oksyanionhullet**.
3. Peptidbindingen spaltes, og et **acyl-enzym-intermediat** dannes (kovalent katalyse).
4. **Aminproduktet frigjøres**; acyl-enzymet blir igjen.

**Deacyleringstrinnet**

5. **Vann** kommer inn i aktivt sete og **aktiveres av His57**.
6. OH⁻ angriper acylgruppen og danner et **nytt tetraedrisk intermediat**.
7. **Acylgruppen** (karboksylsyre-produktet) frigjøres.
8. Enzymet er **regenerert** og klart for en ny katalytisk syklus.

### Oksyanionhullet

Det tetraedriske intermediatet **ligner transisjonstilstanden**. O-atomet i det har negativ ladning (oksyanion). I oksyanionhullet danner **peptid-NH-grupper i enzymets hovedkjede H-bindinger** til dette oksygenet, slik at ladningen stabiliseres og **aktiveringsenergien senkes**.

### Spesifisitetslommen: chymotrypsin, trypsin og elastase

Bindingslommene i serinproteaser gjenspeiler **spesifisiteten for aminosyrene ved siden av den kløyvbare («scissile») bindingen** (Enzymer 2, lysbilde 17). De tre fordøyelsesproteasene har **samme katalytiske triade og samme fold** (homologe, se [divergent evolusjon](/medod1/proteiner/teori/homologi-og-evolusjon)). Forskjellen i spesifisitet sitter i noen få rester som kler S1-lommen:

| Protease | Rest i bunnen av / langs lommen | Lommen | Kløyver etter (karboksylsiden av) |
|---|---|---|---|
| **Chymotrypsin** | **Ser189** (uladet), Gly216/Gly226 | Dyp og **hydrofob** | Store hydrofobe/aromatiske: **Phe, Tyr, Trp** (Leu, Met) |
| **Trypsin** | **Asp189** (negativ) | Dyp, negativ ladning i bunnen | Positivt ladde: **Lys, Arg** (saltbro til Asp189) |
| **Elastase** | Val216 og Thr226 (store rester) stenger lommen | **Grunn** | Små, nøytrale: **Ala, Gly**, Ser, Val |

Regel for mutantoppgaver: **lommen foretrekker sidekjeder som er komplementære i størrelse og ladning.** Negativ rest i bunnen (Asp/Glu) → positivt ladde substratrester; positiv rest (Lys/Arg) → Asp/Glu; hydrofob rest (Val) → hydrofobe substratrester; store rester som fyller lommen → bare små sidekjeder passer.

## De fire typene proteaser

Proteaser bryter peptidbindinger i proteiner og er viktige for **regulering og nedbrytning av proteiner**. Alle må løse samme problem: peptidbindingen er svært stabil (resonans), så karbonyl-C må angripes av en **aktivert nukleofil**, og det negativt ladde **tetraedriske intermediatet** må stabiliseres. Enzymer 2 deler dem i fire typer etter *hvilken* nukleofil de bruker:

| Type | Nukleofil og aktivering | Kovalent acyl-enzym? | Eksempler fra forelesningen |
|---|---|---|---|
| **1. Serinproteaser** | Særs reaktiv **Ser**, aktivert av **His og Asp** (katalytisk triade) | **Ja** (ester) | Chymotrypsin (trypsin, elastase) |
| **2. Cysteinproteaser** | **Cys**, aktivert av **His** → tiolat (S⁻) | **Ja** (tioester) | **Papain** (papaya); humane homologer: **katepsiner** (immunresponsen) |
| **3. Aspartylproteaser** | **Vann**, aktivert av **to Asp** | **Nei** | **Renin** (blodtrykk), **pepsin** (magesekken, svært lavt pH-optimum), **HIV-protease** |
| **4. Metalloproteaser** | **Vann**, aktivert av et **metallion (oftest Zn²⁺)** | **Nei** | **Termolysin** (bakterielt, termostabilt) |

Felles for alle: **katalyserer kløyving av en peptidbinding** og går via en **tetraedrisk transisjonstilstand/intermediat**.

### Aspartylproteaser og HIV-protease

To Asp-rester i aktivt sete aktiverer et vannmolekyl, som angriper peptidbindingen direkte.

- **HIV-protease** er en **dimer av identiske subenheter**. Hver av de to Asp-restene i aktivt sete kommer fra **hver sin subenhet**.
- To fleksible **«flaps»** lukker inne substratet (eller hemmeren) i aktivt sete.
- Funksjon: aktiverer virale **multidomene-proteiner** ved å kløyve spesifikke peptidbindinger i forløperproteinet (pre-proteinet). Uten den dannes ingen modne viruspartikler.
- **Hemmere av HIV-protease er viktige i HIV-behandlingen.** **Indinavir** (Crixivan) binder aktivt sete og lukkes inne av flapsene. Hemmerne må være **svært spesifikke**: de skal f.eks. ikke hemme **renin**, som er en human aspartylprotease. Indinavir er spesifikk.

:::klinikk
Det er spesifisiteten som gjør HIV-proteasehemmere brukbare som legemidler: viruset har en aspartylprotease, men det har mennesket også (renin og pepsin). En hemmer som også traff renin, ville påvirke blodtrykksreguleringen.
:::

### Cysteinproteaser

1. **His** virker som generell base og tar H⁺ fra Cys-SH → **tiolat (Cys-S⁻)**, en sterk nukleofil. His **aktiverer** altså cysteinet (felle: «Cys deaktiveres av His»).
2. Tiolatet angriper karbonyl-C → tetraedrisk intermediat.
3. Aminodelen går ut → **kovalent tioester (acyl-enzym)**.
4. Vann, aktivert av His, hydrolyserer tioesteren → karboksylsyre-produktet frigjøres og enzymet er regenerert.

Mekanismen er altså den samme som for serinproteaser, med S i stedet for O. Det aktive setet er tilpasset den mer sure og mer nukleofile tiolen. **Muteres Cys til Ser, blir enzymet i praksis inaktivt** – serinet er ikke nukleofilt nok uten en fullstendig triade som aktiverer det. Det blir ikke en serinprotease med samme aktivitet.

### Metalloproteaser (sinkproteaser)

- Eksempel fra forelesningen: **termolysin**, en bakteriell, termostabil metalloprotease.
- **Zn²⁺** (bundet til His-rester og Glu i aktivt sete) binder og **polariserer et vannmolekyl**, slik at det mister et proton og blir en sterk nukleofil (OH⁻-lignende). En Glu-rest fungerer som generell base.
- Det aktiverte vannet angriper karbonyl-C **direkte** → tetraedrisk intermediat. Zn²⁺ stabiliserer det negativt ladde oksyanionet.
- Intermediatet faller fra hverandre til to produkter. **Enzymet danner aldri et kovalent intermediat med substratet** – det er den viktigste forskjellen fra serin- og cysteinproteaser.

:::klinikk
**Matriksmetalloproteinaser (MMP)** er sinkavhengige proteaser som bryter ned kollagen og annen ekstracellulær matriks. De er aktive ved periodontitt (vevsnedbrytning) og i dentin, der de kan bryte ned kollagenet i hybridlaget under kompositt­fyllinger.
:::

:::husk
**Momentlisten fra Enzymer 2** (katalysedelen): reaksjonsmekanismer (kovalent, syre-base, approksimasjon, metallion) · proteaser (serin-, cystein-, aspartyl- og metalloproteaser) · chymotrypsins mekanisme (kovalent og syre-base-katalyse, katalytisk triade, oksyanionhullet og tetraedrisk intermediat) · substratspesifisitet i serinproteaser · transisjonstilstandsanaloger (hemmere og katalytiske antistoffer). Hemming og regulering: [neste kapittel](/medod1/proteiner/teori/enzymregulering).
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

:::sjekk[Nevn de fire katalytiske strategiene, og hvilke av dem karbonsyreanhydrase bruker.]
Syre-base-katalyse, kovalent katalyse, metallionkatalyse og katalyse via approksimasjon. Karbonsyreanhydrase bruker metallion (Zn²⁺ koordinert av tre His aktiverer vann), syre-base og approksimasjon (H₂O og CO₂ holdes sammen i aktivt sete). Den danner ikke et kovalent intermediat.
:::

:::sjekk[Hvilke trinn i chymotrypsins mekanisme er acylering, og hvilke er deacylering?]
Acylering (trinn 1–4): Ser195 angriper karbonyl-C, det tetraedriske intermediatet stabiliseres i oksyanionhullet, peptidbindingen spaltes til et acyl-enzym, og aminproduktet går ut. Deacylering (trinn 5–8): vann aktiveres av His57, OH⁻ angriper acylgruppen (nytt tetraedrisk intermediat), acylgruppen frigjøres og enzymet regenereres.
:::

:::sjekk[Hvordan er det aktive setet i HIV-protease bygd opp, og hvorfor må HIV-proteasehemmere være spesifikke?]
HIV-protease er en aspartylprotease og en dimer av identiske subenheter. Hver subenhet bidrar med én Asp til aktivt sete, og to «flaps» lukker inne substratet. Hemmere som indinavir må ikke hemme menneskets egne aspartylproteaser, f.eks. renin (blodtrykksregulering).
:::

:::sjekk[Enzym A øker hastigheten 2× fra 25 til 37 °C, enzym B nesten ikke. Hvilket har høyest aktiveringsenergi?]
Enzym A. Etter Arrhenius gir høy Ea sterk temperaturavhengighet (ca. 44 kJ/mol for en dobling mellom 25 og 37 °C). ΔG for reaksjonen er lik for begge, fordi reaksjonen er den samme.
:::
