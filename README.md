# Search Gif

The app can be found by following the link https://search-gif.web.app

## Installation

Firstly you need to install node_modules by running this command

```bash
$ npm install
```

Then, you need to create .env file and setup environment variables (See example at .env.dist)

## Running the app

```bash
$ npm run start
```

## Testing

```bash
$ npm run test
```

## Build

```bash
$ npm run build
```

## Deploy

Firstly you need to install firebase-tools by running this command

```bash
$ npm install -g firebase-tools
```

After that, you need to log in to your firebase account by using this command

```bash
$ firebase login
```

Then you need to select the project

```bash
$ firebase use {PROJECT_NAME}
```

For deploying the app you need to run this command

```bash
$ npm run publish
```
