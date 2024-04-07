export * as JSX from './jsx';

export type Element<T extends object = {}> = (props: T & { children?: any | any[] }) => any;

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

const renderProps = (props?: Record<string, unknown>) => {
  if (!props || Object.keys(props).length === 0) return '';

  const x = Object.entries(props)
    .map(([k, v]) => (v || v === false) ? `${k}="${typeof v === 'function' ? v() : v}"` : '')
    .join(' ');

  if (x.length === 0) return '';
  return ` ${x}`;
};

const renderChild = (child: unknown): unknown => {
  if (Array.isArray(child)) return child.map(renderChild).join('');
  if (typeof child === 'function') return child();
  return child ?? '';
};

export const createElement = (
  tag: string | ((props: Record<string, unknown> & { children?: unknown[] }) => string),
  props?: Record<string, unknown>,
  ...children: any[]
) => {
  if (typeof tag === 'function') return tag({ ...props, children });
  if (VOID_ELEMENTS.has(tag)) return `<${tag}${renderProps(props)}>`;
  return `<${tag}${renderProps(props)}>${children.map(renderChild).join('')}</${tag}>`;
};
