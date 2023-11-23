module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular/preprocessor.js'
  },
  // transformIgnorePatterns: ['node_modules/(?!lodash-es/*|@angular/common/locales/*)'],
  transformIgnorePatterns: ["node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"],
  resolver: '@nrwl/builders/plugins/jest/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['json', 'html', 'cobertura', 'text-summary']
};