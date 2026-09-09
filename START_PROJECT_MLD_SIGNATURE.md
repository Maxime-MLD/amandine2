# MLD Signature Starter — Démarrer un nouveau projet

Ce fichier sert de checklist rapide pour démarrer un nouveau site client à partir du **MLD Signature Starter**.

## 1. Ouvrir le projet

Ouvrir le dossier du nouveau projet dans VS Code.

## 2. Installer les dépendances

```bash
npm i
```

## 3. Lancer le serveur de développement

```bash
npm run dev
```

Astro utilise généralement :

```text
http://localhost:4321
```

Garder le serveur ouvert pendant toute la création du site.

# ORDRE DES FICHIERS À REMPLIR

## 4. Informations de l'entreprise

Premier fichier à ouvrir :

```text
src/config/business.config.ts
```

Remplir notamment :
- nom commercial
- raison sociale
- prénom / nom du dirigeant
- activité
- téléphone
- email
- adresse
- code postal
- ville
- région
- pays
- latitude / longitude si utilisées
- zone principale d'intervention
- rayon d'intervention
- villes desservies
- horaires
- réseaux sociaux
- SIREN
- SIRET
- TVA
- responsable de publication
- informations d'assurance si nécessaires
- URL Google Maps si utilisée

## 5. Configuration générale du site

```text
src/config/site.config.ts
```

Remplir :
- domaine final
- nom du site
- langue
- locale
- theme color
- auteur
- favicon
- apple touch icon
- image Open Graph
- image Twitter / sociale
- manifest

## 6. SEO principal

```text
src/config/seo.config.ts
```

Remplir :
- title par défaut
- template de title
- meta description
- activité principale
- ville principale
- zone géographique
- type Schema.org
- robots
- Open Graph
- Twitter Card

Penser SEO local :
```text
Métier + Ville
Service + Ville
Zone d'intervention
Communes desservies
```

## 7. Fonctionnalités du site

```text
src/config/features.config.ts
```

Activer ou désactiver selon le projet :
- projects
- testimonials
- FAQ
- local area
- practical info
- animations
- heavy animations
- smooth scroll
- analytics
- cookie banner
- captcha

## 8. Navigation

```text
src/config/navigation.config.ts
```

Configurer :
- liens Navbar
- ancres
- pages internes
- labels
- liens externes éventuels

Vérifier que `Navbar.astro` reste indépendante de `Hero.astro`.

## 9. Animations globales

```text
src/config/animation.config.ts
```

Modifier seulement si nécessaire :
- durations
- ease
- reveal offset
- stagger
- ScrollTrigger start

# CONTENU DU SITE

## 10. Services

```text
src/data/services.ts
```

## 11. Réalisations / projets

```text
src/data/projects.ts
```

## 12. Avis clients

```text
src/data/testimonials.ts
```

Ne mettre que de vrais avis.

## 13. FAQ

```text
src/data/faq.ts
```

## 14. Zone d'intervention

```text
src/data/localAreas.ts
```

## 15. Informations pratiques

```text
src/data/practicalInfo.ts
```

# DESIGN

## 16. Couleurs, typographies et espacements

```text
src/styles/tokens.css
```

Modifier :
- couleurs
- background
- texte
- surfaces
- borders
- radius
- largeur max
- marges
- espacements entre sections
- motion tokens

## 17. Typographie

```text
src/styles/typography.css
```

Configurer les polices du projet.

## 18. Assets et images

Remplacer les fichiers nécessaires dans :

```text
public/images/
public/icons/
public/social/
```

Vérifier notamment :
- favicon
- apple-touch-icon
- manifest icons
- og-image 1200x630
- twitter/social image 1200x630
- logo
- hero image
- services images
- about image
- projects images
- contact image

# DESIGN DES SECTIONS

## 19. Travailler les composants dans cet ordre

```text
src/components/layout/Navbar.astro
src/components/sections/Hero.astro
src/components/sections/TrustBar.astro
src/components/sections/Services.astro
src/components/sections/About.astro
src/components/sections/Projects.astro
src/components/sections/Method.astro
src/components/sections/LocalArea.astro
src/components/sections/Testimonials.astro
src/components/sections/PracticalInfo.astro
src/components/sections/FAQ.astro
src/components/sections/FinalCTA.astro
src/components/sections/Contact.astro
src/components/layout/Footer.astro
```

