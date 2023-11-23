// module.exports = {
//   testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
//   transform: {
//     '^.+\\.(ts|js|html)$': 'jest-preset-angular/preprocessor.js'
//   },
//   // transformIgnorePatterns: ['node_modules/(?!lodash-es/*|@angular/common/locales/*)'],
//   transformIgnorePatterns: ["node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"],
//   resolver: '@nrwl/builders/plugins/jest/resolver',
//   moduleFileExtensions: ['ts', 'js', 'html'],
//   coverageReporters: ['json', 'html', 'cobertura', 'text-summary']
// };

module.exports = {
  preset: "jest-expo",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      transformerConfig: {
        transformIgnorePatterns: [
          "<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)",
          "jest-runner",
        ],
      },
    },
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.maestro/",
    "@react-native",
  ],
  testEnvironment: "react-native",
  setupFiles: ["<rootDir>/test/setup.ts"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup-after-env.js"],
};