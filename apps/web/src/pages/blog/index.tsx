import React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { getAllPosts, Post } from '@lib/posts'

type HomeBlogProps = {
  posts: Post[]
}

const HomeBlog: React.FC<HomeBlogProps> = ({ posts }) => {
  return (
    <div>
      <p>the home of the blog</p>

      <ul>
        {posts.map(({ metadata }) => (
          <li key={metadata.createdAt}>
            <Link href={`/blog/post/${metadata.slug}`}>{metadata.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomeBlog

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = getAllPosts()

  return {
    props: {
      posts,
    },
  }
}
