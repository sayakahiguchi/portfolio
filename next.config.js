/** @type {import('next').NextConfig} */

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  images: {
    disableStaticImages: true,
  },
}

module.exports = nextConfig
