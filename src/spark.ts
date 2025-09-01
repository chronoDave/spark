import { maybe } from './lib/fn.ts';
import type { Attributes } from './lib/render.ts';

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
  <P extends Attributes>(attributes?: P) =>
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
      return `${open}${maybe(render.children)(children)}</${tag}>`;
    };
