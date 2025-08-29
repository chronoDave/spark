import config from '@chronocide/eslint-config';

export default [...config({
  ts: true,
  node: true
}), {
  files: ['src/jsx.ts'],
  rules: {
    '@typescript-eslint/no-namespace': 'off'
  }
}];
