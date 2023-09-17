import test from 'tape';
import { JSDOM } from 'jsdom';

import mount from '../src/mount';
import h from '../src/h';

test('[mount] mounts vnode', t => {
  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
  const vdom = h('main', {}, [h('h1'), h('p')]);

  mount(dom.window.document)(dom.window.document.body, vdom);

  t.true(dom.window.document.querySelector('main > h1'), 'mounts vnode');

  t.end();
});
