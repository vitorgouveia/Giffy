import React from 'react'

import { Footer, FooterProps } from '../../components/Blog/Footer'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Blog/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args: FooterProps) => (
  <Footer {...args} homepage="/blog" />
)

export const Default = Template.bind({})
Default.args = {}
