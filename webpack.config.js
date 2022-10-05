const {
  VanillaExtractPlugin
} = require('@vanilla-extract/webpack-plugin');

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      options: {
        titleProp: true,
        titleId: 'filePath'
      },
      use: ['@svgr/webpack', 'url-loader'],
    });
    return config;
  },
  resolve: {
    alias: {
      "@/*": "./src/*",
      "@assets/*": "./src/public/assets/*"
    }
  }
}