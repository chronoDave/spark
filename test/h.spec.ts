import test from 'tape';

import h from '../src/h';

test('[h] creates vnode', t => {
  const vnode = h('div');

  t.equal(vnode.tag, 'div', 'has tag');
  t.equal(vnode.selector, 'div', 'has selector');
  t.true(Array.isArray(vnode.children), 'has children');
  t.equal(vnode.children.length, 0, 'children is empty');

  t.end();
});

test('[h] creates children', t => {
  const vnode = h('div', {}, [h('p'), h('a')]);

  t.equal(vnode.children.length, 2, 'has children');
  t.equal(vnode.children[0].tag, 'p', 'creates child vnode');
  t.equal(vnode.children[1].selector, 'div>a', 'creates child selector');

  t.end();
});

test('[h] creates smart selector', t => {
  t.equal(
    h('div', { id: 'test', classes: ['smart'] }).selector,
    '#test',
    'creates id selector'
  );
  t.equal(
    h('div', { classes: ['smart'] }).selector,
    'div.smart',
    'creates class selector'
  );
  t.equal(
    h('div', { id: 'smart' }, [h('p', { classes: ['test'] })]).children[0].selector,
    '#smart>p.test',
    'creates child selector'
  );

  t.end();
});
