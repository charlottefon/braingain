---
title: Enzymkinetikk og hemming
type: page
order: 3
summary: Michaelis–Menten (Km, Vmax, kcat, kcat/Km), Lineweaver–Burk, alle hemmingstypene i én sammenligningstabell (inkl. ukompetitiv hemming og metotreksat) og eksamensnære regneeksempler.
---

## Grunnbegreper

- **Reaksjonshastighet** $v = -\frac{d[A]}{dt}$ – stoffmengde omsatt per tidsenhet.
- **0. ordens kinetikk:** v er uavhengig av konsentrasjonen. **1. ordens:** v er proporsjonal med konsentrasjonen. 2. orden: to molekyler reagerer.
- **Initialhastighet, V₀**: hastigheten målt tidligst mulig etter start (stigningen i begynnelsen av produkt–tid-kurven), mens [P] ≈ 0 og [S] ≈ startkonsentrasjonen – ikke ved likevekt.

V₀ øker **hyperbolsk** med [S]: lineært ved lav [S] (1. orden), flater ut mot et maksimum ved høy [S] (0. orden).

## Michaelis–Menten-modellen

$$E + S \underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} ES \xrightarrow{k_2\,=\,k_{cat}} E + P$$

$$V_0 = V_{max}\,\frac{[S]}{K_M + [S]}$$

### Utledning i hovedtrekk (ikke pensum å pugge)

1. **Initialhastighet:** [P] ≈ 0, så tilbakereaksjonen fra E + P neglisjeres. Da er $V_0 = k_2[ES]$.
2. **Steady state:** [ES] er konstant – dannelseshastighet = nedbrytningshastighet: $k_1[E][S] = (k_{-1} + k_2)[ES]$.
3. **Enzymbevaring:** $[E]_T = [E] + [ES]$ (totalmengden enzym er konstant), og [S] ≫ [E]_T.
4. Definer $K_M = \frac{k_{-1} + k_2}{k_1}$ og løs for [ES]: $[ES] = \frac{[E]_T[S]}{K_M + [S]}$.
5. Når alt enzym er mettet ($[ES] = [E]_T$) er $V_{max} = k_2[E]_T$. Innsatt gir dette Michaelis–Menten-ligningen.

### Tolkning av parametrene

| Parameter | Definisjon | Tolkning |
|---|---|---|
| **Vmax** | Hastigheten når **alle aktive seter er mettet** med substrat ([ES] = [E]_T) | Proporsjonal med enzymmengden: $V_{max} = k_{cat}[E]_T$ |
| **Km** | **[S] som gir V₀ = ½ Vmax** (enhet: konsentrasjon) | Omvendt mål på affinitet: **lav Km = høy affinitet**. Når k₋₁ ≫ k₂ er Km ≈ Kd for ES |
| **kcat** | $k_{cat} = V_{max}/[E]_T$ (s⁻¹) | **Omsetningstall (turnover number):** antall substratmolekyler ett enzymmolekyl omdanner per sekund når det er mettet |
| **kcat/Km** | Katalytisk effektivitet (M⁻¹s⁻¹) | Hastighetskonstanten ved lav [S]: $v = \frac{k_{cat}}{K_M}[E]_T[S]$. Øvre grense er **diffusjonsgrensen ~10⁸–10⁹ M⁻¹s⁻¹** |

### Grensetilfeller

| [S] | V₀ | Orden |
|---|---|---|
| [S] ≪ Km | $\approx \frac{V_{max}}{K_M}[S]$ – proporsjonal med [S] | 1. orden – dobbel [S] gir dobbel V₀ |
| [S] = Km | ½ Vmax | |
| [S] = 4 Km | 0,8 Vmax | |
| [S] ≫ Km | ≈ Vmax – uavhengig av [S] | 0. orden |

