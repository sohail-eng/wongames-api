# WonGames - E-commerce API

<br/>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Pedro-Estevao/boilerplate-nextjs/master/public/img/logo.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Pedro-Estevao/boilerplate-nextjs/master/public/img/logo-gh.svg">
  <img alt="Shows an illustrated sun in light mode and a moon with stars in dark mode." src="https://raw.githubusercontent.com/Pedro-Estevao/boilerplate-nextjs/master/public/img/logo.svg">
</picture>

<br/>

This is the API developed with [Strapi](https://strapi.io) to manage data for [WonGames](https://wongames-client-eta.vercel.app/), an e-commerce platform for games created as part of the [React Avançado Course](https://reactavancado.com.br/). The project teaches modern development concepts with React and related technologies.

## 📌 About the Project

<p style="text-align: center;">
  <a href="https://www.pedroestevao.com">
    <img src="https://res.cloudinary.com/dge3g9rcw/image/upload/v1741210790/github/althy58rnu8ahhjdl3kv.png" alt="illustrative image" />
  </a>
</p>

The WonGames API is responsible for managing various entities of the e-commerce platform, including:

-   🏆 **Games**: Registering and listing available games.
-   🎭 **Categories**: Categorizing games by genre and type.
-   🛍️ **Orders**: Managing user purchases.
-   💳 **Stripe Integration**: Processing secure payments.
-   ⭐ **Wishlist**: Custom wishlists for each user.
-   👤 **User Profiles**: Access control and experience customization.

This project uses **PostgreSQL** as the database and can be run locally or via **Docker**.

<p style="text-align: center;">
  <a href="https://www.pedroestevao.com">
    <img src="https://res.cloudinary.com/dge3g9rcw/image/upload/v1741210790/github/h0kuknw2p2rdppb5c53b.png" alt="illustrative image" />
  </a>
</p>

➡️ **Client Repository (e-commerce frontend):** [WonGames Client](https://github.com/Pedro-Estevao/wongames-client)

## 🚀 Requirements

To run the API, you need to have **PostgreSQL** installed or use a **Docker** container. The database configuration can be found in the `config/database.ts`.

## 🔧 Setup and Installation

### 1️. Install dependencies:
```bash
$ npm install
```

### 2️. Create the `.env` file

Create an `.env` file in the root of the project, or edit if it already exists, similar to the following structure:

```bash
# Server
HOST="0.0.0.0"
PORT="1337"

# Secrets
APP_URL="tobemodified"
APP_KEYS="toBeModified1,toBeModified2"
API_TOKEN_SALT="tobemodified"
ADMIN_JWT_SECRET="tobemodified"
TRANSFER_TOKEN_SALT="tobemodified"

# GOG API
GOG_URL="https://www.gog.com"
GOG_API_URL="https://catalog.gog.com/v1/catalog"

# Database
DATABASE_CLIENT="postgres"
DATABASE_HOST="127.0.0.1"
DATABASE_PORT="5432"
DATABASE_NAME="tobemodified"
DATABASE_USERNAME="postgres"
DATABASE_PASSWORD="tobemodified"
DATABASE_SSL="false"
DATABASE_FILENAME=
JWT_SECRET="tobemodified"

# Email
SMTP_HOST="tobemodified"
SMTP_PORT="tobemodified"
SMTP_USERNAME="tobemodified"
SMTP_PASSWORD="tobemodified"

# Stripe
STRIPE_KEY="tobemodified"
```

## 📜 Commands

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

## ☁️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.
