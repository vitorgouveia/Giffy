const __isProd__ = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  cleanDistDir: true,
  optimizeFonts: true,
  typescript: {
    ignoreBuildErrors: true,
  },

  basePath: __isProd__ ? '/Giffy' : '',
  assetPrefix: __isProd__ ? '/Giffy/' : '',

  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
}

module.exports = nextConfig
