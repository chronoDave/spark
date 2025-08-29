import type { Attributes } from './lib/render.ts';

import h from './spark.ts';

export type TargetAttribute = '_blank' | '_self' | '_parent' | '_top';
export type RelAttribute = 'help' | 'license' | 'next' | 'prev' | 'search';
export type LoadingAttribute = 'lazy' | 'eager';
export type ReferrerAttribute = 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
export type AutocompleteAttribute = 'off' | 'on' | string;
export type FetchPriorityAttribute = 'high' | 'low' | 'auto';

export type HTMLElementAttributes = {
  accesskey: string;
  autocapitalize: 'on' | 'off' | 'none' | 'sentences' | 'words' | 'characters';
  autofocus: boolean;
  contenteditable: 'true' | 'plaintext-only' | 'false';
  dir: 'ltr' | 'rtl' | 'auto';
  draggable: 'true' | 'false';
  enterkeyhint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
  hidden: 'until-found' | 'hidden' | true;
  inert: boolean;
  inputmode: 'none' | 'text' | 'tel' | 'email' | 'url' | 'numeric' | 'decimal' | 'search';
  is: string;
  itemid: string;
  itemprop: string;
  itemref: string;
  itemscope: boolean;
  itemtype: string;
  lang: string;
  nonce: string;
  popover: 'auto' | 'manual';
  spellcheck: 'true' | 'false';
  style: string;
  tabindex: number;
  title: string;
  translate: 'yes' | 'no';
} & Record<string, unknown>;

export type HTMLAElementAttributes = HTMLElementAttributes & {
  href: string;
  target: TargetAttribute;
  download: string;
  ping: string;
  rel: RelAttribute | 'alternate' | 'author' | 'bookmark' | 'external' | 'me' | 'privacy-policy' | 'tag' | 'terms-of-service';
  hreflang: string;
  type: string;
  referrerpolicy: string;
};

export type HTMLAbbrElementAttributes = HTMLElementAttributes;

export type HTMLAddressElementAttributes = HTMLElementAttributes;

export type HTMLAreaElementAttributes = HTMLElementAttributes & {
  alt: string;
  coords: string;
  download: string;
  href: string;
  ping: string;
  referrerpolicy: ReferrerAttribute;
  rel: string;
  shape: 'rect' | 'circle' | 'poly' | 'default';
  target: TargetAttribute;
};

export type HTMLArticleElementAttributes = HTMLElementAttributes;

export type HTMLAsideElementAttributes = HTMLElementAttributes;

export type HTMLAudioElementAttributes = HTMLElementAttributes & {
  autoplay: boolean;
  controls: boolean;
  controlslist: 'nodownload' | 'nofullscreen' | 'noremoteplayback';
  crossorigin: 'anonymous' | 'use-credentials';
  disableremoteplayback: boolean;
  loop: boolean;
  muted: boolean;
  preload: 'none' | 'metadata' | 'auto';
  src: string;
};

export type HTMLBElementAttributes = HTMLElementAttributes;

export type HTMLBaseElementAttributes = HTMLElementAttributes & {
  href: string;
  target: TargetAttribute;
};

export type HTMLBdiElementAttributes = HTMLElementAttributes;

export type HTMLBdoElementAttributes = HTMLElementAttributes & {
  dir: 'ltr' | 'rtl';
};

export type HTMLBlockquoteElementAttributes = HTMLElementAttributes & {
  cite: string;
};

export type HTMLBodyElementAttributes = HTMLElementAttributes;

export type HTMLBrElementAttributes = HTMLElementAttributes;

export type HTMLButtonElementAttributes = HTMLElementAttributes & {
  autofocus: boolean;
  command: 'show-modal' | 'close' | 'request-close' | 'show-popover' | 'hide-popover' | 'toggle-popover' | `--${string}`;
  commandfor: string;
  disabled: boolean;
  form: string;
  formaction: string;
  formenctype: string;
  formmethod: string;
  formnovalidate: boolean;
  formtarget: TargetAttribute;
  name: string;
  popovertarget: string;
  popovertargetaction: 'hide' | 'show' | 'toggle';
  type: 'submit' | 'reset' | 'button';
  value: string;
};

export type HTMLCanvasElementAttributes = HTMLElementAttributes & {
  width: number;
  height: number;
};

export type HTMLCaptionElementAttributes = HTMLElementAttributes;

