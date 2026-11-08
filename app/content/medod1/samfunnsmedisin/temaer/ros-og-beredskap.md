---
title: ROS-analyse og helseberedskap
summary: Risiko- og sårbarhetsanalyse (risiko = sannsynlighet × konsekvens, sløyfediagram, risikomatrise, sårbarhet, usikkerhet) og helseberedskap. Kapitlet dekker beredskapsprinsippene (ansvar, likhet, nærhet, samvirke), lovgrunnlaget, aktørene, kommunens planer og kommuneoverlegen, akuttkjeden, epidemihåndtering, føre-var og forholdsmessighet, og sårbare grupper i kriser.
order: 9
tags: [ROS, risiko, sårbarhet, beredskap, beredskapsprinsipper, helseberedskap, krisekommunikasjon, epidemi, kommuneoverlege, TBL]
related:
  - samfunnsmedisin/temaer/miljomedisin
  - samfunnsmedisin/temaer/velferdsstat-og-helsetjeneste
  - samfunnsmedisin/kortsvar/ovelse-ros-skred
  - samfunnsmedisin/kortsvar/ovelse-beredskapsprinsipper
  - samfunnsmedisin/kortsvar/ovelse-drikkevann
  - samfunnsmedisin/temaer/helserett
  - samfunnsmedisin/temaer/hva-er-samfunnsmedisin
sources:
  - file: medod1/material/samfunnsmedisin/ros-abc-mollerlokken--7998559.pdf
  - file: medod1/material/samfunnsmedisin/helseberedskap-aavitsland--7995662.pdf
  - file: medod1/info/risikovurdering-av-miljofaktorer-i-samfunnet-lillebo--7994470.pdf
  - file: medod1/exercises/tbl-ros-vollset-mollerlokken-2026--8151849.pdf
  - file: medod1/material/samfunnsmedisin/introduksjon-miljomedisin-tjalvin--7998839.pdf
    pages: "5-23"
  - file: medod1/material/samfunnsmedisin/primaerhelsetjenesten-i-fokus-hansen--7968135.pdf
    pages: "7, 28, 48-52"
  - file: medod1/info/luber-og-momentliste-samfunnsmedisin-med1--7832173.pdf
---

## Grunnbegreper

| Begrep | Definisjon (slik det er undervist) |
|---|---|
| **ROS** | Risiko- og sårbarhetsanalyse. En kartlegging av **sannsynligheten og konsekvensen** av ulike hendelser, som gjør det mulig å prioritere tiltak og håndtere risiko til et forsvarlig nivå (Møllerløkken) |
| **Risiko** | Den faren uønskede hendelser representerer for mennesker, miljø eller materielle verdier. **Risiko = sannsynlighet × konsekvens** |
| **Sårbarhet** | Systemets evne til å fungere og nå målene sine til tross for påkjenninger: «hvor motstandsdyktige og robuste er vi?» Høy sårbarhet betyr lav robusthet |
| **Uønsket hendelse** | En hendelse som kan føre til tap av verdier: liv, helse, miljø, viktig infrastruktur eller materielle verdier (NS 5814) |
| **Beredskap** | Å forberede og gjennomføre skadebegrensende tiltak gjennom planer, systemer, ledelse, ressurser og øvelser. «Være forberedt på det uforberedte» |
| **Samfunnssikkerhet** | Å forebygge hendelser, redusere skadene og vende tilbake til normalsituasjonen |
| **Helseberedskap** | Forvaltningens og helse- og omsorgstjenestens **forebygging** av uønskede hendelser **og håndtering** av slike hendelser. Formålet er å verne liv og helse og sikre nødvendig helsehjelp og sosiale tjenester ved kriser og katastrofer, både i fred og krig (Nasjonal helseberedskapsplan) |
| **Totalforsvar** | Samfunnets samlede beredskapsressurser, fra Forsvaret til den enkelte innbygger. DSB anbefaler **egenberedskap for 1 uke** |

Tidslinjen for en hendelse består av tre faser:

```
FØR: forebygge          HENDELSEN          ETTER: håndtere → gjenopprette (normalisere)
   (sannsynlighets-                           (konsekvensreduserende tiltak)
    reduserende tiltak)
```

## ROS-analysen steg for steg

1. **Identifiser uønskede hendelser.**
   - Hva kan skje?
   - Hva er **årsakene** og de **utløsende faktorene**? Eksempel: hellingsgrad over 27° er årsaken, kraftig nedbør er den utløsende faktoren, og hendelsen er et skred (Hatlestad 2005).
