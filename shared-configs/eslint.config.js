module.exports = {
  root: false,
  ignorePatterns: ['/node_modules', '/dist', 'karma.conf.js', 'src/polyfills.ts'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'max-len': ['error', { 'code': 120 }],
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['tsconfig.json'],
      },
      extends: [
        './eslint/javascript',
        './eslint/angular',
        './eslint/typescript',
        'plugin:prettier/recommended',
      ],
    },
    {
      files: ['*.js'],
      extends: [
        './eslint/javascript',
        'plugin:prettier/recommended',
      ],
    },
    {
      files: ['*.spec.ts'],
      plugins: ['jasmine'],
      env: {
        jasmine: true,
      },
      extends: [
        './eslint/javascript',
        './eslint/angular',
        './eslint/typescript',
        'plugin:jasmine/recommended',
      ],
    },
    {
      files: ['*.html'],
      extends: ['./eslint/template'],
    },
  ],
};