export type HTMLCiteElementAttributes = HTMLElementAttributes;

export type HTMLCodeElementAttributes = HTMLElementAttributes;

export type HTMLColElementAttributes = HTMLElementAttributes & {
  span: number;
};

export type HTMLColgroupElementAttributes = HTMLElementAttributes & {
  span: number;
};

export type HTMLDataElementAttributes = HTMLElementAttributes & {
  value: string;
};

export type HTMLDatalistElementAttributes = HTMLElementAttributes;

export type HTMLDdElementAttributes = HTMLElementAttributes;

export type HTMLDelElementAttributes = HTMLElementAttributes & {
  cite: string;
  datetime: string;
};

export type HTMLDetailsElementAttributes = HTMLElementAttributes & {
  open: boolean;
  name: string;
};

export type HTMLDfnElementAttributes = HTMLElementAttributes;

export type HTMLDialogElementAttributes = HTMLElementAttributes & {
  closedby: 'any' | 'closerequest' | 'none';
  open: boolean;
};

export type HTMLDivElementAttributes = HTMLElementAttributes;

export type HTMLDlElementAttributes = HTMLElementAttributes;

export type HTMLDtElementAttributes = HTMLElementAttributes;

export type HTMLEmElementAttributes = HTMLElementAttributes;

export type HTMLEmbedElementAttributes = HTMLElementAttributes & {
  width: number;
  height: number;
  src: string;
  type: string;
};

export type HTMLFieldsetElementAttributes = HTMLElementAttributes & {
  disabled: boolean;
  form: string;
  name: string;
};

export type HTMLFigcaptionElementAttributes = HTMLElementAttributes;

export type HTMLFigureElementAttributes = HTMLElementAttributes;

export type HTMLFooterElementAttributes = HTMLElementAttributes;

export type HTMLFormElementAttributes = HTMLElementAttributes & {
  'accept-charset': string;
  'autocapitalize': string;
  'autocomplete': 'on' | 'off';
  'name': string;
  'rel': RelAttribute | 'external' | 'nofollow' | 'opener' | 'noopener' | 'noreferrer';
  'action': string;
  'enctype': 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
  'method': 'post' | 'get' | 'dialog';
  'novalidate': boolean;
  'target': '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop';
};

export type HTMLHElementAttributes = HTMLElementAttributes;

export type HTMLH1ElementAttributes = HTMLHElementAttributes;
export type HTMLH2ElementAttributes = HTMLHElementAttributes;
export type HTMLH3ElementAttributes = HTMLHElementAttributes;
export type HTMLH4ElementAttributes = HTMLHElementAttributes;
export type HTMLH5ElementAttributes = HTMLHElementAttributes;
export type HTMLH6ElementAttributes = HTMLHElementAttributes;

export type HTMLHeadElementAttributes = HTMLElementAttributes;

export type HTMLHeaderElementAttributes = HTMLElementAttributes;

export type HTMLHgroupElementAttributes = HTMLElementAttributes;

export type HTMLHrElementAttributes = HTMLElementAttributes;

export type HTMLHtmlElementAttributes = HTMLElementAttributes & {
  xmlns: string;
};

export type HTMLIElementAttributes = HTMLElementAttributes;

export type HTMLIframeElementAttributes = HTMLElementAttributes & {
  allow: string;
  allowfullscreen: 'true';
  browsingtopics: boolean;
  credentialles: boolean;
  csp: string;
  width: number;
  height: number;
  loading: LoadingAttribute;
  name: string;
  referrerpolicy: ReferrerAttribute;
  sandbox: 'allow-downloads' | 'allow-forms' | 'allow-modals' | 'allow-orientation-lock' | 'allow-pointer-lock' | 'allow-popups' | 'allow-popups-to-escape-sandbox' | 'allow-presentation' | 'allow-same-origin' | 'allow-scripts' | 'allow-storage-access-by-user-activation' | 'allow-top-navigation' | 'allow-top-navigation-by-user-activation' | 'allow-top-navigation-to-custom-protocols';
  src: string;
  srcdoc: string;
};

export type HTMLImgElementAttributes = HTMLElementAttributes & {
  alt: string;
  attributionsrc: boolean | string;
  crossorigin: 'anonymous' | 'use-credentials';
  decoding: 'sync' | 'async' | 'auto';
  elementtiming: string;
  fetchpriority: FetchPriorityAttribute;
  width: number;
  height: number;
  ismap: boolean;
  loading: 'eager' | 'lazy';
  referrerpolicy: ReferrerAttribute;
};

