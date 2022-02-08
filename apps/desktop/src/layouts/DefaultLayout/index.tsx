import React from 'react'

import { LeftSidebar } from '@components/LeftSidebar'
import { RightSidebar } from '@components/RightSidebar'
import { Header } from '@components/Header'
import { Viewer } from '@components/Viewer'
import { Footer } from '@components/Footer'

import { SceneList } from '@screens/SceneList'
import { ScreensList } from '@screens/ScreensList'
import { SceneStatus } from '@screens/SceneStatus'
import { Editor } from '@screens/Editor'
import { Toolbar } from '@screens/Toolbar'

import { Layout } from './styles'

type DefaultLayoutProps = {
  leftSidebar?: React.ReactNode
  rightSidebar?: React.ReactNode
  header?: React.ReactNode
  viewer?: React.ReactNode
  footer?: React.ReactNode
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  leftSidebar = <SceneList />,
  rightSidebar = <ScreensList />,
  header = <SceneStatus />,
  viewer = <Editor />,
  footer = <Toolbar />,
}) => {
  return (
    <Layout>
      <LeftSidebar>{leftSidebar}</LeftSidebar>

      <Header>{header}</Header>

      <Viewer>{viewer}</Viewer>

      <Footer>{footer}</Footer>

      <RightSidebar>{rightSidebar}</RightSidebar>
    </Layout>
  )
}
