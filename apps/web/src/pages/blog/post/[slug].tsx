import React from 'react'

import { GetStaticPaths, GetStaticProps } from 'next'
import fs from 'fs'
import grayMatter from 'gray-matter'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

type Metadata = {
  title: string
  createdAt: number
  description: string
  thumbnailUrl: string
  tags: string[]
}

type PostProps = {
  mdx: MDXRemoteSerializeResult<Record<string, unknown>>
  metadata: Metadata
  content: any
}

const components = {}

const Post: React.FC<PostProps> = ({ metadata, mdx }) => {
  return (
    <div>
      <p>{metadata.title}</p>

      <MDXRemote {...mdx} components={components} />
    </div>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('./src/posts')

  const paths = files.map(file => ({
    params: {
      slug: file.replace('.mdx', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug
  const file = fs.readFileSync(`./src/posts/${slug}.mdx`, 'utf-8')

  if (!file) {
    return {
      redirect: {
        destination: '/blog',
        permanent: false,
      },
    }
  }

  const { content, data: metadata } = grayMatter(file)
  const mdx = await serialize(content)

  return {
    props: {
      mdx,
      content,
      metadata: {
        ...metadata,
        slug,
      },
    },
  }
}