export type HTMLInputCommonElementAttributes = {
  disabled: boolean;
  form: string;
  name: string;
  type: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
};

export type HTMLInputElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & {
  accept: string;
  alt: string;
  autocapitalize: 'none' | 'off' | 'sentences' | 'on' | 'words' | 'characters';
  autofocus: boolean;
  capture: 'user' | 'environment';
  checked: boolean;
  dirname: 'rtl' | 'ltr';
  formaction: string;
  formenctype: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
  formmethod: 'get' | 'post' | 'dialog';
  formnovalidate: boolean;
  formtarget: TargetAttribute;
  height: number;
  id: string;
  inputmode: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
  list: string;
  max: number;
  maxlength: number;
  min: number;
  minlength: number;
  multiple: boolean;
  pattern: string;
  placeholder: string;
  popovertarget: string;
  popovertargetaction: 'hide' | 'show' | 'toggle';
  readonly: boolean;
  required: boolean;
  size: number;
  src: string;
  step: number;
  tabindex: number;
  title: string;
  value: string | number;
  width: number;
};

export type HTMLInputButtonElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & Pick<
  HTMLInputElementAttributes,
  'autocapitalize' | 'popovertarget' | 'popovertargetaction' | 'value'
> & { type: 'button' };

export type HTMLInputCheckboxElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & Pick<
  HTMLInputElementAttributes,
  'autocapitalize' | 'checked' | 'required' | 'value'
> & { type: 'checkbox' };

export type HTMLInputColorElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & Pick<
  HTMLInputElementAttributes,
  'autocapitalize' | 'autocomplete' | 'list' | 'value'
> & { type: 'color' };

export type HTMLInputDateElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & Pick<
  HTMLInputElementAttributes,
  'autocapitalize' | 'autocomplete' | 'list' | 'max' | 'min' | 'readonly' | 'required' | 'step' | 'value'
> & { type: 'date' };

export type HTMLInputDatetimeLocalElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & Pick<
  HTMLInputElementAttributes,
  'autocapitalize' | 'autocomplete' | 'max' | 'min' | 'readonly' | 'required' | 'step' | 'value'
> & { type: 'datetime-local' };

export type HTMLInputEmailElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & Pick<
  HTMLInputElementAttributes,
  'autocomplete' | 'dirname' | 'list' | 'maxlength' | 'minlength' | 'multiple' | 'pattern' | 'placeholder' | 'readonly' | 'required' | 'size' | 'value'
> & { type: 'email' };

export type HTMLInputFileElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & Pick<
  HTMLInputElementAttributes,
  'accept' | 'autocapitalize' | 'autocomplete' | 'capture' | 'list' | 'multiple' | 'readonly' | 'required' | 'value'
> & { type: 'file' };

export type HTMLInputHiddenElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & Pick<
  HTMLInputElementAttributes,
  'autocapitalize' | 'autocomplete' | 'dirname' | 'value'
> & { type: 'hidden' };

export type HTMLInputImageElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & Pick<
  HTMLInputElementAttributes,
  'alt' | 'autocapitalize' | 'autocomplete' | 'formaction' | 'formenctype' | 'formmethod' | 'formnovalidate' | 'formtarget' | 'height' | 'list' | 'readonly' | 'required' | 'src' | 'width'
> & { type: 'image' };

export type HTMLInputMonthElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & Pick<
  HTMLInputElementAttributes,
  'autocapitalize' | 'autocomplete' | 'list' | 'max' | 'min' | 'readonly' | 'required' | 'step' | 'value'
> & { type: 'month' };

export type HTMLInputNumberElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & Pick<
  HTMLInputElementAttributes,
  'autocapitalize' | 'autocomplete' | 'list' | 'max' | 'min' | 'placeholder' | 'readonly' | 'required' | 'step' | 'value'
> & { type: 'number' };

export type HTMLInputPasswordElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & Pick<
  HTMLInputElementAttributes,
  'autocomplete' | 'minlength' | 'maxlength' | 'pattern' | 'placeholder' | 'readonly' | 'required' | 'size' | 'value'
> & { type: 'password' };

