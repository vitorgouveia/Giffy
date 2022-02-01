import React, { AnchorHTMLAttributes } from 'react'

export type TagProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label?: string
  tagsPath: string
}

export const Tag: React.FC<TagProps> = ({
  label,
  children,
  className,
  href,
  tagsPath,
  ...rest
}) => {
  return (
    <a tabIndex={0} href={`${tagsPath}/${label}`} {...rest} className="tag">
      <strong>{label || children}</strong>
    </a>
  )
}
