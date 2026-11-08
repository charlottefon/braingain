---
title: Stereodeskriptorer i navn – cis/trans, E/Z, R/S, D/L
summary: Stereodeskriptorer settes i parentes foran det fullstendige navnet med lokant – (2R)-2-brombutan, (2E)-but-2-en, (3R,4E)-hept-4-en-3-ol. cis/trans for like grupper, E/Z etter CIP-prioritet, R/S for stereosentre, D/L for sukker og aminosyrer.
order: 8
tags: [IUPAC, stereo, E/Z, cis, trans, R/S, D/L, deskriptor]
related:
  - organisk-kjemi/grunnlag/kiralitet-og-r-s
  - organisk-kjemi/grunnlag/isomeri-og-konformasjon
  - organisk-kjemi/grunnlag/enantiomerer-diastereomerer-meso
  - organisk-kjemi/navnsetting/alkener-og-alkyner
  - organisk-kjemi/biomolekyler/monosakkarider
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-2a-3--8116857.pdf
    pages: "12-16, 26-31"
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-5--8135969.pdf
    pages: "5-6"
  - file: medod1/exercises/r-og-s-konfigurasjon-oppgaver-med-losninger--8122255.pdf
  - file: medod1/exercises/kollokvier-organisk-kjemi--7794158.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2024-medod1-ny-v2024-med-svar--5897534.pdf
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
---

## Oversikt

| Deskriptor | Brukes for | Bestemmes av | Eksempel |
|---|---|---|---|
| *cis*/*trans* | dobbeltbinding eller ring med to like/tilsvarende grupper | om de like gruppene står på samme/motsatt side | *cis*-but-2-en, *trans*-1,2-dimetylsykloheksan |
| **E/Z** | alle dobbeltbindinger med cis/trans-isomeri | CIP-prioritet på hvert sp²-C | (2Z)-but-2-en, (2E)-3-fenylprop-2-enal |
| **R/S** | stereogene sentre | CIP-prioritet + romlig orientering | (2R)-2-brombutan |
| **D/L** | sukker og aminosyrer | OH/NH₂ på stereosenteret lengst fra karbonyl i Fischer-projeksjon: høyre = D | D-glukose, L-alanin |
| (+)/(−) | optisk dreiing | måles eksperimentelt | (R)-(−)-karvon |
| meso / *rac* / (RS) | meso-forbindelse / racemat | | meso-2,3-diklorbutan, (RS)-ibuprofen |

## Hvordan deskriptoren skrives

- **I parentes foran hele navnet**, med lokant: **(2R)-2-brombutan**, **(2S)-butan-2-ol**, **(2E)-but-2-en**.
- Flere deskriptorer: i **nummerrekkefølge**, adskilt med komma: **(3R,4E)-hept-4-en-3-ol**, **(2R,3S)-3-klorbutan-2-ol**.
- Lokanten kan sløyfes når det bare finnes ett stereosenter: (R)-2-brombutan.
- *cis*/*trans* skrives i kursiv uten parentes: *cis*-but-2-en.
- Racemat: (RS)- eller *rac*-.

## E/Z – fremgangsmåte

1. Del dobbeltbindingen i to halvdeler.
2. På hvert sp²-C: finn gruppen med **høyest CIP-prioritet** (høyest atomnummer; ved likhet første forskjell; dobbeltbindinger telles dobbelt).
3. Begge høyprioriterte grupper på **samme side → Z** (*zusammen*); **motsatt side → E** (*entgegen*).

:::eksempel[(E)-3-brom-2-klorpent-2-en (kollokvium) – navn → struktur]
1. Pent-2-en: CH₃–C2=C3–CH₂–CH₃.
2. Cl på C2, Br på C3.
3. Prioritet: C2: Cl > CH₃; C3: Br > CH₂CH₃.
4. E → Cl og Br på **motsatte** sider.
:::

```smiles-row
C/C(Cl)=C(\Br)CC | (E)-3-brom-2-klorpent-2-en
C/C(Cl)=C(/Br)CC | (Z)-3-brom-2-klorpent-2-en
```