:::feil
- Km er en **konsentrasjon**, ikke en hastighet (felle: «Km = ½ Vmax»).
- Vmax er ikke «hastigheten ved høyeste [S] man klarer å lage» – det er den teoretiske grenseverdien når alle seter er mettet. En MM-kurve når aldri helt Vmax; les Km av ved ½ av den **ekstrapolerte** Vmax.
- Dobbelt så mye enzym → dobbel Vmax, men **uendret Km**.
- V₀ = ½ Vmax **bare** når [S] = Km for *det enzymet* – sjekk alltid hvilket enzym (villtype/mutant) konsentrasjonen hører til.
:::

Eksempler fra forelesningen (Miesfeld & McEvoy, tabell 7.5):

| Enzym | Substrat | kcat (s⁻¹) | Km (M) | kcat/Km (M⁻¹s⁻¹) |
|---|---|---|---|---|
| Acetylkolinesterase | Acetylkolin | 1,4·10⁴ | 9,0·10⁻⁵ | 1,5·10⁸ |
| Karbonsyreanhydrase | CO₂ | 1,0·10⁶ | 1,2·10⁻² | 8,3·10⁷ |
| Katalase | H₂O₂ | 4,0·10⁷ | 1,1 | 3,6·10⁷ |
| Fumarase | Fumarat | 8,0·10² | 5,0·10⁻⁶ | 1,6·10⁸ |
| Urease | Urea | 1,0·10⁴ | 2,5·10⁻² | 4,0·10⁵ |

Karbonsyreanhydrase omsetter ~10⁶ CO₂ per sekund per enzymmolekyl (eksamen H2024). Katalase (i [peroksisomene](/medod1/cellebiologi/organeller/peroksisomer)) har høyest kcat, men svært høy Km.

## Lineweaver–Burk (dobbelt-resiprok plott)

Ta den inverse av begge sider:

$$\frac{1}{V_0} = \frac{K_M}{V_{max}}\cdot\frac{1}{[S]} + \frac{1}{V_{max}}$$

Plott 1/V₀ (y) mot 1/[S] (x) → **rett linje** (y = ax + b):

| Punkt | Verdi |
|---|---|
| Skjæring med y-aksen | **1/Vmax** |
| Skjæring med x-aksen | **−1/Km** |
| Stigningstall | **Km/Vmax** |

Fordel: rett linje gjør det lettere å lese av Km og Vmax nøyaktig og å se **hvilken type hemming** som foreligger (kollokvieoppgave 5: forskjellene ses lettere i LB enn i MM-plottet).

## Hemmingstypene samlet

α = 1 + [I]/K_i, der K_i er hemmerens dissosiasjonskonstant (jo lavere K_i, jo sterkere hemmer).

Enzymer 2 bruker navnene **kompetitiv**, **unkompetitiv** (= ukompetitiv) og **mikset** hemming. **Nonkompetitiv** (= ikke-kompetitiv) er mikset hemming der hemmeren binder E og ES like godt. Ved mikset hemming beskriver **K_i** bindingen til fritt E og **K_i′** bindingen til ES (lavere verdi = sterkere binding). Km øker hvis K_i < K_i′, minker hvis K_i′ < K_i, og er uendret når **K_i = K_i′ (nonkompetitiv)**.

| Type | Binder til | Mekanisme | Km (tilsynelatende) | Vmax (tilsynelatende) | Lineweaver–Burk | Opphevet av høy [S]? | Eksempel |
|---|---|---|---|---|---|---|---|
| **Kompetitiv** | Bare fritt **E**, i aktivt sete | Konkurrerer med S | **↑** (α·Km) | **Uendret** | Linjene skjærer **samme punkt på y-aksen**; brattere; x-skjæring nærmere 0 | **Ja** | Etanol/fomepizol ved metanolforgiftning; **metotreksat** (folatanalog) på DHFR; HIV-proteasehemmere; transisjonstilstandsanaloger |
| **Ukompetitiv** (unkompetitiv) | Bare **ES**, vanligvis nær aktivt sete | Låser S i ES | **↓** (Km/α) | **↓** (Vmax/α) | **Parallelle** linjer (samme stigning); y- og x-skjæring flyttes | Nei | (sjelden; vanligst ved flere substrater) |
| **Ikke-kompetitiv (ren)** (nonkompetitiv; mikset med K_i = K_i′) | **E og ES like godt**, annet sete | Gjør en andel enzym inaktivt | **Uendret** | **↓** (Vmax/α) | Linjene skjærer **samme punkt på x-aksen** (−1/Km); høyere y-skjæring | Nei | Salicylat på glutamatdehydrogenase (kollokvie) |
| **Blandet** (mikset) | E og ES, **ulik affinitet** (K_i ≠ K_i′) | Kombinasjon | **↑ eller ↓** | **↓** | Linjene skjærer **til venstre for y-aksen**, over eller under x-aksen | Nei | |
| **Irreversibel** | Kovalent, oftest aktivt sete | Fjerner aktivt enzym permanent | Uendret (for gjenværende enzym) | **↓** | Som ikke-kompetitiv (høyere y-skjæring) | Nei – heller ikke ved dialyse | Penicillin (suicidal hemmer), DFP/DIPF, klavulansyre |

