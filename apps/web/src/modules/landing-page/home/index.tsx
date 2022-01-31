import React from 'react'
import Head from 'next/head'
import { Button } from '@giffy/ui'

import { DefaultLayout } from '@modules/layout/DefaultLayout'
import { GetStaticProps } from 'next'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Giffy: Open Source GIF Recording App | Giffy</title>
      </Head>

      <DefaultLayout>
        <Button onClick={() => {}}>Hello world</Button>
      </DefaultLayout>
    </React.Fragment>
  )
}
