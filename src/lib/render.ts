export type Attributes = Record<string, unknown>;

const escape = (x: string) => x
  .replace(/</g, '&gt;')
  .replace(/>/g, '&lt;')
  .replace(/&/g, '&amp;')
  .replace(/'/g, '&#39;')
  .replace(/"/g, '&quot;');

export const attributes = (attributes: Attributes): string => Object
  .entries(attributes)
  .reduce<string>((acc, [k, v]) => {
    if (typeof v === 'string') acc += ` ${k}="${escape(v)}"`;
    if (typeof v === 'number' || typeof v === 'boolean') acc += ` ${k}="${v}"`;

    return acc;
  }, '');

export const children = (...x: unknown[]): string => x
  .reduce<string>((acc, cur) => {
    if (Array.isArray(cur)) acc += children(...cur);
    if (typeof cur === 'string') acc += cur;
    if (typeof cur === 'number' || cur === true) acc += `${cur}`;

    return acc;
  }, '');
