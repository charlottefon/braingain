---
title: Aminosyrer – struktur, klassifisering og syre-base
summary: Generell struktur (Cα, NH₃⁺, COO⁻, R, H), L-form og kiralitet, de fire gruppene etter sidekjede, zwitterion, pKa-verdier, pI og nettoladning av peptider.
order: 1
tags: [aminosyrer, kiralitet, zwitterion, pKa, pI, nettoladning]
related:
  - proteiner/teori/peptidbindingen
  - proteiner/aminosyrer/histidin
  - proteiner/aminosyrer/cystein
  - proteiner/aminosyrer/glysin
  - proteiner/aminosyrer/lysin
  - generell-kjemi/teori/flerprotiske-syrer-og-aminosyrer
  - generell-kjemi/regnetyper/isoelektrisk-punkt
  - generell-kjemi/regnetyper/titrering-aminosyre
  - lab/ovelser/titrering-aminosyrer
  - organisk-kjemi/grunnlag/kiralitet-og-r-s
  - cellebiologi/sammensatte-tema/multippel-sklerose-og-myelin
sources:
  - file: medod1/material/proteiner/proteiner-1-am-2026--8186375.pdf
    pages: "4-15"
  - file: medod1/material/proteiner/intro-forelesning--7794102.pdf
    pages: "4-5"
  - file: medod1/material/generell-kjemi/aminosyrenes-struktur-v25--8211293.pdf
  - file: medod1/exercises/kollokvieoppgaver-enzymologi-og-enzym-2025--7794057.pdf
    pages: "1"
---

## Generell struktur

Proteiner bygges av **20 ulike aminosyrer**. Informasjonen om rekkefølgen ligger i DNA (DNA → RNA → aminosyrekjede); én feil aminosyre kan gi sykdom (f.eks. sigdcelleanemi).

Hver aminosyre har et sentralt karbonatom, **Cα**, bundet til:

1. en **aminogruppe** (–NH₂ / –NH₃⁺)
2. en **karboksylgruppe** (–COOH / –COO⁻)
3. en **variabel sidekjede, R**
4. et **H-atom**

```smiles-row
N[C@@H](C)C(=O)O | L-alanin (nøytral skrivemåte)
[NH3+][C@@H](C)C(=O)[O-] | L-alanin som zwitterion (pH 7,4)
```

:::husk
Ved eksamen får dere utdelt et ark med strukturene til de 20 aminosyrene (Aminosyrenes struktur). Du må kunne **klassifisere** dem og forstå egenskapene – ikke nødvendigvis tegne alle fra hukommelsen.
:::

## Kiralitet: L-form

- Cα er kiralt for 19 av 20 aminosyrer. **Glysin** (R = H) er det eneste unntaket.
- Det finnes noen få D-aminosyrer i naturen, men **bare L-isomerer bygges inn i proteiner**.
- For nesten alle L-aminosyrer er Cα **S-konfigurert** (se [R/S-konfigurasjon](/medod1/organisk-kjemi/grunnlag/kiralitet-og-r-s)). Unntak: **L-cystein er R** (S i sidekjeden gir høyere CIP-prioritet), og glysin er ikke kiral.
- Isoleucin og treonin har et ekstra kiralt senter i Cβ.

## Klassifisering etter sidekjeden

Aminosyrene deles i fire grupper etter egenskapene til R ved nøytral pH:

| Gruppe (antall) | Aminosyrer | Kjennetegn |
|---|---|---|
| **Hydrofobe (9)** | Gly, Ala, Val, Leu, Ile, Met, Trp, Phe, Pro | Hydrokarboner som unngår vann (alifatiske/aromatiske) |
| **Polare, uladde (6)** | Ser, Thr, Cys, Tyr, Asn, Gln | –OH, –SH eller karboksamid som interagerer med vann |
| **Positive (3)** | Lys, Arg, His | Primær amin, guanidinium, imidazol med ekstra H⁺ |
| **Negative (2)** | Asp, Glu | Karboksylgruppe i sidekjeden som har mistet H⁺ |

Spesielle aminosyrer:

