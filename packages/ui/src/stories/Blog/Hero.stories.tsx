import React from 'react'

import { Hero, HeroProps } from '../../components/Blog/Hero'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Blog/Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = (args: HeroProps) => (
  <Hero
    {...args}
    headings={{
      sub: 'Our Blog',
      main: 'Enjoy the latest in content from our team.',
    }}
    labels={[
      {
        href: '/get-started',
        label: 'Get Started',
        onClick: () => {},
      },
      {
        href: '/subscribe',
        label: 'Subscribe',
        onClick: () => {},
      },
    ]}
    post={{
      createdAt: '2022-01-26T05:03:52.518Z',
      readTime: '10 min',
      tags: [
        { label: 'javascript', tagsPath: '/blog/tags' },
        { label: 'graphql', tagsPath: '/blog/tags' },
        { label: 'reactjs', tagsPath: '/blog/tags' },
        { label: 'html', tagsPath: '/blog/tags' },
        { label: 'jsx', tagsPath: '/blog/tags' },
      ],
      title: 'This is my first post uhuuuu',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer egestas finibus posuere. Vivamus molestie ut lacus
        maximus ornare. Mauris rhoncus, metus sit amet scelerisque
        vehicula, metus odio elementum arcu, id rutrum tortor
        ligula id justo. Sed eleifend facilisis sapien in hendrerit.
        In congue nunc a tellus placerat tincidunt. Sed accumsan
        molestie dui. Cras semper quis nisi non venenatis.
        Integer eu sapien rhoncus dolor convallis placerat. 
        Nulla egestas mi metus. Maecenas varius nec nulla sed 
        pharetra. Fusce eget nibh neque. Praesent egestas feugiat 
        scelerisque. Fusce dictum ullamcorper tempus.
        Nunc massa justo, pretium nec finibus eu, elementum eget 
        enim. Morbi tempor pulvinar dolor, vel molestie elit molestie eu.
        Quisque mauris lacus, vulputate id tellus et, accumsan
        interdum erat. Pellentesque metus purus, vestibulum 
        id pulvinar vel, hendrerit feugiat lectus. Quisque 
        elementum dui et risus bibendum commodo. Proin tristique 
        arcu eget nibh congue imperdiet. Donec pretium
        porta sem non imperdiet. Etiam imperdiet sollicitudin 
        faucibus. Maecenas ultrices rutrum luctus. Curabitur
        ac nibh aliquam, laoreet erat ut, facilisis magna. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      `,
    }}
  />
)

export const Default = Template.bind({})
Default.args = {}
