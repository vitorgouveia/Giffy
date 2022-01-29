import React, { AnchorHTMLAttributes } from 'react'

import { Logo } from '../../Logo'

export type BlogLogoProps = AnchorHTMLAttributes<HTMLAnchorElement> & {}

export const BlogLogo: React.FC<BlogLogoProps> = ({ href, ...rest }) => {
  return (
    <a href={href} tabIndex={0} className="blog-logo" {...rest}>
      <Logo />

      <strong className="blog-logo-heading">Blog</strong>
    </a>
  )
}
