import React from 'react'
import Head from 'next/head'

import { DefaultLayout } from '@modules/layout/DefaultLayout'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home | Giffy</title>
      </Head>

      <DefaultLayout>d</DefaultLayout>
    </React.Fragment>
  )
}
