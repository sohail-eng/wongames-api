<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Pedro-Estevao/boilerplate-nextjs/master/public/img/logo.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Pedro-Estevao/boilerplate-nextjs/master/public/img/logo-gh.svg">
  <img alt="Shows an illustrated sun in light mode and a moon with stars in dark mode." src="https://raw.githubusercontent.com/Pedro-Estevao/boilerplate-nextjs/master/public/img/logo.svg">
</picture>

# React Avançado - Landing Page API

This is the API developed with [Strapi](https://strapi.io) to seed the landing page of the [React Avançado course](https://reactavancado.com.br/).

## Requirements

This project uses the [MySQL](https://www.mysql.com) database, so to make it work, you need to have it installed on your local machine, or if you prefer, use Docker.

The configuration for the Database can be found in the directory [config/database.js](config/database.js)

## Getting Started

First, run the command to install the dependencies:

```bash
$ npm install
# or
$ yarn install
```

Create an `.env` file in the project root, or edit if it already exists, similar to the following structure:

```bash
HOST = 0.0.0.0 #Host where strapi will start
PORT = 1337 #Port where strapi will start 
APP_KEYS = "toBeModified1,toBeModified2"
API_TOKEN_SALT = tobemodified
ADMIN_JWT_SECRET = tobemodified
TRANSFER_TOKEN_SALT = tobemodified
JWT_SECRET = tobemodified

# Database
DATABASE_CLIENT = "YOUR_DATABASE_NAME" #Your database name: mysql, postgresql, mariadb (Check the supported databases in the strapi documentation)
DATABASE_HOST = "YOUR_DATABASE_HOST" 
DATABASE_PORT = "YOUR_DATABASE_PORT"
DATABASE_NAME = "YOUR_DATABASE_NAME"
DATABASE_USERNAME = "YOUR_DATABASE_USER"
DATABASE_PASSWORD = "YOUR_DATABASE_PASS"
DATABASE_SSL = "YOUR_DATABASE_SSL"
JWT_SECRET = "YOUR_DATABASE_JWT_SECRETE"
```

## Commands

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
$ npm run develop
# or
$ yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
$ npm run start
# or
$ yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
$ npm run build
# or
$ yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.
