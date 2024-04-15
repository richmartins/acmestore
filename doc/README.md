# Composants d'application application pratique frontend: acmestore

# Introduction

Pendant le cours _"Composants d'application"_ de la session 2023-24 de l'[IDEC](https://idec.swiss) dans le cadre du Brevet fédéral d'[ICT-Application Development Specialist](https://www.ict-berufsbildung.ch/formation-continue/brevet-federal/ict-application-development-specialist), j'ai dû effectué la partie conception et implémentation du frontend d'un projet qui vise a developpé une application web de vente de produit en ligne selon le cahier des charges établi dans le fichier annexe : [Cahier des charges TP Acmestore.pdf](./assignements/Cahier%20des%20charges%20TP%20Acmestore.pdf).

# Architecture et structure du code

## Structure du code

L'arboresence des fichiers du projet suit les normes conseille par [react.js](https://react.dev) documenter sur cette page web : [File Structure](https://legacy.reactjs.org/docs/faq-structure.html).

C'est dire que nous avons un dossier principal `src` où tout le code source se trouvent et à l'intérieur de celui-ci, les fichiers javascript seront regrouper par :

* Composants -> `components`
* Page -> `pages`
* Ressources, e.g. images, etc... -> `assets`

À la racine nous trouverons les fichiers utilisé par react.js, comme par exemple des fichiers des configurations. Ci-dessous la structure :

```
.
├── README.md
├── doc
│   └── uc
├── package.json
├── package-lock.json
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── assets
│   │   └── logo.svg
│   ├── components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── CardDeck.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Logo.tsx
│   │   └── NavBar.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── mock
│   │   └── db.json
│   ├── pages
│   │   ├── Home.tsx
│   │   └── Login.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
├── tailwind.config.js
└── tsconfig.json

13 directories, 38 files
```

## Architecture

### Diagramme d'activité

![acmestore_activity_diag](./assets/acmestore_activity_diag.png)

### Cas d'utilistations

* [Cas d'utilistation 001](./uc/uc-001.md)

### Design

#### Wireframe

Version 1 

![v1_wf](./assets/mockup-2023-10-04.png)


Version 2 

![v2_wf](./assets/mockup_v2-2023-10-04.png)


Version 3 (Final)

![v3_wf](./assets/wireframe_final-2023-10-04.png)

#### Mockup

### Prototype

# Norme de programmation et conventions

# Conclusion
