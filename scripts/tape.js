import fsp from 'fs/promises';
import path from 'path';
import esbuild from 'esbuild';

const outdir = path.resolve(process.cwd(), 'build');

await fsp.rm(outdir, { force: true, recursive: true });

esbuild.build({
  entryPoints: ['src/**/*.spec.ts', 'src/**/*.spec.tsx'],
  bundle: true,
  external: ['tape', 'json'],
  platform: 'node',
  format: 'esm',
  outdir
});

