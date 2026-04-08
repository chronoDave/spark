export type HTMLVoidElementTagName = "area" | "base" | "br" | "col" | "embed" | "hr" | "img" | "input" | "link" | "meta" | "source" | "track" | "wbr";
declare const _default: <T extends string = keyof HTMLElementTagNameMap>(tag: T) => (attributes?: Record<string, unknown>) => (...children: T extends HTMLVoidElementTagName ? never[] : unknown[]) => string;
export declare const xml: (tag: string) => (attributes?: Record<string, unknown>) => (...children: unknown[]) => string;

export {
	_default as default,
};

export {};