- **Glysin** – eneste ikke-kirale.
- **Prolin** – eneste sykliske (R bundet tilbake til N) → minst fleksible.
- **Aromatiske** (delokaliserte elektroner): Phe (benzen), Tyr (benzen + OH), Trp (indol), His (imidazol). **F, Y og W absorberer UV ved 280 nm** → proteinkonsentrasjon måles med Lambert–Beer: $A_{280} = \varepsilon_{280} \cdot c \cdot l$.
- **Svovelholdige**: Cys (tiol, disulfidbroer) og Met (tioeter).

Hver aminosyre har tre- og én-bokstavkode – se [katalogen](/medod1/proteiner/aminosyrer). Typiske feller: **W** = Trp, **Y** = Tyr, **F** = Phe, **N** = Asn, **D** = Asp, **Q** = Gln, **E** = Glu, **K** = Lys, **R** = Arg.

:::feil
Tyrosin er aromatisk, men plasseres blant de **polare** i forelesningen (–OH). Histidin er aromatisk, men plasseres blant de **positive**. Glysin plasseres blant de hydrofobe.
:::

## Zwitterion og pKa

**pKa er pH-verdien der halvparten av gruppen har avgitt H⁺.** [Henderson–Hasselbalch](/medod1/generell-kjemi/regnetyper/henderson-hasselbalch):

$$pH = pK_a + \log\frac{[\text{base}]}{[\text{syre}]}$$

- pH < pKa → gruppen er hovedsakelig **protonert**.
- pH > pKa → gruppen er hovedsakelig **deprotonert**.
- pH = pKa + 1 → ca. 9 % protonert; pH = pKa + 2 → ca. 1 %.

Ved fysiologisk pH (7,2–7,4) har karboksylgruppen avgitt H⁺ (–COO⁻) og aminogruppen beholdt den (–NH₃⁺) → **zwitterion** (dipolart ion) dominerer.

```smiles-row
[NH3+]C(C)C(=O)O | Lav pH: netto +1
[NH3+]C(C)C(=O)[O-] | Zwitterion: netto 0
NC(C)C(=O)[O-] | Høy pH: netto −1
```

### Typiske pKa-verdier i proteiner (Miesfeld & McEvoy, tabell 4.3)

Syv aminosyrer har ioniserbar sidekjede:

| Gruppe | pKa | Ladning ved pH 7,4 |
|---|---|---|
| α-COOH (C-terminal) | 3,1 | −1 |
| Asp, Glu (–COOH) | 4,0 (lysbilde 14: 4,1) | −1 |
| His (imidazol) | 6,0 | stort sett 0 (delvis +) |
| α-NH₃⁺ (N-terminal) | 8,0 | +1 |
| Cys (–SH) | 8,3 | stort sett 0 |
| Tyr (–OH) | 10,1 | 0 |
| Lys (ε-NH₃⁺) | 10,5 (lysbilde 13: 10,4) | +1 |
| Arg (guanidino) | 12,5 | +1 |

:::feil
Disse verdiene gjelder grupper **i proteiner**. Frie aminosyrer har andre verdier (α-COOH ≈ 2, α-NH₃⁺ ≈ 9–9,7 – f.eks. glysin i eksamensoppgaver). Bruk alltid verdiene oppgaven gir.
:::

## Nettoladning og isoelektrisk punkt (pI)

**Oppskrift for nettoladning:**

1. List alle ioniserbare grupper: N-terminal, C-terminal og ioniserbare sidekjeder.
2. For hver gruppe: sammenlign pH med pKa.
   - Syregrupper (COOH, SH, Tyr-OH): −1 hvis pH > pKa, ellers 0.
   - Basegrupper (NH₃⁺, Arg, His): +1 hvis pH < pKa, ellers 0.
3. Summer.

:::eksempel[Kollokvie: Ala–Gly–Glu–Lys]
N-terminal = Ala (venstre), C-terminal = Lys (høyre). Relevante pKa: α-NH₃⁺ 8,0; α-COOH 3,1; Glu 4,0; Lys 10,5.

| pH | N-term (8,0) | Glu (4,0) | Lys (10,5) | C-term (3,1) | Netto |
|---|---|---|---|---|---|
| 1,0 | +1 | 0 | +1 | 0 | +2 |
| 2,0 | +1 | 0 | +1 | 0 | **+2** |
| 4,5 | +1 | −1 | +1 | −1 | **0** |
| 7,0 | +1 | −1 | +1 | −1 | **0** |
| 12,0 | 0 | −1 | 0 | −1 | **−2** |
:::

