import React from 'react'

import { Heading, Button, Divider, Link } from '@giffy/ui'
import { PricingSection, PricingCard } from '../download/styles'

type Type = 'studio' | 'lite' | 'business'

type Plan = {
  id: string
  type: Type
  title: string
  price: string
  buttonLabel: string
  paymentLink?: string

  features: string[]
}

const plans: Plan[] = [
  {
    id: '1',
    type: 'lite',
    title: 'Giffy Lite',
    price: 'FREE',
    buttonLabel: 'Download',

    features: [
      'Scenes Management',
      'Shortcuts',
      'Preview Overlay',
      'GIF Settings',
    ],
  },
  {
    id: '2',
    type: 'studio',
    title: 'Giffy Studio',
    price: '$19.99',
    buttonLabel: 'Buy Studio',
    paymentLink: process.env.NEXT_PUBLIC_GIFFY_STUDIO_PAYMENT_LINK,

    features: [
      'Blurring of areas',
      'Editing track',
      'Higher GIF quality',
      'Zoom',
      'Import & Export of scenes',
      'CLI',
    ],
  },
  {
    id: '3',
    type: 'business',
    title: 'Giffy Business',
    price: '$69.99',
    buttonLabel: 'Buy Business',
    paymentLink: process.env.NEXT_PUBLIC_GIFFY_BUSINESS_PAYMENT_LINK,

    features: ['Faster issue solving', 'Direct team contact'],
  },
]

export const Pricing: React.FC = () => {
  return (
    <React.Fragment>
      <PricingSection>
        {plans.map(
          ({ id, title, price, buttonLabel, features, type, paymentLink }) => (
            <PricingCard type={type} key={id}>
              <Heading variant="h2" as="h2">
                {title}
              </Heading>

              <Heading variant="h1" as="h1">
                {price}
              </Heading>

              <Link href={paymentLink || '/download#lite'}>
                <Button onClick={() => {}}>{buttonLabel}</Button>
              </Link>

              <Divider />

              <ul>
                {features.map(feature => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </PricingCard>
          )
        )}
      </PricingSection>
    </React.Fragment>
  )
}
