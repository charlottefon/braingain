---
title: Formelark
type: page
order: 3
summary: Alle formler og konstanter fra Petris formelhefte (og det forelesningene bruker i tillegg), med symbolforklaring, enheter, når de brukes og lenke til regnetypen.
---

## Om formelheftet

Formelheftet (Petri, 19.11.2021) er «en liten samling av formler man skal gjerne kunne på eksamen». Det deles **ikke** ut på eksamen, så formlene må læres. På eksamen får du periodesystemet og aminosyrestrukturene. Numeriske konstanter som $K_a$, $K_{sp}$ og $E^\circ$ oppgis i oppgaven, men **ikke $K_w$**.

Formlene merket ★ står i formelheftet. Resten brukes i forelesninger, oppgavesett og eksamen og bør også kunnes.

## Konstanter og omregninger

| Størrelse | Verdi | Brukes i |
|---|---|---|
| Vannets ioneprodukt $K_w$ (25 °C) | $1{,}0\cdot10^{-14}$; $pK_w = 14$ | alle pH-beregninger, $K_aK_b = K_w$ |
| Gasskonstanten R | $8{,}314\ \text{J/(mol·K)}$ | $\Delta G^\circ = -RT\ln K$, $\Delta G = \Delta G^\circ + RT\ln Q$, Nernst |
| Faradays konstant F | $96\,485\ \text{C/mol} = 96\,485\ \text{J/(V·mol)} = 96{,}485\ \text{kJ/(V·mol)}$ | $\Delta G = -nFE$, Nernst |
| $2{,}303\,RT/F$ ved 25 °C | $0{,}0592$ V | Nernst i log-form |
| Samme ved 37 °C | $0{,}0615$ V (61,5 mV) | Nernst-/membranpotensial i kroppen |
| Temperatur | $T(\text{K}) = t(^\circ\text{C}) + 273$ | 25 °C = 298 K, 37 °C = 310 K |
| Energi | 1 cal = 4,184 J | ΔH/ΔS oppgitt i kcal/cal |
| Standardbetingelser (°) | 1 M, 1 atm, 25 °C, rene faste stoffer og væsker | $E^\circ$, $\Delta G^\circ$, $\Delta H^\circ$ |
| Prefikser | m = 10⁻³, µ = 10⁻⁶, n = 10⁻⁹ | konsentrasjoner i mM, µM og nM |

## Grunnleggende mengdeberegning

| Formel | Symboler | Når | Regnetype |
|---|---|---|---|
| $n = \dfrac{m}{M}$ | n = stoffmengde (mol), m = masse (g), M = molar masse (g/mol) | gram ↔ mol | [mol og konsentrasjon](/medod1/generell-kjemi/regnetyper/mol-og-konsentrasjon) |
| $c = \dfrac{n}{V}$ | c = konsentrasjon (mol/L = M), V = volum (L) | molaritet | [mol og konsentrasjon](/medod1/generell-kjemi/regnetyper/mol-og-konsentrasjon) |
| $c_1V_1 = c_2V_2$ | før og etter fortynning (stoffmengden er konstant) | fortynning; blanding av løsninger (summer mol, del på totalvolum) | [fortynning og blanding](/medod1/generell-kjemi/regnetyper/fortynning-og-blanding) |

## Konsentrasjonsmål for løsninger

★ **Ionestyrke**

$$I = \frac12\sum_{i=1}^{n} c_i z_i^2$$

$c_i$ = molar konsentrasjon av ion i, $z_i$ = ladningen. Summen tas over **alle** kationer og anioner. Ionestyrken er et mål på total ionekonsentrasjon, der flerladde ioner teller mer (z²). Den er **ikke** det samme som molar konsentrasjon. Fysiologisk ionestyrke er ca. 0,2 M. Eksempel: 0,1 M MgSO₄ gir I = ½(0,1·4 + 0,1·4) = 0,4 M.

**Osmolaritet** = $\sum c_{\text{partikler}}$ (osmol/L), summen av molaritetene til alle oppløste partikler. 0,2 M CaCl₂ gir 0,6 osmol/L.

**Ekvivalenter**: mol ladning per liter (Eq/L) = $c\cdot|z|$ for hvert ion. Na⁺ i blod er 140 mEq/L.

Alle tre: [osmolaritet, ekvivalenter og ionestyrke](/medod1/generell-kjemi/regnetyper/osmolaritet-ekvivalenter-ionestyrke).

## Radioaktiv halveringstid

★

$$N(t) = N_0\left(\tfrac12\right)^{t/t_{1/2}}$$

