const Plugins = require('next-compose-plugins')

const __isGithub__ = process.env.GH_PAGES === 'true'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  cleanDistDir: true,
  optimizeFonts: true,

  pageExtensions: ['tsx', 'mdx'],

  basePath: __isGithub__ ? '/Giffy' : '',
  assetPrefix: __isGithub__ ? '/Giffy/' : '',

  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {
    styledComponents: true,
  },

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

module.exports = Plugins([], nextConfig)
