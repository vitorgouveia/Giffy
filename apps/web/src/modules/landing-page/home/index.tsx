/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import { defaultTitle, titleTemplate, description, author } from '@lib/seo'
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
  Modal,
  Post,
} from '@giffy/ui'
import { Post as IPost } from '@giffy/types'
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
  FeatureCards,
  SponsorRow,
  SponsorsWrapper,
  NewsletterWrapper,
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

type Sponsor = {
  id: string
  name: string
}
type Sponsors = Sponsor[]

export type User = {
  id: string
  name: string
}

type HomeProps = {
  hasLaunched: boolean
  users: User[]
  sponsors: Sponsors[]
  post: IPost
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

export const Home: React.FC<HomeProps> = ({
  hasLaunched,
  post,
  sponsors,
  users,
}) => {
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

  const randomNum = useCallback((max: number, min: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }, [])

  const handleDownload = () => {
    push(`/download#${platform}`)
  }

  return (
    <React.Fragment>
      <NextSeo
        title={defaultTitle}
        defaultTitle={defaultTitle}
        titleTemplate={titleTemplate}
        description={description}
        openGraph={{
          url: 'https://vitorgouveia.github.io/Giffy',
          title: `${defaultTitle} | Giffy`,
          description,
          site_name: 'Giffy',
          locale: 'en_US',

          images: [
            {
              url: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F17085d69-04f3-41e5-bdc4-adffd0d4d896%2FCover.jpg?table=block&id=ff614376-b873-47aa-b94b-628126627ac9',
              type: 'image/jpeg',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: 'https://vitorgouveia.github.io/Giffy',
        }}
        // defaultTitle, titleTemplate, description, author
      />

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

            {!hasLaunched && (
              <Text>
                Enter your e-mail and we will notify you when{' '}
                <Highlighted>Giffy</Highlighted> launches.
              </Text>
            )}

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
                  push('/downloads')
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

                <Button
                  variant="outlined"
                  onClick={() => {
                    push('/downloads')
                  }}
                >
                  More Downloads
                </Button>
              </ButtonWrapper>
            )}
          </Left>

          <Right className="hero-right" style={{ flexShrink: 2 }}>
            <img
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
            {users.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </TrustedBy>
        </Box>
      </Section>

      <Section backgroundColor="black">
        <Box layout="column" backgroundColor="black">
          <Left>
            <Heading style={{ textAlign: 'center' }} variant="h3" as="strong">
              <Highlighted>FEATURES</Highlighted>
            </Heading>

            <Heading style={{ textAlign: 'center' }} variant="h1" as="h2">
              A fit for all your needs
            </Heading>

            <Text style={{ textAlign: 'center', width: '80%', margin: 'auto' }}>
              Create scenes, record multiple screens, blur out sensitive
              information, zoom in into your content, edit your GIF, all in one
              app
            </Text>

            <Button
              style={{ width: 'max-content', margin: 'auto' }}
              iconPosition="left"
              icon={osIcons[platform]}
              onClick={handleDownload}
            >
              Download
            </Button>
          </Left>

          <Right>
            <FeatureCards>
              <Modal>
                <Heading variant="h3" as="strong">
                  Multi-Platform
                </Heading>
                <Text>
                  Use it on any operational system, Windows, MacOS or Linux
                </Text>
              </Modal>
              <Modal>
                <Heading variant="h3" as="strong">
                  Scene Management
                </Heading>
                <Text>
                  Organize your workspace and create scenes like you’re used to
                </Text>
              </Modal>
              <Modal>
                <Heading variant="h3" as="strong">
                  Native Shortcuts
                </Heading>
                <Text>
                  We come with pre-configured shortcuts for all your needs
                </Text>
              </Modal>
            </FeatureCards>
          </Right>
        </Box>
      </Section>

      <Section backgroundColor="black">
        <Box layout="column" backgroundColor="black">
          <Left>
            <Heading style={{ textAlign: 'center' }} variant="h1" as="h2">
              <Highlighted>SPONSORS</Highlighted>
            </Heading>
          </Left>
        </Box>
      </Section>

      <Section
        style={{ overflow: 'hidden', height: '500px', padding: 0 }}
        backgroundColor="black"
      >
        <SponsorsWrapper>
          {sponsors.map((sponsorArray, idx) => (
            <SponsorRow key={idx}>
              {sponsorArray.map(({ id, name }, idx) => {
                const randomizer = randomNum(0, 4)

                return (
                  <Heading key={id} variant="h3" as="strong">
                    <span
                      className={
                        randomizer === 1
                          ? ''
                          : randomizer === 2
                          ? 'outlined'
                          : 'dark'
                      }
                    >
                      {name}
                    </span>
                  </Heading>
                )
              })}
            </SponsorRow>
          ))}
        </SponsorsWrapper>
      </Section>

      <Section backgroundColor="black">
        <Box layout="column" backgroundColor="black">
          <Left>
            <Heading style={{ textAlign: 'center' }} variant="h2" as="h3">
              Why Giffy
            </Heading>

            <Text style={{ textAlign: 'center', width: '70%', margin: 'auto' }}>
              If you don’t know why you should use Giffy, check out our blog and
              see all our stories
            </Text>
          </Left>

          <Right>
            <Post metadata={post.metadata} />
          </Right>
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
          <NewsletterWrapper>
            <Newsletter />
          </NewsletterWrapper>
        </Box>
      </Section>
    </React.Fragment>
  )
}