:::husk
**K**ompetitiv → **K**m endres (↑). **Ikke-kompetitiv** → bare Vmax (↓). **Ukompetitiv** → begge ↓ (forholdet Km/Vmax og dermed LB-stigningen uendret). På en MM-kurve: kompetitiv hemmer når **samme Vmax** ved høy [S]; ikke-kompetitiv flater ut på et **lavere platå** (og er derfor «mest effektiv ved høy [S]» relativt sett).
:::

### Ukompetitiv hemming i detalj

Hemmeren binder **bare ES**: $ES + I \rightleftharpoons ESI$, og ESI gir ikke produkt.

$V_0 = \frac{V_{max}}{\alpha}\cdot\frac{[S]}{\frac{K_M}{\alpha} + [S]}$

- **Vmax,app = Vmax/α** (↓) og **Km,app = Km/α** (↓) – begge med samme faktor.
- **Km/Vmax er uendret** → samme stigning i Lineweaver–Burk → **parallelle linjer**, der linjen med hemmer ligger høyere (y-skjæring 1/Vmax øker, x-skjæring −1/Km flyttes lenger fra origo).
- Km synker fordi binding til ES trekker likevekten E + S ⇌ ES mot høyre – tilsynelatende høyere affinitet.
- Virker **også ved svært høy [S]** (mer ES = flere bindingssteder for hemmeren). Felle (H2020): «ved veldig høye [S] gir ukompetitive hemmere ikke lavere hastighet» er **feil**.

:::eksempel[Metotreksat – kompetitiv hemming i praksis (H2020)]
MTX ligner folat og konkurrerer med dihydrofolat om aktivt sete i dihydrofolatreduktase (DHFR). Ved samme [MTX] er aktiviteten derfor **høyere ved 100 µM enn ved 10 µM dihydrofolat**: mer substrat fortrenger hemmeren (Km,app ↑, Vmax uendret). MTX er en **reversibel** hemmer, i motsetning til penicillin og DIPF (V2020).
:::

Mer om regulering (allosteri, kovalent modifikasjon, zymogener, isoenzymer) og de kliniske eksemplene: [Hemming og regulering av enzymer](/medod1/proteiner/teori/enzymregulering).

### Allosteriske enzymer følger ikke MM

Allosteriske, kooperative enzymer gir en **sigmoid** v₀–[S]-kurve (som O₂-binding til hemoglobin). Km og Lineweaver–Burk gjelder ikke direkte; man bruker [S]₀,₅ (substratkonsentrasjonen ved ½ Vmax). I kollokvieoppgave 6 øker v fra 50 til 250 når [S] går fra 0,5 til 2,0 mM og flater ut mot ~450 – den bratte midtdelen er kooperativiteten.

## Regneeksempler

:::eksempel[1. Hvor stor [S] gir 80 % av Vmax? (kollokvie 4)]
$0{,}80\,V_{max} = V_{max}\frac{[S]}{K_M + [S]}$
$0{,}80 K_M + 0{,}80[S] = [S]$ ⇒ $0{,}20[S] = 0{,}80 K_M$ ⇒ **[S] = 4 Km**.
Biologisk: ved [S] ≫ Km er nesten alle aktive seter opptatt; å øke [S] ytterligere gir lite, fordi enzymet er nær metning.
:::

