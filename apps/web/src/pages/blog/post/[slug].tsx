import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'

import { Post, getAllPosts, getPostBySlug, MDX } from '@lib/posts'

type PostProps = {
  mdx: MDX
  post: Post
}

export const Title = () => {
  return <h1>hello world</h1>
}

const components = {
  Title,
}

export default function PostPage({ post, mdx }: PostProps) {
  const { metadata } = post

  return (
    <div>
      <p>{metadata.title}</p>

      <MDXRemote {...mdx} components={components} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = getAllPosts()
  const paths = posts.map(({ metadata }) => ({
    params: {
      slug: metadata.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  const { mdx, post } = await getPostBySlug({ slug })

  if (!post || !mdx) {
    return {
      redirect: {
        destination: '/blog',
        permanent: false,
      },
    }
  }

  return {
    props: {
      mdx,
      post,
    },
  }
}
