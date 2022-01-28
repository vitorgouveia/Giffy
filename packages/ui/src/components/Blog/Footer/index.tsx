import React from 'react'

import { BlogLogo } from '../Logo'

export type FooterProps = {
  homepage: string
}

export const Footer: React.FC<FooterProps> = ({ homepage }) => {
  return (
    <footer className="blog-footer">
      <a tabIndex={0} href={homepage}>
        <BlogLogo />
      </a>
    </footer>
  )
}
