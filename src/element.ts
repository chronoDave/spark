export type Child = string | number | boolean | null | (() => Child);

export type Element = {
  type: string
  props: object
  children: Array<Element | TextElement>
};

export type TextElement = Element & {
  type: 'text'
  value: string
};

const createTextElement = (x: string | boolean | number | null): TextElement => ({
  type: 'text',
  props: {},
  value: `${x}`,
  children: []
});

const createChild = (child: Child): Element | TextElement | null => {
  if (typeof child === 'undefined' || child === null) return null;
  if (typeof child === 'function') return createChild(child());
  if (typeof child === 'object') return child;
  return createTextElement(child);
};

export default (tag: string, props: object | null, children?: Child[]): Element | TextElement => ({
  type: tag,
  props: props ?? {},
  children: children?.reduce<Array<Element | TextElement>>((acc, cur) => {
    const child = createChild(cur);
    if (child) acc.push(child);

    return acc;
  }, []) ?? []
});