export type HTMLInputRadioElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & Pick<
  HTMLInputElementAttributes,
  'autocapitalize' | 'checked' | 'required' | 'value'
> & { type: 'radio' };

export type HTMLInputRangeElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & Pick<
  HTMLInputElementAttributes,
  'autocapitalize' | 'autocomplete' | 'max' | 'min' | 'step' | 'value'
> & { type: 'range' };

export type HTMLInputResetElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & Pick<
  HTMLInputElementAttributes,
  'autocapitalize' | 'autocomplete' | 'list' | 'readonly' | 'required' | 'value'
> & { type: 'reset' };

export type HTMLInputSearchElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & Pick<
  HTMLInputElementAttributes,
  'autocapitalize' | 'autocomplete' | 'list' | 'maxlength' | 'minlength' | 'pattern' | 'placeholder' | 'size' | 'value'
> & { type: 'search' };

export type HTMLInputSubmitElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & Pick<
  HTMLInputElementAttributes,
  'autocapitalize' | 'autocomplete' | 'formaction' | 'formenctype' | 'formmethod' | 'formnovalidate' | 'formtarget' | 'list' | 'readonly' | 'required' | 'value'
> & { type: 'submit' };

export type HTMLInputTelElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & Pick<
  HTMLInputElementAttributes,
  'autocapitalize' | 'autocomplete' | 'dirname' | 'list' | 'maxlength' | 'minlength' | 'pattern' | 'placeholder' | 'readonly' | 'required' | 'size' | 'value'
> & { type: 'tel' };

export type HTMLInputTextElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & Pick<
  HTMLInputElementAttributes,
  'autocapitalize' | 'autocomplete' | 'list' | 'maxlength' | 'minlength' | 'pattern' | 'placeholder' | 'readonly' | 'required' | 'size' | 'value'
> & { type: 'text' };

export type HTMLInputTimeElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & Pick<
  HTMLInputElementAttributes,
  'autocapitalize' | 'autocomplete' | 'list' | 'max' | 'min' | 'readonly' | 'required' | 'step' | 'value'
> & { type: 'time' };

export type HTMLInputUrlElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & Pick<
  HTMLInputElementAttributes,
  'autocomplete' | 'dirname' | 'list' | 'maxlength' | 'minlength' | 'pattern' | 'placeholder' | 'size' | 'value'
> & { type: 'url' };

export type HTMLInputWeekElementAttributes = HTMLElementAttributes & HTMLInputCommonElementAttributes & Pick<
  HTMLInputElementAttributes,
  'autocapitalize' | 'autocomplete' | 'list' | 'max' | 'min' | 'readonly' | 'required' | 'step' | 'value'
> & { type: 'week' };

export type HTMLInsElementAttributes = HTMLElementAttributes & {
  cite: string;
  datetime: string;
};

export type HTMLKbdElementAttributes = HTMLElementAttributes;

export type HTMLLabelElementAttributes = HTMLElementAttributes & {
  for: string;
};

export type HTMLLegendElementAttributes = HTMLElementAttributes;

export type HTMLLiElementAttributes = HTMLElementAttributes & {
  value: number;
};

export type HTMLLinkElementAttributes = HTMLElementAttributes & {
  as: 'audio' | 'document' | 'embed' | 'fetch' | 'font' | 'image' | 'object' | 'script' | 'style' | 'track' | 'video' | 'worker';
  blocking: 'render';
  crossorigin: 'anonymous' | 'use-credentials';
  disabled: boolean;
  fetchpriority: FetchPriorityAttribute;
  href: string;
  hreflang: string;
  imagesizes: string;
  imagesrcset: string;
  integrity: string;
  media: string;
  referrerpolicy: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'unsafe-url';
  rel: string;
  sizes: string;
  title: string;
  type: string;
};

export type HTMLMainElementAttributes = HTMLElementAttributes;

export type HTMLMapElementAttributes = HTMLElementAttributes;

export type HTMLMarkElementAttributes = HTMLElementAttributes;

export type HTMLMenuElementAttributes = HTMLElementAttributes;

export type HTMLMetaElementAttributes = HTMLElementAttributes & {
  'charset': string;
  'content': string;
  'http-equiv': 'content-security-policy' | 'content-type' | 'default-style' | 'x-ua-compatible' | 'refresh';
  'media': string;
  'name': string;
};

