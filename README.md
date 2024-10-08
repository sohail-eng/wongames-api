<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Pedro-Estevao/boilerplate-nextjs/master/public/img/logo.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Pedro-Estevao/boilerplate-nextjs/master/public/img/logo-gh.svg">
  <img alt="Shows an illustrated sun in light mode and a moon with stars in dark mode." src="https://raw.githubusercontent.com/Pedro-Estevao/boilerplate-nextjs/master/public/img/logo.svg">
</picture>

# WonGames - Landing Page API

This is the API developed with [Strapi](https://strapi.io) to seed the WonGames landing page for the [React Avançado course](https://reactavancado.com.br/).

## Requirements

This project uses the [MySQL](https://www.mysql.com) database, so to make it work, you need to have it installed on your local machine, or if you prefer, use Docker.

The configuration for the Database can be found in the directory [config/database.js](config/database.js)

## Getting Started

First, run the command to install the dependencies:

```bash
$ bun install
```

Create an `.env` file in the project root, or edit if it already exists, similar to the following structure:

```bash
# Server
HOST=0.0.0.0
PORT=1337

# Secrets
APP_URL=tobemodified
APP_KEYS="toBeModified1,toBeModified2"
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified

# GOG API
GOG_URL=https://www.gog.com
GOG_API_URL=https://catalog.gog.com/v1/catalog

# Database
DATABASE_CLIENT=postgres
DATABASE_HOST=127.0.0.1
DATABASE_PORT=5432
DATABASE_NAME=tobemodified
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=tobemodified
DATABASE_SSL=false
DATABASE_FILENAME=
JWT_SECRET=tobemodified
```

## Commands

### `dev`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```bash
$ npm run dev
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```bash
$ npm run start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```bash
$ npm run build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.