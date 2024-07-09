const createTextElement = (x) => ({
  type: "text",
  props: {},
  value: `${x}`,
  children: []
});
const createChild = (child) => {
  if (typeof child === "undefined" || child === null)
    return null;
  if (typeof child === "function")
    return createChild(child());
  if (typeof child === "object")
    return child;
  return createTextElement(child);
};
var element = (tag, props, children) => ({
  type: tag,
  props: props ?? {},
  children: children?.reduce((acc, cur) => {
    const child = createChild(cur);
    if (child)
      acc.push(child);
    return acc;
  }, []) ?? []
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
  const x = Object.entries(props).reduce((acc, [k, v]) => {
    if (typeof v === "function") {
      acc.push(`${k}="${v()}"`);
      return acc;
    }
    if (typeof v !== "undefined" && v !== null)
      acc.push(`${k}="${v}"`);
    return acc;
  }, []);
  if (x.length === 0)
    return "";
  return ` ${x.join("")}`;
};
const render = (element) => {
  if (typeof element === "string")
    return element;
  if ("value" in element)
    return element.value;
  if (VOID_ELEMENTS.has(element.type))
    return `<${element.type}${renderProps(element.props)}>`;
  return `<${element.type}${renderProps(element.props)}>${element.children.map(render).join("")}</${element.type}>`;
};

const createElement = (tag, props, ...children) => {
  if (typeof tag === "function")
    return tag({ ...props, children: children.flat() });
  return render(element(tag, props, children.flat()));
};

export { createElement };
