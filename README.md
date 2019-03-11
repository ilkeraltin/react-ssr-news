# SSR News - React

React Server Side Rendering demo project. This project uses [News API](https://newsapi.org/) under the hood.

Demo: [Click to see DEMO](https://react-ssr-ilker.herokuapp.com/)

![SSR News](https://i.imgur.com/F3AT7v0.jpg)

## Getting Started

This project created for a Meetup talk about Server Side Rendering with React.

### Installing

First clone project and install dependencies

```sh
$ mkdir react-news && cd react-news
$ git clone ...
$ npm install
```


Navigate to [News API](https://newsapi.org/) and grab your API key.

Find config.js in root folder and update API Key.

```javascript
const config = {
  apikey: 'enter-your-api-key'
};
```

Run on local

```sh
$ npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

Deployment build

```sh
$ npm run build:prod
```

You can deploy this project to:

- [Heroku](https://www.heroku.com/)

## Built With

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
