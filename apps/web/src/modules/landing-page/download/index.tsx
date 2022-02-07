import React, { useCallback } from 'react'

import { Heading, Button, Divider, Link } from '@giffy/ui'
import {
  PricingSection,
  HeaderTitles,
  Header,
  PricingCard,
  DownloadSection,
} from './styles'

type Type = 'studio' | 'lite' | 'business'
type Platform = 'Android' | 'Chrome OS' | 'iOS' | 'Linux' | 'macOS' | 'Windows'

type Plan = {
  id: string
  type: Type
  title: string
  price: string
  buttonLabel: string

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
    buttonLabel: 'Start Free Trial',

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
    buttonLabel: 'Contact Us',

    features: ['Faster issue solving', 'Direct team contact'],
  },
]

type Download = {
  title: string
  type: Type
  backgroundColor: string

  platforms: {
    [key in Platform]: {
      name: string
      store?: 'App Store' | 'Google Play'
      file: string
    }[]
  }
}

const downloads: Download[] = [
  {
    title: 'Giffy Lite',
    type: 'lite',
    backgroundColor: 'linear-gradient(135deg, #5d5f73 0%, #2f2f3d 100%)',

    platforms: {
      Windows: [
        {
          name: 'Installer',
          file: '_installer.exe',
        },
        {
          name: 'Portable',
          file: '_portable.exe',
        },
      ],

      macOS: [
        {
          name: 'Dmg',
          file: '.dmg',
        },
        {
          name: 'Pkg',
          file: '.pkg',
        },
      ],

      Linux: [
        {
          name: 'Deb',
          file: '.deb',
        },
        {
          name: 'AppImage',
          file: '.appImage',
        },
        {
          name: 'Rpm',
          file: '.rpm',
        },
      ],

      iOS: [
        {
          name: 'Ipa',
          file: '.ipa',
        },
        {
          name: 'App Store',
          store: 'App Store',
          // here file works as link because its a store
          file: 'www.google.com',
        },
      ],

      Android: [
        {
          name: 'Apk',
          file: '.apk',
        },
        {
          name: 'Google Play',
          store: 'Google Play',
          // here file works as link because its a store
          file: 'www.google.com',
        },
      ],

      'Chrome OS': [
        {
          name: 'Apk',
          file: '.apk',
        },
      ],
    },
  },

  {
    title: 'Giffy Studio',
    type: 'studio',
    backgroundColor: 'var(--accent)',

    platforms: {
      Windows: [
        {
          name: 'Installer',
          file: '_installer.exe',
        },
        {
          name: 'Portable',
          file: '_portable.exe',
        },
      ],

      macOS: [
        {
          name: 'Dmg',
          file: '.dmg',
        },
        {
          name: 'Pkg',
          file: '.pkg',
        },
      ],

      Linux: [
        {
          name: 'Deb',
          file: '.deb',
        },
        {
          name: 'AppImage',
          file: '.appImage',
        },
        {
          name: 'Rpm',
          file: '.rpm',
        },
      ],

      iOS: [
        {
          name: 'Ipa',
          file: '.ipa',
        },
        {
          name: 'App Store',
          store: 'App Store',
          // here file works as link because its a store
          file: 'www.google.com',
        },
      ],

      Android: [
        {
          name: 'Apk',
          file: '.apk',
        },
        {
          name: 'Google Play',
          store: 'Google Play',
          // here file works as link because its a store
          file: 'www.google.com',
        },
      ],

      'Chrome OS': [
        {
          name: 'Apk',
          file: '.apk',
        },
      ],
    },
  },

  {
    title: 'Giffy Business',
    type: 'business',
    backgroundColor: 'transparent',

    platforms: {
      Windows: [
        {
          name: 'Installer',
          file: '_installer.exe',
        },
        {
          name: 'Portable',
          file: '_portable.exe',
        },
      ],

      macOS: [
        {
          name: 'Dmg',
          file: '.dmg',
        },
        {
          name: 'Pkg',
          file: '.pkg',
        },
      ],

      Linux: [
        {
          name: 'Deb',
          file: '.deb',
        },
        {
          name: 'AppImage',
          file: '.appImage',
        },
        {
          name: 'Rpm',
          file: '.rpm',
        },
      ],

      iOS: [
        {
          name: 'Ipa',
          file: '.ipa',
        },
        {
          name: 'App Store',
          store: 'App Store',
          // here file works as link because its a store
          file: 'www.google.com',
        },
      ],

      Android: [
        {
          name: 'Apk',
          file: '.apk',
        },
        {
          name: 'Google Play',
          store: 'Google Play',
          // here file works as link because its a store
          file: 'www.google.com',
        },
      ],

      'Chrome OS': [
        {
          name: 'Apk',
          file: '.apk',
        },
      ],
    },
  },
]

export const Download: React.FC = () => {
  const handleDownload = useCallback(
    (file: string, { link }: { link: boolean }) => {
      if (link) {
        window.location.href = file
      }

      const linkElement = document.createElement('a')
      const filepath = `/${file}`
      linkElement.href = filepath
      linkElement.setAttribute('download', file)
      linkElement.click()
    },
    []
  )

  return (
    <React.Fragment>
      <Header thumbnailUrl={''}>
        <HeaderTitles>
          <Heading variant="h1" as="h1">
            Free GIF recorder App
          </Heading>

          <Button onClick={() => {}}>Download</Button>
        </HeaderTitles>
      </Header>
      <PricingSection>
        {plans.map(({ id, title, price, buttonLabel, features, type }) => (
          <PricingCard type={type} key={id}>
            <Heading variant="h2" as="h2">
              {title}
            </Heading>

            <Heading variant="h1" as="h1">
              {price}
            </Heading>

            <Link href={`#${type}`}>
              <Button onClick={() => {}}>{buttonLabel}</Button>
            </Link>

            <Divider />

            <ul>
              {features.map(feature => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </PricingCard>
        ))}
      </PricingSection>

      {downloads.map(({ title, backgroundColor, type, platforms }) => (
        <DownloadSection
          id={type}
          key={title}
          style={{ background: backgroundColor }}
        >
          <Heading variant="h1" as="h1">
            {title}
          </Heading>

          <ul>
            {Object.entries(platforms).map(([platform, buttons]) => (
              <li key={platform}>
                <Heading variant="h2" as="h2">
                  {platform}
                </Heading>

                {buttons.map(({ file, name, store }) => (
                  <Button
                    key={file}
                    onClick={() =>
                      handleDownload(
                        store === 'App Store' || store === 'Google Play'
                          ? `${file}`
                          : `giffy_${type}${file}`,
                        {
                          link:
                            store === 'App Store' || store === 'Google Play',
                        }
                      )
                    }
                    variant="ghost"
                  >
                    {name}
                  </Button>
                ))}
              </li>
            ))}
          </ul>
        </DownloadSection>
      ))}
    </React.Fragment>
  )
}
