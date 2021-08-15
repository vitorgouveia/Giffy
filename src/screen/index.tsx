import React, { FC, useEffect, useState } from 'react'
import { FiSettings, FiLogOut } from 'react-icons/fi'

import Header from './Header'
import { History } from './History'
import { RecordArea } from './Main'
import { Settings } from './Settings'
import { Container, Content } from './styles'
import { Tutorial } from './Tutorial'

const Screen: FC = () => {
  const [showSettings, setShowSettings] = useState(false)
  const [isFirstUser, setIsFirstUser] = useState(false)

  useEffect(() => {
    const hasTakenTour = localStorage.getItem('tookTutorial') === 'true'

    if (hasTakenTour) {
      setIsFirstUser(false)
    } else {
      localStorage.setItem('tookTutorial', 'true')
      setIsFirstUser(true)
    }
    // setIsFirstUser(true)
  }, [])
  return (
    <Container>
      <Header title="Giffy - Main" />
      <Content isTutorial={isFirstUser} showSettings={showSettings}>
        {isFirstUser && <Tutorial />}

        {showSettings ? (
          <>
            <FiLogOut
              tabIndex={0}
              className="settings"
              onClick={() => setShowSettings(!showSettings)}
            />
            <Settings />
          </>
        ) : (
          <>
            <RecordArea />
            <History />
            <FiSettings
              tabIndex={0}
              className="settings"
              onClick={() => setShowSettings(!showSettings)}
            />
          </>
        )}
      </Content>
    </Container>
  )
}

export default Screen
