import React from 'react'

import { List } from '../../../lib/List'
import { dateToString } from '../../../utils/dateToString'
import { Heading } from '../../Heading'
import { Text } from '../../Text'
import { Tag, TagProps } from '../Tag'

export type PostProps = {
  tags: TagProps[]
  title: string
  type: string
  description: string
  createdAt: string
  readTime: string
  tagsPath: string
  variant?: 'small' | 'medium' | 'large'
}

export const Post: React.FC<PostProps> = ({
  tags,
  tagsPath,
  type,
  title,
  description,
  createdAt,
  readTime,
  variant,
}) => {
  const smallFormattedDescription = `${description.substr(0, 120)}...`
  const formattedDescription = `${description.substr(0, 500)}...`

  const formattedDate = dateToString(createdAt)

  const prefix = 'giffy_css'

  return (
    <div className={`${prefix}-post ${prefix}-${variant}`}>
      <div className="image" />

      <header className="information">
        <div className="main">
          <ul className="tags">
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

          <div data-size="small" className="type">
            <strong>{type}</strong>
          </div>

          <div data-size="medium" className="type">
            <strong>
              {type} · <span>{formattedDate}</span>
            </strong>
          </div>

          <Heading variant="h2" as="h2" label={title} />

          <div data-size="medium" className="description">
            <Text label={formattedDescription} />
          </div>

          <div data-size="small" className="description">
            <Text label={smallFormattedDescription} />
          </div>
        </div>

        <div className="footer">
          <ul>
            <List<TagProps>
              data={tags.slice(0, 4)}
              keyExtractor={({ label }) => label!}
            >
              {({ key, ...rest }) => (
                <li key={key}>
                  <Tag {...rest} />
                </li>
              )}
            </List>
          </ul>

          <Text label={`${dateToString(createdAt)} · ${readTime} read`} />
        </div>
      </header>
    </div>
  )
}