2. **Vurder sannsynlighet**, gradert 1–5.
3. **Vurder konsekvens**, gradert 1–5, for:
   - liv og helse
   - ytre miljø
   - økonomi
   - tjenesteproduksjon
   - omdømme og tillit
4. **Plasser hendelsen i risikomatrisen** (sannsynlighet × konsekvens). Det gir grønn, gul eller rød risiko.
5. **Vurder sårbarhet og usikkerhet.** Hvor robust er systemet? Hvor godt er kunnskapsgrunnlaget?
6. **Foreslå tiltak:**
   - **sannsynlighetsreduserende** (forebyggende)
   - **konsekvensreduserende** (skadebegrensende)
7. **Følg opp.** Tiltakene trenger ansvarlig og frist. Analysen må forankres i ledelsen og oppdateres jevnlig.

| Sannsynlighet | Frekvens | Konsekvens (liv og helse) |
|---|---|---|
| 1 Usannsynlig | Sjeldnere enn hvert 100. år | 1 Ubetydelig: ingen døde, lettere skader |
| 2 Mindre sannsynlig | Hvert 50.–100. år | 2 Mindre alvorlig: ingen døde, flere moderat skadde |
| 3 Sannsynlig | Hvert 10.–50. år | 3 Alvorlig/kritisk: under 5 døde og/eller opptil 10 alvorlig skadde |
| 4 Meget sannsynlig | Hvert 1.–10. år | 4 Meget alvorlig: 5–10 døde og/eller 10–20 alvorlig skadde |
| 5 Svært sannsynlig | Oftere enn én gang i året | 5 Katastrofal: over 10 døde og/eller over 20 alvorlig skadde, og hjelpeapparatet blir overbelastet |

**Risikomatrise (verdi = S × K):**

| Konsekvens ↓ / Sannsynlighet → | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| **5** Katastrofal | 5 | 10 | **15** | **20** | **25** |
| **4** Meget alvorlig | 4 | 8 | **12** | **16** | **20** |
| **3** Alvorlig | 3 | 6 | 9 | **12** | **15** |
| **2** Mindre alvorlig | 2 | 4 | 6 | 8 | 10 |
| **1** Ubetydelig | 1 | 2 | 3 | 4 | 5 |

Fet skrift markerer rød sone.

### Sløyfediagrammet («bow-tie»)

```
Årsak 1 ─┐                                   ┌─► Konsekvens 1 (liv og helse)
Årsak 2 ─┼─[sannsynlighetsreduserende]─► UØNSKET ─[konsekvensreduserende]─┼─► Konsekvens 2 (stabilitet)
Årsak 3 ─┤        barrierer               HENDELSE        barrierer       ├─► Konsekvens 3 (natur og miljø)
Årsak 4 ─┘                                   └─► Konsekvens 4 (økonomi)
        sårbarhet / usikkerhet                     sårbarhet / usikkerhet
```

:::eksempel[Skred nær boligområde (Møllerløkken)]
**Årsaker:**
- kraftig eller langvarig nedbør
- kvikkleire
- erosjon
- anleggsvirksomhet

**Sannsynlighetsreduserende (forebyggende) tiltak:**
- kartlegge skredutsatte områder
- unngå å bygge ut slike områder (ROS i reguleringsplaner)
- skredsikring

**Konsekvensreduserende (skadebegrensende) tiltak:**
- evakuering
- beredskapsressurser (materiell og personell)
- beredskapsplaner og øvelser

**Konsekvenser:**
- liv og helse
- stabilitet (grunnleggende behov)
- natur og miljø
- materielle verdier
:::

### Svakheter ved ROS

- Analysen er **skjønnsbasert**. Tallene må ikke tillegges mer presisjon enn de har.
- Man legger ofte vekt på det som **har skjedd**, og **undervurderer usikkerhet** og nye trusler. Pandemi og krig ble lenge undervurdert.
- Et **blikk utenfra** er viktig. De som står nær utfordringene, må likevel delta.
- «Målet er ikke å forutse fremtiden, men å gjøre oss mer robuste til å håndtere den.»

:::eksempel[Bergen kommunes helhetlige ROS 2024]
- 40 hendelser ble vurdert.
- **Pandemi** har høyest samlet risiko. Deretter følger bortfall av EKOM (elektronisk kommunikasjon) og storbrann med masseskade.
- Ekstremvær, cyberangrep, legemiddelmangel og terror ligger også høyt.
- Den sikkerhetspolitiske situasjonen gir et dystrere bilde enn i 2020.
- **Klimaendringer er en risikoforsterker.** Kommunen har derfor også laget en egen klima-ROS.
:::

