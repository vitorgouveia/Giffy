import React from 'react'

import { Logo } from '../Logo'
import { Heading } from '../Heading'

export const LargeLogo: React.FC = () => {
  return (
    <div className="large-logo-container">
      <Logo />

      <Heading variant="h3" as="h3" label="Giffy" className="logo-heading" />
    </div>
  )
}
