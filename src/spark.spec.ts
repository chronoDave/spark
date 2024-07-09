import test from 'tape';

import { createElement } from './spark';

test('[spark] renders element', t => {
  t.equal(createElement('p', {}), '<p></p>', 'HTML element');
  t.equal(createElement('img', {}), '<img>', 'HTML void element');

  t.end();
});

test('[spark] renders attributes', t => {
  t.equal(createElement('p', { class: 'body' }), '<p class="body"></p>', 'renders string attribute');
  t.equal(createElement('span', { 'aria-hidden': true }), '<span aria-hidden="true"></span>', 'renders boolean true attribute');
  t.equal(createElement('span', { 'aria-hidden': false }), '<span aria-hidden="false"></span>', 'renders boolean false attribute');
  t.equal(createElement('img', { height: 80 }), '<img height="80">', 'renders number attribute');
  t.equal(createElement('div', { class: () => 'container' }), '<div class="container"></div>', 'renders function attribute');

  t.equal(createElement('img', { height: null }), '<img>', 'does not render null attribute');
  t.equal(createElement('img', { height: undefined }), '<img>', 'does not render undefined attribute');

  t.end();
});

test('[spark] renders children', t => {
  t.equal(createElement('h1', {}, 'spark'), '<h1>spark</h1>', 'renders string child');
  t.equal(createElement('span', {}, 30), '<span>30</span>', 'renders number child');
  t.equal(createElement('div', {}, true), '<div>true</div>', 'renders boolean true child');
  t.equal(createElement('div', {}, false), '<div>false</div>', 'renders boolean false child');
  t.equal(createElement('a', {}, () => 'link'), '<a>link</a>', 'renders function child');
  t.equal(createElement('p', {}, createElement('a', {}, 'link')), '<p><a>link</a></p>', 'renders nested child');
  t.equal(createElement('p', {}, [
    'read ',
    createElement('a', {}, 'link')
  ]), '<p>read <a>link</a></p>', 'renders nested children');

  t.end();
});
