import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { UIProvider } from '@context/UIContext'

import { Hero, HeroProps } from '../../components/Blog/Hero'

export default {
  title: 'Blog/Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = (args: HeroProps) => (
  <UIProvider
    prefix="giffy_css"
    homepage="/blog"
    blog={{ tagsPath: '/blog/tags', postsPath: '/blog/posts' }}
  >
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
        metadata: {
          createdAt: 1643747451184,
          updatedAt: 1643747451184,
          authors: ['vitor'],
          slug: 'my-post-1',
          thumbnailUrl:
            'https://i.guim.co.uk/img/media/364089a4778d97eac2be1a48913931b6f562e169/920_1562_2138_1282/master/2138.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c6b604fb567ffa5e9f8172a4c82a7ec5',
          readTime: '10 min',
          type: 'post',
          tags: ['javascript', 'graphql', 'reactjs', 'html', 'jsx'],
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
        },
      }}
    />
  </UIProvider>
)

export const Default = Template.bind({})
Default.args = {}
