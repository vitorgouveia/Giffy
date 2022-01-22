import React from 'react'

import { Input, InputProps } from '../components/Input'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args: InputProps) => (
  <Input {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  id: 'someId',
  disabled: false,
  placeholder: 'Search Anything...',
}
