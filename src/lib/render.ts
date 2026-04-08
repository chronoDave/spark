const escape = (x: string) => x
  .replace(/</g, '&gt;')
  .replace(/>/g, '&lt;')
  .replace(/&/g, '&amp;')
  .replace(/'/g, '&#39;')
  .replace(/"/g, '&quot;');

export const attributes = (attributes: Record<string, unknown>): string => Object
  .entries(attributes)
  .reduce<string>((acc, [k, v]) => {
    if (typeof v === 'string') acc += ` ${k}="${escape(v)}"`;
    if (typeof v === 'number') acc += ` ${k}="${v}"`;
    if (v === true) acc += ` ${k}`;

    return acc;
  }, '');

export const children = (...x: unknown[]): string => x
  .reduce<string>((acc, cur) => {
    if (Array.isArray(cur)) acc += children(...cur);
    if (typeof cur === 'string') acc += cur;
    if (typeof cur === 'number') acc += `${cur}`;

    return acc;
  }, '');
