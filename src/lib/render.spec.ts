import test from 'node:test';

import { attributes, children } from './render.ts';

test('[render.attributes] renders attributes', t => {
  t.assert.equal(attributes({ class: 'body' }), ' class="body"', 'string');
  t.assert.equal(attributes({ 'aria-hidden': true }), ' aria-hidden', 'boolean true');
  t.assert.equal(attributes({ height: 80 }), ' height="80"', 'number');
  t.assert.equal(attributes({ width: 32, height: 32 }), ' width="32" height="32"', 'spaces between attributes');
  t.assert.equal(attributes({ 'aria-label': 'This is a "button"' }), ' aria-label="This is a &quot;button&quot;"', 'escapes HTML characters');

  t.assert.equal(attributes({ 'aria-hidden': false }), '', 'does not render boolean false');
  t.assert.equal(attributes({ e: null }), '', 'does not render null');
  t.assert.equal(attributes({ height: undefined }), '', 'does not render undefined');
});

test('[render.children] renders children', t => {
  t.assert.equal(children('spark'), 'spark', 'string');
  t.assert.equal(children(30), '30', 'number');
  t.assert.equal(children([[1], [2], [3]]), '123', 'array');
  t.assert.equal(children(1, '2', [3]), '123', 'mixed');

  t.assert.equal(children(true), '', 'does not render boolean true');
  t.assert.equal(children(false), '', 'does not render boolean false');
  t.assert.equal(children(undefined), '', 'does not render undefined');
  t.assert.equal(children(null), '', 'does not render null');
});
