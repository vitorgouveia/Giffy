import React from 'react'

import { Heading } from '@giffy/ui/src/components/Heading'

export const WaitForKey: React.FC = () => {
  // im gonna receive the user email
  // check on stripe which plan the user has bought
  // create a key and sign it to this app
  // send that key to the user email
  // user can only use that key on this app

  return (
    <div>
      <Heading variant="h1" as="h1">
        insert your app key
      </Heading>
    </div>
  )
}
