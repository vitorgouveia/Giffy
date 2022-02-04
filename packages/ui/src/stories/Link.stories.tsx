import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { UIProvider } from '@context/UIContext'

import { Link, LinkProps } from '../components/Link'

export default {
  title: 'Link',
  component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args: LinkProps) => (
  <UIProvider
    homepage="/"
    blog={{ tagsPath: '/blog/tags', postsPath: '/blog/posts' }}
  >
    <Link {...args} />
  </UIProvider>
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Giffy',
  href: '/dsadada',
} as LinkProps

export const Visited = Template.bind({})
Visited.args = {
  label: 'Giffy',
  visited: true,
  href: '/blog',
} as LinkProps
