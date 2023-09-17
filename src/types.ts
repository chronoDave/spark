export type Tag = keyof HTMLElementTagNameMap;

export type Properties = {
  id: string
  classes: string[]
};

export type VNode<T extends Tag = Tag> = {
  tag: T
  selector: string
  children: VNode[]
  properties?: Partial<Properties>
};
