import React from 'react'

import { Logo } from '../components/Logo'
import { LargeLogo } from '../components/LargeLogo'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Logo',
  component: LargeLogo,
} as ComponentMeta<typeof LargeLogo>

const LargeTemplate: ComponentStory<typeof LargeLogo> = () => <LargeLogo />
const SmallTemplate: ComponentStory<typeof Logo> = () => <Logo />

export const Small = SmallTemplate.bind({})
Small.args = {}

export const Large = LargeTemplate.bind({})
Large.args = {}
