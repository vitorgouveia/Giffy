import React from 'react'
import Head from 'next/head'

import { DefaultLayout } from '@modules/layout/DefaultLayout'
import { GetStaticProps } from 'next'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Giffy: Open Source GIF Recording App | Giffy</title>
      </Head>

      <DefaultLayout>d</DefaultLayout>
    </React.Fragment>
  )
}
