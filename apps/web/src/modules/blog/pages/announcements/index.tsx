import React from 'react'

import { BlogLayout } from '@modules/layout/BlogLayout'

import { Post } from '@giffy/types'

type AnnouncementsProps = {
  posts: Post[]
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
      <p>announcements</p>

      {posts.map(post => (
        <div key={post.metadata.createdAt}>{post.metadata.title}</div>
      ))}
    </BlogLayout>
  )
}
