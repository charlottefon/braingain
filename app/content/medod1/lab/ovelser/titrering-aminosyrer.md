---
title: Titreranalyse av aminosyrer
summary: En ukjent aminosyre (glysin, glutamat, histidin eller lysin), 1,5 mmol i basisk løsning, titreres med 0,1 M HCl under pH-måling. Ekvivalenspunkter, bufferområder og pKa-verdier fra titreringskurven identifiserer aminosyren og gir pI.
category: ovelse
order: 3
tags: [titrering, aminosyrer, pKa, isoelektrisk punkt, buffer, Henderson-Hasselbalch, amfolytt, zwitterion, ekvivalenspunkt, pH-meter, byrette]
related:
  - generell-kjemi/teori/flerprotiske-syrer-og-aminosyrer
  - generell-kjemi/teori/buffere
  - generell-kjemi/regnetyper/titrering-aminosyre
  - generell-kjemi/regnetyper/isoelektrisk-punkt
  - generell-kjemi/regnetyper/protolyttfordeling
  - generell-kjemi/regnetyper/ph-svak-base-og-salt
  - proteiner/teori/aminosyrer
  - proteiner/aminosyrer/histidin
  - proteiner/aminosyrer/glutamat
  - proteiner/aminosyrer/lysin
  - proteiner/aminosyrer/glysin
  - cellebiologi/sammensatte-tema/blodets-ph-regulering-og-hyperventilering
sources:
  - file: medod1/material/cellebiologi/labhefte-medod1-262109--8060302.pdf
    pages: "21-30"
  - file: medod1/material/generell-kjemi/titrering-revidert-petri2020-1-1--7794025.pdf
  - file: medod1/material/generell-kjemi/3-titrering-av-aminosyrer--page-374063.html
  - file: medod1/material/generell-kjemi/eksperiment-2021--7793977.pdf
  - file: medod1/material/generell-kjemi/titrering-tegning--7793973.pdf
  - file: medod1/material/generell-kjemi/titrering-tegninger--7793987.pdf
  - file: medod1/material/generell-kjemi/fakedata-titrering--7793978.pdf
  - file: medod1/exercises/titrering-fasit-2021--7793988.pdf
  - file: medod1/exercises/fasit-til-labovelsen-titrering--page-374097.html
  - file: medod1/exercises/erstatningsoppgave-titrering-av-flerprotiske-syrer--assignment-120489.html
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
  - file: medod1/exams/2024-medod1-ny-v2024-med-svar--5897534.pdf
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
  - file: medod1/exams/2025-medod1-ny-v2025-med-svar--7269873.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2019-medod1-h2019-med-svar--2205960.pdf
fields:
  Øvelse nr: "3 (labhefte-modul 2)"
  Fag: Generell kjemi – syrer, baser og buffere (aminosyrer)
  Metode: Syre–base-titrering med byrette og kalibrert pH-meter
  Hva måles: pH som funksjon av tilsatt mmol HCl → ekvivalenspunkter, pKa, pI og identitet
---

## Formål

Labheftet: undersøke hvordan pH endres når en aminosyreløsning titreres med en **sterk syre**, og hvordan dette henger sammen med aminosyrers syre–base-egenskaper. Du skal lære å bruke **byrette og pH-meter**, lage og tolke en **titreringskurve**, bestemme **pKa-verdier** og bruke dem til å **identifisere en ukjent aminosyre**. Titrering gir både **kvalitativ** (hvilken aminosyre) og **kvantitativ** (hvor mye) informasjon.

## Bakgrunn og teori

Hver aminosyre har en α-karboksylgruppe og en α-aminogruppe på samme karbon, pluss en sidekjede. De har derfor minst to syre/base-grupper og er **flerprotiske** (teori: [flerprotiske syrer og aminosyrer](/medod1/generell-kjemi/teori/flerprotiske-syrer-og-aminosyrer), [buffere](/medod1/generell-kjemi/teori/buffere), [aminosyrer](/medod1/proteiner/teori/aminosyrer)). Helt protonert: –COOH og –NH₃⁺.