:::eksempel[2. Hastighet med og uten kompetitiv hemmer (V2026, 2 p)]
Km = 4 mM, Vmax = 120 µmol/min, [S] = 2 mM.
Uten hemmer: $V_0 = 120 \cdot \frac{2}{4 + 2} = $ **40 µmol/min**.
Kompetitiv hemmer øker Km til 8 mM (Vmax uendret): $V_0 = 120\cdot\frac{2}{8+2} = $ **24 µmol/min**.
:::

:::eksempel[3. Finn [S] (V2025, 2 p)]
Km = 2 mM, Vmax = 90 µmol/min. Hvilken [S] gir v = 30?
$30 = 90\frac{[S]}{2 + [S]}$ ⇒ $60 + 30[S] = 90[S]$ ⇒ **[S] = 1 mM**.
Snarvei: v/Vmax = 1/3 ⇒ [S]/(Km + [S]) = 1/3 ⇒ [S] = Km/2.
Generelt: $[S] = K_M\cdot\frac{v}{V_{max}-v}$.
:::

:::eksempel[4. Finn Km fra data (V2026)]
Vmax ≈ 80 µmol/min. Data: 1 mM → 20; 2 mM → 39; 10 mM → 75; 20 mM → 76.
½ Vmax = 40 nås ved ca. **2 mM** ⇒ Km ≈ 2 mM. (Tilsvarende H2024: Vmax 100 og v₀ = 50 ved 5 mM ⇒ Km = 5 mM.)
:::

:::eksempel[5. Villtype vs mutant (gjenganger)]
Villtype: Vmax 100 µmol/min, Km 5 mM. Mutant: Vmax 50, Km 10 mM.
Mutanten ved [S] = 10 mM (= dens egen Km): v = ½ · 50 = **25 µmol/min**. (Variant V2024: villtype Km 25 mM, Vmax 100 → v = 50 ved [S] = 25 mM; mutant med Km 20 mM har *høyere* affinitet.)
Mutanten har **lavere** affinitet (høyere Km). Ingen av dem endrer likevekten.
:::

:::eksempel[6. Identifiser hemmingstypen (kollokvie 5: salicylat og glutamatdehydrogenase)]
Uten hemmer: [S] = 100 mM → 40; 150 → 50; 300 → 66,67 µmol/min. Prøv Vmax = 100, Km = 150 mM: $100\cdot\frac{150}{300} = 50$ ✓, $100\cdot\frac{300}{450} = 66{,}7$ ✓.
Med 40 mM salicylat er **alle hastigheter 0,70 × verdiene uten hemmer** (f.eks. 35 mot 50 ved 150 mM).
⇒ **Km,app = 150 mM (uendret), Vmax,app = 70 µmol/min.**
Lineweaver–Burk: uten hemmer y-skjæring 1/100 = 0,010, stigning 150/100 = 1,5; med hemmer y-skjæring 1/70 ≈ 0,0143, stigning 150/70 ≈ 2,14. Begge linjene skjærer x-aksen i −1/150.
**Konklusjon: ikke-kompetitiv hemming** (Vmax ↓, Km uendret).
:::

:::eksempel[7. Hvilket substrat omsettes raskest? (H2023)]
Bakteriell ADH, like (lave) konsentrasjoner av tre substrater:

| Substrat | Km (mM) | Vmax (µM/min) | Vmax/Km |
|---|---|---|---|
| Etanol | 0,1 | 0,26 | 2,6 |
| Metanol | 0,001 | 0,23 | **230** |
| Propanol | 0,01 | 0,20 | 20 |

Ved lav [S] er $v \approx \frac{V_{max}}{K_M}[S]$, så **metanol** omsettes raskest – ikke etanol, selv om etanol har høyest Vmax.
:::

