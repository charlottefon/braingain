---
title: Flerprotiske syrer, aminosyrer og isoelektrisk punkt
summary: Flerprotiske syrer avgir H⁺ trinnvis, med én Ka per trinn (pKa øker for hvert trinn). Protolyttfordelingen viser hvilken form som dominerer ved hver pH, og midt mellom to pKa dominerer amfolytten, med pH = (pKa1 + pKa2)/2. Aminosyrer er flerprotiske. Titreringskurven har bufferområder, ekvivalenspunkter og det isoelektriske punktet pI, der nettoladningen er 0.
order: 11
tags: [flerprotisk syre, protolytt, protolyttfordeling, amfolytt, amfolyttlikningen, zwitterion, aminosyre, isoelektrisk punkt, pI, titrering, ekvivalenspunkt, fosforsyre, karbonsyre, sitronsyre, histidin]
related:
  - generell-kjemi/regnetyper/titrering-aminosyre
  - generell-kjemi/regnetyper/isoelektrisk-punkt
  - generell-kjemi/regnetyper/protolyttfordeling
  - generell-kjemi/regnetyper/titrering-svak-syre
  - generell-kjemi/teori/buffere
  - generell-kjemi/teori/karbonsyre-og-blodets-ph
  - proteiner/teori/aminosyrer
  - proteiner/aminosyrer/alanin
  - proteiner/aminosyrer/histidin
  - lab/ovelser/titrering-aminosyrer
  - cellebiologi/sammensatte-tema/multippel-sklerose-og-myelin
sources:
  - file: medod1/material/generell-kjemi/forelesning-4-2026--8041090.pdf
    pages: "8-29, 62"
  - file: medod1/material/generell-kjemi/forelesning3-del1-3-2026--8030911.pdf
    pages: "38"
  - file: medod1/material/generell-kjemi/titrering-revidert-petri2020-1-1--7794025.pdf
  - file: medod1/material/generell-kjemi/3-titrering-av-aminosyrer--page-374063.html
  - file: medod1/material/generell-kjemi/aminosyrenes-struktur-v25--8211293.pdf
  - file: medod1/material/generell-kjemi/sporretime1-2026-v2--8130558.pdf
    pages: "4-5"
  - file: medod1/exercises/kollokvium1-2026--8066247.pdf
  - file: medod1/exercises/kollokvium1-losningsforslag-2026--8121960.pdf
  - file: medod1/exercises/oppgavesett2-2026--8047637.pdf
  - file: medod1/exercises/oppgavesett2-2026-fasit--8047656.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2024-medod1-ny-v2024-med-svar--5897534.pdf
  - file: medod1/exams/2022-medod1-h2022-med-svar--4750110.pdf
---

## Flerprotiske syrer

- De kan donere **flere H⁺**, men **ett om gangen**.
- Hvert protolysetrinn har sin egen Ka ($K_{a1}, K_{a2}, \dots$). **Ka minker for hvert trinn** (pKa øker), fordi det er vanskeligere å fjerne H⁺ fra et molekyl som allerede er negativt ladet.
- **pH bestemmer hvilken form (protolytt) som dominerer.**
- Ved pH-beregning tar man utgangspunkt i den **dominerende reaksjonen**.
- Eksempler er fosforsyre, karbonsyre, sitronsyre og **aminosyrer**.

**Protolytter** er de ulike formene av samme syre, som bare skiller seg i hvilke grupper som er protonert. Formene i midten kan både avgi og ta opp H⁺ og er **amfolytter**.

## Protolyttfordeling

Når pH øker (f.eks. ved at base tilsettes under titrering), går syren trinnvis over i mer deprotonerte former. Kartet over dominerende form lages slik:
- **Ved pH = pKaₙ** er det like mye av de to formene som pKaₙ forbinder. Det er midt i et bufferområde.
- **Midt mellom to påfølgende pKa** foreligger nesten alt som amfolytten, og pH er da gitt av **amfolyttlikningen**:

