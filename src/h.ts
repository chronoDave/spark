import { Tag, VNode } from './types';

const h = <T extends Tag>(
  tag: T,
  options?: {
    properties?: Partial<HTMLElementTagNameMap[T]>,
    text?: string
  },
  children?: VNode[]
): VNode<T> => ({
  tag,
  selector: tag,
  text: options?.text,
  properties: options?.properties,
  children: (children ?? [])
    .map(child => {
      const vnode = h(child.tag, {
        properties: child.properties,
        text: child.text
      }, child.children);
      vnode.selector = `${tag}>${vnode.selector}`;

      return vnode;
    })
});

export default h;
