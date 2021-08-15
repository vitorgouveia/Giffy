import React from 'react'

import Header from './Header'
import { Container, Content } from './styles'

const screen: React.FC = () => {
  return (
    <Container>
      <Header title="Giffy" />
      <Content>
        <h1>helloooo</h1>
      </Content>
    </Container>
  )
}

export default screen