$$pH = \frac{pK_{a1} + pK_{a2}}{2}$$

### Karbonsyre (forelesningsverdier)

$$\ce{H2CO3 <=> HCO3- <=> CO3^2-} \qquad pK_{a1} = 6{,}38\quad pK_{a2} = 10{,}32$$

| pH-område | Dominerende form | Rolle |
|---|---|---|
| < 6,38 | H₂CO₃ | syre |
| ≈ 6,38 | H₂CO₃ = HCO₃⁻ | buffer |
| ≈ 8,35 = (6,38 + 10,32)/2 | HCO₃⁻ | amfolytt |
| ≈ 10,32 | HCO₃⁻ = CO₃²⁻ | buffer |
| > 10,32 | CO₃²⁻ | base |

Ved fysiologisk pH (7,4) dominerer **HCO₃⁻**. I blod brukes pKa1 = 6,1 (37 °C, fysiologisk ionestyrke), se [karbonsyre og blodets pH](/medod1/generell-kjemi/teori/karbonsyre-og-blodets-ph).

### Fosforsyre (ionestyrke 0,2 M)

$$\ce{H3PO4 <=> H2PO4- <=> HPO4^2- <=> PO4^3-} \qquad pK = 1{,}99;\ 6{,}84;\ 11{,}65$$

| pH | Dominerende |
|---|---|
| < 1,99 | H₃PO₄ (syre) |
| ≈ 4,4 (amfolyttpunkt (1,99 + 6,84)/2) | H₂PO₄⁻ (amfolytt) |
| ≈ 6,84 (buffer) | H₂PO₄⁻ = HPO₄²⁻ |
| ≈ 9,2 (amfolyttpunkt (6,84 + 11,65)/2) | HPO₄²⁻ (amfolytt) |
| > 11,65 | PO₄³⁻ (base) |

(Forelesningsslidene runder amfolyttpunktene til 4,5 og 9,3.) Ved pH 7,4 er H₂PO₄⁻ og HPO₄²⁻ til stede samtidig, med mest HPO₄²⁻. Fosfat er derfor en god intracellulær buffer.

### Sitronsyre (triprotisk)

pKa1 = 2,97, pKa2 = 4,42 og pKa3 = 5,81. Ved pH 7,4, som er over alle tre pKa, dominerer **sitrat, A³⁻**. Sitrat brukes som **antikoagulant** i blodprøver: de tre karboksylatgruppene binder (kompleksbinder) Ca²⁺, som trengs for koagulasjonen. EDTA brukes på samme måte.

:::eksamen
H₃PO₄ med Ka1 = 6,9·10⁻³, Ka2 = 6,2·10⁻⁸ og Ka3 = 4,8·10⁻¹³: hvilken form dominerer ved pH 8? pKa2 = 7,21 < 8 < pKa3 = 12,3, så svaret er **HPO₄²⁻** (V2025). Regn alltid om Ka til pKa først. Se [protolyttfordeling](/medod1/generell-kjemi/regnetyper/protolyttfordeling).
:::

## Aminosyrer som flerprotiske syrer

Aminosyrer har en **karboksylgruppe** (sur, pKa ≈ 2) og en **aminogruppe** (basisk; NH₃⁺ har pKa ≈ 9–10) på α-karbonet, pluss en sidekjede. «Nøytral form» i tabeller tegnes med –NH₂ og –COOH. **I løsning finnes de aldri slik.** Ved alle pH der COOH er protonert, er også NH₂ protonert. Riktig nøytral form er **zwitterionet** med –NH₃⁺ og –COO⁻.

```smiles-row
C[C@@H](C(=O)O)[NH3+] | H₂A⁺ (lav pH, kation)
C[C@@H](C(=O)[O-])[NH3+] | HA – zwitterion (amfolytt, nettoladning 0)
C[C@@H](C(=O)[O-])N | A⁻ (høy pH, anion)
```

