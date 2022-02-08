import React from 'react'

import { WaitForKey } from '@screens/WaitForKey'
import { DefaultLayout } from '@layouts/DefaultLayout'

export const Screen: React.FC = () => {
  // get from context wether the app is signed or not
  // if not show key 'page'
  const isAuthenticated = false

  return (
    <React.Fragment>
      {!isAuthenticated ? <WaitForKey /> : <DefaultLayout />}
    </React.Fragment>
  )
}
