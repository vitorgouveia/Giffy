/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

import { Heading, Text } from '@giffy/ui'
import { DefaultLayout } from '@modules/layout/DefaultLayout'
import { Newsletter } from '@modules/blog/controllers/Newsletter'

import { Section, Box, Left, Right, BoxProps, SectionProps } from './styles'

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

export const Home: React.FC<HomeProps> = ({ hasLaunched }) => {
  return (
    <React.Fragment>
      {Sections.map(
        ({ id, section, box, heading, description, image, overflow }) => (
          <Section
            key={id}
            {...section}
            style={overflow === true ? { marginTop: '-69px' } : {}}
          >
            <Box {...box}>
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
