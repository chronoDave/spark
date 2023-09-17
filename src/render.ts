import { VNode } from './types';

const render = (document: Document) => (vnode: VNode) => {
  const element = document.createElement(vnode.tag);
  if (vnode.properties?.id) element.id = vnode.properties.id;
  if (vnode.properties?.classes) element.classList.add(...vnode.properties.classes);

  vnode.children.forEach(child => element.appendChild(render(document)(child)));

  return element;
};

export default render;
