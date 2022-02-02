import React from 'react'
import { FiMail } from 'react-icons/fi'

import { Mailbox } from '../../../icons/mailbox'
import { Heading } from '../../Heading'
import { Text } from '../../Text'
import { Input } from '../../Input'
import { Button } from '../../Button'

import { Form } from '../../../lib/Form'

type FormSchema = {
  email: string
}

export type NewsletterProps = {
  title: string
  description: string
  onSubmit: (data: FormSchema) => void | Promise<void>
}

export const Newsletter: React.FC<NewsletterProps> = ({
  title = 'Join other Devs',
  description = 'Enter the newsletter and get to know when new posts are published and receive exclusive newsletter-only content.',
  onSubmit,
}) => {
  const emailFieldId = 'newsletter-email'

  async function handleFormSubmit(data: FormSchema) {
    const { email } = data

    if (!email) {
      // error field
      return await onSubmit({ email: '' })
    }

    return await onSubmit({ email })
  }

  return (
    <section className="newsletter">
      <header className="newsletter-hero">
        <Heading variant="h1" as="h1">
          {title}
        </Heading>

        <Text>{description}</Text>

        <Form<FormSchema> onSubmit={handleFormSubmit}>
          <Input
            required
            id={emailFieldId}
            placeholder="E-mail"
            name="email"
            iconPosition="left"
            icon={FiMail}
          />

          <Button onClick={() => {}} type="submit" variant="primary">
            Subscribe
          </Button>
        </Form>
      </header>

      <Mailbox className="newsletter-img" />
    </section>
  )
}
