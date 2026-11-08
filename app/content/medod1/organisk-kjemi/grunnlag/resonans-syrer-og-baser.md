---
title: Resonans, aromatisitet, syrer og baser
summary: Resonans (delokalisering av elektronpar) forklarer benzens stabilitet, at karboksylsyrer og fenoler er sure, at amider er nøytrale og at peptidbindingen er plan. Syrestyrke styres av hvor stabil den konjugerte basen er (resonans, induktiv effekt); basestyrke av hvor tilgjengelig N-elektronparet er.
order: 3
tags: [resonans, resonansstrukturer, formell ladning, aromatisitet, pKa, syrestyrke, basestyrke, induktiv effekt]
related:
  - organisk-kjemi/funksjonelle-grupper/aromater
  - organisk-kjemi/funksjonelle-grupper/fenoler
  - organisk-kjemi/funksjonelle-grupper/karboksylsyrer
  - organisk-kjemi/funksjonelle-grupper/aminer
  - organisk-kjemi/funksjonelle-grupper/amider
  - generell-kjemi/teori/syre-base-likevekter
  - generell-kjemi/regnetyper/protolyttfordeling
  - proteiner/teori/peptidbindingen
sources:
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-1--8106129.pdf
    pages: "63-71"
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-3a--8116858.pdf
    pages: "9, 24-26"
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-3b--8116859.pdf
    pages: "2-5, 9-11"
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-4b--8131296.pdf
    pages: "9-11, 16"
  - file: medod1/exercises/oppgaver-karboksylsyrer-estere-amider--8156716.pdf
  - file: medod1/exercises/oppgaver-alkoholer-fenoler-etere--8156711.pdf
  - file: medod1/exercises/kollokvie-organisk-kjemi-medod1-losningsforslag-2024--8157258.doc
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2022-medod1-h2022-med-svar--4750110.pdf
---

## Resonans

Resonans: den virkelige strukturen er et **gjennomsnitt (hybrid)** av to eller flere Lewis-strukturer som bare skiller seg i plasseringen av elektronpar (π-elektroner og ledige par). **Ingen atomer flytter seg** mellom resonansstrukturene – bare elektronpar.

Konsekvenser:
- Elektronene er **delokalisert** over flere atomer → lavere energi (stabilisering).
- Bindingslengder utjevnes (alle C–C i benzen er like lange; begge C–O i karboksylat er like).
- Ladning spres over flere atomer → ioner blir mer stabile.

| Eksempel | Hva delokaliseres | Konsekvens |
|---|---|---|
| Benzen | 6 π-elektroner rundt ringen | aromatisk stabilitet; substitusjon i stedet for addisjon |
| Karboksylat R–COO⁻ | negativ ladning over **to** O | karboksylsyrer er sure (pKa ≈ 4–5) |
| Fenoksid C₆H₅O⁻ | negativ ladning ut i ringen | fenol (pKa 10) er langt surere enn alkoholer (pKa ~16) |
| Amid R–CO–NH₂ | N-elektronparet mot C=O | C–N får delvis dobbeltbindingskarakter → plan, lite rotasjon; amider er nesten ikke basiske |

```smiles-row
CC(=O)[O-] | Acetat – ladningen deles av to O
[O-]c1ccccc1 | Fenoksid – ladningen spres i ringen
CC(=O)NC | Amidbinding – delvis dobbeltbinding C–N
```

## Regler for å tegne resonansstrukturer

Resonansstrukturer tegnes med **buede piler** som starter i et elektronpar (π-binding eller ledig par) og ender der paret havner (ny π-binding eller nytt ledig par). Seks regler – alle må være oppfylt:

| # | Regel | Konsekvens |
|---|---|---|
| 1 | **Bare π-elektroner og ledige (ubundne) elektronpar flyttes.** | σ-bindinger brytes aldri; skjelettet er det samme. |
| 2 | **Atomene flytter seg ikke.** | Flytter et H-atom seg, er det en ny forbindelse (f.eks. [keto–enol-tautomeri](/medod1/organisk-kjemi/reaksjoner/keto-enol-tautomeri)), ikke resonans. |
| 3 | **Elektroner flyttes bare mot et sp²- eller sp-atom** (har en p-orbital i konjugasjon, f.eks. C=O, C=C, C⁺). **Aldri mot et sp³-karbon.** | sp³-C har ingen ledig p-orbital og allerede fullt oktett (fire σ-bindinger) – det bryter delokaliseringen. |
| 4 | **Samme totale antall elektroner** i alle strukturene. | Teller du ulikt antall elektroner, er en pil feil. |
| 5 | **Samme nettoladning** i alle strukturene. | Formelle ladninger kan flytte seg, men summen er konstant. |
| 6 | **Oktettregelen** for 2. periode-atomer (C, N, O): **aldri mer enn 8 elektroner.** | Et C⁺ med 6 elektroner er tillatt (men gir et mindre bidrag); et C eller N med 10 elektroner er umulig. |

