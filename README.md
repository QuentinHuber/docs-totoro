# Docs Totoro

Démo :
https://docs-totoro.netlify.app/docs/intro

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

```
📦 docs-totoro
  ┣ 📂.docusaurus
  ┣ 📂.github
  ┃ ┗ 📂ISSUE_TEMPLATE
  ┣ 📂blog
  ┣ 📂docs
  ┃ ┗ 📂api
  ┃ ┗ 📂back-office
  ┃ ┗ 📂figma
  ┃ ┗ 📂mobile
  ┃ ┗ 📂webapp
  ┃ ┗ 📜intro.md
  ┣ 📂node_modules
  ┣ 📂src
  ┣ 📂static
  ┣ 📜.gitignore
  ┣ 📜babel.config.js
  ┣ 📜docusaurus.config.js
  ┣ 📜package-lock.json
  ┣ 📜package.json
  ┣ 📜README.md
  ┣ 📜sidebars.js
  ┗ 📜tsconfig.json
```

## // TODO

### A revoir

- custom.css
- sidebar.js
- docusaurus.config.js
- /docs/
- /blog/
- ISSUE TEMPLATE

## A faire

- template markdown
- api
- CMS ??
