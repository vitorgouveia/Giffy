import React from 'react'

import { Tag, TagProps } from '../../components/Blog/Tag'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Blog/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args: TagProps) => (
  <Tag {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'javascript',
}
