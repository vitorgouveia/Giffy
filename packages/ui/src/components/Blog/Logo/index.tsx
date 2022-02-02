import React, { AnchorHTMLAttributes } from 'react'
import Link from 'next/link'

import { Logo } from '../../Logo'

export type BlogLogoProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

export const BlogLogo: React.FC<BlogLogoProps> = ({ href, ...rest }) => {
  return (
    <Link href={href}>
      <a tabIndex={0} className="blog-logo" {...rest}>
        <Logo />

        <strong className="blog-logo-heading">Blog</strong>
      </a>
    </Link>
  )
}
