import React from 'react'
import { MDXRemote } from 'next-mdx-remote'

import { Post } from '@giffy/types'
import { Divider } from '@giffy/ui'
import { MDXPost } from '@lib/posts'
import { BlogLayout } from '@modules/layout/BlogLayout'
import { components } from '@modules/blog/components'
import { YouMightLike } from '@modules/blog/components/YouMightLike'
import { Newsletter } from '@modules/blog/controllers/Newsletter'

type PostPageProps = MDXPost & {
  similarPosts: Post[]
}

export const PostPage: React.FC<PostPageProps> = ({
  mdx,
  post,
  similarPosts,
}) => {
  return (
    <BlogLayout post={post}>
      <div>
        <MDXRemote {...mdx} components={components} />
      </div>

      <Divider />

      <YouMightLike similarPosts={similarPosts} />

      <Newsletter />
    </BlogLayout>
  )
}