N(t) = mengde ved tiden t, $N_0$ = mengde ved start, t = tid som har gått, $t_{1/2}$ = halveringstid (samme tidsenhet som t). Brukes for radioaktivitet og eksponentiell nedbrytning. ¹⁴C har $t_{1/2}$ = 5730 år. → [Halveringstid](/medod1/generell-kjemi/regnetyper/halveringstid)

## Likevekt

★ **Massevirkningsloven** for $aA + bB \rightleftharpoons cC + dD$:

$$K_c = \frac{[C]^c[D]^d}{[A]^a[B]^b}$$

Bruk **likevektskonsentrasjoner**. Faste stoffer, rene væsker og løsemiddel (vann) tas ikke med. → [Likevektskonstant fra konsentrasjoner](/medod1/generell-kjemi/regnetyper/likevektskonstant-fra-konsentrasjoner)

★ **Reaksjonskvotient**: samme uttrykk, men med **nåværende** konsentrasjoner:

$$Q = \frac{[C]^c[D]^d}{[A]^a[B]^b}$$

Q < K gir reaksjon mot høyre, Q > K mot venstre, og Q = K betyr likevekt. → [Reaksjonskvotient](/medod1/generell-kjemi/regnetyper/reaksjonskvotient)

★ **Tre huskeregler for K** → [Kombinere likevektskonstanter](/medod1/generell-kjemi/regnetyper/kombinere-likevektskonstanter)

| Operasjon | Ny K |
|---|---|
| Summere reaksjoner (1 + 2) | $K_1\cdot K_2$ |
| Snu reaksjonen | $1/K$ |
| Multiplisere reaksjonen med faktor n | $K^n$ |

For gasser gjelder i tillegg $K_p = K_c(RT)^{\Delta n}$ (forelesning 2, lite brukt).

## Syrer og baser

★ **Syrekonstant** for $\ce{HA + H2O <=> A- + H3O+}$:

$$K_a = \frac{[A^-][H_3O^+]}{[HA]} \qquad pK_a = -\log K_a$$

Høy Ka og lav pKa betyr sterk syre.

★ **Basekonstant** for $\ce{B + H2O <=> BH+ + OH-}$:

$$K_b = \frac{[BH^+][OH^-]}{[B]} \qquad pK_b = -\log K_b$$

★ **Vannets ioneprodukt** for $\ce{2H2O <=> H3O+ + OH-}$:

$$K_w = [H_3O^+][OH^-] = 1{,}0\cdot10^{-14}$$

★ **Korresponderende syre–base-par**:

$$K_w = K_a K_b = 10^{-14} \iff pK_a + pK_b = 14$$

Brukes f.eks. til Kb for acetat fra Ka for eddiksyre. → [pH i svak base og salt](/medod1/generell-kjemi/regnetyper/ph-svak-base-og-salt)

**pH-definisjoner** (★ pH + pOH = 14):

$$pH = -\log[H_3O^+] \quad pOH = -\log[OH^-] \quad pH + pOH = 14 \quad [H_3O^+] = 10^{-pH}$$

→ [Omregning pH ↔ konsentrasjon](/medod1/generell-kjemi/regnetyper/ph-og-h3o-omregning)

**Sterk syre/base**: $[H_3O^+] = c_{syre}$ og $[OH^-] = c_{base}\cdot$(antall OH⁻ per formelenhet). → [pH i sterk syre og base](/medod1/generell-kjemi/regnetyper/ph-sterk-syre-og-base), [blanding av sterk syre og base](/medod1/generell-kjemi/regnetyper/noytralisering-sterk-syre-base)

★ **Enkel pH-formel for svak syre** (fra $[H_3O^+] = \sqrt{K_a c}$):

$$pH = \tfrac12\,(pK_a - \log c)$$

c er **startkonsentrasjonen** av syren. Formelen gjelder bare når x ≪ c (x < 5 % av c), i praksis når $K_a < 10^{-4}$ og c ikke er for lav. Ellers må man løse $x^2 + K_a x - K_a c = 0$ og ta den positive roten $x = \frac{-K_a + \sqrt{K_a^2 + 4K_ac}}{2}$. → [pH i svak syre](/medod1/generell-kjemi/regnetyper/ph-svak-syre)

★ **Svak base**:

$$pOH = \tfrac12\,(pK_b - \log c) \qquad pH = 14 - pOH$$

→ [pH i svak base og salt](/medod1/generell-kjemi/regnetyper/ph-svak-base-og-salt)

## Buffere og flerprotiske syrer

★ **Henderson–Hasselbalch** (bufferlikning II):

$$pH = pK_a + \log\frac{[A^-]}{[HA]}$$

