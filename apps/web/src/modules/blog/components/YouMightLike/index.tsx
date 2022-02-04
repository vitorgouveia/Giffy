import React from 'react'

import { Heading, Post } from '@giffy/ui'
import { Container } from './styles'
import { Post as IPost } from '@giffy/types'

type YouMightLikeProps = {
  /**
   * posts with the same type
   */
  similarPosts: IPost[]
}

export const YouMightLike: React.FC<YouMightLikeProps> = ({ similarPosts }) => {
  return (
    <Container data-styled>
      <Heading as="h3" variant="h3" label="You might like" />

      <ul>
        {similarPosts.slice(0, 2).map(post => (
          <li key={post.metadata.createdAt}>
            <Post variant="medium" metadata={post.metadata} />
          </li>
        ))}
      </ul>
    </Container>
  )
}
