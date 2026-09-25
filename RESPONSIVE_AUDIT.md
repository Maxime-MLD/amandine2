# Audit responsive Amandine — 24 septembre 2026

## Périmètre

Corrections du responsive uniquement : textes, sections, identité graphique et séquences d'animation conservés. Aucun changement de framework, aucune dépendance ajoutée, aucun `scale()` ou `zoom` appliqué au site. La modification préexistante de `package-lock.json` n'a pas été touchée.

## Constats et corrections

| Constat | Correction |
| --- | --- |
| Le token de page valait `#F1F1F1`, contrairement au cadre `#F9F9F9`. | Fond `html` et `body` en `#F9F9F9` via le token partagé. Le cadre ne porte plus de fond propre. Aucune occurrence de `#F1F1F1` dans `src/`. |
| Cadre plafonné à 1440 px et marges cumulées : Hero de 1424 px à 1920 px, marges de 248 px. | Cadre et container à 100 %, plafond commun de 2048 px, paddings `clamp(16px, 2vw, 32px)`. Hero de 1856 px à 1920 px, soit 96,7 % du viewport. |
| Hero plafonné à 720 px, indépendamment de la hauteur disponible. | `min-height: calc(100dvh - var(--navbar-height) - 2 * var(--frame-space))`. Le texte peut agrandir le Hero si nécessaire. Taille de titre et padding tiennent aussi compte de la hauteur. |
| Saut de hauteur du portrait à 640 px et image ne tenant pas compte de sa boîte. | Hauteur de portrait mobile fluide, images détourées en `object-fit: contain`, alignées en bas ; proportions et visages préservés. |
| Quatre cartes dès 1024 px : environ 232 px chacune avant correction. | Deux colonnes de 600 à 1279 px ; quatre à partir de 1280 px. Une colonne en dessous de 600 px. |
| Les champs du formulaire passaient en deux colonnes selon la largeur de l'écran, même dans une carte étroite. | Container query à 448 px de largeur intérieure du formulaire. |
| L'élargissement des cercles éditoriaux pouvait faire dépasser le panneau sticky sur les écrans peu hauts. | Largeur de galerie bornée par la hauteur du viewport lorsque le panneau est sticky. |
| Les attributs `sizes` correspondaient à l'ancien cadre. | Mise à jour des tailles responsives du Hero, du portrait, de la galerie et du carrousel photo ; variante 960 px ajoutée aux photos. |
| Chargements différés susceptibles de déplacer les repères de scroll. | Rafraîchissement ScrollTrigger après chargement de la police et des images, regroupé via `requestAnimationFrame`. Les `matchMedia`, durées et progressions existants restent conservés. |

## Seuils de composition

- Base mobile : une colonne ; typographie et espacements fluides.
- 600 px : bento sur deux colonnes.
- 640 px : variantes existantes de navigation, textes et footer.
- 768 px : section À propos en deux colonnes, galerie en quatre colonnes.
- 1024 px : navigation desktop, Hero texte/portrait côte à côte, FAQ et contact en deux colonnes.
- 1280 px : bento sur quatre colonnes.
- 2048 px : plafond commun de largeur du cadre et des containers, paddings inclus.
- 448 px de largeur du formulaire : deux colonnes de champs.
- Animations conservées : éditorial sticky à partir de 1024 × 800 ; parcours animé à partir de 375 px de large et 800 px de haut, sauf préférence de mouvement réduit.

## Mesures du Hero après correction

Valeurs arrondies, en pixels CSS. Le bas du Hero est mesuré depuis le haut de la page.

| Viewport | Largeur Hero | Hauteur Hero | Marge latérale | Bas du Hero |
| --- | ---: | ---: | ---: | ---: |
| 1024 × 768 | 983 | 648 | 20 | 752 |
| 1280 × 800 | 1229 | 674 | 26 | 781 |
| 1366 × 768 | 1311 | 639 | 27 | 748 |
| 1440 × 900 | 1382 | 769 | 29 | 878 |
| 1536 × 864 | 1475 | 730 | 31 | 841 |
| 1600 × 900 | 1536 | 764 | 32 | 876 |
| 1680 × 1050 | 1616 | 914 | 32 | 1026 |
| 1920 × 1080 | 1856 | 944 | 32 | 1056 |
| 1920 × 720 | 1856 | 584 | 32 | 696 |
| 2560 × 1440 | 1984 | 1304 | 288 | 1416 |
| 3440 × 1440 | 1984 | 1304 | 728 | 1416 |

## Validation réalisée

- `npm run check` : 81 fichiers, 0 erreur, 0 avertissement, 0 hint.
- `npm run build` : 8 pages générées avec succès.
- Accueil compilé contrôlé dans Chromium via Playwright à : 320 × 568, 375 × 667, 390 × 844, 430 × 932, 480 × 800, 599 × 900, 600 × 960, 639 × 960, 640 × 960, 744 × 1133, 767 × 1024, 768 × 1024, 820 × 1180, 1023 × 768, 1024 × 768, 1280 × 800, 1366 × 768, 1440 × 900, 1536 × 864, 1600 × 900, 1680 × 1050, 1920 × 1080, 1920 × 720, 2560 × 1440 et 3440 × 1440.
- Sur ces 25 configurations : aucun débordement horizontal de page, aucun texte dépassant horizontalement sa boîte détecté, aucune erreur console, fond de page calculé `rgb(249, 249, 249)`.
- Contrôle anti-overflow effectué en retirant temporairement `overflow-x: clip` du body dans le navigateur de test. Les carrousels et décorations volontairement contenus sont distingués du débordement de page.
- Les sept autres pages générées ont été contrôlées à 320, 375, 600, 744, 768, 1024, 1366, 1440, 1920 et 2560 px : 70 configurations sans erreur console ni débordement de page ; fonds `html`/`body` identiques.
- Menu mobile : ouverture, Échap, restitution du focus. Carrousel photo : passage à la diapositive suivante. FAQ : ouverture et hauteur naturelle. Parcours : progression au scroll, fin de séquence et CTA accessible. Ces interactions ont été testées sur 14 configurations de 320 à 2560 px, avec mouvement normal.
- Redimensionnement pendant le parcours : 744 → 1024 → 1920 → 375 → 820 → 2560 → 1366 → 744 px. Pas de débordement ; retour en flux normal sur écran bas. Activation de la préférence de mouvement réduit : texte éditorial visible, parcours sans piste sticky et CTA disponible.
- Captures examinées pour le Hero mobile, tablette et desktop, les portraits, le parcours et le formulaire. Les scripts, mesures JSON et captures de travail sont dans `.astro/audit-*` et `.astro/responsive-audit.cjs`, hors versionnement.

Ces résultats correspondent à des viewports simulés dans Chromium sur Windows. Ils ne constituent pas un test physique sur chaque appareil ni une certification Safari/Firefox.

## Fichiers modifiés

- `src/styles/tokens.css`
- `src/styles/utilities.css`
- `src/layouts/BaseLayout.astro`
- `src/components/layout/Navbar.astro`
- `src/components/sections/Hero.astro`
- `src/components/sections/CareOverview.astro`
- `src/components/sections/About.astro`
- `src/components/sections/Editorial.astro`
- `src/components/cards/PatientCarouselCard.astro`
- `src/components/forms/ContactForm.astro`
- `src/scripts/gsap.ts`
- `RESPONSIVE_AUDIT.md` : présent rapport.
