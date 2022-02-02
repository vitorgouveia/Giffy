import React, { useContext } from 'react'
import Link from 'next/link'

import { Button } from '../../Button'
import { Heading } from '../../Heading'
import { Text } from '../../Text'
import { Tag } from '../Tag'
import { dateToString } from '../../../utils/dateToString'

import { Post } from '@giffy/types'
import { List } from '../../../lib/List'
import { UIContext } from '../../../context/UIContext'

type Button = {
  label: string
  href: string
  onClick: () => void | Promise<void>
}

export type HeroProps = {
  post: Post
  headings: {
    sub: string
    main: string
  }
  labels: [Button, Button]
}

export const Hero: React.FC<HeroProps> = ({ labels, headings, post }) => {
  const smallFormattedDescription = `${post.metadata.description.substr(
    0,
    120
  )}...`
  const formattedDescription = `${post.metadata.description.substr(0, 320)}...`

  const [left, right] = labels

  const { blog } = useContext(UIContext)
  const { postsPath } = blog
  const postLink = `${postsPath}/${post.metadata.slug}`

  return (
    <section className="blog-hero">
      <header className="blog-hero-header">
        <Heading className="blog-hero-header-heading-sub" variant="h3" as="h3">
          {headings.sub}
        </Heading>

        <Heading className="blog-hero-header-heading-main" variant="h1" as="h1">
          {headings.main}
        </Heading>

        <footer className="blog-hero-header-buttons">
          <List<Button> data={[left, right]} keyExtractor={({ href }) => href}>
            {({ href, onClick, label }, index) => (
              <Link key={href} href={href}>
                <a tabIndex={0}>
                  <Button
                    onClick={onClick}
                    label={label}
                    variant={index === 0 ? 'primary' : 'outlined'}
                  />
                </a>
              </Link>
            )}
          </List>
        </footer>
      </header>

      <main className="blog-hero-content">
        <section className="blog-hero-content-post">
          <div className="blog-hero-content-post-image">
            <Link href={postLink}>
              <a href={postsPath}>
                <img
                  src={post.metadata.thumbnailUrl}
                  alt="Featured Post Thumbnail"
                />
              </a>
            </Link>
          </div>
          <header className="blog-hero-content-post-information">
            <div className="blog-hero-content-post-information-main">
              <ul className="blog-hero-content-post-information-main-tags">
                {post.metadata.tags.map(tag => (
                  <li key={tag}>
                    <Tag label={tag} />
                  </li>
                ))}
              </ul>

              <Link href={postLink}>
                <a tabIndex={0}>
                  <Heading variant="h2" as="h2" label={post.metadata.title} />
                </a>
              </Link>

              <div className="blog-hero-content-post-information-main-description-normal">
                <Text label={formattedDescription} />
              </div>

              <div className="blog-hero-content-post-information-main-description-small">
                <Text label={smallFormattedDescription} />
              </div>
            </div>
            <div className="blog-hero-content-post-information-footer">
              <p>
                {dateToString(post.metadata.createdAt)} ·{' '}
                {post.metadata.readTime}
              </p>
            </div>
          </header>
        </section>
      </main>
    </section>
  )
}
