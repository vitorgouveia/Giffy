import React from 'react'

import LogoImg from '../assets/logo.png'

export const Logo: React.FC = () => {
  return (
    <React.Fragment>
      <img className="logo-icon" src={LogoImg} alt="Giffy's logo image" />
    </React.Fragment>
  )
}