export type HTMLMeterElementAttributes = HTMLElementAttributes & {
  value: number;
  min: number;
  max: number;
  low: number;
  high: number;
  optimum: number;
  form: string;
};

export type HTMLNavElementAttributes = HTMLElementAttributes;

export type HTMLNoscriptElementAttributes = HTMLElementAttributes;

export type HTMLObjectElementAttributes = HTMLElementAttributes & {
  data: string;
  form: string;
  height: number;
  name: string;
  type: string;
  width: number;
};

export type HTMLOlElementAttributes = HTMLElementAttributes & {
  reversed: boolean;
  start: number;
  type: 'a' | 'A' | 'i' | 'I' | '1';
};

export type HTMLOptgroupElementAttributes = HTMLElementAttributes & {
  disabled: boolean;
  label: string;
};

export type HTMLOptionElementAttributes = HTMLElementAttributes & {
  disabled: boolean;
  label: string;
  selected: boolean;
  value: string;
};

export type HTMLOutputElementAttributes = HTMLElementAttributes & {
  for: string;
  form: string;
  name: string;
};

export type HTMLPElementAttributes = HTMLElementAttributes & {
  for: string;
  form: string;
  name: string;
};

export type HTMLPictureElementAttributes = HTMLElementAttributes;

export type HTMLPreElementAttributes = HTMLElementAttributes;

export type HTMLProgressElementAttributes = HTMLElementAttributes & {
  max: number;
  value: number;
};

export type HTMLQElementAttributes = HTMLElementAttributes & {
  cite: string;
};

export type HTMLRpElementAttributes = HTMLElementAttributes;

export type HTMLRtElementAttributes = HTMLElementAttributes;

export type HTMLRubyElementAttributes = HTMLElementAttributes;

export type HTMLSElementAttributes = HTMLElementAttributes;

export type HTMLSampElementAttributes = HTMLElementAttributes;

export type HTMLScriptElementAttributes = HTMLElementAttributes & {
  async: boolean;
  blocking: 'render';
  crossorigin: string;
  defer: boolean;
  fetchpriority: FetchPriorityAttribute;
  integrity: string;
  nomodule: boolean;
  nonce: string;
  referrerpolicy: ReferrerAttribute;
  src: string;
  type: string;
};

export type HTMLSearchElementAttributes = HTMLElementAttributes;

export type HTMLSectionElementAttributes = HTMLElementAttributes;

export type HTMLSelectElementAttributes = HTMLElementAttributes & {
  autocomplete: string;
  autofocus: boolean;
  disabled: boolean;
  form: string;
  multiple: boolean;
  name: string;
  required: boolean;
  size: number;
};

export type HTMLSlotElementAttributes = HTMLElementAttributes & {
  name: string;
};

export type HTMLSmallElementAttributes = HTMLElementAttributes;

export type HTMLSourceElementAttributes = HTMLElementAttributes & {
  type: string;
  src: string;
  srcset: string;
  sizes: string;
  media: string;
  height: number;
  width: number;
};

export type HTMLSpanElementAttributes = HTMLElementAttributes;

export type HTMLStrongElementAttributes = HTMLElementAttributes;

export type HTMLStyleElementAttributes = HTMLElementAttributes & {
  blocking: 'render';
  media: string;
  nonce: string;
  title: string;
};

export type HTMLSubElementAttributes = HTMLElementAttributes;

export type HTMLSummaryElementAttributes = HTMLElementAttributes;

export type HTMLSupElementAttributes = HTMLElementAttributes;

export type HTMLTableElementAttributes = HTMLElementAttributes;

export type HTMLTbodyElementAttributes = HTMLElementAttributes;

export type HTMLTdElementAttributes = HTMLElementAttributes & {
  colspan: number;
  headers: string;
  rowspan: number;
};

export type HTMLTemplateElementAttributes = HTMLElementAttributes & {
  shadowrootmode: 'open' | 'closed';
  shadowrootclonable: 'true';
  showrootdelegatesfocus: 'true' | 'false';
};

export type HTMLTextareaElementAttributes = HTMLElementAttributes & {
  autocapitalize: string;
  autocomplete: string;
  autocorrect: 'on' | 'off';
  autofocus: boolean;
  cols: number;
  dirname: string;
  disabled: boolean;
  form: string;
  maxlength: number;
  minlength: number;
  name: string;
  placeholder: string;
  readonly: boolean;
  required: boolean;
  rows: number;
  spellcheck: 'true' | 'default' | 'false';
  wrap: 'hard' | 'soft' | 'off';
};

