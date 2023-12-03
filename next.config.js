/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '7mb',
    },
  },
}

module.exports = nextConfig
