import React from 'react'

import { Logo } from '../Logo'
import { LogoHeading } from '../Heading/LogoHeading'

export const LargeLogo: React.FC = () => {
  return (
    <div className="large-logo-container">
      <Logo />

      <LogoHeading>Giffy</LogoHeading>
    </div>
  )
}
