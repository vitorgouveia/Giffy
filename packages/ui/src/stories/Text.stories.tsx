import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text, TextProps } from '../components/Text'
import Documentation from './Text.mdx'

export default {
  title: 'Text',
  component: Text,
  parameters: {
    docs: {
      page: Documentation,
    },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args: TextProps) => (
  <Text {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et turpis nec leo imperdiet varius consequat rutrum dui.
    Duis malesuada, massa vel accumsan tempor, arcu est efficitur arcu, mattis aliquet nulla elit non nisi. Praesent elementum,
    ligula eu congue lacinia, urna neque sodales erat, nec facilisis urna ipsum at ipsum. Nulla mollis convallis nulla.
    Mauris sit amet tincidunt velit, at viverra urna. Mauris imperdiet vel est nec aliquam. Vivamus tincidunt, turpis vitae
  `,
}
