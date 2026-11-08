---
title: Syrer, baser og pH
summary: Syre–base-definisjonene (Arrhenius ⊂ Brønsted–Lowry ⊂ Lewis), korresponderende syre–base-par og amfolytter. Vannets ioneprodukt Kw = 1,0·10⁻¹⁴ og pH-skalaen. Sterke syrer og baser protolyseres fullstendig, mens svake bare delvis. Syrestyrken bestemmes av bindingsstyrke og polaritet (oksosyrer, karboksylsyrer).
order: 8
tags: [syre, base, Brønsted-Lowry, Lewis, Arrhenius, amfolytt, pH, pOH, Kw, vannets ioneprodukt, sterk syre, oksosyre, syrestyrke]
related:
  - generell-kjemi/teori/syre-base-likevekter
  - generell-kjemi/teori/buffere
  - generell-kjemi/regnetyper/ph-og-h3o-omregning
  - generell-kjemi/regnetyper/ph-sterk-syre-og-base
  - generell-kjemi/regnetyper/noytralisering-sterk-syre-base
  - organisk-kjemi/grunnlag/resonans-syrer-og-baser
  - organisk-kjemi/funksjonelle-grupper/karboksylsyrer
sources:
  - file: medod1/material/generell-kjemi/forelesning3-del1-3-2026--8030911.pdf
    pages: "10-32"
  - file: medod1/material/generell-kjemi/hyperventilering--7794027.pdf
    pages: "8"
  - file: medod1/exercises/oppgavesett2-2026--8047637.pdf
  - file: medod1/exercises/oppgavesett2-2026-fasit--8047656.pdf
  - file: medod1/exercises/oppgavesett-4-fasit-2026--8204433.pdf
  - file: medod1/exams/2025-medod1-ny-v2025-med-svar--7269873.pdf
  - file: medod1/exams/2022-medod1-h2022-med-svar--4750110.pdf
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
---

## Tre definisjoner av syrer og baser

| Definisjon | Syre | Base | Eksempel |
|---|---|---|---|
| **Arrhenius** | øker [H⁺] (= [H₃O⁺]) i vann | øker [OH⁻] i vann | $\ce{HA -> H+ + A-}$; $\ce{MOH -> M+ + OH-}$ |
| **Brønsted–Lowry** | **protondonor** (avgir H⁺) | **protonakseptor**; må ha minst ett ledig elektronpar | $\ce{NH3 + H2O <=> NH4+ + OH-}$ |
| **Lewis** | **elektronparakseptor** (ledige valensorbitaler) | **elektronpardonor** | Lewis-syrer: Al³⁺, Cu²⁺, H⁺, BF₃. Lewis-baser: H₂O, NH₃, O²⁻ |

Definisjonene er nestet: Lewis omfatter Brønsted–Lowry, som omfatter Arrhenius. I kurset brukes i hovedsak **Brønsted–Lowry**. Lewis-definisjonen brukes om komplekser, der liganden er Lewis-base og metallionet Lewis-syre (se [løselighet og komplekser](/medod1/generell-kjemi/teori/loselighet-og-komplekser)).

H⁺ finnes ikke fritt i vann, men som **hydroniumion** H₃O⁺. I formler skrives [H⁺] og [H₃O⁺] om hverandre.

### Begreper

- **Korresponderende syre–base-par**: to forbindelser som bare skiller seg med ett proton (HA/A⁻, NH₄⁺/NH₃, H₂CO₃/HCO₃⁻).
- **Protolyse**: avgivelse av proton. **Protonering** betyr å ta opp H⁺, **deprotonering** å avgi H⁺.
- **Mono-, di- og triprotiske syrer** kan avgi henholdsvis 1, 2 og 3 protoner: HCl og HNO₃ er monoprotiske, H₂SO₄ diprotisk, H₃PO₄ triprotisk. «Sure» H-atomer sitter på elektronegative atomer, vanligvis O.
- **Amfolytt (amfiprotisk/amfoter forbindelse)**: kan virke både som syre og base. Eksempler er H₂O, HCO₃⁻, HSO₄⁻, H₂PO₄⁻ og aminosyrer (HA-formen).

Vann er en amfolytt. Det virker som **base** når en syre tilsettes ($\ce{HA + H2O <=> A- + H3O+}$), fordi O har ledige elektronpar. Det virker som **syre** når en base tilsettes ($\ce{NH3 + H2O <=> NH4+ + OH-}$).

## Vannets egendissosiasjon og Kw

