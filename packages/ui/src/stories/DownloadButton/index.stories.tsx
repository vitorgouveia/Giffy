import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  DownloadButton,
  DownloadButtonProps,
} from '../../components/DownloadButton'
import Documentation from './index.mdx'

export default {
  title: 'Download-button',
  component: DownloadButton,
  parameters: {
    docs: {
      page: Documentation,
    },
  },
} as ComponentMeta<typeof DownloadButton>

const Template: ComponentStory<typeof DownloadButton> = (
  args: DownloadButtonProps
) => <DownloadButton {...args} />

export const AppStore = Template.bind({})
AppStore.args = {
  store: 'App Store',
  onClick: () => {
    console.log('Go to app store')
  },
} as DownloadButtonProps

export const GooglePlay = Template.bind({})
GooglePlay.args = {
  store: 'Google Play',
  onClick: () => {
    console.log('Go to google play')
  },
} as DownloadButtonProps
