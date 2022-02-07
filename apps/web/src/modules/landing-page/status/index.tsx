import React from 'react'

import { Heading, Link } from '@giffy/ui'
import { Container, HighlightedHeading } from './styles'

export const Status: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <Heading variant="h2" as="h2">
          Has Giffy been released?
        </Heading>

        <Heading variant="h2" as="h2">
          <HighlightedHeading>Not yet.</HighlightedHeading>
        </Heading>

        <Link href="/">Go to Homepage</Link>
      </Container>
    </React.Fragment>
  )
}
