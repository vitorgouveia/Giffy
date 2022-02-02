import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tab, TabProps } from '../components/Tab'

export default {
  title: 'Tab',
  component: Tab,
} as ComponentMeta<typeof Tab>

const Template: ComponentStory<typeof Tab> = (args: TabProps) => (
  <Tab {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'Giffy',
  href: '/my-link',
} as TabProps

export const Underline = Template.bind({})
Underline.args = {
  label: 'Giffy',
  underline: true,
  href: '/my-link',
} as TabProps
