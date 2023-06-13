// Import the function to be tested
const overrideConfig = require('../config-overrides');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

test('should add NodePolyfillPlugin to webpack config plugins', () => {
  // Mock the webpack config and environment variables
  const webpackConfig = {};
  const env = {};

  // Call the overrideConfig function
  const modifiedConfig = overrideConfig(webpackConfig, env);

  // Assert that NodePolyfillPlugin was added to the plugins array
  expect(modifiedConfig.plugins[0]).toBeInstanceOf(NodePolyfillPlugin);
});
