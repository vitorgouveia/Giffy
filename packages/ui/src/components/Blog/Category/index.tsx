import React from 'react'

import { Tag, TagProps } from '../Tag'
import { Link, LinkProps } from '../../Link'
import { Heading } from '../../Heading'
import { Modal } from '../../Modal'

import { List } from '../../../lib/List'

export type CategoryProps = {
  label: string
  tags?: TagProps[]
  links?: LinkProps[]
}

export const Category: React.FC<CategoryProps> = ({
  label,
  links = [],
  tags = [],
}) => {
  return (
    <Modal>
      <div className="category">
        <Heading
          className="category-heading"
          label={label}
          variant="h3"
          as="h3"
        />

        <main
          data-content={links.length === 0 ? 'tags' : 'links'}
          className="category-content"
        >
          {links && (
            <List<LinkProps> data={links} keyExtractor={({ label }) => label!}>
              {({ ...rest }) => <Link {...rest} />}
            </List>
          )}

          {tags && (
            <List<TagProps> data={tags} keyExtractor={({ label }) => label!}>
              {({ ...rest }) => <Tag {...rest} />}
            </List>
          )}
        </main>
      </div>
    </Modal>
  )
}
