import React, { FormEvent } from 'react'
import { FiMail } from 'react-icons/fi'

import Mailbox from '../../../assets/mailbox.svg'
import { Heading } from '../../Heading'
import { Text } from '../../Text'
import { Input } from '../../Input'
import { Button } from '../../Button'

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

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault()

    const emailField = document.querySelector<HTMLInputElement>(
      `#${emailFieldId}`
    )

    if (!emailField) {
      return onSubmit({ email: '' })
    }

    return onSubmit({ email: emailField?.value })
  }

  return (
    <section className="newsletter">
      <header className="newsletter-hero">
        <Heading variant="h1" as="h1">
          {title}
        </Heading>

        <Text>{description}</Text>

        <form onSubmit={handleFormSubmit}>
          <Input
            required
            id={emailFieldId}
            placeholder="E-mail"
            iconPosition="left"
            icon={FiMail}
          />

          <Button type="submit" variant="primary">
            Subscribe
          </Button>
        </form>
      </header>

      <img
        src={Mailbox}
        className="newsletter-img"
        alt="A mailbox with two letters inside."
      />
    </section>
  )
}
