import React from 'react'

import { Header, Footer } from '@giffy/ui'
import { Post } from '@giffy/types'

type BlogLayoutProps = {
  post?: Post
}

export const BlogLayout: React.FC<BlogLayoutProps> = ({ post, children }) => {
  return (
    <React.Fragment>
      <Header
        id="blog-header"
        homepage="/blog"
        handleToggle={current => !current}
        tabs={[{ label: 'Announcements', href: '/announcements' }]}
        toggle={true}
      />

      <main>{children}</main>

      <Footer homepage="/blog" />
    </React.Fragment>
  )
}
