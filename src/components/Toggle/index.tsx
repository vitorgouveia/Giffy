import React, { FC } from 'react'

import { ToggleContainer } from './styles'

interface ToggleProps {
  name: string
  checked: boolean
  onChange: () => void
}

export const Toggle: FC<ToggleProps> = ({ name, checked, onChange }) => {
  return (
    <ToggleContainer onChange={onChange}>
      <input id={name} type="checkbox" checked={checked} />
      <label htmlFor={name} />
    </ToggleContainer>
  )
}
