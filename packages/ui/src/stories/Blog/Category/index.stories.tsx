import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { UIProvider } from '@context/UIContext'

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
  <UIProvider
    prefix="giffy_css"
    homepage="/blog"
    blog={{ tagsPath: '/blog/tags', postsPath: '/blog/posts' }}
  >
    <Category {...args} />
  </UIProvider>
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
      href: '/post-1',
    },
    {
      label: 'Post 2',
      href: '/post-2',
    },
    {
      label: 'Post 3',
      href: '/post-3',
    },
    {
      label: 'Post 4',
      href: '/post-4',
    },
  ],
} as CategoryProps
