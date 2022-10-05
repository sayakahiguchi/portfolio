const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['placehold.jp'],
    disableStaticImages: true,
  },
  poweredByHeader: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: {
        loader: '@svgr/webpack',
        options: {
          titleProp: true,
          titleId: 'filePath'
        }
      },
    })
    return config
  }
}

module.exports = withVanillaExtract(nextConfig);