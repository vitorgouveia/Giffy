import React from 'react'

import { Link, LinkProps } from '../components/Link'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Link',
  component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args: LinkProps) => (
  <Link {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Giffy',
}

export const Visited = Template.bind({})
Visited.args = {
  label: 'Giffy',
  visited: true,
}
