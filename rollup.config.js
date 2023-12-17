const esbuild = require('rollup-plugin-esbuild').default;
const dts = require('rollup-plugin-dts').default;

const input = 'src/spark.ts';
const output = type => `dist/spark.${type}`;

module.exports = [{
  input,
  plugins: [
    esbuild({
      target: 'esnext'
    })
  ],
  output: [{
    file: output('cjs'),
    exports: 'auto',
    format: 'cjs',
  }, {
    file: output('mjs'),
    exports: 'auto',
    format: 'es'
  }]
}, {
  input,
  plugins: [dts()],
  output: {
    file: output('d.ts'),
    format: 'es'
  }
}];
