import render from './render';
import { VNode } from './types';

const mount = (document: Document) => (root: Element, vnode: VNode) =>
  root.appendChild(render(document)(vnode));

export default mount;
