import React, { FC, useEffect, useState } from 'react'

import Header from './Header'
import { History } from './History'
import { RecordArea } from './Main'
import { Container, Content } from './styles'
import { Tutorial } from './Tutorial'

const Screen: FC = () => {
  const [isFirstUser, setIsFirstUser] = useState(false)

  useEffect(() => {
    const hasTakenTour = localStorage.getItem('tookTutorial') === 'true'

    if (hasTakenTour) {
      setIsFirstUser(false)
    } else {
      localStorage.setItem('tookTutorial', 'true')
      setIsFirstUser(true)
    }
    setIsFirstUser(true)
  }, [])
  return (
    <Container>
      <Header title="Giffy - Main" />
      <Content isTutorial={isFirstUser}>
        {isFirstUser ? (
          <Tutorial />
        ) : (
          <>
            <RecordArea />
            <History />
          </>
        )}
      </Content>
    </Container>
  )
}

export default Screen
