import test from 'tape';

import { createElement } from './spark';

test('[createElement] renders element', t => {
  t.equal(createElement('p'), '<p></p>', 'HTML element');
  t.equal(createElement('img'), '<img>', 'HTML void element');

  t.end();
});

test('[createElement] renders attributes', t => {
  t.equal(createElement('p', { class: 'body' }), '<p class="body"></p>', 'renders string attribute');
  t.equal(createElement('span', { 'aria-hidden': true }), '<span aria-hidden="true"></span>', 'renders boolean true attribute');
  t.equal(createElement('span', { 'aria-hidden': false }), '<span aria-hidden="false"></span>', 'renders boolean false attribute');
  t.equal(createElement('img', { height: 80 }), '<img height="80">', 'renders number attribute');
  t.equal(createElement('div', { class: () => 'container' }), '<div class="container"></div>', 'renders function attribute');

  t.equal(createElement('img', { height: null }), '<img>', 'does not render null attribute');
  t.equal(createElement('img', { height: undefined }), '<img>', 'does not render undefined attribute');

  t.end();
});

test('[createElement] renders children', t => {
  t.equal(createElement('h1', undefined, 'spark'), '<h1>spark</h1>', 'renders string child');
  t.equal(createElement('span', undefined, 30), '<span>30</span>', 'renders number child');
  t.equal(createElement('div', undefined, true), '<div>true</div>', 'renders boolean true child');
  t.equal(createElement('div', undefined, false), '<div>false</div>', 'renders boolean false child');
  t.equal(createElement('a', undefined, () => 'link'), '<a>link</a>', 'renders function child');
  t.equal(createElement('p', undefined, createElement('a', undefined, 'link')), '<p><a>link</a></p>', 'renders nested child');
  t.equal(createElement('p', undefined, [
    'read ',
    createElement('a', undefined, 'link')
  ]), '<p>read <a>link</a></p>', 'renders nested children');

  t.equal(createElement('div', undefined, undefined), '<div></div>', 'does not render boolean undefined child');
  t.equal(createElement('div', undefined, null), '<div></div>', 'does not render boolean null child');

  t.end();
});