Adapter l'ordre si le projet n'utilise pas toutes les sections.

# ANIMATIONS

## 20. Ajouter les animations après le design

Utiliser les helpers préparés dans :

```text
src/scripts/
src/components/animations/
```

Priorités :
- animations fluides
- peu de surcharge mobile
- pas de layout shift
- respect de `prefers-reduced-motion`

# FORMULAIRE

## 21. Créer le fichier `.env`

Copier :

```text
.env.example
```

vers :

```text
.env
```

Ajouter :

```bash
PUBLIC_WEB3FORMS_ACCESS_KEY=VOTRE_CLE_WEB3FORMS
```

Ne jamais envoyer `.env` sur GitHub.

## 22. Vérifier le formulaire

Fichier principal :

```text
src/components/forms/ContactForm.astro
```

Tester :
- prénom
- nom
- téléphone
- email
- service
- message
- consentement
- erreurs
- loading
- success
- redirection `/merci`
- Web3Forms
- captcha si activé

# PAGES

## 23. Vérifier les pages

```text
src/pages/index.astro
src/pages/services.astro
src/pages/a-propos.astro
src/pages/contact.astro
src/pages/mentions-legales.astro
src/pages/politique-confidentialite.astro
src/pages/merci.astro
src/pages/404.astro
```

Supprimer ou désactiver les pages inutilisées avant livraison.

# LÉGAL

## 24. Mentions légales

```text
src/pages/mentions-legales.astro
```

Remplacer tous les TODO.

## 25. Politique de confidentialité

```text
src/pages/politique-confidentialite.astro
```

Adapter notamment :
- Web3Forms
- analytics
- cookies
- services tiers
- durée de conservation
- droits utilisateurs
- contact

# SEO FINAL

## 26. Vérifier le SEO de chaque page

Pour chaque page importante, vérifier :
- title
- meta description
- canonical
- Open Graph
- Twitter / social
- H1
- structure H2/H3
- images alt
- JSON-LD
- Breadcrumbs

Tester également :
```text
robots.txt
sitemap.xml
manifest
favicon
```

# RESPONSIVE

## 27. Tester les tailles principales

Tester au minimum :
```text
320px
375px
768px
1024px
1440px
ultrawide
```

Aucun overflow horizontal.

# AVANT LIVRAISON

## 28. Vérifications techniques

```bash
npm run check
npm run build
npm run check:todo
npm run validate:production
```

`npm run validate:production` doit passer avant mise en ligne.

# DÉPLOIEMENT

## 29. Push Git

```bash
git add .
git commit -m "Ready for production"
git push
```

## 30. Vercel

Sur Vercel :
- connecter le repository
- ajouter les variables d'environnement
- vérifier le domaine
- vérifier HTTPS
- lancer le déploiement

Ajouter notamment :
```text
PUBLIC_WEB3FORMS_ACCESS_KEY
```

si nécessaire.

# APRÈS DÉPLOIEMENT

## 31. Vérifications finales en production

Tester :
- domaine avec et sans www selon configuration
- HTTPS
- Navbar
- formulaire réel
- téléphone
- email
- liens externes
- 404
- favicon
- partage Open Graph
- sitemap
- robots
- responsive réel sur téléphone
- Lighthouse
- Google Rich Results si applicable
- Google Search Console

# VERSION COURTE À RETENIR

```text
npm i
↓
npm run dev
↓
business.config.ts
↓
site.config.ts
↓
seo.config.ts
↓
features.config.ts
↓
navigation.config.ts
↓
data/*
↓
tokens.css + typography.css
↓
images / logo / OG / favicon
↓
design des sections
↓
animations
↓
.env + Web3Forms
↓
pages légales
↓
SEO final
↓
responsive
↓
npm run check
↓
npm run build
↓
npm run check:todo
↓
npm run validate:production
↓
GitHub
↓
Vercel
```

## Règle MLD Signature

**On ne repart jamais de zéro techniquement.**

Le starter fournit la structure, le responsive, le SEO, le formulaire, l'accessibilité et les fondations.

Pour chaque nouveau client, le travail doit principalement porter sur :
1. l'identité ;
2. le contenu ;
3. la direction artistique ;
4. le design ;
5. les animations ;
6. l'expérience utilisateur.
