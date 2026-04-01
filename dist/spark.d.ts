type Attributes = Record<string, unknown>;
export type HTMLVoidElementTagName = "area" | "base" | "br" | "col" | "embed" | "hr" | "img" | "input" | "link" | "meta" | "source" | "track" | "wbr";
declare const _default: <T extends string = keyof HTMLElementTagNameMap>(tag: T) => <P extends Attributes>(attributes?: P | undefined) => (...children: T extends HTMLVoidElementTagName ? never[] : unknown[]) => string;
export declare const xml: <T extends string>(tag: T) => <P extends Attributes>(attributes?: P | undefined) => (...children: unknown[]) => string;

export {
	_default as default,
};

export {};
