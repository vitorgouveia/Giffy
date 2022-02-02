const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-viewport',
    '@storybook/addon-actions',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.tsx$/,
      exclude: /node_modules/,

      use: [
        {
          loader: 'react-classname-prefix-loader?prefix=giffy_css',
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/,
      exclude: /node_modules/,
      loader: 'svg-inline-loader',
    })

    config.resolve.plugins.push(new TsconfigPathsPlugin())

    return config
  },
}