[A⁻] = base, [HA] = korresponderende syre. Mol eller mmol kan settes inn direkte, fordi volumet er felles. Brukes i bufferområdet (pH = pKa ± 1), ved halvtitrering (pH = pKa), for blodets pH (pKa 6,1, [HCO₃⁻]/[CO₂]) og for andel protonert ved gitt pH. → [Henderson–Hasselbalch](/medod1/generell-kjemi/regnetyper/henderson-hasselbalch), [buffer etter tilsatt syre/base](/medod1/generell-kjemi/regnetyper/buffer-tilsatt-syre-eller-base), [protolyttfordeling](/medod1/generell-kjemi/regnetyper/protolyttfordeling)

**Bufferlikning I**, samme formel uten logaritme:

$$[H_3O^+] = K_a\,\frac{[\text{syre}]}{[\text{base}]}$$

**Amfolyttlikningen / isoelektrisk punkt** (forelesning 4, labhefte):

$$pH = pI = \frac{pK_{a1} + pK_{a2}}{2}$$

Den gjelder ved første ekvivalenspunkt av en toprotisk syre, der bare amfolytten HA finnes. Har aminosyren en ladbar sidekjede, brukes de to pKa-verdiene på hver side av den **nøytrale** formen. → [Isoelektrisk punkt](/medod1/generell-kjemi/regnetyper/isoelektrisk-punkt), [titrering av aminosyre](/medod1/generell-kjemi/regnetyper/titrering-aminosyre), [titrering av svak syre](/medod1/generell-kjemi/regnetyper/titrering-svak-syre)

**Blod (klinisk form)**:

$$pH = 6{,}1 + \log\frac{[HCO_3^-]}{[CO_2(aq)]} \qquad [CO_2(aq)] \approx 0{,}23\ \tfrac{\text{mM}}{\text{kPa}}\cdot p_{CO_2}$$

Normalt er forholdet 24 mM / 1,2 mM = 20, som gir pH 7,4.

## Løselighet og komplekser

★ **Løselighetsprodukt** for $\ce{A_aB_b(s) <=> a A^{n+} + b B^{m-}}$:

$$K_{sp} = [A^{n+}]^a[B^{m-}]^b$$

Formelheftet har en skrivefeil, «a Bm⁻». Det skal være **b**. Med molar løselighet s er $K_{sp} = s^2$ for AB og $4s^3$ for AB₂ eller A₂B. Med fellesion settes den kjente konsentrasjonen inn. → [Løselighetsprodukt](/medod1/generell-kjemi/regnetyper/loselighetsprodukt), [fellesioneffekt](/medod1/generell-kjemi/regnetyper/fellesioneffekt)

★ **Dannelseskonstant (kompleks)** for $\ce{M+ + nL <=> ML_n+}$:

$$K_f = \frac{[ML_n^+]}{[M^+][L]^n}$$

Trinnvis dannelse gir $K_f = K_1K_2\cdots$ (log-verdier summeres). Løselighet med ligand: $K = K_{sp}\cdot K_f$.

★ **Dissosiasjonskonstant (biokjemi)** for $\ce{PL <=> P + L}$:

$$K_d = \frac{[P][L]}{[PL]}$$

Kd er den omvendte av Kf. Lav Kd betyr høy affinitet, og når [P] = [PL], er [L] = Kd. Kd oppgis gjerne i nM eller µM. → [Kompleksdannelse og løselighet](/medod1/generell-kjemi/regnetyper/kompleksdannelse-og-loselighet)

## Termodynamikk

★ **Gibbs fri energi**:

$$\Delta G = \Delta H - T\Delta S$$

ΔG i J/mol eller kJ/mol, ΔH i kJ/mol, ΔS i **J/(mol·K)** (gjør om!), T i **kelvin**. ΔG < 0 betyr spontan (eksergonisk), > 0 ikke-spontan (endergonisk), og = 0 likevekt. Temperaturgrensen er $T = \Delta H/\Delta S$. → [Gibbs fri energi](/medod1/generell-kjemi/regnetyper/gibbs-fri-energi)

**Fra tabellverdier** (Hess):

$$\Delta X^\circ_{rxn} = \sum n\,X^\circ(\text{produkter}) - \sum n\,X^\circ(\text{reaktanter})$$

Her er $X = \Delta H_f$, $\Delta G_f$ eller $S$. Grunnstoffer i standardtilstand har $\Delta H_f^\circ = \Delta G_f^\circ = 0$, men $S^\circ \neq 0$. → [Reaksjonsverdier fra tabell](/medod1/generell-kjemi/regnetyper/reaksjonsverdier-fra-tabell)

