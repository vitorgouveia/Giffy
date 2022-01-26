import React from 'react'

import { Logo } from '../../Logo'

export const BlogLogo: React.FC = () => {
  return (
    <div className="blog-logo">
      <Logo />

      <strong className="blog-logo-heading">Blog</strong>
    </div>
  )
}
