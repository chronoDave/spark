import test from 'tape';

import * as spark from './spark';

test('[jsx] renders element', t => {
  t.equal(<p></p>, '<p></p>', 'HTML element');
  t.equal(<img />, '<img>', 'HTML void element');

  t.end();
});

test('[jsx] renders attributes', t => {
  t.equal(<p class="body"></p>, '<p class="body"></p>', 'renders string attribute');
  t.equal(<span aria-hidden={true}></span>, '<span aria-hidden="true"></span>', 'renders boolean true attribute');
  t.equal(<span aria-hidden={false}></span>, '<span aria-hidden="false"></span>', 'renders boolean false attribute');
  t.equal(<img height={80} />, '<img height="80">', 'renders number attribute');
  t.equal(<div class={() => 'container'}></div>, '<div class="container"></div>', 'renders function attribute');

  t.equal(<img height={undefined} />, '<img>', 'does not render undefined attribute');

  t.end();
});

test('[jsx] renders children', t => {
  t.equal(<h1>spark</h1>, '<h1>spark</h1>', 'renders string child');
  t.equal(<span>{30}</span>, '<span>30</span>', 'renders number child');
  t.equal(<div>{true}</div>, '<div>true</div>', 'renders boolean true child');
  t.equal(<div>{false}</div>, '<div>false</div>', 'renders boolean false child');
  t.equal(<a>{() => 'link'}</a>, '<a>link</a>', 'renders function child');
  t.equal(<p><a>link</a></p>, '<p><a>link</a></p>', 'renders nested child');
  t.equal(<p>read <a>link</a></p>, '<p>read <a>link</a></p>', 'renders nested children');
  t.equal(<p>{[<span class='icon'></span>, 'body']}</p>, '<p><span class="icon"></span>body</p>', 'renders array children');

  t.equal(<div>{undefined}</div>, '<div></div>', 'does not render boolean undefined child');
  t.equal(<div>{null}</div>, '<div></div>', 'does not render boolean null child');

  t.end();
});
