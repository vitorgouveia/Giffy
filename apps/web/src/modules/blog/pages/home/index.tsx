import React from 'react'
import { NextSeo, ArticleJsonLd } from 'next-seo'

import { Header } from '../../controllers/Header'
import { Footer } from '../../controllers/Footer'
import { Newsletter } from '../../controllers/Newsletter'
import { BlogLayout } from '@modules/layout/BlogLayout'
import { Hero, Post, Category } from '@giffy/ui'
import { Container, Section, PostSection, PostsGrid } from './styles'

import { Post as IPost } from '@giffy/types'
import { MDXPost } from '@lib/posts'

type HomeProps = {
  featured: MDXPost
  posts: IPost[]
}

export const Home: React.FC<HomeProps> = ({ featured, posts }) => {
  const categories = React.useMemo(() => {
    let tags: string[] = []

    posts.forEach(post => {
      post.metadata.tags.forEach(tag => tags.push(tag))
    })

    return tags
  }, [posts])

  return (
    <BlogLayout
      homepage={{
        posts,
        featured: {
          ...featured.post,
        },
      }}
    >
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
          <Post key={metadata.createdAt} metadata={metadata} variant="medium" />
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
        <Newsletter />
      </Section>
    </BlogLayout>
  )
}
