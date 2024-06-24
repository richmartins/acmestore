# Composants d'application application pratique frontend: acmestore

# Introduction

Pendant le cours _"Composants d'application"_ de la session 2023-24 de l'[IDEC](https://idec.swiss) dans le cadre du Brevet fédéral d'[ICT-Application Development Specialist](https://www.ict-berufsbildung.ch/formation-continue/brevet-federal/ict-application-development-specialist), j'ai dû effectué la partie conception et implémentation du frontend d'un projet qui vise a developpé une application web de vente de produit en ligne selon le cahier des charges établi dans le fichier annexe : [Cahier des charges TP Acmestore.pdf](./assignements/Cahier%20des%20charges%20TP%20Acmestore.pdf).

Pour des questions de planification il nous a été demander uniquement de détaillé 3 à 5 cas d'utilisation avec un diagramme d'activité ainsi qu'un diagramme de séquence

# Architecture et structure du code

## Structure du code

L'arboresence des fichiers du projet suit les normes conseillée par [react.js](https://react.dev) sur leur site de documentation : [File Structure](https://legacy.reactjs.org/docs/faq-structure.html).

C'est dire que nous avons un dossier principal `src` où tout le code source se trouvent et à l'intérieur de celui-ci, les fichiers javascript seront regrouper par :

* Composants -> `components`
* Page -> `pages`
* Ressources, e.g. images, etc... -> `assets`
* Tout ce qui est de la modilisation "Domain Driven Development" est contenu dans les dossiers `domain`, `infrastructure` et `presentation`.
* J'ai aussi utilisé classes dites "utilitaire" qui se trouvent dans le dossier `utils` 

À la racine nous trouverons les fichiers utilisé par react.js, comme par exemple des fichiers des configurations.

## Architecture

### Diagramme de cas d'utilisations

![acmestore_uc_diag](./assets/acmestore_uc_diag.png)

### Cas d'utilisations

* [Cas d'utilisation 001 - (Voir la liste des produits)](./uc/uc-001.md)
* [Cas d'utilisation 002 - (Voir détail de produit)](./uc/uc-002.md)
* [Cas d'utilisation 003 - (Gérer panier)](./uc/uc-003.md)
* [Cas d'utilisation 004 - (Ajouter un produit à la boutique)](./uc/uc-004.md)

### Diagrammes d'activité

Ci-dessous les différentes illustration des diagrammes d'activités des cas d'utilisation précédent.

#### UC-001-AC-001 : Afficher liste des produits

![UC-001-AC-001](./assets/UC-001-AC-001.png)

#### UC2-002-AC-001

![UC-002-AC-001](./assets/UC-002-AC-001.png)

#### UC-003-AC-001

![UC-003-AC-001](./assets/UC-003-AC-002.png)

#### UC-004-AC-001

![UC-004-AC-001](./assets/UC-004-AC-001.png)

### Diagramme des séquence

Ci-dessous les différentes illustration des diagrammes de séquence des cas d'utilisation précédent.

#### UC-001-SEQDIAG-001

![UC-001-SEQDIAG-001](./assets/UC-001-SEQDIAG-002.png)

#### UC-002-SEQDIAG-001

![UC-002-SEQDIAG-001](./assets/UC-002-SEQDIAG-001.png)

#### UC-003-SEQDIAG-001

![UC-003-SEQDIAG-001](./assets/UC-003-SEQDIAG-001.png)

#### UC-004-SEQDIAG-001

![UC-004-SEQDIAG-001](./assets/UC-004-SEQDIAG-001.png)

### Diagramme de classe (WIP)

![diag_class](./assets/diag_class.png)

### Diagramme de paquet

En suivant le principe *"Domain Driven Design"* le diagramme ci-dessous illustre l'architecture de l'application

![diag_package](./assets/PACKAGE-DIAG.png)

### Design

#### Wireframe

Version 1 

![v1_wf](./assets/mockup-2023-10-04.png)


Version 2 

![v2_wf](./assets/mockup_v2-2023-10-04.png)


Version 3 (Final)

![v3_wf](./assets/wireframe_final-2023-10-04.png)

#### Mockup

Ci-dessous les mockups des 4 pages principal vu dans les wireframes précédents.

**Catalogue**
![mockup-1](./assets/mockup-1.jpg)

**Login**
![mockup-2](./assets/mockup-2.jpg)

**Détail produit**
![mockup-3](./assets/mockup-3.jpg)

**Panier**
![mockup-4](./assets/mockup-4.jpg)

### Prototype

# Norme de programmation et conventions

Dans le cadre du développement de cette application, j'ai adopté des normes de programmation et des conventions strictes afin de garantir la qualité, la lisibilité et la maintenabilité du code. J'ai suivi les recommandations du guide de style de code de [typescript](https://ts.dev/style/), qui définit les règles de syntaxe, de formatage et d'organisation du code. De plus, j'ai aussi adopté une convention de nommage cohérente pour les variables, les fonctions et les classes, afin de faciliter la compréhension du code par les autres développeurs."

# Conclusion

En conclusion, ce projet a été très bénéfique pour moi car j'ai pu mettre en œuvre plusieurs aspects de l'architecture logicielle et j'ai également pu appliquer les principes de conception d'un "frontend" solide et maintenable. Cependant, il reste encore quelques fonctionnalités à développer, telles que :

- Le backoffice
- L'ajout de produits

Si j'ai l'opportunité de travailler sur ce projet à l'avenir, j'envisage d'implémenter ces fonctionnalités afin de fournir une solution complète et répondant aux besoins des utilisateurs.