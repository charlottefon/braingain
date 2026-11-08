---
title: Alkener og alkyner
summary: Hovedkjeden må inneholde flerbindingen(e); nummerer fra enden nærmest flerbindingen; -en for C=C, -yn for C≡C, -dien/-trien/-diyn med innskutt «a» (buta-1,3-dien). Både C=C og C≡C gir -en-yn, laveste lokantsett, og ved likhet får dobbeltbindingen laveste nummer.
order: 2
tags: [IUPAC, alken, alkyn, dien, en-yn, lokant]
related:
  - organisk-kjemi/navnsetting/grunnregler-alkaner
  - organisk-kjemi/navnsetting/stereodeskriptorer
  - organisk-kjemi/funksjonelle-grupper/alkener
  - organisk-kjemi/funksjonelle-grupper/alkyner
sources:
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
  - file: medod1/exams/2026-sensorveiledning-langsvar-medod1-ny-v2026--7644058.docx
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-1--8106129.pdf
    pages: "48-53"
  - file: medod1/exercises/oppgaver-til-forlesning-oc1-iupac-nomenklatur-alkaner-alkener-alkiner--8112302.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2025-medod1-ny-v2025-med-svar--7269873.pdf
  - file: medod1/exams/2023-medod1-ny-v2023-med-svar--5194537.pdf
---

## Regler (forelesning 1)

1. **Stamme** som for alkaner: prop-, but-, pent-, heks- …
2. **Endelse**: C=C → **-en** (eng. *-ene*); C≡C → **-yn** (eng. *-yne*). Flere: **-dien, -trien / -diyn, -triyn** – og stammen får en «a»: **buta**-1,3-dien, **heksa**-1,3,5-trien.
3. **Hovedkjede**: lengste kjede som **inneholder flerbindingen(e)** (selv om en annen kjede er lengre!).
4. **Nummerering**: fra enden **nærmest flerbindingen**; lokanten er det laveste av de to C-atomene i bindingen, og settes **rett foran -en/-yn**: pent-2-en.
5. **Både dobbelt- og trippelbinding**: kombinert endelse **-en-yn** (alltid «en» før «yn»). Velg nummerering som gir **laveste sett av lokanter for alle flerbindingene samlet**; ved **likhet** får **dobbeltbindingen** laveste nummer.
6. Substituenter etter vanlige regler (alfabetisk, laveste lokanter etter at flerbindingene har fått sine).

:::husk
Prioritet ved nummerering (når ingen suffiksgruppe som -ol finnes): **flerbindinger samlet → dobbeltbinding ved likhet → substituenter**.
Moderne skrivemåte: lokanten står rett foran endelsen (**but-1-en**, **3-metylpent-2-en**). Eldre skrivemåte (vanlig i eldre eksamener): 1-buten, 2-metyl-1,3-pentadien. Begge forstås.
:::

## Arbeidede eksempler: struktur → navn

| Struktur | Navn | Begrunnelse |
|---|---|---|
| CH₂=CH–CH₂–CH₃ | **but-1-en** | C=C fra C1 |
| CH₃–CH=C(CH₃)–CH₂–CH₃ | **3-metylpent-2-en** | fra venstre: C=C på 2 (fra høyre 3) |
| CH₂=CH–CH=CH₂ | **buta-1,3-dien** | to C=C, «a» innskutt |
| CH₂=CH–CH=CH–CH=CH₂ | **heksa-1,3,5-trien** | |
| HC≡C–CH₂–CH₃ | **but-1-yn** | |
| CH₃–C≡C–CH₂–CH₃ | **pent-2-yn** | |
| HC≡C–CH(CH₃)–CH₂–CH₃ | **3-metylpent-1-yn** | C≡C på 1, metyl på 3 |
| HC≡C–C≡CH | **buta-1,3-diyn** | |
| CH₂=CH–C≡CH | **but-1-en-3-yn** | {1,3} begge veier → C=C får 1 |
| CH₂=CH–CH₂–C≡CH | **pent-1-en-4-yn** | {1,4} begge veier → C=C får 1 |
| CH₃–CH=CH–C≡CH | **pent-3-en-1-yn** | fra høyre {1,3}, fra venstre {2,4} → høyre; C≡C får 1 |

```smiles-row
CC=C(C)CC | 3-metylpent-2-en
C=CC=CC=C | Heksa-1,3,5-trien
C#CC(C)CC | 3-metylpent-1-yn
CC=CC#C | Pent-3-en-1-yn
```

:::feil
**Pent-3-en-1-yn**, ikke «pent-2-en-4-yn»: laveste lokantsett {1,3} slår {2,4}, og regelen om at dobbeltbindingen får lavest nummer gjelder **bare ved likhet**.
:::

## Navn → struktur

