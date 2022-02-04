import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { UIProvider } from '@context/UIContext'

import { Post, PostProps } from '../../../components/Blog/Post'
import Documentation from './index.mdx'

export default {
  title: 'Blog/Post',
  component: Post,
  parameters: {
    docs: {
      page: Documentation,
    },
  },
} as ComponentMeta<typeof Post>

const Template: ComponentStory<typeof Post> = (args: PostProps) => (
  <UIProvider
    homepage="/blog"
    blog={{ tagsPath: '/blog/tags', postsPath: '/blog/posts' }}
  >
    <Post
      {...args}
      content="my contnet"
      metadata={{
        authors: ['Vitor Neves'],
        createdAt: 1643747451184,
        updatedAt: 1643747451184,
        description: 'My post descriptiob bla bla bla',
        readTime: '10 min',
        slug: 'my-beautiful-post',
        tags: ['tag 1', 'tag 2', 'tag 3', 'tag 4', 'tag 5'],
        thumbnailUrl:
          'https://i.guim.co.uk/img/media/364089a4778d97eac2be1a48913931b6f562e169/920_1562_2138_1282/master/2138.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c6b604fb567ffa5e9f8172a4c82a7ec5',
        title: 'MY first storybook post',
        type: 'storybook, docs',
      }}
    />
  </UIProvider>
)

export const Default = Template.bind({})
Default.args = {} as PostProps

export const Small = Template.bind({})
Small.args = {
  variant: 'small',
} as PostProps

export const Medium = Template.bind({})
Medium.args = {
  variant: 'medium',
} as PostProps

export const Large = Template.bind({})
Large.args = {
  variant: 'large',
} as PostProps
