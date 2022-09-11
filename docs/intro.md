---
title: Présentation Totoro
sidebar_position: 1
---

## Totoro

[Totoro](https://notrelandingpagepourtotoro) est un service de proximité proposant à ses utilisateurs des missions à réaliser avec des associations en échange de `tokens` dépensables directement dans notre boutique contre des bons de réductions chez des commerçants locaux.


## Sommaire

- [Totoro](#totoro)
- [Sommaire](#sommaire)
	- [Infrastructure](#infrastructure)
- [2 - 🛠 Choix techniques 🛠](#2----choix-techniques-)
- [3 - Retour de bugs ou d'erreurs](#3---retour-de-bugs-ou-derreurs)
- [4 - Documentation](#4---documentation)
	- [Services](#services)
- [5 - Contribution](#5---contribution)
- [6 - Version](#6---version)
- [7 - 🙏 Merci 🙏](#7----merci-)
- [8 - Copyright et licence](#8---copyright-et-licence)


Options d'installation :

> *Les scripts shell se trouvent dans le dossier [cmd](https://github.com/totoro-organization/totoro/cmd)*.
- Cloner le repo: `git clone https://github.com/totoro-organization/totoro.git`
- Création d'un fichier .env voir le modèle [.env.template](https://github.com/totoro-organization/totoro/.env.template).
- Mettre à jour le projet : `sh cmd/update-project.sh` ou `.\cmd\update-project.sh`
- Installation via script [shell](https://github.com/totoro-organization/totoro/build.sh) : `sh cmd/build.sh` ou `.\cmd\build.sh`
- Installation que de l'api pour travailler en **local** : `sh cmd/build.sh --build-local` ou `.\cmd\build.sh --build-local`
- Installation du service de votre **choix** : `sh cmd/build.sh --projects="image1;image2;image3..."` ou `.\cmd\build.sh --projects="image1;image2;image3..."`
- Mettre à jour la base de donnée si la structure de l'api à changé : `sh cmd/maj-db.sh` ou `.\cmd\maj-db.sh`
- Relancer les services Docker : `sh cmd/restart.sh` or `.\cmd\restart.sh` 

*Exemple pour relancer 2 services `sh cmd/restart.sh api webapp` ou `.\cmd\restart.sh api webapp`*

- [Télécharger la dernière version de l'APK mobile](https://github.com/totoro-organization/totoro/archive/v0.1.0.apk)

> Si vous désirez en savoir plus sur l'infrastructure du projet, elle est visible dans la partie [Documentation](#4---documentation).

### Infrastructure

- api : http://localhost:6868
- swagger : http://localhost:6868/docs
- backoffice : http://localhost:3002
- webapp : http://localhost:3000
- phpmyadmin: http://localhost:8888
- mobileapp : http://127.0.0.1:19002

La Landingpage se trouve sur ce repo : https://github.com/totoro-organization/landing-page
- landingpage : http://localhost:5555


## [2](#sommaire) - 🛠 Choix techniques 🛠

> *Cliquer sur un badge, vous enverra directement sur leur site*.
CI/CD 📦

 - ####  Plateforme 🧱

	[![CircleCI](https://img.shields.io/badge/circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white)](https://circleci.com/)


Conteneur 🗃

 - ####  Outil 🛠

	[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

Mobile 📱

- ####  Methodology 📌

	[![Atomic Design](https://img.shields.io/badge/atomic%20design-%23e68a00.svg?style=for-the-badge&logo=atom&logoColor=white)](https://bradfrost.com/blog/post/atomic-web-design/)


- ####  Langage 📖

	[![Typescript](https://img.shields.io/badge/typescript-%23007acc.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

- ####  Framework ⚛

	[![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactnative.dev/)

- ####  Component ⚙️

	[![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)

 - ####  Outil 🛠

	[![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)](https://expo.dev/)

App 💻

- ####  Langage 📖

	[![Typescript](https://img.shields.io/badge/typescript-%23007acc.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

- ####  Framework ⚛

	[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://fr.reactjs.org/)

- ####  Component ⚙️

	[![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)

API 🔣

- ####  Langage 📖

	[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/fr/)
	[![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)](https://swagger.io/)

[//]: # (Objectif Typescript)

 - ####  Outil 🛠

	[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://www.postman.com/)

TEST 🧪

 - ####  Test unitaire

	[![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)


 - ####  Test e2e

	[![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)](https://www.cypress.io/)

 - ####  Exemple :

	```code
	cd webapp && npm start && npm run cypress
	```
	
Hébergement 🏠

 - ####  Hébergement

	[![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)](https://www.heroku.com/)
	[![Netlify](https://img.shields.io/badge/netlify-%232D3B41.svg?style=for-the-badge&logo=netlify&logoColor=00C7B7)](https://www.netlify.com/)



## [3](#sommaire) - Retour de bugs ou d'erreurs

Vous avez un bug ou une demande de fonctionnalité ne marche pas correctement ? Veuillez d’abord lire la liste des issues disponible sur les problèmes existants et fermés. Si votre problème n’est pas encore abordé, veuillez ouvrir un nouveau [ticket/issue](https://github.com/totoro-organization/totoro/issues/new).

[//]: # (Création d'un template d'issue)


## [4](#sommaire) - Documentation

Blablabla Doc de la webapp / bo / mobileapp / guide pour l'user.

Pour l'API nous utilisons [Swagger](https://swagger.io/), la documentation est disponible via `https://api-totoro.herokuapp.com/docs`

### Services


| **Application**   | **URL**                                     |
|:-----------------:|---------------------------------------------|
| API               | https://api-totoro.herokuapp.com/           |
| API doc           | https://api-totoro.herokuapp.com/docs       |
| Landing           | https://totoro-landing.netlify.app/         |
| Dashboard client  | TODO                                        |
| BackOffice admin  | https://totoro-backoffice.netlify.app/login |
| App mobile        | TODO: expo link                             |
| Messaging-service | TODO                                        |


## [5](#sommaire) - Contribution


<table>
  <tr>
    <td align="center"><a href="https://github.com/tlugat"><img src="https://avatars.githubusercontent.com/u/56915793?v=4?s=64" width="64px;" alt=""/><br /><sub><b>tlugat</b></sub></a><br /><a href="https://github.com/totoro-organization/totoro/commits?author=tlugat" title="Code">💻</a><a href="" title="Bug">🐛</a><a href="" title="Management">📆</a><a href="" title="Review">👀</a>
</td>
    <td align="center"><a href="https://github.com/MaeWolff"><img src="https://avatars.githubusercontent.com/u/56693082?v=4?s=64" width="64px;" alt=""/><br /><sub><b>MaeWolff</b></sub></a><br /><a href="https://github.com/totoro-organization/totoro/commits?author=MaeWolff" title="Code">📱</a><a href="" title="Review">👀</a><a href="" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/j2frise"><img src="https://avatars.githubusercontent.com/u/53154206?v=4?s=64" width="64px;" alt=""/><br /><sub><b>j2frise</b></sub></a><br /><a href="https://github.com/totoro-organization/totoro/commits?author=j2frise" title="Code">💻</a><a href="" title="Bug">🐛</a><a href="" title="Data/API">🔣</a></td>
    <td align="center"><a href="https://github.com/ElyasC"><img src="https://avatars.githubusercontent.com/u/93398025?v=4?s=64" width="64px;" alt=""/><br /><sub><b>ElyasC</b></sub></a><br /><a href="https://github.com/totoro-organization/totoro/commits?author=ElyasC" title="Code">💻</a><a href="" title="Data/API">🔣</a>
</td>
    <td align="center"><a href="https://github.com/Pierre-AlexisM"><img src="https://avatars.githubusercontent.com/u/56915632?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Pierre-AlexisM</b></sub></a><br /><a href="https://github.com/totoro-organization/totoro/commits?author=Pierre-AlexisM" title="Code">💻</a><a href="" title="Management">📆</a></td>
  </tr>
  <tr>
     <td align="center"><a href="https://github.com/QuentinHuber"><img src="https://avatars.githubusercontent.com/u/56915614?v=4?s=64" width="64px;" alt=""/><br /><sub><b>QuentinHuber</b></sub></a><br /><a href="https://github.com/totoro-organization/totoro/commits?author=QuentinHuber" title="Code">💻</a><a href="" title="Design">🎨</a>
</td>
    <td align="center"><a href="https://github.com/Nstampfli"><img src="https://avatars.githubusercontent.com/u/56916270?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Nstampfli</b></sub></a><br /><a href="https://github.com/totoro-organization/totoro/commits?author=Nstampfli" title="Code">💻</a>
</td>
    <td align="center"><a href="https://github.com/maellemoisis"><img src="https://avatars.githubusercontent.com/u/45653537?v=4?s=64" width="64px;" alt=""/><br /><sub><b>maellemoisis</b></sub></a><br /><a href="" title="Design">🎨</a><a title="Content">🖋</a>
</td>
    <td align="center"><a href="https://github.com/LucasMassol"><img src="https://avatars.githubusercontent.com/u/57172016?v=4?s=64" width="64px;" alt=""/><br /><sub><b>LucasMassol</b></sub></a><br /><a href="" title="Design">🎨</a>
</td>
    <td align="center"><a href="https://github.com/cristianamonteiroo"><img src="https://avatars.githubusercontent.com/u/59604348?v=4?s=64" width="64px;" alt=""/><br /><sub><b>cristianamonteiroo</b></sub></a><br /><a href="" title="Data/API">🔣</a>
</td>
  </tr>
</table>

## [6](#sommaire) - Version

> Dernière version : Totoro v0.01 - [Disponible ici »](https://github.com)
 - > Dernière version APK : Totoro-v0.01.apk - [Disponible ici »](https://github.com)
  
| APP | Fonctionnel |
| :--: | :--: |
| API | ✔️ |
| Back-office | ✔️ |
| Landing-page | ❌ |
| Mobile | ❌ |
| Web-app | ❌ |

[//]: # (❌ ou ✔️)

## [7](#sommaire) - 🙏 Merci 🙏

[![Arcplex](https://www.arcplex.fr/wp-content/uploads/2021/10/logo-arcplex-formation.png)](https://www.arcplex.fr/)

Merci [Arcplex](https://www.arcplex.fr/) pour l'aide apportée.

[![Hetic](https://www.hetic.net/sites/all/themes/hetic_v7/img/svg/logo_hetic.svg)](https://www.hetic.net/)

Merci [HETIC](https://www.hetic.net/) pour cette année.


## [8](#sommaire) - Copyright et licence


#####Code and documentation copyright 2022