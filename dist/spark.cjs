'use strict';

var jsx = /*#__PURE__*/Object.freeze({
  __proto__: null
});

const VOID_ELEMENTS = /* @__PURE__ */ new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "source",
  "track",
  "wbr"
]);
const renderProps = (props) => {
  if (!props || Object.keys(props).length === 0)
    return "";
  const x = Object.entries(props).map(([k, v]) => v || v === false ? `${k}="${typeof v === "function" ? v() : v}"` : "").join(" ");
  if (x.length === 0)
    return "";
  return ` ${x}`;
};
const renderChild = (child) => {
  if (Array.isArray(child))
    return child.map(renderChild).join("");
  if (typeof child === "function")
    return child();
  return child ?? "";
};
const createElement = (tag, props, ...children) => {
  if (VOID_ELEMENTS.has(tag))
    return `<${tag}${renderProps(props)}>`;
  return `<${tag}${renderProps(props)}>${children.map(renderChild).join("")}</${tag}>`;
};

exports.JSX = jsx;
exports.createElement = createElement;
