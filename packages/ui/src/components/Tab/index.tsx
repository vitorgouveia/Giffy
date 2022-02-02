import React, { AnchorHTMLAttributes } from 'react'
import Link from 'next/link'

export type TabProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label?: string
  underline?: boolean
  active?: boolean
  href: string
}

export const Tab: React.FC<TabProps> = ({
  label,
  children,
  underline,
  active,
  className,
  href,
  ...rest
}) => {
  return (
    <Link href={href}>
      <a
        tabIndex={0}
        data-hover={underline ? 'underline' : 'block'}
        data-active={active}
        className="tab-link"
        {...rest}
      >
        {label || children}
      </a>
    </Link>
  )
}
