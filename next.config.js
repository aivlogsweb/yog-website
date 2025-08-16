/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.dexscreener.com'],
  },
  webpack: (config) => {
    // Handle canvas for Three.js
    config.externals = [...config.externals, { canvas: 'canvas' }]
    return config
  },
}

module.exports = nextConfig