**Isoelektrisk punkt (pI)** = pH der molekylet har **netto null ladning**.

- For en aminosyre/peptid: gjennomsnittet av de to pKa-verdiene på hver side av den nøytrale formen. Glysin: (2,3 + 9,6)/2 ≈ 6,0. Histidin (1,82; 6,00; 9,17): pI = (6,00 + 9,17)/2 = 7,59.
- Utregning steg for steg: [Isoelektrisk punkt (pI)](/medod1/generell-kjemi/regnetyper/isoelektrisk-punkt) og [Flerprotiske syrer og aminosyrer](/medod1/generell-kjemi/teori/flerprotiske-syrer-og-aminosyrer).
- **pH < pI → positivt ladet; pH > pI → negativt ladet.** Dette brukes i [ionebyttekromatografi og isoelektrisk fokusering](/medod1/proteiner/teori/proteinmetoder).

:::eksamen
Gjengangere hvert år:

- «Myelin basisk protein (pI ≈ 11–12) / P2 (pI ≈ 10) er negativt ved nøytral pH» er **feil** (det er positivt); «kalmodulin (pI ≈ 4) er negativt ved pH 7» er **riktig** (H2023, H2024, V2024, H2025, V2025) – se [MS og myelin](/medod1/cellebiologi/sammensatte-tema/multippel-sklerose-og-myelin).
- «pH < pKa → protonert», «pH > pKa → deprotonert»; –COOH avgir H⁺ og blir –COO⁻ ved fysiologisk pH.
- Glysin ved pH 7 = zwitterion (V2024, V2025). Ved isoelektrisk punkt er **nettoladningen 0** (ikke «pH = 7» eller «pH = pKa»).
- Aminosyrene klassifiseres etter **de kjemiske egenskapene til R-gruppen** (H2024).
- Peptidladning ved pH 7: Ala-Gly-Tyr-Lys-Val = +1 (V2023); av Tyr-Lys-Met, Gly-Pro-Arg, Asp-Trp-Tyr, Asp-Ala-Glu og Leu-Val-Phe er **Asp-Ala-Glu** mest negativ og **Leu-Val-Phe** mest upolar (V2023).
- Titrering av 50,0 mL 0,1 M H₂A⁺ (Ka1 = 4,6·10⁻³, Ka2 = 2,0·10⁻¹⁰) med 0,1 M NaOH: pH **2,52** etter 30 mL og **9,52** etter 70 mL – se [Titrering av toprotisk aminosyre](/medod1/generell-kjemi/regnetyper/titrering-aminosyre) og [titreringslaben](/medod1/lab/ovelser/titrering-aminosyrer).
:::

## Test deg selv

:::sjekk[Hva er nettoladningen til Ala-Gly-Tyr-Lys-Val ved pH 7?]
N-terminal +1, Lys +1, C-terminal −1, Tyr 0 (pKa 10,1) → **+1**.
:::

:::sjekk[Et protein har pI = 6. Hvilken ladning har det ved pH 8, og hvilken ionebytter binder det?]
pH > pI → negativt ladet → binder til en **anionbytter** (positivt ladd matrise, f.eks. DEAE).
:::

:::sjekk[Hvilke to grupper avgjør pI for en aminosyre uten ioniserbar sidekjede, og hvorfor?]
α-COOH og α-NH₃⁺. Den nøytrale formen (zwitterionet) eksisterer mellom disse to deprotoneringene, så pI = gjennomsnittet av de to pKa-verdiene.
:::

:::sjekk[Hvorfor er histidin den eneste aminosyren som kan være både nøytral og positiv under fysiologiske forhold?]
Imidazol har pKa ≈ 6,0, nær fysiologisk pH. Små endringer i pH eller mikromiljø endrer protoneringsgraden betydelig; alle andre ioniserbare sidekjeder har pKa langt fra 7,4.
:::

:::sjekk[Hvilke 9 aminosyrer er hydrofobe i forelesningens inndeling?]
Gly, Ala, Val, Leu, Ile, Met, Trp, Phe, Pro.
:::
