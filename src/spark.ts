import element, { Child } from './element';
import { render } from './render';

export type { JSX } from './jsx';

export type Component<T extends object = {}> = (props: T & { children?: Child[] }) => string;

export const createElement = (
  tag: string | Component,
  props: object | null,
  ...children: Child[] | Child[][]
): string => {
  if (typeof tag === 'function') return tag({ ...props, children: children.flat() });
  return render(element(tag, props, children.flat()));
};