:::eksempel[8. Beregn kcat]
En løsning med [E]_T = 10 nM har Vmax = 4,0 µM/s.
$k_{cat} = \frac{V_{max}}{[E]_T} = \frac{4{,}0\cdot 10^{-6}\ \text{M/s}}{1{,}0\cdot 10^{-8}\ \text{M}} = $ **400 s⁻¹** – hvert enzymmolekyl omsetter 400 substratmolekyler per sekund ved metning.
:::

## Kobling til laboratoriet

I [enzymøvelsen med alkoholdehydrogenase](/medod1/lab/ovelser/enzymkinetikk-adh) (EnzymLab, faglig ansvarlig Knut Teigen) måles enzymaktivitet spektrofotometrisk (NADH ved 340 nm), og utregningene står i labheftet. Aktiveringsenergien finnes fra **Arrhenius**: plott ln k mot 1/T; stigningen er −Ea/R, så **Ea = −stigning × R**. Se [laboratorieøvelsene](/medod1/lab/ovelser).

:::eksamen
Hvert eksamenssett har 1–3 kinetikkoppgaver: beregn v, Km eller [S] fra MM (ofte 2 poeng); kompetitiv vs ikke-kompetitiv (Km ↑ vs Vmax ↓; «overvinnes ved høy [S]» sant/usant); ukompetitiv = både Km og Vmax ↓ (H2022); kompetitiv og ukompetitiv endrer Km, ikke-kompetitiv gjør det ikke (H2020); MTX er kompetitiv/reversibel (V2020, H2020); villtype/mutant-oppgaven; dobbel [S] ved [S] ≪ Km → dobbel hastighet; ved [S] → ∞ blir V₀ uavhengig av [S] (0. orden); sigmoid kurve = allosterisk/kooperativ; kcat/Km begrenses av diffusjon. Steady state: [ES] konstant og dannelse = nedbrytning av ES (det er **ikke** [S] som er konstant over tid).
:::

## Test deg selv

:::sjekk[Hva skjer med Km og Vmax hvis du dobler enzymkonsentrasjonen?]
Vmax dobles (Vmax = kcat[E]_T); Km er uendret fordi den er en egenskap ved enzym–substrat-paret.
:::

:::sjekk[Et enzym har Km = 10 µM og Vmax = 100 µM/min. Hva er V₀ ved [S] = 10 µM og ved [S] = 90 µM?]
Ved 10 µM ([S] = Km): 50 µM/min. Ved 90 µM: 100 · 90/100 = 90 µM/min.
:::

:::sjekk[I et Lineweaver–Burk-plott skjærer linjene med og uten hemmer hverandre på y-aksen. Hvilken hemming, og hva skjer med Km og Vmax?]
Kompetitiv: samme 1/Vmax ⇒ Vmax uendret; brattere linje og x-skjæring nærmere null ⇒ Km øker.
:::

:::sjekk[Hvorfor er kcat/Km et bedre mål enn Vmax på hvor godt et enzym omsetter et substrat ved fysiologiske (lave) konsentrasjoner?]
Ved [S] ≪ Km er v = (kcat/Km)[E]_T[S]; hastigheten avhenger både av hvor godt substratet bindes (Km) og hvor raskt det omsettes (kcat). Vmax gjelder bare ved metning.
:::

:::sjekk[Hvorfor ser irreversibel hemming ut som ikke-kompetitiv i et kinetikkplott?]
Hemmeren tar en andel enzymmolekyler permanent ut av spill. Det gjenværende enzymet har normal Km, men totalmengden aktivt enzym – og dermed Vmax – er redusert.
:::

:::sjekk[Når er Km et mål på affinitet (≈ Kd)?]
Når k₋₁ ≫ k₂, dvs. ES dissosierer mye raskere enn det omdannes til produkt; da er Km = (k₋₁ + k₂)/k₁ ≈ k₋₁/k₁ = Kd.
:::

:::sjekk[Et Lineweaver–Burk-plott med og uten hemmer gir to parallelle linjer. Hvilken hemming, og hva skjer med Km og Vmax?]
Ukompetitiv hemming: hemmeren binder bare ES. Km og Vmax synker begge med samme faktor, så stigningen Km/Vmax er uendret. Linjen med hemmer har høyere y-skjæring (lavere Vmax).
:::
