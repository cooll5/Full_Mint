const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = function override(config, env) {
  // Initialize config.plugins as an array if it's undefined
  config.plugins = config.plugins || [];

  // Add NodePolyfillPlugin to the plugins array
  if (Array.isArray(config.plugins)) {
    config.plugins.push(new NodePolyfillPlugin());
  }

  return config;
};
