import React from 'react'

import { Container } from '@styles/container'

export const DefaultLayout: React.FC = ({ children }) => (
  <Container style={{ gap: 0 }} isFull={true}>
    {children}
  </Container>
)
