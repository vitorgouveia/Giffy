/* eslint-disable @next/next/no-img-element */
import React, { FormEvent, useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { FiMail } from 'react-icons/fi'
import { AiFillApple, AiFillWindows } from 'react-icons/ai'
import { FaGooglePlay } from 'react-icons/fa'
import { SiPwa, SiLinux } from 'react-icons/si'

import {
  Heading,
  Text,
  Input,
  Form,
  Button,
  DownloadButton,
  Link,
} from '@giffy/ui'
import { Newsletter } from '@modules/blog/controllers/Newsletter'

import {
  Section,
  Box,
  Left,
  Right,
  BoxProps,
  SectionProps,
  Highlighted,
  FormWrapper,
  ButtonWrapper,
  DownloadButtonWrapper,
  ImageWrapper,
  TrustedBy,
} from './styles'

type ISection = {
  id: string
  heading: string
  description: string
  image: {
    src: string
    alt: string
  }
  overflow?: boolean

  box: BoxProps
  section: SectionProps
}

const Sections: ISection[] = [
  {
    id: '1',
    heading: 'Customize and Edit your GIFs',
    description:
      'Create multiple Scenes to fit multiple use cases, switch back and forth between scenes and import and export scenes.',
    image: {
      src: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F17085d69-04f3-41e5-bdc4-adffd0d4d896%2FCover.jpg?table=block&id=ff614376-b873-47aa-b94b-628126627ac9',
      alt: 'Image of something',
    },
    box: {
      backgroundColor: 'stroke',
      layout: 'row-reverse',
    },
    section: {
      backgroundColor: 'stroke',
    },
  },
  {
    id: '2',
    heading: 'Organize your workspace',
    description:
      'With the Giffy’s gif video editor you can edit your gifs and add special effects.',
    image: {
      src: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F17085d69-04f3-41e5-bdc4-adffd0d4d896%2FCover.jpg?table=block&id=ff614376-b873-47aa-b94b-628126627ac9',
      alt: 'Image of something',
    },
    box: {
      backgroundColor: 'black',
      layout: 'row',
    },
    section: {
      backgroundColor: 'accent',
    },
  },
  {
    id: '3',
    heading: '⌨ Native Shortcuts',
    description:
      'With the Giffy’s gif video editor you can edit your gifs and add special effects.',
    image: {
      src: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F17085d69-04f3-41e5-bdc4-adffd0d4d896%2FCover.jpg?table=block&id=ff614376-b873-47aa-b94b-628126627ac9',
      alt: 'Image of something',
    },
    box: {
      backgroundColor: 'black',
      layout: 'row',
    },
    section: {
      backgroundColor: 'black',
    },
  },
  {
    id: '4',
    heading: '☁️ Lightweight',
    description:
      'Having quick and easy access to the apps core funcionalities is fundamental.',
    image: {
      src: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F17085d69-04f3-41e5-bdc4-adffd0d4d896%2FCover.jpg?table=block&id=ff614376-b873-47aa-b94b-628126627ac9',
      alt: 'Image of something',
    },
    box: {
      backgroundColor: 'black',
      layout: 'row-reverse',
    },
    section: {
      backgroundColor: 'black',
    },
  },
  {
    id: '5',
    heading: '💻 Multi-Platform',
    description:
      'We will always ask permission before writing or reading any files from your system.',
    image: {
      src: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F17085d69-04f3-41e5-bdc4-adffd0d4d896%2FCover.jpg?table=block&id=ff614376-b873-47aa-b94b-628126627ac9',
      alt: 'Image of something',
    },
    box: {
      backgroundColor: 'black',
      layout: 'column',
    },
    section: {
      backgroundColor: 'black',
    },
  },
  {
    id: '6',
    heading: 'Open Source',
    description:
      'We will always ask permission before writing or reading any files from your system.',
    image: {
      src: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F17085d69-04f3-41e5-bdc4-adffd0d4d896%2FCover.jpg?table=block&id=ff614376-b873-47aa-b94b-628126627ac9',
      alt: 'Image of something',
    },
    box: {
      backgroundColor: 'black',
      layout: 'row',
    },
    section: {
      backgroundColor: 'stroke',
    },
    overflow: true,
  },
]

type HomeProps = {
  hasLaunched: boolean
}

const osIcons = {
  Android: <FaGooglePlay size={24} />,
  'Chrome OS': <FaGooglePlay size={24} />,
  iOS: <AiFillApple size={24} />,
  Linux: <SiLinux size={24} />,
  macOS: <AiFillApple size={24} />,
  Windows: <AiFillWindows size={24} />,
  Unknown: <SiPwa size={24} />,
}

type FormSchema = {
  email: string
}

export const Home: React.FC<HomeProps> = ({ hasLaunched }) => {
  type Platform = Window['navigator']['userAgentData']['platform']
  const [platform, setPlatform] = useState<Platform>('Windows')
  const { push } = useRouter()

  useEffect(() => {
    setPlatform(window.navigator.userAgentData.platform)
  }, [])

  const handleFormSubmit = useCallback(async ({ email }: FormSchema) => {
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

  const handleDownload = () => {
    push(`/download#${platform}`)
  }

  return (
    <React.Fragment>
      <Section style={{ paddingBottom: 0 }} backgroundColor="black">
        <Box
          className="hero"
          justifyContent="space-between"
          layout="row"
          backgroundColor="black"
        >
          <Left className="hero-left">
            <Heading variant="h1" as="h1">
              The easiest way to record GIFs.
            </Heading>
            <Text>
              Enter your e-mail and we will notify you when{' '}
              <Highlighted>Giffy</Highlighted> launches.
            </Text>

            {!hasLaunched ? (
              <FormWrapper>
                <Form<FormSchema> onSubmit={handleFormSubmit}>
                  <Input
                    icon={FiMail}
                    iconPosition="left"
                    id="subscribe-input"
                    name="email"
                    placeholder="Your Best E-mail"
                  />
                  <Button onClick={() => {}}>Subscribe</Button>
                </Form>
              </FormWrapper>
            ) : platform === 'Unknown' ? (
              <Button
                onClick={() => {
                  push('/download')
                }}
              >
                Download
              </Button>
            ) : (
              <ButtonWrapper>
                <Button
                  iconPosition="left"
                  icon={osIcons[platform]}
                  onClick={handleDownload}
                >
                  Download
                </Button>

                <Button variant="outlined" onClick={() => {}}>
                  More Downloads
                </Button>
              </ButtonWrapper>
            )}
          </Left>

          <Right className="hero-right" style={{ flexShrink: 2 }}>
            <Image
              src="/neon_logo.png"
              height={300}
              width={300}
              alt="Giffy logo neon version"
            />
          </Right>
        </Box>
      </Section>

      {!hasLaunched && (
        <Section style={{ paddingTop: 0 }} backgroundColor="black">
          <Box
            style={{ height: 'auto' }}
            className="hero"
            backgroundColor="black"
            layout="row"
          >
            <Left className="hero-left">
              <DownloadButtonWrapper>
                <DownloadButton onClick={() => {}} store="App Store" />
                <DownloadButton onClick={() => {}} store="Google Play" />
              </DownloadButtonWrapper>
            </Left>

            <Right className="hero-right" />
          </Box>
        </Section>
      )}

      <Section style={{ padding: 0 }} backgroundColor="black">
        <Box layout="column" backgroundColor="black">
          <ImageWrapper>
            <img
              src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F17085d69-04f3-41e5-bdc4-adffd0d4d896%2FCover.jpg?table=block&id=ff614376-b873-47aa-b94b-628126627ac9"
              alt="Banner image"
            />
          </ImageWrapper>
        </Box>
      </Section>

      <Section
        style={{ paddingLeft: 0, paddingRight: 0 }}
        backgroundColor="black"
      >
        <Box layout="column" backgroundColor="black">
          <Heading variant="h2" as="h2">
            Trusted By
          </Heading>

          <TrustedBy>
            {Array(20)
              .fill('some streamer')
              .map((streamer, idx) => (
                <li key={idx}>{streamer}</li>
              ))}
          </TrustedBy>
        </Box>
      </Section>

      {Sections.map(
        ({ id, section, box, heading, description, image, overflow }) => (
          <Section
            key={id}
            {...section}
            style={overflow === true ? { marginTop: '-69px' } : {}}
          >
            <Box {...box} className="generic">
              <Left>
                <Heading variant="h2" as="h3" label={heading} />

                <Text label={description} />
              </Left>

              <Right>
                {/* not using next/image because I HATE IT */}
                <img src={image.src} alt={image.alt} />
              </Right>
            </Box>
          </Section>
        )
      )}

      <Section backgroundColor="background">
        <Box backgroundColor="background" layout="row">
          <Newsletter />
        </Box>
      </Section>
    </React.Fragment>
  )
}
