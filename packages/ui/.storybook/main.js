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

    return config
  },
}
