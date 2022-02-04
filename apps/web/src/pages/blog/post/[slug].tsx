import { GetStaticPaths, GetStaticProps } from 'next'

import { Post } from '@giffy/types'
import { getAllPosts, getPostBySlug } from '@lib/posts'
import { PostPage } from '@modules/blog/pages/post'

export default PostPage

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

  const { posts } = getAllPosts()
  const similarPosts: Post[] = []

  posts.forEach(_post => {
    if (_post.metadata.type === post.metadata.type) {
      similarPosts.push(_post)
    }
  })

  return {
    props: {
      mdx,
      post,
      similarPosts,
    },
    revalidate: 1,
  }
}
