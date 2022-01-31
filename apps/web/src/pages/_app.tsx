import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { prefixClassNames } from '@utils/prefixClassNames'
import '@giffy/styles'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    prefixClassNames()
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Giffy: Open Source GIF Recording App | Giffy</title>
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default App
