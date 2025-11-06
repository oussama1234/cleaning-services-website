/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for cPanel
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