Formell ladning: $FL = \text{valenselektroner} - \text{ubundne elektroner} - \tfrac{1}{2}\,\text{bundne elektroner}$.

:::eksempel[Tegn resonansstrukturene til fenoksidionet]
1. Start: negativ ladning (tre ledige par) på O, bundet til et sp²-C i ringen.
2. Pil fra et ledig par på O til C–O-bindingen (blir C=O); samtidig pil fra nabo-π-bindingen i ringen til orto-C. Ladningen havner på **orto-C**.
3. Fortsett: π-bindingen flyttes videre → ladningen havner på **para-C**, deretter på det andre **orto-C**.
4. Totalt: **ladningen på O + to orto-C + para-C** (ikke på meta-C). Alle strukturene har samme atomer, samme nettoladning (−1) og fullt oktett.

**Konsekvens:** Ladningen spres → fenoksid er mer stabilt enn alkoksid → fenol er surere. Sitter en NO₂-gruppe i **para**, kan ladningen flyttes helt ut på nitro-O (enda et elektronegativt atom) → *p*-nitrofenol er enda surere. I et alkoksid (sykloheksanolat) er O bundet til sp³-C → **ingen resonansstrukturer** (regel 3).
:::

### Hovedbidrag og mindre bidrag (major/minor contributors)

Resonansstrukturene bidrar ikke likt. Hybriden ligner mest på den **mest stabile** strukturen. Ranger slik (viktigst først):

1. **Flest atomer med fullt oktett.**
2. **Færrest formelle ladninger** (minst ladningsseparasjon).
3. **Negativ ladning på det mest elektronegative atomet** (O > N > C); positiv ladning på det minst elektronegative.
4. **Ekvivalente strukturer** (f.eks. de to i karboksylat og benzen) bidrar likt – dette gir størst stabilisering.

| Molekyl | Hovedbidrag | Mindre bidrag | Hva det mindre bidraget forklarer |
|---|---|---|---|
| Keton/aldehyd | C=O, ingen ladninger | C⁺–O⁻ (C har bare 6 e⁻) | δ+ på karbonyl-C → [nukleofil addisjon](/medod1/organisk-kjemi/reaksjoner/nukleofil-addisjon-til-karbonyl) |
| Amid | C(=O)–N, ingen ladninger | ⁻O–C=N⁺ (alle oktett, men ladningsseparasjon) | delvis dobbeltbinding C–N, plan amid, ikke basisk N |
| Enolat | ladning på **O** (C=C–O⁻) | ladning på C (⁻C–C=O) | O er mer elektronegativ enn C |
| Karboksylat | – | – | to **ekvivalente** strukturer → like C–O-bindinger |

```smiles-row
CC(C)=O | Aceton – hovedbidrag
C[C+](C)[O-] | Mindre bidrag (C⁺ uten oktett)
CC(=O)N | Acetamid – hovedbidrag
CC([O-])=[NH2+] | Mindre bidrag (ladningsseparasjon)
```

:::eksamen
h2022: «Hvilken av reglene for resonansstabilisering er feil?» → **«Elektroner kan flyttes mot sp³ karbon, men ikke sp² karbon»** er feil (det er omvendt). Riktige regler som sto som distraktorer: bare π-elektroner og ubundne elektroner flyttes; totalt antall elektroner endres ikke; samme nettoladning i alle strukturer.
:::

:::feil
- «Resonans» der et H flytter seg er tautomeri – to ulike forbindelser i likevekt, ikke resonansstrukturer.
- Ladningen i fenoksid havner på **orto og para**, ikke meta. Derfor virker NO₂ sterkest i orto/para.
- En struktur med C⁺ eller ladningsseparasjon er ikke «feil» – den er et lovlig, men mindre bidrag.
:::

## Aromatisitet

Kjennetegn på aromatiske forbindelser (forelesning 1):
1. Syklisk og **plan** struktur.
2. Sammenhengende system av overlappende **p-orbitaler** (alle ringatomer sp²).
3. π-elektronene er **delokalisert** over hele ringen.
4. Høy termodynamisk stabilitet (aromatisk stabilisering); alle C–C i benzen er like lange.
5. Reagerer ved **substitusjon** (elektrofil aromatisk substitusjon, EAS: $\ce{Ar-H + E+ -> Ar-E + H+}$), ikke addisjon – addisjon ville ødelagt aromatisiteten.

