import { themes } from '@storybook/theming'

import '@giffy/styles'

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
