import React, { AnchorHTMLAttributes } from 'react'
import NextLink from 'next/link'

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label?: string
  href: string
  visited?: boolean
}

export const Link: React.FC<LinkProps> = ({
  children,
  label,
  visited = false,
  href,
  ...rest
}) => {
  return (
    <NextLink href={href}>
      <a tabIndex={0} data-visited={visited} className="link" {...rest}>
        {label || children}
      </a>
    </NextLink>
  )
}
