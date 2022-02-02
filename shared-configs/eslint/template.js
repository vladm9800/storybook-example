module.exports = {
  root: false,
  parser: '@angular-eslint/template-parser',
  plugins: ['@angular-eslint/template'],
  rules: {
    '@angular-eslint/template/accessibility-table-scope': 'error',
    '@angular-eslint/template/banana-in-box': 'error',
    '@angular-eslint/template/conditional-complexity': ['error', { maxComplexity: 4 }],
    '@angular-eslint/template/cyclomatic-complexity': ['error', { maxComplexity: 10 }],
    '@angular-eslint/template/eqeqeq': 'error',
    '@angular-eslint/template/no-duplicate-attributes': 'error',
    '@angular-eslint/template/no-negated-async': 'error',
    '@angular-eslint/template/accessibility-alt-text': 'warn',
    '@angular-eslint/template/accessibility-elements-content': 'warn',
    '@angular-eslint/template/accessibility-label-has-associated-control': 'warn',
    'max-len': ['error', { 'code': 120 }],
  },
};
