export type Child = string | number | boolean | null | undefined | (() => Child) | Child[];

export type Element = {
  type: string;
  props: object;
  children: Array<Element | TextElement>;
};

export type TextElement = Element & {
  type: 'text';
  value: string;
};

export type ChildElement = null | Element | TextElement | ChildElement[];

const createTextElement = (x: string | boolean | number | null): TextElement => ({
  type: 'text',
  props: {},
  value: `${x}`,
  children: []
});

const createChildElement = (child: Child): ChildElement => {
  if (Array.isArray(child)) return child.map(createChildElement);

  if (typeof child === 'undefined' || child === null) return null;
  if (typeof child === 'function') return createChildElement(child());
  if (typeof child === 'object') return child;
  return createTextElement(child);
};

export default (tag: string, props: object | null, children?: Child[]): Element | TextElement => ({
  type: tag,
  props: props ?? {},
  children: children?.reduce<Array<Element | TextElement>>((acc, cur) => {
    const child = createChildElement(cur);

    if (Array.isArray(child)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: TS2589, Type instantiation is excessively deep and possibly infinite. 
      acc.push(...(child.flat(Infinity).filter(x => x) as Array<Element | TextElement>));
    } else if (child) {
      acc.push(child);
    }
    
    return acc;
  }, []) ?? []
});