| Begrep | Definisjon (labheftet) |
|---|---|
| **Protolytt** | Form av en flerprotisk syre som bare varierer mhp. hvilke grupper som er (de)protonert |
| **Amfolytt** | Molekyl som kan være både syre og base (f.eks. HA-formen av alanin) |
| **Zwitterion** | Dipolar, men totalt nøytral forbindelse (–NH₃⁺ og –COO⁻) |
| **Buffer** | Blanding av svak syre og korresponderende base; motstår store pH-endringer |
| **Isoelektrisk punkt (pI)** | pH der aminosyren totalt sett er elektrisk nøytral – konsentrasjonen av nøytral form er maksimal |
| **Ekvivalenspunkt** | Tilsatt titrant = ekvivalent mengde av gruppen som titreres; pH-hopp |

**pKa** angir pH der protonert og deprotonert form av en gruppe er like store (1∶1). pH < pKa → gruppen er overveiende protonert; pH > pKa → deprotonert.

Alanin (toprotisk) som modell:

$$\ce{H2A+ + H2O <=> H3O+ + HA} \qquad K_{a1} = 4{,}6\cdot10^{-3},\ pK_{a1} = 2{,}34$$
$$\ce{HA + H2O <=> H3O+ + A-} \qquad K_{a2} = 2{,}0\cdot10^{-10},\ pK_{a2} = 9{,}69$$

```smiles-row
C[C@H]([NH3+])C(=O)O | H₂A⁺ (kation, syre) – L-alanin
C[C@H]([NH3+])C(=O)[O-] | HA (zwitterion, amfolytt)
C[C@H](N)C(=O)[O-] | A⁻ (anion, base)
```

**Titreringskurvens faser** (H₂A⁺ titrert med NaOH – labheftets tekstboks):

| Område | Dominerende form | pH bestemmes av |
|---|---|---|
| 1. Før tilsetning | H₂A⁺ (svak syre) | $[\ce{H3O+}] = \sqrt{K_{a1}\,[\ce{H2A+}]}$ |
| 2. Bufferområde 1 | H₂A⁺ / HA | $pH = pK_{a1} + \log\frac{[\ce{HA}]}{[\ce{H2A+}]}$; halvveis til ekv.pkt. 1: $pH = pK_{a1}$ |
| 3. Ekvivalenspunkt 1 | HA (amfolytt) | $pH = \frac{pK_{a1}+pK_{a2}}{2} = pI$ |
| 4. Bufferområde 2 | HA / A⁻ | $pH = pK_{a2} + \log\frac{[\ce{A-}]}{[\ce{HA}]}$; midt mellom ekv.pkt. 1 og 2: $pH = pK_{a2}$ |
| 5. Ekvivalenspunkt 2 | A⁻ (svak base) | $K_b = \frac{[\ce{HA}][\ce{OH-}]}{[\ce{A-}]}$, $K_b = K_w/K_{a2}$ ([svak base](/medod1/generell-kjemi/regnetyper/ph-svak-base-og-salt)) |
| 6. Etter ekv.pkt. 2 | Overskudd OH⁻ (sterk base) | $pH = 14 - pOH$ |

Typiske pKa-områder: α-karboksyl **1,8–2,4**, α-amino **8,8–10,8**; sidekjeder fra ca. **3,9 (Asp)** til **12,48 (Arg)**.

**Praktiske vs. tabellverdier**: målte pKa avviker fra tabell (termodynamiske) verdier fordi tabellverdiene gjelder ionestyrke ≈ 0 (uendelig fortynning). Labheftets eksempel for glysin: praktisk ca. 9,5 vs. 9,97 og ca. 2,8 vs. 2,35.

## Prinsipp

Man starter med aminosyren i **helt basisk form** (alle grupper deprotonert, pluss et lite baseoverskudd) og tilsetter **0,1 M HCl** i små porsjoner – altså **motsatt vei** av teorieksempelet. Hver gruppe tar opp ett proton i tur og orden, fra høyest til lavest pKa. Fordi prøven inneholder **1,5 mmol** aminosyre og HCl er 0,1 M, tilsvarer **én ekvivalent = 1,5 mmol = 15 mL HCl**. Antall ekvivalenter (2 eller 3 grupper), plasseringen av pH-hopp og pKa-verdiene avslører aminosyren.

