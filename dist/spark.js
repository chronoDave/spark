// src/lib/fn.ts
var maybe = (fn) => (x) => {
  if (x === null || x === void 0) return null;
  return fn(x);
};

// src/lib/render.ts
var escape = (x) => x.replace(/</g, "&gt;").replace(/>/g, "&lt;").replace(/&/g, "&amp;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
var attributes = (attributes2) => Object.entries(attributes2).reduce((acc, [k, v]) => {
  if (typeof v === "string") acc += ` ${k}="${escape(v)}"`;
  if (typeof v === "number" || typeof v === "boolean") acc += ` ${k}="${v}"`;
  return acc;
}, "");
var children = (...x) => x.reduce((acc, cur) => {
  if (Array.isArray(cur)) acc += children(...cur);
  if (typeof cur === "string") acc += cur;
  if (typeof cur === "number" || cur === true) acc += `${cur}`;
  return acc;
}, "");

// src/spark.ts
var spark_default = (tag) => (attributes2) => (...children2) => {
  const open = `<${tag}${maybe(attributes)(attributes2) ?? ""}>`;
  if ([
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
  ].includes(tag)) return open;
  return `${open}${children(children2)}</${tag}>`;
};
var xml = (tag) => (attributes2) => (...children2) => {
  const body = children(children2);
  if (body === "") return `<${tag}${maybe(attributes)(attributes2) ?? ""}/>`;
  return `<${tag}${maybe(attributes)(attributes2) ?? ""}>${body}</${tag}>`;
};
export {
  spark_default as default,
  xml
};
