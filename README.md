<div align="center">
  <h1>@chronocide/spark</h1>
  <p><b>@chronocide/spark</b> is a simple <a href="https://en.wikipedia.org/wiki/JSX_(JavaScript)">JSX</a> to HTML renderer.</p>
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

## Getting Started

### Installation

```sh
npm i @chronocide/spark
```

### Example

Using **@chronocide/spark** should feel familiar for those used to writing JSX:

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

type TemplateProps = {
  title: string
}

const Template: spark.Component<TemplateProps> = props => (
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

Or if you prefer hyperscript:

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