## Lovgrunnlag og plikter

| Hjemmel | Plikt |
|---|---|
| **Sivilbeskyttelsesloven** med **forskrift om kommunal beredskapsplikt § 2** | Kommunen skal gjennomføre en **helhetlig ROS-analyse** og ha en beredskapsplan basert på den |
| **Helseberedskapsloven** | Kommuner, fylkeskommuner, RHF og staten skal ha **beredskapsplan for helse- og omsorgstjenestene**. Planen skal bygge på ROS |
| **Folkehelseloven § 27** | Kommunelegen har **hastekompetanse** i miljørettet helsevern, smittevern og helsemessig beredskap |
| Folkehelseloven (miljørettet helsevern) og forskrift om miljørettet helsevern | Beredskap for miljørettet helsevern. Kommunen skal **varsle statsforvalteren og FHI** ved miljøhendelser som truer helsen |
| **Smittevernloven** | Kommunal **smittevernplan**. Kommunelegen kan treffe hastevedtak. Én kommunelege skal være utpekt, med stedfortreder |
| Helsepersonelloven § 7 | Den enkeltes plikt til **øyeblikkelig hjelp**, også i kriser (se [Helserett](/medod1/samfunnsmedisin/temaer/helserett)) |

ROS er også en del av regelverket for **internkontroll og forbedringsarbeid**. Derfor skal leger kunne ROS.

## De fire beredskapsprinsippene

| Prinsipp | Innhold | Eksempel |
|---|---|---|
| **Ansvar** | Den som har ansvaret for et fagområde i normalsituasjonen, har det også i krise | Kommunen har ansvar for legevakt og sykehjem også under en pandemi |
| **Likhet** | Organiseringen i krise skal være mest mulig lik den daglige | Fastlegene håndterer covid-pasienter gjennom vanlige kanaler |
| **Nærhet** | Kriser håndteres på **lavest mulig nivå** | Kommunen håndterer et lokalt drikkevannsutbrudd, med støtte fra FHI |
| **Samvirke** | Alle har et selvstendig ansvar for å samarbeide med relevante aktører om forebygging, planlegging og krisehåndtering | Kommunen, Mattilsynet, FHI og vannverket ved et drikkevannsutbrudd |

## Hva vi må ha beredskap for

| Prioriterte nasjonale trusler (helse) | Vanlige lokale hendelser |
|---|---|
| 1. Væpnede konflikter og krig | Akutte medisinske tilstander |
| 2. Digitale angrep | Akutte psykiatriske hendelser |
| 3. Mangel på legemidler og medisinsk utstyr | Ulykker med personskade |
| 4. Pandemier og epidemier | Vold med personskade |
| 5. Forurenset drikkevann | Naturhendelser med skader eller bortfall av tjenester |
| 6. Atomhendelser | |

**CBRNE-hendelser** (kjemisk, biologisk, radiologisk, nukleær, eksplosiv):
- **Giftinformasjonen** er døgnåpen og får over 40 000 henvendelser i året.
- **CBRNE-senteret** er nasjonal behandlingstjeneste.
- **DSA** og **Kriseutvalget for atomberedskap** har ansvaret ved atomhendelser. Statsforvalteren er det regionale leddet.

## Aktørene i helseberedskapen

| Nivå | Aktør | Rolle |
|---|---|---|
| Nasjonalt | HOD | Overordnet ansvar, **Nasjonal helseberedskapsplan** |
| | **Helsedirektoratet** | Ansvar for nasjonal helseberedskap, koordinerer |
| | **FHI** | Smittevern, miljømedisin, kjemikalieulykker. Døgnåpen medievakt og støtte til kommunene |
| | DSA, Direktoratet for medisinske produkter | Fagmyndigheter |
| | DSB (Justisdepartementet) | ROS-metodikk, samordning av samfunnssikkerhet |
| Regionalt | **Statsforvalteren** | Samordner, fører tilsyn med kommunenes beredskap og er regionalt ledd i atomberedskapen |
| | RHF og HF | Sykehusberedskap, **ambulanse og AMK (113)**, luftambulanse |
| Lokalt | **Kommunen** | **Helseberedskapsplan**, smittevern- og pandemiplan og **plan for psykososial beredskap** (kriseteam, sammen med skole, barnevern, politi og spesialisthelsetjeneste). Kontinuitetsplaner. **Evakuerte- og pårørendesenter** sammen med politiet |
| | **Kommuneoverlegen** | Medisinskfaglig rådgiver i kriseledelsen, hastevedtak, samfunnsmedisinsk beredskapsvakt (Bergen) |

