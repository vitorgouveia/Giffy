import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

import { Newsletter } from '@modules/blog/controllers/Newsletter'

import { Centered } from './styles'

export const NewsletterPage: React.FC = () => {
  return (
    <React.Fragment>
      <NextSeo
        title="Join other Devs and Enter The Newsletter"
        titleTemplate="%s | Giffy"
        description={`
          Enter the newsletter and get
          to know when new posts are published 
          and receive exclusive newsletter-only content.
        `}
      />

      <Centered>
        <Newsletter />
      </Centered>
    </React.Fragment>
  )
}
