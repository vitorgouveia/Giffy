import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { UIProvider } from '@context/UIContext'

import { Logo } from '../components/Logo'
import { LargeLogo } from '../components/LargeLogo'

export default {
  title: 'Logo',
  component: LargeLogo,
} as ComponentMeta<typeof LargeLogo>

const LargeTemplate: ComponentStory<typeof LargeLogo> = () => (
  <UIProvider
    homepage="/"
    blog={{ tagsPath: '/blog/tags', postsPath: '/blog/posts' }}
  >
    <LargeLogo />
  </UIProvider>
)
const SmallTemplate: ComponentStory<typeof Logo> = () => <Logo />

export const Small = SmallTemplate.bind({})
Small.args = {}

export const Large = LargeTemplate.bind({})
Large.args = {}
