import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { NextSeo, ArticleJsonLd } from 'next-seo'

import { Post, getAllPosts, getPostBySlug, MDX } from '@lib/posts'
import { components } from '@modules/blog/components'
import { BlogLayout } from '@modules/layout/BlogLayout'

type PostProps = {
  mdx: MDX
  post: Post
}

export default function PostPage({ post, mdx }: PostProps) {
  const { metadata } = post
  const title = `${metadata.title}`
  const blogName = 'Giffy Blog'
  const description = metadata.description
  const baseURL = 'https://vitorgouveia.github.io/Giffy'
  const expirationTime = 1896197030051
  const authors = metadata.authors
    .map(author =>
      author.replace(' ', '-').toLocaleLowerCase().normalize('NFD')
    )
    .map(
      formattedAuthorName => `${baseURL}/blog/authors/${formattedAuthorName}`
    )
  /**
   * Vitor Neves Gomes Gouveia -> https://vitorgouveia.github.io/Giffy/blog/authors/vitor-neves-gomes-gouveia
   */

  return (
    <BlogLayout post={post}>
      <ArticleJsonLd
        type="Blog"
        url={`${baseURL}/blog`}
        title={`${title} | ${blogName}`}
        description={description}
        images={[metadata.thumbnailUrl]}
        datePublished={new Date(metadata.createdAt).toISOString()}
        dateModified={new Date(metadata.updatedAt).toISOString()}
        authorName={metadata.authors}
      />

      <NextSeo
        title={title}
        defaultTitle={blogName}
        titleTemplate={`%s | ${blogName}`}
        description={description}
        openGraph={{
          title: `${title} | ${blogName}`,
          description,
          url: `${baseURL}/blog/post/${metadata.slug}`,
          type: 'article',
          site_name: 'Giffy',
          article: {
            publishedTime: new Date(metadata.createdAt).toISOString(),
            modifiedTime: new Date(metadata.updatedAt).toISOString(),
            expirationTime: new Date(expirationTime).toISOString(),
            section: metadata.type,
            authors,
            tags: metadata.tags,
          },
          images: [
            {
              url: metadata.thumbnailUrl,
              width: 1160,
              height: 400,
              alt: 'Thumbnail URL',
            },
          ],
        }}
      />

      <MDXRemote {...mdx} components={components} />
    </BlogLayout>
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
