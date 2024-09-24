<div align="center">
  <h1>@chronocide/spark</h1>
  <p>Simple <b>JSX</b> templating library.</p>
</div>

<div align="center">
  <a href="/LICENSE">
    <img alt="License GPLv3" src="https://img.shields.io/badge/license-GPLv3-blue.svg" />
  </a>
  <a href="https://www.npmjs.com/package/@chronocide/spark">
    <img alt="NPM" src="https://img.shields.io/npm/v/@chronocide/spark?label=npm">
  </a>
  <a href="https://bundlephobia.com/result?p=@chronocide/spark@latest">
    <img alt="Bundle size" src="https://img.shields.io/bundlephobia/minzip/@chronocide/spark@latest.svg">
  </a>
</div>

## Why?

`@chronocide/spark` is tiny and fullfills exactly one job, which is templating in JavaScript. Similar templating solutions exist such as [Handlebars](https://handlebarsjs.com/), [EJS](https://ejs.co/) or [Nunjucks](https://github.com/mozilla/nunjucks) but these solutions often provide a custom templating language instead of using JavaScript directly.

## Getting Started

### Installation

```sh
npm i @chronocide/spark
```

### Example

**tsconfig.json**

```JSON
{
  ...
  "jsx": "react",
  "jsxFactory": "spark.createElement"
  ...
}
```

**index.tsx**

```TSX
import * as spark from '@chronocide/spark';

type Props = {
  title: string
}

const Template: spark.Component<Props> = props => (
  <html lang="en">
    <body>
      <h1>{props.title}</h1>
      {props.children}
    </body>
  </html>
);

const Page = () => (
  <Template title="Page">
    <p>Title</p>
  </Template>
);

<Page /> // <html lang="en"><body><h1>Page</h1><p>Title</p></body></html>
```

**index.ts**

```ts
import { createElement as h } from '@chronocide/spark';

type TemplateProps = {
  title: string
}

const template = (props: TemplateProps, children: string[]) =>
  h('html', { lang: 'en' },
    h('body', {},
      h('h1', {}, props.title),
      ...children
    )
  );

const page = () => template({ title: 'Page' }, h('p', {}, 'Title') });

page(); // <html lang="en"><body><h1>Page</h1><p>Title</p></body></html>
```