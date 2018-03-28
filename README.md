# vue-plugin-template

> ✨ DX experience & lighter plugins 🚀

Fork of https://github.com/mgesmundo/vue-plugin-template
This is a simplified version without JSX support and with a straightforward configuration.

## Usage

```bash
vue init sayuthisobri/vue-plugin-template my-awesome-plugin
# Answer some questions
cd my-awesome-plugin
yarn
yarn run storybook
# 🎉
```

## Features

### Smaller plugin size
Bundle with [Rollup](https://github.com/rollup/rollup). This produces bundles
that are easier to debug and more lightweight but is less customizable than
Webpack. But don't worry **you can also use Webpack** instead of Rollup 😉

### Single file components
Write your components using `.vue` files. Those will be compiled into render
functions when building your plugin to make them compatible everywhere.

### ES6
Use the future features of Javascript.

### Advanced testing
Get the best developer experience by testing the components at the same
time you **interact** with them using [storybook](https://storybook.js.org/basics/guide-vue/).

### Development-only features
Add warnings to improve the DX of your plugin that are removed when bundling in
production mode:

```js
if (process.env.NODE_ENV !== 'production' && warningCondition) {
  warn('You should be doing things this way instead: ...')
}
```

## License

[MIT](http://opensource.org/licenses/MIT)
