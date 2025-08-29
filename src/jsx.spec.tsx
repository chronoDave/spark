import test from 'node:test';

import * as spark from './jsx.ts';

test('[jsx] renders element', t => {
  t.assert.equal(<p></p>, '<p></p>', 'HTML element');
  t.assert.equal(<img />, '<img>', 'HTML void element');
});

test('[jsx] renders attributes', t => {
  t.assert.equal(<p class="body"></p>, '<p class="body"></p>', 'renders string attribute');
  t.assert.equal(<span disabled></span>, '<span disabled="true"></span>', 'expands typeless attribute');
  t.assert.equal(<span aria-hidden={true}></span>, '<span aria-hidden="true"></span>', 'renders boolean true attribute');
  t.assert.equal(<span aria-hidden={false}></span>, '<span aria-hidden="false"></span>', 'renders boolean false attribute');
  t.assert.equal(<img height={80} />, '<img height="80">', 'renders number attribute');
  t.assert.equal(<button aria-label='This is a "button"' />, '<button aria-label="This is a &quot;button&quot;"></button>', 'escapes HTML characters');

  t.assert.equal(<img height={undefined} />, '<img>', 'does not render undefined attribute');
  t.assert.equal(<img disabled={null} />, '<img>', 'does not render null attribute');
});

test('[jsx] renders children', t => {
  t.assert.equal(<h1>spark</h1>, '<h1>spark</h1>', 'renders string child');
  t.assert.equal(<span>{30}</span>, '<span>30</span>', 'renders number child');
  t.assert.equal(<div>{true}</div>, '<div>true</div>', 'renderr boolean true child');
  t.assert.equal(<a>{[{}].map(() => <span></span>)}</a>, '<a><span></span></a>', 'renders mapped array child');
  t.assert.equal(<p>{[<span class='icon'></span>, 'body']}</p>, '<p><span class="icon"></span>body</p>', 'renders array children');
  t.assert.equal(<dl>{[{}, {}].map(() => [<dt></dt>, [<dd></dd>]])}</dl>, '<dl><dt></dt><dd></dd><dt></dt><dd></dd></dl>', 'renders recursive children');
  t.assert.equal(<p><a>link</a></p>, '<p><a>link</a></p>', 'renders nested child');
  t.assert.equal(<p>read <a>link</a></p>, '<p>read <a>link</a></p>', 'renders nested children');
  
  t.assert.equal(<div>{false}</div>, '<div></div>', 'does not render boolean false child');
  t.assert.equal(<div>{undefined}</div>, '<div></div>', 'does not render undefined child');
  t.assert.equal(<div>{null}</div>, '<div></div>', 'does not render null child');
});
