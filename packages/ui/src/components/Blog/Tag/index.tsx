import React, { AnchorHTMLAttributes, useContext } from 'react'
import Link from 'next/link'

import { UIContext } from '@context/UIContext'

export type TagProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string
}

export const Tag: React.FC<TagProps> = ({
  label,
  children,
  className,
  href: _,
  ...rest
}) => {
  const { blog } = useContext(UIContext)
  const { tagsPath } = blog

  return (
    <Link href={`${tagsPath}/${label}`}>
      <a tabIndex={0} {...rest} className="tag">
        <strong>{label || children}</strong>
      </a>
    </Link>
  )
}
