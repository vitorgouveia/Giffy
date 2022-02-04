import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import { ThemeProvider } from 'styled-components'
import { UIProvider } from '@giffy/ui'
import { defaultTitle, titleTemplate, author, description } from '@lib/seo'

import '@giffy/styles'
import { theme } from '@styles/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Giffy: Open Source GIF Recording App | Giffy</title>
      </Head>

      <DefaultSeo
        defaultTitle={defaultTitle}
        titleTemplate={titleTemplate}
        additionalMetaTags={[
          { name: 'author', content: author },
          {
            name: 'description',
            content: description,
          },
          {
            httpEquiv: 'x-ua-compatible',
            content: 'IE=edge; chrome=1',
          },
        ]}
        openGraph={{
          type: 'website',
          url: 'https://vitorgouveia.github.io/Giffy',
          title: defaultTitle,
          description,
        }}
      />

      <ThemeProvider theme={theme}>
        <UIProvider
          blog={{ tagsPath: '/blog/tags', postsPath: '/blog/post' }}
          homepage="/"
        >
          <Component {...pageProps} />
        </UIProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