export type HTMLTfootElementAttributes = HTMLElementAttributes;

export type HTMLThElementAttributes = HTMLElementAttributes & {
  abbr: string;
  colspan: number;
  headers: string;
  rowspan: number;
  scope: 'row' | 'col' | 'rowgroup' | 'colgroup';
};

export type HTMLTheadElementAttributes = HTMLElementAttributes;

export type HTMLTimeElementAttributes = HTMLElementAttributes & {
  datetime: string;
};

export type HTMLTitleElementAttributes = HTMLElementAttributes;

export type HTMLTrElementAttributes = HTMLElementAttributes;

export type HTMLTrackElementAttributes = HTMLElementAttributes & {
  default: string;
  kind: 'subtitles' | 'captions' | 'chapters' | 'metadata';
  label: string;
  src: string;
  srclang: string;
};

export type HTMLUElementAttributes = HTMLElementAttributes;

export type HTMLUlElementAttributes = HTMLElementAttributes;

export type HTMLVarElementAttributes = HTMLElementAttributes;

export type HTMLVideoElementAttributes = HTMLElementAttributes & {
  autoplay: boolean;
  controls: boolean;
  controlslist: string;
  crossorigin: 'anonymous' | 'use-credentials';
  disablepictureinpicture: boolean;
  disableremoteplayback: boolean;
  height: number;
  loop: boolean;
  muted: boolean;
  playsinline: boolean;
  poster: string;
  preload: 'none' | 'metadata' | 'auto';
  src: string;
  width: number;
};

export type HTMLWbrElementAttributes = HTMLElementAttributes;