| Aminosyre | pKa₁ (α-COOH) | pKa₂ (α-NH₃⁺) | pKa₃ (sidekjede) | pI |
|---|---|---|---|---|
| Glysin | 2,34 | 9,60 | – | 5,97 |
| Glutaminsyre | 2,19 | 9,67 | 4,25 | 3,22 |
| Lysin | 2,18 | 8,95 | 10,53 | 9,74 |
| Histidin | 1,82 | 9,17 | 6,00 | 7,59 |

*Tabellen er den faglærer bruker i fasiten (Calgary-tabell). Labheftet oppgir litt andre verdier i teksten (Glu: α-COOH 2,23, γ-COOH 4,42; Lys: α-amino 9,2, ε-amino 10,7; His sidekjede ≈ 6) – forskjellen skyldes ulike tabellkilder.*

**pI** beregnes som gjennomsnittet av de to pKa-verdiene som omgir den nøytrale formen ([isoelektrisk punkt](/medod1/generell-kjemi/regnetyper/isoelektrisk-punkt)):
- Glysin: $(2{,}34 + 9{,}60)/2 = 5{,}97$
- Glutaminsyre (sur sidekjede): $(2{,}19 + 4{,}25)/2 = 3{,}22$
- Lysin (basisk sidekjede): $(8{,}95 + 10{,}53)/2 = 9{,}74$
- Histidin: $(6{,}00 + 9{,}17)/2 = 7{,}59$

## Utstyr og reagenser

| Utstyr | Kjemikalier/løsninger |
|---|---|
| Byrette, 50 mL | Ukjent aminosyre: **1,5 mmol** merket A, B, C eller D (inneholder et **baseoverskudd**) |
| pH-meter med instruksjoner | Standardbuffer **pH 7,0** og **pH 4,0** |
| Magnetrører + liten magnet | **0,1 M HCl** |
| Begerglass | dH₂O (sprutflaske) |

Praktisk fra gjennomgangen: elektroden skal være dekket av væske, magneten skal **ikke** treffe elektroden, magneten tas ut **før** væsken helles i vasken, elektroden settes i **3 M KCl** når du er ferdig eller tar pause. Man jobber to og to.

## Fremgangsmåte

1. Fyll byretten med litt vann og fjern luftbobler (som på innføringskurset). La litt vann bli igjen.
2. Skyll byretten **2 × med ca. 10 mL HCl** for å fjerne resten av vannet, og fyll den med **50 mL HCl**.
3. **Kalibrer pH-meteret** med standardbufferne (pH 7,0 og 4,0) etter bruksanvisningen.
4. Skyll elektroden med dH₂O (sprutflaske) mellom hver løsning.
5. Før elektroden forsiktig ned langs kanten av begerglasset med aminosyreløsningen; magneten må ikke slå borti elektroden. Still byretten så syren drypper rett ned i begerglasset. Løsningen må dekke den **porøse pluggen** på elektroden. Rolig omrøring.
6. Tilsett **0,1 M HCl i 0,5 mL-porsjoner** og noter pH. Ved **første avlesning** (startpunktet): vent **minst 3 minutter** til elektroden er ekvilibrert. Deretter ca. **10 sekunder** per avlesning.
7. Plott pH mot tilsatt HCl i diagramarket. Les av:
   - **Ekvivalenspunkter** – midt på fallområdet, eller $(pK_{a1}+pK_{a2})/2$
   - **Bufferområder** – fra kurven flater ut til den faller på nytt
   - **pKa-verdier** – midt i bufferområdet
8. Bestem aminosyren ut fra kurvens form og pKa-verdiene, finn deretter teoretiske verdier og pI.

Titreringen er fullført når du har tilsatt ca. **3 × mengden aminosyre** (45 mL), med mindre du er sikker på at det bare er to grupper.

## Beregninger

:::eksempel[Omregning volum → mmol og forventede ekvivalenspunkter]
$n(\ce{HCl}) = c \cdot V = 0{,}1\ \text{mmol/mL} \cdot V$ (mL). 15 mL → 1,5 mmol = 1 ekvivalent.

