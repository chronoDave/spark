<div align="center">
  <h1>@chronocide/spark</h1>
  <p>Simple <b>TSX</b> templating library.</p>
</div>

<div align="center">
  <a href="/LICENSE">
    <img alt="License GPLv3" src="https://img.shields.io/badge/license-GPLv3-blue.svg" />
  </a>
  <img alt="Bundle size" src="https://img.shields.io/bundlejs/size/%40chronocide%2Fspark">
  <a href="https://www.npmjs.com/package/@chronocide/spark">
    <img alt="NPM" src="https://img.shields.io/npm/v/@chronocide/spark?label=npm">
  </a>
</div>

## Features

 - No external dependencies
 - Written in [TypeScript](https://en.wikipedia.org/wiki/TypeScript)
 - Supports [JSX](https://en.wikipedia.org/wiki/JSX_(JavaScript)) (optional)
 - [Declarative](https://en.wikipedia.org/wiki/Declarative_programming)

## Installation

```sh
npm i @chronocide/spark
```

## Example

```TS
import h from '@chronocide/spark';

console.log(h('h1')()('Hello world!')); // <h1>Hello world!</h1>
```

```TS
import h from '@chronocide/spark';

const arr = [1, 2, 3];
const li = (i: number) => h('li')()(i);
const ul = h('ul')()(arr.map(li)); // <ul><li>1</li><li>2</li><li>3</li></ul>
```

```TS
import h from '@chronocide/spark';

const page = (...children: unknown[]): string => {
  const out = h('html')({ lang: 'en' })(
    h('head')()(
      h('title')()('My website')
    ),
    h('a')({ class: 'sr-only', href: '#main' })('Jump to main content.')
    h('body')()(
      h('main')({ id: 'main' })(children)
    )
  );

  return `<!DOCTYPE html>${out}`;
};

const landing = page(
  h('h1')()('Hello world!'),
  h('p')()('This is my landing page')
); // <!DOCTYPE html><html lang="en"><head><title>My website</title></head><a class="sr-only" href="#main">Jump to main content.</a><body><main id="main"><h1>Hello world!</h1><p>This is my landing page</p></main></body></html>
```

### TSX

`tsconfig.json`

```JSON
{
  ...
  "jsx": "react",
  "jsxFactory": "spark.createElement"
  ...
}
```

`index.tsx`

```TSX
import * as spark from '@chronocide/spark/jsx';

const Page = (...children: unknown[]): string => {
  const out = (
    <html lang="en">
      <head>
        <title>My website</title>
      </head>
      <a class="sr-only" href="#main">Jump to main content.</a>
      <body>
        <main id="main">{children}</main>
      </body>
    </html>
  );

  return `<!DOCTYPE html>${out}`;
};

const Landing = (
  <Page>
    <h1>Hello world!</h1>
    <p>This is my landing page</p>
  </Page>
); // <!DOCTYPE html><html lang="en"><head><title>My website</title></head><a class="sr-only" href="#main">Jump to main content.</a><body><main id="main"><h1>Hello world!</h1><p>This is my landing page</p></main></body></html>
```

## API

| Type | Example | Output |
| - | - | - |
| `string` | `h('span')({})('spark')` | `<span>spark</span>`
| `number` | `h('span')({})(3)` | `<span>3</span>`
| `boolean` | `h('span')({})(true)` | `<span>true</span>`
| `boolean` | `h('span')({})(false)` | `<span></span>`
| `undefined` | `h('span')({})(undefined)` | `<span></span>`
| `null` | `h('span')({})(null)` | `<span></span>`

## Why?

Similar templating solutions exist — such as [Handlebars](https://handlebarsjs.com/), [EJS](https://ejs.co/) or [Nunjucks](https://github.com/mozilla/nunjucks) — but these solutions often provide a custom templating language instead of TypeScript. They're also (unnecessarily) large for creating static HTML.