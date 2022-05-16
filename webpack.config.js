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
      use: ['@svgr/webpack'],
    });
    return config;
  },
}