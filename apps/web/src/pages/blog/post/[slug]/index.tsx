import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { Post } from '@prisma/client'

type PostProps = {
  post: Post
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      {post.views}
      <br />
      {post.createdAt}
      <div>{post.slug}</div>
      <p>post page</p>
    </div>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const { prisma } = await import('@lib/prisma')
  const posts = await prisma.post.findMany({
    take: 50,
    orderBy: {
      createdAt: 'desc',
    },
  })

  const paths = posts.map(post => ({
    params: {
      slug: post.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { prisma } = await import('@lib/prisma')
  const post = await prisma.post.findUnique({
    where: {
      slug: params?.slug as string,
    },
  })

  if (!post) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      post: {
        ...post,
        createdAt: JSON.stringify(post.createdAt),
        updatedAt: JSON.stringify(post.updatedAt),
      },
    },
  }
}
