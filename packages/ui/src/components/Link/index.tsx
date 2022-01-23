import React, { AnchorHTMLAttributes } from 'react'

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label?: string
  visited?: boolean
}

export const Link: React.FC<LinkProps> = ({
  children,
  label,
  visited = false,
  ...rest
}) => {
  return (
    <a data-visited={visited} className="link" {...rest}>
      {label || children}
    </a>
  )
}
