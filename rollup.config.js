import fsp from 'fs/promises';
import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';

await fsp.rm('dist', { recursive: true, force: true });

export default [{
  input: 'src/spark.ts',
  plugins: [esbuild({ target: 'esnext' })],
  output: [{
    file: 'dist/spark.js',
    format: 'es'
  }]
}, {
  input: 'src/jsx.ts',
  plugins: [esbuild({ target: 'esnext' })],
  output: {
    file: 'dist/spark-jsx.js',
    format: 'es'
  }
}, {
  input: 'src/spark.ts',
  plugins: [dts()],
  output: {
    file: 'dist/spark.d.ts',
    format: 'es'
  }
}, {
  input: 'src/jsx.ts',
  plugins: [dts()],
  output: {
    file: 'dist/spark-jsx.d.ts',
    format: 'es'
  }
}];
