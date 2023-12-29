/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  experimental: {
    serverActions: {
      bodySizeLimit: '7mb',
    },
  },
}

module.exports = nextConfig
