import React from 'react'

import { Newsletter, NewsletterProps } from '../components/Newsletter'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Blog/Newsletter',
  component: Newsletter,
} as ComponentMeta<typeof Newsletter>

const Template: ComponentStory<typeof Newsletter> = (args: NewsletterProps) => (
  <Newsletter {...args} />
)

export const Default = Template.bind({})
Default.args = {}
