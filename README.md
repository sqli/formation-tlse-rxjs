# RxJS training #

This project contains practices solutions for RxJS training.

> The following languages / libraries / tools are directly used / referenced into:
> 
> - RxJS
> - TypeScript
> - Webpack
> - Babel
> -  Karma
> - Jasmine

### Install dependencies ###
```
npm install
```

### Build sources ###
Webpack Typescript transpilation + JS ES2015 to ES5 conversion
```
npm run build
```
Result under `dist`

### Run dev server ###
Webpack auto & hot reload feature:
```
npm start
```

Then open in a browser (tested with Chrome 60):
`http://localhost:3000/`

### Run tests ###
Karma test runner + Jasmine tests:
```
npm run test
```

