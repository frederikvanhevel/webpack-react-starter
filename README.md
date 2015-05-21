# webpack-react-starter
A minimal webpack + react ES6 starter template.

What's included:

- Tasks scripts using `npm run`
- Babel compiler ES6 to ES5
- ES6 lint and eslint-plugin-react
- CSS support using style-loder and css-loader
- SVG, PNG, JPG, GIF and fonts via url-loader

## Installation

```
npm install
npm run build
```

This package is also on NPM `npm i webpack-react-starter`.

## Development

### Tasks

- `npm run build`
- `npm run examples`
- `npm run lint`

### File Structure

#### dist

The compiled and minified version for distribution generated by `npm run build`.

#### examples

Create your app and demonstrate how the components works. The `npm run examples` starts the [webpack-dev-server](http://webpack.github.io/docs/webpack-dev-server.html) in hot mode.

#### scripts

Bash scripts to perform the build operation.

#### src

Source of the project. Since we're keeping the stylesheet together with the component, have a folder for each one make sense e.g.

```
|-- src
  |-- Menu
    |-- index.js
    |-- index.css
  |-- SearchField
    |-- index.js
    |-- index.css  
  |-- index.js
```

#### src/index.js

The `./src/index.js` is the main entry point. Use it to export your modules.

```javascript
export {default as HelloWorld} from './HelloWorld';
```