module.exports = {
  root: false,
  plugins: ['@angular-eslint', 'ngrx', 'rxjs'],
  extends: [
    'plugin:rxjs/recommended',
    'plugin:ngrx/recommended',
    'plugin:@angular-eslint/recommended',
    'plugin:@angular-eslint/template/process-inline-templates',
  ],
  rules: {
    '@angular-eslint/contextual-decorator': 'error',
    '@angular-eslint/relative-url-prefix': 'error',
    '@angular-eslint/sort-ngmodule-metadata-arrays': 'error',
    '@angular-eslint/use-component-selector': 'error',
    '@angular-eslint/use-injectable-provided-in': 'error',
    '@angular-eslint/directive-selector': [
      'error',
      {
        type: 'attribute',
        prefix: 'my',
        style: 'camelCase',
      },
    ],
    '@angular-eslint/component-selector': [
      'error',
      {
        type: 'element',
        prefix: 'my',
        style: 'kebab-case',
      },
    ],
    '@angular-eslint/no-lifecycle-call': 'warn',
    '@angular-eslint/no-pipe-impure': 'warn',
    '@angular-eslint/prefer-on-push-component-change-detection': 'warn',
    '@angular-eslint/use-component-view-encapsulation': 'warn',
    'ngrx/no-store-subscription': 'off',
    'ngrx/on-function-explicit-return-type': 'off',
    'ngrx/prefix-selectors-with-select': 'off',
  },
  overrides: [
    {
      files: ['**/*.effects.ts'],
      rules: {
        '@angular-eslint/use-injectable-provided-in': 'off',
      },
    },
  ],
};
