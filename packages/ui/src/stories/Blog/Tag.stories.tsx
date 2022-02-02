import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { UIProvider } from '@context/UIContext'

import { Tag, TagProps } from '../../components/Blog/Tag'

export default {
  title: 'Blog/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args: TagProps) => (
  <UIProvider
    prefix="giffy_css"
    homepage="/blog"
    blog={{ tagsPath: '/blog/tags', postsPath: '/blog/posts' }}
  >
    <Tag {...args} />
  </UIProvider>
)

export const Default = Template.bind({})
Default.args = {
  label: 'javascript',
}