:::eksamen
v2026: «Hvorfor reagerer benzen hovedsakelig ved substitusjon og ikke ved addisjon?» → addisjon ville ødelegge den aromatiske resonansstabiliseringen.
:::

## Syrestyrke i organisk kjemi

En syre er sterkere jo **mer stabil den konjugerte basen** er. Lavere pKa = sterkere syre (pKa/Ka og beregninger: [Syre–base-likevekter](/medod1/generell-kjemi/teori/syre-base-likevekter); hvilken form som dominerer ved en gitt pH: [Protolyttfordeling](/medod1/generell-kjemi/regnetyper/protolyttfordeling)).

| Forbindelse | pKa | Hvorfor |
|---|---|---|
| 2-metylpropan-2-ol (tert-butanol) | 18,0 | alkylgrupper er elektrondonerende, destabiliserer alkoksid |
| Etanol | 15,9 (~16) | alkoksid ikke resonansstabilisert |
| Vann | 15,7 | referanse |
| 2-kloretanol | 14,3 | induktiv effekt av Cl |
| 2,2,2-trikloretanol | 12,2 | tre Cl → sterkere effekt |
| Fenol | 10,0 | fenoksid resonansstabilisert |
| Eddiksyre (etansyre) | 4,74 | karboksylat resonansstabilisert over 2 O |
| Kloreddiksyre | 2,82 | −I-effekt fra Cl |
| Dikloreddiksyre | 1,30 | to Cl |
| Trikloreddiksyre | 0,7 | tre Cl – sterkest |

**Induktiv effekt (−I):** elektronegative substituenter (halogener, NO₂, CN) trekker elektrontetthet gjennom σ-bindingene, stabiliserer anionet og **øker syrestyrken (senker pKa)**. Effekten:
- blir **svakere med avstanden** til den sure gruppen,
- **summeres** – flere elektrontrekkende grupper gir sterkere syre.

Elektrondonerende grupper (alkyl, OH, alkoksy, amino) destabiliserer anionet og gjør syren svakere. Det samme gjelder substituenter på fenol: elektrontrekkende grupper (f.eks. NO₂) gjør fenolen surere, elektrondonerende (f.eks. CH₃) gjør den svakere.

**Resonans slår induktiv effekt.** Ranger alltid i to trinn: (1) stoffklasse – er anionet resonansstabilisert? (karboksylsyre ≫ fenol ≫ alkohol); (2) innenfor klassen – substituenter (−I, elektrontrekkende/-donerende). 2,2,2-trikloretanol (12,2) er selv med tre Cl svakere enn fenol (10,0). Full gjennomgang av eksamensrangeringen med 2-klorsykloheksanol og substituerte fenoler: [Fenoler](/medod1/organisk-kjemi/funksjonelle-grupper/fenoler).

:::eksempel[Kollokvium: ranger etter økende syrestyrke – benzylalkohol, fenol, benzosyre]
1. Benzylalkohol (C₆H₅CH₂OH): OH sitter på sp³-C, alkoksid ikke resonansstabilisert → svakest (pKa ~15–16).
2. Fenol (C₆H₅OH): fenoksid stabilisert ved resonans inn i ringen → pKa 10.
3. Benzosyre (C₆H₅COOH): karboksylat med ladningen delt likt på to O → sterkest (pKa ~4).

**Svar: benzylalkohol < fenol < benzosyre.**
:::

```smiles-row
OCc1ccccc1 | Benzylalkohol
Oc1ccccc1 | Fenol
OC(=O)c1ccccc1 | Benzosyre
```

:::eksamen
- h2025: «Hvilket av stoffene er den svakeste syren: kloreddiksyre, dikloreddiksyre, eddiksyre, trikloreddiksyre?» → **eddiksyre**.
- v2026: «Hva skjer med pKa når en karboksylsyre får elektrontrekkende substituenter (f.eks. Cl)?» → pKa synker, syren blir sterkere.
- h2025: ranger forbindelser etter stigende pKa – bruk tabellen over (karboksylsyre < fenol < alkohol).
:::

## Basestyrke: aminer og amider

Aminer er baser (og nukleofiler) fordi N har et **ledig elektronpar** (Lewis-base) som kan ta opp H⁺:

$$\ce{CH3NH2 + HCl <=> CH3NH3+ + Cl-}$$

