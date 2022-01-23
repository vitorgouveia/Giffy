import React from 'react'

import { Heading, HeadingProps } from '../components/Heading'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args: HeadingProps) => (
  <Heading {...args} />
)

export const Heading1 = Template.bind({})
Heading1.args = {
  label: 'Giffy',
  variant: 'h1',
  as: 'h1',
}

export const Heading2 = Template.bind({})
Heading2.args = {
  label: 'Giffy',
  variant: 'h2',
  as: 'h2',
}

export const Heading3 = Template.bind({})
Heading3.args = {
  label: 'Giffy',
  variant: 'h3',
  as: 'h3',
}
