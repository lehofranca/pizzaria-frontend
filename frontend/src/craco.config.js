module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        stream: require.resolve("stream-browserify"),
        util: require.resolve("util/"),
        zlib: require.resolve("browserify-zlib"),
        crypto: require.resolve("crypto-browserify"),
        assert: require.resolve("assert/"),
        url: require.resolve("url/"),
      };
      return webpackConfig;
    },
  },
};
// This configuration file is used to modify the Webpack configuration in a Create React App project.
// It adds fallbacks for various Node.js core modules to ensure compatibility with browser environments.