<h1 align="center">
    <img alt="mario-art" title="#mario-art" src="./src/assets/img/imgmarge1.png" />
</h1>

<h1 align="center">
   ♻️ <a href="#"> mario-art </a>
</h1>

<h3 align="center">
    App developed to train Ionic and its properties.
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Gilles30/mario-art?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Gilles30/mario-art">

<!-- Twitter -->
  <!-- <a href="https://www.twitter.com/Gilles30/">
    <img alt="Siga no Twitter" src="https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2FGilles30%2FREADME-mario-art">
  </a> -->

  <a href="https://github.com/Gilles30/mario-art/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Gilles30/mario-art">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/Gilles30/mario-art/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/Gilles30/mario-art?style=social">
  </a>

  <a href="https://github.com/Gilles30">
    <img alt="made by Gilles30" src="https://img.shields.io/badge/made%20by-Gilles30-%237519C1">
  </a>
  
 
</p>

<h4 align="center"> 
	 Status: In progress
</h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#layout">Layout</a> • 
 <a href="#how-it-works">How it works</a> • 
 <a href="#tech-stack">Tech Stack</a> • 
 <a href="#contributors">Contributors</a> • 
 <a href="#author">Author</a> • 
 <a href="#user-content-license">License</a>

</p>

## About

:neckbeard: Mario-art - is an app developed with ionic, a social network from Mr Mario [Mario-Art](https://github.com/Gilles30/mario-art/).

---

## Features

- [x] Code structure, Mario can:

  - [x] Code structure, Mario can
  - [x] View new jobs
  - [x] Follow your feed, with news posted by members of your network

---

## Layout

The application layout is available on Figma:

<p align="center">
  :construction:
</p>

<!-- <a href="https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta?node-id=136%3A546">
  <img alt="Made by tgmarinho" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a> -->

### Mobile

<p align="center">
  <img alt="Home" title="#Home" src="./src/assets/img/Home.jpeg" width="200px">

  <img alt="Feed" title="#feed" src="./src/assets/img/feed.jpeg" width="200px">
</p>

---

## How it works

This project is divided into two parts:

1. Backend (server folder) (Under construction)
2. Mobile (mobile folder)

IONIC

Both Frontend and Mobile do not need the Backend to function (without database functionality)

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/).
In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)

#### Running the Backend (server)

```bash

# Clone this repository
$ git clone git@github.com:Gilles30mario-art.git

# Access the project folder cmd/terminal
$ cd mario-art

# go to the server folder
$ cd server

# install the dependencies
$ npm install or yarn

# Run the application in development mode
$ npm run dev:server or yarn server:dev

# The server will start at port: 3333 - go to http://localhost:4201

```

<p align="center"> #:construction:
  <a href="https://github.com/Gilles30/mario-art/blob/master/Insomnia_API_mario-artjson.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>:construction:
</p>

#### Running the web application (Frontend)

```bash

# Clone this repository
$ git clone git@github.com:Gilles30/mario-art.git

# Access the project folder in your terminal
$ cd mario-art

# Go to the Front End application folder
$ cd web

# Install the dependencies
$ npm install or yarn

# Run the application in development mode
$ npm run start or yarn start

# The application will open on the port: 3000 - go to http://localhost:4200

```

---

## Tech Stack

The following tools were used in the construction of the project:

#### **Website** ([Ionic](https://ionic.com/) + [TypeScript](https://www.typescriptlang.org/))

