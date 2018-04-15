module.exports = {
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.js?$': 'babel-jest',
  },
  setupFiles: [
    'raf/polyfill',
    './src/test-setup.js',
  ],
  modulePaths: ['src'],
  verbose: true,
  collectCoverageFrom: [
    'src/**/*.js',
  ],
};
