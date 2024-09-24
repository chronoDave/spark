import test from 'tape';

import * as spark from './spark';

test('[jsx] renders element', t => {
  t.equal(<p></p>, '<p></p>', 'HTML element');
  t.equal(<img />, '<img>', 'HTML void element');

  t.end();
});

test('[jsx] renders attributes', t => {
  t.equal(<p class="body"></p>, '<p class="body"></p>', 'renders string attribute');
  t.equal(<span disabled></span>, '<span disabled="true"></span>', 'expands typeless attribute');
  t.equal(<span aria-hidden={true}></span>, '<span aria-hidden="true"></span>', 'renders boolean true attribute');
  t.equal(<span aria-hidden={false}></span>, '<span aria-hidden="false"></span>', 'renders boolean false attribute');
  t.equal(<img height={80} />, '<img height="80">', 'renders number attribute');
  t.equal(<div class={() => 'container'}></div>, '<div class="container"></div>', 'renders function attribute');

  t.equal(<img height={undefined} />, '<img>', 'does not render undefined attribute');
  t.equal(<img disabled={null} />, '<img>', 'does not render null attribute');

  t.end();
});

test('[jsx] renders children', t => {
  t.equal(<h1>spark</h1>, '<h1>spark</h1>', 'renders string child');
  t.equal(<span>{30}</span>, '<span>30</span>', 'renders number child');
  t.equal(<a>{() => 'link'}</a>, '<a>link</a>', 'renders function child');
  t.equal(<div>{true}</div>, '<div>true</div>', 'renderr boolean true child');
  t.equal(<a>{[{}].map(() => <span></span>)}</a>, '<a><span></span></a>', 'renders mapped array child');
  t.equal(<p>{[<span class='icon'></span>, 'body']}</p>, '<p><span class="icon"></span>body</p>', 'renders array children');
  t.equal(<dl>{[{}, {}].map(() => [<dt></dt>, [<dd></dd>]])}</dl>, '<dl><dt></dt><dd></dd><dt></dt><dd></dd></dl>', 'renders recursive children');
  t.equal(<p><a>link</a></p>, '<p><a>link</a></p>', 'renders nested child');
  t.equal(<p>read <a>link</a></p>, '<p>read <a>link</a></p>', 'renders nested children');
  
  t.equal(<div>{false}</div>, '<div></div>', 'does not render boolean false child');
  t.equal(<div>{undefined}</div>, '<div></div>', 'does not render undefined child');
  t.equal(<div>{null}</div>, '<div></div>', 'does not render null child');

  t.end();
});

test('[jsx] renders components', t => {
  const Template: spark.Component = props => <div>{props.children}</div>;

  t.equal(<Template><p></p></Template>, '<div><p></p></div>', 'renders component');

  t.end();
});

test('[jsx] renders component props', t => {
  const Heading: spark.Component<{ title: string }> = props => <h1>{props.title}</h1>;

  t.equal(<Heading title="title" />, '<h1>title</h1>', 'renders component props');

  t.end();
});