**Fri energi og likevekt** (forelesning 5):

$$\Delta G = \Delta G^\circ + RT\ln Q \qquad \Delta G^\circ = -RT\ln K \qquad K = e^{-\Delta G^\circ/RT}$$

ΔG° < 0 gir K > 1. Bruk ΔG med aktuelle konsentrasjoner (Q) for å avgjøre retningen i cellen. → [Fri energi og likevekt](/medod1/generell-kjemi/regnetyper/fri-energi-og-likevekt)

## Elektrokjemi

**Standard cellepotensial**:

$$E^\circ_{celle} = E^\circ_{red} + E^\circ_{oks} = E^\circ_{katode} - E^\circ_{anode}$$

Reduksjonspotensialene står i tabell. Halvreaksjonen med lavest E° snus (fortegnet skiftes), og E° ganges **aldri** med koeffisienter. E° > 0 betyr spontan reaksjon. → [Standard cellepotensial](/medod1/generell-kjemi/regnetyper/standard-cellepotensial)

★ **Nernst-likningen** (0,0592 gjelder kun ved 25 °C):

$$E = E^\circ - \frac{0{,}0592\ \text{V}}{n}\log Q \qquad \left(\text{generelt } E = E^\circ - \frac{RT}{nF}\ln Q\right)$$

n = antall mol elektroner overført i den balanserte reaksjonen, Q = reaksjonskvotienten (faste metaller utelates). Brukes for cellepotensial ved ikke-standard konsentrasjoner og for å finne ukjent konsentrasjon fra målt E. → [Nernst-likningen](/medod1/generell-kjemi/regnetyper/nernst-likning)

**Konsentrasjonscelle** (E° = 0):

$$E = \frac{0{,}0592}{n}\log\frac{c_{\text{høy}}}{c_{\text{lav}}}$$

**Membranpotensial for ett ion** (z = ionets ladning med fortegn):

$$E_{ion} = \frac{0{,}0592\ \text{V}}{z}\log\frac{[\text{ion}]_{ute}}{[\text{ion}]_{inne}}\ (25\,^\circ\text{C}) \quad\text{eller}\quad \frac{61{,}5\ \text{mV}}{z}\log\frac{[\text{ion}]_{ute}}{[\text{ion}]_{inne}}\ (37\,^\circ\text{C})$$

For flere ioner brukes Goldman–Hodgkin–Katz:

$$\Delta\psi = \frac{RT}{F}\ln\frac{P_{kat}[\text{Kat}]_{ute} + P_{an}[\text{An}]_{inne}}{P_{kat}[\text{Kat}]_{inne} + P_{an}[\text{An}]_{ute}}$$

Å beregne membranpotensial er ifølge spørretimen ikke pensum, men prinsippet er det. → [Konsentrasjonscelle og membranpotensial](/medod1/generell-kjemi/regnetyper/konsentrasjonscelle-og-membranpotensial)

**Fri energi, potensial og K**:

$$\Delta G = -nFE \qquad \Delta G^\circ = -nFE^\circ = -RT\ln K \qquad E^\circ = \frac{0{,}0592}{n}\log K \qquad K = 10^{\,nE^\circ/0{,}0592}$$

Fortegnsregelen må kunnes: **E° > 0 ⇔ ΔG° < 0 ⇔ K > 1**. Ved likevekt er E = 0, ΔG = 0 og Q = K. → [ΔG° = −nFE° og K](/medod1/generell-kjemi/regnetyper/fri-energi-og-cellepotensial)

## Hurtigoversikt: hvilken formel?

| Oppgaven gir … | Bruk |
|---|---|
| sterk syre/base, c | $pH = -\log c$ eller $14 + \log c_{OH^-}$ |
| svak syre, c og Ka | $pH = \frac12(pK_a - \log c)$ (sjekk x ≪ c) |
| svak base eller salt av svak syre | $K_b = K_w/K_a$, så $pOH = \frac12(pK_b - \log c)$ |
| syre + korresponderende base | Henderson–Hasselbalch |
| aminosyre + NaOH (mmol) | finn fasen: svak syre, HH (pKa1), amfolytt (pI), HH (pKa2) eller svak base |
| løselighet ↔ Ksp | $K_{sp} = s^2$, $4s^3$ …, med fellesion settes den kjente konsentrasjonen inn |
| ΔH og ΔS | $\Delta G = \Delta H - T\Delta S$ |
| ΔG° ↔ K | $\Delta G^\circ = -RT\ln K$ |
| to halvreaksjoner | $E^\circ_{celle} = E^\circ_{katode} - E^\circ_{anode}$ |
| konsentrasjoner i en celle | Nernst |
