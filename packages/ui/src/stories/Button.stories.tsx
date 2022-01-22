import React from 'react'

import { Button, ButtonProps } from '../components/Button'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Giffy',
}

export const Outlined = Template.bind({})
Outlined.args = {
  label: 'Giffy',
  variant: 'outlined',
}

export const Ghost = Template.bind({})
Ghost.args = {
  label: 'Giffy',
  variant: 'ghost',
}