**[Alanin](/medod1/proteiner/aminosyrer/alanin)**: $K_{a1} = 4{,}6\cdot10^{-3}$ (pKa1 = 2,34; COOH) og $K_{a2} = 2{,}0\cdot10^{-10}$ (pKa2 = 9,70; NH₃⁺). Tabellverdien 9,69 brukes også, men regn med det som følger av oppgitt Ka.

| Begrep | Betydning |
|---|---|
| **Protolytt** | molekylær form som bare varierer i hvilke grupper som er protonert |
| **Amfolytt** | kan være både syre og base (HA) |
| **Zwitterion** | dipolar, men nøytral forbindelse med både + og − ladde grupper |
| **Isoelektrisk punkt, pI** | pH der molekylet totalt sett er elektrisk nøytralt; den nøytrale formen er på topp |

### Isoelektrisk punkt

Ved pI er
1. den nøytrale formen (HA) på topp,
2. [H₂A⁺] = [A⁻] (begge lave), og
3. **nettoladningen 0**.

For en aminosyre **uten** ladbar sidekjede:

$$pI = \frac{pK_{a1} + pK_{a2}}{2} \qquad \text{alanin: } \frac{2{,}34 + 9{,}70}{2} = 6{,}02$$

**Level 2 – ladbar sidekjede.** pI ligger fortsatt midt mellom **to** pKa-verdier, men det må være de to som omgir den **nøytrale** formen. Fremgangsmåten:
1. Skriv alle formene fra fullt protonert til fullt deprotonert, med nettoladning.
2. Finn formen med nettoladning 0.
3. pI er snittet av pKa-en *før* og pKa-en *etter* denne formen.

:::eksempel[Histidin, pKa 1,82 (COOH), 6,00 (imidazol) og 9,17 (NH₃⁺) – eksamen H2022/H2021]
Formene er +2 → +1 → 0 → −1. Den nøytrale formen ligger mellom pKa 6,00 og 9,17:
$pI = (6{,}00 + 9{,}17)/2 = 7{,}59$.
Fellene er 3,91 = (1,82 + 6,00)/2 og 5,66 (snittet av alle tre).
:::

:::eksempel[Oppgavesett 2 oppg. 22: triprotisk syre H₃A²⁺ → A⁻, pKa 3,2, 6,5 og 9,9]
Formene og ladningene er H₃A²⁺ (+2) → H₂A⁺ (+1) → HA (0) → A⁻ (−1). HA ligger mellom pKa2 og pKa3:
$pI = (6{,}5 + 9{,}9)/2 = 8{,}2$.
:::

Mer: [isoelektrisk punkt](/medod1/generell-kjemi/regnetyper/isoelektrisk-punkt).

### Histidin – en sidekjede ved fysiologisk pH

[Histidins](/medod1/proteiner/aminosyrer/histidin) imidazolgruppe har pKa ≈ 6. Ved pH < 6 er den mest protonert (positiv), og ved pH > 6 mest uprotonert (nøytral). Dette gjør His viktig i enzymkatalyse (syre–base-katalyse nær fysiologisk pH) og som **metall-ligand**. Bare den **uprotonerte** formen har et ledig elektronpar på N som kan koordinere Zn²⁺, f.eks. i karbonsyreanhydrase (oppgavesett 2 oppg. 16).

```smiles-row
[NH3+][C@@H](Cc1c[nH]c[nH+]1)C(=O)[O-] | L-His, pH ≈ 4–5: imidazol protonert (+), nettoladning +1
[NH3+][C@@H](Cc1c[nH]cn1)C(=O)[O-] | L-His, pH ≈ 7,4: imidazol uprotonert – ledig elektronpar på N
```

### Aminosyrer i proteiner

