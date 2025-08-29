import test from 'node:test';

import h from './spark.ts';

test('[spark] renders element', t => {
  t.assert.equal(h('p')({})(), '<p></p>', 'HTML element');
  t.assert.equal(h('img')({})(), '<img>', 'HTML void element');
});

test('[spark] renders attributes', t => {
  t.assert.equal(h('p')({ class: 'body' })(), '<p class="body"></p>', 'renders string attribute');
  t.assert.equal(h('span')({ 'aria-hidden': true })(), '<span aria-hidden="true"></span>', 'renders boolean true attribute');
  t.assert.equal(h('span')({ 'aria-hidden': false })(), '<span aria-hidden="false"></span>', 'renders boolean false attribute');
  t.assert.equal(h('img')({ height: 80 })(), '<img height="80">', 'renders number attribute');
  t.assert.equal(h('img')({ width: 32, height: 32 })(), '<img width="32" height="32">', 'render spaces between attributes');
  t.assert.equal(h('button')({ 'aria-label': 'This is a "button"' })(), '<button aria-label="This is a &quot;button&quot;"></button>', 'escapes HTML characters');

  t.assert.equal(h('img')({ height: null })(), '<img>', 'does not render null attribute');
  t.assert.equal(h('img')({ height: undefined })(), '<img>', 'does not render undefined attribute');
});

test('[spark] renders children', t => {
  t.assert.equal(h('h1')({})('spark'), '<h1>spark</h1>', 'renders string child');
  t.assert.equal(h('span')({})(30), '<span>30</span>', 'renders number child');
  t.assert.equal(h('div')({})(true), '<div>true</div>', 'renders boolean true child');
  t.assert.equal(h('p')({})(h('a')({})('link')), '<p><a>link</a></p>', 'renders nested child');
  t.assert.equal(h('p')({})(['read ', h('a')({})('link')]), '<p>read <a>link</a></p>', 'renders nested children');
  t.assert.equal(
    h('dl')({})([{}].map(() => [
      h('dt')({})(),
      [h('dd')({})()]
    ])),
    '<dl><dt></dt><dd></dd></dl>',
    'renders recursive children'
  );

  t.assert.equal(h('div')({})(false), '<div></div>', 'does not render boolean false child');
  t.assert.equal(h('div')({})(undefined), '<div></div>', 'does not render undefined child');
});
