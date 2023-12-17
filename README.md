<div align="center">
  <span style="font-size: 3rem" aria-hidden="true">✨</span>

  <h1>spark</h1>
  <p><b>spark</b> is a simple <a href="https://en.wikipedia.org/wiki/JSX_(JavaScript)">JSX</a> templating language.</p>
</div>

<div align="center">
  <a href="/LICENSE">
    <img alt="License GPLv3" src="https://img.shields.io/badge/license-GPLv3-blue.svg" />
  </a>
</div>

## Getting Started

### Installation

```sh
npm i leaf-db
```

### Example

Using **spark** should feel familiar for those used to writing JSX:

```TSX
const Template = props => (
  <html lang="en">
    <body>{props.children}</body>
  </html>
);

const Page = () => (
  <Template>
    <h1>Title</h1>
  </Template>
)
```