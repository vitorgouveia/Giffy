import React, { useMemo } from 'react'
import { NextSeo, ArticleJsonLd } from 'next-seo'

import { Post } from '@giffy/types'
import { Heading, dateToString } from '@giffy/ui'
import { Header } from '@modules/blog/controllers/Header'
import { Footer } from '@modules/blog/controllers/Footer'

import { Container, PostHeader, PostHeaderTitles } from './styles'

type BlogLayoutProps = {
  homepage?: {
    featured: Post
    posts: Post[]
  }
  post?: Post
}

export const BlogLayout: React.FC<BlogLayoutProps> = ({
  homepage,
  post,
  children,
}) => {
  const baseURL = 'https://vitorgouveia.github.io/Giffy'
  const blogAuthors = useMemo(() => {
    const slugify = (string: string) =>
      string.replace(' ', '-').toLocaleLowerCase().normalize('NFD')
    return homepage?.featured.metadata.authors
      .map(author => slugify(author))
      .map(formattedName => `${baseURL}/blog/authors/${formattedName}`)
    /**
     * Vitor Neves Gomes Gouveia -> https://vitorgouveia.github.io/Giffy/blog/authors/vitor-neves-gomes-gouveia
     */
  }, [homepage?.featured.metadata.authors])

  const Homepage = {
    title: 'Explore the latest and greatest from Giffy Developer Team!',
    defaultTitle: 'Giffy Blog',
    authors: blogAuthors,
    description:
      'Join other Devs and enter our tech blog, explore tutorials, product design principles, app architecture, data layers and more.',
  }

  /**
   * ===================================
   */

  const postAuthors = useMemo(() => {
    const slugify = (string: string) =>
      string.replace(' ', '-').toLocaleLowerCase().normalize('NFD')
    return post?.metadata.authors
      .map(author => slugify(author))
      .map(formattedName => `${baseURL}/blog/authors/${formattedName}`)
    /**
     * Vitor Neves Gomes Gouveia -> https://vitorgouveia.github.io/Giffy/blog/authors/vitor-neves-gomes-gouveia
     */
  }, [post?.metadata.authors])

  const Post = {
    title: post?.metadata.title,
    blogName: 'Giffy Blog',
    description: post?.metadata.description,
    expirationTime: 1896197030051,
    authors: postAuthors,
  }

  return (
    <React.Fragment>
      {post && (
        <React.Fragment>
          <ArticleJsonLd
            type="Blog"
            url={`${baseURL}/blog`}
            title={`${Post.title} | ${Post.blogName}`}
            description={Post.description!}
            images={[post.metadata.thumbnailUrl]}
            datePublished={new Date(post.metadata.createdAt).toISOString()}
            dateModified={new Date(post.metadata.updatedAt).toISOString()}
            authorName={post.metadata.authors}
          />

          <NextSeo
            title={Post.title}
            defaultTitle={Post.blogName}
            titleTemplate={`%s | ${Post.blogName}`}
            description={Post.description}
            openGraph={{
              title: `${Post.title} | ${Post.blogName}`,
              description: post.metadata.description,
              url: `${baseURL}/blog/post/${post.metadata.slug}`,
              type: 'article',
              site_name: 'Giffy',
              article: {
                publishedTime: new Date(post.metadata.createdAt).toISOString(),
                modifiedTime: new Date(post.metadata.updatedAt).toISOString(),
                expirationTime: new Date(Post.expirationTime).toISOString(),
                section: post.metadata.type,
                authors: post.metadata.authors,
                tags: post.metadata.tags,
              },
              images: [
                {
                  url: post.metadata.thumbnailUrl,
                  width: 1160,
                  height: 400,
                  alt: 'Thumbnail URL',
                },
              ],
            }}
          />
        </React.Fragment>
      )}

      {homepage && (
        <React.Fragment>
          <ArticleJsonLd
            type="Blog"
            url={`${baseURL}/blog`}
            title={`${Homepage.title} | ${Homepage.defaultTitle}`}
            description={Homepage.description}
            images={[homepage.featured.metadata.thumbnailUrl]}
            datePublished={new Date(
              homepage.featured.metadata.createdAt
            ).toISOString()}
            dateModified={new Date(
              homepage.featured.metadata.updatedAt
            ).toISOString()}
            authorName={homepage.featured.metadata.authors}
          />

          <NextSeo
            title={Homepage.title}
            defaultTitle={Homepage.defaultTitle}
            titleTemplate={`%s | ${Homepage.defaultTitle}`}
            description={Homepage.description}
            openGraph={{
              title: `${Homepage.title} | ${Homepage.defaultTitle}`,
              description: Homepage.description,
              url: `${baseURL}/blog`,
              type: 'article',
              site_name: 'Giffy',
              article: {
                publishedTime: new Date(
                  homepage.featured.metadata.createdAt
                ).toISOString(),
                modifiedTime: new Date(
                  homepage.featured.metadata.updatedAt
                ).toISOString(),
                section: homepage.featured.metadata.type,
                authors: Homepage.authors,
                tags: homepage.featured.metadata.tags,
              },
              images: [
                {
                  url: homepage.featured.metadata.thumbnailUrl,
                  width: 1160,
                  height: 400,
                  alt: 'Thumbnail URL',
                },
              ],
            }}
          />
        </React.Fragment>
      )}

      <Header />

      {post && (
        <PostHeader thumbnailUrl={post.metadata.thumbnailUrl}>
          <PostHeaderTitles>
            <Heading variant="h3" as="strong" label={post.metadata.type} />
            <Heading variant="h1" as="h1" label={post.metadata.title} />
            <Heading
              variant="h3"
              as="h3"
              label={dateToString(post.metadata.createdAt)}
            />
          </PostHeaderTitles>
        </PostHeader>
      )}

      <Container>{children}</Container>

      <Footer />
    </React.Fragment>
  )
}
