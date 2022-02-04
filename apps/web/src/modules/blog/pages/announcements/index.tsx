import React from 'react'

import { BlogLayout } from '@modules/layout/BlogLayout'

import { Newsletter } from '@modules/blog/controllers/Newsletter'
import { Heading, Text, Post } from '@giffy/ui'
import { Post as IPost } from '@giffy/types'
import { HeadingContainer } from './styles'

type AnnouncementsProps = {
  posts: IPost[]
}

export const Announcements: React.FC<AnnouncementsProps> = ({ posts }) => {
  return (
    <BlogLayout
      homepage={{
        posts,
        featured: {
          ...posts[0],
        },
      }}
    >
      <HeadingContainer>
        <Heading as="h1" variant="h1" label="Giffy's official announcements" />

        <Text label="Keep up-to-date with the latest announcements from the official Giffy developer team :)." />
      </HeadingContainer>

      {posts.map(({ metadata }) => (
        <Post key={metadata.createdAt} metadata={metadata} />
      ))}

      <Newsletter />
    </BlogLayout>
  )
}
