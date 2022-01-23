import React from 'react'
import { FiMail, FiLock } from 'react-icons/fi'

import { Input, InputProps } from '../components/Input'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args: InputProps) => (
  <Input {...args} />
)

export const SearchInput = Template.bind({})
SearchInput.args = {
  id: 'someId',
  disabled: false,
  iconPosition: 'right',
  placeholder: 'Search Anything...',
}

export const EmailInput = Template.bind({})
EmailInput.args = {
  id: 'someId',
  disabled: false,
  icon: FiMail,
  type: 'email',
  placeholder: 'E-mail',
  iconPosition: 'left',
}

export const PasswordInput = Template.bind({})
PasswordInput.args = {
  id: 'someId',
  disabled: false,
  icon: FiLock,
  type: 'passport',
  placeholder: 'Password',
  iconPosition: 'left',
}

export const Disabled = Template.bind({})
Disabled.args = {
  id: 'someId',
  disabled: true,
  placeholder: 'Pesquise...',
}
