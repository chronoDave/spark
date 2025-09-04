import test from 'node:test';

import h, { xml } from './spark.ts';

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

test('[spark.xml] renders element', t => {
  t.assert.equal(xml('name')({})('spark'), '<name>spark</name>', 'XML element');
  t.assert.equal(xml('link')({})(), '<link/>', 'XML self-closing element');
});

test('[spark.xml] renders attributes', t => {
  t.assert.equal(xml('name')({ class: 'body' })(), '<name class="body"/>', 'renders string attribute');
  t.assert.equal(xml('name')({ 'aria-hidden': true })(), '<name aria-hidden="true"/>', 'renders boolean true attribute');
  t.assert.equal(xml('name')({ 'aria-hidden': false })(), '<name aria-hidden="false"/>', 'renders boolean false attribute');
  t.assert.equal(xml('link')({ height: 80 })(), '<link height="80"/>', 'renders number attribute');
  t.assert.equal(xml('link')({ width: 32, height: 32 })(), '<link width="32" height="32"/>', 'render spaces between attributes');
  t.assert.equal(xml('name')({ 'aria-label': 'This is a "button"' })(), '<name aria-label="This is a &quot;button&quot;"/>', 'escapes HTML characters');

  t.assert.equal(xml('link')({ height: null })(), '<link/>', 'does not render null attribute');
  t.assert.equal(xml('link')({ height: undefined })(), '<link/>', 'does not render undefined attribute');
});

test('[spark.xml] renders children', t => {
  t.assert.equal(xml('name')({})('spark'), '<name>spark</name>', 'renders string child');
  t.assert.equal(xml('name')({})(30), '<name>30</name>', 'renders number child');
  t.assert.equal(xml('name')({})(true), '<name>true</name>', 'renders boolean true child');
  t.assert.equal(xml('name')({})(xml('id')({})('link')), '<name><id>link</id></name>', 'renders nested child');
  t.assert.equal(xml('name')({})(['read ', xml('id')({})('link')]), '<name>read <id>link</id></name>', 'renders nested children');
  t.assert.equal(
    xml('entries')({})([{}].map(() => [
      xml('id')({})(),
      [xml('title')({})()]
    ])),
    '<entries><id/><title/></entries>',
    'renders recursive children'
  );

  t.assert.equal(xml('name')({})(false), '<name/>', 'does not render boolean false child');
  t.assert.equal(xml('name')({})(undefined), '<name/>', 'does not render undefined child');
});
