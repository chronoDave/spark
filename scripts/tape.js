const fs = require('fs');
const path = require('path');

const { build } = require('esbuild');
const glob = require('fast-glob');

const outdir = path.resolve(__dirname, '../build');

build({
  entryPoints: glob.sync('../test/**/*.spec.ts', {
    cwd: __dirname,
    absolute: true
  }),
  bundle: true,
  external: [
    'tape',
    'jsdom'
  ],
  platform: 'node',
  outdir,
  plugins: [{
    name: 'clean',
    setup: () => {
      fs.rmSync(outdir, { force: true, recursive: true });
    }
  }]
});
