import React, { useState } from 'react'

import { Header, HeaderProps } from '../../components/Blog/Header'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Blog/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args: HeaderProps) => (
  <Header
    {...args}
    homepage="/blog"
    handleToggle={current => !current}
    tabs={[
      {
        href: '/announcements',
        label: 'Announcements',
      },
      {
        href: '/case-studies',
        label: 'Case Studies',
      },
      {
        href: '/author',
        label: 'Author',
      },
    ]}
  />
)

export const Default = Template.bind({})
Default.args = {
  toggle: true,
}

export const False = Template.bind({})
False.args = {
  toggle: false,
}
