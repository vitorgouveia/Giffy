import React, { useContext } from 'react'
import Link from 'next/link'

import { dateToString } from '../../../utils/dateToString'
import { Heading } from '../../Heading'
import { Text } from '../../Text'
import { Tag } from '../Tag'

import { UIContext } from '@context/UIContext'
import { Post as IPost } from '@giffy/types'

export type PostProps = IPost & {
  variant?: 'small' | 'medium' | 'large'
}

export const Post: React.FC<PostProps> = ({ metadata: post, variant }) => {
  const { prefix, blog } = useContext(UIContext)
  const { postsPath } = blog

  const smallFormattedDescription = `${post.description.substr(0, 120)}...`
  const formattedDescription = `${post.description.substr(0, 500)}...`

  const formattedDate = dateToString(post.createdAt)

  const link = `${postsPath}/${post.slug}`

  return (
    <div className={`${prefix}-post ${prefix}-${variant}`}>
      <div className="image">
        <Link href={link}>
          <a>
            <img src={post.thumbnailUrl} alt="Post thumbnail" />
          </a>
        </Link>
      </div>

      <header className="information">
        <div className="main">
          <ul className="tags">
            {post.tags.map(tag => (
              <li data-size="small" key={tag}>
                <Tag label={tag} />
              </li>
            ))}
          </ul>

          <div data-size="small" className="type">
            <strong>{post.type}</strong>
          </div>

          <div data-size="medium" className="type">
            <strong>
              {post.type} · <span>{formattedDate}</span>
            </strong>
          </div>

          <Link href={link}>
            <a>
              <Heading variant="h2" as="h2" label={post.title} />
            </a>
          </Link>

          <div data-size="medium" className="description">
            <Text label={formattedDescription} />
          </div>

          <div data-size="small" className="description">
            <Text label={smallFormattedDescription} />
          </div>
        </div>

        <div className="footer">
          <ul>
            {post.tags.slice(0, 3).map(tag => (
              <li key={tag}>
                <Tag label={tag} />
              </li>
            ))}
          </ul>

          <Text label={`${formattedDate} · ${post.readTime} read`} />
        </div>
      </header>
    </div>
  )
}