Forventet (uten baseoverskudd): ekv.pkt. ved ca. **15 mL** (1,5 mmol), **30 mL** (3,0 mmol) og ev. **45 mL** (4,5 mmol). pKa-verdiene leses av halvveis: ca. **7,5 mL**, **22,5 mL** og **37,5 mL**. Baseoverskuddet forskyver hele kurven litt mot høyre – avstanden **mellom** to ekvivalenspunkter tilsvarer alltid mengden aminosyre.
:::

:::eksempel[Analyse av «fake data» (histidin, fra faglærer)]
Dette er **faglærers simulerte datasett** (fakedata-titrering, gitt til studenter med gyldig fravær) – ikke oppdiktet her. Utvalgte målepunkter (mL 0,1 M HCl → pH):

| mL | pH | | mL | pH | | mL | pH |
|---|---|---|---|---|---|---|---|
| 0 | 12,31 | | 15 | 7,68 | | 29,5 | 4,71 |
| 3 | 10,63 | | 18 | 6,85 | | 30 | 4,34 |
| 7 | 9,85 | | 22 | 6,11 | | 31 | 3,70 |
| 10 | 9,38 | | 25 | 5,69 | | 35 | 2,65 |
| 14 | 8,54 | | 29 | 5,18 | | 37 | 2,50 |
| 14,5 | 8,01 | | | | | 50 | 1,75 |

1. **Ekvivalenspunkt 1**: brattest fall mellom 14 og 15 mL → ca. **14,5 mL = 1,45 mmol**, pH ≈ 8,0.
2. **Ekvivalenspunkt 2**: brattest fall mellom 29 og 30,5 mL → ca. **29,75 mL ≈ 3,0 mmol**, pH ≈ 4,5.
3. Avstand mellom ekv.pkt.: 29,75 − 14,5 ≈ 15 mL = **1,5 mmol** = mengden aminosyre ✔.
4. **pKa (α-amino)**: midt i første bufferområde, ca. 7,25 mL → **pH ≈ 9,8**.
5. **pKa (sidekjede)**: midt mellom ekv.pkt. 1 og 2, ca. 22 mL → **pH ≈ 6,1**.
6. **pKa (α-karboksyl)**: ca. 7,5 mL etter ekv.pkt. 2 (ca. 37 mL) → **pH ≈ 2,5** – usikker, fordi overskudd av HCl begynner å bestemme pH; tredje ekvivalenspunkt (ca. 45 mL) synes ikke.
7. **Identifikasjon**: to tydelige pH-hopp med et bufferområde rundt **pH 6** imellom → **histidin** (imidazol, pKa ≈ 6).
8. **pI** = gjennomsnittet av pKa-verdiene på hver side av den nøytrale formen: $(6{,}1 + 9{,}8)/2 \approx$ **8,0** (teoretisk 7,59). pI = pH ved ekvivalenspunkt 1.

| | Målt | Teoretisk |
|---|---|---|
| pKa α-karboksyl | ≈ 2,5 | 1,82 |
| pKa α-amino | ≈ 9,8 | 9,17 |
| pKa sidekjede | ≈ 6,1 | 6,00 |
| pI | ≈ 8,0 | 7,59 |

Avvikene skyldes ionestyrke (tabellverdier gjelder uendelig fortynning) og avlesningsusikkerhet.
:::

:::eksempel[Eksamensklassikeren: 50,0 mL 0,100 M H₂A⁺ (alanin) titrert med 0,100 M NaOH]
$pK_{a1} = 2{,}34$, $pK_{a2} = 9{,}70$ (fra $K_a$ 4,6·10⁻³ og 2,0·10⁻¹⁰). $n(\text{alanin}) = 5{,}0$ mmol → ekv.pkt. 1 ved 50 mL, ekv.pkt. 2 ved 100 mL. Tabellen dekker alle svaralternativene som har gått igjen (2,16 / 2,52 / 2,71 / 9,52 / 9,88):