- **[Ionic](https://github.com/ionic-team/ionic-framework)**
- **[Ion Icons.github](https://github.com/ionic-team/ionicons)**
- **[Angularjs](https://angularjs.org/)**
- **[Ion Icons](https://ionicons.com/)**

> See the file [package.json](https://github.com/Gilles30/mario-art/blob/master/package.json)

_:construction:_

#### [](https://github.com/Gilles30/mario-art#server-nodejs--typescript)**Server** ([NodeJS](https://nodejs.org/en/) + [TypeScript](https://www.typescriptlang.org/))

- **[Express](https://expressjs.com/)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[KnexJS](http://knexjs.org/)**
- **[SQLite](https://github.com/mapbox/node-sqlite3)**
- **[ts-node](https://github.com/TypeStrong/ts-node)**
- **[dotENV](https://github.com/motdotla/dotenv)**
- **[Multer](https://github.com/expressjs/multer)**
- **[Celebrate](https://github.com/arb/celebrate)**
- **[Joi](https://github.com/hapijs/joi)**

> See the file [package.json](https://github.com/Gilles30/mario-art/blob/master/server/package.json)

#### [](https://github.com/Gilles30/mario-art#mobile-ionic--typescript)**Mobile** ([Ionic](http://www.ionic.com/) + [TypeScript](https://www.typescriptlang.org/))

- **[Expo](https://expo.io/)**
- **[Expo Google Fonts](https://github.com/expo/google-fonts)**
- **[Ionic Navigation=](https://ionic.com/)**
- **[Expo Constants](https://docs.expo.io/versions/latest/sdk/constants/)**
- **[Axios](https://github.com/axios/axios)**
- **[Expo Location](https://docs.expo.io/versions/latest/sdk/location/)**
- **[Expo Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)**

> See the file [package.json](https://github.com/Gilles30/mario-art/blob/master/mobile/package.json)

#### [](https://github.com/Gilles/mario-art#utilit%C3%A1rios)**Utilitários**

- Prototype: **[Figma](https://www.figma.com/)** → **[Protótipo (Mario-art)](in progress)**

---

## Contributors

A big thanks to this group of people who helped me with teaching and knowledge and to my mentor who has made my learning curve almost 90 ° :)

You are an awesome team! :)

<table>
  <tr>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" width="100px;" alt=""/><br /><sub><b>Diego Fernandes</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat"></a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/4669899?s=460&u=806503605676192b5d0c363e4490e13d8127ed64&v=4" width="100px;" alt=""/><br /><sub><b>Cleiton Souza</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat"></a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/861751?s=460&v=4" width="100px;" alt=""/><br /><sub><b>Robson Marques</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat"></a></td>
    <td align="center"><a href="https://github.com/wezss"><img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/12881556?s=400&u=b8edb8b14bd18ee32337a9476d7167aabe4af7c7&v=4" width="100px;" alt=""/><br /><sub><b>Wezss</b></sub></td>
    
  </tr>
  <tr>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/39345247?s=460&u=cdff2624a327a43e2765112a54e966a06eac6d79&v=4" width="100px;" alt=""/><br /><sub><b>Joseph Oliveira</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat"></a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/10366880?s=460&u=59e93e1752e9d2ece4b7d8e129d60caba9c94207&v=4" width="100px;" alt=""/><br /><sub><b>Guilherme Rodz</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat"></a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4" width="100px;" alt=""/><br /><sub><b>Mayk Brito</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat"></a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/7268910?s=460&u=0b5d9df4232e70fa66ea9f130fad4260378323de&v=4" width="100px;" alt=""/><br /><sub><b>João Paulo</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat"></a></td>
    
  </tr>
</table>

## How to contribute

1. Fork the project.
2. Create a new branch with your changes: `git checkout -b my-feature`
3. Save your changes and create a commit message telling you what you did: `git commit -m" feature: My new feature "`
4. Submit your changes: `git push origin my-feature`
   > If you have any questions check this [guide on how to contribute](./CONTRIBUTING.md)

---

## Author

<a href="https://app.rocketseat.com.br/me/lorison-gilles-02226">
 <img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/54437398?s=460&u=72d88fd3a7e3a95041d7771f3a5e6ad7f33b8740&v=4" width="100px;" alt="Gilles"/>
 <br />
 <sub><b>Lorison Gilles</b></sub></a> <a href="https://app.rocketseat.com.br/me/lorison-gilles-02226/" title="Rocketseat"></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-LorisonGilles-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lorison-gilles/)](https://www.linkedin.com/in/lorison-gilles/)
[![Gmail Badge](https://img.shields.io/badge/-lorison.gilles@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:lorison.gilles@gmail.com)](mailto:lorison.gilles@gmail.com)

---

## License

This project is under the license [MIT](./LICENSE).

Made with love by Lorison Gilles 👋🏽 [Get in Touch!](Https://www.linkedin.com/in/lorison-gilles/)

---

## Versions of README

[Portuguese](./README.md) | [English without emojis](./README-en.md)
