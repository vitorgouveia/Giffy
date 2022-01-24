import fs from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'
import React from 'react'
import { GetStaticProps } from 'next'

type Metadata = {
  title: string
  createdAt: number
  description: string
  thumbnailUrl: string
  tags: string[]
}

type Post = {
  content: any

  metadata: Metadata
}

type HomeBlogProps = {
  posts: Post[]
}

const HomeBlog: React.FC<HomeBlogProps> = ({ posts }) => {
  return (
    <div>
      <p>the home of the blog</p>

      <ul>
        {posts.map(({ metadata }) => (
          <li key={metadata.createdAt}>{metadata.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default HomeBlog

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync('./src/posts')

  const posts = files.map(filename => {
    const fileContent = fs.readFileSync(`./src/posts/${filename}`, 'utf-8')
    const { content, data: metadata } = grayMatter(fileContent)

    return {
      content,
      metadata: {
        ...metadata,
        slug: filename.replace('.mdx', ''),
      },
    }
  })

  return {
    props: {
      posts,
    },
  }
}
