import React, { FC, useState, useMemo } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'

import os from 'os'

import { Toggle } from '../../components/Toggle'
import { useConfig } from '../../hooks/useConfig'
import { config } from '../../store/config'
import {
  SettingsContainer,
  Search,
  SearchContainer,
  CardContainer,
  Card
} from './styles'

export const Settings: FC = () => {
  const [text, setText] = useState('')

  const useMacOSWindowActionButtons = useConfig('useMacOSWindowActionButtons')

  const shouldUseMacOSWindowActions = useMemo(() => {
    return useMacOSWindowActionButtons || os.platform() === 'darwin'
  }, [useMacOSWindowActionButtons])
  return (
    <SettingsContainer>
      <SearchContainer>
        <Search
          type="search"
          value={text}
          onChange={event => setText(event.target.value)}
          placeholder="Search for settings"
        />
        <FiX strokeWidth={3} className="close" onClick={() => setText('')} />
        <FiSearch />
      </SearchContainer>
      <CardContainer>
        <section>
          <h1>Appearance</h1>
          <Card>
            <div>
              <p>Use MacOs buttons</p>
              <small>Use MacOs buttons</small>
            </div>
            <Toggle
              name="macos"
              checked={shouldUseMacOSWindowActions}
              onChange={() =>
                config.set(
                  'useMacOSWindowActionButtons',
                  !shouldUseMacOSWindowActions
                )
              }
            />
          </Card>
        </section>
      </CardContainer>
    </SettingsContainer>
  )
}
