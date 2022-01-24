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

export const getStaticProps: GetStaticProps = async () => {
  const { prisma } = await import('@lib/prisma')
  await prisma.post.create({
    data: {
      slug: 'hello-world',
      title: 'Hello world',
      body: 'disdaosdjad',
      views: 3048943256290,
    },
  })

  return {
    props: {},
  }
}
