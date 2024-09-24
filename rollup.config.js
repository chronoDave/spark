import fsp from 'fs/promises';
import path from 'path';
import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';

const input = 'src/spark.ts';
const output = type => `dist/spark.${type}`;

await fsp.rm(path.join(process.cwd(), 'dist'), {
  recursive: true,
  force: true
});

export default [{
  input,
  plugins: [
    esbuild({
      target: 'esnext'
    })
  ],
  output: [{
    file: output('cjs'),
    exports: 'auto',
    format: 'cjs'
  }, {
    file: output('js'),
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
