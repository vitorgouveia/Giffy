import React from 'react'

import { Divider } from '../components/Divider'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = () => <Divider />

export const Primary = Template.bind({})
Primary.args = {}