| NaOH (mL) | mmol OH⁻ | Situasjon | pH |
|---|---|---|---|
| 20,0 | 2,0 | Buffer 1: 3,0 H₂A⁺ / 2,0 HA | $2{,}34 + \log\frac{2}{3} = 2{,}16$ |
| 25,0 | 2,5 | Halvveis til ekv.pkt. 1 | $pK_{a1} = 2{,}34$ |
| 30,0 | 3,0 | Buffer 1: 2,0 H₂A⁺ / 3,0 HA | $2{,}34 + \log\frac{3}{2} = 2{,}52$ |
| 35,0 | 3,5 | Buffer 1: 1,5 H₂A⁺ / 3,5 HA | $2{,}34 + \log\frac{3{,}5}{1{,}5} = 2{,}71$ |
| 50,0 | 5,0 | Ekv.pkt. 1, amfolytt | $\frac{2{,}34+9{,}70}{2} = 6{,}02$ |
| 70,0 | 7,0 | Buffer 2: 3,0 HA / 2,0 A⁻ | $9{,}70 + \log\frac{2}{3} = 9{,}52$ |
| 75,0 | 7,5 | Halvveis mellom ekv.pkt. | $pK_{a2} = 9{,}70$ |
| 80,0 | 8,0 | Buffer 2: 2,0 HA / 3,0 A⁻ | $9{,}70 + \log\frac{3}{2} = 9{,}88$ |
| 100,0 | 10,0 | Ekv.pkt. 2: 5,0 mmol A⁻ i 150 mL | se under |

(Henderson–Hasselbalch med mmol er eksamensmetoden; i buffer 1 er den bare en tilnærming fordi [H₃O⁺] ikke er neglisjerbar ved pH ≈ 2. Mer: [titrering av toprotisk aminosyre](/medod1/generell-kjemi/regnetyper/titrering-aminosyre).)

Ekv.pkt. 2: $[\ce{A-}] = 5{,}0/150 = 0{,}0333$ M; $K_b = \frac{10^{-14}}{2{,}0\cdot10^{-10}} = 5{,}0\cdot10^{-5}$

$[\ce{OH-}] = \sqrt{5{,}0\cdot10^{-5}\cdot 0{,}0333} = 1{,}29\cdot10^{-3}$ M → $pOH = 2{,}89$ → **pH = 11,11**

(Merk: det er 5 mmol A⁻, ikke 10 – faglærer rettet nettopp dette i videoen.)
:::

:::feil
- Tell mmol, ikke mL, når du setter inn i Henderson–Hasselbalch – forholdet blir det samme fordi volumet er felles.
- Etter ekv.pkt. 1 er det **HA** som er syren og **A⁻** basen. Bruk $pK_{a2}$, ikke $pK_{a1}$. Svaralternativet 9,88 får man ved å snu forholdet (3/2 i stedet for 2/3).
- pI for aminosyrer med ladet sidekjede er **ikke** gjennomsnittet av α-pKa-ene; bruk de to pKa-ene som omgir den nøytrale formen.
:::

## Forventede resultater og tolkning

Titrert **fra basisk mot surt** med 0,1 M HCl (1,5 mmol aminosyre, ekvivalent ≈ 15 mL). Basert på labheftets kurver og faglærers fasittegninger:

| Aminosyre | Kurvens form | Ekvivalenspunkter | Bufferområder (pKa) |
|---|---|---|---|
| **Glysin** | Ett tydelig, stort pH-hopp | ca. 15 mL (pH ≈ (2,3 + 9,6)/2 ≈ 6) – skarpt; ca. 30 mL (ingen tydelig knekk, pH ≈ 2) | ≈ 9,6 (α-amino) og ≈ 2,3 (α-COOH) |
| **Glutamat** | Hopp ved 15 mL, deretter lang skrånende sone mot lav pH | ca. 15 mL (pH ≈ (4,3 + 9,7)/2 ≈ 7); ekv.pkt. mellom de to karboksylgruppene **«forsvinner»** (pKa 2,2 og 4,3 ligger for tett) | ≈ 9,7 (α-amino), ≈ 4,3 (γ-COOH), ≈ 2 (α-COOH) |
| **Histidin** | **To** tydelige hopp | ca. 15 mL (pH ≈ (6,0 + 9,2)/2 ≈ 7,6; fake data ≈ 8) og ca. 30 mL (pH ≈ (1,8 + 6,0)/2 ≈ 3,9; fake data ≈ 4,5) | ≈ 9,2–9,8 (α-amino), **≈ 6 (imidazol)**, ≈ 2 (α-COOH) |
| **Lysin** | Lang, svakt skrånende sone fra pH ≈ 11 til ≈ 8,5, så **ett stort hopp** ved ca. 30 mL | ekv.pkt. mellom de to aminogruppene **synes ikke** (pKa 8,95 og 10,53 for tett); stort hopp ved 30 mL (pH ≈ (2,2 + 9,0)/2 ≈ 5,6) | ≈ 10,5 (ε-amino) og ≈ 9 (α-amino) smelter sammen; ≈ 2 (α-COOH) |

