# OptimusPrime
NodeJS stream transformer

## Install

Using Yarn:

```bash
yarn add optimus-prime-stream
```

Or using npm:

```bash
npm install --save optimus-prime-stream
```

## API
The module exposes a single function with signature `(Stream input, Function transformer) => Stream output`:
- **input**: The *stream* to read from.
- **transformer**: The *function* that transforms each chunk in the input stream.

**Returns**: A new *stream* with the transformed data.

## Basic usage
Using transform to filter out the data you need from a stream:

```js
// 1. require the package
const transform = require("optimus-prime-stream");

// 2. fetch a stream
const items = loadStreamOfThings();

// 3. get the transformed stream
const names = transform(items, item => JSON.parse(item).name);
```
