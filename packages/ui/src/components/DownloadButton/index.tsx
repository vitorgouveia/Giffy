import React from 'react'

import { Text } from '../Text'
import { Heading } from '../Heading'

import AppleLogo from '../../assets/apple.svg'
import GooglePlayLogo from '../../assets/google.svg'

export type DownloadButtonProps = {
  store: 'App Store' | 'Google Play'
  onClick: () => void | Promise<void>
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  store,
  onClick,
}) => {
  const isApple = store === 'App Store'

  return (
    <button onClick={onClick} className="download-button">
      <header className="download-button-heading">
        <Text>Download on</Text>

        <Heading variant="h3" as="strong">
          {isApple ? 'App Store' : 'Google Play'}
        </Heading>
      </header>

      <div className="download-button-store-logo">
        {isApple ? <AppleLogo /> : <GooglePlayLogo />}
      </div>
    </button>
  )
}
