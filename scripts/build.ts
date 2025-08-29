import esbuild from 'esbuild';
import fsp from 'fs/promises';
import path from 'path';

const outdir = 'build';

await fsp.rm(path.join(process.cwd(), outdir), { force: true, recursive: true });
esbuild.build({
  entryPoints: ['src/**/*.spec.tsx'],
  outdir: 'build',
  bundle: true,
  format: 'esm',
  platform: 'node'
});
