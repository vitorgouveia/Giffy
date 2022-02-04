import React, { useCallback } from 'react'

import { Newsletter as BlogNewsletter } from '@giffy/ui'

type FormProps = {
  email: string
}

export const Newsletter: React.FC = () => {
  const handleNewsletterSubmit = useCallback(async ({ email }: FormProps) => {
    const formURL = process.env.NEXT_PUBLIC_FORM_URL

    try {
      const response = await fetch(formURL, {
        method: 'POST',
        body: JSON.stringify({
          email,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await response.text()
      console.log({ data })
    } catch (error) {
      console.log({ error })
    }
  }, [])

  return (
    <BlogNewsletter
      title="Join other Devs"
      description="enter the newsletter and get to know when new posts are published and receive exclusive newsletter-only content."
      onSubmit={handleNewsletterSubmit}
    />
  )
}
