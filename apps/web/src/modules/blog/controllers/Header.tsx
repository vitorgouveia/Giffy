import React from 'react'

import { Header as BlogHeader } from '@giffy/ui'
import { homepage } from '../lib/constants'

export const Header: React.FC = () => {
  return (
    <BlogHeader
      id="blog-header"
      homepage={homepage}
      handleToggle={current => !current}
      tabs={[{ label: 'Announcements', href: '/announcements' }]}
      toggle={true}
    />
  )
}