**Akuttkjeden** (Aavitsland):

| Aktør | Rolle |
|---|---|
| Innringere og førstehjelpere | Tidlig varsling og livreddende førstehjelp |
| **AMK (113)** | Koordinering og ressursstyring |
| Ambulanse og luftambulanse | Prehospital behandling og transport. Eies av helseforetakene |
| Fastlege, **legevakt (116 117)** og kommunale ØH-senger | Ikke-livstruende tilstander |
| Sykehus | Diagnostikk og behandling på høyeste nivå |
| Fastlege og rehabilitering | Langsiktig oppfølging |

**På et skadested:**
- **Innsatsleder helse** har oversikt, prioriterer evakuering og fører logg.
- **Medisinsk leder helse** (lege) varsler, leder triage og livreddende behandling, fordeler personell og pasienter og ser etter uskadde og pårørende.

## Epidemiberedskap

Modell for epidemihåndtering (Aavitsland):

```
Overvåking → situasjonsforståelse → risikovurdering → strategi med mål → håndtering med tiltak
              (kommunikasjon underveis i alle ledd)
```

- **Strategier** (velges av regjeringen eller HOD):
  1. ingen bremsing
  2. **bremsing** til et nivå helsetjenesten tåler
  3. **suppresjon**
  4. **eliminering**
- **Tiltak:**
  - behandlingstiltak (god behandling, immunitet) reduserer **alvorligheten**
  - smitteverntiltak (hygiene, kontaktreduksjon, smittesanering, vaksine) reduserer **spredningen**

| **Føre var** | **Forholdsmessighet** |
|---|---|
| Når trusselbildet er usikkert, er det bedre å slå hardt til | Tiltak må stå i rimelig forhold til trusselen («ikke skyte spurv med kanon») |
| Handle først, juster etterpå («no regret») | Velg tiltak med tilstrekkelig effekt og minst mulig ulemper |
| Fare: blir et påskudd for å slippe vanskelige avveininger | Fare: tar for lang tid |

Lærdom fra pandemien:
- bedre kunnskapsgrunnlag
- bedre kommunikasjon og mindre unødvendig frykt
- mer pragmatisme
- bedre vurdering av nytte mot ulemper

## TBL: Risiko, beredskap og hendelser

Fire scenarioer ble brukt. For hvert skulle gruppen angi **problem**, **sårbar gruppe** og **første tiltak**.

| Scenario | Fase | Kjernen |
|---|---|---|
| A: Avvik i drikkevannsprøver etter kraftig nedbør, ingen syke | **Mulig problem**: usikkerhet, planlegging, forebygging | Store konsekvenser, usikker informasjon. **Føre var** tilsier å vurdere **kokevarsel**, ta nye prøver, samarbeide med vannverk og Mattilsynet og forberede informasjon |
| B: Mange med mage- og tarmsymptomer, kokevarsel er sendt, mediene krever svar | **Faktisk hendelse**: konsekvenser, håndtering, respons | Begrens smitte, finn kilden, informer **raskt og ærlig**, følg opp sårbare |
| C: Rødt farevarsel for vind og nedbør | Mulig problem | Forbered deg: kartlegg sårbare, sikre strøm og kommunikasjon, bemanning, informasjon |
| D: Ekstremværet har truffet: stengte veier, strømbrudd, hjemmetjenesten sliter | Faktisk hendelse | Prioriter begrensede ressurser. Hvem trenger hjelp **først**? |

**Spørsmål før og etter en hendelse:**
- **Før:** Hva er vi bekymret for? Hva vet vi ikke? Hvordan kan vi forebygge? Hvem må samarbeide?
- **Etter:** Hva har skjedd? Hvem er berørt? Hvordan begrenser vi skaden? Hva gjør vi nå?

**En hendelse rammer ikke alle likt.**

| Hendelse | Sårbare grupper |
|---|---|
| Drikkevann | Små barn, skrøpelige eldre, kronisk syke (dehydrering) |
| Ekstremvær | Hjemmeboende som trenger omsorg, personer som er **avhengige av strøm** (oksygen, respirator), personer som bor isolert |

