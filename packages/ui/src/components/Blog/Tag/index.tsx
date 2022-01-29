import React, { AnchorHTMLAttributes } from 'react'

export type TagProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label?: string
}

export const Tag: React.FC<TagProps> = ({
  label,
  children,
  className,
  ...rest
}) => {
  return (
    <a tabIndex={0} {...rest} className="tag">
      <strong>{label || children}</strong>
    </a>
  )
}