:::eksempel[Eksamen h2025: E, Z, cis eller trans?]
C=C med HC≡C– og CH₂=CH– på venstre karbon, CH₂=CH– og HOCH₂– på høyre; de to vinylgruppene (CH₂=CH–) står på motsatt side.
- **cis/trans** ser på de like gruppene (vinyl og vinyl): motsatt side → **trans** (eksamensnøkkelens svar).
- **CIP**: venstre C: –C≡CH [C,C,C] > –CH=CH₂ [C,C,H]. Høyre C: –CH₂OH [O,H,H] > –CH=CH₂ [C,C,H] (O slår C). Etynyl og CH₂OH står på motsatt side → **E**.
- Her er altså både *trans* og *E* riktige beskrivelser – men E og trans **kan** gi motsatt svar (se under). Nøkkelen godtok bare «trans», så les nøye hva spørsmålet spør etter (like grupper → cis/trans).
:::

:::feil
**Cis ≠ Z og trans ≠ E i alle tilfeller.** I (CH₃)HC=C(CH₃)(CH₂CH₃) med de to CH₃ på samme side («cis-dimetyl») er etyl høyest på C3 → de høyprioriterte gruppene (CH₃ på C2, C₂H₅ på C3) står motsatt → **E**.
:::

## R/S i navn – eksempler fra oppgavesettet

| Struktur | Navn |
|---|---|
| CH₃–CH(Br)–COOH, R | **(2R)-2-brompropansyre** |
| CH₃CH₂–CH(OH)–CH=CH–CH₂CH₃, R og E | **(3R,4E)-hept-4-en-3-ol** |
| CH₃–CH(Br)–CH₂CH₃, R | **(2R)-2-brombutan** |
| meso-2,3-dimerkaptoravsyre | **(2S,3R)-2,3-bis(sulfanyl)butandisyre** (succimer) |

Fremgangsmåten for å bestemme R/S er i [Kiralitet og R/S](/medod1/organisk-kjemi/grunnlag/kiralitet-og-r-s).

```smiles-row
[C@H](Br)(C(=O)O)C | (2R)-2-brompropansyre
[C@H](O)(/C=C/CC)CC | (3R,4E)-hept-4-en-3-ol
[C@H](Br)(CC)C | (2R)-2-brombutan
```

:::eksempel[Navn → struktur: (2S)-2-klorbutan (kollokvium 13)]
1. Butan, Cl på C2. Stereosenter C2: H, Cl, CH₃, C₂H₅.
2. Prioritet: Cl > C₂H₅ > CH₃ > H.
3. Tegn med H på stiplet kile (bakover) og plasser Cl → C₂H₅ → CH₃ **mot klokka** (S).
:::

```smiles (2S)-2-klorbutan
[C@@H](Cl)(CC)C
```

## D/L

- Fischers eldre system, fortsatt standard for **sukker og aminosyrer**.
- Sukker: OH på stereosenteret **lengst fra karbonylgruppen** til **høyre = D**, venstre = L (de fleste naturlige sukker er D).
- Aminosyrer: L-aminosyrer i proteiner (de fleste er S; cystein er R).
- D/L er **ikke** det samme som (+)/(−) eller R/S.

:::eksamen
v2026: «Hva bestemmer om et monosakkarid er D- eller L-form?» → orienteringen av OH på det stereogene karbonet lengst fra karbonylgruppen. h2025: «Hvilke konfigurasjoner har de to forbindelsene?» (R/S på figur); v2023: «(R)-2-brompentan / (S)-2-brombutan …» – sjekk både kjedelengde **og** deskriptor. v2026 hadde åpne oppgaver: «Oppgi IUPAC-navnet» (3 strukturer) og «Foreligger strukturene som R eller S?».
:::

## Test deg selv

:::sjekk[Skriv fullt navn for CH₃CH=CHCH₃ der metylgruppene står på motsatt side.]
(2E)-but-2-en (eller *trans*-but-2-en). Her er E og trans det samme fordi CH₃ er høyest prioritet på begge C.
:::

:::sjekk[Hvordan skrives navnet på 3-klorbutan-2-ol med R ved C2 og S ved C3?]
(2R,3S)-3-klorbutan-2-ol – deskriptorene i lokantrekkefølge i én parentes foran navnet.
:::

:::sjekk[Kan et molekyl være både R og (−)?]
Ja. R/S beskriver romlig ordning etter CIP-regler; (+)/(−) er eksperimentell dreieretning. Det er ingen fast sammenheng – f.eks. (R)-(−)-karvon.
:::

:::sjekk[Hvorfor brukes E/Z i stedet for cis/trans for 1-brom-1-klorprop-1-en?]
C1 har Br og Cl – ingen av dem er «lik» noen gruppe på C2 (H og CH₃), så cis/trans er udefinert. E/Z bruker CIP: Br (C1) og CH₃ (C2) er høyest prioritet.
:::