- I proteiner er amino- og karboksylgruppene bundet i **peptidbindinger** (bortsett fra endene). Proteinets syre/base-egenskaper bestemmes derfor av **sidekjedene**.
- Sidekjedenes pKa kan endres av miljøet i proteinet. Det er viktig for enzymers pH-optimum og for binding av ligander og ioner.
- **Proteinets pI** er pH der nettoladningen er 0:

| pH vs. pI | Nettoladning |
|---|---|
| pH < pI | **positiv** |
| pH = pI | 0 |
| pH > pI | **negativ** |

Et protein med pI 4,09 er negativt ved pH 7, og et med pI 10,9 er positivt. Det positive proteinet binder seg lettest til negativt ladde membranoverflater (oppgavesett 2 oppg. 17).

:::eksamen
- Kalmodulin (pI ≈ 4,1) er **negativ** ved pH 7.
- [Myelin basisk protein](/medod1/cellebiologi/sammensatte-tema/multippel-sklerose-og-myelin) (pI ≈ 11–12) er **positiv** ved nøytral pH. Utsagnet «MBP er negativt ved nøytral pH» er det **gale** alternativet (V2024, H2024, H2023, H2025).
- His-sidekjede med pKa 6,0 er positiv ved pH 5 (H2025).
- Glysin ved pH 7 er et **zwitterion**, H₃N⁺–CH₂–COO⁻ (V2025, V2024, H2022).
- Enzym med to His (pKa 6) i aktivt sete, der den ene må være protonert og den andre uprotonert: optimal pH er **6**, fordi da er halvparten av hver His protonert (V2023).
- «Ved det isoelektriske punktet er …» **nettoladningen 0** (V2023). Ikke pH = pKa, ikke pH = 7.
:::

## Titreringskurven til en toprotisk aminosyre

Titrerer man H₂A⁺ med NaOH, får kurven seks faser. Hver fase har sin egen formel:

| # | Fase (alanin) | Hva finnes | pH beregnes med |
|---|---|---|---|
| 1 | Før NaOH | H₂A⁺ (svak syre) | svak-syre-formel med Ka1 |
| 2 | Bufferområde 1 | H₂A⁺ + HA | HH med **pKa1**; **halvveis** til 1. ekv.pkt. er pH = pKa1 |
| 3 | **1. ekvivalenspunkt** (n(OH⁻) = n(aminosyre)) | bare HA (amfolytt) | **pH = (pKa1 + pKa2)/2 = pI** |
| 4 | Bufferområde 2 | HA + A⁻ | HH med **pKa2**; midt mellom ekv.pkt. 1 og 2 er pH = pKa2 |
| 5 | **2. ekvivalenspunkt** (2 ekvivalenter OH⁻) | bare A⁻ (svak base) | $K_b = K_w/K_{a2}$, pOH = ½(pKb − log c) |
| 6 | Etter 2. ekv.pkt. | A⁻ + overskudd OH⁻ | overskuddet av sterk base bestemmer pH |

Kurven er flat i bufferområdene og har **pH-hopp ved ekvivalenspunktene**. Volumet til første ekvivalenspunkt gir konsentrasjonen av aminosyreløsningen: n(aminosyre) = c(NaOH)·V(NaOH).

:::eksempel[Eksamen (6 ganger, sist H2025): 50,0 mL 0,1 M H₂A⁺ (alanin) + 70 mL 0,1 M NaOH]
- n(H₂A⁺) = 5,0 mmol og n(OH⁻) = 7,0 mmol.
- De første 5,0 mmol OH⁻ gjør all H₂A⁺ om til 5,0 mmol HA. Resten, 2,0 mmol OH⁻, gjør 2,0 mmol HA om til A⁻.
- Igjen er 3,0 mmol HA og 2,0 mmol A⁻. Vi er i bufferområde 2 og bruker pKa2 = −log(2,0·10⁻¹⁰) = 9,70.
- $pH = 9{,}70 + \log\frac{2{,}0}{3{,}0} = 9{,}70 - 0{,}18 = \mathbf{9{,}52}$.

