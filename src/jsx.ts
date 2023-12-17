import { HTMLCustomElements, HTMLElements } from './types/elements';

export type ElementChildrenAttribute = {
  children?: any
};

export type IntrinsicElements = HTMLElements & HTMLCustomElements;
