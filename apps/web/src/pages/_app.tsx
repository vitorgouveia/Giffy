import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import '@giffy/styles'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const ignored = [
      'html',
      'head',
      'head *',
      'body',
      '#__next',
      'script',
      '#__next-build-watcher',
      'next-route-announcer',
      '#__next-route-announcer__',
    ]

    const prefix = 'giffy_css'

    const elements = document.querySelectorAll(`*:not(${ignored.join(', ')})`)

    if (typeof window !== 'undefined') {
      const prefixAlreadyApplied = localStorage.getItem('@giffy:prefix')

      elements.forEach(element => {
        const { className } = element

        if (!!className && !(prefixAlreadyApplied === 'true')) {
          console.log('digudasi')
          element.className = `${prefix}-${className}`
        }
      })

      localStorage.setItem('@giffy:prefix', 'true')
    }

    return () => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('@giffy:prefix', 'false')
      }
    }
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
