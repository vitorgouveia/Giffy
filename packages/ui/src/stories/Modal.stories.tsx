import React from 'react'

import { Modal } from '../components/Modal'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = () => <Modal />

export const Primary = Template.bind({})
Primary.args = {}
