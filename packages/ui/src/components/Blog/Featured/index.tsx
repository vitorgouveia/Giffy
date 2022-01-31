import React from 'react'

import { List } from '../../../lib/List'
import { dateToString } from '../../../utils/dateToString'
import { Heading } from '../../Heading'
import { Text } from '../../Text'
import { Tag, TagProps } from '../Tag'

export type FeaturedProps = {
  tags: TagProps[]
  title: string
  description: string
  createdAt: string
  readTime: string
  tagsPath: string
}

export const Featured: React.FC<FeaturedProps> = ({
  tags,
  tagsPath,
  title,
  description,
  createdAt,
  readTime,
}) => {
  const smallFormattedDescription = `${description.substr(0, 120)}...`
  const formattedDescription = `${description.substr(0, 320)}...`

  return (
    <div className="featured-post">
      <div className="featured-post-image" />

      <header className="featured-post-information">
        <div className="featured-post-information-main">
          <ul className="featured-post-information-main-tags">
            <List<TagProps>
              data={tags.slice(0, 10)}
              keyExtractor={({ label }) => label!}
            >
              {({ key, label }) => (
                <li data-size="big" key={key}>
                  <Tag tagsPath={tagsPath} href={label} label={label!} />
                </li>
              )}
            </List>

            <List<TagProps>
              data={tags.slice(0, 10)}
              keyExtractor={({ label }) => label!}
            >
              {({ key, label }) => (
                <li data-size="small" key={key}>
                  <Tag tagsPath={tagsPath} href={label} label={label!} />
                </li>
              )}
            </List>
          </ul>

          <Heading variant="h2" as="h2" label={title} />

          <div className="featured-post-information-main-description-normal">
            <Text label={formattedDescription} />
          </div>

          <div className="featured-post-information-main-description-small">
            <Text label={smallFormattedDescription} />
          </div>
        </div>

        <div className="featured-post-information-footer">
          <p>
            {dateToString(createdAt)} · {readTime} read
          </p>
        </div>
      </header>
    </div>
  )
}
