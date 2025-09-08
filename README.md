# Experts 2.0

## Installation process

Requires [Node.js](https://nodejs.org/) v8+ and [yarn](https://yarnpkg.com/).

To verify that you have these applications installed.

```sh
node -v
yarn -v
```

Install the Gatsby CLI.

```sh
npm install -g gatsby-cli
```

To make sure the installation is successful, check the gatsby-cli version.

```sh
gatsby -v
```

Download the package to your computer and navigate to the application files.

```sh
git clone https://github.com/topfed/topfed.git
cd topfed
```

Download and install all the dependent packages.

```sh
yarn install
```

Start development server.

```sh
yarn start
```

### Software dependencies

The applications and modules used for this application are:

1. React
2. Gatsby
3. Jest
4. Prettier

We will update the list in the following versions

### Latest releases

This is the first version, which includes the application structure and some lines of code just for example

### API references

This application uses GraphQL to send queries and mutations

## Build and Test

Test the application, run the command.

```sh
yarn test
```

Create a production build.

```sh
gatsby clean
```

Create a production build with enviroment

```sh
GATSBY_ACTIVE_ENV=expertsManchester yarn start
GATSBY_ACTIVE_ENV=topfed gatsby build && gatsby serve
GATSBY_ACTIVE_ENV=topfed gatsby build && gatsby serve
GATSBY_ACTIVE_ENV=expertsManchester gatsby build && gatsby serve
```

Gatsby starts a local HTML server for testing your built site. Remember to build your site using gatsby build before using this command.
