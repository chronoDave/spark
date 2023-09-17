export type Tag = keyof HTMLElementTagNameMap;

export type VNode<T extends Tag = Tag> = {
  tag: T
  selector: string
  children: VNode[]
  text?: string
  properties?: Partial<HTMLElement>
};
