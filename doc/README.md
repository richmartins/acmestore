# Composants d'application application pratique frontend: acmestore

# Introduction

Pendant le cours _"Composants d'application"_ de la session 2023-24 de l'[IDEC](https://idec.swiss) dans le cadre du Brevet fédéral d'[ICT-Application Development Specialist](https://www.ict-berufsbildung.ch/formation-continue/brevet-federal/ict-application-development-specialist), j'ai dû effectué la partie conception et implémentation du frontend d'un projet qui vise a developpé une application web de vente de produit en ligne selon le cahier des charges établi dans le fichier annexe : [Cahier des charges TP Acmestore.pdf](./assignements/Cahier%20des%20charges%20TP%20Acmestore.pdf).

# Architecture et structure du code

## Structure du code

L'arboresence des fichiers du projet suit les normes conseillée par [react.js](https://react.dev) sur leur site de documentation : [File Structure](https://legacy.reactjs.org/docs/faq-structure.html).

C'est dire que nous avons un dossier principal `src` où tout le code source se trouvent et à l'intérieur de celui-ci, les fichiers javascript seront regrouper par :

* Composants -> `components`
* Page -> `pages`
* Ressources, e.g. images, etc... -> `assets`

À la racine nous trouverons les fichiers utilisé par react.js, comme par exemple des fichiers des configurations. Ci-dessous la structure :

```
.
├── README.md
├── doc
│   └── assets
│   └── assignement
│   └── README.md
│   └── uc
├── node_modules
├── package.json
├── package-lock.json
├── public
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
```

## Architecture

### Diagramme de cas d'utilisations

![acmestore_uc_diag](./assets/acmestore_uc_diag.png)

### Cas d'utilistations

* [Cas d'utilistation 001](./uc/uc-001.md)
* [Cas d'utilistation 002](./uc/uc-002.md)

### Diagrammes d'activité

#### UC1-001-AC-001 : Afficher liste des produits

![UC-001-AC-001](./assets/UC-001-AC-001.png)

#### UC2-002-AC-001

### Diagramme de classe (WIP)

![diag_class](./assets/diag_class.png)

### Diagramme de paquet (WIP)

En suivant le principe *"Domain Driven Design"* le diagramme ci-dessous illustre l'architecture de l'application

![diag_package](./assets/diag_package.png)

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