:::eksempel[2-metylheks-3-en]
1. Heks = 6 C; -3-en → C3=C4.
2. 2-metyl → CH₃ på C2.
3. CH₃–CH(CH₃)–CH=CH–CH₂–CH₃.
4. Kontroll av nummerering: fra høyre ville C=C også fått 3, men metyl fått 5 → 2 er riktig.
:::

```smiles 2-metylheks-3-en
CC(C)C=CCC
```

:::eksempel[Eksamen h2025: diener]
CH₂=C(CH₃)–CH=CH–CH₃: hovedkjeden med begge C=C har 5 C → **2-metylpenta-1,3-dien** (eldre skrivemåte: 2-metyl-1,3-pentadien).
CH₂=C(CH₂CH₃)–CH=CH₂: kjeden som inneholder **begge** dobbeltbindingene har bare 4 C (etylgruppen blir substituent) → **2-etylbuta-1,3-dien**. En lengre kjede gjennom etylgruppen ville bare inneholdt én C=C.
:::

```smiles-row
C=C(C)C=CC | 2-metylpenta-1,3-dien
C=C(CC)C=C | 2-etylbuta-1,3-dien
```

:::eksempel[Eksamenstype v2023/v2025: CH₃–CH=C(CH₂CH₂CH₃)–CH₂CH₂CH₃]
1. Kjeden gjennom begge propylgruppene er 7 C, men inneholder bare det ene dobbeltbindingskarbonet (C=C ligger i en sidegren).
2. Etter kursets regel (lengste kjede **som inneholder C=C**): CH₃–CH=C–CH₂CH₂CH₃ = 6 C, C=C fra C2 → heks-2-en; den andre propylgruppen sitter på C3.
3. **3-propylheks-2-en** (eldre: 3-propyl-2-heksen). Feller i alternativene: «4-propyl-4-heksen» (nummerert fra feil ende), «4-propyl-3-hepten» og «1,1-dipropyl-1-buten» (passer ikke strukturen).
:::

:::eksempel[Eksamen h2024: CH₃–CH₂–C≡C–CH(CH₃)–CH₂–CH₃]
1. Kjede 7 C med C≡C → heptyn.
2. Fra venstre: C≡C på C3, metyl på C5. Fra høyre: C≡C på C4. → nummerer fra venstre (flerbindingen først!).
3. **5-metylhept-3-yn** (eldre: 5-metyl-3-heptyn). Ikke «3-metyl-4-heptyn» – metylen får ikke lavest nummer før flerbindingen har fått sitt.
:::

:::eksempel[Eksamen v2026 (kortsvar): CH₂=C(CH₃)–CH₃]
Hovedkjede 3 C med C=C fra C1 → propen; metyl på C2 → **2-metylpropen** (2-metylprop-1-en; lokanten 1 kan sløyfes fordi den er den eneste muligheten). Sensorveiledning: «dobbeltbinding på karbon 1, starter å telle derfra».
:::

```smiles-row
CC=C(CCC)CCC | 3-propylheks-2-en
CCC#CC(C)CC | 5-metylhept-3-yn
C=C(C)C | 2-metylpropen
```

:::eksamen
Navn på alkener/diener fra figur kommer jevnlig (h2025 og h2023 diener – «2-etyl-1,3-butadien» mot feilene «3-etyl-1,3-butadien»/«3-etyl-1,3-buten»; v2023/v2025 3-propylheks-2-en; h2024 5-metylhept-3-yn; v2026 kortsvar 2-metylpropen). Sjekk: (1) inneholder hovedkjeden flerbindingene? (2) er nummereringen fra riktig ende? (3) er det cis/trans eller E/Z som skal med (se [Stereodeskriptorer](/medod1/organisk-kjemi/navnsetting/stereodeskriptorer))?
:::

## Test deg selv

:::sjekk[Navngi CH₃–CH₂–C(=CH₂)–CH₂–CH₂–CH₃.]
2-etylpent-1-en. Lengste kjede som inneholder C=C: CH₂=C–CH₂CH₂CH₃ = 5 C (kjeden gjennom etyl- og propylgruppen er 6 C, men inneholder ikke dobbeltbindingen). C=C på C1, etyl på C2.
:::

:::sjekk[Hva heter HC≡C–CH₂–CH=CH₂?]
Pent-1-en-4-yn. Lokantsett {1,4} fra begge ender; ved likhet får dobbeltbindingen 1.
:::

:::sjekk[Tegn buta-1,3-dien og forklar «a»-en i navnet.]
CH₂=CH–CH=CH₂. Ved multiplikative endelser (-dien, -trien) settes «a» inn etter stammen av uttalehensyn: buta-, penta-, heksa-.
:::

:::sjekk[Hvorfor heter CH₃CH=CHCH₃ but-2-en og ikke but-3-en?]
Man nummererer fra enden nærmest dobbeltbindingen og bruker det laveste av de to C-numrene. Fra begge ender ligger C=C mellom C2 og C3 → but-2-en.
:::
