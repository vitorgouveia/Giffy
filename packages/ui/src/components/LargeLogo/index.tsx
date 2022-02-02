import React, { useContext } from 'react'
import Link from 'next/link'

import { Logo } from '../Logo'
import { Heading } from '../Heading'
import { UIContext } from '@context/UIContext'

export const LargeLogo: React.FC = () => {
  const { homepage } = useContext(UIContext)

  return (
    <div className="large-logo-container">
      <Link href={homepage}>
        <a>
          <Logo />

          <Heading
            variant="h3"
            as="h3"
            label="Giffy"
            className="logo-heading"
          />
        </a>
      </Link>
    </div>
  )
}