**Nøkkel til identifikasjon:**
- Stort hopp ved **15 mL** → bare én basisk gruppe titreres før hoppet: glysin eller glutamat. Lang buffersone under pH 5 (to sure grupper) → **glutamat**.
- Stort hopp ved **30 mL** med bred basisk buffersone før → to basiske grupper: **lysin**.
- To hopp med buffer rundt **pH 6** imellom → **histidin**.

**Dominerende former ved pH 7** (spørsmål i labheftet; regnemetode: [protolyttfordeling](/medod1/generell-kjemi/regnetyper/protolyttfordeling); se også [histidin](/medod1/proteiner/aminosyrer/histidin), [glutamat](/medod1/proteiner/aminosyrer/glutamat), [lysin](/medod1/proteiner/aminosyrer/lysin)):

```smiles-row
[NH3+]C(Cc1c[nH]cn1)C(=O)[O-] | His: netto 0 (imidazol overveiende uladet, pKa 6 < 7)
[NH3+]C(CCC(=O)[O-])C(=O)[O-] | Glu: netto −1
[NH3+]CCCCC([NH3+])C(=O)[O-] | Lys: netto +1
```

Logikk: ved pH 7 er alle karboksylgrupper deprotonert (pKa 2–4 < 7) og alle aminogrupper protonert (pKa 9–10,5 > 7). Histidins imidazol (pKa 6) er overveiende **uprotonert** ved pH 7, men en betydelig andel (ca. 10 %) er protonert – derfor kan histidin skifte ladning under fysiologiske betingelser.

## Feilkilder

- pH-meteret ikke (riktig) kalibrert; elektroden ikke ekvilibrert ved start (< 3 min).
- Avlest for fort etter tilsetning (< 10 s), eller porøs plugg ikke dekket av væske.
- Luftbobler i byretten eller vann igjen i den (fortynner HCl – derfor skylles den 2 × med HCl).
- Magneten slår borti elektroden; for kraftig omrøring.
- Feil avlesning av byretten (parallakse).
- **Grove 0,5 mL-trinn** – ekvivalenspunktet og midtpunktene blir unøyaktige.
- **Baseoverskuddet** i prøven forskyver første del av kurven.
- Ved lav pH (< ca. 2,5) dominerer overskudd av H⁺ fra HCl, så α-COOH-pKa og siste ekvivalenspunkt blir usikre.
- Ionestyrke → systematisk avvik fra tabellverdier.

## Klinisk relevans

- **Buffere**: aminosyrer og proteiner buffrer i kroppen; samme Henderson–Hasselbalch-logikk brukes for blodets bikarbonatbuffer. Se [Henderson–Hasselbalch](/medod1/generell-kjemi/regnetyper/henderson-hasselbalch) og [blodets pH-regulering](/medod1/cellebiologi/sammensatte-tema/blodets-ph-regulering-og-hyperventilering).
- **Histidin** er den eneste aminosyren med sidekjede som skifter ladning ved fysiologisk pH (pKa ≈ 6) – derfor er den ofte med i **enzymers katalytiske seter** og i hemoglobinets bufferkapasitet.
- **pI og ladning** bestemmer proteiners løselighet og oppførsel ved elektroforese/ionebytte: ved pH > pI er proteinet negativt ladet, ved pH < pI positivt. Se [aminosyrer](/medod1/proteiner/teori/aminosyrer) og [MS og myelin](/medod1/cellebiologi/sammensatte-tema/multippel-sklerose-og-myelin) (MBP, pI ≈ 11).

## Typiske eksamensspørsmål

