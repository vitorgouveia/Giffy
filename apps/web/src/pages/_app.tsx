import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import '@giffy/styles'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
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