export namespace JSX {
  export interface IntrinsicElements {
    a: Partial<HTMLAElementAttributes>;
    abbr: Partial<HTMLAbbrElementAttributes>;
    address: Partial<HTMLAddressElementAttributes>;
    area: Partial<HTMLAreaElementAttributes>;
    article: Partial<HTMLArticleElementAttributes>;
    aside: Partial<HTMLAsideElementAttributes>;
    audio: Partial<HTMLAudioElementAttributes>;
    b: Partial<HTMLBElementAttributes>;
    base: Partial<HTMLBaseElementAttributes>;
    bdi: Partial<HTMLBdiElementAttributes>;
    bdo: Partial<HTMLBdoElementAttributes>;
    blockquote: Partial<HTMLBlockquoteElementAttributes>;
    body: Partial<HTMLBodyElementAttributes>;
    br: Partial<HTMLBrElementAttributes>;
    button: Partial<HTMLButtonElementAttributes>;
    canvas: Partial<HTMLCanvasElementAttributes>;
    caption: Partial<HTMLCaptionElementAttributes>;
    cite: Partial<HTMLCiteElementAttributes>;
    code: Partial<HTMLCodeElementAttributes>;
    col: Partial<HTMLColElementAttributes>;
    colgroup: Partial<HTMLColgroupElementAttributes>;
    data: Partial<HTMLDataElementAttributes>;
    datalist: Partial<HTMLDatalistElementAttributes>;
    dd: Partial<HTMLDdElementAttributes>;
    del: Partial<HTMLDelElementAttributes>;
    details: Partial<HTMLDetailsElementAttributes>;
    dfn: Partial<HTMLDfnElementAttributes>;
    dialog: Partial<HTMLDialogElementAttributes>;
    div: Partial<HTMLDivElementAttributes>;
    dl: Partial<HTMLDlElementAttributes>;
    dt: Partial<HTMLDtElementAttributes>;
    em: Partial<HTMLEmElementAttributes>;
    embed: Partial<HTMLEmbedElementAttributes>;
    fieldset: Partial<HTMLFieldsetElementAttributes>;
    figcaption: Partial<HTMLFigcaptionElementAttributes>;
    figure: Partial<HTMLFigureElementAttributes>;
    footer: Partial<HTMLFooterElementAttributes>;
    form: Partial<HTMLFormElementAttributes>;
    h1: Partial<HTMLH1ElementAttributes>;
    h2: Partial<HTMLH2ElementAttributes>;
    h3: Partial<HTMLH3ElementAttributes>;
    h4: Partial<HTMLH4ElementAttributes>;
    h5: Partial<HTMLH5ElementAttributes>;
    h6: Partial<HTMLH6ElementAttributes>;
    head: Partial<HTMLHeadElementAttributes>;
    header: Partial<HTMLHeaderElementAttributes>;
    hgroup: Partial<HTMLHgroupElementAttributes>;
    hr: Partial<HTMLHrElementAttributes>;
    html: Partial<HTMLHtmlElementAttributes>;
    i: Partial<HTMLIElementAttributes>;
    iframe: Partial<HTMLIframeElementAttributes>;
    img: Partial<HTMLImgElementAttributes>;
    input: Partial<HTMLInputElementAttributes>;
    ins: Partial<HTMLInsElementAttributes>;
    kbd: Partial<HTMLKbdElementAttributes>;
    label: Partial<HTMLLabelElementAttributes>;
    legend: Partial<HTMLLegendElementAttributes>;
    li: Partial<HTMLLiElementAttributes>;
    link: Partial<HTMLLinkElementAttributes>;
    main: Partial<HTMLMainElementAttributes>;
    map: Partial<HTMLMapElementAttributes>;
    mark: Partial<HTMLMarkElementAttributes>;
    menu: Partial<HTMLMenuElementAttributes>;
    meta: Partial<HTMLMetaElementAttributes>;
    meter: Partial<HTMLMeterElementAttributes>;
    nav: Partial<HTMLNavElementAttributes>;
    noscript: Partial<HTMLNoscriptElementAttributes>;
    object: Partial<HTMLObjectElementAttributes>;
    ol: Partial<HTMLOlElementAttributes>;
    optgroup: Partial<HTMLOptgroupElementAttributes>;
    option: Partial<HTMLOptionElementAttributes>;
    output: Partial<HTMLOutputElementAttributes>;
    p: Partial<HTMLPElementAttributes>;
    picture: Partial<HTMLPictureElementAttributes>;
    pre: Partial<HTMLPreElementAttributes>;
    progress: Partial<HTMLProgressElementAttributes>;
    q: Partial<HTMLQElementAttributes>;
    rp: Partial<HTMLRpElementAttributes>;
    rt: Partial<HTMLRtElementAttributes>;
    ruby: Partial<HTMLRubyElementAttributes>;
    s: Partial<HTMLSElementAttributes>;
    samp: Partial<HTMLSampElementAttributes>;
    script: Partial<HTMLScriptElementAttributes>;
    search: Partial<HTMLSearchElementAttributes>;
    section: Partial<HTMLSectionElementAttributes>;
    select: Partial<HTMLSelectElementAttributes>;
    slot: Partial<HTMLSlotElementAttributes>;
    small: Partial<HTMLSmallElementAttributes>;
    source: Partial<HTMLSourceElementAttributes>;
    span: Partial<HTMLSpanElementAttributes>;
    strong: Partial<HTMLStrongElementAttributes>;
    style: Partial<HTMLStyleElementAttributes>;
    sub: Partial<HTMLSubElementAttributes>;
    summary: Partial<HTMLSummaryElementAttributes>;
    sup: Partial<HTMLSupElementAttributes>;
    table: Partial<HTMLTableElementAttributes>;
    tbody: Partial<HTMLTbodyElementAttributes>;
    td: Partial<HTMLTdElementAttributes>;
    template: Partial<HTMLTemplateElementAttributes>;
    textarea: Partial<HTMLTextareaElementAttributes>;
    tfoot: Partial<HTMLTfootElementAttributes>;
    th: Partial<HTMLThElementAttributes>;
    thead: Partial<HTMLTheadElementAttributes>;
    time: Partial<HTMLTimeElementAttributes>;
    title: Partial<HTMLTitleElementAttributes>;
    tr: Partial<HTMLTrElementAttributes>;
    track: Partial<HTMLTrackElementAttributes>;
    u: Partial<HTMLUElementAttributes>;
    ul: Partial<HTMLUlElementAttributes>;
    var: Partial<HTMLVarElementAttributes>;
    video: Partial<HTMLVideoElementAttributes>;
    wbr: Partial<HTMLWbrElementAttributes>;
    [tag: string]: Partial<HTMLElementAttributes>;
  }
}

export const createElement = <
  T extends string,
  P extends Attributes
>(
  tag: T,
  attributes?: P,
  ...children: unknown[]
) => h(tag)(attributes)(...children);