$$\ce{H2O(l) + H2O(l) <=> H3O+(aq) + OH-(aq)}$$

Vann har relativ konsentrasjon 1 og faller ut av uttrykket, og vi får **vannets ioneprodukt**:

$$K_w = [H_3O^+][OH^-] = 1{,}0\cdot10^{-14}\quad(25\,^\circ\text{C})$$

I rent vann er $[H_3O^+] = [OH^-] = 1{,}0\cdot10^{-7}$ M. $K_w$ er konstant i alle tynne vannløsninger, så når man kjenner den ene konsentrasjonen, kjenner man også den andre.

:::husk
$K_w$ står **ikke** i formelheftet og blir ikke gitt på eksamen (spørretime 1). Lær $K_w = 1{,}0\cdot10^{-14}$, $pK_w = 14$ og $K_aK_b = K_w$ utenat.
:::

## pH-skalaen

$$pH = -\log[H_3O^+] \qquad pOH = -\log[OH^-] \qquad pH + pOH = 14$$
$$[H_3O^+] = 10^{-pH} \qquad [OH^-] = 10^{-pOH}$$

| Løsning | Betingelse | pH (25 °C) |
|---|---|---|
| Sur | $[H_3O^+] > [OH^-]$ | < 7 |
| Nøytral | $[H_3O^+] = [OH^-]$ | = 7 |
| Basisk | $[H_3O^+] < [OH^-]$ | > 7 |

Skalaen er **logaritmisk**. Én pH-enhet tilsvarer faktor 10 i [H₃O⁺], to enheter faktor 100, og 0,3 enheter omtrent faktor 2.

:::eksempel[Forelesning 3: [H₃O⁺] og [OH⁻] i blod, pH 7,4]
$[H_3O^+] = 10^{-7{,}4} = 4{,}0\cdot10^{-8}$ M (40 nM).
$[OH^-] = K_w/[H_3O^+] = 1{,}0\cdot10^{-14}/4{,}0\cdot10^{-8} = 2{,}5\cdot10^{-7}$ M.
Kontroll: $(4{,}0\cdot10^{-8})(2{,}5\cdot10^{-7}) = 1{,}0\cdot10^{-14}$ ✓.
:::

| Arterielt blod | [H⁺] |
|---|---|
| pH 6,8 (ytre grense) | 160 nM |
| pH 7,4 (normal; referanse 7,35–7,45) | 40 nM |
| pH 7,8 (ytre grense) | 16 nM |

:::eksamen
Omregninger mellom pH og [H₃O⁺] kommer på nesten hver eksamen:
- [H₃O⁺] blir 100× høyere: pH synker med 2 (6 → 4; 5 → 3) (V2026, H2025).
- pH 7,4 tilsvarer 40 nM, og pH 7,1 tilsvarer 80 nM (V2025).
- Oppgavesett 2: pH 7,7 er 20 nM. Dobles [H₃O⁺] til 40 nM, blir pH 7,4.
- Mengde i volum: 5 nmol H₃O⁺ i 100 mL gir 5·10⁻⁸ M og pH 7,3 (H2022).
- Magesaft med pH 1,5 har [H⁺] = 32 mM (H2022, H2023).
- 10 mM H₃O⁺ gir pH **2** (V2024). 1 M NaOH gir pOH 0 og pH **14** (H2024).
- 50 mL 0,1 M HCl + 30 mL 0,1 M NaOH: 2 mmol H⁺ til overs i 80 mL gir 0,025 M og pH **1,60** (H2025).
Se [omregning pH ↔ konsentrasjon](/medod1/generell-kjemi/regnetyper/ph-og-h3o-omregning).
:::

## Sterke og svake syrer og baser

- **Sterke syrer** protolyseres **fullstendig** (100 %) i vann. Eksempler er HCl, HBr, HNO₃, H₂SO₄ (første trinn) og HClO₄. Det betyr at $[H_3O^+] = c_{syre}$.
- **Sterke baser** dissosierer fullstendig til metallkation og OH⁻: NaOH, KOH, Ca(OH)₂ (gir **2** OH⁻ per formelenhet).
- **Svake syrer og baser** reagerer bare delvis. Løsningen inneholder en blanding av ioniserte og ikke-ioniserte molekyler i likevekt, beskrevet av $K_a$ eller $K_b$ (se [syre–base-likevekter](/medod1/generell-kjemi/teori/syre-base-likevekter)).
- Er syren sterk, er den **korresponderende basen svak**, og omvendt. Sterke syrer er sterke elektrolytter.

