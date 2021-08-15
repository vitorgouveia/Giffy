import React, { FC, useState } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'

import { SettingsContainer, Search, SearchContainer } from './styles'

export const Settings: FC = () => {
  const [text, setText] = useState('')

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
    </SettingsContainer>
  )
}
