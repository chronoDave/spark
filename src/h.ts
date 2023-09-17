import { Properties, Tag, VNode } from './types';

const createSelector = (tag: Tag, properties?: Partial<Properties>) => {
  if (properties?.id) return `#${properties.id}`;
  if (properties?.classes) return `${tag}.${properties.classes?.join('.')}`;
  return tag;
};

const h = <T extends Tag>(
  tag: T,
  properties?: Partial<Properties>,
  children?: VNode[]
): VNode<T> => {
  const selector = createSelector(tag, properties);

  return ({
    tag,
    selector,
    properties,
    children: (children ?? [])
      .map(child => {
        const vnode = h(child.tag, child.properties, child.children);
        vnode.selector = `${selector}>${vnode.selector}`;

        return vnode;
      })
  });
};

export default h;
