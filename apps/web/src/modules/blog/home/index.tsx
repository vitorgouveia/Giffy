import React from 'react'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { tagsPath } from '../lib/constants'
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

export const config = {
  amp: true,
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

  return (
    <React.Fragment>
      {/* here goes SEO config */}

      <Header />

      <Container data-styled>
        <Section data-styled>
          <Hero
            postHref={`/blog/post/${featured.post.metadata.slug}`}
            headings={{
              sub: 'Our Blog',
              main: 'Enjoy the latest in content from our team.',
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
            post={{
              ...featured.post.metadata,
              description: featured.post.metadata.description.trim(),
              createdAt: new Date(
                featured.post.metadata.createdAt
              ).toISOString(),
              tags: featured.post.metadata.tags.map(tag => ({
                tagsPath,
                label: tag,
              })),
            }}
            tagsPath={tagsPath}
          />
        </Section>

        <PostSection data-styled>
          {/* get the first two posts */}
          {posts.slice(0, 2).map(({ metadata }) => (
            <Post
              postHref={`/blog/post/${metadata.slug}`}
              thumbnailUrl={metadata.thumbnailUrl}
              key={metadata.createdAt}
              title={metadata.title}
              description={metadata.description}
              readTime={metadata.readTime}
              tags={metadata.tags.map(tag => ({
                tagsPath,
                label: tag,
              }))}
              type={metadata.type}
              createdAt={new Date(metadata.createdAt).toISOString()}
              tagsPath={tagsPath}
              variant="medium"
            />
          ))}
        </PostSection>

        <PostsGrid data-styled>
          <main>
            {posts.map(({ metadata }) => (
              <Post
                postHref={`/blog/post/${metadata.slug}`}
                thumbnailUrl={metadata.thumbnailUrl}
                key={metadata.createdAt}
                title={metadata.title}
                description={metadata.description}
                readTime={metadata.readTime}
                tags={metadata.tags.map(tag => ({
                  tagsPath,
                  label: tag,
                }))}
                type={metadata.type}
                createdAt={new Date(metadata.createdAt).toISOString()}
                tagsPath={tagsPath}
                variant="small"
              />
            ))}
          </main>

          <aside>
            <Category
              label="Top Categories"
              tags={categories.map(category => ({
                tagsPath,
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
