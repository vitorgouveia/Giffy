import { themes } from '@storybook/theming'

const __prod__ = process.env.NODE_ENV === 'production'
require(__prod__ ? '@giffy/styles' : '@giffy/styles/dist/build.css')

export const parameters = {
  docs: {
    theme: themes.dark,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
