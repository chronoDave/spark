import test from 'tape';
import { JSDOM } from 'jsdom';

import render from '../src/render';
import h from '../src/h';

test('[render] creates dom element', t => {
  const dom = new JSDOM();
  const classes = ['a', 'b', 'c'];
  const element = render(dom.window.document)(h('div', { id: 'test', classes }));

  t.equal(element.tagName, 'DIV', 'creates element');
  t.equal(element.id, 'test', 'sets properties');
  t.deepEqual(Array.from(element.classList.values()), classes, 'sets classes');

  dom.window.close();
  t.end();
});

test('[render] creates dom element children', t => {
  const dom = new JSDOM();
  const element = render(dom.window.document)(h('div', {}, [h('p'), h('a')]));

  t.equal(element.children.length, 2, 'creates children');
  t.equal(element.children[0].tagName, 'P', 'creates child element');

  dom.window.close();
  t.end();
});