Med 30 mL NaOH (V2024): 3,0 mmol HA og 2,0 mmol H₂A⁺ igjen. Da gjelder bufferområde 1:
$pH = 2{,}34 + \log(3/2) = 2{,}34 + 0{,}18 = \mathbf{2{,}52}$.
:::

:::eksempel[Kollokvium 1 oppg. 2: 30,0 mL 0,0600 M metionin (H₂A⁺) + 20,0 mL 0,0900 M NaOH]
n(H₂A⁺) = 1,80 mmol = n(OH⁻), så vi er ved **1. ekvivalenspunkt**, der bare HA (amfolytt) finnes.
pKa1 = −log(5,2·10⁻³) = 2,28 og pKa2 = −log(6,2·10⁻¹⁰) = 9,21.
$pH = (2{,}28 + 9{,}21)/2 = \mathbf{5{,}75}$, som også er metionins pI. Ved pH 7,4 dominerer HA (zwitterion).
:::

:::feil
- Bruker man **pKa1** etter første ekvivalenspunkt, får man distraktorene 2,16 og 2,71 i stedet for 9,52.
- Svarer man pKa2 selv (9,70), har man glemt forholdet 2:3.
- Sjekk alltid **hvilket bufferområde** du er i ved å regne i mmol.
- Oppgavesett 2-fasiten har en skrivefeil (pKa1 = «3,34»). Riktig er 2,34.
:::

Trinnvis utregning for alle faser, inkl. 2. ekvivalenspunkt (valin, kollokvium oppg. 6): [titrering av aminosyre](/medod1/generell-kjemi/regnetyper/titrering-aminosyre). Labøvelsen: [titreranalyse av aminosyrer](/medod1/lab/ovelser/titrering-aminosyrer). Aminosyrenes struktur og sidekjeder: [aminosyrer](/medod1/proteiner/teori/aminosyrer).

## Test deg selv

:::sjekk[Hvorfor er Ka2 alltid mindre enn Ka1 for en flerprotisk syre?]
Det andre protonet må fjernes fra et molekyl som allerede har mistet ett proton og er mer negativt (eller mindre positivt) ladet. Den elektrostatiske tiltrekningen på H⁺ er sterkere, så protonet avgis vanskeligere. Det gir lavere Ka og høyere pKa.
:::

:::sjekk[Hvilke former av en triprotisk syre med pKa 2, 5 og 9 finnes ved pH 1, 7 og 11?]
- pH 1 = pKa1 − 1: mest H₃A, litt H₂A ([H₂A]/[H₃A] = 0,1).
- pH 7, midt mellom 5 og 9: amfolytten HA dominerer, med litt H₂A og A.
- pH 11, over 9 + 1: bare den fullt deprotonerte formen A.

(Kollokvium 1 oppg. 3.)
:::

:::sjekk[Hva er pH ved første ekvivalenspunkt når valin (Ka1 = 4,8·10⁻³, Ka2 = 2,4·10⁻¹⁰) titreres, og hvorfor er dette også pI?]
pKa1 = 2,32 og pKa2 = 9,62, så pH = (2,32 + 9,62)/2 = **5,97**. Her finnes bare HA, med [H₂A⁺] = [A⁻], og nettoladningen er 0. Det er definisjonen av pI.
:::

:::sjekk[Et protein har pI 8,5. Hva er ladningen ved pH 7, og vil det vandre mot anoden eller katoden i elektroforese?]
pH < pI gir **positiv** nettoladning. Proteinet vandrer mot den negative polen (katoden).
:::

:::sjekk[Hvorfor binder histidin metallioner best over pH ~6?]
En ligand er en Lewis-base og må ha et ledig elektronpar. I den uprotonerte imidazolringen er elektronparet på N ledig. Under pH 6 brukes det til bindingen til H⁺, og His kan ikke lenger koordinere metallet.
:::
