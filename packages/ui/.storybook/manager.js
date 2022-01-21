import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'
import { configure, addDecorator } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

addDecorator(centered)

addons.setConfig({
  theme: themes.dark,
})

configure(require.context('../src/stories', true, /\.stories\.tsx$/), module)
