# Tailwind CSS Text Shadow

[![Latest Stable Version](https://img.shields.io/npm/v/@romanzipp/tailwindcss-text-shadow?style=flat-square)](https://www.npmjs.com/package/@romanzipp/tailwindcss-text-shadow)
[![Total Downloads](https://img.shields.io/npm/dy/@romanzipp/tailwindcss-text-shadow?style=flat-square)](https://www.npmjs.com/package/@romanzipp/tailwindcss-text-shadow)
[![GitHub Build Status](https://img.shields.io/github/workflow/status/romanzipp/tailwindcss-text-shadow/Lint?style=flat-square)](https://github.com/romanzipp/tailwindcss-text-shadow/actions)

## Install

```shell
yarn add @romanzipp/tailwindcss-text-shadow
```

## Configuration

Your `tailwind.config.js` file

```js
const textShadow = require('@romanzipp/tailwindcss-text-shadow');

module.exports = {
    // ...
    plugins: [
        textShadow,
    ],
};
```

## Usage

```html
<div class="text-shadow text-shadow-red-500 text-shadow-opacity-50">
    Your awesome headline
</div>

```
```
.text-shadow
```

### Sizes

```
.text-shadow-sm
.text-shadow-md
.text-shadow-lg
.text-shadow-xl
```

### Colors

```
.text-shadow-red-400
.text-shadow-red-500
.text-shadow-red-600
```

### Opacity

```
.text-shadow-opacity-5
.text-shadow-opacity-10
.text-shadow-opacity-20
.text-shadow-opacity-25
.text-shadow-opacity-30
.text-shadow-opacity-40
.text-shadow-opacity-50
.text-shadow-opacity-60
.text-shadow-opacity-70
.text-shadow-opacity-75
.text-shadow-opacity-80
.text-shadow-opacity-90
.text-shadow-opacity-95
.text-shadow-opacity-100
```

## // TODO

- [ ] Support color `/` syntax
- [ ] Support JIT values

## Authors

- [Roman Zipp](https://github.com/romanzipp)
