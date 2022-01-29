import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Category, CategoryProps } from '../../../components/Blog/Category'
import Documentation from './docs.mdx'

export default {
  title: 'Blog/Category',
  component: Category,
  parameters: {
    docs: {
      page: Documentation,
    },
  },
} as ComponentMeta<typeof Category>

const Template: ComponentStory<typeof Category> = (args: CategoryProps) => (
  <Category {...args} />
)

export const TopCategories = Template.bind({})
TopCategories.args = {
  label: 'Top Categories',
  tags: [
    { label: 'javascript' },
    { label: 'graphql' },
    { label: 'data layer' },
  ],
} as CategoryProps

export const TopPosts = Template.bind({})
TopPosts.args = {
  label: 'Top Posts',
  links: [
    {
      label: 'Post 1',
    },
    {
      label: 'Post 2',
    },
    {
      label: 'Post 3',
    },
    {
      label: 'Post 4',
    },
  ],
} as CategoryProps
