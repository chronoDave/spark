import {
  MethodAttribute,
  TargetAttribute,
  RelAttribute,
  LoadingAttribute,
  HTMLAttributes
} from './attributes';

export type HTMLCustomElements = {
  [element: string]: Partial<HTMLAttributes>
};

export type HTMLElements = {
  a: Partial<HTMLAttributes & {
    href: string
    target: TargetAttribute
    download: string
    ping: string
    rel: string
    hreflang: string
    type: string
    referrerpolicy: string
  }>
  abbr: Partial<HTMLAttributes>
  address: Partial<HTMLAttributes>
  area: Partial<HTMLAttributes & {
    target: TargetAttribute
    rel: RelAttribute
    media: string
    hreflang: string
    type: string
    ping: string
    referrerpolicy: string
    href: string
    alt: string
    shape: 'rect' | 'circle' | 'poly' | 'default'
    coords: string
  }>
  article: Partial<HTMLAttributes>
  aside: Partial<HTMLAttributes>
  audio: Partial<HTMLAttributes & {
    src: string
    crossorigin: string
    preload: 'none' | 'metadata' | 'auto'
    autoplay: boolean
    loop: boolean
    muted: boolean
    controls: boolean
  }>
  b: Partial<HTMLAttributes>
  base: Partial<HTMLAttributes & {
    href: string
    target: TargetAttribute
  }>
  bdi: Partial<HTMLAttributes>
  bdo: Partial<HTMLAttributes>
  blockquote: Partial<HTMLAttributes & {
    cite: string
  }>
  body: Partial<HTMLAttributes>
  br: Partial<HTMLAttributes>
  button: Partial<HTMLAttributes & {
    disabled: boolean
    form: string
    formaction: string
    formenctype: string
    formmethod: MethodAttribute
    formnovalidate: boolean
    formtarget: TargetAttribute
    name: string
    popovertarget: string
    popovertargetaction: 'toggle' | 'show' | 'hide'
    type: 'submit' | 'reset' | 'button'
    value: string
  }>
  canvas: Partial<HTMLAttributes & {
    width: number
    height: number
  }>
  caption: Partial<HTMLAttributes>
  cite: Partial<HTMLAttributes>
  code: Partial<HTMLAttributes>
  col: Partial<HTMLAttributes & {
    span: number
  }>
  colgroup: Partial<HTMLAttributes & {
    span: number
  }>
  data: Partial<HTMLAttributes & {
    value: string
  }>
  datalist: Partial<HTMLAttributes>
  dd: Partial<HTMLAttributes>
  del: Partial<HTMLAttributes & {
    cite: string
    datetime: string
  }>
  details: Partial<HTMLAttributes & {
    name: string
    open: boolean
  }>
  dfn: Partial<HTMLAttributes>
  dialog: Partial<HTMLAttributes & {
    open: boolean
  }>
  div: Partial<HTMLAttributes>
  dl: Partial<HTMLAttributes>
  dt: Partial<HTMLAttributes>
  em: Partial<HTMLAttributes>
  embed: Partial<HTMLAttributes & {
    src: string
    type: string
    width: number
    height: Partial<HTMLAttributes>
  }>
  fieldset: Partial<HTMLAttributes & {
    disabled: boolean
    form: string
    name: Partial<HTMLAttributes>
  }>
  figcaption: Partial<HTMLAttributes>
  figure: Partial<HTMLAttributes>
  footer: Partial<HTMLAttributes>
  form: Partial<HTMLAttributes & {
    'accept-charset': string
    action: Partial<HTMLAttributes>
    autocomplete: 'on' | 'off'
    enctype: string
    method: MethodAttribute
    name: string
    novalidate: boolean
    target: TargetAttribute
    rel: RelAttribute
  }>
  h1: Partial<HTMLAttributes>
  h2: Partial<HTMLAttributes>
  h3: Partial<HTMLAttributes>
  h4: Partial<HTMLAttributes>
  h5: Partial<HTMLAttributes>
  h6: Partial<HTMLAttributes>
  head: Partial<HTMLAttributes>
  header: Partial<HTMLAttributes>
  hgroup: Partial<HTMLAttributes>
  hr: Partial<HTMLAttributes>
  html: Partial<HTMLAttributes & {
    manifest: string
  }>
  i: Partial<HTMLAttributes>
  iframe: Partial<HTMLAttributes & {
    src: string
    srcdoc: string
    name: string
    sandbox: string
    allow: string
    allowfullscreen: boolean
    width: number
    height: number
    referrerpolicy: string
    loading: LoadingAttribute
  }>
  img: Partial<HTMLAttributes & {
    alt: string
    src: string
    srcset: string
    sizes: string
    crossorigin: string
    usemap: string
    ismap: boolean
    width: number
    height: number
    referrerpolicy: string
    decoding: string
    loading: LoadingAttribute
    fetchpriority: string
  }>
  input: Partial<HTMLAttributes & {
    accept: string
    alt: string
    autocomplete: string
    checked: boolean
    dirname: string
    disabled: boolean
    form: string
    formaction: string
    formenctype: string
    formmethod: MethodAttribute
    formnovalidate: boolean
    formtarget: TargetAttribute
    height: number
    list: string
    max: number
    maxlength: number
    min: number
    minlength: number
    multiple: boolean
    name: string
    pattern: string
    placeholder: string
    popovertarget: string
    popovertargetaction: 'toggle' | 'show' | 'hide'
    readonly: boolean
    required: boolean
    size: number
    src: string
    step: number
    type: 'hidden' | 'text' | 'search' | 'tel' | 'url' | 'email' | 'password' | 'date' | 'month' | 'week' | 'time' | 'datetime-local' | 'number' | 'range' | 'color' | 'checkbox' | 'radio' | 'file' | 'submit' | 'image' | 'reset' | 'button'
    value: string
    width: number
  }>
  ins: Partial<HTMLAttributes & {
    cite: string
    datetime: string
  }>
  kbd: Partial<HTMLAttributes>
  label: Partial<HTMLAttributes & {
    for: string
  }>
  legend: Partial<HTMLAttributes>
  li: Partial<HTMLAttributes & {
    value: number
  }>
  link: Partial<HTMLAttributes & {
    href: string
    crossorigin: string
    rel: RelAttribute
    as: string
    media: string
    integrity: string
    hreflang: string
    type: string
    referrerpolicy: string
    sizes: string
    imagesrcset: string
    imagesizes: string
    blocking: boolean
    color: string
    disabled: boolean
    fetchpriority: string
  }>
  main: Partial<HTMLAttributes>
  map: Partial<HTMLAttributes & {
    name: string
  }>
  mark: Partial<HTMLAttributes>
  menu: Partial<HTMLAttributes>
  meta: Partial<HTMLAttributes & {
    name: string
    'http-equiv': 'content-language' | 'content-type' | 'default-style' | 'refresh' | 'set-cookie' | 'x-ua-compatible' | 'content-security-policy'
    content: string
    charset: string
    media: string
  }>
  meter: Partial<HTMLAttributes & {
    value: string
    min: number
    max: number
    low: number
    high: number
    optimum: number
  }>
  ol: Partial<HTMLAttributes & {
    reversed: boolean
    start: number
    type: string
  }>
  optgroup: Partial<HTMLAttributes & {
    disabled: boolean
    label: string
  }>
  option: Partial<HTMLAttributes & {
    disabled: boolean
    label: string
    selected: boolean
    value: string
  }>
  output: Partial<HTMLAttributes & {
    for: string
    form: string
    name: string
  }>
  p: Partial<HTMLAttributes>
  picture: Partial<HTMLAttributes>
  pre: Partial<HTMLAttributes>
  progress: Partial<HTMLAttributes & {
    value: string
    max: number
  }>
  q: Partial<HTMLAttributes & {
    cite: string
  }>
  rp: Partial<HTMLAttributes>
  rt: Partial<HTMLAttributes>
  ruby: Partial<HTMLAttributes>
  s: Partial<HTMLAttributes>
  samp: Partial<HTMLAttributes>
  script: Partial<HTMLAttributes & {
    src: string
    type: string
    nomodule: boolean
    async: boolean
    defer: Partial<HTMLAttributes>
    crossorigin: string
    integrity: string
    referrerpolicy: string
    blocking: string
    fetchpriority: string
  }>
  search: Partial<HTMLAttributes>
  section: Partial<HTMLAttributes>
  select: Partial<HTMLAttributes & {
    autocomplete: string
    disabled: boolean
    form: string
    multiple: boolean
    name: string
    required: boolean
    size: number
  }>
  slot: Partial<HTMLAttributes & {
    name: string
  }>
  small: Partial<HTMLAttributes>
  source: Partial<HTMLAttributes & {
    type: string
    media: string
    src: string
    srcset: string
    sizes: string
    width: number
    height: number
  }>
  span: Partial<HTMLAttributes>
  strong: Partial<HTMLAttributes>
  style: Partial<HTMLAttributes & {
    media: string
    blocking: string
  }>
  sub: Partial<HTMLAttributes>
  summary: Partial<HTMLAttributes>
  sup: Partial<HTMLAttributes>
  table: Partial<HTMLAttributes>
  tbody: Partial<HTMLAttributes>
  td: Partial<HTMLAttributes & {
    colspan: number
    rowspan: number
    headers: string
  }>
  template: Partial<HTMLAttributes>
  textarea: Partial<HTMLAttributes & {
    autocomplete: string
    cols: number
    dirname: string
    disabled: boolean
    form: string
    maxlength: number
    minlength: number
    name: string
    placeholder: string
    readonly: boolean
    required: boolean
    rows: number
    wrap: 'soft' | 'hard'
  }>
  tfoot: Partial<HTMLAttributes>
  th: Partial<HTMLAttributes & {
    colspan: number
    rowspan: number
    headers: string
    scope: string
    abbr: string
  }>
  thead: Partial<HTMLAttributes>
  time: Partial<HTMLAttributes & {
    datetime: string
  }>
  title: Partial<HTMLAttributes>
  tr: Partial<HTMLAttributes>
  track: Partial<HTMLAttributes & {
    default: boolean
    kind: 'subtitle' | 'captions' | 'descriptions' | 'chapters' | 'metadata'
    label: string
    src: string
    srclang: Partial<HTMLAttributes>
  }>
  u: Partial<HTMLAttributes>
  ul: Partial<HTMLAttributes>
  var: Partial<HTMLAttributes>
  video: Partial<HTMLAttributes & {
    src: string
    crossorigin: string
    poster: string
    preload: 'none' | 'metadata' | 'auto'
    autoplay: boolean
    playsinline: boolean
    loop: boolean
    muted: boolean
    controls: boolean
    width: number
    height: number
  }>
  wbr: Partial<HTMLAttributes>
};