:::eksamen
**Alanintitreringen er en gjenganger**: «50,0 mL 0,1 M protonert alanin (H₂A⁺) titreres med 0,1 M NaOH. $K_{a1}$ = 4,6·10⁻³, $K_{a2}$ = 2,0·10⁻¹⁰. Beregn pH etter tilsetting av x mL NaOH.»

| Eksamen | x | Svar |
|---|---|---|
| v2019, v2020, h2024, v2025, h2025 | 70 mL | **9,52** |
| h2019 | 80 mL | **9,88** |
| v2024 | 30 mL | **2,52** (før ekv.pkt. 1 – bruk $pK_{a1}$!) |
| h2023 | 5,0 mL prøve, 7,0 mL NaOH | **9,52** (samme forhold, 1/10 av volumene) |

Fremgangsmåte: sammenlign mmol OH⁻ med 5,0 mmol (første ekvivalent). Under 5,0 → buffer 1 med $pK_{a1}$; over 5,0 → overskuddet er mmol A⁻, resten HA, bruk $pK_{a2}$. Varianter med fenylalanin (h2021, h2022) løses likt.

Andre vinkler:
- Énprotisk syre titrert med NaOH, oppgitt ekvivalenspunkt (h2020, h2021): beregn n(HA) fra ekvivalenspunktet, deretter HH.
- pI og ladning: «Protein med pI = 11,0 ved pH 10?» → positivt ladet (h2023).
- Kortsvar: tegn/forklar titreringskurven, marker pKa, ekvivalenspunkt og pI; forklar hvorfor ekvivalenspunkt forsvinner for Glu/Lys.
:::

## Test deg selv

:::sjekk[Du har 1,5 mmol aminosyre og titrerer med 0,1 M HCl. Hvorfor kommer pH-hoppene med ca. 15 mL mellomrom?]
Hver syre/base-gruppe tar opp 1 mol H⁺ per mol aminosyre. 1,5 mmol / 0,1 mmol/mL = 15 mL HCl per ekvivalent. Avstanden mellom to ekvivalenspunkter tilsvarer derfor mengden aminosyre, uavhengig av baseoverskuddet i starten.
:::

:::sjekk[Hvorfor ser man ikke ekvivalenspunktet mellom de to aminogruppene i lysin?]
pKa for α-amino (≈ 9) og ε-amino (≈ 10,5) ligger så nær hverandre at bufferområdene overlapper. Det blir ingen sone der én form dominerer nesten 100 %, og dermed ikke noe tydelig pH-hopp – kurven blir én lang, skrånende buffersone fram til ca. 30 mL.
:::

:::sjekk[Hva er pH ved første ekvivalenspunkt for alanin, og hvorfor er det lik pI?]
$pH = (pK_{a1} + pK_{a2})/2 = (2{,}34 + 9{,}69)/2 ≈ 6{,}02$. Her er nesten all alanin i amfolyttformen HA (zwitterion); de små mengdene H₂A⁺ og A⁻ er like store og opphever hverandre i ladning – netto ladning 0, som er definisjonen på pI.
:::

:::sjekk[Kurven har to tydelige pH-hopp, og mellom dem en buffersone rundt pH 6. Hvilken aminosyre er det, og hva er pI?]
Histidin – imidazolsidekjeden har pKa ≈ 6. pI ligger mellom imidazol-pKa og α-amino-pKa: $(6{,}00 + 9{,}17)/2 ≈ 7{,}6$.
:::

:::sjekk[Hvorfor avviker målte pKa-verdier fra tabellverdiene?]
Tabellverdiene er termodynamiske verdier for ionestyrke ≈ 0 (uendelig fortynning). I labløsningen er ionestyrken høyere (salter, baseoverskudd, HCl), som endrer aktivitetene. I tillegg gir 0,5 mL-trinn, elektrodens ekvilibrering og avlesning usikkerhet.
:::

:::sjekk[Hvordan foreligger glutaminsyre ved pH 7, og hva er nettoladningen?]
Begge karboksylgruppene er deprotonert (pKa 2,2 og 4,3 < 7) og aminogruppen er protonert (pKa 9,7 > 7): ⁺H₃N–CH(CH₂CH₂COO⁻)–COO⁻, nettoladning −1.
:::
