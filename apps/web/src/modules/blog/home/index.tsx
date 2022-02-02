import React from 'react'
import { NextSeo, ArticleJsonLd } from 'next-seo'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Hero, Post, Newsletter, Category } from '@giffy/ui'
import { Container, Section, PostSection, PostsGrid } from './styles'

import { MDXPost, Post as IPost } from '@lib/posts'

type HomeProps = {
  featured: MDXPost
  posts: IPost[]
}

type NewsletterFormProps = {
  email: string
}

export const Home: React.FC<HomeProps> = ({ featured, posts }) => {
  const handleNewsletterSubmit = React.useCallback(
    async ({ email }: NewsletterFormProps) => {
      const formURL = process.env.NEXT_PUBLIC_FORM_URL

      try {
        const response = await fetch(formURL, {
          method: 'POST',
          body: JSON.stringify({
            email,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const data = await response.text()
        console.log({ data })
      } catch (error) {
        console.log({ error })
      }
    },
    []
  )

  const categories = React.useMemo(() => {
    let tags: string[] = []

    posts.forEach(post => {
      post.metadata.tags.forEach(tag => tags.push(tag))
    })

    return tags
  }, [posts])

  const title = 'Explore the latest and greatest from Giffy Developer Team!'
  const description =
    'Join other Devs and enter our tech blog, explore tutorials, product design principles, app architecture, data layers and more.'
  const defaultTitle = 'Giffy Blog'
  const baseURL = 'https://vitorgouveia.github.io/Giffy'
  const authors = featured.post.metadata.authors
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
    <React.Fragment>
      {/* here goes SEO config */}
      <ArticleJsonLd
        type="Blog"
        url={`${baseURL}/blog`}
        title={`${title} | ${defaultTitle}`}
        description={description}
        images={[featured.post.metadata.thumbnailUrl]}
        datePublished={new Date(featured.post.metadata.createdAt).toISOString()}
        dateModified={new Date(featured.post.metadata.updatedAt).toISOString()}
        authorName={featured.post.metadata.authors}
      />

      <NextSeo
        title={title}
        defaultTitle={defaultTitle}
        titleTemplate={`%s | ${defaultTitle}`}
        description={description}
        openGraph={{
          title: `${title} | ${title}`,
          description,
          url: `${baseURL}/blog`,
          type: 'article',
          site_name: 'Giffy',
          article: {
            publishedTime: new Date(
              featured.post.metadata.createdAt
            ).toISOString(),
            modifiedTime: new Date(
              featured.post.metadata.updatedAt
            ).toISOString(),
            section: featured.post.metadata.type,
            authors,
            tags: featured.post.metadata.tags,
          },
          images: [
            {
              url: featured.post.metadata.thumbnailUrl,
              width: 1160,
              height: 400,
              alt: 'Thumbnail URL',
            },
          ],
        }}
      />

      <Header />

      <Container data-styled>
        <Section data-styled>
          <Hero
            headings={{
              sub: 'Our Blog',
              main: 'Enjoy the latest in content from our team.',
            }}
            post={{
              metadata: {
                ...featured.post.metadata,
                description: featured.post.metadata.description.trim(),
              },
            }}
            labels={[
              {
                href: '/blog/posts',
                label: 'Get Started',
                onClick: () => {},
              },
              {
                href: '/blog/newsletter',
                label: 'Subscribe',
                onClick: () => {},
              },
            ]}
          />
        </Section>

        <PostSection data-styled>
          {/* get the first two posts */}
          {posts.slice(0, 2).map(({ metadata }) => (
            <Post
              key={metadata.createdAt}
              metadata={metadata}
              variant="medium"
            />
          ))}
        </PostSection>

        <PostsGrid data-styled>
          <main>
            {posts.map(({ metadata }) => (
              <Post key={metadata.createdAt} metadata={metadata} />
            ))}
          </main>

          <aside>
            <Category
              label="Top Categories"
              tags={categories.map(category => ({
                label: category,
              }))}
            />

            <Category
              label="Top Posts"
              links={posts.map(({ metadata }) => ({
                label: metadata.title,
                href: `/blog/post/${metadata.slug}`,
              }))}
            />
          </aside>
        </PostsGrid>

        <Section data-styled>
          <Newsletter
            title="Join other Devs"
            description="enter the newsletter and get to know when new posts are published and receive exclusive newsletter-only content."
            onSubmit={handleNewsletterSubmit}
          />
        </Section>
      </Container>

      <Footer />
    </React.Fragment>
  )
}