:::husk
**Samfunnsmedisinens fem spørsmål:**
1. Hva kan skje?
2. Hvem rammes?
3. Hva kan vi gjøre på forhånd?
4. Hva gjør vi når det skjer?
5. Hva lærer vi etterpå?

Samfunnsmedisin arbeider med **framtidige problemer og sårbare grupper** lenge før det finnes en pasient å undersøke.
:::

## Krisekommunikasjon

Huskeliste (Lillebø):
- **Bekreft** det du kan bekrefte.
- **Vis omtanke** for de involverte, og informer **de mest berørte først**.
- Si hva som gjøres for å håndtere situasjonen.
- Oppgi **neste kontaktpunkt** med pressen. Det gir arbeidsro.
- Bruk kommunikasjonsrådgiver.

Kommunikasjon er en integrert del av all beredskap. Prinsippene er de samme som i risikokommunikasjon: **åpenhet, hurtighet, tilgjengelighet** og toveis dialog (se [Miljømedisin](/medod1/samfunnsmedisin/temaer/miljomedisin)).

:::eksamen
En typisk kortsvarsoppgave gir et scenario, for eksempel drikkevann, ekstremvær, kjemikalieutslipp eller pandemi. Du skal da:
- identifisere **sårbare grupper med begrunnelse**
- skille **forebyggende** (sannsynlighetsreduserende) fra **skadebegrensende** (konsekvensreduserende) tiltak
- bruke et **beredskapsprinsipp** på riktig måte
- vise god kommunikasjon

Husk at **risiko = sannsynlighet × konsekvens**, og at **sårbarhet** handler om evnen til å tåle påkjenningen.
:::

:::feil
- **Risiko og sårbarhet er ikke det samme.** Risiko gjelder hendelsen: hvor sannsynlig og hvor alvorlig. Sårbarhet gjelder systemets eller gruppens evne til å tåle den.
- **Nærhetsprinsippet** betyr «lavest mulig nivå», ikke «nærmeste sykehus».
- **Likhetsprinsippet** betyr at kriseorganiseringen skal ligne den daglige organiseringen. Det betyr ikke at alle skal behandles likt.
:::

## Test deg selv

:::sjekk[Gi ett sannsynlighetsreduserende og ett konsekvensreduserende tiltak mot forurenset drikkevann.]
- **Sannsynlighetsreduserende:** sikre nedslagsfeltet og vedlikeholde vannbehandlingen (klor, UV), ta regelmessige prøver, ha beredskap ved kraftig nedbør.
- **Konsekvensreduserende:** sende ut kokevarsel raskt, ha reservevann, informere sårbare grupper og legevakt og overvåke sykdom.
:::

:::sjekk[Hvilket beredskapsprinsipp brytes hvis staten tar over den daglige driften av kommunens legevakt under et lokalt utbrudd?]
**Nærhetsprinsippet**, fordi krisen skal håndteres på lavest mulig nivå, og **ansvarsprinsippet**, fordi kommunen har ansvaret for legevakten også i krise. Staten skal støtte, for eksempel gjennom FHI, og ikke overta.
:::

:::sjekk[Hvorfor kan en ROS-analyse gi falsk trygghet?]
Den bygger på **skjønn**. Tallene ser presise ut, men er usikre. Man legger lett vekt på det som har skjedd før, og undervurderer nye trusler som pandemi, cyberangrep og krig. Analysen må derfor oppdateres, ha et blikk utenfra og følges av tiltak med ansvarlig og frist.
:::

:::sjekk[Forklar forskjellen på føre-var-tilnærmingen og forholdsmessighet i pandemihåndtering.]
- **Føre var:** Ved usikkerhet slår man hardt til først og justerer etterpå. Faren er at man unngår vanskelige avveininger.
- **Forholdsmessighet:** Tiltakene skal stå i rimelig forhold til trusselen og gi minst mulig ulemper. Faren er at det tar for lang tid.

De to kan kollidere. God beredskap krever en eksplisitt vurdering av nytte mot ulemper.
:::

:::sjekk[Hvilken hjemmel gir kommuneoverlegen myndighet til å handle raskt i en akutt miljøhendelse?]
**Folkehelseloven § 27** gir kommunelegen **hastekompetanse** på kommunens vegne i saker om miljørettet helsevern, smittevern og helsemessig beredskap. For smittsomme sykdommer har smittevernloven i tillegg egne regler om hastevedtak.
:::