- **Elektrondonerende grupper øker basestyrken**, elektrontrekkende senker den.
- Rekkefølge (forelesning): **ikke-aromatiske (alifatiske) aminer > ammoniakk > aromatiske aminer**. I aromatiske aminer (anilin) er N-elektronparet delvis delokalisert inn i ringen.
- **Amider er mye svakere baser enn aminer**: N-elektronparet er delokalisert til karbonyl-O ved resonans.
- **Kvartære ammoniumioner** (R₄N⁺) har ingen ledig elektronpar og ingen H å avgi – de er ikke baser, og ladningen er uavhengig av pH (kolin, acetylkolin, benzalkoniumklorid).
- **Pyridin**: N er sp², elektronparet ligger i planet utenfor π-systemet → basisk. **Pyrrol**: N-elektronparet inngår i det aromatiske π-systemet → svært svak base.

```smiles-row
c1ccncc1 | Pyridin – basisk
c1cc[nH]c1 | Pyrrol – nesten ikke basisk
Nc1ccccc1 | Anilin – svakere base enn alkylaminer
```

:::eksamen
v2026: «Hvilket utsagn er korrekt om aminers basestyrke?» → elektrondonorer øker basestyrken (ikke: aromatiske aminer er sterkere; ikke: amider er sterkere baser). h2024: sterkest base av anilin, metylamin og ammoniakk → **metylamin**; en elektrontrekkende gruppe (f.eks. NO₂) **senker** basestyrken fordi N-elektronparet blir mindre tilgjengelig for H⁺. v2026: «Hvorfor er pyrrol en mye svakere base enn pyridin?» → N-elektronparet inngår i det aromatiske π-systemet.
:::

:::feil
- Resonansstrukturer er ikke molekyler som «veksler» mellom former – det finnes bare én virkelig struktur (hybriden).
- Fenol er **ikke** en alkohol (OH på sp²-karbon i aromatisk ring) og er ca. 10⁶ ganger surere enn etanol.
- Amider inneholder N, men er ikke basiske som aminer.
:::

## Test deg selv

:::sjekk[Hvorfor er eddiksyre ca. 10¹¹ ganger sterkere syre enn etanol?]
Acetationet har den negative ladningen delokalisert over to ekvivalente O-atomer (resonans), mens etoksidionet har ladningen lokalisert på ett O. Mer stabil konjugert base → sterkere syre (pKa ~5 mot ~16, dvs. ~11 enheter).
:::

:::sjekk[Hvorfor er trikloreddiksyre sterkere enn kloreddiksyre, og hvorfor er 2-kloretanol svakere syre enn kloreddiksyre?]
Tre Cl gir større samlet induktiv elektrontrekking enn én Cl og stabiliserer karboksylatet mer (pKa 0,7 mot 2,82). 2-kloretanol mangler resonansstabilisering av anionet (alkoksid), så selv med Cl er den langt svakere (pKa 14,3).
:::

:::sjekk[Hvorfor har C–N-bindingen i et amid begrenset rotasjon?]
N-elektronparet delokaliseres mot karbonylgruppen (resonans), slik at C–N får delvis dobbeltbindingskarakter. Amidgruppen blir plan og rotasjonen sterkt hindret – derfor er [peptidbindingen](/medod1/proteiner/teori/peptidbindingen) plan, noe som styrer proteiners sekundærstruktur.
:::

:::sjekk[Hvorfor gjennomgår benzen substitusjon og ikke addisjon som alkener?]
Ved addisjon ville to ring-C bli sp³ og det sammenhengende π-systemet brytes – den aromatiske stabiliseringen går tapt. Ved substitusjon (EAS) erstattes et H, og den aromatiske ringen bevares.
:::

:::sjekk[Er metylamin eller anilin den sterkeste basen? Begrunn.]
Metylamin. Metylgruppen er elektrondonerende og N-elektronparet er lokalisert. I anilin er elektronparet delvis delokalisert inn i benzenringen og mindre tilgjengelig for H⁺.
:::

:::sjekk[Hvorfor har sykloheksanolat ingen resonansstrukturer, mens fenoksid har fire?]
I sykloheksanolat er O⁻ bundet til et sp³-karbon. Elektroner kan ikke flyttes mot et sp³-atom (ingen p-orbital, allerede fullt oktett), så ladningen blir sittende på O. I fenoksid er O bundet til et sp²-karbon i ringen, og ladningen kan delokaliseres til de to orto-karbonene og para-karbonet (O + 3 C = fire strukturer).
:::

:::sjekk[Hvilken resonansstruktur av acetamid bidrar mest, og hvorfor er den andre likevel viktig?]
Den nøytrale CH₃–C(=O)–NH₂ bidrar mest: alle atomer har oktett og ingen formelle ladninger. Den ladningsseparerte ⁻O–C(CH₃)=NH₂⁺ er et mindre bidrag, men gir C–N delvis dobbeltbindingskarakter – derfor er amidet plant og N ikke basisk.
:::
