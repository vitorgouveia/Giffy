import { themes } from '@storybook/theming'

import '@giffy/styles/dist/build.css'

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
