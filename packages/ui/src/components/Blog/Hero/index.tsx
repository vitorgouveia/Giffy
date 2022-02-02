import React from 'react'

import { Button } from '../../Button'
import { Heading } from '../../Heading'
import { Text } from '../../Text'
import { Tag, TagProps } from '../Tag'
import { dateToString } from '../../../utils/dateToString'

import { List } from '../../../lib/List'

type Button = {
  label: string
  href: string
  onClick: () => void | Promise<void>
}

type Post = {
  tags: TagProps[]
  title: string
  description: string
  createdAt: string
  readTime: string
  thumbnailUrl: string
}

export type HeroProps = {
  post: Post
  postHref: string
  tagsPath: string
  headings: {
    sub: string
    main: string
  }
  labels: [Button, Button]
}

export const Hero: React.FC<HeroProps> = ({
  labels,
  headings,
  post,
  tagsPath,
  postHref,
}) => {
  const smallFormattedDescription = `${post.description.substr(0, 120)}...`
  const formattedDescription = `${post.description.substr(0, 320)}...`

  const [left, right] = labels

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
              <a key={href} tabIndex={0} href={href}>
                <Button
                  onClick={onClick}
                  label={label}
                  variant={index === 0 ? 'primary' : 'outlined'}
                />
              </a>
            )}
          </List>
        </footer>
      </header>

      <main className="blog-hero-content">
        <section className="blog-hero-content-post">
          <div className="blog-hero-content-post-image">
            <a href={postHref}>
              <img src={post.thumbnailUrl} alt="Featured Post Thumbnail" />
            </a>
          </div>
          <header className="blog-hero-content-post-information">
            <div className="blog-hero-content-post-information-main">
              <ul className="blog-hero-content-post-information-main-tags">
                <List<TagProps>
                  data={post.tags}
                  keyExtractor={({ label }) => label!}
                >
                  {({ key, label }) => (
                    <li key={key}>
                      <Tag tagsPath={tagsPath} label={label!} />
                    </li>
                  )}
                </List>
              </ul>

              <a href={postHref}>
                <Heading variant="h2" as="h2" label={post.title} />
              </a>

              <div className="blog-hero-content-post-information-main-description-normal">
                <Text label={formattedDescription} />
              </div>

              <div className="blog-hero-content-post-information-main-description-small">
                <Text label={smallFormattedDescription} />
              </div>
            </div>
            <div className="blog-hero-content-post-information-footer">
              <p>
                {dateToString(post.createdAt)} · {post.readTime}
              </p>
            </div>
          </header>
        </section>
      </main>
    </section>
  )
}
