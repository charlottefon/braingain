---
title: Peptidbindingen
summary: Kondensasjon mellom COOH og NH₂ gir en plan, stiv amidbinding med partiell dobbeltbindingskarakter. Nesten alltid trans; rotasjon skjer bare rundt φ og ψ (Ramachandran-plott).
order: 2
tags: [peptidbinding, resonans, trans, cis, Ramachandran, N-terminal]
related:
  - proteiner/teori/aminosyrer
  - proteiner/teori/proteinstruktur
  - proteiner/aminosyrer/prolin
  - organisk-kjemi/reaksjoner/amiddannelse-og-hydrolyse
  - organisk-kjemi/funksjonelle-grupper/amider
  - organisk-kjemi/grunnlag/resonans-syrer-og-baser
sources:
  - file: medod1/material/proteiner/proteiner-1-am-2026--8186375.pdf
    pages: "16-19, 23-25"
  - file: medod1/material/proteiner/intro-forelesning--7794102.pdf
    pages: "6"
---

## Dannelse

Karboksylgruppen på én aminosyre kobles til aminogruppen på den neste, og **vann frigjøres** (kondensasjon; energikrevende i cellen). Peptidbindingen er en **amidbinding** – se [amiddannelse og amidhydrolyse](/medod1/organisk-kjemi/reaksjoner/amiddannelse-og-hydrolyse):

$$\ce{R1-COOH + H2N-R2 -> R1-CO-NH-R2 + H2O}$$

```smiles Dipeptid Ala-Gly (peptidbindingen = C(=O)–N)
NC(C)C(=O)NCC(=O)O
```

- Kjeden har retning: **N-terminal → C-terminal**. Sekvenser skrives alltid fra N- til C-terminal (Ala-Gly ≠ Gly-Ala).
- Peptidbindingen er **svært stabil**: hydrolysen er ekstremt langsom (halveringstid hundrevis av år under fysiologiske betingelser) – derfor trengs proteaser.
- Hovedkjeden (alt unntatt R-gruppene, –N–Cα–C–) kalles proteinets **ryggrad (backbone)**.

## Begreper og størrelser

| Begrep | Definisjon (forelesningen) |
|---|---|
| Aminosyrerest («residue») | Aminosyre i kjeden, ~128 − 18 (vann) ≈ **110 Da** |
| Oligopeptid | Få aminosyrer |
| Polypeptid | **10–50** rester (1100–5500 Da) |
| Protein | **> 50** rester (> 5500 Da) |

Største protein i kroppen: **titin**, > 34 000 aminosyrer («gummistrikk» i muskel).

## Partiell dobbeltbinding → plan og stiv

Elektronparet på amid-N delokaliseres mot karbonyl-O ([resonans](/medod1/organisk-kjemi/grunnlag/resonans-syrer-og-baser), som i alle [amider](/medod1/organisk-kjemi/funksjonelle-grupper/amider)):

```smiles-row
CC(=O)NC | Resonansform 1: C=O og C–N
CC([O-])=[NH+]C | Resonansform 2: C–O⁻ og C=N⁺
```

Konsekvenser:

- C–N-bindingen er kortere (ca. 1,32 Å) enn en vanlig C–N-enkeltbinding (ca. 1,46 Å, som N–Cα) og **kan ikke rotere fritt**.
- De **6 atomene** Cα₁, C, O, N, H og Cα₂ ligger i **samme plan** (amidplanet) og beveger seg sammen.
- Hovedkjeden har høyt **H-bindingspotensiale**: N–H er god H-bindingsdonor, C=O god akseptor (δ⁺/δ⁻). Det er grunnlaget for sekundærstruktur.

## Trans og cis

- Nesten alle peptidbindinger er **trans**: de to Cα (og deres R-grupper) står på hver sin side, slik at sidekjedene ikke kolliderer.
- trans/cis ≈ **1000 : 1** for vanlige aminosyrer, men bare **4 : 1** foran **prolin** (ringen gir sterisk hindring i begge former).
- Cis–trans-isomerisering av prolylbindinger er langsom og katalyseres av peptidyl-prolyl-isomeraser, f.eks. **cyklofilin** (øker hastigheten ~10⁵ ganger; tabell i Enzymer 1).

## φ og ψ – Ramachandran-plottet

Fri rotasjon finnes bare rundt de to enkeltbindingene på hver side av Cα:

- **φ (phi)**: N–Cα
- **ψ (psi)**: Cα–C(=O)

Ikke alle kombinasjoner er mulige pga. steriske kollisjoner. **Ramachandran-plottet** viser hvilke φ/ψ-kombinasjoner som er tillatt: store områder for **β-tråd** og **høyrehendt α-heliks** (vanlig), et lite område for venstrehendt heliks (svært sjelden). Glysin har flest tillatte vinkler; prolin færrest.

:::husk
Proteiner er fleksible, men har **begrenset konformasjonsvariabilitet** fordi (1) peptidbindingen er plan og (2) den er trans. Uten disse begrensningene kunne ikke kjeden danne faste strukturer.
:::

:::eksamen
«Peptidbindingen har **delvis dobbeltbindingskarakter**» (V2025). «Ved dannelse av peptidbinding **frigjøres** et vannmolekyl» (H2024; felle: «vann innlemmes», «det er en H-binding»). Ramachandran-plottet = hvilke φ/ψ-kombinasjoner som er sterisk tillatt (H2025). Peptid- og disulfidbindinger er kovalente (V2023).
:::

:::feil
Rotasjonen begrenses av **resonans/partiell dobbeltbinding**, ikke av R-gruppene. Fasiten i V2026 (oppg. 67) markerte «R-gruppene roterer fritt, øker sterisk hindring og låser bindingen plant» – det er i strid med forelesningen (lysbilde 23) og med V2025-fasiten. Lær forelesningens forklaring.
:::

## Test deg selv

:::sjekk[Hvorfor er peptidbindingen plan?]
Resonans mellom C=O og amid-N gir C–N-bindingen partiell dobbeltbindingskarakter; det hindrer rotasjon og låser de seks atomene Cα–C(O)–N(H)–Cα i ett plan.
:::

:::sjekk[Hvor kan polypeptidkjeden rotere, og hva viser Ramachandran-plottet?]
Rundt N–Cα (φ) og Cα–C (ψ). Plottet viser hvilke φ/ψ-kombinasjoner som er sterisk mulige, med tette områder for α-heliks og β-tråd.
:::

:::sjekk[Hvorfor er cis-peptidbindinger mye vanligere foran prolin?]
Prolins ring kolliderer sterisk med nabogruppene i begge konfigurasjoner, så trans har liten fordel (4 : 1 mot 1000 : 1 ellers).
:::

:::sjekk[Hvor mange aminosyrerester har et protein på 33 kDa omtrent?]
33 000 / 110 ≈ 300 rester.
:::
