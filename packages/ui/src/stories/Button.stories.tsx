import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FiGithub } from 'react-icons/fi'

import { Button, ButtonProps } from '../components/Button'

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

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Giffy',
  disabled: true,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  label: 'Giffy',
  icon: <FiGithub />,
  iconPosition: 'left',
}
