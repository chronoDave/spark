export type Attribute = string | boolean | number | (() => Attribute) | Attribute[];

export type TargetAttribute = '_blank' | '_self' | '_parent' | '_top' | string;
export type MethodAttribute = 'get' | 'post' | 'dialog';
export type RelAttribute = 'noreferrer' | 'noopener' | 'opener';
export type LoadingAttribute = 'lazy' | 'eager';

export type GlobalAttributes = {
  accesskey: string
  autocapitalize: 'on' | 'off' | 'none' | 'sentences' | 'words' | 'characters'
  autofocus: boolean
  contenteditable: 'true' | 'plaintext-only' | 'false'
  dir: 'ltr' | 'rtl' | 'auto'
  draggable: 'true' | 'false'
  enterkeyhint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'
  hidden: 'until-found' | 'hidden' | true
  inert: boolean
  inputmode: 'none' | 'text' | 'tel' | 'email' | 'url' | 'numeric' | 'decimal' | 'search'
  is: string
  itemid: string
  itemprop: string
  itemref: string
  itemscope: boolean
  itemtype: string
  lang: string
  nonce: string
  popover: 'auto' | 'manual'
  spellcheck: 'true' | 'false'
  style: string
  tabindex: number
  title: string
  translate: 'yes' | 'no'
};

export type HTMLAttributes = GlobalAttributes & {
  [x in `aria-${string}`]: string
} & {
  [x in `data-${string}`]: string
} & {
  [key: string]: Attribute
};
