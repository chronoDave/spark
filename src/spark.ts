import { maybe } from './lib/fn.ts';
import * as render from './lib/render.ts';

export type HTMLVoidElementTagName =
  'area' |
  'base' |
  'br' |
  'col' |
  'embed' |
  'hr' |
  'img' |
  'input' |
  'link' |
  'meta' |
  'source' |
  'track' |
  'wbr';

export default <T extends string = keyof HTMLElementTagNameMap>(tag: T) =>
  (attributes?: Record<string, unknown>) =>
    (...children: T extends HTMLVoidElementTagName ? never[] : unknown[]) => {
      const open = `<${tag}${maybe(render.attributes)(attributes) ?? ''}>`;
      if ([
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
      ].includes(tag)) return open;
      return `${open}${render.children(children)}</${tag}>`;
    };

export const xml = (tag: string) =>
  (attributes?: Record<string, unknown>) =>
    (...children: unknown[]) => {
      const body = render.children(children);

      if (body === '') return `<${tag}${maybe(render.attributes)(attributes) ?? ''}/>`;
      return `<${tag}${maybe(render.attributes)(attributes) ?? ''}>${body}</${tag}>`;
    };
