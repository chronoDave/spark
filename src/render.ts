import type { Element, TextElement } from './element';

const VOID_ELEMENTS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'source',
  'track',
  'wbr'
]);

const renderProps = (props: object): string => {
  const x = Object.entries(props)
    .reduce<string[]>((acc, [k, v]) => {
      if (typeof v === 'function') {
        acc.push(`${k}="${v()}"`);
        return acc;
      }

      if (typeof v !== 'undefined' && v !== null) acc.push(`${k}="${v}"`);

      return acc;
    }, []);

  if (x.length === 0) return '';
  return ` ${x.join('')}`;
};

export const render = (element: Element | TextElement | string): string => {
  if (typeof element === 'string') return element;
  if ('value' in element) return element.value;
  if (VOID_ELEMENTS.has(element.type)) return `<${element.type}${renderProps(element.props)}>`;
  return `<${element.type}${renderProps(element.props)}>${element.children.map(render).join('')}</${element.type}>`;
};
