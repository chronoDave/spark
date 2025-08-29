import { maybe } from './lib/fn.ts';
import type { Attributes } from './lib/render.ts';

import * as render from './lib/render.ts';

const VOID_TAGS = new Set([
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

export default <T extends string>(tag: T) =>
  <P extends Attributes>(attributes?: P) =>
    (...children: unknown[]) => {
      const open = `<${tag}${maybe(render.attributes)(attributes) ?? ''}>`;
      if (VOID_TAGS.has(tag)) return open;
      return `${open}${maybe(render.children)(children)}</${tag}>`;
    };