:::eksempel[Forelesning 3: pH i 0,025 M HNO₃]
HNO₃ er en sterk syre, så $[H_3O^+] = 0{,}025$ M og $pH = -\log 0{,}025 = 1{,}60$.
:::

:::feil
**Styrke ≠ konsentrasjon.** En svak syre er ikke det samme som en fortynnet sterk syre. Eksamensspørsmålet «hvilken er en sterk syre?» har riktig svar **5 mM eller 50 mM HCl**. Alternativene 750 mM fosforsyre, 3,0 M glutaminsyre og NaOH er bevisste feller (V2023, V2025, H2021).
:::

Utregninger: [pH i sterk syre/base](/medod1/generell-kjemi/regnetyper/ph-sterk-syre-og-base) og [blanding av sterk syre og sterk base](/medod1/generell-kjemi/regnetyper/noytralisering-sterk-syre-base).

## Hva bestemmer syrestyrken?

Styrken avhenger av **hvor lett syren ioniserer**. For en generell syre H–A gjelder:
- jo **svakere** H–A-bindingen er, desto sterkere er syren;
- jo **mer polar** H–A-bindingen er, desto sterkere er syren (avhenger av elektronegativiteten til A).

### Oksosyrer (Y–O–H)

For oksosyrer er **bindingspolariteten** viktigst. Jo mer sentralatomet Y trekker på elektronene i Y–O-bindingen, desto mer polar blir O–H-bindingen, og desto lettere avgis H⁺.

- Samme gruppe og samme oksidasjonstall: syrestyrken øker med **økende elektronegativitet** til Y (HOCl > HOBr > HOI).
- Samme Y: **flere O-atomer** på Y gir sterkere syre. For klor er rekkefølgen HClO < HClO₂ < HClO₃ < HClO₄.

### Karboksylsyrer

[Karboksylsyrer](/medod1/organisk-kjemi/funksjonelle-grupper/karboksylsyrer) (R–COOH) er biologisk viktige: eddiksyre/acetat, sitronsyre, glutaminsyre, fettsyrer. Den negative ladningen i karboksylatet **delokaliseres (resonans)** over begge O-atomene, og den stabiliserte basen gjør syren sterkere enn alkoholer. Elektrontrekkende substituenter som Cl stabiliserer anionet ytterligere: **pKa synker, og syren blir sterkere** (V2026, organisk del). Mer om resonans og syrestyrke i organiske molekyler (fenol, alkoholer): [resonans, syrer og baser](/medod1/organisk-kjemi/grunnlag/resonans-syrer-og-baser).

```smiles-row
CC(=O)O | Eddiksyre (pKa 4,74)
OC(=O)CC(O)(CC(=O)O)C(=O)O | Sitronsyre (triprotisk)
ClCC(=O)O | Kloreddiksyre – sterkere syre
```

## Test deg selv

:::sjekk[Er NH₃ en Arrhenius-base, en Brønsted–Lowry-base eller en Lewis-base?]
Alle tre i praksis. NH₃ øker [OH⁻] i vann (Arrhenius i vid forstand), tar opp H⁺ (Brønsted–Lowry) og donerer sitt ledige elektronpar (Lewis). Brønsted–Lowry er definisjonen kurset bruker.
:::

:::sjekk[Hvorfor er HCO₃⁻ en amfolytt?]
HCO₃⁻ kan både avgi et proton (til CO₃²⁻) og ta opp et proton (til H₂CO₃). Den er altså både syre og base, og er den mellomliggende formen i karbonsyresystemet.
:::

:::sjekk[[OH⁻] = 1,0·10⁻⁵ M. Hva er pH?]
pOH = 5,0, så pH = 14 − 5,0 = **9,0** (H2023).
:::

:::sjekk[2 L av en sterk syre har pH 2. Hvor mye vann må tilsettes for å få pH 3?]
pH 3 krever 10× lavere [H⁺], altså 10× større volum: 20 L totalt. Man må tilsette **18 L** vann (H2023). Spørsmålet gjelder tilsatt vann, ikke totalvolumet.
:::

:::sjekk[Hvorfor er HClO₄ en sterkere syre enn HClO?]
De tre ekstra O-atomene på Cl trekker elektroner fra O–H-bindingen og gjør den mer polar. Den negative ladningen i ClO₄⁻ fordeles dessuten over fire O-atomer, så basen blir stabil. H⁺ avgis derfor lettere.
:::
