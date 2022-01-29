import React, { AnchorHTMLAttributes } from 'react'

export type TabProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label?: string
  underline?: boolean
  active?: boolean
}

export const Tab: React.FC<TabProps> = ({
  label,
  children,
  underline,
  active,
  className,
  ...rest
}) => {
  return (
    <a
      tabIndex={0}
      data-hover={underline ? 'underline' : 'block'}
      data-active={active}
      className="tab-link"
      {...rest}
    >
      {label || children}
    </a>
  )
}
